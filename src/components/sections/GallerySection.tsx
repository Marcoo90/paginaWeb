"use client";

import { useState } from "react";
import GalleryCard from "@/components/ui/GalleryCard";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
    id: string;
    imageUrl: string;
    title?: string;
    description?: string;
}

// Sample gallery images - replace with actual images
const galleryImages: GalleryImage[] = [
    {
        id: "1",
        imageUrl: "/images/korimaqui1.jpeg",
        title: "Operaciones Subterráneas",
        description: "Extracción responsable en nuestras instalaciones mineras"
    },
    {
        id: "2",
        imageUrl: "/images/korimaqui2.jpeg",
        title: "Equipo de Trabajo",
        description: "Profesionales comprometidos con la seguridad y eficiencia"
    },
    {
        id: "3",
        imageUrl: "/images/korimaqui3.jpeg",
        title: "Tecnología Avanzada",
        description: "Equipamiento moderno para operaciones óptimas"
    },
    {
        id: "4",
        imageUrl: "/images/korimaqui4.jpeg",
        title: "Procesamiento de Mineral",
        description: "Instalaciones de última generación"
    },
    {
        id: "5",
        imageUrl: "/images/korimaqui5.jpeg",
        title: "Seguridad Primero",
        description: "Protocolos estrictos en todas nuestras operaciones"
    },
    {
        id: "6",
        imageUrl: "/images/korimaqui6.jpeg",
        title: "Compromiso Ambiental",
        description: "Minería responsable con el medio ambiente"
    }
];

export default function GallerySection() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        // Restore body scroll
        document.body.style.overflow = "unset";
    };

    const goToPrevious = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(
                selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1
            );
        }
    };

    const goToNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(
                selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1
            );
        }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
    };

    return (
        <>
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <SlideUp delay={0.2}>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                                Galería de Operaciones
                            </h2>
                            <p className="text-slate-600 max-w-3xl mx-auto">
                                Conozca nuestras instalaciones, equipos y el compromiso de nuestro equipo con la excelencia operativa y la seguridad.
                            </p>
                        </div>
                    </SlideUp>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" delay={0.1}>
                        {galleryImages.map((image, index) => (
                            <StaggerItem key={image.id}>
                                <GalleryCard
                                    imageUrl={image.imageUrl}
                                    title={image.title}
                                    description={image.description}
                                    onClick={() => openLightbox(index)}
                                />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors z-10"
                        aria-label="Cerrar"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute left-4 text-white hover:text-amber-500 transition-colors z-10"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-12 h-12" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        className="absolute right-4 text-white hover:text-amber-500 transition-colors z-10"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-12 h-12" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={galleryImages[selectedImageIndex].imageUrl}
                            alt={galleryImages[selectedImageIndex].title || "Imagen de galería"}
                            className="w-full h-full object-contain"
                        />

                        {/* Image Info */}
                        {(galleryImages[selectedImageIndex].title || galleryImages[selectedImageIndex].description) && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                {galleryImages[selectedImageIndex].title && (
                                    <h3 className="text-xl font-bold mb-2">
                                        {galleryImages[selectedImageIndex].title}
                                    </h3>
                                )}
                                {galleryImages[selectedImageIndex].description && (
                                    <p className="text-slate-200">
                                        {galleryImages[selectedImageIndex].description}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Image Counter */}
                        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                            {selectedImageIndex + 1} / {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
