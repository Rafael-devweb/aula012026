'use client'
import { Usuario } from "@/app/context/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Único import necessário para roteamento
import { UsuarioMock } from "@/app/mock/usuario";
import axios from "axios";

interface UsuarioFormProps {
  usuariosExistente?: Usuario;
}

export default function Usuarioform({ usuariosExistente }: UsuarioFormProps) {
  // ✅ Inicializa o estado apenas uma vez
  const [usuario, setUsuario] = useState<Usuario>(
    usuariosExistente || new Usuario(0, '', '', "ATIVO")
  );
  
  // ✅ Chamada correta do hook com parênteses
  const router = useRouter();

  const handleChange = (campo: 'name' | 'email', valor: string) => {
    setUsuario(prev =>
      new Usuario(
        prev.id,
        campo === 'name' ? valor : prev.name,
        campo === 'email' ? valor : prev.email,
        prev.status
      )
    );
  }

  const handlerSalvar = async (formData: FormData) => {

    if (usuariosExistente){
       var dadosResult = await axios.put<number>('http://localhost:8080/Usuarios/'+usuariosExistente.id, usuario);
    alert("Usuário salvo com sucesso! Codigo"+dadosResult.data);
    
    }else{
      
      var dadosResult = await axios.post<number>('http://localhost:8080/Usuarios/',usuario);
    alert("Usuário salvo com sucesso! Codigo"+dadosResult.data);
      

    }
    
    
    console.log("Dados salvo", usuario);
    router.push('/usuarios'); 
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
                  CPF
            </label>
            <input
              type="text"
              required
              maxLength={14}
              value={usuario.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="000.000.000-00"
              className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-4 text-slate-200 font-mono outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 placeholder:text-slate-800"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-8 mt-12 pt-8 border-t border-slate-800/50">
          <Link
            href="/usuarios"
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
  );
}