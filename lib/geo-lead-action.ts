'use server';

import { supabase } from '@/lib/supabase/client';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'javier@webunica.cl';

export async function saveGeoLead(data: {
  email: string;
  score: number;
  total: number;
}) {
  // 1. Save lead to DB
  if (supabase) {
    try {
      const { error: dbError } = await supabase.rpc('insert_lead', {
        p_name: 'Shopify GEO Checklist',
        p_email: data.email,
        p_phone: '',
        p_city: '',
        p_project_type: 'Auditoría GEO Shopify',
        p_source: 'Shopify GEO Checklist',
      });
      if (dbError) console.error('[saveGeoLead] DB error:', dbError);
    } catch (e) {
      console.error('[saveGeoLead] DB exception:', e);
    }
  }

  const pct = Math.round((data.score / data.total) * 100);
  const scoreLabel =
    pct < 30 ? 'Score Bajo — La IA no puede identificarte ni citarte'
    : pct < 60 ? 'Score Medio — Visible parcialmente, falta estructura'
    : pct < 85 ? 'Score Alto — Bien posicionado, optimizar contenido'
    : 'Score Élite — Referente citado de forma consistente';

  // 2. Email to client with GEO audit follow-up
  await resend.emails.send({
    from: 'Webunica <consultas@webunica.cl>',
    to: data.email,
    subject: '🤖 Tu Diagnóstico GEO Shopify — Webunica',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #e4e4e7;">
        <div style="background: linear-gradient(135deg, #6d28d9, #10b981); padding: 40px 30px; text-align: center;">
          <h1 style="color: #fff; font-size: 28px; font-weight: 900; margin: 0; text-transform: uppercase; letter-spacing: -1px;">Tu Resultado GEO</h1>
          <p style="color: rgba(255,255,255,0.8); margin-top: 8px; font-size: 14px;">Generative Engine Optimization para Shopify</p>
        </div>
        <div style="padding: 40px 30px;">
          <div style="background: #f0fdf4; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 30px; border: 1px solid #dcfce7;">
            <p style="margin:0; font-size: 12px; font-weight: 900; text-transform: uppercase; color: #10b981; letter-spacing: 2px;">Tu puntaje</p>
            <h2 style="margin: 10px 0; font-size: 56px; font-weight: 900; color: #18181b;">${data.score}<span style="font-size:24px; color:#a1a1aa;">/${data.total}</span></h2>
            <p style="margin:0; font-weight: 700; color: #10b981;">${scoreLabel} (${pct}%)</p>
          </div>

          <h3 style="font-size: 18px; font-weight: 900; color: #18181b; margin-bottom: 12px;">¿Qué significa tu resultado?</h3>
          <p style="color: #71717a; line-height: 1.7; margin-bottom: 20px;">
            Tu tienda Shopify ha sido evaluada en 8 áreas clave de GEO (Generative Engine Optimization). 
            Los motores de IA (ChatGPT, Gemini, Perplexity, Claude) indexan, clasifican y citan marcas basándose en datos estructurados semánticos (Schema.org), archivos de contexto (/llms.txt, /ai.txt) y contenido optimizado para respuestas (AEO).
          </p>

          <div style="background: #f9fafb; border-radius: 12px; padding: 20px; border: 1px solid #f3f4f6; margin-bottom: 30px;">
            <h4 style="margin:0 0 10px 0; font-size:14px; font-weight:900;">Siguientes Pasos Recomendados:</h4>
            <ol style="margin:0; padding-left:20px; font-size:13px; color:#4b5563; line-height:1.8;">
              <li>Crear tus archivos de contexto <strong>llms.txt</strong> y <strong>ai.txt</strong>.</li>
              <li>Configurar tu robots.txt para habilitar los crawlers GPTBot, ClaudeBot y Google-Extended.</li>
              <li>Añadir schemas globales críticos (Organization, LocalBusiness y WebSite).</li>
            </ol>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://webunica.cl/geo-ai-visibility" style="display: inline-block; background: linear-gradient(135deg, #6d28d9, #10b981); color: #fff; padding: 16px 36px; border-radius: 100px; text-decoration: none; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Consultoría GEO Webunica →</a>
          </div>

          <hr style="margin: 40px 0; border: 0; border-top: 1px solid #e4e4e7;" />
          <p style="font-size: 12px; color: #a1a1aa; text-align: center; margin: 0;">Webunica — Agencia Shopify Chile · javier@webunica.cl</p>
        </div>
      </div>
    `,
  });

  // 3. Notification to admin
  await resend.emails.send({
    from: 'Sistema Leads <leads@webunica.cl>',
    to: ADMIN_EMAIL,
    subject: `🤖 NUEVO LEAD GEO: ${data.email} — Score ${data.score}/${data.total}`,
    html: `
      <div style="font-family: sans-serif; color: #18181b; max-width: 500px;">
        <h2 style="color: #6d28d9;">Nuevo lead desde Checklist GEO Shopify</h2>
        <ul style="list-style:none; padding:0; line-height: 2;">
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Puntaje:</strong> ${data.score} / ${data.total}</li>
          <li><strong>Diagnóstico:</strong> ${scoreLabel}</li>
          <li><strong>Porcentaje:</strong> ${pct}%</li>
          <li><strong>Fuente:</strong> GEO Shopify Checklist</li>
        </ul>
        <p>Se envió email con diagnóstico GEO automáticamente.</p>
      </div>
    `,
  });

  return { success: true };
}
