'use client'

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Interfaces bem definidas facilitam a manutenção
interface ClienteFormData {
  nome: string;
  documento: string;
  contato: string;
  veiculo: {
    placa: string;
    modelo: string;
    ano: string;
  };
}

export default function RegistroFluxoCliente() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // Estado único para o formulário - Performance de renderização
  const [formData, setFormData] = useState<ClienteFormData>({
    nome: '', documento: '', contato: '',
    veiculo: { placa: '', modelo: '', ano: '' }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de delay de rede (Node logic)
    await new Promise(res => setTimeout(res, 1000));
    
    console.log("Payload Gerado:", formData);
    setLoading(false);
    // router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      
      {/* Barra de Progresso Superior Sutil */}
      <div className="h-1 w-full bg-slate-900 overflow-hidden">
        <div className={`h-full bg-emerald-500 transition-all duration-700 ${loading ? 'w-full' : 'w-1/3'}`} />
      </div>

      <main className="max-w-6xl mx-auto p-6 lg:p-12">
        
        {/* Header Estratégico */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-emerald-500 mb-2">
              <span className="h-[2px] w-8 bg-emerald-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Módulo de Recepção</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
              Check-in de <span className="text-emerald-500">Frota</span>
            </h1>
          </div>

          <Link href="/usuarios" className="group flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-full hover:border-emerald-500/50 transition-all">
             <span className="text-xs font-bold uppercase tracking-widest group-hover:text-emerald-400 transition-colors">Voltar ao Painel</span>
             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </Link>
        </header>

        {/* Formulário de Alta Performance */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Coluna 01: Identidade */}
          <section className="lg:col-span-5 space-y-8 bg-slate-900/30 p-8 rounded-3xl border border-slate-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500 font-black">01</div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-slate-100">Titular da OS</h2>
            </div>

            <div className="space-y-6">
              <InputGroup label="Nome Completo" placeholder="Ex: Magnus Walker" />
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="CPF/CNPJ" placeholder="000.000.000-00" />
                <InputGroup label="Telefone" placeholder="+55 11..." />
              </div>
            </div>
          </section>

          {/* Coluna 02: Ativos (Veículo) */}
          <section className="lg:col-span-7 space-y-8 bg-slate-900/10 p-8 rounded-3xl border border-dashed border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black shadow-[0_0_20px_rgba(16,185,129,0.3)]">02</div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-slate-100">Identificação do Ativo</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Placa" placeholder="ABC-1234" isHighlight />
              <InputGroup label="Ano Fabricação" placeholder="2024" />
              <div className="md:col-span-2">
                <InputGroup label="Marca & Modelo" placeholder="Porsche 911 GT3 RS" />
              </div>
            </div>

            <div className="pt-6">
              <button 
                disabled={loading}
                className="w-full relative group overflow-hidden bg-white hover:bg-emerald-500 py-5 rounded-2xl transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-slate-950 font-black uppercase text-sm tracking-[0.2em]">
                    {loading ? 'Processando...' : 'Finalizar Registro'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </section>

        </form>
      </main>
    </div>
  );
}

/** * Subcomponente de Input Reutilizável 
 * Encapsula a lógica de estilo para manter o JSX limpo (Padrão Senior)
 */
function InputGroup({ label, placeholder, isHighlight = false }: { label: string, placeholder: string, isHighlight?: boolean }) {
  return (
    <div className="group flex flex-col gap-2">
      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] group-focus-within:text-emerald-500 transition-colors">
        {label}
      </label>
      <input 
        type="text" 
        placeholder={placeholder}
        className={`
          bg-slate-950 border-2 border-slate-800 rounded-xl p-4 
          text-slate-100 outline-none transition-all duration-300
          placeholder:text-slate-800 font-bold text-sm
          focus:border-emerald-500 focus:shadow-[0_0_25px_rgba(16,185,129,0.1)]
          ${isHighlight ? 'border-emerald-500/30 text-emerald-400 italic' : ''}
        `}
      />
    </div>
  );
}