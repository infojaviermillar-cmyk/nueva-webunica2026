'use server'

import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { PROJECT_TEMPLATES, type ProjectPhase } from '@/lib/project-types'

// ——— SERVER ACTIONS ———

// Obtain phases + tasks for a project
export async function getProjectPhasesWithTasks(projectId: string) {
  try {
    const adminClient = getSupabaseAdmin()

    const { data: phases, error } = await adminClient
      .from('project_phases')
      .select(`
        *,
        project_tasks (*)
      `)
      .eq('project_id', projectId)
      .order('phase_number', { ascending: true })

    if (error) {
      console.error('Error fetching phases:', error)
      return { success: false, error: error.message, phases: [] as ProjectPhase[] }
    }

    // Sort tasks by sort_order within each phase
    const sortedPhases = (phases || []).map((phase: any) => ({
      ...phase,
      tasks: (phase.project_tasks || []).sort((a: any, b: any) => a.sort_order - b.sort_order),
    }))

    return { success: true, phases: sortedPhases as ProjectPhase[] }
  } catch (err: any) {
    console.error('Error in getProjectPhasesWithTasks:', err)
    return { success: false, error: err.message, phases: [] as ProjectPhase[] }
  }
}

// Create a project with auto-generated phases and tasks from template
export async function createProjectWithTemplate(formData: FormData) {
  try {
    const userId = formData.get('userId') as string
    const title = formData.get('title') as string
    const platform = (formData.get('platform') as string) || 'shopify'
    const clientName = formData.get('clientName') as string | null
    const clientEmail = formData.get('clientEmail') as string | null
    const startDate = formData.get('startDate') as string | null
    const deadline = formData.get('deadline') as string | null
    const stagingUrl = formData.get('stagingUrl') as string | null
    const description = formData.get('description') as string | null
    const totalPrice = formData.get('totalPrice') ? parseFloat(formData.get('totalPrice') as string) : 0
    const addonStoreLocator = formData.get('addon_store_locator') === 'on' || formData.get('addon_store_locator') === 'true'

    if (!userId || !title) throw new Error('Faltan datos obligatorios: userId y title')

    const adminClient = getSupabaseAdmin()

    // 1. Create project row
    const { data: project, error: projectError } = await adminClient
      .from('client_projects')
      .insert({
        user_id: userId,
        title,
        status: 'en_revision',
        platform,
        client_name: clientName || null,
        client_email: clientEmail || null,
        start_date: startDate || null,
        deadline: deadline || null,
        staging_url: stagingUrl || null,
        description: description || null,
        progress: 0,
        total_price: totalPrice,
      })
      .select()
      .single()

    if (projectError) throw projectError

    // 2. Create phases and tasks from the appropriate template
    const template = PROJECT_TEMPLATES[platform] || PROJECT_TEMPLATES['shopify']
    const totalPhasesCount = template.length

    for (const phaseTemplate of template) {
      const { data: phase, error: phaseError } = await adminClient
        .from('project_phases')
        .insert({
          project_id: project.id,
          phase_number: phaseTemplate.phase_number,
          title: phaseTemplate.title,
          subtitle: phaseTemplate.subtitle,
          status: 'pendiente',
          badge: phaseTemplate.badge,
        })
        .select()
        .single()

      if (phaseError) throw phaseError

      let phaseTasksList = [...phaseTemplate.tasks]

      // Inject Geolocation for Distributors tasks if addon is selected
      if (addonStoreLocator) {
        if (phaseTemplate.phase_number === 1) {
          phaseTasksList.push(
            {
              title: 'Planilla de Distribuidores y Puntos de Venta (Excel/CSV)',
              description: 'Nombres, direcciones, comuna/región, teléfonos, horarios y coordenadas',
              assigned_to: 'cliente' as const,
              detailed_info: 'Planilla consolidada con la lista de distribuidores autorizados o puntos de venta. Debe incluir: nombre del local, dirección completa, región/comuna, teléfono, horario de atención y categoría.',
            },
            {
              title: 'Diseño UI Mapa de Distribuidores y Filtros',
              description: 'Layout visual del localizador de tiendas con buscador y mapa',
              assigned_to: 'agencia' as const,
              detailed_info: 'Diseño de interfaz para la sección "Dónde Encontrarnos / Distribuidores", incluyendo buscador por comuna, botón "Cerca de mí", lista de resultados y mapa interactivo.',
            }
          )
        } else if (phaseTemplate.phase_number === Math.min(3, totalPhasesCount)) {
          phaseTasksList.push(
            {
              title: 'Desarrollo Módulo Geolocalización de Distribuidores',
              description: 'Implementación de mapa interactivo (Google Maps / Leaflet) y buscador',
              assigned_to: 'agencia' as const,
              detailed_info: 'Programación del mapa interactivo con pines personalizados, geocodificación de direcciones, cálculo de distancias y filtros por región/comuna.',
            },
            {
              title: 'Carga masiva e indexación de Puntos de Venta',
              description: 'Importación de la base de datos de distribuidores al sistema',
              assigned_to: 'agencia' as const,
              detailed_info: 'Carga e indexación de todos los puntos de venta facilitados por el cliente en el mapa interactivo.',
            }
          )
        } else if (phaseTemplate.phase_number === Math.max(1, totalPhasesCount - 1)) {
          phaseTasksList.push(
            {
              title: 'QA y Pruebas Móviles Módulo Geolocalización',
              description: 'Testing GPS "Cerca de mí", búsqueda y responsive',
              assigned_to: 'agencia' as const,
              detailed_info: 'Pruebas de funcionamiento del mapa en dispositivos móviles (iOS/Android), respuesta del GPS del usuario y experiencia de búsqueda por región.',
            }
          )
        }
      }

      const tasks = phaseTasksList.map((t, idx) => ({
        phase_id: phase.id,
        title: t.title,
        description: t.description,
        status: 'pendiente',
        sort_order: idx,
        assigned_to: t.assigned_to,
        detailed_info: t.detailed_info,
      }))

      const { error: tasksError } = await adminClient.from('project_tasks').insert(tasks)
      if (tasksError) throw tasksError
    }

    revalidatePath('/admin/proyectos')
    return { success: true, projectId: project.id }
  } catch (error: any) {
    console.error('Error creating project with template:', error)
    return { success: false, error: error.message }
  }
}

