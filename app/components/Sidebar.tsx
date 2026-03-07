import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 border-r border-emerald-500/10 flex flex-col shrink-0">
      
      {/* Cabeçalho da Sidebar: Logo */}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-8 group">
          <div className="bg-emerald-500 p-2 rounded-lg -skew-x-12 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-950 skew-x-12">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0l.3.3a2 2 0 0 1 0 2.83l-3.77 3.77a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0" />
              <path d="m10 14-5-5L2 12l3 3 3 3 3 3 3-3-3-3Z" />
            </svg>
          </div>
          <span className="text-slate-100 font-black uppercase italic tracking-tighter text-lg">
            Mecânica<span className="text-emerald-500">Pro</span>
          </span>
        </div>

        {/* Links de Navegação */}
        <nav className="space-y-6">
          <div>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4">Gerenciamento</p>
            <ul className="space-y-2">
              <li>
                <Link href="/home" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 p-2 rounded-lg hover:bg-emerald-500/5 transition-all duration-300 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 shadow-[0_0_8px_transparent] group-hover:shadow-emerald-500/50 transition-all" />
                  <span className="font-bold text-xs uppercase tracking-widest">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/ordens" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 p-2 rounded-lg hover:bg-emerald-500/5 transition-all duration-300 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 transition-all" />
                  <span className="font-bold text-xs uppercase tracking-widest">Ordens de Serviço</span>
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 p-2 rounded-lg hover:bg-emerald-500/5 transition-all duration-300 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 transition-all" />
                  <span className="font-bold text-xs uppercase tracking-widest">Clientes</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4">Oficina</p>
            <ul className="space-y-2">
              <li>
                <Link href="/estoque" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 p-2 rounded-lg hover:bg-emerald-500/5 transition-all duration-300 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 transition-all" />
                  <span className="font-bold text-xs uppercase tracking-widest">Estoque / Peças</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Info do Sistema no Rodapé */}
      <div className="mt-auto p-6 border-t border-emerald-500/5">
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">Status do Sistema</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 text-[10px] font-bold uppercase">Online / Operacional</span>
          </div>
        </div>
      </div>
    </aside>
  );
}