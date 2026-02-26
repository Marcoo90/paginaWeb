"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    "/images/mining1.jpg",
    "/images/mining2.jpg",
    "/images/mining3.jpg",
];

export default function HeroMarquee() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
            {/* Overlay to darken images for text readability - Reduced opacity */}
            <div className="absolute inset-0 bg-slate-900/40 z-10" />

            {/* Marquee Container */}
            <div className="flex h-full animate-marquee whitespace-nowrap">
                {/* Intentionally duplicated sets for seamless loop */}
                {[...images, ...images, ...images].map((src, index) => (
                    <div key={index} className="relative h-full w-[80vw] md:w-[50vw] flex-shrink-0">
                        <Image
                            src={src}
                            alt="Mining Operation"
                            fill
                            className="object-cover opacity-60"
                            priority={index < 2}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