// Update the status of a single task and recalculate progress
export async function updateTaskStatus(
  taskId: string,
  status: 'pendiente' | 'en_progreso' | 'completado',
  projectId: string
) {
  try {
    const adminClient = getSupabaseAdmin()

    const { error } = await adminClient
      .from('project_tasks')
      .update({ status })
      .eq('id', taskId)

    if (error) throw error

    // Recalculate overall project progress
    await recalculateProgress(projectId)

    revalidatePath(`/admin/proyectos/${projectId}`)
    revalidatePath(`/mi-cuenta/proyectos/${projectId}`)
    return { success: true }
  } catch (error: any) {
    console.error('Error updating task status:', error)
    return { success: false, error: error.message }
  }
}

// Update the status of a phase
export async function updatePhaseStatus(
  phaseId: string,
  status: 'pendiente' | 'en_progreso' | 'completado',
  projectId: string
) {
  try {
    const adminClient = getSupabaseAdmin()

    const { error } = await adminClient
      .from('project_phases')
      .update({ status })
      .eq('id', phaseId)

    if (error) throw error

    revalidatePath(`/admin/proyectos/${projectId}`)
    revalidatePath(`/mi-cuenta/proyectos/${projectId}`)
    return { success: true }
  } catch (error: any) {
    console.error('Error updating phase status:', error)
    return { success: false, error: error.message }
  }
}

// Update project metadata (URLs, status, description, progress)
export async function updateProject(
  projectId: string,
  data: {
    title?: string
    status?: string
    staging_url?: string
    production_url?: string
    description?: string
    progress?: number
    design_url?: string
    design_tool?: string
    total_price?: number
  }
) {
  try {
    const adminClient = getSupabaseAdmin()

    const { error } = await adminClient
      .from('client_projects')
      .update(data)
      .eq('id', projectId)

    if (error) throw error

    revalidatePath(`/admin/proyectos/${projectId}`)
    revalidatePath(`/mi-cuenta/proyectos/${projectId}`)
    return { success: true }
  } catch (error: any) {
    console.error('Error updating project:', error)
    return { success: false, error: error.message }
  }
}

