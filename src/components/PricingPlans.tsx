import React, { useState } from 'react';

export default function PricingPlans() {
  const [billingMode, setBillingMode] = useState<'unico' | 'mensual'>('unico');

  const plans = [
    {
      badge: 'Paso 1 · Tu Vidriera Online',
      name: 'Pack Web Express',
      highlight: false,
      delay: '100',
      priceUnico: '$ 180.000',
      priceMensual: '$ 45.000',
      subUnico: 'ARS · Pago único llave en mano',
      subMensual: 'ARS / mes · Hosting + Cambios incluidos',
      description:
        'Tu página web profesional lista en 48 horas con diseño moderno y adaptada a celulares.',
      features: [
        'Web completa con tus fotos, servicios y precios en ARS',
        'Adaptada 100% a celulares (carga en menos de 1 segundo)',
        'Botón directo a tu WhatsApp para recibir clientes listos',
        'Dominio propio, hosting de alta velocidad y certificado SSL',
        'Aparición destacada en búsquedas de Google',
      ],
      ctaText: 'Elegir Web Express',
      waLink:
        'https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20empezar%20con%20el%20Pack%20Web%20Express%20para%20mi%20negocio.',
    },
    {
      badge: 'El Más Elegido · Digitalización Total ⭐',
      name: 'Web + Bot WhatsApp con IA',
      highlight: true,
      delay: '200',
      priceUnico: '$ 390.000',
      priceMensual: '$ 85.000',
      subUnico: 'ARS · Implementación completa',
      subMensual: 'ARS / mes · Asistente IA + Mantenimiento',
      description:
        'La solución completa: tu web profesional más un asistente de WhatsApp que responde y cobra solo.',
      features: [
        'Todo lo incluido en el Pack Web Express',
        'Bot de WhatsApp con IA entrenado exclusivamente para tu negocio',
        'Responde consultas y dudas frecuentes en 3 segundos las 24 hs',
        'Cobro automático de señas por Mercado Pago',
        'Sincronización en vivo con tu agenda de Google Calendar',
      ],
      ctaText: 'Quiero la Solución Completa',
      waLink:
        'https://wa.me/5491100000000?text=Hola%20Nico!%20Me%20interesa%20el%20plan%20Web%20%2B%20Bot%20WhatsApp%20con%20IA.',
    },
    {
      badge: 'Paso 3 · Control y Gestión',
      name: 'Sistema a Medida / ERP',
      highlight: false,
      delay: '300',
      priceUnico: 'A Medida',
      priceMensual: 'Partner Tech',
      subUnico: 'Presupuesto cerrado por etapas',
      subMensual: 'Evolución continua y soporte',
      description:
        'Chau planillas de Excel. Software web simple para controlar stock, ventas y empleados desde tu celular.',
      features: [
        'Diagnóstico operativo de tu negocio sin cargo',
        'Panel web en tu celular para ver ventas, caja y stock en vivo',
        'Cuentas corrientes y recordatorios automáticos de cobro',
        'Permisos por usuario para socios, encargados y cajeros',
        'Soporte directo con Nicolás sin intermediarios',
      ],
      ctaText: 'Consultar por Sistema',
      waLink:
        'https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20consultar%20por%20un%20Sistema%20a%20medida%20para%20mi%20negocio.',
    },
  ];

  return (
    <section id="planes" className="relative py-20 lg:py-28 bg-[#F6F8FF] overflow-hidden">
      {/* Rellax Floating Spheres */}
      <div
        data-parallax-speed="-1.5"
        className="pointer-events-none absolute top-16 left-[8%] h-20 w-20 rounded-full bg-[#FAB8C4]/45"
      />
      <div
        data-parallax-speed="1.8"
        className="pointer-events-none absolute bottom-16 right-[6%] h-28 w-28 rounded-full bg-[#EBEAFB]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div
            data-dr-anim="scale-y"
            className="inline-flex items-center gap-2 rounded-full bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9]"
          >
            Precios Claros en Pesos
          </div>
          <h2
            data-dr-anim="scale-y"
            data-dr-delay="100"
            className="font-heading text-3xl font-extrabold text-[#27272E] sm:text-5xl lg:text-[48px]"
          >
            Elegí cómo querés digitalizar tu negocio.
          </h2>
          <p
            data-dr-anim="scale-y"
            data-dr-delay="150"
            className="text-lg text-[#525260] sm:text-xl font-medium"
          >
            Sin costos sorpresa ni contratos raros. Trato directo y entrega rápida.
          </p>

          {/* Billing Switch */}
          <div data-dr-anim="scale-y" data-dr-delay="200" className="pt-2 flex justify-center">
            <div className="inline-flex rounded-full bg-white p-1.5 shadow-sm border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingMode('unico')}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  billingMode === 'unico'
                    ? 'bg-[#5956E9] text-white shadow-sm'
                    : 'text-[#525260] hover:text-[#27272E]'
                }`}
              >
                Pago Único (Llave en Mano)
              </button>
              <button
                type="button"
                onClick={() => setBillingMode('mensual')}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  billingMode === 'mensual'
                    ? 'bg-[#5956E9] text-white shadow-sm'
                    : 'text-[#525260] hover:text-[#27272E]'
                }`}
              >
                Plan Mensual (Todo Incluido)
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((p) => {
            const price = billingMode === 'unico' ? p.priceUnico : p.priceMensual;
            const sub = billingMode === 'unico' ? p.subUnico : p.subMensual;

            return (
              <div
                key={p.name}
                data-dr-anim="scale-y"
                data-dr-delay={p.delay}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  p.highlight
                    ? 'bg-[#27272E] text-white shadow-drnube ring-2 ring-[#5956E9]'
                    : 'bg-white text-[#27272E] shadow-sm border border-slate-200/70 hover:shadow-drnube'
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#5956E9] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                    Recomendado
                  </span>
                )}

                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      p.highlight
                        ? 'bg-white/10 text-[#FFDC60]'
                        : 'bg-[#EBEAFB] text-[#5956E9]'
                    }`}
                  >
                    {p.badge}
                  </span>

                  <h3
                    className={`mt-4 font-heading text-2xl font-extrabold ${
                      p.highlight ? 'text-white' : 'text-[#27272E]'
                    }`}
                  >
                    {p.name}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      p.highlight ? 'text-slate-300' : 'text-[#525260]'
                    }`}
                  >
                    {p.description}
                  </p>

                  <div className="mt-6 pb-6 border-b border-slate-200/20">
                    <p
                      className={`font-heading text-4xl font-extrabold ${
                        p.highlight ? 'text-white' : 'text-[#27272E]'
                      }`}
                    >
                      {price}
                    </p>
                    <p
                      className={`mt-1 text-xs font-medium ${
                        p.highlight ? 'text-[#FFDC60]' : 'text-[#525260]'
                      }`}
                    >
                      {sub}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs mt-0.5">
                          ✓
                        </span>
                        <span
                          className={p.highlight ? 'text-slate-200' : 'text-[#525260]'}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href={p.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center rounded-full py-4 text-sm font-bold transition-all duration-300 ${
                      p.highlight
                        ? 'bg-[#5956E9] text-white shadow-drnube-btn hover:bg-[#6355F3]'
                        : 'bg-[#27272E] text-white hover:bg-[#5956E9]'
                    }`}
                  >
                    {p.ctaText}
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
