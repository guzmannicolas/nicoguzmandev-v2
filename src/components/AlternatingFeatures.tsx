import React, { useState } from 'react';

const liveTemplates = [
  {
    slug: 'barbershop',
    name: 'Barbería & Peluquería',
    tag: 'Turnos + Precios ARS',
    color: '#5956E9',
    badgeBg: '#EBEAFB',
    metrics: 'Reservas por WhatsApp en 1 clic',
    url: 'https://templates.nicoguzmandev.com/demos/barbershop/',
  },
  {
    slug: 'restaurant',
    name: 'Restaurante & Bistró',
    tag: 'Carta Digital + Mesas',
    color: '#27272E',
    badgeBg: '#FFDC60',
    metrics: 'Menú interactivo y reserva directa',
    url: 'https://templates.nicoguzmandev.com/demos/restaurant/',
  },
  {
    slug: 'auto-repair',
    name: 'Taller Mecánico & Estética',
    tag: 'Presupuestos + Servicios',
    color: '#5956E9',
    badgeBg: '#EBEAFB',
    metrics: 'Recepción de consultas técnicas',
    url: 'https://templates.nicoguzmandev.com/demos/auto-repair/',
  },
  {
    slug: 'real-estate',
    name: 'Inmobiliaria & Desarrollos',
    tag: 'Catálogo de Propiedades',
    color: '#27272E',
    badgeBg: '#FAB8C4',
    metrics: 'Filtro de alquiler/venta y visitas',
    url: 'https://templates.nicoguzmandev.com/demos/real-estate/',
  },
  {
    slug: 'medical-clinic',
    name: 'Consultorio & Clínica',
    tag: 'Especialidades + Turnos',
    color: '#5956E9',
    badgeBg: '#EBEAFB',
    metrics: 'Obras sociales y agenda médica',
    url: 'https://templates.nicoguzmandev.com/demos/medical-clinic/',
  },
  {
    slug: 'gym-fitness',
    name: 'Gimnasio & Centro Fitness',
    tag: 'Planes + Horarios',
    color: '#27272E',
    badgeBg: '#FFDC60',
    metrics: 'Inscripción mensual y pase de prueba',
    url: 'https://templates.nicoguzmandev.com/demos/gym-fitness/',
  },
  {
    slug: 'law-accounting',
    name: 'Estudio Jurídico / Contable',
    tag: 'Consultoría Profesional',
    color: '#5956E9',
    badgeBg: '#EBEAFB',
    metrics: 'Calificación de casos y honorarios',
    url: 'https://templates.nicoguzmandev.com/demos/law-accounting/',
  },
  {
    slug: 'photography',
    name: 'Estudio Creativo & Portfolio',
    tag: 'Galería + Cotizaciones',
    color: '#27272E',
    badgeBg: '#FAB8C4',
    metrics: 'Presentación visual de alto impacto',
    url: 'https://templates.nicoguzmandev.com/demos/photography/',
  },
];

