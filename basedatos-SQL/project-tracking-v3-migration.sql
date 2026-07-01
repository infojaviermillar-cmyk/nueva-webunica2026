-- ==========================================
-- WEBUNICA - REDISEÑO SISTEMA DE SEGUIMIENTO (V3)
-- Ejecutar en Supabase SQL Editor
-- ==========================================

-- 1. Agregar precio total a los proyectos
ALTER TABLE public.client_projects
  ADD COLUMN IF NOT EXISTS total_price NUMERIC DEFAULT 0;

-- 2. Agregar responsable y detalles a las tareas
ALTER TABLE public.project_tasks
  ADD COLUMN IF NOT EXISTS assigned_to VARCHAR(50) DEFAULT 'agencia',
  ADD COLUMN IF NOT EXISTS detailed_info TEXT;

-- 'assigned_to' puede ser 'cliente' o 'agencia'
