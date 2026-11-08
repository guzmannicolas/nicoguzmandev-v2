import React, { useState, useRef } from 'react';

export default function HeroTilt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [activeTab, setActiveTab] = useState<'bot' | 'webs' | 'erp'>('bot');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section className="relative overflow-hidden bg-drnube-mesh pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Dr.Nube Rellax Floating Pastel Spheres (move with scroll) */}
      <div
        data-parallax-speed="1.8"
        data-parallax-x="0.5"
        className="pointer-events-none absolute top-24 left-[6%] h-14 w-14 rounded-full bg-[#FAB8C4]/60 blur-[1px]"
      />
      <div
        data-parallax-speed="-1.5"
        data-parallax-x="-0.6"
        className="pointer-events-none absolute top-40 right-[8%] h-24 w-24 rounded-full bg-[#FFDC60]/50"
      />
      <div
        data-parallax-speed="2.2"
        className="pointer-events-none absolute bottom-12 left-[42%] h-16 w-16 rounded-full bg-[#EBEAFB] border border-[#5956E9]/20"
      />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#EBEAFB]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#FAB8C4]/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Masked Title Reveal + Elastic Scale-Y Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div
              data-dr-anim="scale-y"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9]"
            >
              <span className="h-2 w-2 rounded-full bg-[#5956E9] animate-pulse" />
              <span>Tecnología para Negocios en Argentina</span>
            </div>

            {/* Dr.Nube Masked Line-by-Line Title Reveal */}
            <h1 className="title-mask-container is-inview font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-[#27272E] sm:text-5xl lg:text-[54px]">
              <span className="title-mask-box">
                <span className="title-mask-text">Llevá tu negocio al</span>
              </span>
              <span className="title-mask-box">
                <span className="title-mask-text">
                  siguiente nivel,{' '}
                  <span className="text-[#5956E9]">automatizá</span>
                </span>
              </span>
              <span className="title-mask-box">
                <span className="title-mask-text">
                  <span className="text-[#5956E9]">ventas</span> y ganá tiempo.
                </span>
              </span>
            </h1>

            <p
              data-dr-anim="scale-y"
              data-dr-delay="200"
              className="max-w-xl text-lg leading-relaxed text-[#525260] sm:text-xl"
            >
              Desde páginas web listas para vender en 48 horas hasta bots de WhatsApp con IA que agendan turnos y cobran señas por Mercado Pago sin que tengas que tocar el teléfono.
            </p>

            {/* Primary & Secondary CTAs with Elastic Scale-Y */}
            <div
              data-dr-anim="scale-y"
              data-dr-delay="300"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#planes"
                className="inline-flex items-center justify-center rounded-full bg-[#5956E9] px-8 py-4 text-base font-bold text-white shadow-drnube-btn transition-all duration-300 hover:-translate-y-1 hover:bg-[#4441C8]"
              >
                Comenzar ahora
              </a>
              <a
                href="#showroom-webs"
                className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-7 py-4 text-base font-bold text-[#27272E] shadow-sm transition-all duration-300 hover:border-[#5956E9] hover:text-[#5956E9]"
              >
                Explorar 8 Demos en Vivo
              </a>
            </div>

            {/* Key Value Pills */}
            <div
              data-dr-anim="scale-y"
              data-dr-delay="400"
              className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/70 max-w-lg"
            >
              <div>
                <p className="font-heading text-2xl font-extrabold text-[#27272E]">48 hs</p>
                <p className="text-xs font-medium text-[#525260]">Entrega Web Express</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-[#5956E9]">24/7</p>
                <p className="text-xs font-medium text-[#525260]">Bot WhatsApp con IA</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-[#27272E]">100%</p>
                <p className="text-xs font-medium text-[#525260]">Integrado a Mercado Pago</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Tilt Stage + Multi-Piece Scroll Assembly */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="dr-assembly-stage is-inview lg:col-span-6 relative flex items-center justify-center py-6 lg:py-4"
            style={{ perspective: '1100px' }}
          >
            <div
              className="relative w-full max-w-[560px] transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Piece 1 (Base): Central SaaS Dashboard Card */}
              <div className="piece-base relative rounded-3xl bg-white p-6 sm:p-7 shadow-drnube border border-slate-100">
                {/* Top Window Bar & Branch Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FAB8C4]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFDC60]" />
                    <span className="h-3 w-3 rounded-full bg-[#5956E9]" />
                    <span className="ml-2 text-xs font-bold text-[#999FAE] uppercase tracking-wider">
                      Panel Central · En Vivo
                    </span>
                  </div>
                  <div className="flex rounded-full bg-[#F6F8FF] p-1 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveTab('bot')}
                      className={`rounded-full px-3 py-1 transition-all ${
                        activeTab === 'bot'
                          ? 'bg-[#5956E9] text-white shadow-sm'
                          : 'text-[#525260] hover:text-[#27272E]'
                      }`}
                    >
                      WhatsApp IA
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('webs')}
                      className={`rounded-full px-3 py-1 transition-all ${
                        activeTab === 'webs'
                          ? 'bg-[#5956E9] text-white shadow-sm'
                          : 'text-[#525260] hover:text-[#27272E]'
                      }`}
                    >
                      Web Locales
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('erp')}
                      className={`rounded-full px-3 py-1 transition-all ${
                        activeTab === 'erp'
                          ? 'bg-[#5956E9] text-white shadow-sm'
                          : 'text-[#525260] hover:text-[#27272E]'
                      }`}
                    >
                      ERP PyME
                    </button>
                  </div>
                </div>

                {/* Dynamic Central Screen Content */}
                {activeTab === 'bot' && (
                  <div className="pt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-2xl bg-[#F6F8FF] px-4 py-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                          Asistente IA Activo
                        </p>
                        <p className="font-heading text-lg font-bold text-[#27272E]">
                          Recepción y Cobro de Turnos
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                        Responde en 2 seg
                      </span>
                    </div>

                    {/* Simulated WhatsApp Conversation */}
                    <div className="space-y-3 rounded-2xl bg-[#ECF2F6]/60 p-4 text-sm">
                      <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-white p-3 shadow-xs text-[#27272E]">
                        <p className="text-[11px] font-bold text-[#999FAE] mb-0.5">Cliente · 22:45 hs</p>
                        Hola! ¿Tienen disponibilidad para mañana viernes a la tarde?
                      </div>
                      <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#5956E9] p-3.5 text-white shadow-sm">
                        <p className="text-[11px] font-semibold text-[#EBEAFB] mb-0.5">
                          Bot IA NicoGuzman · 22:45 hs
                        </p>
                        ¡Hola! Sí, me queda libre mañana viernes a las 16:30 o 18:00 hs. Te dejo el link de Mercado Pago para confirmar tu reserva al instante.
                      </div>
                    </div>

                    {/* Bottom Metrics Row */}
                    <div className="grid grid-cols-3 gap-3 pt-1">
                      <div className="rounded-2xl bg-[#F6F8FF] p-3">
                        <p className="text-[11px] font-semibold text-[#525260]">Consultas hoy</p>
                        <p className="font-heading text-xl font-extrabold text-[#27272E]">48</p>
                      </div>
                      <div className="rounded-2xl bg-[#EBEAFB] p-3">
                        <p className="text-[11px] font-semibold text-[#5956E9]">Señas cobradas</p>
                        <p className="font-heading text-xl font-extrabold text-[#5956E9]">19</p>
                      </div>
                      <div className="rounded-2xl bg-[#F6F8FF] p-3">
                        <p className="text-[11px] font-semibold text-[#525260]">Ausentismo</p>
                        <p className="font-heading text-xl font-extrabold text-emerald-600">0%</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'webs' && (
                  <div className="pt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-2xl bg-[#F6F8FF] px-4 py-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                          Webs de Alta Conversión
                        </p>
                        <p className="font-heading text-lg font-bold text-[#27272E]">
                          8 Rubros Listos para Lanzar
                        </p>
                      </div>
                      <span className="rounded-full bg-[#FFDC60]/40 px-3 py-1 text-xs font-bold text-[#27272E]">
                        Carga &lt; 0.8s
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <span className="inline-block rounded-md bg-[#EBEAFB] px-2 py-0.5 text-[10px] font-bold text-[#5956E9]">
                          GASTRONOMÍA & BARES
                        </span>
                        <p className="mt-1.5 font-heading text-sm font-bold text-[#27272E]">
                          Carta Digital + Reservas WhatsApp
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <span className="inline-block rounded-md bg-[#FAB8C4]/40 px-2 py-0.5 text-[10px] font-bold text-[#27272E]">
                          ESTÉTICA & BARBERÍAS
                        </span>
                        <p className="mt-1.5 font-heading text-sm font-bold text-[#27272E]">
                          Agenda de Turnos + Precios en ARS
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <span className="inline-block rounded-md bg-[#FFDC60]/50 px-2 py-0.5 text-[10px] font-bold text-[#27272E]">
                          TALLERES & SERVICIOS
                        </span>
                        <p className="mt-1.5 font-heading text-sm font-bold text-[#27272E]">
                          Presupuestos Directos + Ubicación
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <span className="inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                          SALUD & INMOBILIARIAS
                        </span>
                        <p className="mt-1.5 font-heading text-sm font-bold text-[#27272E]">
                          Catálogo Filtrable + Contacto Rápido
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'erp' && (
                  <div className="pt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-2xl bg-[#F6F8FF] px-4 py-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                          Sistemas a Medida & ERP
                        </p>
                        <p className="font-heading text-lg font-bold text-[#27272E]">
                          Control Multi-Sucursal en Tiempo Real
                        </p>
                      </div>
                      <span className="rounded-full bg-[#EBEAFB] px-3 py-1 text-xs font-bold text-[#5956E9]">
                        3 Locales Activos
                      </span>
                    </div>

                    <div className="rounded-2xl bg-[#27272E] p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-[#999FAE]">Facturación Consolidada (Mes Actual)</p>
                          <p className="font-heading text-2xl font-extrabold text-white mt-0.5">
                            $ 18.420.000 ARS
                          </p>
                        </div>
                        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
                          +34.2% vs mes ant.
                        </span>
                      </div>
                      {/* Mini CSS Bar Chart */}
                      <div className="mt-4 flex items-end gap-2 h-16 pt-2">
                        <div className="w-full rounded-t-md bg-white/15 h-[45%]" />
                        <div className="w-full rounded-t-md bg-white/25 h-[60%]" />
                        <div className="w-full rounded-t-md bg-white/20 h-[52%]" />
                        <div className="w-full rounded-t-md bg-[#FAB8C4] h-[75%]" />
                        <div className="w-full rounded-t-md bg-[#FFDC60] h-[88%]" />
                        <div className="w-full rounded-t-md bg-[#5956E9] h-full" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Piece 2 (Top Right Satellite): Mercado Pago */}
              <div
                className="piece-top-right hidden sm:block absolute -top-7 -right-6 z-20"
                style={{ transform: 'translateZ(55px)' }}
              >
                <div className="animate-float-1 rounded-2xl bg-white px-4 py-3 shadow-drnube-float border border-[#EBEAFB]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EBEAFB] font-heading text-xs font-extrabold text-[#5956E9]">
                      MP
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                        Seña Acreditada
                      </p>
                      <p className="font-heading text-sm font-extrabold text-[#27272E]">
                        +$ 15.000 ARS · Turno 17:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Piece 3 (Bottom Left Satellite): Conversión */}
              <div
                className="piece-bottom-left hidden sm:block absolute -bottom-7 -left-6 z-20"
                style={{ transform: 'translateZ(65px)' }}
              >
                <div className="animate-float-2 rounded-2xl bg-[#27272E] px-4 py-3.5 text-white shadow-drnube-float">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFDC60] font-heading text-xs font-extrabold text-[#27272E]">
                      +42%
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#999FAE]">Conversión de Clientes</p>
                      <p className="font-heading text-sm font-bold text-white">
                        Cero consultas perdidas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Piece 4 (Top Left Satellite Pill): Google Calendar */}
              <div
                className="piece-top-left hidden md:block absolute -top-5 left-6 z-20"
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="animate-float-3 flex items-center gap-2 rounded-full bg-[#FAB8C4] px-3.5 py-1.5 text-xs font-extrabold text-[#27272E] shadow-md">
                  <span className="h-2 w-2 rounded-full bg-[#27272E]" />
                  <span>Sincronizado con Google Calendar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
