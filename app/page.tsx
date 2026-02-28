import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 md:p-12 relative overflow-hidden">

      {/* Background Tech - Chumbo com detalhes Emerald */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[60%] bg-slate-800/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Lado Esquerdo: A Narrativa do Sistema */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">Versão 2026 Ready</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] uppercase">
              AutoFix:<br />
              <span className="text-emerald-500">Gestão Bruta.</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-slate-800 pl-6">
              Assuma o comando total da sua oficina. Do controle de <span className="text-white font-bold">estoque crítico</span> à emissão de <span className="text-white font-bold">orçamentos inteligentes</span>. Tecnologia de ponta para quem entende de mecânica pesada.
            </p>
          </div>

          {/* Grid de Features (História do Produto) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-emerald-500 font-bold uppercase text-sm tracking-widest">Controle de Frota</h3>
              <p className="text-slate-500 text-sm">Rastreie cada parafuso e peça trocada por veículo com histórico vitalício.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-emerald-500 font-bold uppercase text-sm tracking-widest">Fluxo de Caixa</h3>
              <p className="text-slate-500 text-sm">Orçamentos aprovados via celular e faturamento automatizado em um clique.</p>
            </div>
          </div>
        </div>

        {/* Lado Direito: Visual de Impacto (O "Dashboard" em destaque) */}
        <div className="relative group">
          {/* Moldura Decorativa estilo Monitor de Diagnóstico */}
          <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />

          <div className="relative bg-slate-900 border-2 border-slate-800 p-2 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header da "Janela" do Sistema */}
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Painel de Orçamentos</span>
            </div>

            {/* Conteúdo Simulado do Sistema */}
            <div className="p-6 space-y-6 bg-slate-950/40">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <p className="text-[10px] text-emerald-500 font-black uppercase">Cliente Ativo</p>
                  <p className="text-white font-bold">Rafael Candido</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 font-black uppercase">Veículo</p>
                  <p className="text-white font-bold">Skyline GT-R</p>
                </div>
              </div>

              {/* Status de Serviço */}
              <div className="space-y-3">
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-emerald-500" />
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
                  <span className="text-emerald-500 text-xs">Serviço em 75%</span>
                  <span className="text-slate-500 italic">Previsão: 14:00h</span>
                </div>
              </div>
              {/* Botão de Ação CTA (Call to Action) */}
              <Link
                href="/solucoes"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black uppercase py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3 group/btn no-underline"
              >
                Explorar Soluções
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Badges Flutuantes */}
          <div className="absolute -bottom-6 -right-6 bg-slate-800 border-2 border-emerald-500 p-4 rounded-xl shadow-xl hidden md:block animate-bounce-slow">
            <p className="text-emerald-500 font-black text-xl italic tracking-tighter">+40%</p>
            <p className="text-slate-400 text-[10px] uppercase font-bold">Eficiência Térmica</p>
          </div>
        </div>

      </div>
    </main>
  );
}