'use server';

import { supabase } from './client';

export async function saveLeadAction(email: string, selections: Record<string, string>, estimatedTotal: number) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email,
          project_type: selections['project_type'] || 'No especificado',
          ecommerce_platform: selections['ecommerce_platform'] || 'No aplica',
          design_level: selections['design_level'] || 'No especificado',
          timeline: selections['timeline'] || 'No especificado',
          budget_estimated: estimatedTotal,
          source: 'Calculadora Webunica',
          status: 'new'
        }
      ]);

    if (error) {
      console.error('Error insertando lead a Supabase:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Fetch error:', error);
    return { success: false, error: 'Hubo un error del servidor.' };
  }
}
