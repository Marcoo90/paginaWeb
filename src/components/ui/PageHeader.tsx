interface PageHeaderProps {
    title: string;
    subtitle?: string;
    // In a real app, verify image prop or usage
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="bg-slate-900 text-white py-16 md:py-24 border-b border-amber-600/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
