import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { CreateProjectInput, APIResponse, IntelProject, IntelOrganization } from '@/types/intelligence';

// ─── GET /api/intelligence/projects ─────────────────────────────────────────
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'No autenticado', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    // Get or create the user's default organization
    const org = await getOrCreateOrg(user.id, user.email || '');
    if (!org) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Error al obtener organización', code: 'ORG_ERROR' },
        { status: 500 }
      );
    }

    // Fetch projects
    const admin = getSupabaseAdmin();
    const { data: projects, error } = await admin
      .from('intel_projects')
      .select('*')
      .eq('org_id', org.id)
      .neq('status', 'archived')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Attach latest job/score summary per project
    const enriched = await Promise.all((projects || []).map(async (project) => {
      const { data: latestJob } = await admin
        .from('intel_analysis_jobs')
        .select('id, status, progress, created_at, result')
        .eq('project_id', project.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      const { data: latestScore } = await admin
        .from('intel_scores')
        .select('score, calculated_at')
        .eq('project_id', project.id)
        .order('calculated_at', { ascending: false })
        .limit(1)
        .single();

      return { ...project, latest_job: latestJob || null, latest_score: latestScore || null };
    }));

    return NextResponse.json<APIResponse<{ projects: typeof enriched; org: IntelOrganization }>>({
      success: true,
      data: { projects: enriched, org },
    });
  } catch (err: unknown) {
    console.error('[GET /api/intelligence/projects]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// ─── POST /api/intelligence/projects ────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'No autenticado', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const body = await request.json() as Partial<CreateProjectInput>;

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'El nombre del proyecto es requerido', code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }
    if (!body.domain?.trim()) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'El dominio es requerido', code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }

    // Normalize domain
    const domain = normalizeDomain(body.domain);
    if (!domain) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Dominio inválido', code: 'INVALID_DOMAIN' },
        { status: 400 }
      );
    }

    // Get or create org
    const org = await getOrCreateOrg(user.id, user.email || '');
    if (!org) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Error al obtener organización' },
        { status: 500 }
      );
    }

    const admin = getSupabaseAdmin();
    const { data: project, error } = await admin
      .from('intel_projects')
      .insert({
        org_id: org.id,
        name: body.name.trim(),
        domain,
        industry: body.industry?.trim() || null,
        country: body.country || 'CL',
        language: body.language || 'es',
        description: body.description?.trim() || null,
        objective: body.objective?.trim() || null,
        project_type: body.project_type || 'website',
        status: 'active',
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json<APIResponse<{ project: IntelProject }>>(
      { success: true, data: { project } },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error('[POST /api/intelligence/projects]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
async function getOrCreateOrg(userId: string, email: string): Promise<IntelOrganization | null> {
  const admin = getSupabaseAdmin();

  // Try to get existing org
  const { data: existing } = await admin
    .from('intel_organizations')
    .select('*')
    .eq('owner_id', userId)
    .limit(1)
    .single();

  if (existing) return existing as IntelOrganization;

  // Create default org
  const name = email.split('@')[0] || 'Mi Organización';
  const slug = `${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${userId.slice(0, 8)}`;

  const { data: created, error } = await admin
    .from('intel_organizations')
    .insert({ owner_id: userId, name, slug, plan: 'free' })
    .select()
    .single();

  if (error) {
    console.error('[getOrCreateOrg] Error creating org:', error);
    return null;
  }
  return created as IntelOrganization;
}

function normalizeDomain(raw: string): string | null {
  try {
    // Add protocol if missing
    const withProto = raw.startsWith('http') ? raw : `https://${raw}`;
    const url = new URL(withProto);
    // Remove www
    return url.hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}
