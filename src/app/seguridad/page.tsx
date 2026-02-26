import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import { Shield, HardHat, Leaf, Droplets } from "lucide-react";
import HeroMarquee from "@/components/ui/HeroMarquee";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

export default function SeguridadPage() {
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
                            Seguridad y Medio Ambiente
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Cumplimiento riguroso de normativas y compromiso con el desarrollo sostenible.
                        </p>
                    </SlideUp>
                </div>
            </div>

            <main className="flex-grow">
                {/* Seguridad Section */}
                <Section>
                    <FadeIn delay={0.2}>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wide border-l-4 border-amber-500 pl-4">
                            Seguridad y Salud Ocupacional (SSO)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Shield className="h-8 w-8 text-amber-600 mr-3" />
                                    <h3 className="text-xl font-bold text-slate-900">Política de Seguridad</h3>
                                </div>
                                <p className="text-slate-600 mb-4 text-justify">
                                    En KORI MAQUI, la seguridad no es negociable. Fomentamos una cultura de prevención donde cada trabajador es responsable de su seguridad y la de sus compañeros.
                                </p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2">
                                    <li>Capacitaciones diarias de 5 minutos.</li>
                                    <li>Identificación de Peligros y Evaluación de Riesgos (IPERC).</li>
                                    <li>Comité de Seguridad y Salud activo.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <HardHat className="h-8 w-8 text-amber-600 mr-3" />
                                    <h3 className="text-xl font-bold text-slate-900">Uso de EPP</h3>
                                </div>
                                <p className="text-slate-600 text-justify">
                                    Garantizamos la entrega y uso correcto de Equipos de Protección Personal (EPP) certificados para cada labor específica en mina y superficie, cumpliendo con la normativa nacional vigente.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </Section>

                {/* Environment Section */}
                <Section background="slate">
                    <SlideUp delay={0.3}>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wide border-l-4 border-green-600 pl-4">
                            Gestión Ambiental
                        </h2>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" delay={0.4}>
                            <StaggerItem>
                                <div className="bg-white p-6 rounded-sm shadow-sm hover:-translate-y-1 transition-transform border-t-2 border-green-600 h-full">
                                    <Leaf className="h-10 w-10 text-green-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Residuos Sólidos</h3>
                                    <p className="text-sm text-slate-600">Segregación y disposición final adecuada de residuos en coordinación con Empresas Operadoras de Residuos Sólidos (EO-RS).</p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-white p-6 rounded-sm shadow-sm hover:-translate-y-1 transition-transform border-t-2 border-blue-600 h-full">
                                    <Droplets className="h-10 w-10 text-blue-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Control de Efluentes</h3>
                                    <p className="text-sm text-slate-600">Monitoreo constante de aguas y manejo responsable de recursos hídricos para evitar contaminación.</p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-white p-6 rounded-sm shadow-sm hover:-translate-y-1 transition-transform border-t-2 border-slate-600 h-full">
                                    <Shield className="h-10 w-10 text-slate-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Cierre de Minas</h3>
                                    <p className="text-sm text-slate-600">Planificación progresiva para la rehabilitación de áreas intervenidas.</p>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </SlideUp>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
