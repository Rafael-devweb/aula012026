'use client'
import { Usuario } from "@/app/context/AuthContext";
import { UsuarioMock } from "@/app/mock/usuario";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Usuarioform from "../../components/UsuariosForm";

export default function EditarUsuario() {

    const params = useParams()
    const router = useRouter()
    const codigo = Number(params.codigo);

    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {

        buscarDados();

    }, []);

    const buscarDados = async () => {
        const user = await UsuarioMock.buscarPorId(codigo);

        if (user) setUsuario(user)
        else router.push("/usuarios")


    }

    if (!usuario) return <div className="p-8">Carregando dados...</div>
    return (

        <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
            {/* Header do Cadastro - Removido max-w-lg e ajustado para w-full */}
            <div className="w-full mb-8 flex items-center justify-between border-b border-slate-800 pb-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-black uppercase tracking-widest text-white italic">
                        Editar usuario #{codigo}
                    </h1>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">
                        Sistema de Gestão / Operadores
                    </p>
                </div>

                <Link
                    href="/usuarios"
                    className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-emerald-400"
                >
                    <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>
                    Voltar para Listagem
                </Link>
            </div>

            {/* Container do Formulário - Agora ocupa 100% da largura disponível */}
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Usuarioform usuariosExistente={usuario} />
            </div>
        </div>


    );
}