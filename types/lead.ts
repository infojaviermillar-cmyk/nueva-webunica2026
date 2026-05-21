export type LeadStatus = 'new' | 'contacted' | 'quoted' | 'closed' | 'lost';

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
}
