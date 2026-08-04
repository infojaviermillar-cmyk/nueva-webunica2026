'use client';

import { useState, useMemo } from 'react';
import {
  TrendingUp, TrendingDown, DollarSign, BarChart3,
  Plus, Trash2, ChevronDown, X, Loader2, Check,
  ArrowUpRight, ArrowDownRight, Calendar, Tag, CreditCard,
  Building2, FileText, StickyNote, User
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Gasto {
  id: string;
  fecha: string;
  descripcion: string;
  categoria: string;
  monto: number;
  metodo_pago: string;
  proveedor?: string | null;
  notas?: string | null;
  created_at: string;
}

interface Ingreso {
  id: string;
  fecha: string;
  descripcion: string;
  categoria: string;
  monto: number;
  cliente?: string | null;
  tipo_pago: string;
  referencia?: string | null;
  notas?: string | null;
  created_at: string;
}

interface Props {
  initialGastos: Gasto[];
  initialIngresos: Ingreso[];
  currentYear: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIAS_GASTOS = [
  'Sueldos y Honorarios',
  'Arriendo y Servicios Básicos',
  'Marketing y Publicidad',
  'Software y Suscripciones',
  'Equipamiento y Tecnología',
  'Impuestos y Contabilidad',
  'Proveedores y Subcontratos',
  'Transporte y Movilización',
  'Capacitación y Desarrollo',
  'Otros Gastos',
];

const CATEGORIAS_INGRESOS = [
  'Desarrollo Web',
  'Desarrollo Shopify',
  'Mantención Mensual',
  'Consultoría',
  'Capacitación',
  'Licencias',
  'Publicidad Digital',
  'Otros Ingresos',
];

const METODOS_PAGO = ['Transferencia', 'Efectivo', 'Tarjeta Débito', 'Tarjeta Crédito', 'Cheque'];

const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const CAT_COLORS: Record<string, string> = {
  'Sueldos y Honorarios': 'bg-red-100 text-red-700',
  'Arriendo y Servicios Básicos': 'bg-orange-100 text-orange-700',
  'Marketing y Publicidad': 'bg-yellow-100 text-yellow-700',
  'Software y Suscripciones': 'bg-purple-100 text-purple-700',
  'Equipamiento y Tecnología': 'bg-blue-100 text-blue-700',
  'Impuestos y Contabilidad': 'bg-zinc-100 text-zinc-700',
  'Proveedores y Subcontratos': 'bg-pink-100 text-pink-700',
  'Transporte y Movilización': 'bg-cyan-100 text-cyan-700',
  'Capacitación y Desarrollo': 'bg-indigo-100 text-indigo-700',
  'Otros Gastos': 'bg-slate-100 text-slate-600',
  'Desarrollo Web': 'bg-emerald-100 text-emerald-700',
  'Desarrollo Shopify': 'bg-green-100 text-green-700',
  'Mantención Mensual': 'bg-teal-100 text-teal-700',
  'Consultoría': 'bg-lime-100 text-lime-700',
  'Capacitación': 'bg-sky-100 text-sky-700',
  'Licencias': 'bg-violet-100 text-violet-700',
  'Publicidad Digital': 'bg-amber-100 text-amber-700',
  'Otros Ingresos': 'bg-slate-100 text-slate-600',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCLP(amount: number): string {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(amount);
}

function parseMonto(raw: string): number {
  return parseInt(raw.replace(/\D/g, ''), 10) || 0;
}

function formatMontoInput(raw: string): string {
  const num = raw.replace(/\D/g, '');
  if (!num) return '';
  return new Intl.NumberFormat('es-CL').format(parseInt(num, 10));
}

function getMonth(dateStr: string): number {
  return parseInt(dateStr.split('-')[1], 10);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function KpiCard({
  label, value, icon, color, trend
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: 'green' | 'red' | 'violet' | 'blue';
  trend?: { value: string; positive: boolean } | null;
}) {
  const colorMap = {
    green: 'bg-green-50 border-green-100 text-green-600',
    red: 'bg-red-50 border-red-100 text-red-500',
    violet: 'bg-violet-50 border-violet-100 text-violet-600',
    blue: 'bg-blue-50 border-blue-100 text-blue-600',
  };
  const iconBg = {
    green: 'bg-green-100',
    red: 'bg-red-100',
    violet: 'bg-violet-100',
    blue: 'bg-blue-100',
  };

  return (
    <div className={`p-7 border rounded-[2rem] bg-white shadow-xl shadow-slate-100/60`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${iconBg[color]} rounded-2xl flex items-center justify-center ${colorMap[color]}`}>
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trend.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
            {trend.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {trend.value}
          </div>
        )}
      </div>
      <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter">{value}</div>
    </div>
  );
}

function CategoryBadge({ cat }: { cat: string }) {
  const cls = CAT_COLORS[cat] ?? 'bg-slate-100 text-slate-600';
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide ${cls}`}>
      {cat}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FinanzasClient({ initialGastos, initialIngresos, currentYear }: Props) {
  const [activeTab, setActiveTab] = useState<'resumen' | 'gasto' | 'ingreso' | 'historial'>('resumen');
  const [gastos, setGastos] = useState<Gasto[]>(initialGastos);
  const [ingresos, setIngresos] = useState<Ingreso[]>(initialIngresos);

  // Filter state for historial
  const [filterTipo, setFilterTipo] = useState<'todos' | 'gastos' | 'ingresos'>('todos');
  const [filterMes, setFilterMes] = useState<string>('todos');

  // Delete confirmation
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<'gasto' | 'ingreso' | null>(null);

  // Toast notification
  const [toast, setToast] = useState<{ msg: string; type: 'ok' | 'err' } | null>(null);

  // Gasto form state
  const [gastoForm, setGastoForm] = useState({
    fecha: new Date().toISOString().split('T')[0],
    descripcion: '',
    categoria: '',
    montoRaw: '',
    metodo_pago: 'Transferencia',
    proveedor: '',
    notas: '',
  });
  const [gastoSaving, setGastoSaving] = useState(false);
  const [gastoErrors, setGastoErrors] = useState<Record<string, string>>({});

  // Ingreso form state
  const [ingresoForm, setIngresoForm] = useState({
    fecha: new Date().toISOString().split('T')[0],
    descripcion: '',
    categoria: '',
    montoRaw: '',
    tipo_pago: 'Transferencia',
    cliente: '',
    referencia: '',
    notas: '',
  });
  const [ingresoSaving, setIngresoSaving] = useState(false);
  const [ingresoErrors, setIngresoErrors] = useState<Record<string, string>>({});

  // ── Computed KPIs ────────────────────────────────────────────────────────────

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;

  const gastosMesActual = useMemo(() => gastos.filter(g => getMonth(g.fecha) === currentMonth), [gastos, currentMonth]);
  const gastosMesAnterior = useMemo(() => gastos.filter(g => getMonth(g.fecha) === prevMonth), [gastos, prevMonth]);
  const ingresosMesActual = useMemo(() => ingresos.filter(i => getMonth(i.fecha) === currentMonth), [ingresos, currentMonth]);
  const ingresosMesAnterior = useMemo(() => ingresos.filter(i => getMonth(i.fecha) === prevMonth), [ingresos, prevMonth]);

  const totalGastosMes = gastosMesActual.reduce((a, g) => a + g.monto, 0);
  const totalIngresosMes = ingresosMesActual.reduce((a, i) => a + i.monto, 0);
  const balanceMes = totalIngresosMes - totalGastosMes;

  const totalGastosAnio = gastos.reduce((a, g) => a + g.monto, 0);
  const totalIngresosAnio = ingresos.reduce((a, i) => a + i.monto, 0);

  const prevGastos = gastosMesAnterior.reduce((a, g) => a + g.monto, 0);
  const prevIngresos = ingresosMesAnterior.reduce((a, i) => a + i.monto, 0);

  // Monthly breakdown for resumen table
  const monthlyData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const mes = i + 1;
      const g = gastos.filter(x => getMonth(x.fecha) === mes).reduce((a, x) => a + x.monto, 0);
      const ing = ingresos.filter(x => getMonth(x.fecha) === mes).reduce((a, x) => a + x.monto, 0);
      return { mes, nombre: MESES[i], gastos: g, ingresos: ing, balance: ing - g };
    });
  }, [gastos, ingresos]);

  // Filtered historial
  const historialFiltrado = useMemo(() => {
    const gastoItems = gastos.map(g => ({ ...g, _tipo: 'gasto' as const }));
    const ingresoItems = ingresos.map(i => ({ ...i, _tipo: 'ingreso' as const }));

    let combined: ((Gasto & { _tipo: 'gasto' }) | (Ingreso & { _tipo: 'ingreso' }))[] = [];

    if (filterTipo === 'todos') combined = [...gastoItems, ...ingresoItems];
    else if (filterTipo === 'gastos') combined = gastoItems;
    else combined = ingresoItems;

    if (filterMes !== 'todos') {
      const m = parseInt(filterMes, 10);
      combined = combined.filter(x => getMonth(x.fecha) === m);
    }

    return combined.sort((a, b) => b.fecha.localeCompare(a.fecha));
  }, [gastos, ingresos, filterTipo, filterMes]);

  // ── Toast ────────────────────────────────────────────────────────────────────

  function showToast(msg: string, type: 'ok' | 'err') {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }

  // ── Gasto Submit ─────────────────────────────────────────────────────────────

  async function handleGastoSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!gastoForm.fecha) errs.fecha = 'Requerido';
    if (!gastoForm.descripcion.trim()) errs.descripcion = 'Requerido';
    if (!gastoForm.categoria) errs.categoria = 'Requerido';
    if (!gastoForm.montoRaw) errs.monto = 'Requerido';

    if (Object.keys(errs).length) { setGastoErrors(errs); return; }
    setGastoErrors({});
    setGastoSaving(true);

    try {
      const res = await fetch('/api/finanzas/gastos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha: gastoForm.fecha,
          descripcion: gastoForm.descripcion,
          categoria: gastoForm.categoria,
          monto: parseMonto(gastoForm.montoRaw),
          metodo_pago: gastoForm.metodo_pago,
          proveedor: gastoForm.proveedor || null,
          notas: gastoForm.notas || null,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Error al guardar');

      setGastos(prev => [json.gasto, ...prev]);
      setGastoForm({ fecha: new Date().toISOString().split('T')[0], descripcion: '', categoria: '', montoRaw: '', metodo_pago: 'Transferencia', proveedor: '', notas: '' });
      showToast('Gasto registrado correctamente', 'ok');
      setActiveTab('resumen');
    } catch (err: any) {
      showToast(err.message, 'err');
    } finally {
      setGastoSaving(false);
    }
  }

  // ── Ingreso Submit ────────────────────────────────────────────────────────────

  async function handleIngresoSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!ingresoForm.fecha) errs.fecha = 'Requerido';
    if (!ingresoForm.descripcion.trim()) errs.descripcion = 'Requerido';
    if (!ingresoForm.categoria) errs.categoria = 'Requerido';
    if (!ingresoForm.montoRaw) errs.monto = 'Requerido';

    if (Object.keys(errs).length) { setIngresoErrors(errs); return; }
    setIngresoErrors({});
    setIngresoSaving(true);

    try {
      const res = await fetch('/api/finanzas/ingresos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha: ingresoForm.fecha,
          descripcion: ingresoForm.descripcion,
          categoria: ingresoForm.categoria,
          monto: parseMonto(ingresoForm.montoRaw),
          tipo_pago: ingresoForm.tipo_pago,
          cliente: ingresoForm.cliente || null,
          referencia: ingresoForm.referencia || null,
          notas: ingresoForm.notas || null,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Error al guardar');

      setIngresos(prev => [json.ingreso, ...prev]);
      setIngresoForm({ fecha: new Date().toISOString().split('T')[0], descripcion: '', categoria: '', montoRaw: '', tipo_pago: 'Transferencia', cliente: '', referencia: '', notas: '' });
      showToast('Ingreso registrado correctamente', 'ok');
      setActiveTab('resumen');
    } catch (err: any) {
      showToast(err.message, 'err');
    } finally {
      setIngresoSaving(false);
    }
  }

  // ── Delete ────────────────────────────────────────────────────────────────────

  async function confirmDelete() {
    if (!deletingId || !deleteType) return;

    try {
      const endpoint = deleteType === 'gasto' ? 'gastos' : 'ingresos';
      const res = await fetch(`/api/finanzas/${endpoint}/${deletingId}`, { method: 'DELETE' });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Error al eliminar');

      if (deleteType === 'gasto') setGastos(prev => prev.filter(g => g.id !== deletingId));
      else setIngresos(prev => prev.filter(i => i.id !== deletingId));

      showToast('Registro eliminado', 'ok');
    } catch (err: any) {
      showToast(err.message, 'err');
    } finally {
      setDeletingId(null);
      setDeleteType(null);
    }
  }

  // ── Shared input styles ───────────────────────────────────────────────────────
  const inputCls = (err?: string) =>
    `w-full px-4 py-3 bg-white border ${err ? 'border-red-400' : 'border-slate-200'} rounded-2xl text-sm text-slate-900 outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition placeholder-slate-400`;

  const labelCls = 'block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5';

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="relative">

      {/* ── Toast ── */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-sm font-bold text-white transition-all ${toast.type === 'ok' ? 'bg-emerald-600' : 'bg-red-500'}`}>
          {toast.type === 'ok' ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
          {toast.msg}
        </div>
      )}

      {/* ── Delete confirmation modal ── */}
      {deletingId && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 shadow-2xl max-w-sm w-full text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">¿Eliminar registro?</h3>
            <p className="text-slate-500 text-sm mb-8">Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button
                onClick={() => { setDeletingId(null); setDeleteType(null); }}
                className="flex-1 py-3 rounded-2xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 rounded-2xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Tabs ── */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {([
          { id: 'resumen', label: '📊 Resumen' },
          { id: 'gasto', label: '➖ Nuevo Gasto' },
          { id: 'ingreso', label: '➕ Nuevo Ingreso' },
          { id: 'historial', label: '📋 Historial' },
        ] as const).map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* TAB: RESUMEN                                                           */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'resumen' && (
        <div className="space-y-8">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <KpiCard
              label={`Ingresos ${MESES[currentMonth - 1]}`}
              value={formatCLP(totalIngresosMes)}
              icon={<TrendingUp className="w-6 h-6" />}
              color="green"
              trend={prevIngresos > 0 ? {
                value: `${Math.abs(Math.round((totalIngresosMes - prevIngresos) / prevIngresos * 100))}%`,
                positive: totalIngresosMes >= prevIngresos
              } : null}
            />
            <KpiCard
              label={`Gastos ${MESES[currentMonth - 1]}`}
              value={formatCLP(totalGastosMes)}
              icon={<TrendingDown className="w-6 h-6" />}
              color="red"
              trend={prevGastos > 0 ? {
                value: `${Math.abs(Math.round((totalGastosMes - prevGastos) / prevGastos * 100))}%`,
                positive: totalGastosMes <= prevGastos
              } : null}
            />
            <KpiCard
              label={`Balance ${MESES[currentMonth - 1]}`}
              value={formatCLP(balanceMes)}
              icon={<DollarSign className="w-6 h-6" />}
              color={balanceMes >= 0 ? 'violet' : 'red'}
            />
            <KpiCard
              label={`Balance Año ${currentYear}`}
              value={formatCLP(totalIngresosAnio - totalGastosAnio)}
              icon={<BarChart3 className="w-6 h-6" />}
              color="blue"
            />
          </div>

          {/* Monthly Table */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-100/60 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100">
              <h2 className="text-xl font-black text-slate-900 tracking-tighter">Resumen Mensual {currentYear}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <th className="text-left px-8 py-4">Mes</th>
                    <th className="text-right px-6 py-4">Ingresos</th>
                    <th className="text-right px-6 py-4">Gastos</th>
                    <th className="text-right px-8 py-4">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((row) => (
                    <tr
                      key={row.mes}
                      className={`border-t border-slate-50 transition-colors hover:bg-slate-50/60 ${row.mes === currentMonth ? 'bg-violet-50/40' : ''}`}
                    >
                      <td className="px-8 py-4 font-bold text-slate-900">
                        {row.nombre}
                        {row.mes === currentMonth && (
                          <span className="ml-2 text-[9px] font-black bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded-full uppercase tracking-wider">Actual</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-emerald-600 font-bold">
                        {row.ingresos > 0 ? formatCLP(row.ingresos) : <span className="text-slate-300">—</span>}
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-red-500 font-bold">
                        {row.gastos > 0 ? formatCLP(row.gastos) : <span className="text-slate-300">—</span>}
                      </td>
                      <td className={`px-8 py-4 text-right font-mono font-black ${row.balance > 0 ? 'text-emerald-600' : row.balance < 0 ? 'text-red-500' : 'text-slate-300'}`}>
                        {row.ingresos > 0 || row.gastos > 0 ? formatCLP(row.balance) : <span className="text-slate-300">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-slate-200 bg-slate-50 font-black">
                    <td className="px-8 py-4 text-xs uppercase tracking-widest text-slate-500">Total Año</td>
                    <td className="px-6 py-4 text-right font-mono text-emerald-600 text-base">{formatCLP(totalIngresosAnio)}</td>
                    <td className="px-6 py-4 text-right font-mono text-red-500 text-base">{formatCLP(totalGastosAnio)}</td>
                    <td className={`px-8 py-4 text-right font-mono text-base ${totalIngresosAnio - totalGastosAnio >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {formatCLP(totalIngresosAnio - totalGastosAnio)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setActiveTab('gasto')}
              className="flex items-center gap-3 p-6 bg-white border border-red-100 rounded-[2rem] shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all text-left group"
            >
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-sm uppercase tracking-wider">Registrar Gasto</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Añadir un nuevo gasto</div>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('ingreso')}
              className="flex items-center gap-3 p-6 bg-white border border-green-100 rounded-[2rem] shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all text-left group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-sm uppercase tracking-wider">Registrar Ingreso</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Añadir un nuevo ingreso</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* TAB: NUEVO GASTO                                                       */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'gasto' && (
        <div className="max-w-2xl">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-100/60 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tighter">Nuevo Gasto</h2>
                <p className="text-sm text-slate-400">Registra un gasto de la empresa</p>
              </div>
            </div>

            <form onSubmit={handleGastoSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}><Calendar className="inline w-3 h-3 mr-1" />Fecha *</label>
                  <input
                    type="date"
                    value={gastoForm.fecha}
                    onChange={e => setGastoForm(f => ({ ...f, fecha: e.target.value }))}
                    className={inputCls(gastoErrors.fecha)}
                  />
                  {gastoErrors.fecha && <p className="text-red-500 text-xs mt-1">{gastoErrors.fecha}</p>}
                </div>
                <div>
                  <label className={labelCls}><DollarSign className="inline w-3 h-3 mr-1" />Monto (CLP) *</label>
                  <input
                    type="text"
                    placeholder="$ 0"
                    value={gastoForm.montoRaw}
                    onChange={e => setGastoForm(f => ({ ...f, montoRaw: formatMontoInput(e.target.value) }))}
                    className={inputCls(gastoErrors.monto)}
                  />
                  {gastoErrors.monto && <p className="text-red-500 text-xs mt-1">{gastoErrors.monto}</p>}
                </div>
              </div>

              <div>
                <label className={labelCls}><FileText className="inline w-3 h-3 mr-1" />Descripción *</label>
                <input
                  type="text"
                  placeholder="Ej: Pago hosting servidor Digital Ocean"
                  value={gastoForm.descripcion}
                  onChange={e => setGastoForm(f => ({ ...f, descripcion: e.target.value }))}
                  className={inputCls(gastoErrors.descripcion)}
                />
                {gastoErrors.descripcion && <p className="text-red-500 text-xs mt-1">{gastoErrors.descripcion}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}><Tag className="inline w-3 h-3 mr-1" />Categoría *</label>
                  <select
                    value={gastoForm.categoria}
                    onChange={e => setGastoForm(f => ({ ...f, categoria: e.target.value }))}
                    className={inputCls(gastoErrors.categoria)}
                  >
                    <option value="">Selecciona...</option>
                    {CATEGORIAS_GASTOS.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {gastoErrors.categoria && <p className="text-red-500 text-xs mt-1">{gastoErrors.categoria}</p>}
                </div>
                <div>
                  <label className={labelCls}><CreditCard className="inline w-3 h-3 mr-1" />Método de Pago</label>
                  <select
                    value={gastoForm.metodo_pago}
                    onChange={e => setGastoForm(f => ({ ...f, metodo_pago: e.target.value }))}
                    className={inputCls()}
                  >
                    {METODOS_PAGO.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls}><Building2 className="inline w-3 h-3 mr-1" />Proveedor / A quién se pagó</label>
                <input
                  type="text"
                  placeholder="Ej: Digital Ocean, SII, Freelancer Juan Pérez..."
                  value={gastoForm.proveedor}
                  onChange={e => setGastoForm(f => ({ ...f, proveedor: e.target.value }))}
                  className={inputCls()}
                />
              </div>

              <div>
                <label className={labelCls}><StickyNote className="inline w-3 h-3 mr-1" />Notas (opcional)</label>
                <textarea
                  rows={2}
                  placeholder="N° de factura, observaciones..."
                  value={gastoForm.notas}
                  onChange={e => setGastoForm(f => ({ ...f, notas: e.target.value }))}
                  className={`${inputCls()} resize-none`}
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('resumen')}
                  className="px-6 py-3 border border-slate-200 text-slate-600 font-bold text-sm rounded-2xl hover:bg-slate-50 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={gastoSaving}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-500 hover:bg-red-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl transition disabled:opacity-60"
                >
                  {gastoSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                  {gastoSaving ? 'Guardando...' : 'Registrar Gasto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* TAB: NUEVO INGRESO                                                     */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'ingreso' && (
        <div className="max-w-2xl">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-100/60 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tighter">Nuevo Ingreso</h2>
                <p className="text-sm text-slate-400">Registra un ingreso de la empresa</p>
              </div>
            </div>

            <form onSubmit={handleIngresoSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}><Calendar className="inline w-3 h-3 mr-1" />Fecha *</label>
                  <input
                    type="date"
                    value={ingresoForm.fecha}
                    onChange={e => setIngresoForm(f => ({ ...f, fecha: e.target.value }))}
                    className={inputCls(ingresoErrors.fecha)}
                  />
                  {ingresoErrors.fecha && <p className="text-red-500 text-xs mt-1">{ingresoErrors.fecha}</p>}
                </div>
                <div>
                  <label className={labelCls}><DollarSign className="inline w-3 h-3 mr-1" />Monto (CLP) *</label>
                  <input
                    type="text"
                    placeholder="$ 0"
                    value={ingresoForm.montoRaw}
                    onChange={e => setIngresoForm(f => ({ ...f, montoRaw: formatMontoInput(e.target.value) }))}
                    className={inputCls(ingresoErrors.monto)}
                  />
                  {ingresoErrors.monto && <p className="text-red-500 text-xs mt-1">{ingresoErrors.monto}</p>}
                </div>
              </div>

              <div>
                <label className={labelCls}><FileText className="inline w-3 h-3 mr-1" />Descripción *</label>
                <input
                  type="text"
                  placeholder="Ej: Pago hito 2 desarrollo Shopify cliente X"
                  value={ingresoForm.descripcion}
                  onChange={e => setIngresoForm(f => ({ ...f, descripcion: e.target.value }))}
                  className={inputCls(ingresoErrors.descripcion)}
                />
                {ingresoErrors.descripcion && <p className="text-red-500 text-xs mt-1">{ingresoErrors.descripcion}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}><Tag className="inline w-3 h-3 mr-1" />Categoría *</label>
                  <select
                    value={ingresoForm.categoria}
                    onChange={e => setIngresoForm(f => ({ ...f, categoria: e.target.value }))}
                    className={inputCls(ingresoErrors.categoria)}
                  >
                    <option value="">Selecciona...</option>
                    {CATEGORIAS_INGRESOS.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {ingresoErrors.categoria && <p className="text-red-500 text-xs mt-1">{ingresoErrors.categoria}</p>}
                </div>
                <div>
                  <label className={labelCls}><CreditCard className="inline w-3 h-3 mr-1" />Tipo de Pago</label>
                  <select
                    value={ingresoForm.tipo_pago}
                    onChange={e => setIngresoForm(f => ({ ...f, tipo_pago: e.target.value }))}
                    className={inputCls()}
                  >
                    {METODOS_PAGO.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}><User className="inline w-3 h-3 mr-1" />Cliente</label>
                  <input
                    type="text"
                    placeholder="Nombre del cliente..."
                    value={ingresoForm.cliente}
                    onChange={e => setIngresoForm(f => ({ ...f, cliente: e.target.value }))}
                    className={inputCls()}
                  />
                </div>
                <div>
                  <label className={labelCls}><FileText className="inline w-3 h-3 mr-1" />N° Referencia / Cotización</label>
                  <input
                    type="text"
                    placeholder="Ej: COT-2026-047"
                    value={ingresoForm.referencia}
                    onChange={e => setIngresoForm(f => ({ ...f, referencia: e.target.value }))}
                    className={inputCls()}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}><StickyNote className="inline w-3 h-3 mr-1" />Notas (opcional)</label>
                <textarea
                  rows={2}
                  placeholder="Observaciones adicionales..."
                  value={ingresoForm.notas}
                  onChange={e => setIngresoForm(f => ({ ...f, notas: e.target.value }))}
                  className={`${inputCls()} resize-none`}
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('resumen')}
                  className="px-6 py-3 border border-slate-200 text-slate-600 font-bold text-sm rounded-2xl hover:bg-slate-50 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={ingresoSaving}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm uppercase tracking-widest rounded-2xl transition disabled:opacity-60"
                >
                  {ingresoSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                  {ingresoSaving ? 'Guardando...' : 'Registrar Ingreso'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* TAB: HISTORIAL                                                          */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'historial' && (
        <div className="space-y-6">

          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex gap-2">
              {([
                { v: 'todos', label: 'Todos' },
                { v: 'ingresos', label: '💚 Ingresos' },
                { v: 'gastos', label: '🔴 Gastos' },
              ] as const).map(opt => (
                <button
                  key={opt.v}
                  onClick={() => setFilterTipo(opt.v)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition ${
                    filterTipo === opt.v ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <select
              value={filterMes}
              onChange={e => setFilterMes(e.target.value)}
              className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-black text-slate-700 outline-none"
            >
              <option value="todos">Todos los meses</option>
              {MESES.map((m, i) => <option key={i} value={String(i + 1)}>{m}</option>)}
            </select>

            <span className="ml-auto text-xs font-black text-slate-400 uppercase tracking-widest">
              {historialFiltrado.length} registro{historialFiltrado.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Table */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-100/60 overflow-hidden">
            {historialFiltrado.length === 0 ? (
              <div className="py-20 text-center">
                <div className="text-4xl mb-3">📭</div>
                <p className="text-slate-400 font-bold">No hay registros para mostrar</p>
                <p className="text-slate-300 text-sm mt-1">Ajusta los filtros o agrega nuevos registros</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-xs font-black text-slate-400 uppercase tracking-widest">
                      <th className="text-left px-6 py-4">Tipo</th>
                      <th className="text-left px-4 py-4">Fecha</th>
                      <th className="text-left px-4 py-4">Descripción</th>
                      <th className="text-left px-4 py-4">Categoría</th>
                      <th className="text-left px-4 py-4">Cliente / Proveedor</th>
                      <th className="text-right px-4 py-4">Monto</th>
                      <th className="text-center px-6 py-4">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historialFiltrado.map((item) => {
                      const isIngreso = item._tipo === 'ingreso';
                      const contacto = isIngreso
                        ? (item as Ingreso & { _tipo: 'ingreso' }).cliente
                        : (item as Gasto & { _tipo: 'gasto' }).proveedor;
                      return (
                        <tr key={item.id} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors group">
                          <td className="px-6 py-4">
                            <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full w-fit ${
                              isIngreso ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
                            }`}>
                              {isIngreso ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                              {isIngreso ? 'Ingreso' : 'Gasto'}
                            </span>
                          </td>
                          <td className="px-4 py-4 font-mono text-xs text-slate-500 whitespace-nowrap">{item.fecha}</td>
                          <td className="px-4 py-4 font-medium text-slate-900 max-w-[200px] truncate">{item.descripcion}</td>
                          <td className="px-4 py-4"><CategoryBadge cat={item.categoria} /></td>
                          <td className="px-4 py-4 text-slate-500 text-xs truncate max-w-[120px]">{contacto || <span className="text-slate-300">—</span>}</td>
                          <td className={`px-4 py-4 text-right font-mono font-black ${isIngreso ? 'text-emerald-600' : 'text-red-500'}`}>
                            {isIngreso ? '+' : '-'}{formatCLP(item.monto)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => { setDeletingId(item.id); setDeleteType(item._tipo); }}
                              className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                              title="Eliminar"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
