import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "slate" | "dark";
}

export default function Section({
    children,
    className = "",
    id = "",
    background = "white",
}: SectionProps) {
    const bgColors = {
        white: "bg-white",
        slate: "bg-slate-50",
        dark: "bg-slate-900",
    };

    return (
        <section id={id} className={`${bgColors[background]} py-16 md:py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
