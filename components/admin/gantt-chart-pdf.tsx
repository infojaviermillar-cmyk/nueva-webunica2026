'use client'

import React, { useState } from 'react'
import { Download } from 'lucide-react'

export default function GanttExportButton({ project, phases }: { project: any, phases: any[] }) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleExport = async () => {
    setIsGenerating(true)
    try {
      const { default: html2canvas } = await import('html2canvas')
      const { jsPDF } = await import('jspdf')

      const el = document.getElementById('gantt-export-area')
      if (!el) return

      // Desocultar momentáneamente para renderizar
      el.style.display = 'block'
      
      const canvas = await html2canvas(el, { scale: 2, useCORS: true, logging: false })
      
      el.style.display = 'none'

      const imgData = canvas.toDataURL('image/jpeg', 0.98)
      
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'letter' })
      const pdfW = pdf.internal.pageSize.getWidth()
      const pdfH = pdf.internal.pageSize.getHeight()
      
      const margin = 20
      const contentW = pdfW - margin * 2
      const imgHeightOnPdf = (canvas.height * contentW) / canvas.width
      const pageHeightOnPdf = pdfH - margin * 2

      let heightLeft = imgHeightOnPdf
      let position = margin

      pdf.addImage(imgData, 'JPEG', margin, position, contentW, imgHeightOnPdf)
      heightLeft -= pageHeightOnPdf

      while (heightLeft > 0) {
        position -= pageHeightOnPdf
        pdf.addPage()
        pdf.addImage(imgData, 'JPEG', margin, position, contentW, imgHeightOnPdf)
        heightLeft -= pageHeightOnPdf
      }
      
      pdf.save(`Carta_Gantt_${project.title.replace(/\s+/g, '_')}.pdf`)
    } catch (e) {
      console.error(e)
      alert("Error al generar el PDF de la Carta Gantt")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      <button 
        onClick={handleExport}
        disabled={isGenerating}
        className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 rounded-full text-xs font-bold text-white transition-colors disabled:opacity-50"
      >
        {isGenerating ? (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <Download className="w-4 h-4" />
        )}
        Descargar Carta Gantt (PDF)
      </button>

      {/* Hidden Gantt Chart Area */}
      <div className="absolute top-[-9999px] left-[-9999px]">
        <div style={{ display: 'none' }} id="gantt-export-area" className="w-[1100px] bg-white p-8 font-sans border border-transparent">
          <GanttChart project={project} phases={phases} />
        </div>
      </div>
    </>
  )
}

