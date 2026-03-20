import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


interface ClienteFormProps {
  clienteExistente?: ClienteFormProps;
}

export default function ClienteForm({ clienteExistente }: ClienteFormProps) {
  // ✅ Inicializa o estado com o cliente existente ou um novo objeto de Cliente
  const [cliente, setCliente] = useState<ClienteFormProps>(
    clienteExistente || new Cliente(0, '', '', true)
  );
  
  const router = useRouter();

  const handleChange = (campo: 'nome' | 'cpf', valor: string) => {
    setCliente(prev =>
      new Cliente(
        prev.codigo,
        campo === 'nome' ? valor : prev.nome,
        campo === 'cpf' ? valor : prev.cpf,
        prev.ativo
      )
    );
  }

  const handlerSalvar = async () => {
    await ClienteMock.salvar(cliente);
    alert("Cliente salvo com sucesso!");
    
    console.log("Dados salvos:", cliente);
    // Redireciona para a listagem de clientes
    router.push('/clientes'); 
  }

  return (
    <div className="w-full h-full bg-slate-950 p-4">
      <form
        action={handlerSalvar}
        className="w-full bg-slate-900/40 border border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xl backdrop-blur-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Campo Nome */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest ml-1">
              Nome do Cliente / Razão Social
            </label>
            <input
              type="text"
              required
              value={cliente.nome}
              onChange={(e) => handleChange('nome', e.target.value)}
              placeholder="Ex: Clínica Saúde Ltda"
              className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-4 text-slate-200 outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 placeholder:text-slate-800"
            />
          </div>

          {/* Campo CPF/CNPJ */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest ml-1">
              CPF / CNPJ do Cliente
            </label>
            <input
              type="text"
              required
              maxLength={18}
              value={cliente.cpf}
              onChange={(e) => handleChange('cpf', e.target.value)}
              placeholder="000.000.000-00"
              className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-4 text-slate-200 font-mono outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 placeholder:text-slate-800"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-8 mt-12 pt-8 border-t border-slate-800/50">
          <Link
            href="/clientes"
            className="text-slate-500 hover:text-slate-300 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
          >
            Descartar Alterações
          </Link>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-xs tracking-widest px-10 py-4 rounded-lg transition-all transform active:scale-95 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          >
            Salvar Cliente
          </button>
        </div>
      </form>
    </div>
  );
}