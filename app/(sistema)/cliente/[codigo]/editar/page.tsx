
'use client'

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { Cliente } from "@/app/mock/cliente";
import ClienteForm from "../../components/ClienteForm";



export default function EditarCliente() {

    const params = useParams()
    const router = useRouter()
    const codigo = Number(params.codigo);

    const [cliente, setCliente] = useState<Cliente | null>(null);

    useEffect(() => {

        buscarDados();

    }, []);

    const buscarDados = async () => {
        const user = await axios.get<Cliente>("http://localhost:8080/clientes/" + codigo);

        if (user.data) setCliente(user.data)
        else router.push("/clientes")
    }



 return (
    <div className="flex min-h-screen w-full flex-col bg-slate-950">
      {/* Main Content Wrapper 
          P-4 no mobile, P-10 em telas maiores para um ar de Dashboard Premium 
      */}
      <main className="flex flex-1 flex-col p-4 lg:p-10">
        
        {/* Header Section: Estratégia de espaçamento dinâmico */}
        <header className="mb-10 w-full border-b border-slate-800 pb-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-8 rounded-full bg-emerald-500"></span>
                <h1 className="text-3xl font-black uppercase tracking-tighter text-white italic">
                  Novo Operador
                </h1>
              </div>
              <p className="max-w-2xl text-sm font-medium text-slate-500">
                Configure as credenciais de acesso e permissões administrativas para o novo integrante da oficina.
              </p>
            </div>

            <Link 
              href="/usuarios"
              className="group flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/50 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Painel de Controle
            </Link>
          </div>
        </header>

        {/* Form Section 
            Removido o limite de largura para ocupar todo o 'children'
            Adicionada uma animação suave de entrada (Slide + Fade)
        */}
        <section className="flex-1 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
          <div className="h-full w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm">
             <ClienteForm/>
          </div>
        </section>

      </main>
    </div>
  );
}