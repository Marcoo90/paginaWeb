import DocumentCard from "@/components/ui/DocumentCard";
import { SlideUp } from "@/components/animations/MotionWrapper";

interface Document {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    fileSize?: string;
}

// Sample documents - replace with actual documents
const documents: Document[] = [
    {
        id: "1",
        title: "Reglamento Interno de Seguridad y Salud Ocupacional",
        description: "Normativa interna que establece los lineamientos de seguridad y salud en el trabajo para todas las operaciones mineras.",
        fileUrl: "/documentos/reglamento-seguridad.pdf",
        fileSize: "PDF"
    },
    {
        id: "2",
        title: "Código de Ética y Conducta",
        description: "Principios éticos y normas de conducta que rigen las relaciones laborales y comerciales de la empresa.",
        fileUrl: "/documentos/codigo-etica.pdf",
        fileSize: "PDF"
    },
    {
        id: "3",
        title: "Política de Medio Ambiente",
        description: "Compromiso ambiental y lineamientos para la gestión responsable de recursos naturales y prevención de impactos.",
        fileUrl: "/documentos/politica-ambiental.pdf",
        fileSize: "PDF"
    },
    {
        id: "4",
        title: "Manual de Procedimientos Operativos",
        description: "Procedimientos estandarizados para las operaciones mineras, incluyendo extracción, procesamiento y transporte.",
        fileUrl: "/documentos/manual-procedimientos.pdf",
        fileSize: "PDF"
    },
    {
        id: "5",
        title: "Plan de Relaciones Comunitarias",
        description: "Estrategias y acciones para el desarrollo sostenible de las comunidades en el área de influencia.",
        fileUrl: "/documentos/plan-relaciones-comunitarias.pdf",
        fileSize: "PDF"
    },
    {
        id: "6",
        title: "Normativa de Gestión de Calidad",
        description: "Estándares de calidad aplicados en todos los procesos productivos y administrativos de la organización.",
        fileUrl: "/documentos/normativa-calidad.pdf",
        fileSize: "PDF"
    }
];

export default function DocumentsSection() {
    return (
        <section className="py-16 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <SlideUp delay={0.2}>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                            Documentos Legales y Normativos
                        </h2>
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            Acceda a nuestros documentos oficiales, normas internas y lineamientos que rigen nuestras operaciones.
                            Todos los documentos están disponibles para consulta y descarga.
                        </p>
                    </div>
                </SlideUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documents.map((doc, index) => (
                        <DocumentCard
                            key={doc.id}
                            title={doc.title}
                            description={doc.description}
                            fileUrl={doc.fileUrl}
                            fileSize={doc.fileSize}
                            delay={0.1 * (index + 1)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
