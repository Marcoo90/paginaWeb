"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, HardHat } from "lucide-react";

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "La Empresa", href: "/empresa" },
    { name: "Operaciones", href: "/operaciones" },
    { name: "Seguridad", href: "/seguridad" },
    { name: "Comunicados", href: "/comunicados" },
    { name: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
    { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-xl backdrop-blur-md bg-slate-900/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* 1. Logo Section */}
                    <Link href="/" className="flex items-center gap-3 shrink-0 group z-50">
                        <div className="bg-amber-100 p-1 rounded-sm group-hover:bg-amber-500 transition-colors shadow-lg">
                            {/* <HardHat className="h-6 w-6 text-slate-900" />*/}
                            <Image src="/images/logotipoPro.png" alt="Logo Kori Maqui" width={50} height={50} className="object-contain" />
                        </div>
                        <span className="font-bold text-lg tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-white transition-all">
                            Kori Maqui
                        </span>
                    </Link>

                    {/* 2. Desktop Navigation - Centered */}
                    <div className="hidden lg:flex items-center justify-center space-x-1 flex-1 px-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-[13px] font-bold text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm transition-all uppercase tracking-wide border-b-2 border-transparent hover:border-amber-500"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* 3. Actions / Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Login Button */}
                        <div className="hidden lg:block">
                            <Link
                                href="https://minerApp.korimaqui.com"
                                className="text-xs font-black bg-amber-500 text-slate-900 px-5 py-2.5 rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wide flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5"
                            >
                                <HardHat className="h-3.5 w-3.5" />
                                Iniciar Sesión
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors"
                            >
                                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Animated & Centered */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-slate-900 border-t border-slate-800 px-4 pt-4 pb-8 space-y-2 shadow-inner">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 rounded-md text-center text-sm font-bold text-slate-300 hover:text-white hover:bg-white/5 uppercase tracking-wide border border-transparent hover:border-slate-700 transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 mt-4 border-t border-slate-800">
                        <Link
                            href="https://minerApp.korimaqui.com"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center w-full px-4 py-3 rounded-md text-sm font-black text-amber-500 hover:text-amber-400 uppercase bg-amber-950/30 border border-amber-500/30 hover:bg-amber-950/50 hover:border-amber-400/50 transition-all gap-2"
                        >
                            <HardHat className="h-4 w-4" />
                            Iniciar Sesión
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
