import { FileText, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/animations/MotionWrapper";

interface DocumentCardProps {
    title: string;
    description: string;
    fileUrl: string;
    fileSize?: string;
    delay?: number;
}

export default function DocumentCard({
    title,
    description,
    fileUrl,
    fileSize = "PDF",
    delay = 0
}: DocumentCardProps) {
    return (
        <FadeIn delay={delay}>
            <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-slate-200 rounded-sm p-6 hover:shadow-lg hover:border-amber-500 transition-all duration-300 hover:-translate-y-1"
            >
                <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-sm flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                        <FileText className="w-6 h-6 text-amber-600" />
                    </div>

                    <div className="flex-grow min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                                {title}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors shrink-0 mt-1" />
                        </div>

                        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                            {description}
                        </p>

                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">
                                {fileSize}
                            </span>
                            <span className="text-xs text-slate-500">
                                Click para abrir
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </FadeIn>
    );
}
