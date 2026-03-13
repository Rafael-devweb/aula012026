import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import Sidebar from "../components/Sidebar"

export default function SistemLayout({
    children 

}:{
    children:React.ReactNode
}){
  return (
  <div className="flex min-h-screen bg-slate-950 text-slate-200">
    {/* 1. Sidebar - Fora da div principal de conteúdo para ficar à esquerda */}
    <Sidebar />

    {/* 2. Wrapper do Conteúdo - Flex vertical para Header, Main e Footer */}
    <div className="flex flex-col flex-1 w-full bg-slate-950/50 backdrop-blur-md">
      
      {/* Header fixo no topo ou acompanhando o scroll */}
      <Header />

      {/* O 'flex-1' faz o main crescer e ocupar todo o espaço central */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Container centralizado com max-width para não esticar demais */}
        <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
          {children}
        </div>
      </main>

      {/* Footer no final do conteúdo */}
      <Footer />
      
    </div>
  </div>
);
}