import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import { Calendar, User } from "lucide-react";
import HeroMarquee from "@/components/ui/HeroMarquee";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import { Metadata, Viewport } from "next";

// Mock Data
const COMUNICADOS = [{
    id: 1,
    title: "",
    date: "",
    author: "",
    content: ""
}];
/*
const COMUNICADOS = [
    {
        id: 1,
        title: "Mantenimiento Programado de Vía de Acceso Principal",
        date: "15 Ene 2026",
        author: "Gerencia de Operaciones",
        content: "Se informa a todos los proveedores y colaboradores que el día 20 de Enero se realizarán trabajos de mantenimiento en el Km 12 de la vía de acceso. El tránsito será restringido entre las 08:00 y 14:00 horas."
    },
    {
        id: 2,
        title: "Convocatoria a Proveedores Locales 2026",
        date: "10 Ene 2026",
        author: "Logística",
        content: "KORI MAQUI invita a las empresas locales a actualizar su documentación para el padrón de proveedores 2026. La recepción de carpetas será hasta el 28 de Febrero en nuestras oficinas administrativas."
    },
    {
        id: 3,
        title: "Campaña de Salud Ocupacional - Q1",
        date: "05 Ene 2026",
        author: "SSO",
        content: "Recordamos a todo el personal que los exámenes médicos anuales inician este 1 de Febrero. Reviar el cronograma publicado en garita de control."
    }
];
*/
export const metadata: Metadata = {
    title: "Comunicados Oficiales | Kori Maqui",
    description: "Información oficial y avisos operativos.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function ComunicadosPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />

            {/* Hero Section Replicated */}
            <div className="relative bg-slate-900 text-white overflow-hidden h-[50vh] min-h-[400px] flex items-center justify-center">
                <HeroMarquee />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <SlideUp duration={0.8}>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
                            Comunicados
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Información oficial y avisos operativos de KORI MAQUI.
                        </p>
                    </SlideUp>
                </div>
            </div>

            <main className="flex-grow">
                <Section>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <StaggerContainer delay={0.2}>
                            {COMUNICADOS.map((item) => (
                                <StaggerItem key={item.id}>
                                    <article className="bg-white p-8 rounded-sm shadow-sm border border-slate-200 hover:border-amber-400 transition-colors mb-8">
                                        <h2 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h2>
                                        <div className="flex flex-wrap text-sm text-slate-500 mb-4 gap-4">
                                            <span className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                {item.date}
                                            </span>
                                            <span className="flex items-center text-amber-600 font-medium">
                                                <User className="h-4 w-4 mr-1" />
                                                {item.author}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed">
                                            {item.content}
                                        </p>
                                    </article>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
