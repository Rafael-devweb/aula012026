'use client'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function SistemLayout({
    children 

}:{
    children:React.ReactNode
}){

  const { usuario } = useAuth();
  const router = useRouter();

  useEffect(() => {
 
    if (usuario == null) {

      router.push("/login")
    }
  })

  if (usuario == null) return null;

    return( 

<div className="flex min-h-screen">
          
          {/* Componente Sidebar (Fica fixo ou ao lado) */}
           <Sidebar />  

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