import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mecanica",
  description: "sistema para mecanica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="pt-BR" className="h-full">
      {/* Definimos h-full no html e body para que o cálculo de altura funcione */}
      <body className="h-full bg-slate-950 text-slate-100 antialiased">
        
       <AuthProvider> {children} </AuthProvider>
            
       
       
                
          
      </body>
    </html>
  );
}