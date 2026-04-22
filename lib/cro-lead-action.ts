'use server';

import { supabase } from '@/lib/supabase/client';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'javier@webunica.cl';

export async function saveCroLead(data: {
  email: string;
  score: number;
  total: number;
}) {
  // 1. Save lead to DB
  if (supabase) {
    try {
      const { error: dbError } = await supabase.rpc('insert_lead', {
        p_name: 'CRO Checklist',
        p_email: data.email,
        p_phone: '',
        p_city: '',
        p_project_type: 'Auditoría CRO Shopify',
        p_source: 'CRO Checklist - Básica',
      });
      if (dbError) console.error('[saveCroLead] DB error:', dbError);
    } catch (e) {
      console.error('[saveCroLead] DB exception:', e);
    }
  }

  const scoreLabel =
    data.score <= 15 ? 'Base débil — Mejoras prioritarias'
    : data.score <= 30 ? 'Avances parciales — Fugas de conversión'
    : data.score <= 45 ? 'Base aceptable — Oportunidades claras'
    : 'Estructura sólida — Seguir optimizando';

  // 2. Email to client with 15% discount offer
  await resend.emails.send({
    from: 'Webunica <hola@webunica.cl>',
    to: data.email,
    subject: '🎯 Tu Análisis CRO Shopify + 15% descuento exclusivo',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #e4e4e7;">
        <div style="background: linear-gradient(135deg, #7c3aed, #db2777); padding: 40px 30px; text-align: center;">
          <h1 style="color: #fff; font-size: 28px; font-weight: 900; margin: 0; text-transform: uppercase; letter-spacing: -1px;">Tu Resultado CRO</h1>
          <p style="color: rgba(255,255,255,0.8); margin-top: 8px; font-size: 14px;">Checklist Básica Shopify</p>
        </div>
        <div style="padding: 40px 30px;">
          <div style="background: #f5f3ff; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 30px;">
            <p style="margin:0; font-size: 12px; font-weight: 900; text-transform: uppercase; color: #7c3aed; letter-spacing: 2px;">Tu puntaje</p>
            <h2 style="margin: 10px 0; font-size: 56px; font-weight: 900; color: #18181b;">${data.score}<span style="font-size:24px; color:#a1a1aa;">/${data.total}</span></h2>
            <p style="margin:0; font-weight: 700; color: #7c3aed;">${scoreLabel}</p>
          </div>

          <h3 style="font-size: 18px; font-weight: 900; color: #18181b; margin-bottom: 12px;">¿Qué significa tu resultado?</h3>
          <p style="color: #71717a; line-height: 1.7; margin-bottom: 20px;">
            Basándonos en tu puntaje, identificamos áreas clave donde tu tienda Shopify puede estar perdiendo conversiones. Cada punto en rojo es una oportunidad de venta que estás dejando pasar hoy.
          </p>

          <div style="border: 2px dashed #7c3aed; border-radius: 16px; padding: 24px; text-align: center; margin: 30px 0; background: #faf5ff;">
            <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #7c3aed;">Oferta exclusiva para ti</p>
            <h2 style="margin: 0 0 6px 0; font-size: 42px; font-weight: 900; color: #18181b;">15% OFF</h2>
            <p style="margin: 0 0 16px; color: #71717a; font-size: 14px;">en cualquiera de nuestros planes Shopify</p>
            <p style="margin: 0; background: #18181b; color: #fff; display: inline-block; padding: 8px 20px; border-radius: 8px; font-weight: 900; letter-spacing: 3px; font-size: 16px;">SHOPICRO15</p>
          </div>

          <h3 style="font-size: 16px; font-weight: 900; margin-bottom: 16px;">Nuestros Planes Shopify</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr style="background: #f5f3ff;">
              <td style="padding: 12px; font-weight: 700; border-radius: 8px 0 0 8px; font-size: 13px;">🔧 AJUSTE</td>
              <td style="padding: 12px; text-align: right; font-weight: 900; border-radius: 0 8px 8px 0; font-size: 13px;"><s style="color:#a1a1aa; font-size:11px;">$337.000</s> $272.000</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: 700; font-size: 13px;">🌟 PRENDE</td>
              <td style="padding: 12px; text-align: right; font-weight: 900; font-size: 13px;"><s style="color:#a1a1aa; font-size:11px;">$580.000</s> $493.000</td>
            </tr>
            <tr style="background: #f5f3ff;">
              <td style="padding: 12px; font-weight: 700; border-radius: 8px 0 0 8px; font-size: 13px;">⚙️ FULL</td>
              <td style="padding: 12px; text-align: right; font-weight: 900; border-radius: 0 8px 8px 0; font-size: 13px;"><s style="color:#a1a1aa; font-size:11px;">$780.000</s> $663.000</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: 700; font-size: 13px;">🚀 PRO</td>
              <td style="padding: 12px; text-align: right; font-weight: 900; font-size: 13px;"><s style="color:#a1a1aa; font-size:11px;">$1.200.000</s> $1.020.000</td>
            </tr>
          </table>
          <p style="font-size: 11px; color: #a1a1aa; margin-bottom: 30px;">* Todos los precios + IVA. Descuento válido por 7 días aplicando el cupón al contratar.</p>

          <div style="text-align: center;">
            <a href="https://desarrolloshopify.cl/#planes" style="display: inline-block; background: linear-gradient(135deg, #7c3aed, #db2777); color: #fff; padding: 16px 36px; border-radius: 100px; text-decoration: none; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Ver Planes con 15% OFF →</a>
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
    subject: `🎯 NUEVO LEAD CRO: ${data.email} — Score ${data.score}/${data.total}`,
    html: `
      <div style="font-family: sans-serif; color: #18181b; max-width: 500px;">
        <h2 style="color: #7c3aed;">Nuevo lead desde Checklist CRO Básica</h2>
        <ul style="list-style:none; padding:0; line-height: 2;">
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Puntaje:</strong> ${data.score} / ${data.total}</li>
          <li><strong>Diagnóstico:</strong> ${scoreLabel}</li>
          <li><strong>Fuente:</strong> CRO Checklist Básica</li>
        </ul>
        <p>Se envió email con código <strong>SHOPICRO15</strong> (15% OFF) automáticamente.</p>
      </div>
    `,
  });

  return { success: true };
}
