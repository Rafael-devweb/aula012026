'use client'
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export class Cliente {
    constructor(
        public id: number | null,
        public name: string,
        public email: string,
        public status: string,
    ) { }
}

interface AuthContextType {
    cliente: Cliente | null,
    token: string | null,
    login: (cliente: Cliente, token: string) => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const clienteRecover = Cookies.get('cliente'); 
        const tokenRecover = Cookies.get('token');

        if (clienteRecover && tokenRecover) {
            try {
                setCliente(JSON.parse(clienteRecover));
                setToken(tokenRecover);
                
                router.push(window.location.pathname)
            } catch (e) {
                console.error(e);
            }
        }
    }, []);

    const login = (cliente: Cliente, token: string) => {
        setCliente(cliente);
        setToken(token);
        Cookies.set('cliente', JSON.stringify(cliente), { expires: 7 }); 
        Cookies.set('token', token, { expires: 7, secure: true });
    }

    const logout = () => {
        setCliente(null);
        setToken(null);
        Cookies.remove('cliente'); 
        Cookies.remove('token');
    }

    return (
        <AuthContext.Provider value={{ cliente, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth deve ser usado dentro do AuthProvider'); 

    return context;
}