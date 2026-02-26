import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";

export default function PoliticaPrivacidadPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow">
                <Section>
                    <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
                    <div className="prose max-w-none text-slate-600">
                        <p>
                            En cumplimento de la Ley de Protección de Datos Personales, KORI MAQUI - GROUP MOLLO informa que los datos personales recepcionados a través de formularios o correos electrónicos serán tratados con estricta confidencialidad.
                        </p>
                        <p className="mt-4">
                            <strong>Finalidad del tratamiento:</strong><br />
                            Atender consultas, procesos de selección y gestión con proveedores.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
