export default function Footer(){
    const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t-2 border-slate-900 pt-8 pb-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright e Identidade - Paleta Chumbo e Verde */}
          <div className="flex items-center gap-3 order-2 md:order-1">
            {/* Detalhe em Verde Esmeralda (Chumbo e Verde) */}
            <div className="h-4 w-[2px] bg-emerald-500 hidden sm:block"></div>
            <p className="text-slate-500 text-sm font-medium tracking-tight">
              {currentYear} <span className="text-emerald-500 font-black italic tracking-tighter uppercase">Mecânica Green</span>. 
              <span className="ml-1 text-slate-400">Todos os direitos reservados.</span>
            </p>
          </div>

          {/* Links de Navegação com <a> e SVGs nativos */}
          <nav className="flex items-center gap-8 order-1 md:order-2">
            <a 
              href="#" 
              className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest">Suporte</span>
            </a>

            <a 
              href="#" 
              className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest">Termos uso</span>
            </a>
          </nav>
        </div>

        {/* Linha Decorativa Final em degradê chumbo (slate) */}
        <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      </div>
    </footer>
  );
}