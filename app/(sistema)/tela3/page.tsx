export default function CadastroClienteVeiculo() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-1.5 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] rounded-full" />
        <div>
          <h2 className="text-3xl font-black text-slate-500 uppercase tracking-tighter italic">
            Check-in de <span className="text-emerald-500">Frota</span>
          </h2>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">
            Vinculação de Proprietário e Veículo
          </p>
        </div>
      </div>

      {/* Card Principal */}
      <div className="bg-slate-950 border border-emerald-500/10 rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Detalhe de Brilho no Topo */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        
        <form className="p-8 md:p-12 space-y-12">
          
          {/* GRUPO 01: DADOS DO CLIENTE */}
          <div className="space-y-8">
            <h3 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-500/30"></span>
              Informações do Cliente
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
              <div className="group space-y-2 md:col-span-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                  Nome do Proprietário
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                  placeholder="Ex: Carlos Augusto Silva"
                />
              </div>

              <div className="group space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                  CPF / CNPJ
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                  placeholder="000.000.000-00"
                />
              </div>
            </div>
          </div>

          {/* GRUPO 02: DADOS DO VEÍCULO */}
          <div className="space-y-8">
            <h3 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-500/30"></span>
              Dados do Veículo
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-10">
              {/* Placa com destaque visual */}
              <div className="group space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                  Placa
                </label>
                <input 
                  type="text" 
                  className="w-full bg-emerald-500/5 border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-emerald-500 outline-none transition-all duration-300 placeholder:text-slate-800 font-black uppercase tracking-widest"
                  placeholder="ABC-1234"
                />
              </div>

              <div className="group space-y-2 md:col-span-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                  Marca / Modelo
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                  placeholder="Ex: Toyota Corolla XEi 2.0"
                />
              </div>

              <div className="group space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors">
                  Ano de Fabricação
                </label>
                <input 
                  type="number" 
                  className="w-full bg-transparent border-b-2 border-slate-800 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                  placeholder="2024"
                />
              </div>
            </div>
          </div>

          {/* Área de Ações */}
          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest max-w-xs">
              * Verifique o número do chassi e placa antes de confirmar a ordem de serviço.
            </p>
            
            <div className="flex items-center gap-6 w-full sm:w-auto">
              <button type="button" className="text-[10px] font-black text-slate-500 hover:text-slate-300 uppercase tracking-[0.2em] transition-colors whitespace-nowrap">
                Limpar Campos
              </button>
              
              <button className="w-full sm:w-auto relative group overflow-hidden bg-emerald-500 px-12 py-4 rounded-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-emerald-500/50">
                <span className="relative z-10 text-slate-950 font-black uppercase text-xs tracking-[0.2em]">
                  Registrar Entrada
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