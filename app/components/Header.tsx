'use client';
import { useAuth } from "../context/AuthContext";


export default function Header() {

  const { usuario, logout } = useAuth();

  return (
    <header className="w-full bg-slate-950 border-b-2 border-emerald-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Lado Esquerdo: Logo e Identidade */}
        <div className="flex items-center gap-4 group cursor-default">
          <div className="bg-emerald-500 p-2 rounded-lg -skew-x-12 shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-emerald-500/50 transition-all duration-300">
            {/* SVG Nativo: Gauge/Performance */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-slate-950 skew-x-12"
            >
              <path d="m12 14 4-4" />
              <path d="M3.34 19a10 10 0 1 1 17.32 0" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-slate-100 font-black italic text-xl tracking-tighter uppercase">
              Auto <span className="text-emerald-500">Fix</span>
            </span>
            <span className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
              Precision Service
            </span>
          </div>
        </div>

        {/* Lado Direito: Perfil e Ação */}
        <div className="flex items-center gap-4 sm:gap-8">

          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-slate-100 font-bold text-sm tracking-tight">
                {usuario?.name}
              </span>


              <span className="text-emerald-500 text-[10px] font-medium uppercase tracking-wider">
                Mecânico Responsável
              </span>
            </div>

            {/* Avatar SVG Nativo */}
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-500 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-zinc-800 hidden sm:block">
              {usuario?.name.toLocaleUpperCase()||'Usuario indefinido!'}
            </span>
          </div>

          {/* Botão de Sair */}
          <button

            type="button"
            onClick={logout}
            className="flex items-center gap-2 bg-slate-900 hover:bg-emerald-600 border border-slate-800 hover:border-emerald-500 text-slate-400 hover:text-slate-950 px-4 py-2 rounded-md font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 group"
          >
            <span>Sair</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}