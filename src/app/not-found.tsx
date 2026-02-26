import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <AlertTriangle className="h-24 w-24 text-amber-500 mx-auto mb-6" />
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <h2 className="text-2xl font-bold text-slate-300 mb-6">Página No Encontrada</h2>
                <p className="text-slate-400 mb-8">
                    La ruta a la que intenta acceder no existe o ha sido movida. Por favor, verifique la dirección o regrese al inicio.
                </p>
                <Link href="/">
                    <Button size="lg">
                        Regresar al Inicio
                    </Button>
                </Link>
            </div>
        </div>
    );
}
