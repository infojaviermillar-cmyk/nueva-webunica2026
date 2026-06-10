import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'
export const maxDuration = 30

export async function POST(request: NextRequest) {
  try {
    // 1. Verify the user is an admin
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const ADMIN_EMAILS = ['javiermillarv@gmail.com', 'javier@webunica.cl', 'javiermillar@gmail.com']
    if (!user || !ADMIN_EMAILS.includes(user.email || '')) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    // 2. Parse form data
    const formData = await request.formData()
    const userId = formData.get('userId') as string
    const title = formData.get('title') as string
    const imageFile = formData.get('image') as File

    if (!userId || !title || !imageFile) {
      return NextResponse.json({ error: 'Faltan datos: userId, title o imagen' }, { status: 400 })
    }

    const adminClient = getSupabaseAdmin()

    // 3. Ensure bucket exists
    const { data: buckets } = await adminClient.storage.listBuckets()
    if (!buckets?.find(b => b.name === 'designs')) {
      await adminClient.storage.createBucket('designs', { public: true })
    }

    // 4. Upload image
    const fileExt = imageFile.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { error: uploadError } = await adminClient.storage
      .from('designs')
      .upload(fileName, buffer, { contentType: imageFile.type, upsert: false })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return NextResponse.json({ error: `Error subiendo imagen: ${uploadError.message}` }, { status: 500 })
    }

    const { data: publicUrlData } = adminClient.storage.from('designs').getPublicUrl(fileName)

    // 5. Create project
    const { data: project, error: projectError } = await adminClient
      .from('client_projects')
      .insert({ user_id: userId, title, status: 'en_revision' })
      .select()
      .single()

    if (projectError) {
      console.error('Project error:', projectError)
      return NextResponse.json({ error: `Error creando proyecto: ${projectError.message}` }, { status: 500 })
    }

    // 6. Create design version
    const { error: designError } = await adminClient
      .from('project_designs')
      .insert({ project_id: project.id, image_url: publicUrlData.publicUrl, version: 'v1' })

    if (designError) {
      console.error('Design error:', designError)
      return NextResponse.json({ error: `Error creando diseño: ${designError.message}` }, { status: 500 })
    }

    return NextResponse.json({ success: true, projectId: project.id })

  } catch (err: any) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: err.message || 'Error inesperado' }, { status: 500 })
  }
}
