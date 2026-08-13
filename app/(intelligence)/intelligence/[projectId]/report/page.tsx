import { createClient } from '@/lib/supabase/server';
import { redirect, notFound } from 'next/navigation';
import { compileProjectReport } from '@/lib/intelligence/report-generator';
import ReportView from './report-view';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectReportPage({ params }: PageProps) {
  const { projectId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login?next=/intelligence/projects');

  const report = await compileProjectReport(projectId);
  if (!report) notFound();

  return <ReportView report={report} />;
}