function GanttChart({ project, phases }: { project: any, phases: any[] }) {
  const startDate = project.start_date ? new Date(project.start_date) : new Date()
  const endDate = project.deadline ? new Date(project.deadline) : new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000)
  
  const totalDays = Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)))
  
  const columnsCount = 10;
  
  let currentDayOffset = 0;
  const allTasks = phases.flatMap(p => p.tasks || [])
  const totalTasksCount = allTasks.length || 1
  const daysPerTask = totalDays / totalTasksCount

  const rows = phases.map(phase => {
    const phaseTasks = (phase.tasks || []).map((t: any) => {
      const taskStart = new Date(startDate.getTime() + currentDayOffset * 24 * 60 * 60 * 1000)
      currentDayOffset += daysPerTask
      const taskEnd = new Date(startDate.getTime() + currentDayOffset * 24 * 60 * 60 * 1000)
      
      return {
        ...t,
        computedStart: taskStart,
        computedEnd: taskEnd,
        progress: t.status === 'completado' ? 100 : 0
      }
    })
    return {
      ...phase,
      phaseTasks,
      computedStart: phaseTasks.length > 0 ? phaseTasks[0].computedStart : startDate,
      computedEnd: phaseTasks.length > 0 ? phaseTasks[phaseTasks.length - 1].computedEnd : endDate,
      progress: phaseTasks.length > 0 ? Math.round(phaseTasks.filter((t: any) => t.status === 'completado').length / phaseTasks.length * 100) : 0
    }
  })

  const formatDate = (d: Date) => d.toLocaleDateString('es-CL', { month: 'short', day: 'numeric', timeZone: 'UTC' })

  const getColSpan = (taskStart: Date, taskEnd: Date) => {
    const startPct = Math.max(0, (taskStart.getTime() - startDate.getTime()) / (endDate.getTime() - startDate.getTime()))
    const endPct = Math.min(1, (taskEnd.getTime() - startDate.getTime()) / (endDate.getTime() - startDate.getTime()))
    
    let startCol = Math.floor(startPct * columnsCount)
    let span = Math.max(0.5, Math.ceil((endPct - startPct) * columnsCount))
    
    // clamp to avoid overflow
    if (startCol + span > columnsCount) span = columnsCount - startCol
    
    return { startCol, span }
  }

  const headerCols = Array.from({length: columnsCount}).map((_, i) => {
    const colDate = new Date(startDate.getTime() + (i / columnsCount) * (endDate.getTime() - startDate.getTime()))
    return formatDate(colDate)
  })

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-black text-slate-800 uppercase tracking-widest">Diagrama de Gantt</h1>
        <h2 className="text-lg font-bold text-slate-500 uppercase tracking-widest mt-1">Progreso del Plan de Trabajo</h2>
      </div>

      <div className="flex justify-between items-center mb-6 text-xs font-bold text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div><span className="text-slate-400">Proyecto:</span> {project.title}</div>
        <div><span className="text-slate-400">Cliente:</span> {project.client_name || 'N/A'}</div>
        <div><span className="text-slate-400">Inicio:</span> {formatDate(startDate)}</div>
        <div><span className="text-slate-400">Fin (Estimado):</span> {formatDate(endDate)}</div>
      </div>

      <div className="border-t border-l border-r border-slate-200 rounded-t-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-[250px_60px_70px_70px_50px_1fr] bg-violet-600 text-white text-[9px] font-black uppercase tracking-widest">
          <div className="p-3 border-r border-violet-500">Configuración de Tareas</div>
          <div className="p-3 border-r border-violet-500 text-center">Días</div>
          <div className="p-3 border-r border-violet-500 text-center">Inicio</div>
          <div className="p-3 border-r border-violet-500 text-center">Fin</div>
          <div className="p-3 border-r border-violet-500 text-center">%</div>
          
          <div className="grid grid-cols-10 divide-x divide-violet-500">
            {headerCols.map((d, i) => (
              <div key={i} className="p-3 text-center">{d}</div>
            ))}
          </div>
        </div>

        {rows.map((phase, pIdx) => (
          <React.Fragment key={phase.id}>
            {/* Phase Row */}
            <div className="grid grid-cols-[250px_60px_70px_70px_50px_1fr] bg-slate-100 border-b border-slate-200 text-[10px] font-bold text-slate-700">
              <div className="p-2 border-r border-slate-200 truncate">{phase.phase_number}. {phase.title}</div>
              <div className="p-2 border-r border-slate-200 text-center">-</div>
              <div className="p-2 border-r border-slate-200 text-center">{formatDate(phase.computedStart)}</div>
              <div className="p-2 border-r border-slate-200 text-center">{formatDate(phase.computedEnd)}</div>
              <div className="p-2 border-r border-slate-200 text-center">{phase.progress}%</div>
              
              <div className="grid grid-cols-10 divide-x divide-slate-200 relative">
                {Array.from({length: columnsCount}).map((_, i) => <div key={i} className="h-full bg-white/50" />)}
                {(() => {
                  const pos = getColSpan(phase.computedStart, phase.computedEnd)
                  return (
                    <div className="absolute top-1 bottom-1 bg-slate-300 rounded opacity-50" 
                         style={{ left: `${(pos.startCol / columnsCount) * 100}%`, width: `${(pos.span / columnsCount) * 100}%` }} />
                  )
                })()}
              </div>
            </div>

            {/* Tasks Rows */}
            {phase.phaseTasks.map((task: any) => (
              <div key={task.id} className="grid grid-cols-[250px_60px_70px_70px_50px_1fr] border-b border-slate-200 text-[9px] font-medium text-slate-600 bg-white">
                <div className="p-2 border-r border-slate-200 truncate pl-6">{task.title}</div>
                <div className="p-2 border-r border-slate-200 text-center">{Math.ceil(daysPerTask)}</div>
                <div className="p-2 border-r border-slate-200 text-center">{formatDate(task.computedStart)}</div>
                <div className="p-2 border-r border-slate-200 text-center">{formatDate(task.computedEnd)}</div>
                <div className="p-2 border-r border-slate-200 text-center">{task.progress}%</div>
                
                <div className="grid grid-cols-10 divide-x divide-slate-100 relative">
                  {Array.from({length: columnsCount}).map((_, i) => <div key={i} className="h-full" />)}
                  {(() => {
                    const pos = getColSpan(task.computedStart, task.computedEnd)
                    const isDone = task.progress === 100
                    return (
                      <div className={`absolute top-1.5 bottom-1.5 rounded ${isDone ? 'bg-emerald-400' : 'bg-violet-400'}`} 
                           style={{ left: `${(pos.startCol / columnsCount) * 100}%`, width: `${(pos.span / columnsCount) * 100}%` }} />
                    )
                  })()}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      
      <div className="mt-8 text-center text-[10px] text-slate-400 font-medium">
        Generado automáticamente por el Sistema de Proyectos Webunica — webunica.cl
      </div>
    </>
  )
}
