-- Create the service_evaluations table
CREATE TABLE IF NOT EXISTS public.service_evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    client_name TEXT NOT NULL,
    client_role TEXT NOT NULL,
    answers JSONB NOT NULL DEFAULT '{}'::jsonb,
    average_score NUMERIC(3,2) NOT NULL DEFAULT 0.00,
    summary_quote TEXT,
    is_published BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security
ALTER TABLE public.service_evaluations ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published evaluations
CREATE POLICY "Public profiles are viewable by everyone."
    ON public.service_evaluations FOR SELECT
    USING ( is_published = true );

-- Allow admins to read all evaluations
CREATE POLICY "Admins can view all evaluations"
    ON public.service_evaluations FOR SELECT
    TO authenticated
    USING ( 
        auth.jwt() ->> 'email' IN ('javiermillarv@gmail.com', 'javier@webunica.cl', 'javiermillar@gmail.com')
    );

-- Allow admins to update evaluations (publish them)
CREATE POLICY "Admins can update evaluations"
    ON public.service_evaluations FOR UPDATE
    TO authenticated
    USING ( 
        auth.jwt() ->> 'email' IN ('javiermillarv@gmail.com', 'javier@webunica.cl', 'javiermillar@gmail.com')
    );

-- Function to securely insert an evaluation without being authenticated
-- This is needed because the client will fill out the form from a public link
CREATE OR REPLACE FUNCTION public.insert_service_evaluation(
    p_lead_id UUID,
    p_client_name TEXT,
    p_client_role TEXT,
    p_answers JSONB,
    p_average_score NUMERIC,
    p_summary_quote TEXT
) RETURNS UUID AS $$
DECLARE
    v_new_id UUID;
BEGIN
    INSERT INTO public.service_evaluations (
        lead_id, 
        client_name, 
        client_role, 
        answers, 
        average_score, 
        summary_quote, 
        is_published
    ) VALUES (
        p_lead_id,
        p_client_name,
        p_client_role,
        p_answers,
        p_average_score,
        p_summary_quote,
        false
    ) RETURNING id INTO v_new_id;
    
    RETURN v_new_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
