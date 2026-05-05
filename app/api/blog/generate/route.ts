import { NextResponse } from 'next/server';
import { generateBlogPost } from '@/lib/openai';

export async function POST(req: Request) {
  try {
    const { topic, keywords, sources, mode } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    const post = await generateBlogPost(topic, keywords || [], sources, mode || 'basic');
    return NextResponse.json(post);
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
