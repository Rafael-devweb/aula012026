'use client';

import React from 'react';

const COLUMNS = [
  { id: 'queue', label: 'Na Fila', color: 'border-slate-700' },
  { id: 'progress', label: 'Em Reparo', color: 'border-emerald-500' },
  { id: 'done', label: 'Finalizado', color: 'border-slate-500' },
];

export default function KanbanPage() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black uppercase italic text-white tracking-tighter">
            Quadro de <span className="text-emerald-500">Serviços</span>
          </h1>
          <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Fluxo de trabalho em tempo real</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black px-6 py-2 rounded-lg text-xs uppercase transition-all">
          Nova OS +
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
        {COLUMNS.map((col) => (
          <div key={col.id} className={`bg-slate-900/50 border-t-4 ${col.color} rounded-xl p-4 flex flex-col gap-4 overflow-y-auto`}>
            <h2 className="text-slate-400 font-black uppercase text-[10px] tracking-[0.2em] mb-2">
              {col.label}
            </h2>
            
            {/* Card de Exemplo de OS */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg shadow-lg group cursor-grab active:cursor-grabbing hover:border-emerald-500/50 transition-all">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-slate-900 text-emerald-500 text-[10px] px-2 py-1 rounded font-mono border border-slate-800">
                  BRA2E19
                </span>
                <span className="text-slate-600 text-[10px] font-bold">27 Fev</span>
              </div>
              <h3 className="text-white font-bold text-sm uppercase leading-tight group-hover:text-emerald-400">Troca de Amortecedores</h3>
              <p className="text-slate-500 text-xs mt-1 italic">BMW M3 Competition</p>
              <div className="mt-4 pt-4 border-t border-slate-900 flex justify-between items-center">
                <span className="text-slate-400 text-[10px] font-bold uppercase">Rafael Candido</span>
                <span className="text-emerald-500 font-mono text-xs font-bold">R$ 4.200</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}