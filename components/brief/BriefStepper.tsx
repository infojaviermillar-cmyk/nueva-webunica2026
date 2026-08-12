"use client";

import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  shortTitle: string;
}

interface BriefStepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

export function BriefStepper({ steps, currentStep, onStepClick }: BriefStepperProps) {
  const currentStepObj = steps.find(s => s.id === currentStep) || steps[0];
  const progressPercent = Math.round(((currentStep - 1) / (steps.length - 1)) * 100);

  return (
    <div className="w-full bg-white border-b border-zinc-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between mb-2 text-xs">
          <div className="flex items-center gap-2 font-mono">
            <span className="px-2 py-0.5 bg-purple-100 text-purple-900 font-bold rounded-md">
              Paso {currentStep} de {steps.length}
            </span>
            <span className="font-bold text-zinc-800 hidden sm:inline">{currentStepObj.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-zinc-500 font-mono text-[11px]">{progressPercent}% completado</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 via-brand-purple to-indigo-600 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Horizontal Steps Badges (Scrollable) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <button
                key={step.id}
                onClick={() => onStepClick(step.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 font-medium transition-all cursor-pointer ${
                  isCurrent 
                    ? 'bg-zinc-950 text-white font-bold shadow-xs' 
                    : isCompleted 
                    ? 'bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100' 
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                }`}
              >
                <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold font-mono ${
                  isCurrent ? 'bg-purple-500 text-white' : isCompleted ? 'bg-purple-600 text-white' : 'bg-zinc-300 text-zinc-700'
                }`}>
                  {isCompleted ? <Check className="w-2.5 h-2.5" /> : step.id}
                </span>
                <span>{step.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
