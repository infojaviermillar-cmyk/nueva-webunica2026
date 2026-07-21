import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

let openaiInstance: any = null;
function getOpenAI() {
  if (!openaiInstance) {
    const { OpenAI } = require('openai');
    openaiInstance = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return openaiInstance;
}

/**
 * POST /api/blog/generate-image
 * Body: { prompt: string, slug: string }
 * Returns: { cover_image: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { prompt, slug } = await req.json();
    if (!prompt || !slug) {
      return NextResponse.json({ error: 'Faltan parámetros prompt o slug' }, { status: 400 });
    }

    const openai = getOpenAI();

    // 1. Generar imagen con DALL-E 3
    const imageResponse = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1792x1024',
      quality: 'standard',
    });

    const tempUrl = imageResponse.data?.[0]?.url;
    if (!tempUrl) throw new Error('DALL-E no devolvió URL de imagen');

    // 2. Descargar y persistir en Supabase Storage
    const imgRes = await fetch(tempUrl);
    const imgBuffer = await imgRes.arrayBuffer();

    const adminClient = getSupabaseAdmin();
    const fileName = `${slug.substring(0, 40)}-${Date.now()}.png`;

    const { error: uploadError } = await adminClient.storage
      .from('blog')
      .upload(fileName, Buffer.from(imgBuffer), { contentType: 'image/png', upsert: true });

    if (uploadError) {
      // Intentar crear bucket si no existe
      if (uploadError.message.toLowerCase().includes('not found')) {
        await adminClient.storage.createBucket('blog', { public: true });
        await adminClient.storage
          .from('blog')
          .upload(fileName, Buffer.from(imgBuffer), { contentType: 'image/png', upsert: true });
      } else {
        throw uploadError;
      }
    }

    // 3. Devolver URL pública permanente
    const { data: pubData } = adminClient.storage.from('blog').getPublicUrl(fileName);
    return NextResponse.json({ cover_image: pubData.publicUrl });

  } catch (err: any) {
    console.error('[generate-image] Error:', err);
    return NextResponse.json({ error: err.message || 'Error al generar imagen' }, { status: 500 });
  }
}
