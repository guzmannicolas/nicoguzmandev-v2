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
    name: 'Gimnasio & Fitness',
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
    name: 'Estudio Fotográfico',
    tag: 'Galería + Cotizaciones',
    color: '#27272E',
    badgeBg: '#FAB8C4',
    metrics: 'Presentación visual de alto impacto',
    url: 'https://templates.nicoguzmandev.com/demos/photography/',
  },
];

export default function AlternatingFeatures() {
  const [selectedDemo, setSelectedDemo] = useState(liveTemplates[0]);
  const [botFlipped, setBotFlipped] = useState(false);

  return (
    <div id="soluciones" className="space-y-0 overflow-hidden">
      {/* =====================================================================
          ROW 1: WEBS PROFESIONALES (PASO 1 DE LA DIGITALIZACIÓN)
      ===================================================================== */}
      <section id="showroom-webs" className="relative py-20 lg:py-28 bg-white">
        <div
          data-parallax-speed="-2.1"
          className="pointer-events-none absolute top-20 left-[4%] h-24 w-24 rounded-full bg-[#EBEAFB]/80"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            {/* Left Copy: Concise, Big, Punchy */}
            <div className="lg:col-span-6 space-y-6">
              <div
                data-dr-anim="scale-y"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFDC60]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#27272E]"
              >
                Paso 1 · Tu Presencia Digital
              </div>

              <h2
                data-dr-anim="scale-y"
                data-dr-delay="100"
                className="font-heading text-3xl font-extrabold leading-tight text-[#27272E] sm:text-4xl lg:text-[46px]"
              >
                Si no estás en Google, tu competencia se queda con tus clientes.
              </h2>

              <p
                data-dr-anim="scale-y"
                data-dr-delay="150"
                className="text-xl leading-relaxed text-[#525260] font-medium"
              >
                Tené tu página web profesional adaptada a celulares, con tu propio dominio y botón directo a tu WhatsApp. Lista en 48 horas.
              </p>

              {/* 3 Clear Benefit Bullets */}
              <div className="space-y-3 pt-2">
                <div data-dr-anim="scale-y" data-dr-delay="200" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Dominio propio (ej: tunegocio.com) + Hosting ultra veloz incluido.
                  </span>
                </div>
                <div data-dr-anim="scale-y" data-dr-delay="250" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Botón de WhatsApp directo para que las visitas se conviertan en ventas.
                  </span>
                </div>
                <div data-dr-anim="scale-y" data-dr-delay="300" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Entrega llave en mano en 48 hs con tus fotos, servicios y precios en pesos.
                  </span>
                </div>
              </div>

              {/* Interactive Rubric Selector */}
              <div data-dr-anim="scale-y" data-dr-delay="350" className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#999FAE] mb-2.5">
                  Probá el demo interactivo de tu rubro:
                </p>
                <div className="flex flex-wrap gap-2">
                  {liveTemplates.map((tpl) => {
                    const isSelected = selectedDemo.slug === tpl.slug;
                    return (
                      <button
                        key={tpl.slug}
                        type="button"
                        onClick={() => setSelectedDemo(tpl)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
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

              <div data-dr-anim="scale-y" data-dr-delay="400" className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={selectedDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#5956E9] px-7 py-3.5 text-sm font-bold text-white shadow-drnube-btn transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4441C8]"
                >
                  Probar Web de {selectedDemo.name} ↗
                </a>
              </div>
            </div>

            {/* Right Visual Window Frame */}
            <div className="dr-assembly-stage lg:col-span-6 relative">
              <div className="piece-top-right hidden sm:block absolute -top-5 right-6 z-20 rounded-2xl bg-[#27272E] px-4 py-2.5 text-white shadow-drnube-float">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#FFDC60]">
                  Carga Ultrarrápida
                </p>
                <p className="font-heading text-sm font-extrabold">&lt; 1 Segundo en Celulares</p>
              </div>

              <div className="piece-base relative rounded-3xl bg-[#F6F8FF] p-6 sm:p-8 border border-[#EBEAFB] shadow-drnube">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FAB8C4]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFDC60]" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-[#525260] truncate">
                      demos/{selectedDemo.slug}
                    </span>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold"
                    style={{ backgroundColor: selectedDemo.badgeBg, color: selectedDemo.color }}
                  >
                    {selectedDemo.tag}
                  </span>
                </div>

                <div className="mt-5 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                      Plantilla Optimizada
                    </span>
                    <h3 className="font-heading text-2xl font-extrabold text-[#27272E] mt-0.5">
                      {selectedDemo.name}
                    </h3>
                  </div>

                  <p className="text-base text-[#525260] font-medium leading-relaxed">
                    Diseñada para captar clientes desde el celular. Incluye catálogo de precios en ARS, ubicación en Google Maps y botón de WhatsApp preconfigurado.
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-bold text-emerald-600">
                      ✓ Entrega garantizada en 48 hs
                    </span>
                    <a
                      href={selectedDemo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#5956E9] px-4 py-2 text-xs font-bold text-white hover:bg-[#4441C8] transition-colors"
                    >
                      Abrir Demo en Vivo →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ROW 2: AUTOMATIZACIÓN DE WHATSAPP CON IA (PASO 2)
      ===================================================================== */}
      <section id="automatizacion-ia" className="relative py-20 lg:py-28 bg-[#F6F8FF]">
        <div
          data-parallax-speed="2.0"
          className="pointer-events-none absolute top-16 right-[7%] h-20 w-20 rounded-full bg-[#FAB8C4]/45"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            {/* Visual Card with Click-to-Flip */}
            <div className="dr-assembly-stage lg:col-span-6 order-2 lg:order-1 relative">
              <div className="piece-top-left hidden sm:flex absolute -top-5 left-4 z-20 items-center gap-2 rounded-full bg-[#27272E] px-4 py-2 text-xs font-bold text-[#FFDC60] shadow-drnube-float">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Responde en 3 segundos · 24/7</span>
              </div>

              <div
                onClick={() => setBotFlipped(!botFlipped)}
                className="piece-base cursor-pointer relative mx-auto max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-drnube border border-[#EBEAFB] transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="rounded-full bg-[#EBEAFB] px-3 py-1 text-xs font-bold text-[#5956E9]">
                      Paso 2 · Atención 24/7
                    </span>
                    <h4 className="mt-1.5 font-heading text-xl font-bold text-[#27272E]">
                      {botFlipped ? 'Vista Dueño: Tu Caja y Turnos' : 'Flujo Automático de Ventas'}
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="rounded-full bg-[#F6F8FF] px-3 py-1.5 text-xs font-bold text-[#5956E9] hover:bg-[#EBEAFB]"
                  >
                    {botFlipped ? '↺ Ver Flujo Cliente' : '↻ Tocar para Girar'}
                  </button>
                </div>

                {!botFlipped ? (
                  <div className="mt-5 space-y-3.5">
                    <div className="rounded-2xl bg-[#F6F8FF] p-4 border border-slate-100">
                      <div className="text-xs font-bold text-[#5956E9] mb-1">
                        1. CONSULTA DEL CLIENTE A CUALQUIER HORA
                      </div>
                      <p className="text-sm font-medium text-[#27272E]">
                        Escribe a las 23:30 hs preguntando precios y horarios disponibles.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#EBEAFB]/70 p-4 border border-[#5956E9]/20">
                      <div className="text-xs font-bold text-[#5956E9] mb-1">
                        2. RESPUESTA INMEDIATA CON IA
                      </div>
                      <p className="text-sm font-medium text-[#27272E]">
                        El bot responde al instante con los horarios libres y envía el link de seña de Mercado Pago.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#27272E] p-4 text-white">
                      <div className="text-xs font-bold text-[#FFDC60] mb-1">
                        3. SEÑA COBRADA Y TURNO AGENDADO
                      </div>
                      <p className="text-sm text-slate-200">
                        El dinero entra a tu Mercado Pago y el turno se bloquea en tu Google Calendar sin superposiciones.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl bg-[#27272E] p-5 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#FFDC60]">
                        Tu Negocio Trabajando Solo
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-white/10 p-3">
                          <p className="text-xs text-slate-300">Turnos agendados</p>
                          <p className="font-heading text-2xl font-extrabold text-white">24</p>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                          <p className="text-xs text-slate-300">Señas acreditadas</p>
                          <p className="font-heading text-2xl font-extrabold text-emerald-400">
                            $ 360.000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Copy: Concise & Direct */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div
                data-dr-anim="scale-y"
                className="inline-flex items-center gap-2 rounded-full bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9]"
              >
                Paso 2 · Automatizá tus Ventas
              </div>

              <h2
                data-dr-anim="scale-y"
                data-dr-delay="100"
                className="font-heading text-3xl font-extrabold leading-tight text-[#27272E] sm:text-4xl lg:text-[46px]"
              >
                Atendé al instante, agendá turnos y cobrá señas en automático.
              </h2>

              <p
                data-dr-anim="scale-y"
                data-dr-delay="150"
                className="text-xl leading-relaxed text-[#525260] font-medium"
              >
                No pierdas más clientes por tardar en responder el celular. Tu asistente de WhatsApp atiende preguntas frecuentes, reserva turnos y cobra por Mercado Pago las 24 hs.
              </p>

              <div className="space-y-3 pt-2">
                <div data-dr-anim="scale-y" data-dr-delay="200" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Respuestas automáticas inmediatas a cualquier hora del día.
                  </span>
                </div>
                <div data-dr-anim="scale-y" data-dr-delay="250" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Cobro de señas por Mercado Pago para asegurar el compromiso del cliente.
                  </span>
                </div>
                <div data-dr-anim="scale-y" data-dr-delay="300" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Sincronización en vivo con Google Calendar y recordatorios automáticos.
                  </span>
                </div>
              </div>

              <div data-dr-anim="scale-y" data-dr-delay="350" className="pt-2">
                <a
                  href="https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20automatizar%20mi%20WhatsApp%20para%20vender%20en%20piloto%20automático."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#5956E9] px-8 py-4 text-base font-bold text-white shadow-drnube-btn transition-all duration-300 hover:-translate-y-1 hover:bg-[#4441C8]"
                >
                  Quiero Automatizar mi WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ROW 3: SISTEMAS A MEDIDA (PASO 3: CHAU PLANILLAS)
      ===================================================================== */}
      <section id="sistemas-erp" className="relative py-20 lg:py-28 bg-white">
        <div
          data-parallax-speed="1.9"
          className="pointer-events-none absolute top-14 right-[10%] h-16 w-16 rounded-full bg-[#5956E9]/20"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            {/* Left Copy: Concise & Direct */}
            <div className="lg:col-span-6 space-y-6">
              <div
                data-dr-anim="scale-y"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800"
              >
                Paso 3 · Ordená tu Negocio
              </div>

              <h2
                data-dr-anim="scale-y"
                data-dr-delay="100"
                className="font-heading text-3xl font-extrabold leading-tight text-[#27272E] sm:text-4xl lg:text-[46px]"
              >
                Chau planillas de Excel. Controlá stock, ventas y clientes desde el celular.
              </h2>

              <p
                data-dr-anim="scale-y"
                data-dr-delay="150"
                className="text-xl leading-relaxed text-[#525260] font-medium"
              >
                Un sistema simple y diseñado exclusivamente para tu forma de trabajar. Sabé exactamente cuánto dinero ingresó, qué productos reponer y qué cuentas tenés pendientes.
              </p>

              <div className="space-y-3 pt-2">
                <div data-dr-anim="scale-y" data-dr-delay="200" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Facturación y cobros del día en tiempo real desde cualquier dispositivo.
                  </span>
                </div>
                <div data-dr-anim="scale-y" data-dr-delay="250" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Control de stock y alertas automáticas antes de que falte mercadería.
                  </span>
                </div>
                <div data-dr-anim="scale-y" data-dr-delay="300" className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-base font-semibold text-[#27272E]">
                    Fácil de usar: sin pantallas complicadas ni capacitaciones eternas.
                  </span>
                </div>
              </div>

              <div data-dr-anim="scale-y" data-dr-delay="350" className="pt-2">
                <a
                  href="https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20consultar%20por%20un%20sistema%20simple%20para%20controlar%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#27272E] px-8 py-4 text-base font-bold text-white shadow-drnube-btn transition-all duration-300 hover:-translate-y-1 hover:bg-[#5956E9]"
                >
                  Consultar por un Sistema a Medida
                </a>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="dr-assembly-stage lg:col-span-6 relative">
              <div className="piece-top-right hidden sm:block absolute -top-5 -right-5 z-20 rounded-2xl bg-[#FFDC60] px-4 py-3 text-[#27272E] shadow-drnube-float">
                <p className="text-[10px] font-extrabold uppercase tracking-wider">
                  Acceso Total
                </p>
                <p className="font-heading text-xs font-extrabold mt-0.5">
                  Desde Celular o Computadora ✓
                </p>
              </div>

              <div className="piece-base rounded-3xl bg-[#27272E] p-6 sm:p-8 text-white shadow-drnube">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="rounded-full bg-[#5956E9] px-3 py-1 text-xs font-bold text-white">
                      Tu Negocio Ordenado
                    </span>
                    <h4 className="mt-1.5 font-heading text-xl font-bold text-white">
                      Panel de Control en Vivo
                    </h4>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                    ● En Tiempo Real
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/10">
                    <div>
                      <p className="font-heading text-sm font-bold text-white">
                        Ventas Cobradas Hoy
                      </p>
                      <p className="text-xs text-[#999FAE]">Efectivo + Mercado Pago + Tarjetas</p>
                    </div>
                    <p className="font-heading text-xl font-extrabold text-emerald-400">
                      $ 485.000
                    </p>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/10">
                    <div>
                      <p className="font-heading text-sm font-bold text-white">
                        Pedidos y Turnos Atendidos
                      </p>
                      <p className="text-xs text-[#999FAE]">Todo registrado automáticamente</p>
                    </div>
                    <p className="font-heading text-xl font-extrabold text-[#FFDC60]">
                      32 operaciones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
