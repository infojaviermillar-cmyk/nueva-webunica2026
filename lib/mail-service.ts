import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'javier@webunica.cl';

export async function sendLeadNotification(leadData: {
  name: string;
  email: string;
  service: string;
  phone: string;
}) {
  try {
    // 1. Email para el Cliente (Persuasivo)
    await resend.emails.send({
      from: 'Webunica <hola@webunica.cl>',
      to: leadData.email,
      subject: `🎁 Tu beneficio Webunica: 10% para tu proyecto de ${leadData.service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #18181b;">
          <h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; color: #7c3aed;">¡Bienvenido a la élite digital!</h1>
          <p>Hola ${leadData.name},</p>
          <p>Sabemos que buscas resultados reales, no solo un sitio web. Por haber solicitado información sobre <strong>${leadData.service}</strong>, hemos activado un beneficio exclusivo para ti.</p>
          <div style="background: #f5f3ff; border: 2px dashed #7c3aed; padding: 20px; text-align: center; border-radius: 20px; margin: 30px 0;">
            <p style="margin: 0; font-size: 12px; text-transform: uppercase; font-weight: bold; color: #7c3aed;">Tu Código de Descuento:</p>
            <h2 style="margin: 10px 0; font-size: 32px; letter-spacing: 2px;">WEBUNICA10</h2>
          </div>
          <p>Este cupón te otorga un <strong>10% de descuento directo</strong> en cualquiera de nuestros planes contratando durante los próximos 7 días.</p>
          <p>¿Qué sigue? Hablemos sobre tu visión. Responde a este correo o agenda tu sesión técnica para aplicar el descuento.</p>
          <a href="https://calendly.com/javiermillar/reunion-webunica" style="display: inline-block; background: #7c3aed; color: #fff; padding: 15px 30px; border-radius: 12px; text-decoration: none; font-weight: bold; margin-top: 20px;">Agendar Sesión Técnica con 10% OFF</a>
          <hr style="margin: 40px 0; border: 0; border-top: 1px solid #e4e4e7;" />
          <p style="font-size: 12px; color: #a1a1aa;">Webunica Agencia - Ingeniería y Diseño de Alto Vuelo en Chile.</p>
        </div>
      `
    });

    // 2. Email para el Admin (Alerta de Negocio)
    await resend.emails.send({
      from: 'Sistema Leads <leads@webunica.cl>',
      to: ADMIN_EMAIL,
      subject: `🚨 NUEVO LEAD: ${leadData.service} - ${leadData.name}`,
      html: `
        <div style="font-family: sans-serif; color: #18181b;">
          <h2 style="color: #7c3aed;">¡Nuevo prospecto interesado!</h2>
          <p>Se ha capturado un nuevo lead interesado en ${leadData.service}.</p>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Nombre:</strong> ${leadData.name}</li>
            <li><strong>Email:</strong> ${leadData.email}</li>
            <li><strong>Teléfono:</strong> ${leadData.phone}</li>
          </ul>
          <div style="margin-top: 30px;">
            <a href="https://wa.me/${leadData.phone.replace(/[^0-9]/g, '')}" style="background: #25d366; color: #fff; padding: 12px 25px; border-radius: 10px; text-decoration: none; font-weight: bold;">Contactar por WhatsApp Ahora</a>
          </div>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('[sendLeadNotification] Error:', error);
    return { success: false, error };
  }
}
