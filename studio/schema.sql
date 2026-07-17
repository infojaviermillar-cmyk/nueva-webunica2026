-- SQL Schema for Webunica Commerce Studio MVP

-- Table: project_design_configs
-- Stores the personalization configuration for e-commerce wireframes.
CREATE TABLE IF NOT EXISTS project_design_configs (
  project_id text PRIMARY KEY,
  selected_wireframe text NOT NULL,
  selected_style text NOT NULL,
  selected_palette text NOT NULL,
  colors jsonb NOT NULL, -- { primary, secondary, accent, background, surface, text, textMuted, border }
  fonts jsonb NOT NULL,  -- { primary, secondary }
  button_radius text NOT NULL,
  shadow text NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS (Row Level Security) Configuration
ALTER TABLE project_design_configs ENABLE ROW LEVEL SECURITY;

-- Policy: Allow authenticated users to select configs
CREATE POLICY "Allow public select of project configs" 
  ON project_design_configs FOR SELECT 
  TO public 
  USING (true);

-- Policy: Allow authenticated users to insert/update configs
CREATE POLICY "Allow public upsert of project configs" 
  ON project_design_configs FOR ALL 
  TO public 
  USING (true)
  WITH CHECK (true);
