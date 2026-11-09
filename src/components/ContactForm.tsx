import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, Calendar, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    service: 'Web Express 48hs',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola Nico! Soy ${formData.name} de ${formData.business || 'mi negocio'}. Me interesa: ${formData.service}. Mi celular es ${formData.phone}. Detalle: ${formData.notes || 'Quiero recibir información'}.`;
    const url = `https://wa.me/5491100000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5956E9]/20 bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9] mb-4">
                Contacto Directo
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#27272E] leading-tight">
                Hablemos de tu <span className="text-[#5956E9]">negocio</span>
              </h1>
              <p className="mt-4 text-lg text-[#525260] leading-relaxed">
                Sin intermediarios. Escribime y charlamos sobre cómo digitalizar tu comercio de la manera más rápida y rentable.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20hacer%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-[#F6F8FF] p-5 border border-slate-200/80 hover:border-[#5956E9] transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-base text-[#27272E]">WhatsApp Directo</p>
                  <p className="text-xs text-[#525260]">Respuesta rápida en el día</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl bg-[#F6F8FF] p-5 border border-slate-200/80">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBEAFB] text-[#5956E9]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-base text-[#27272E]">Correo Electrónico</p>
                  <p className="text-xs text-[#525260]">contacto@nicoguzmandev.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#F6F8FF] p-5 border border-slate-200/80">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFDC60]/40 text-[#855B00]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-base text-[#27272E]">Videollamada de 15 Minutos</p>
                  <p className="text-xs text-[#525260]">Por Google Meet sin cargo</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-5 border border-emerald-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-800">
                <p className="font-bold">Garantía de Satisfacción</p>
                <p className="mt-0.5">30 días de soporte post-lanzamiento en todos los proyectos.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#F6F8FF] p-8 sm:p-10 border border-slate-200 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#27272E] mb-2">
                Envianos tu consulta
              </h2>
              <p className="text-sm text-[#525260] mb-6">
                Completá los datos y te respondemos por WhatsApp con una propuesta a medida.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#525260] mb-1.5">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#27272E] border border-slate-200 focus:outline-none focus:border-[#5956E9]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#525260] mb-1.5">
                      Nombre o Rubro de tu Negocio
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Barbería, Inmobiliaria..."
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#27272E] border border-slate-200 focus:outline-none focus:border-[#5956E9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#525260] mb-1.5">
                      Tu Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 11 2345-6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#27272E] border border-slate-200 focus:outline-none focus:border-[#5956E9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#525260] mb-1.5">
                    Servicio de Interés
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#27272E] border border-slate-200 focus:outline-none focus:border-[#5956E9]"
                  >
                    <option value="Web Express 48hs">Web Express 48hs ($180.000 ARS)</option>
                    <option value="Web + Bot WhatsApp IA">Web + Bot WhatsApp con IA ($390.000 ARS)</option>
                    <option value="Sistema a Medida / CRM">Sistema a Medida / CRM (Chau Excel)</option>
                    <option value="Google Maps & Presencia Local">Google Maps & Presencia Local</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#525260] mb-1.5">
                    Comentarios o dudas
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contanos qué necesitás o cómo trabajás hoy..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#27272E] border border-slate-200 focus:outline-none focus:border-[#5956E9]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#5956E9] py-4 text-sm font-bold text-white shadow-md shadow-[#5956E9]/30 hover:bg-[#4441C8] transition-all cursor-pointer"
                >
                  <span>Enviar Consulta por WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
