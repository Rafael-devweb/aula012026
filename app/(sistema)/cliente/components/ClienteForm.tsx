"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ClienteForm({ clienteExistente }: { clienteExistente?: any }) {
  const router = useRouter();
  
  // Estado inicializado como objeto para facilitar a imutabilidade no React
  const [cliente, setCliente] = useState(clienteExistente || {
    codigo: null,
    nome: '',
    cpf: '',
    ativo: true
  });

  const handlerSalvar = async () => {
    // Simulando a chamada ao Mock/API de Clientes
    // await ClienteMock.salvar(cliente);
    console.log("Salvando cliente:", cliente);
    router.push("/usuarios");
    router.refresh();

if (clienteExistente){
       var dadosResult = await axios.put<number>('http://localhost:8080/clientes/'+clienteExistente.id, cliente);
    alert("Cliente salvo com sucesso! Codigo"+dadosResult.data);
    
    }else{
      
      var dadosResult = await axios.post<number>('http://localhost:8080/clientes',cliente);
    alert("Cliente salvo com sucesso! Codigo"+dadosResult.data);
      
    }

  };

  return (
    <form action={handlerSalvar} className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        
        {/* Campo: Nome */}
        <div className="group flex flex-col gap-3">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] group-focus-within:text-emerald-500 transition-colors">
            Nome Completo do Cliente
          </label>
          <input
            value={cliente.nome}
            onChange={e => setCliente({ ...cliente, nome: e.target.value })}
            placeholder="Ex: João Silva"
            className="bg-transparent border-b border-slate-800 p-2 text-white placeholder:text-slate-700 focus:border-emerald-500 outline-none transition-all font-light text-xl"
            required
          />
        </div>

        {/* Campo: CPF */}
        <div className="group flex flex-col gap-3">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] group-focus-within:text-emerald-500 transition-colors">
            Documento Identificador (CPF)
          </label>
          <input
            value={cliente.cpf}
            onChange={e => setCliente({ ...cliente, cpf: e.target.value })}
            placeholder="000.000.000-00"
            className="bg-transparent border-b border-slate-800 p-2 text-white placeholder:text-slate-700 focus:border-emerald-500 outline-none transition-all font-mono text-xl"
            required
          />
        </div>

      </div>

      {/* Ações: Alinhadas à direita com tipografia agressiva */}
      <div className="flex flex-col items-end gap-6 pt-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        
        <button 
          type="submit" 
          className="relative group overflow-hidden bg-white text-black px-14 py-5 text-[11px] font-black uppercase tracking-[0.4em] transition-all hover:bg-emerald-500 hover:text-white active:scale-95"
        >
          <span className="relative z-10">
            {clienteExistente ? 'Atualizar Cliente' : 'Finalizar Cadastro'}
          </span>
          {/* Efeito visual de hover */}
          <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
        
        <p className="text-[9px] text-slate-600 uppercase tracking-widest">
          Certifique-se de que os dados estão corretos antes de confirmar.
        </p>
      </div>
    </form>
  );
}
