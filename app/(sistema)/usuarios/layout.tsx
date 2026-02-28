import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

export default function SistemLayout({
    children 

}:{
    children:React.ReactNode
}){
    return( 

<div className="flex min-h-screen">
          
          {/* Componente Sidebar (Fica fixo ou ao lado) */}
          {/* <Sidebar />  */}

          {/* Wrapper do Conteúdo: Flex vertical para empurrar o Footer para baixo */}
          <div className="flex flex-col flex-1 w-full">
            
            <Header />

            {/* O 'flex-1' faz o main crescer e ocupar todo o espaço central */}
            <main className="flex-1 p-4 md:p-8">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>

            <Footer />
            
          </div>
        </div>

    )
}