"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchLeads() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get('q') || '';

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    if (q) {
      router.push(`/admin/leads?q=${encodeURIComponent(q)}`);
    } else {
      router.push(`/admin/leads`);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-white p-2 rounded-full border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full">
        <Search className="w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Buscar lead..." 
          defaultValue={defaultValue}
          onChange={(e) => {
            // Debounce simple
            const timeoutId = setTimeout(() => handleSearch(e), 300);
            return () => clearTimeout(timeoutId);
          }}
          className="bg-transparent border-none outline-none text-sm font-medium w-48" 
        />
      </div>
    </div>
  );
}
