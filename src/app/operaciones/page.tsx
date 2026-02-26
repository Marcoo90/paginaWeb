import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import { Mountain, Hammer, Boxes, Truck } from "lucide-react";
import HeroMarquee from "@/components/ui/HeroMarquee";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

export default function OperacionesPage() {
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
                            Operaciones
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Unidades mineras enfocadas en la productividad, seguridad y control de costos.
                        </p>
                    </SlideUp>
                </div>
            </div>

            <main className="flex-grow">
                <Section>
                    <div className="grid grid-cols-1 gap-12">
                        <FadeIn delay={0.2}>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wide border-l-4 border-amber-500 pl-4">
                                    Tipo de Operación
                                </h2>
                                <div className="bg-slate-50 p-6 md:p-8 rounded-sm border border-slate-200 mb-8 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start">
                                        <Mountain className="h-12 w-12 text-slate-700 mr-6 shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">Minería Subterránea</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                Nuestras operaciones se desarrollan principalmente bajo el método de minería subterránea convencional y mecanizada, optimizando la extracción de vetas angostas y cuerpos mineralizados con técnicas de sostenimiento certificadas.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white p-6 rounded-sm shadow-sm border-t-2 border-slate-200 hover:-translate-y-1 transition-transform">
                                        <h4 className="font-bold text-slate-900 mb-2 uppercase">Ubicación</h4>
                                        <p className="text-slate-600">Región Cusco, Perú.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-sm shadow-sm border-t-2 border-slate-200 hover:-translate-y-1 transition-transform">
                                        <h4 className="font-bold text-slate-900 mb-2 uppercase">Minerales</h4>
                                        <p className="text-slate-600">Polimetálico (Cobre).</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <SlideUp delay={0.4}>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wide border-l-4 border-amber-500 pl-4">
                                    Ciclo Operativo
                                </h2>
                                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" delay={0.5}>
                                    {/* Step 1 */}
                                    <StaggerItem>
                                        <div className="group bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-all">
                                            <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                                                <Hammer className="h-8 w-8 text-slate-700 group-hover:text-amber-600 transition-colors" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-2">1. Extracción</h4>
                                            <p className="text-sm text-slate-600">Perforación, voladura y acarreo seguro en interior mina.</p>
                                        </div>
                                    </StaggerItem>

                                    {/* Step 2 */}
                                    <StaggerItem>
                                        <div className="group bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-all">
                                            <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                                                <Truck className="h-8 w-8 text-slate-700 group-hover:text-amber-600 transition-colors" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-2">2. Transporte</h4>
                                            <p className="text-sm text-slate-600">Logística de transporte de mineral hacia planta de beneficio.</p>
                                        </div>
                                    </StaggerItem>

                                    {/* Step 3 */}
                                    <StaggerItem>
                                        <div className="group bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-all">
                                            <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                                                <Boxes className="h-8 w-8 text-slate-700 group-hover:text-amber-600 transition-colors" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-2">3. Procesamiento</h4>
                                            <p className="text-sm text-slate-600">Comercialización y procesamiento básico cumpliendo leyes medioambientales.</p>
                                        </div>
                                    </StaggerItem>
                                </StaggerContainer>
                            </div>
                        </SlideUp>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
