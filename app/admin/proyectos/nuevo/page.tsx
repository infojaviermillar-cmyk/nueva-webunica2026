import { getAllUsers } from '@/lib/feedback-admin-actions'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import NuevoProyectoForm from './NuevoProyectoForm'

export const dynamic = 'force-dynamic'

export default async function NuevoProyectoAdmin() {
  // Auth check
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const isAllowedAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl')
  if (!user || !isAllowedAdmin) redirect('/mi-cuenta')

  // Load users server-side (has access to service role key via env)
  const result = await getAllUsers()
  const users = result.success && result.users ? result.users : []

  return <NuevoProyectoForm users={users} />
}
