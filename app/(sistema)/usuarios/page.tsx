'use client'
import { Usuario } from "@/app/context/AuthContext";
import { UsuarioMock } from "@/app/mock/usuario";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Usuarios() {

  const[Usuarios,setUsuarios] =useState<Usuario[]>([]);
  useEffect(()=>{

  },[]);

const carregarDados = async ()=>{
  try{

    const dados = await UsuarioMock.listarTodos();
    setUsuarios(dados);


  }catch(error){
    console.error(error)
  }
}

const handlerAlterarStatus = async(usuario:Usuario)=> {
    try{

      setUsuarios(usuariosAtuais =>
        usuariosAtuais.map(u=>
        u.codigo === usuario.codigo
        ?new Usuario(u.codigo,u.name,u.cpf,!u.ativo)
        :u
      ));

    }catch(error){
      alert("Erro ao alterar o status do usuário")
    }
  }


return (
  <div className="min-h-screen bg-slate-950 p-6 text-slate-200">
    <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-6">
      <h1 className="text-2xl font-bold tracking-tight text-white uppercase italic">
        Gestão de Usuários
      </h1>
      <Link 
        href="/usuarios/novo"
        className="flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
      >
        + Novo Usuário
      </Link>
    </div>

    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50 shadow-2xl">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-800/50 text-xs uppercase tracking-wider text-emerald-500">
          <tr>
            <th className="px-6 py-4 font-semibold">Código</th>
            <th className="px-6 py-4 font-semibold">Nome</th>
            <th className="px-6 py-4 font-semibold">CPF</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {Usuarios.map((usuario) => (
            <tr key={usuario.codigo} className="transition-colors hover:bg-emerald-500/5">
              <td className="px-6 py-4 font-mono text-emerald-400">#{usuario.codigo}</td>
              <td className="px-6 py-4 font-medium text-slate-100">{usuario.name}</td>
              <td className="px-6 py-4 text-slate-400 font-mono">{usuario.cpf}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold border ${
                  usuario.ativo 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                    : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                }`}>
                  {usuario.ativo ? 'Ativo' : 'Inativo'}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <Link 
                    href={`/usuarios/${usuario.codigo}/editar`}
                    className="text-sky-400 hover:text-sky-300 transition-colors font-semibold uppercase text-[11px] tracking-tighter"
                  >
                    Editar
                  </Link>
                  <button 
                    onClick={() => handlerAlterarStatus(usuario)}
                    className={`rounded border px-3 py-1 text-[10px] font-black uppercase tracking-widest transition-all ${
                      usuario.ativo 
                        ? 'border-rose-900/50 text-rose-500 hover:bg-rose-500 hover:text-white' 
                        : 'border-emerald-900/50 text-emerald-500 hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    {usuario.ativo ? 'inativar' : 'ativar'}
                  </button>
                </div>
              </td>

              {/* Mantive sua célula extra de ações conforme o original */}
              <td className="px-6 py-4 text-[10px] text-slate-600 uppercase italic">
                Ações editar e ativar/inatvar
              </td>
            </tr>
          ))}

          {Usuarios.length === 0 && (
            <tr>
              <td className="px-6 py-12 text-center text-slate-500 italic uppercase tracking-widest">
                nenhum usuario encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)};