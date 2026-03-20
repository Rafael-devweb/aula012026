import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ClienteMock } from "@/app/mock/cliente";
// Supondo que você tenha esses componentes/tipos criados:


export default function EditarCliente() {
    const params = useParams();
    const router = useRouter();
    const codigo = Number(params.codigo);

    const [cliente, setCliente] = useState<ClienteMock | null>(null);

    useEffect(() => {
        buscarDados();
    }, [codigo]); // Adicionado codigo como dependência por boa prática

    const buscarDados = async () => {
        // Busca o cliente pelo ID (ajuste conforme seu mock/api)
        const data = await ClienteMock.buscarPorId(codigo);

        if (data) {
            setCliente(data);
        } else {
            // Se não encontrar, volta para a listagem
            router.push("/clientes");
        }
    }

    if (!cliente) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-950 text-white font-bold uppercase tracking-widest">
                Carregando dados do cliente...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
            {/* Header do Cadastro */}
            <div className="w-full mb-8 flex items-center justify-between border-b border-slate-800 pb-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-black uppercase tracking-widest text-white italic">
                        Editar Cliente #{codigo}
                    </h1>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">
                        Sistema de Gestão / Clientes
                    </p>
                </div>

                <Link
                    href="/clientes"
                    className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-emerald-400"
                >
                    <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>
                    Voltar para Listagem
                </Link>
            </div>

            {/* Container do Formulário */}
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Certifique-se de que o componente ClienteForm aceite a prop cliente ou dados */}
                <ClienteForm cliente={cliente} />
            </div>
        </div>
    );
}