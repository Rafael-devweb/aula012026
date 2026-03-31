"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cliente } from "@/app/mock/cliente"; // Removido ClienteMock pois não é usado
import axios from "axios";

export default function ListagemClientes() {
  const [clientes, setClientes] = useState<any[]>([]);

  // 1. As funções devem estar DENTRO do componente para acessar o setClientes
  const carregarDados = async () => {
    try {
      const dados = await axios.get<Cliente[]>('http://localhost:8080/cliente');
      
      if (dados.status === 200) {
        setClientes(dados.data); // Corrigido de setCliente para setClientes
      } else {
        alert("Erro ao carregar dados!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlerAlterarStatus = async (cliente: any) => {
    try {
      // Ajuste na lógica de status baseada no seu JSX (que usa c.ativo)
      const novoStatus = { 
        ...cliente, 
        ativo: !cliente.ativo,
        status: cliente.status === "ATIVO" ? "INATIVO" : "ATIVO" 
      };

      const dadosResult = await axios.put<number>(
        `http://localhost:8080/clientes/${cliente.id}/AlterarStatus`, 
        novoStatus
      );

      if (dadosResult.status === 200) {
        alert("Cliente salvo com sucesso! Codigo: " + dadosResult.data);
        carregarDados(); // Recarrega a lista após alterar
      }
    } catch (error) {
      alert("Erro ao alterar o status do usuário");
    }
  };

  useEffect(() => { 
    carregarDados(); 
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-16 p-6 lg:p-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500/50" />
            <h1 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em]">
              Database & Workshop
            </h1>
          </div>
          <h2 className="text-6xl font-extralight text-white leading-none tracking-tighter">
            Gestão de <span className="font-black italic text-emerald-500">Clientes</span>
          </h2>
        </div>

        <Link
          href="/cliente/novo"
          className="group relative overflow-hidden border border-white/10 bg-transparent text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:border-emerald-500"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            + Registrar Cliente
          </span>
          <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
      </div>

      <div className="w-full overflow-x-auto custom-scrollbar">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 border-b border-slate-900/50">
              <th className="pb-8 px-2 font-medium">Cod.</th>
              <th className="pb-8 px-2">Identificação do Cliente</th>
              <th className="pb-8 px-2">Documento</th>
              <th className="pb-8 px-2">Status</th>
              <th className="pb-8 px-2 text-right">Gerenciamento</th>
            </tr>
          </thead>
          <tbody className="before:content-['-'] before:block before:leading-[2em] before:text-transparent">
            {clientes.map((c) => (
              <tr key={c.id || Math.random()} className="group border-b border-slate-900/30 hover:border-emerald-500/30 transition-all">
                <td className="py-8 px-2 font-mono text-[11px] text-slate-500 group-hover:text-emerald-500/50 transition-colors">
                  {String(c.codigo || 0).padStart(3, '0')}
                </td>
                <td className="py-8 px-2">
                  <div className="flex flex-col">
                    <span className="text-lg font-light text-slate-200 group-hover:text-white transition-colors uppercase tracking-tight">
                      {c.nome}
                    </span>
                    <span className="text-[9px] text-slate-600 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visualizar Perfil Completo
                    </span>
                  </div>
                </td>
                <td className="py-8 px-2 font-mono text-xs text-slate-400">
                  {c.cpf}
                </td>
                <td className="py-8 px-2">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className={`block h-1 w-1 rounded-full ${c.ativo ? 'bg-emerald-500' : 'bg-slate-800'}`} />
                      {c.ativo && (
                        <span className="absolute inset-0 h-1 w-1 rounded-full bg-emerald-500 animate-ping opacity-40" />
                      )}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${c.ativo ? 'text-emerald-500' : 'text-slate-700'}`}>
                      {c.ativo ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </td>
                <td className="py-8 px-2 text-right">
                  <div className="flex justify-end gap-8">
                    <Link
                      href={`/clientes/${c.codigo}/editar`}
                      className="group/btn relative text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors"
                    >
                      Editar
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover/btn:w-full" />
                    </Link>
                    <button
                      onClick={() => handlerAlterarStatus(c)}
                      className={`text-[10px] font-black uppercase tracking-widest transition-all ${c.ativo
                          ? 'text-slate-800 hover:text-red-500'
                          : 'text-slate-800 hover:text-emerald-500'
                        }`}
                    >
                      {c.ativo ? '// Desativar' : '// Reativar'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-900/50">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black text-slate-800 uppercase tracking-[0.3em]">
            Métricas de Sistema
          </span>
          <span className="text-[10px] font-bold text-slate-500 uppercase">
            {clientes.length} Objetos Encontrados
          </span>
        </div>

        <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="text-slate-800">Filtrar por:</span>
          <button className="text-emerald-500 border-b border-emerald-500 pb-1">Todos</button>
          <button className="text-slate-600 hover:text-white transition-colors">Ativos</button>
          <button className="text-slate-600 hover:text-white transition-colors">Inativos</button>
        </div>
      </div>
    </div>
  );
}