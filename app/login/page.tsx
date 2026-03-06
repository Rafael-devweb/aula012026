'use client'

import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handlelogin = async (FormData: FormData) => {

        const email = FormData.get("email");
        const senha = FormData.get("aenha");

        console.log(`Autenticas com email: ${email}`)

        router.push("/home")

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 animate-in fade-in duration-700">

            {/* Container do Card de Login */}
            <div className="w-full max-w-md relative group">

                {/* Efeito de Brilho Externo (Glow) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                <div className="relative bg-slate-950 border border-emerald-500/10 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Linha de destaque no topo */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

                    <div className="p-8 md:p-10">
                        {/* Header do Login */}
                        <div className="mb-10 text-center">
                            <div className="inline-block h-1.5 w-12 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-full mb-4" />
                            <h1 className="text-3xl font-black text-slate-100 uppercase tracking-tighter italic">
                                Acesso ao <span className="text-emerald-500 text-shadow-glow">Sistema</span>
                            </h1>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">
                                Identificação de Operador Técnico
                            </p>
                        </div>

                        {/* Formulário */}
                        <form action={handlelogin} className="space-y-8">



                            {/* Campo E-mail */}
                            <div className="group space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] group-focus-within:text-emerald-400 transition-colors">
                                    E-mail de Operador
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b-2 border-slate-900 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                                    placeholder="tecnico@oficina.com"
                                />
                            </div>

                            {/* Campo Senha */}
                            <div className="group space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] group-focus-within:text-emerald-400 transition-colors">
                                    Chave de Acesso
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    className="w-full bg-transparent border-b-2 border-slate-900 focus:border-emerald-500 p-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-800 font-medium"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Botão de Ação */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full relative group/btn overflow-hidden bg-emerald-600 py-4 rounded-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(5,150,105,0.2)] hover:shadow-emerald-500/50"
                                >
                                    <span className="relative z-10 text-slate-950 font-black uppercase text-xs tracking-[0.2em]">
                                        Autenticar Operador
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                </button>
                            </div>

                            <div className="text-center">
                                <a href="#" className="text-[9px] font-bold text-slate-600 hover:text-emerald-500 uppercase tracking-widest transition-colors">
                                    Esqueci minha chave de acesso
                                </a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}