'use server'

import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export type ProjectNote = {
  id: string
  project_id: string
  content: string
  author_type: 'admin' | 'cliente'
  author_email: string | null
  created_at: string
}

export async function getProjectNotes(projectId: string): Promise<{ success: boolean; notes: ProjectNote[] }> {
  try {
    const adminClient = getSupabaseAdmin()
    const { data, error } = await adminClient
      .from('project_notes')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: true })

    if (error) {
      // Table may not exist yet — return empty gracefully
      console.warn('project_notes table not found or error:', error.message)
      return { success: true, notes: [] }
    }

    return { success: true, notes: (data || []) as ProjectNote[] }
  } catch (err: any) {
    console.error('getProjectNotes error:', err)
    return { success: true, notes: [] }
  }
}

export async function addProjectNote(
  projectId: string,
  content: string,
  authorType: 'admin' | 'cliente'
): Promise<{ success: boolean; note?: ProjectNote; error?: string }> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const adminClient = getSupabaseAdmin()

    let authorEmail = user?.email || null
    if (!authorEmail && authorType === 'cliente') {
      const { data: proj } = await adminClient
        .from('client_projects')
        .select('client_email')
        .eq('id', projectId)
        .single()
      if (proj?.client_email) {
        authorEmail = proj.client_email
      }
    }

    const { data, error } = await adminClient
      .from('project_notes')
      .insert({
        project_id: projectId,
        content: content.trim(),
        author_type: authorType,
        author_email: authorEmail,
      })
      .select()
      .single()

    if (error) throw error

    revalidatePath(`/admin/proyectos/${projectId}`)
    revalidatePath(`/mi-cuenta/proyectos/${projectId}`)
    revalidatePath(`/proyecto/${projectId}`)

    return { success: true, note: data as ProjectNote }
  } catch (err: any) {
    console.error('addProjectNote error:', err)
    return { success: false, error: err.message }
  }
}

