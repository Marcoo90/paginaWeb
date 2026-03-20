import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Music2 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                            Kori Maqui
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed">
                            Empresa minera mediana dedicada a la explotación responsable, priorizando la seguridad y el cuidado del medio ambiente.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/operaciones" className="hover:text-amber-500 transition-colors">
                                    Operaciones
                                </Link>
                            </li>
                            <li>
                                <Link href="/seguridad" className="hover:text-amber-500 transition-colors">
                                    Seguridad y Medio Ambiente
                                </Link>
                            </li>
                            <li>
                                <Link href="/trabaja-con-nosotros" className="hover:text-amber-500 transition-colors">
                                    Trabaja con Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/comunicados" className="hover:text-amber-500 transition-colors">
                                    Comunicados
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                            Contacto
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-amber-600 shrink-0" />
                                <span>Choccoyo-Colquemarca-Chumbivilcas</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-amber-600 shrink-0" />
                                <span>+51 943 652 847</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-amber-600 shrink-0" />
                                <span>rrhh@korimaqui.com</span>
                            </li>
                        </ul>
                    </div>
                    {/* redes sociales*/}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                            Redes Sociales
                        </h3>
                        <div className="flex space-x-4">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-900 p-2 rounded-full hover:text-amber-500 transition-all hover:scale-110"
                            >
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-900 p-2 rounded-full hover:text-amber-500 transition-all hover:scale-110"
                            >
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-900 p-2 rounded-full hover:text-amber-500 transition-all hover:scale-110"
                            >
                                <Music2 className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 text-center text-xs">
                    <p>
                        &copy; {new Date().getFullYear()} KORI MAQUI - GROUP MOLLO. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
