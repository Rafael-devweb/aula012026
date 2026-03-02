export default function TelaLogin() {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-700">
      
      {/* Card de Login Estilo Dark/Emerald */}
      <div className="w-full max-w-md bg-slate-950 border border-emerald-500/10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Topo com Identidade (Copiado do Header) */}
        <div className="bg-slate-900/50 p-8 text-center border-b border-emerald-500/10">
          <div className="flex flex-col items-center gap-2">
             <div className="bg-emerald-500 p-2 rounded-lg -skew-x-12 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  className="w-6 h-6 text-slate-950 skew-x-12"
                >
                  <path d="m12 14 4-4" />
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
             </div>
             <div className="mt-2">
                <h1 className="text-2xl font-black italic text-slate-100 uppercase tracking-tighter">
                  Auto <span className="text-emerald-500">Fix</span>
                </h1>
                <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase">
                  Precision Access
                </p>
             </div>
          </div>
        </div>

        {/* Formulário */}
        <form className="p-8 space-y-8">
          
          <div className="space-y-2 group">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] group-focus-within:text-emerald-500 transition-colors">
              E-mail da Oficina
            </label>
            <input 
              type="email" 
              className="w-full bg-slate-900/50 border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-700"
              placeholder="exemplo@autofix.com"
            />
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] group-focus-within:text-emerald-500 transition-colors">
              Senha de Acesso
            </label>
            <input 
              type="password" 
              className="w-full bg-slate-900/50 border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-700"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full relative group overflow-hidden bg-emerald-500 py-4 rounded shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-emerald-500/40 transition-all active:scale-[0.98]"
          >
            <span className="relative z-10 text-slate-950 font-black uppercase text-xs tracking-[0.2em]">
              Entrar no Sistema
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <div className="text-center pt-2">
            <a href="#" className="text-[10px] font-bold text-slate-600 hover:text-emerald-500 uppercase tracking-widest transition-colors">
              Solicitar Suporte Técnico
            </a>
          </div>

        </form>
      </div>
    </div>
  )
}