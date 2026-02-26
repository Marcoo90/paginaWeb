"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { sendContactEmail } from "@/app/actions/sendEmail";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import HeroMarquee from "@/components/ui/HeroMarquee";

export default function ContactoPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />

            {/* Hero Section Replicated */}
            <div className="relative bg-slate-900 text-white overflow-hidden h-[50vh] min-h-[400px] flex items-center justify-center">
                <HeroMarquee />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <SlideUp duration={0.8}>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
                            Contacto
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Estamos a su disposición para atender sus consultas y requerimientos.
                        </p>
                    </SlideUp>
                </div>
            </div>

            <main className="flex-grow">
                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <FadeIn delay={0.2}>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wide border-l-4 border-amber-500 pl-4">
                                    Información Directa
                                </h2>
                                <StaggerContainer className="space-y-6" delay={0.3}>
                                    <StaggerItem>
                                        <div className="flex items-start">
                                            <div className="bg-slate-100 p-3 rounded-sm mr-4 hover:bg-amber-100 transition-colors duration-300">
                                                <MapPin className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">Dirección Fiscal</h3>
                                                <p className="text-slate-600">Choccoyo-Colquemarca-Chumbivilcas, Cusco, Perú.</p>
                                            </div>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem>
                                        <div className="flex items-start">
                                            <div className="bg-slate-100 p-3 rounded-sm mr-4 hover:bg-amber-100 transition-colors duration-300">
                                                <Phone className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">Teléfonos</h3>
                                                <p className="text-slate-600">+51 962 274 204<br />+51 999 888 777</p>
                                            </div>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem>
                                        <div className="flex items-start">
                                            <div className="bg-slate-100 p-3 rounded-sm mr-4 hover:bg-amber-100 transition-colors duration-300">
                                                <Mail className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">Correo Electrónico</h3>
                                                <p className="text-slate-600">contacto@korimaqui.com</p>
                                            </div>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem>
                                        <div className="flex items-start">
                                            <div className="bg-slate-100 p-3 rounded-sm mr-4 hover:bg-amber-100 transition-colors duration-300">
                                                <Clock className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">Horario de Atención</h3>
                                                <p className="text-slate-600">Lunes a Viernes: 08:00 - 18:00<br />Sábados: 09:00 - 13:00</p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                </StaggerContainer>

                                {/* Map Placeholder */}
                                <SlideUp delay={0.6}>
                                    <div className="mt-8 h-64 bg-slate-200 rounded-sm flex items-center justify-center border border-slate-300 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                                        <p className="text-slate-500 font-medium flex items-center z-10 bg-white/80 p-3 rounded-full shadow-sm backdrop-blur-sm group-hover:scale-105 transition-transform">
                                            <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                                            Mapa de Ubicación (Choccoyo)
                                        </p>
                                    </div>
                                </SlideUp>
                            </div>
                        </FadeIn>

                        {/* Form */}
                        <SlideUp delay={0.4} className="h-full">
                            <div className="bg-slate-50 p-8 rounded-sm border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wide flex items-center">
                                    <span className="w-1 h-6 bg-amber-500 mr-3 hidden sm:block"></span>
                                    Envíenos un Mensaje
                                </h2>
                                <form action={async (formData) => {
                                    const result = await sendContactEmail(null, formData);
                                    if (result.success) {
                                        alert(result.message);
                                        // Optional: reset form
                                        const form = document.getElementById("contact-form") as HTMLFormElement;
                                        form?.reset();
                                    }
                                }} id="contact-form" className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            className="w-full rounded-sm border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 h-10 px-3 border transition-all hover:border-amber-400 focus:shadow-md"
                                            placeholder="Ingrese su nombre"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                required
                                                className="w-full rounded-sm border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 h-10 px-3 border transition-all hover:border-amber-400 focus:shadow-md"
                                                placeholder="correo@empresa.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                className="w-full rounded-sm border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 h-10 px-3 border transition-all hover:border-amber-400 focus:shadow-md"
                                                placeholder="+51 999..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Asunto</label>
                                        <select
                                            name="subject"
                                            id="subject"
                                            className="w-full rounded-sm border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 h-10 px-3 border bg-white transition-all hover:border-amber-400"
                                        >
                                            <option>Consulta General</option>
                                            <option>Proveedores</option>
                                            <option>Recursos Humanos</option>
                                            <option>Comunidad</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            required
                                            className="w-full rounded-sm border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border transition-all hover:border-amber-400 focus:shadow-md"
                                            placeholder="Escriba su mensaje aquí..."
                                        />
                                    </div>

                                    <Button type="submit" className="w-full transform transition hover:scale-[1.02] active:scale-95 shadow-lg shadow-amber-500/20">
                                        Enviar Mensaje
                                    </Button>
                                </form>
                            </div>
                        </SlideUp>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
