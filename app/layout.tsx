'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



function AuthGuard({ children }: { children: React.ReactNode }) {
  const { usuario } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (usuario === null) {
      router.push("/login");
    }
  }, [usuario, router]);

  return <>{children}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body>
        <AuthProvider>
          
            {children}
          
        </AuthProvider>
      </body>
    </html>
  );
}