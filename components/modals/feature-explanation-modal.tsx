"use client";

import React, { useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeatureExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function FeatureExplanationModal({ isOpen, onClose, title, description }: FeatureExplanationModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/85 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white w-full max-w-md rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button UI */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-600 transition-colors z-20 bg-zinc-100 rounded-full p-1.5"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Visual */}
            <div className="bg-zinc-950 p-6 sm:py-8 sm:px-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/30 blur-[60px] rounded-full" />
              <div className="w-16 h-16 mx-auto mb-4 relative bg-violet-600/20 rounded-full flex items-center justify-center border border-violet-500/30">
                <Info className="w-8 h-8 text-violet-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter leading-tight">{title}</h2>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto custom-scrollbar p-6 sm:p-8">
              <div className="prose prose-zinc prose-sm sm:prose-base prose-p:leading-relaxed font-light text-zinc-600">
                {description.split('\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-zinc-100 bg-zinc-50">
               <button 
                 onClick={onClose}
                 className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-800 transition-all shadow-lg active:scale-95"
               >
                 Entendido
               </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
