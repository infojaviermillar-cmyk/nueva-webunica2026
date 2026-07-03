'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitEvaluation, ServiceEvaluation } from '@/lib/evaluation-actions';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const QUESTIONS = [
  { id: 'q1', label: '¿Cómo calificarías la comunicación del equipo durante el proyecto?' },
  { id: 'q2', label: '¿Se cumplieron los plazos y expectativas de entrega?' },
  { id: 'q3', label: '¿Qué tan satisfecho estás con el diseño y la calidad técnica?' },
  { id: 'q4', label: '¿Qué tan probable es que nos recomiendes?' },
];

function EvaluationForm() {
  const searchParams = useSearchParams();
  const leadId = searchParams.get('leadId') || '';
  const initialName = searchParams.get('name') || '';

  const [formData, setFormData] = useState({
    clientName: initialName,
    clientRole: '',
    summaryQuote: ''
  });

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Auto-fill answers initially to 5 stars for convenience
  useEffect(() => {
    const initialAnswers: Record<string, number> = {};
    QUESTIONS.forEach(q => { initialAnswers[q.id] = 0; });
    setAnswers(initialAnswers);
  }, []);

  const handleStarClick = (questionId: string, rating: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!leadId) {
      setError('Enlace inválido. Falta el identificador del proyecto.');
      return;
    }
    if (!formData.clientName || !formData.clientRole) {
      setError('Por favor, ingresa tu nombre y cargo.');
      return;
    }
    
    // Check if all questions answered
    const unanswered = QUESTIONS.find(q => answers[q.id] === 0);
    if (unanswered) {
      setError('Por favor califica todas las preguntas con estrellas.');
      return;
    }

    if (!formData.summaryQuote) {
      setError('Por favor incluye una breve reseña de tu experiencia.');
      return;
    }

    setLoading(true);

    const average_score = Object.values(answers).reduce((a, b) => a + b, 0) / QUESTIONS.length;

    const evalData: ServiceEvaluation = {
      lead_id: leadId,
      client_name: formData.clientName,
      client_role: formData.clientRole,
      answers,
      average_score,
      summary_quote: formData.summaryQuote
    };

    const res = await submitEvaluation(evalData);
    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || 'Ocurrió un error al enviar tu evaluación.');
    }
    
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-emerald-500/10 w-24 h-24 rounded-full flex items-center justify-center mb-8 mx-auto"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-400" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">¡Gracias por tu Evaluación!</h1>
        <p className="text-zinc-400 font-medium max-w-md mx-auto mb-8">
          Tu feedback es fundamental para seguir mejorando y brindar el mejor servicio posible.
        </p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3 bg-white text-zinc-900 rounded-full font-black uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
          Volver a Webunica
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center py-12 px-6">
      
      {/* Brand Header */}
      <Link href="/" className="mb-12">
        <Image
          src="https://zktqiyrktmryfvxvntlt.supabase.co/storage/v1/object/public/images/logo_webunica.png?t=2024-06-25T17%3A40%3A23.490Z"
          alt="Webunica Logo"
          width={180}
          height={60}
          className="brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
        />
      </Link>

      <div className="w-full max-w-2xl bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="text-3xl font-black text-white tracking-tight mb-2">Evaluación de Servicio</h1>
          <p className="text-sm text-zinc-400 mb-10">
            Nos encantaría conocer tu experiencia trabajando con nuestro equipo. Esto nos ayuda a mantener nuestros estándares de calidad.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Identity Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Nombre Completo</label>
                <input 
                  type="text" 
                  value={formData.clientName}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Tu Cargo (Rol)</label>
                <input 
                  type="text" 
                  value={formData.clientRole}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientRole: e.target.value }))}
                  placeholder="Ej. CEO & Fundador"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div className="w-full h-px bg-zinc-800/50" />

            {/* Questions Array */}
            <div className="space-y-8">
              {QUESTIONS.map((q) => (
                <div key={q.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <label className="text-sm font-medium text-zinc-300 max-w-sm">{q.label}</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(q.id, star)}
                        className={`transition-all hover:scale-110 ${answers[q.id] >= star ? 'text-amber-400' : 'text-zinc-700 hover:text-zinc-500'}`}
                      >
                        <Star className="w-8 h-8 md:w-6 md:h-6" fill="currentColor" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-zinc-800/50" />

            {/* Summary Review */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Reseña de la Experiencia</label>
              <textarea 
                value={formData.summaryQuote}
                onChange={(e) => setFormData(prev => ({ ...prev, summaryQuote: e.target.value }))}
                placeholder="Cuéntanos en unas breves líneas cómo fue trabajar con nosotros y si el resultado cumplió tus expectativas..."
                rows={4}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 flex items-start gap-3 text-rose-400 text-sm font-medium">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-white text-zinc-950 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Star className="w-4 h-4" />}
              {loading ? 'Enviando...' : 'Enviar Evaluación'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function EvaluationPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-zinc-950 flex items-center justify-center"><Loader2 className="w-8 h-8 text-emerald-500 animate-spin" /></div>}>
      <EvaluationForm />
    </React.Suspense>
  );
}
