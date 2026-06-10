'use server'

import { createClient } from '@/lib/supabase/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

const ADMIN_EMAILS = ['javiermillarv@gmail.com', 'javier@webunica.cl', 'javiermillar@gmail.com']

export type ClientProject = {
  id: string
  user_id: string
  title: string
  status: string
  created_at: string
}

export type ProjectDesign = {
  id: string
  project_id: string
  image_url: string
  version: string
  created_at: string
}

export type DesignPin = {
  id: string
  design_id: string
  x_percent: number
  y_percent: number
  marker_number: number
  status: string
  created_at: string
}

export type PinComment = {
  id: string
  pin_id: string
  user_id: string | null
  content: string
  attachment_url: string | null
  created_at: string
  profiles?: {
    first_name: string
    last_name: string
  } // Optional join if there's a profiles table
}

// 1. Get all projects for the logged in client
export async function getClientProjects() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, projects: [] }

  const isAdmin = ADMIN_EMAILS.includes(user.email || '')

  // Admins see all projects, clients only see their own
  const query = isAdmin
    ? getSupabaseAdmin().from('client_projects').select('*').order('created_at', { ascending: false })
    : supabase.from('client_projects').select('*').eq('user_id', user.id).order('created_at', { ascending: false })

  const { data: projects, error } = await query

  if (error) {
    console.error('Error fetching projects:', error)
    return { success: false, error: error.message, projects: [] }
  }

  return { success: true, projects: projects as ClientProject[], isAdmin }
}

// 2. Get a specific project with its latest design
export async function getProjectWithDesign(projectId: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }

  const isAdmin = ADMIN_EMAILS.includes(user.email || '')

  // Admins bypass user_id filter using service role client
  const client = isAdmin ? getSupabaseAdmin() : supabase
  const query = client.from('client_projects').select('*').eq('id', projectId)
  if (!isAdmin) query.eq('user_id', user.id)

  const { data: project, error: projectError } = await query.single()

  if (projectError || !project) {
    return { success: false, error: 'Project not found' }
  }

  // Get latest design
  const { data: designs } = await client
    .from('project_designs')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at', { ascending: false })
    .limit(1)

  return { 
    success: true, 
    project: project as ClientProject, 
    design: designs && designs.length > 0 ? (designs[0] as ProjectDesign) : null,
    isAdmin
  }
}

// 3. Get pins and comments for a design
export async function getDesignPins(designId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const isAdmin = ADMIN_EMAILS.includes(user?.email || '')
  const client = isAdmin ? getSupabaseAdmin() : supabase
  
  const { data: pins, error } = await client
    .from('design_pins')
    .select(`
      *,
      pin_comments (
        id,
        user_id,
        content,
        attachment_url,
        created_at
      )
    `)
    .eq('design_id', designId)
    .order('marker_number', { ascending: true })

  if (error) {
    console.error('Error fetching pins:', error)
    return { success: false, error: error.message, pins: [] }
  }

  return { success: true, pins }
}

// 4. Create a new pin
export async function createPin(designId: string, xPercent: number, yPercent: number, markerNumber: number) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }

  const { data: pin, error } = await supabase
    .from('design_pins')
    .insert({
      design_id: designId,
      x_percent: xPercent,
      y_percent: yPercent,
      marker_number: markerNumber,
      status: 'abierto'
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating pin:', error)
    return { success: false, error: error.message }
  }

  revalidatePath(`/mi-cuenta/proyectos`)
  return { success: true, pin }
}

// 5. Create a comment on a pin
export async function createComment(pinId: string, content: string, attachmentUrl: string | null = null) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }

  const { data: comment, error } = await supabase
    .from('pin_comments')
    .insert({
      pin_id: pinId,
      user_id: user.id,
      content: content,
      attachment_url: attachmentUrl
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating comment:', error)
    return { success: false, error: error.message }
  }

  revalidatePath(`/mi-cuenta/proyectos`)
  return { success: true, comment }
}
