import React, { useState } from 'react';

export default function PricingPlans() {
  const [billingMode, setBillingMode] = useState<'unico' | 'mensual'>('unico');

  const plans = [
    {
      badge: 'Rama 01 · Locales y Profesionales',
      name: 'Pack Web Express',
      highlight: false,
      priceUnico: '$ 180.000',
      priceMensual: '$ 45.000',
      subUnico: 'ARS · Pago único llave en mano',
      subMensual: 'ARS / mes · Hosting + Cambios incluidos',
      description:
        'Tu página web profesional lista en 48 horas basada en nuestras arquitecturas de alta conversión.',
      features: [
        'Adaptación completa con tu marca, fotos y precios en ARS',
        'Diseño 100% optimizado para celulares (carga en < 1 seg)',
        'Botón y formularios conectados directo a tu WhatsApp',
        'Certificado de seguridad SSL y configuración de dominio',
        'Posicionamiento inicial para aparecer en Google Maps',
      ],
      ctaText: 'Elegir Pack Web Express',
      waLink:
        'https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20empezar%20con%20el%20Pack%20Web%20Express%20para%20mi%20negocio.',
    },
    {
      badge: 'Más Elegido · Rama 02',
      name: 'Web + Bot WhatsApp IA',
      highlight: true,
      priceUnico: '$ 390.000',
      priceMensual: '$ 85.000',
      subUnico: 'ARS · Implementación completa',
      subMensual: 'ARS / mes · Mantenimiento IA + Servidor',
      description:
        'Para negocios con flujo de consultas en Instagram o Google que quieren agendar y cobrar en piloto automático.',
      features: [
        'Todo lo incluido en el Pack Web Express',
        'Asistente de WhatsApp con IA entrenado con tus servicios',
        'Sincronización en vivo con tu agenda de Google Calendar',
        'Generación automática de links de seña por Mercado Pago',
        'Recordatorios automáticos 24 hs antes para evitar ausencias',
      ],
      ctaText: 'Automatizar mi Negocio',
      waLink:
        'https://wa.me/5491100000000?text=Hola%20Nico!%20Me%20interesa%20el%20plan%20Web%20%2B%20Bot%20WhatsApp%20con%20IA.',
    },
    {
      badge: 'Rama 03 · PyMEs y Empresas',
      name: 'Sistema ERP / A Medida',
      highlight: false,
      priceUnico: 'A Medida',
      priceMensual: 'Partner Tech',
      subUnico: 'Presupuesto cerrado por etapas',
      subMensual: 'Acompañamiento y evolución continua',
      description:
        'Software centralizado para empresas con múltiples sucursales, stock complejo, vendedores o procesos propios.',
      features: [
        'Relevamiento técnico y diagnóstico operativo sin cargo',
        'Panel web multi-sucursal (stock, caja, cuentas corrientes)',
        'Perfiles y permisos por rol (administrador, encargado, cajero)',
        'Integración con facturación ARCA, Mercado Pago y bancos',
        'Soporte directo sin intermediarios y servidores dedicados',
      ],
      ctaText: 'Solicitar Diagnóstico ERP',
      waLink:
        'https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20solicitar%20un%20diagn%C3%B3stico%20para%20un%20Sistema%20ERP%20a%20medida.',
    },
  ];

  return (
    <section id="planes" className="py-20 lg:py-28 bg-[#F6F8FF]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9]">
            Inversión Clara y Transparente
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#27272E] sm:text-5xl">
            Elegí la solución exacta para la etapa actual de tu negocio
          </h2>
          <p className="text-lg text-[#525260]">
            Podés contratar el desarrollo llave en mano o elegir nuestro acompañamiento mensual para que nos ocupemos de todas las actualizaciones y servidores.
          </p>

          {/* Dr.Nube-style Interactive Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-white p-1.5 shadow-sm border border-[#EBEAFB]">
              <button
                type="button"
                onClick={() => setBillingMode('unico')}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                  billingMode === 'unico'
                    ? 'bg-[#5956E9] text-white shadow-md shadow-[#5956E9]/25'
                    : 'text-[#525260] hover:text-[#27272E]'
                }`}
              >
                Implementación Llave en Mano
              </button>
              <button
                type="button"
                onClick={() => setBillingMode('mensual')}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                  billingMode === 'mensual'
                    ? 'bg-[#5956E9] text-white shadow-md shadow-[#5956E9]/25'
                    : 'text-[#525260] hover:text-[#27272E]'
                }`}
              >
                Abono Mensual Todo Incluido
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.highlight
                  ? 'bg-[#27272E] text-white shadow-drnube-float ring-2 ring-[#5956E9]'
                  : 'bg-white text-[#27272E] shadow-drnube border border-slate-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold ${
                      plan.highlight
                        ? 'bg-[#5956E9] text-white'
                        : 'bg-[#EBEAFB] text-[#5956E9]'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3
                  className={`mt-5 font-heading text-2xl font-extrabold ${
                    plan.highlight ? 'text-white' : 'text-[#27272E]'
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    plan.highlight ? 'text-slate-300' : 'text-[#525260]'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 pb-6 border-b border-current/10">
                  <p
                    className={`font-heading text-4xl font-extrabold tracking-tight ${
                      plan.highlight ? 'text-[#FFDC60]' : 'text-[#27272E]'
                    }`}
                  >
                    {billingMode === 'unico' ? plan.priceUnico : plan.priceMensual}
                  </p>
                  <p
                    className={`mt-1 text-xs font-semibold ${
                      plan.highlight ? 'text-slate-300' : 'text-[#999FAE]'
                    }`}
                  >
                    {billingMode === 'unico' ? plan.subUnico : plan.subMensual}
                  </p>
                </div>

                <ul className="mt-6 space-y-3.5 text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span
                        className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                          plan.highlight
                            ? 'bg-[#5956E9] text-white'
                            : 'bg-[#EBEAFB] text-[#5956E9]'
                        }`}
                      >
                        ✓
                      </span>
                      <span className={plan.highlight ? 'text-slate-200' : 'text-[#525260]'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={plan.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded-full py-4 text-center text-sm font-bold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-[#5956E9] text-white shadow-drnube-btn hover:bg-[#6355F3]'
                      : 'bg-[#F6F8FF] text-[#5956E9] hover:bg-[#5956E9] hover:text-white'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
