import Image from "next/image";
import { FadeIn } from "@/components/animations/MotionWrapper";

interface GalleryCardProps {
    imageUrl: string;
    title?: string;
    description?: string;
    delay?: number;
    onClick?: () => void;
}

export default function GalleryCard({
    imageUrl,
    title,
    description,
    delay = 0,
    onClick
}: GalleryCardProps) {
    return (
        <FadeIn delay={delay}>
            <div
                onClick={onClick}
                className="group relative bg-white border border-slate-200 rounded-sm overflow-hidden cursor-pointer hover:shadow-xl hover:border-amber-500 transition-all duration-300 hover:-translate-y-1"
            >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                        src={imageUrl}
                        alt={title || "Imagen de galería"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Text Content (if provided) */}
                {(title || description) && (
                    <div className="p-4">
                        {title && (
                            <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                                {title}
                            </h3>
                        )}
                        {description && (
                            <p className="text-sm text-slate-600 line-clamp-2">
                                {description}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </FadeIn>
    );
}
