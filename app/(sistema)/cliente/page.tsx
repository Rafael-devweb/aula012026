"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { ClienteMock } from "@/app/mock/cliente";

export default function ListagemClientes() {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => { carregarDados(); }, []);

  const carregarDados = async () => {
    try {
      // Mock adaptado para Clientes
      const dados = await ClienteMock.listarTodos();
      setClientes(dados);
    } catch (error) { console.error(error); }
  };

  const handlerAlterarStatus = async (cliente: any) => {
    try {
      await ClienteMock.alterarStatus(cliente.codigo);
      setClientes(atuais => atuais.map(c =>
        c.codigo === cliente.codigo ? { ...c, ativo: !c.ativo } : c
      ));
    } catch (error) { console.error("Erro ao alterar status"); }
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 p-6 lg:p-12 animate-in fade-in duration-700">
      
      {/* Header Integrado */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-900 pb-10">
        <div className="space-y-2">
          <h1 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em]">
            Database & Workshop
          </h1>
          <h2 className="text-5xl font-light text-white italic leading-tight">
            Gestão de <span className="font-black text-white not-italic">Clientes</span>
          </h2>
        </div>
        
        <Link 
          href="/clientes/novo" 
          className="group relative overflow-hidden bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-emerald-500 hover:text-white"
        >
          <span className="relative z-10">+ Registrar Cliente</span>
          <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
      </div>

      {/* Tabela Minimalista (Sem bordas externas) */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <th className="pb-6 px-4">Cod.</th>
              <th className="pb-6 px-4">Nome do Cliente</th>
              <th className="pb-6 px-4">CPF / Documento</th>
              <th className="pb-6 px-4">Status</th>
              <th className="pb-6 px-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900/50">
            {clientes.map((c) => (
              <tr key={c.codigo} className="group transition-colors hover:bg-emerald-500/[0.02]">
                <td className="py-6 px-4 font-mono text-xs text-slate-600">
                  {String(c.codigo).padStart(3, '0')}
                </td>
                <td className="py-6 px-4">
                  <span className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                    {c.nome}
                  </span>
                </td>
                <td className="py-6 px-4 font-mono text-xs text-slate-500">
                  {c.cpf}
                </td>
                <td className="py-6 px-4">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${c.ativo ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-700'}`} />
                    <span className={`text-[9px] font-black uppercase tracking-widest ${c.ativo ? 'text-emerald-500' : 'text-slate-600'}`}>
                      {c.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                </td>
                <td className="py-6 px-4 text-right">
                  <div className="flex justify-end gap-6">
                    <Link 
                      href={`/clientes/${c.codigo}/editar`} 
                      className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors"
                    >
                      Editar
                    </Link>
                    <button 
                      onClick={() => handlerAlterarStatus(c)} 
                      className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                        c.ativo ? 'text-red-900/50 hover:text-red-500' : 'text-emerald-900/50 hover:text-emerald-500'
                      }`}
                    >
                      {c.ativo ? 'Desativar' : 'Reativar'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer da Listagem (Opcional) */}
      <div className="pt-8 flex justify-between items-center text-[9px] font-bold text-slate-700 uppercase tracking-[0.2em]">
        <span>Total de {clientes.length} registros encontrados</span>
        <span className="flex items-center gap-2">
          Filtros: <span className="text-slate-500 hover:text-emerald-500 cursor-pointer">Todos</span> / <span className="text-slate-500 hover:text-emerald-500 cursor-pointer">Ativos</span>
        </span>
      </div>
    </div>
  );
}