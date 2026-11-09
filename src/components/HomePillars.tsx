import React from 'react';
import { Globe, Bot, LayoutDashboard, ArrowRight, Check } from 'lucide-react';

const pillars = [
  {
    icon: Globe,
    title: 'Páginas Web en 48hs',
    tagline: 'Tu vidriera lista para vender en el celular',
    description:
      'Páginas web modernas, ultra rápidas y con dominio propio. Con catálogo claro y botón directo a tu WhatsApp para cerrar ventas.',
    badge: 'Entrega 48hs',
    badgeColor: 'bg-[#FFDC60]/40 text-[#855B00]',
    link: '/servicios#webs',
    linkText: 'Conocer más de Webs'
  },
  {
    icon: Bot,
    title: 'WhatsApp con Inteligencia Artificial',
    tagline: 'Atención y ventas automáticas las 24 horas',
    description:
      'Un asistente inteligente que atiende dudas frecuentes en 3 segundos, muestra productos y agenda citas sin hacer esperar al cliente.',
    badge: 'Atención 24/7',
    badgeColor: 'bg-[#FAB8C4]/40 text-[#9E1B32]',
    link: '/servicios#whatsapp',
    linkText: 'Conocer más de WhatsApp IA'
  },
  {
    icon: LayoutDashboard,
    title: 'Sistemas a Medida (Chau Excel)',
    tagline: 'Todo tu negocio en una sola pantalla',
    description:
      'Controlá clientes, stock, facturación y caja diaria desde tu teléfono o computadora con paneles diseñados a tu medida.',
    badge: 'Orden Total',
    badgeColor: 'bg-[#EBEAFB] text-[#5956E9]',
    link: '/servicios#sistemas',
    linkText: 'Conocer más de Sistemas'
  }
];

export default function HomePillars() {
  return (
    <section className="relative py-20 bg-[#F6F8FF] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14" data-dr-anim="scale-y">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5956E9]/20 bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9] mb-3">
            Tres Soluciones Directas
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#27272E]">
            Todo lo que necesitás para <span className="text-[#5956E9]">digitalizar tu negocio</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525260] font-normal">
            Elegí la solución que tu negocio necesita hoy y escalá a tu propio ritmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                data-dr-anim="translate-y"
                className="rounded-3xl bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-drnube-float transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EBEAFB] text-[#5956E9]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#27272E]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#5956E9]">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-sm text-[#525260] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#5956E9] hover:text-[#4441C8] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
