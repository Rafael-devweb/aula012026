'use client'
import { Usuario } from "@/app/context/AuthContext";
import Link from "next/link";
import { useState } from "react";

export default function Usuarioform(){
    const[usuario,setUsuario]= useState<Usuario>(new Usuario(0,'','',true));
    const handleChange = (campo : 'name'| 'cpf', valor :string) =>{
        setUsuario(prev =>
            new Usuario(
                prev.codigo,
                campo === 'name' ? valor : prev.name,
                campo ==='cpf' ? valor : prev.cpf,
                prev.ativo
            )
        )
    }
const handlerSalvar =(formData:FormData)=>{
    
}

   return (
  <div className="w-full h-full bg-slate-950 p-4">
    <form 
      action={handlerSalvar}
      className="w-full bg-slate-900/40 border border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xl backdrop-blur-md"
    >
    

      {/* Grid Responsivo: 1 coluna no mobile (default), 2 colunas em telas 'md' (768px+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Campo Nome - Ocupa 1 coluna ou pode ocupar as duas se quiser */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest ml-1">
            Nome Completo
          </label>
          <input
            type="text"
            required
            value={usuario.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Ex: Rafael Candido"
            className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-4 text-slate-200 outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 placeholder:text-slate-800"
          />
        </div>

        {/* Campo CPF */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest ml-1">
            CPF do Usuário
          </label>
          <input
            type="text"
            required
            maxLength={14}
            value={usuario.cpf}
            onChange={(e) => handleChange('cpf', e.target.value)}
            placeholder="000.000.000-00"
            className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-4 text-slate-200 font-mono outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 placeholder:text-slate-800"
          />
        </div>
      </div>

      {/* Ações do Formulário - Empurra para baixo com mt-12 */}
      <div className="flex items-center justify-end gap-8 mt-12 pt-8 border-t border-slate-800/50">
        <Link
          href="/usuario"
          className="text-slate-500 hover:text-slate-300 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
        >
          Descartar
        </Link>
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-xs tracking-widest px-10 py-4 rounded-lg transition-all transform active:scale-95 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
        >
          Confirmar Registro
        </button>
      </div>
    </form>
  </div>
);};