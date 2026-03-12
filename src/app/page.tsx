import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import HeroMarquee from "@/components/ui/HeroMarquee";
import { Button } from "@/components/ui/Button";
import GallerySection from "@/components/sections/GallerySection";
import Link from "next/link";
import { HardHat, Mountain, ShieldCheck, Phone } from "lucide-react";
import { FadeIn, SlideUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white overflow-hidden">
          <HeroMarquee />

          {/* Improved Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
            <div className="max-w-3xl">
              <ScaleIn delay={0.2} duration={0.6}>
                <span className="inline-block px-3 py-1 rounded-sm bg-amber-600/20 text-amber-500 text-sm font-bold tracking-wider mb-4 border border-amber-600/30 backdrop-blur-sm">
                  EST. 2026
                </span>
              </ScaleIn>

              <SlideUp delay={0.3} duration={0.8}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg">
                  KORY MAQUI <br className="hidden md:block" />
                  <span className="text-amber-500">GROUP MOLLO</span>
                </h1>
              </SlideUp>

              <FadeIn delay={0.5} duration={0.8}>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                  Empresa minera mediana dedicada a la explotación responsable, con altos estándares de seguridad y eficiencia operativa en minería subterránea.
                </p>
              </FadeIn>

              <SlideUp delay={0.7} duration={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/operaciones">
                    <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-amber-900/20 active:scale-95 transition-transform duration-100">
                      Nuestras Operaciones
                    </Button>
                  </Link>
                  <Link href="/contacto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-500 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm active:scale-95 transition-transform duration-100">
                      Contactar
                    </Button>
                  </Link>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>

        {/* Key Stats Bar - Animated */}
        <div className="bg-amber-600 py-8 text-slate-900 shadow-xl relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/20" delay={0.2}>
              <StaggerItem className="p-2">
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-sm font-medium uppercase tracking-wide opacity-80">Años de Operación</div>
              </StaggerItem>
              <StaggerItem className="p-2">
                <div className="text-3xl font-bold mb-1">Subterránea</div>
                <div className="text-sm font-medium uppercase tracking-wide opacity-80">Tipo de Minería</div>
              </StaggerItem>
              <StaggerItem className="p-2">
                <div className="text-3xl font-bold mb-1">Chumbivilcas</div>
                <div className="text-sm font-medium uppercase tracking-wide opacity-80">Zona de Operación</div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Quick Access Grid - Animated */}
        <Section background="slate">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" delay={0.2}>
            {/* Card 1: Operaciones */}
            <StaggerItem>
              <div className="h-full bg-white p-8 rounded-sm shadow-sm border-t-4 border-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <Mountain className="h-10 w-10 text-slate-700 mb-6 group-hover:text-amber-600 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">Operaciones</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  Extracción, transporte y procesamiento con tecnología eficiente y procesos optimizados.
                </p>
                <Link href="/operaciones" className="mt-auto">
                  <span className="text-amber-600 font-bold text-sm uppercase tracking-wide hover:underline inline-flex items-center gap-1 group/link">
                    Ver Detalles <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </Link>
              </div>
            </StaggerItem>

            {/* Card 2: Seguridad */}
            <StaggerItem>
              <div className="h-full bg-white p-8 rounded-sm shadow-sm border-t-4 border-amber-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <ShieldCheck className="h-10 w-10 text-slate-700 mb-6 group-hover:text-amber-600 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">Seguridad Total</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  Compromiso innegociable con la seguridad de nuestros colaboradores y el cuidado ambiental.
                </p>
                <Link href="/seguridad" className="mt-auto">
                  <span className="text-amber-600 font-bold text-sm uppercase tracking-wide hover:underline inline-flex items-center gap-1 group/link">
                    Nuestras Políticas <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </Link>
              </div>
            </StaggerItem>

            {/* Card 3: Contacto */}
            <StaggerItem>
              <div className="h-full bg-white p-8 rounded-sm shadow-sm border-t-4 border-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <Phone className="h-10 w-10 text-slate-700 mb-6 group-hover:text-amber-600 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">Contacto Directo</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  Canales de comunicación abiertos para proveedores, comunidad y futuros colaboradores.
                </p>
                <Link href="/contacto" className="mt-auto">
                  <span className="text-amber-600 font-bold text-sm uppercase tracking-wide hover:underline inline-flex items-center gap-1 group/link">
                    Escríbenos <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Section>

        {/* Gallery Section */}
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}

