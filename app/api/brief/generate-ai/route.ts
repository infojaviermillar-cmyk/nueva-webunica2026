import { NextResponse } from 'next/server';
import { generateAIAnalysis } from '@/lib/brief-ai';
import { BriefProject } from '@/types/brief';

export async function POST(req: Request) {
  try {
    const brief: BriefProject = await req.json();
    if (!brief || !brief.projectInfo) {
      return NextResponse.json({ error: 'Datos del brief inválidos' }, { status: 400 });
    }

    const aiResult = generateAIAnalysis(brief);
    return NextResponse.json({ success: true, aiAnalysis: aiResult });
  } catch (error: any) {
    console.error('Error en API generate-ai:', error);
    return NextResponse.json({ error: error?.message || 'Error generando análisis IA' }, { status: 500 });
  }
}
