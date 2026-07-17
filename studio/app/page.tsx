import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-slate-50 text-slate-900">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex flex-col items-center">
          <Bot className="w-16 h-16 text-indigo-600 mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight">Webunica Commerce Studio</h1>
          <p className="mt-3 text-slate-500">Simulador interactivo de e-commerce en tiempo real</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-4">
          <p className="text-sm text-slate-600">Bienvenido al MVP de previsualización y personalización de wireframes para tiendas online.</p>
          <Link
            href="/login"
            className="group w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-all"
          >
            Ingresar al Panel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
