export default function Usuarios() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-1.5 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] rounded-full" />
        <div>
          <h2 className="text-3xl font-black text-slate-500 uppercase tracking-tighter italic">
            Cadastro de <span className="text-emerald-500">Usuários</span>
          </h2>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">
            Gestão de Acesso e Equipe Técnica
          </p>
        </div>
      </div>

      {/* Card Principal */}
      <div className="bg-slate-950 border border-emerald-500/10 rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Detalhe de Brilho no Topo */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        
        <form className="p-8 md:p-12 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            
            {/* Nome do Usuário */}
            <div className="group space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                Nome Completo
              </label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                placeholder="Ex: Rafael da Silveira"
              />
            </div>

            {/* E-mail / Login */}
            <div className="group space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                E-mail de Acesso
              </label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                placeholder="mecanico@autofix.com"
              />
            </div>

            {/* Cargo / Responsabilidade */}
            <div className="group space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                Função / Cargo
              </label>
              <select className="w-full bg-transparent border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 cursor-pointer appearance-none font-medium">
                <option className="bg-slate-950">Mecânico Líder</option>
                <option className="bg-slate-950">Auxiliar Técnico</option>
                <option className="bg-slate-950">Administrador</option>
                <option className="bg-slate-950">Atendimento</option>
              </select>
            </div>

            {/* Senha */}
            <div className="group space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                Senha de Acesso
              </label>
              <input 
                type="password" 
                className="w-full bg-transparent border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                placeholder="••••••••"
              />
            </div>

          </div>

          {/* Área de Ações */}
          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest max-w-xs">
              * O usuário terá acesso exclusivo aos dados vinculados à oficina cadastrada.
            </p>
            
            <div className="flex items-center gap-6 w-full sm:w-auto">
              <button type="button" className="text-[10px] font-black text-slate-500 hover:text-slate-300 uppercase tracking-[0.2em] transition-colors whitespace-nowrap">
                Limpar Formulário
              </button>
              
              <button className="w-full sm:w-auto relative group overflow-hidden bg-emerald-500 px-12 py-4 rounded-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-emerald-500/50">
                <span className="relative z-10 text-slate-950 font-black uppercase text-xs tracking-[0.2em]">
                  Salvar Usuário
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}