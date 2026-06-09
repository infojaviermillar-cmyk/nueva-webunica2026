'use server'

import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function getAllUsers() {
  try {
    const adminClient = getSupabaseAdmin()
    const { data: { users }, error } = await adminClient.auth.admin.listUsers()
    
    if (error) throw error

    return { 
      success: true, 
      users: users.map(u => ({ id: u.id, email: u.email || 'Sin correo' })) 
    }
  } catch (error: any) {
    console.error('Error fetching users:', error)
    return { success: false, error: error.message, users: [] }
  }
}

export async function getAllProjects() {
  try {
    const adminClient = getSupabaseAdmin()
    const { data: projects, error } = await adminClient
      .from('client_projects')
      .select('*, auth_users:user_id(email)')
      .order('created_at', { ascending: false })
      
    // Note: since auth_users is a different schema, the join might not work out of the box in PostgREST unless there is a view.
    // If it fails, we will just fetch the projects. Let's try without the direct join to auth.users to be safe.
    
    const { data: safeProjects, error: safeError } = await adminClient
      .from('client_projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (safeError) throw safeError

    return { success: true, projects: safeProjects }
  } catch (error: any) {
    console.error('Error fetching projects:', error)
    return { success: false, error: error.message, projects: [] }
  }
}

export async function createProjectWithDesign(formData: FormData) {
  try {
    const userId = formData.get('userId') as string
    const title = formData.get('title') as string
    const imageFile = formData.get('image') as File
    
    if (!userId || !title || !imageFile) {
      throw new Error('Faltan datos obligatorios')
    }

    const adminClient = getSupabaseAdmin()

    // 1. Ensure bucket exists
    const { data: buckets } = await adminClient.storage.listBuckets()
    if (!buckets?.find(b => b.name === 'designs')) {
      await adminClient.storage.createBucket('designs', { public: true })
    }

    // 2. Upload image
    const fileExt = imageFile.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`

    const { error: uploadError } = await adminClient.storage
      .from('designs')
      .upload(fileName, imageFile, {
        upsert: false
      })

    if (uploadError) throw uploadError

    const { data: publicUrlData } = adminClient.storage.from('designs').getPublicUrl(fileName)
    const imageUrl = publicUrlData.publicUrl

    // 3. Create Project
    const { data: project, error: projectError } = await adminClient
      .from('client_projects')
      .insert({
        user_id: userId,
        title: title,
        status: 'en_revision'
      })
      .select()
      .single()

    if (projectError) throw projectError

    // 4. Create Design Version
    const { error: designError } = await adminClient
      .from('project_designs')
      .insert({
        project_id: project.id,
        image_url: imageUrl,
        version: 'v1'
      })

    if (designError) throw designError

    revalidatePath('/admin/proyectos')
    return { success: true, projectId: project.id }

  } catch (error: any) {
    console.error('Error creating project:', error)
    return { success: false, error: error.message }
  }
}
