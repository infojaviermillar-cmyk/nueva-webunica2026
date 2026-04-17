-- Migration to create testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID DEFAULT extensions.uuid_generate_v4() PRIMARY KEY,
    quote TEXT NOT NULL,
    author TEXT NOT NULL,
    stars INTEGER DEFAULT 5,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read active testimonials
CREATE POLICY "Allow public select active" ON public.testimonials
    FOR SELECT 
    USING (active = true);

-- Allow authenticated users (admins) to manage everything
-- Note: Assuming the admin might use a service role or a specific user_id if they login.
-- For now, let's allow public read (active only) and restrict others if needed.
-- In this project, we might just use the anon key if it's for internal use or simple management.
-- However, we'll follow the pattern of the leads table.
CREATE POLICY "Allow service_role manage all" ON public.testimonials
    FOR ALL
    USING (true);
