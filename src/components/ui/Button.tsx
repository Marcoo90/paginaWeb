import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

// Simple utility if @/lib/utils doesn't exist yet, I'll allow this to arguably fail or just inline it?
// Wait, I should create lib/utils first or just inline clsx/twMerge logic or just use template literals.
// To be safe and dependency-free for now (clsx/tailwind-merge might not be there), I'll just use template literals carefully.
// Actually, I'll create the utils file next.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide";

        const variants = {
            primary: "bg-amber-600 text-white hover:bg-amber-700 shadow-sm",
            secondary: "bg-slate-800 text-white hover:bg-slate-900",
            outline: "border border-slate-300 bg-transparent hover:bg-slate-100 text-slate-900",
            ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-600",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 py-2",
            lg: "h-12 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
