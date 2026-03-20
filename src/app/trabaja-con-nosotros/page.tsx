import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Briefcase, AlertTriangle, Mail } from "lucide-react";
import HeroMarquee from "@/components/ui/HeroMarquee";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
const JOBS = [
    {
        id: 1,
        position: "ayudante topografo",
        area: "Mina",
        requirements: [
            "tecnico en topografia y/o afines.",
            "Experiencia mínima de 1 año.",
            "Disponibilidad para régimen atípico."
        ]
    },
    {
        id: 2,
        position: "mecánico electricista",
        area: "Mina",
        requirements: [
            "tecnico mecánico electricista.",
            "Experiencia mínima de 2 año.",
            "Disponibilidad para trabajar en mina."
        ]
    }
];
/*
const JOBS = [
    {
        
        id: 1,
        position: "Operador de Jumbo",
        area: "Mina",
        requirements: [
            "Secundaria completa.",
            "Experiencia mínima de 2 años en minería subterránea.",
            "Licencia de conducir AIIIC."
        ]
    },
    {
        id: 2,
        position: "Ayudante Perforista",
        area: "Mina",
        requirements: [
            "Secundaria completa.",
            "Experiencia mínima de 1 año.",
            "Disponibilidad para régimen atípico."
        ]
    },
    {
        id: 3,
        position: "Técnico Mecánico de Equipos Trackless",
        area: "Mantenimiento",
        requirements: [
            "Técnico titulado.",
            "Experiencia en Scooptram y Dumper.",
            "Disponibilidad inmediata."
        ]
    }
    
];
*/
export default function TrabajaPage() {
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
                            Trabaja con Nosotros
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Únete a un equipo comprometido con la excelencia y la seguridad.
                        </p>
                    </SlideUp>
                </div>
            </div>

            <main className="flex-grow">
                <Section background="slate">
                    <FadeIn delay={0.2}>
                        {/* Warning Box */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-sm shadow-sm">
                            <div className="flex items-start">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mr-4 shrink-0 mt-1 animate-pulse" />
                                <div>
                                    <h3 className="font-bold text-amber-800 mb-1">Aviso Importante</h3>
                                    <p className="text-sm text-amber-900">
                                        KORI MAQUI - GROUP MOLLO <strong>nunca solicita dinero</strong> ni pagos por exámenes médicos o trámites administrativos durante sus procesos de selección. Toda comunicación se realiza a través de correos corporativos oficiales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <SlideUp delay={0.4}>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wide">
                            Convocatorias Vigentes
                        </h2>
                    </SlideUp>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" delay={0.5}>
                        {JOBS.map((job) => (
                            <StaggerItem key={job.id}>
                                <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-lg text-slate-900">{job.position}</h3>
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full uppercase font-bold">
                                            {job.area}
                                        </span>
                                    </div>
                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-slate-700 mb-2">Requisitos:</h4>
                                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                            {job.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/*<Button className="w-full text-sm" disabled>
                                        Ver Detalle (Próximamente)
                                    </Button>*/}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <FadeIn delay={0.6}>
                        <div className="bg-slate-900 text-white p-8 rounded-sm text-center shadow-lg">
                            <Mail className="h-10 w-10 mx-auto text-amber-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">¿Quieres formar parte de nuestra base de datos?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                                Envía tu CV documentado indicando en el asunto el puesto de interés.
                            </p>
                            <p className="text-2xl font-bold text-amber-500 select-all hover:text-amber-400 transition-colors cursor-pointer">
                                rrhh@korimaqui.com
                            </p>
                        </div>
                    </FadeIn>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
