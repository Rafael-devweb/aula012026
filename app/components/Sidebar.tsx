import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-64 bg-slate-950 text-slate-100 flex flex-col border-r border-emerald-500/10 shrink-0">
      
      {/* Cabeçalho: Logo do MecânicaPro com estilo original */}
      <div className="p-6 flex items-center gap-3 border-b border-emerald-500/10">
        <div className="bg-emerald-500 p-1.5 rounded-lg -skew-x-12 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-950 skew-x-12">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0l.3.3a2 2 0 0 1 0 2.83l-3.77 3.77a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0" />
            <path d="m10 14-5-5L2 12l3 3 3 3 3 3 3-3-3-3Z" />
          </svg>
        </div>
        <span className="font-black uppercase italic tracking-tighter text-lg">
          Mecânica<span className="text-emerald-500">Pro</span>
        </span>
      </div>

      {/* Navegação: Estrutura do segundo código com estilo do primeiro */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/home"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 shadow-[0_0_8px_transparent] group-hover:shadow-emerald-500/50 transition-all" />
          <span className="font-bold text-xs uppercase tracking-widest">Home</span>
        </Link>

        <Link
          href="/usuario"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 shadow-[0_0_8px_transparent] group-hover:shadow-emerald-500/50 transition-all" />
          <span className="font-bold text-xs uppercase tracking-widest">Ordens de Serviço</span>
        </Link>

        <Link
          href="/cliente"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 shadow-[0_0_8px_transparent] group-hover:shadow-emerald-500/50 transition-all" />
          <span className="font-bold text-xs uppercase tracking-widest">Clientes</span>
        </Link>

        <Link
          href="/estoque"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 shadow-[0_0_8px_transparent] group-hover:shadow-emerald-500/50 transition-all" />
          <span className="font-bold text-xs uppercase tracking-widest">Estoque</span>
        </Link>
      </nav>

      {/* Rodapé: Status do Sistema (mantendo o detalhe do primeiro código) */}
      <div className="p-4 border-t border-emerald-500/5">
        <div className="flex items-center gap-2 px-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">Sistema Online</span>
        </div>
      </div>
    </aside>
  );
}