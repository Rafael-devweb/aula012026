"use client"

import Link from "next/link";
import ClienteForm from "../components/ClienteForm"; // Caminho atualizado para Cliente

export default function CadastrarCliente() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-950 selection:bg-emerald-500/30">
      {/* Main Wrapper: Sem bordas ou fundos separados. 
        O conteúdo flutua diretamente sobre o bg-slate-950.
      */}
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16 lg:px-12 animate-in fade-in slide-in-from-top-4 duration-700">
        
        <header className="mb-16">
          {/* Link de volta minimalista */}
          <Link 
            href="/clientes" 
            className="group mb-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 transition-all hover:text-emerald-500"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> 
            Voltar para Listagem
          </Link>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-emerald-500"></span>
              <h1 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">
                Novo Registro de Oficina
              </h1>
            </div>
            
            <h2 className="text-5xl font-light italic text-white leading-tight">
              Cadastrar <span className="font-black text-white not-italic">Cliente</span>
            </h2>
            
            <p className="max-w-md text-xs font-medium leading-relaxed text-slate-500 uppercase tracking-widest pt-2">
              Insira os dados fundamentais para abertura de ordens de serviço e histórico veicular.
            </p>
          </div>
        </header>

        {/* Section de Formulário: 
          Removido o bg-neutral-900/20 e a border. 
          Agora o formulário é um elemento direto da página.
        */}
        <section className="w-full">
          <ClienteForm />
        </section>

      </main>

      {/* Detalhe de iluminação ambiente (Cyber-Workshop Aesthetic) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-emerald-500/5 blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-slate-800/20 blur-[100px]" />
      </div>
    </div>
  );
}