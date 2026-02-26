import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";

export default function AvisoLegalPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow">
                <Section>
                    <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
                    <div className="prose max-w-none text-slate-600">
                        <p>
                            El presente documento regula los términos y condiciones de uso del sitio web de KORI MAQUI - GROUP MOLLO.
                        </p>
                        <p className="mt-4">
                            <strong>1. Datos Identificativos</strong><br />
                            KORI MAQUI - GROUP MOLLO, con domicilio fiscal en Chumbivilcas, Perú.
                        </p>
                        <p className="mt-4">
                            <strong>2. Propiedad Intelectual</strong><br />
                            Todos los contenidos de este sitio web (textos, imágenes, logotipos) son propiedad de la empresa.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