// Update design settings specifically
export async function updateDesignSettings(
  projectId: string,
  designUrl: string,
  designTool: string
) {
  try {
    const adminClient = getSupabaseAdmin()

    const { error } = await adminClient
      .from('client_projects')
      .update({ design_url: designUrl, design_tool: designTool })
      .eq('id', projectId)

    if (error) throw error

    revalidatePath(`/admin/proyectos/${projectId}`)
    revalidatePath(`/mi-cuenta/proyectos/${projectId}`)
    return { success: true }
  } catch (error: any) {
    console.error('Error updating design settings:', error)
    return { success: false, error: error.message }
  }
}

// Fetch full project with phases and tasks (admin use)
export async function getProjectFull(projectId: string) {
  const adminClient = getSupabaseAdmin()

  const { data: project, error: projectError } = await adminClient
    .from('client_projects')
    .select('*')
    .eq('id', projectId)
    .single()

  if (projectError || !project) {
    return { success: false, error: 'Proyecto no encontrado', project: null, phases: [] as ProjectPhase[] }
  }

  const { phases } = await getProjectPhasesWithTasks(projectId)

  return { success: true, project, phases }
}

// Internal helper: recalculate progress % based on completed tasks
async function recalculateProgress(projectId: string) {
  const adminClient = getSupabaseAdmin()

  const { data: phases } = await adminClient
    .from('project_phases')
    .select('id')
    .eq('project_id', projectId)

  if (!phases || phases.length === 0) return

  const phaseIds = phases.map((p: any) => p.id)

  const { data: allTasks } = await adminClient
    .from('project_tasks')
    .select('status')
    .in('phase_id', phaseIds)

  if (!allTasks || allTasks.length === 0) return

  const completed = allTasks.filter((t: any) => t.status === 'completado').length
  const total = allTasks.length
  const progress = Math.round((completed / total) * 100)

  await adminClient
    .from('client_projects')
    .update({ progress })
    .eq('id', projectId)
}

// Delete a project and all its phases, tasks and notes
export async function deleteProject(projectId: string) {
  try {
    const adminClient = getSupabaseAdmin()

    // Clean up related records
    await adminClient.from('project_notes').delete().eq('project_id', projectId)

    const { data: phases } = await adminClient
      .from('project_phases')
      .select('id')
      .eq('project_id', projectId)

    if (phases && phases.length > 0) {
      const phaseIds = phases.map((p: any) => p.id)
      await adminClient.from('project_tasks').delete().in('phase_id', phaseIds)
      await adminClient.from('project_phases').delete().eq('project_id', projectId)
    }

    const { error } = await adminClient
      .from('client_projects')
      .delete()
      .eq('id', projectId)

    if (error) throw error

    revalidatePath('/admin/proyectos')
    return { success: true }
  } catch (error: any) {
    console.error('Error deleting project:', error)
    return { success: false, error: error.message }
  }
}

// Update business info and brand links for a project
export async function updateProjectBusinessInfo(
  projectId: string,
  data: {
    address?: string
    phone?: string
    email?: string
    instagram?: string
    facebook?: string
    drive_link?: string
    catalog_link?: string
  }
) {
  try {
    const adminClient = getSupabaseAdmin()

    const { data: project } = await adminClient
      .from('client_projects')
      .select('description')
      .eq('id', projectId)
      .single()

    let parsedDesc: any = {}
    try {
      if (project?.description && project.description.startsWith('{')) {
        parsedDesc = JSON.parse(project.description)
      } else {
        parsedDesc = { notes: project?.description || '' }
      }
    } catch {
      parsedDesc = { notes: project?.description || '' }
    }

    const updatedPayload = {
      ...parsedDesc,
      business_info: {
        ...(parsedDesc.business_info || {}),
        ...data,
      },
    }

    const { error } = await adminClient
      .from('client_projects')
      .update({ description: JSON.stringify(updatedPayload) })
      .eq('id', projectId)

    if (error) throw error

    revalidatePath(`/admin/proyectos/${projectId}`)
    revalidatePath(`/mi-cuenta/proyectos/${projectId}`)
    revalidatePath(`/proyecto/${projectId}`)

    return { success: true }
  } catch (error: any) {
    console.error('Error updating business info:', error)
    return { success: false, error: error.message }
  }
}


