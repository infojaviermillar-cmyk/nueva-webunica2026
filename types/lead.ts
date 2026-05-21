export type LeadStatus = 'new' | 'contacted' | 'quoted' | 'closed' | 'lost';

export interface ProjectStage {
  id: string;
  name: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed';
  completed_at?: string | null;
  created_at: string;
}

export interface LeadProject {
  name: string;
  description?: string;
  start_date?: string;
  delivery_date?: string;
  stages: ProjectStage[];
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  service_interest?: string;
  project_type?: string;
  source?: string;
  message?: string;
  status?: string;
  welcome_email_sent?: boolean;
  welcome_email_sent_at?: string;
  created_at: string;
  notes?: string;
  project?: LeadProject;
}

