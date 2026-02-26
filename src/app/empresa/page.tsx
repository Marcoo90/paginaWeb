import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import { CheckCircle2 } from "lucide-react";
import HeroMarquee from "@/components/ui/HeroMarquee";
import { FadeIn, SlideUp } from "@/components/animations/MotionWrapper";
import { Metadata, Viewport } from "next";
import DocumentsSection from "@/components/sections/DocumentsSection";

export const metadata: Metadata = {
    title: "La Empresa | Kori Maqui",
    description: "Conozca más sobre nuestra historia, misión y valores.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function EmpresaPage() {
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
                            La Empresa
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Dedicados a la minería responsable con eficiencia y compromiso social.
                        </p>
                    </SlideUp>
                </div>
            </div>

            <main className="flex-grow">
                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeIn delay={0.2}>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wide border-l-4 border-amber-500 pl-4">
                                    Quiénes Somos
                                </h2>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    KORI MAQUI - GROUP MOLLO es una empresa de mediana minería formalizada, comprometida con el desarrollo económico de la región y el país. Nos especializamos en la extracción de minerales metálicos bajo estrictos estándares de seguridad y respeto por el medio ambiente.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Nuestra trayectoria se basa en la seriedad operativa, el cumplimiento irrestricto de la normativa legal vigente y el fortalecimiento continuo de nuestras relaciones comunitarias.
                                </p>
                            </div>
                        </FadeIn>

                        <SlideUp delay={0.4}>
                            <div className="bg-slate-100 p-8 rounded-sm border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase">Datos Clave</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">Empresa Minera Mediana Formalizada</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">Inscrita en SUNAT y Registros Públicos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">Cumplimiento normativa MINEM / OSINERGMIN</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">Capital 100% Nacional</span>
                                    </li>
                                </ul>
                            </div>
                        </SlideUp>
                    </div>
                </Section>

                {/* Mission Section */}
                <Section background="slate">
                    <FadeIn delay={0.3}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wide text-center border-b-4 border-amber-500 pb-4 inline-block w-full">
                                Nuestra Misión
                            </h2>
                            <div className="bg-white p-8 md:p-12 rounded-sm shadow-md border-l-4 border-amber-500 mt-8">
                                <p className="text-lg text-slate-700 leading-relaxed text-justify">
                                    Desarrollar operaciones mineras de mediana escala con los más altos estándares de seguridad,
                                    eficiencia y responsabilidad ambiental, contribuyendo al desarrollo económico sostenible de
                                    nuestra región y del país. Nos comprometemos a generar valor para nuestros accionistas,
                                    colaboradores y comunidades, mediante prácticas transparentes, el cumplimiento irrestricto
                                    de la normativa vigente y el fortalecimiento continuo de nuestras relaciones con todos los
                                    grupos de interés.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </Section>

                {/* Vision Section */}
                <Section>
                    <SlideUp delay={0.3}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wide text-center border-b-4 border-amber-500 pb-4 inline-block w-full">
                                Nuestra Visión
                            </h2>
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12 rounded-sm shadow-md border-l-4 border-amber-500 mt-8">
                                <p className="text-lg text-slate-700 leading-relaxed text-justify">
                                    Ser reconocidos como una empresa minera líder en el sector de mediana minería del Perú,
                                    destacándonos por nuestra excelencia operativa, compromiso con la seguridad y el medio ambiente,
                                    y por nuestro aporte significativo al desarrollo sostenible de las comunidades donde operamos.
                                    Aspiramos a consolidarnos como un referente de buenas prácticas mineras, innovación tecnológica
                                    y responsabilidad social, manteniendo siempre el respeto por nuestros valores institucionales
                                    y el cumplimiento de los más altos estándares de calidad y ética empresarial.
                                </p>
                            </div>
                        </div>
                    </SlideUp>
                </Section>

                <Section background="slate">
                    <FadeIn delay={0.3}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wide">
                                Filosofía de Trabajo
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-amber-600 mb-2">Seguridad</h3>
                                    <p className="text-sm text-slate-600">Prioridad absoluta en cada tarea. "Si no es seguro, no se hace".</p>
                                </div>
                                <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-amber-600 mb-2">Responsabilidad</h3>
                                    <p className="text-sm text-slate-600">Cumplimiento estricto de obligaciones laborales, tributarias y ambientales.</p>
                                </div>
                                <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-amber-600 mb-2">Eficiencia</h3>
                                    <p className="text-sm text-slate-600">Optimización constante de recursos para garantizar la sostenibilidad.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Section>

                {/* Legal Documents Section */}
                <DocumentsSection />
            </main>

            <Footer />
        </div>
    );
}