export default function AlternatingFeatures() {
  const [selectedDemo, setSelectedDemo] = useState(liveTemplates[0]);

  return (
    <div id="soluciones" className="space-y-0">
      {/* =====================================================================
          ROW 1: AUTOMATIZACIÓN & BOTS DE WHATSAPP CON IA (Rama 2)
      ===================================================================== */}
      <section id="automatizacion-ia" className="py-20 lg:py-28 bg-[#F6F8FF]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            {/* Left Visual Mockup with Floating Elements */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-drnube border border-[#EBEAFB]">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="rounded-full bg-[#EBEAFB] px-3 py-1 text-xs font-bold text-[#5956E9]">
                      Rama 01 · Automatización & IA
                    </span>
                    <h4 className="mt-2 font-heading text-xl font-bold text-[#27272E]">
                      Flujo Automático de Conversión
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-emerald-600">● Online 24/7</span>
                  </div>
                </div>

                {/* Step-by-step live pipeline inside the mockup */}
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-[#F6F8FF] p-4 border border-slate-100">
                    <div className="flex items-center justify-between text-xs font-bold text-[#5956E9]">
                      <span>PASO 1 · CONSULTA POR INSTAGRAM O WEB</span>
                      <span>00:00 seg</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#27272E]">
                      El cliente escribe a las 23:30 hs preguntando precios y disponibilidad.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#EBEAFB]/60 p-4 border border-[#5956E9]/20">
                    <div className="flex items-center justify-between text-xs font-bold text-[#5956E9]">
                      <span>PASO 2 · RESPUESTA IA Y CALIFICACIÓN</span>
                      <span>00:02 seg</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#27272E]">
                      El bot responde con voz natural argentina, muestra opciones reales de tu agenda y ofrece horarios libres.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#27272E] p-4 text-white">
                    <div className="flex items-center justify-between text-xs font-bold text-[#FFDC60]">
                      <span>PASO 3 · SEÑA POR MERCADO PAGO + RECORDATORIO</span>
                      <span>Confirmado</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-200">
                      Genera link de pago automático, bloquea el turno en Google Calendar y envía recordatorio 24 hs antes.
                    </p>
                  </div>
                </div>

                {/* Floating Dr.Nube-style callout badge */}
                <div className="animate-float-2 mt-6 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 rounded-2xl bg-[#FAB8C4] px-5 py-3.5 text-[#27272E] shadow-drnube-float">
                  <p className="font-heading text-lg font-extrabold leading-tight">-70% Ausentismo</p>
                  <p className="text-xs font-semibold">Con recordatorios y señas automáticas</p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                Atención Instantánea sin Empleados Extra
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#27272E] sm:text-4xl">
                No pierdas más ventas por tardar en responder WhatsApp.
              </h2>

              <p className="text-lg leading-relaxed text-[#525260]">
                Cuando un potencial cliente escribe desde Instagram o Google y nadie le contesta en los primeros 5 minutos, se va con la competencia. Conectamos tu línea de WhatsApp a un asistente inteligente entrenado con la información exacta de tu negocio.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-white p-4 shadow-xs border border-slate-100">
                  <p className="font-heading text-base font-bold text-[#27272E]">
                    Agenda y Turnos Solos
                  </p>
                  <p className="mt-1 text-sm text-[#525260]">
                    Consulta tu disponibilidad real en Google Calendar y agenda sin superposiciones.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-xs border border-slate-100">
                  <p className="font-heading text-base font-bold text-[#27272E]">
                    Cobro de Señas con MP
                  </p>
                  <p className="mt-1 text-sm text-[#525260]">
                    Asegurá el compromiso del cliente cobrando una seña automática antes de reservar.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/5491100000000?text=Hola%20Nico!%20Me%20interesa%20implementar%20un%20Bot%20de%20WhatsApp%20con%20IA%20en%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#5956E9] px-7 py-3.5 text-sm font-bold text-white shadow-drnube-btn transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4441C8]"
                >
                  Quiero automatizar mi WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ROW 2: WEBS PROFESIONALES PARA LOCALES + SHOWROOM INTERACTIVO (Rama 1)
      ===================================================================== */}
      <section id="showroom-webs" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            {/* Left Copy & Interactive Rubric Selector */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFDC60]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#27272E]">
                Páginas Web Listas en 48 Horas
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#27272E] sm:text-4xl">
                Tu vidriera profesional en Google, adaptada a tu rubro y sin demoras.
              </h2>

              <p className="text-lg leading-relaxed text-[#525260]">
                Olvidate de proyectos eternos de meses. Desarrollamos arquitecturas probadas para los 8 rubros más fuertes de Argentina. Elegís tu base, la personalizamos con tu marca, tus precios en pesos y tu WhatsApp, y salís a vender en 48 horas.
              </p>

              {/* Interactive Rubric Pills */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#999FAE] mb-3">
                  Seleccioná un rubro para previsualizar el demo real:
                </p>
                <div className="flex flex-wrap gap-2">
                  {liveTemplates.map((tpl) => {
                    const isSelected = selectedDemo.slug === tpl.slug;
                    return (
                      <button
                        key={tpl.slug}
                        type="button"
                        onClick={() => setSelectedDemo(tpl)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#5956E9] text-white shadow-md shadow-[#5956E9]/25 scale-105'
                            : 'bg-[#F6F8FF] text-[#525260] hover:bg-[#EBEAFB] hover:text-[#5956E9]'
                        }`}
                      >
                        {tpl.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={selectedDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#27272E] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5956E9]"
                >
                  Abrir Demo de {selectedDemo.name} ↗
                </a>
                <a
                  href="https://templates.nicoguzmandev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#5956E9] underline-offset-4 hover:underline"
                >
                  Ver catálogo completo de 8 plantillas
                </a>
              </div>
            </div>

            {/* Right Interactive Showcase Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl bg-[#F6F8FF] p-6 sm:p-8 border border-[#EBEAFB] shadow-drnube">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FAB8C4]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFDC60]" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-[#525260]">
                      templates.nicoguzmandev.com/demos/{selectedDemo.slug}
                    </span>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold"
                    style={{ backgroundColor: selectedDemo.badgeBg, color: selectedDemo.color }}
                  >
                    {selectedDemo.tag}
                  </span>
                </div>

                {/* Preview Card Content */}
                <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                        Plantilla Verificada en Producción
                      </p>
                      <h3 className="font-heading text-2xl font-extrabold text-[#27272E] mt-1">
                        {selectedDemo.name}
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      100/100 Mobile Speed
                    </span>
                  </div>

                  <p className="text-sm text-[#525260]">
                    Incluye diseño mobile-first, animaciones fluidas, precios en pesos argentinos, botón flotante de WhatsApp con mensaje pre-armado y optimización SEO local para Google Maps.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="rounded-xl bg-[#F6F8FF] p-3.5">
                      <p className="text-xs font-semibold text-[#999FAE]">Foco Principal</p>
                      <p className="font-heading text-sm font-bold text-[#27272E] mt-0.5">
                        {selectedDemo.metrics}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#F6F8FF] p-3.5">
                      <p className="text-xs font-semibold text-[#999FAE]">Tiempo de Entrega</p>
                      <p className="font-heading text-sm font-bold text-[#5956E9] mt-0.5">
                        Lista en 48 a 72 horas
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-semibold text-[#525260]">
                      Dominio .com.ar + Hosting SSL bonificado
                    </span>
                    <a
                      href={selectedDemo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#EBEAFB] px-4 py-2 text-xs font-bold text-[#5956E9] hover:bg-[#5956E9] hover:text-white transition-colors"
                    >
                      Probar Demo en Vivo →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ROW 3: CONSULTORÍA Y SISTEMAS ERP A MEDIDA PARA PYMES (Rama 3)
      ===================================================================== */}
      <section id="sistemas-erp" className="py-20 lg:py-28 bg-[#ECF2F6]/70">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            {/* Left Mockup: Multi-Branch ERP Dashboard */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="rounded-3xl bg-[#27272E] p-6 sm:p-8 text-white shadow-drnube">
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div>
                    <span className="rounded-full bg-[#5956E9] px-3 py-1 text-xs font-bold text-white">
                      Rama 03 · ERP & Software a Medida
                    </span>
                    <h4 className="mt-2 font-heading text-xl font-bold text-white">
                      Tablero Ejecutivo Multi-Sucursal
                    </h4>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#FFDC60]">
                    Sincronización Real-Time
                  </span>
                </div>

                {/* Simulated Branch Status Cards */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/10">
                    <div>
                      <p className="font-heading text-sm font-bold text-white">
                        Sucursal Palermo · Casa Central
                      </p>
                      <p className="text-xs text-[#999FAE]">Caja abierta · 184 operaciones hoy</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-base font-extrabold text-emerald-400">
                        $ 2.450.000
                      </p>
                      <p className="text-[11px] text-[#999FAE]">Stock al 98%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/10">
                    <div>
                      <p className="font-heading text-sm font-bold text-white">
                        Sucursal Belgrano · Punto de Venta
                      </p>
                      <p className="text-xs text-[#999FAE]">Caja abierta · 129 operaciones hoy</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-base font-extrabold text-emerald-400">
                        $ 1.890.000
                      </p>
                      <p className="text-[11px] text-[#FAB8C4]">2 alertas de reposición</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/10">
                    <div>
                      <p className="font-heading text-sm font-bold text-white">
                        Tienda Online + Mayorista
                      </p>
                      <p className="text-xs text-[#999FAE]">Integrado con ARCA / Facturación</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-base font-extrabold text-[#FFDC60]">
                        $ 3.120.000
                      </p>
                      <p className="text-[11px] text-[#999FAE]">Despacho automático</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                Para PyMEs en Crecimiento
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#27272E] sm:text-4xl">
                Dejá atrás las planillas de Excel sueltas y centralizá toda tu operación.
              </h2>

              <p className="text-lg leading-relaxed text-[#525260]">
                Cuando tu empresa abre una segunda sucursal, suma vendedores o maneja miles de artículos, los parches dejan de funcionar. Diseñamos sistemas web a medida para que controles stock, caja, comisiones, cuentas corrientes y facturación desde el celular o la computadora.
              </p>

              <ul className="space-y-3 text-base font-medium text-[#27272E]">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5956E9] text-xs font-bold text-white">
                    1
                  </span>
                  <span>Control de stock multi-depósito y alertas de reposición automática.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5956E9] text-xs font-bold text-white">
                    2
                  </span>
                  <span>Roles de usuarios para cajeros, encargados, vendedores y socios.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5956E9] text-xs font-bold text-white">
                    3
                  </span>
                  <span>Integración con Mercado Pago, bancos, e-commerce y APIs contables.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20agendar%20una%20reuni%C3%B3n%20de%20diagn%C3%B3stico%20para%20un%20sistema%20a%20medida%20/%20ERP."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#27272E] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5956E9]"
                >
                  Agendar Diagnóstico sin Cargo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
