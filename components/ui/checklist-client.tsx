'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';

interface ChecklistSection {
  title: string;
  items: string[];
}

interface ChecklistClientProps {
  title: string;
  description: string;
  rawText: string;
  storageKey: string;
}

export default function ChecklistClient({ title, description, rawText, storageKey }: ChecklistClientProps) {
  const [sections, setSections] = useState<ChecklistSection[]>([]);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Parse the raw text
    const parsedSections: ChecklistSection[] = [];
    let currentSection: ChecklistSection | null = null;
    const lines = rawText.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        // Detect section headers (surrounded by =====)
        if (line.match(/^={10,}$/) && lines[i+1]) {
            const nextLine = lines[i+1].trim();
            if (nextLine.match(/^\d+\./) || nextLine.startsWith('RESULTADO') || nextLine.startsWith('CIERRE')) {
                currentSection = { title: nextLine, items: [] };
                parsedSections.push(currentSection);
                i += 2; // skip the header text and the closing =====
                continue;
            }
        }
        
        if (currentSection && line.startsWith('[ ]')) {
            currentSection.items.push(line.replace('[ ]', '').trim());
        }
    }
    setSections(parsedSections.filter(s => s.items.length > 0));

    // Load from local storage
    const saved = localStorage.getItem(storageKey);
    if (saved) {
        try {
            setCheckedItems(JSON.parse(saved));
        } catch (e) {
            console.error("Error parsing saved checklist state");
        }
    }
  }, [rawText, storageKey]);

  useEffect(() => {
      if (Object.keys(checkedItems).length > 0) {
        localStorage.setItem(storageKey, JSON.stringify(checkedItems));
      }
  }, [checkedItems, storageKey]);

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
      const key = `${sectionIndex}-${itemIndex}`;
      setCheckedItems(prev => ({
          ...prev,
          [key]: !prev[key]
      }));
  };

  const totalItems = sections.reduce((acc, sec) => acc + sec.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage = totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-10 sticky top-4 z-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Avance del Proyecto</span>
          <span className="text-2xl font-black text-violet-600">{progressPercentage}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-violet-600 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-slate-500 mt-3 font-medium">
          {completedItems} de {totalItems} tareas completadas
        </p>
      </div>

      {/* Checklist Rendering */}
      <div className="space-y-12">
          {sections.map((section, sIdx) => {
              const sectionCompleted = section.items.filter((_, i) => checkedItems[`${sIdx}-${i}`]).length;
              const isAllDone = sectionCompleted === section.items.length;

              return (
                <div key={sIdx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
                    <div className="bg-slate-50 px-8 py-5 border-b border-slate-200 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-slate-800">{section.title}</h2>
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${isAllDone ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>
                            {sectionCompleted} / {section.items.length}
                        </span>
                    </div>
                    <div className="p-4">
                        {section.items.map((item, iIdx) => {
                            const isChecked = !!checkedItems[`${sIdx}-${iIdx}`];
                            return (
                                <div 
                                    key={iIdx}
                                    onClick={() => toggleItem(sIdx, iIdx)}
                                    className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-colors ${isChecked ? 'bg-violet-50/50' : 'hover:bg-slate-50'}`}
                                >
                                    <button className="mt-0.5 flex-shrink-0 text-violet-600 focus:outline-none">
                                        {isChecked ? (
                                            <CheckCircle2 className="w-6 h-6 text-violet-600" />
                                        ) : (
                                            <Circle className="w-6 h-6 text-slate-300" />
                                        )}
                                    </button>
                                    <span className={`text-base select-none transition-colors ${isChecked ? 'text-slate-500 line-through' : 'text-slate-700 font-medium'}`}>
                                        {item}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
              );
          })}
      </div>
    </div>
  );
}
