-- ==========================================
-- WEBUNICA - REDISEÑO SISTEMA DE SEGUIMIENTO
-- Ejecutar en Supabase SQL Editor
-- ==========================================

-- 1. Agregar columnas para la fase de diseño UX/UI en client_projects
ALTER TABLE public.client_projects
  ADD COLUMN IF NOT EXISTS design_url TEXT,
  ADD COLUMN IF NOT EXISTS design_tool TEXT DEFAULT 'figma';

-- 'design_tool' puede ser 'figma' o 'adobe_xd'
