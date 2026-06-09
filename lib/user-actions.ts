'use server'

import { getSupabaseAdmin } from '@/lib/supabase/admin'

export async function createClientUserAccount(email: string, rut: string, name: string) {
  try {
    if (!email || !rut) {
      return { success: false, error: "El email y el RUT son obligatorios para crear la cuenta." }
    }

    const adminClient = getSupabaseAdmin()

    // Create user in Supabase Auth
    // The password will be exactly the RUT entered
    const { data: user, error } = await adminClient.auth.admin.createUser({
      email: email,
      password: rut,
      email_confirm: true,
      user_metadata: {
        name: name,
        rut: rut
      }
    })

    if (error) {
      if (error.message.includes('already been registered')) {
        return { success: false, error: "Ya existe un usuario registrado con este correo." }
      }
      return { success: false, error: error.message }
    }

    return { success: true, message: "Usuario creado exitosamente.", userId: user.user.id }

  } catch (err: any) {
    console.error("Error creating user account:", err)
    return { success: false, error: err.message || "Error desconocido al crear usuario" }
  }
}
