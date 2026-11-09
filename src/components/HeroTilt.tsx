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

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section className="relative overflow-hidden bg-drnube-mesh pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Dr.Nube Rellax Floating Pastel Spheres */}
      <div
        data-parallax-speed="1.8"
        data-parallax-x="0.5"
        className="pointer-events-none absolute top-24 left-[5%] h-16 w-16 rounded-full bg-[#FAB8C4]/60 blur-[1px]"
      />
      <div
        data-parallax-speed="-1.5"
        data-parallax-x="-0.6"
        className="pointer-events-none absolute top-40 right-[8%] h-24 w-24 rounded-full bg-[#FFDC60]/50"
      />
      <div
        data-parallax-speed="2.2"
        className="pointer-events-none absolute bottom-12 left-[38%] h-16 w-16 rounded-full bg-[#EBEAFB] border border-[#5956E9]/20"
      />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#EBEAFB]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#FAB8C4]/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Big, Bold, Concise Copy Focused on Helping Businesses Digitalize */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div
              data-dr-anim="scale-y"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9]"
            >
              <span className="h-2 w-2 rounded-full bg-[#5956E9] animate-pulse" />
              <span>Ayudamos a Comercios y Profesionales a Digitalizarse</span>
            </div>

            {/* Big Masked Line-by-Line Title Reveal */}
            <h1 className="title-mask-container is-inview font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-[#27272E] sm:text-5xl lg:text-[60px]">
              <span className="title-mask-box">
                <span className="title-mask-text">Dejá de perder tiempo.</span>
              </span>
              <span className="title-mask-box">
                <span className="title-mask-text">
                  <span className="text-[#5956E9]">Digitalizá</span> tu negocio
                </span>
              </span>
              <span className="title-mask-box">
                <span className="title-mask-text">y vendé las 24 horas.</span>
              </span>
            </h1>

            {/* Concise, impactful subtext */}
            <p
              data-dr-anim="scale-y"
              data-dr-delay="150"
              className="max-w-xl text-xl leading-relaxed text-[#525260] sm:text-2xl font-medium"
            >
              Páginas web listas en 48 hs, bots de WhatsApp que atienden y cobran por vos, y sistemas simples sin planillas de Excel.
            </p>

            {/* Primary & Secondary CTAs */}
            <div
              data-dr-anim="scale-y"
              data-dr-delay="250"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#planes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5956E9] px-9 py-4 text-base font-bold text-white shadow-drnube-btn transition-all duration-300 hover:-translate-y-1 hover:bg-[#4441C8]"
              >
                <span>🚀</span>
                <span>Quiero Digitalizar mi Negocio</span>
              </a>
              <a
                href="#showroom-webs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-7 py-4 text-base font-bold text-[#27272E] shadow-sm transition-all duration-300 hover:border-[#5956E9] hover:text-[#5956E9]"
              >
                <span>👁️</span>
                <span>Ver 8 Demos en Vivo</span>
              </a>
            </div>

            {/* 3 High-Impact Big Value Pills */}
            <div
              data-dr-anim="scale-y"
              data-dr-delay="350"
              className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/70 max-w-lg"
            >
              <div>
                <p className="font-heading text-3xl font-extrabold text-[#27272E]">48 hs</p>
                <p className="text-xs font-semibold text-[#525260] mt-0.5">Tu web funcionando</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-extrabold text-[#5956E9]">24/7</p>
                <p className="text-xs font-semibold text-[#525260] mt-0.5">Atención por WhatsApp</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-extrabold text-emerald-600">0%</p>
                <p className="text-xs font-semibold text-[#525260] mt-0.5">Complicaciones técnicas</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Tilt Stage + Multi-Piece Scroll Assembly */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="dr-assembly-stage is-inview lg:col-span-6 relative flex items-center justify-center py-4"
            style={{ perspective: '1100px' }}
          >
            <div
              className="relative w-full max-w-[540px] transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Central SaaS Card */}
              <div className="piece-base relative rounded-3xl bg-white p-6 sm:p-7 shadow-drnube border border-slate-100">
                {/* Top Window Bar & Tab Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FAB8C4]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFDC60]" />
                    <span className="h-3 w-3 rounded-full bg-[#5956E9]" />
                    <span className="ml-2 text-xs font-bold text-[#999FAE] uppercase tracking-wider">
                      Así funciona tu negocio digital
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
                      Web Propia
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
                      Control Total
                    </button>
                  </div>
                </div>

                {/* Tab 1: WhatsApp Bot */}
                {activeTab === 'bot' && (
                  <div className="pt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-2xl bg-[#F6F8FF] px-4 py-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                          Atención Inmediata
                        </p>
                        <p className="font-heading text-lg font-bold text-[#27272E]">
                          Ventas y Turnos Automáticos
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                        ● Online 24/7
                      </span>
                    </div>

                    {/* Simulated WhatsApp Conversation */}
                    <div className="space-y-3 rounded-2xl bg-[#ECF2F6]/70 p-4 text-sm">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-3 shadow-xs text-[#27272E]">
                        <p className="text-[11px] font-bold text-[#999FAE] mb-0.5">Cliente · 23:15 hs</p>
                        Hola! ¿Tienen turno para corte y barba mañana viernes? ¿Cuánto sale?
                      </div>
                      <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#5956E9] p-3.5 text-white shadow-sm">
                        <p className="text-[11px] font-semibold text-[#EBEAFB] mb-0.5">
                          Tu Asistente IA · Inmediato
                        </p>
                        ¡Hola! Sí, queda libre a las 16:30 y 18:00 hs. El total es $14.000. Te dejo el link de Mercado Pago para reservar tu seña de $4.000 en 1 clic.
                      </div>
                    </div>

                    {/* Quick Metric Badges */}
                    <div className="grid grid-cols-3 gap-3 pt-1">
                      <div className="rounded-2xl bg-[#F6F8FF] p-3 text-center">
                        <p className="text-[11px] font-semibold text-[#525260]">Respuesta</p>
                        <p className="font-heading text-xl font-extrabold text-[#27272E]">&lt; 3 seg</p>
                      </div>
                      <div className="rounded-2xl bg-[#EBEAFB] p-3 text-center">
                        <p className="text-[11px] font-semibold text-[#5956E9]">Cobros MP</p>
                        <p className="font-heading text-xl font-extrabold text-[#5956E9]">Automático</p>
                      </div>
                      <div className="rounded-2xl bg-[#F6F8FF] p-3 text-center">
                        <p className="text-[11px] font-semibold text-[#525260]">Clientes perdidos</p>
                        <p className="font-heading text-xl font-extrabold text-emerald-600">0%</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Web Propia */}
                {activeTab === 'webs' && (
                  <div className="pt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-2xl bg-[#F6F8FF] px-4 py-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                          Presencia Digital Profesional
                        </p>
                        <p className="font-heading text-lg font-bold text-[#27272E]">
                          Tu Vidriera Online Lista en 48 hs
                        </p>
                      </div>
                      <span className="rounded-full bg-[#FFDC60]/50 px-3 py-1 text-xs font-bold text-[#27272E]">
                        Entrega Rápida
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <span className="inline-block rounded-md bg-[#EBEAFB] px-2 py-0.5 text-[10px] font-bold text-[#5956E9]">
                          GASTRONOMÍA
                        </span>
                        <p className="mt-1.5 font-heading text-sm font-bold text-[#27272E]">
                          Carta Digital + Pedidos WhatsApp
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <span className="inline-block rounded-md bg-[#FAB8C4]/40 px-2 py-0.5 text-[10px] font-bold text-[#27272E]">
                          ESTÉTICA & BARBERÍAS
                        </span>
                        <p className="mt-1.5 font-heading text-sm font-bold text-[#27272E]">
                          Turnero Online + Precios en ARS
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <span className="inline-block rounded-md bg-[#FFDC60]/50 px-2 py-0.5 text-[10px] font-bold text-[#27272E]">
                          TALLERES & SERVICIOS
                        </span>
                        <p className="mt-1.5 font-heading text-sm font-bold text-[#27272E]">
                          Presupuestos en 1 Clic
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <span className="inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                          PROFESIONALES
                        </span>
                        <p className="mt-1.5 font-heading text-sm font-bold text-[#27272E]">
                          Autoridad en Google Maps
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Control Total */}
                {activeTab === 'erp' && (
                  <div className="pt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-2xl bg-[#F6F8FF] px-4 py-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                          Gestión Simple
                        </p>
                        <p className="font-heading text-lg font-bold text-[#27272E]">
                          Chau Planillas Desordenadas
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                        En tu Celular
                      </span>
                    </div>

                    <div className="rounded-2xl bg-[#27272E] p-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#FFDC60]">
                        Resumen de Hoy en Vivo
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-white/10 p-3">
                          <p className="text-xs text-slate-300">Ventas Cobradas</p>
                          <p className="font-heading text-2xl font-extrabold text-emerald-400">
                            $ 380.000
                          </p>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                          <p className="text-xs text-slate-300">Turnos / Pedidos</p>
                          <p className="font-heading text-2xl font-extrabold text-white">
                            24 listos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Satellite Float 1: Top Right */}
              <div className="piece-top-right hidden sm:block absolute -top-5 -right-5 z-20 rounded-2xl bg-[#FFDC60] px-4 py-3 text-[#27272E] shadow-drnube-float">
                <p className="text-[10px] font-black uppercase tracking-wider">Cobros Automáticos</p>
                <p className="font-heading text-xs font-extrabold mt-0.5">Mercado Pago Directo ✓</p>
              </div>

              {/* Satellite Float 2: Bottom Left */}
              <div className="piece-bottom-left hidden sm:block absolute -bottom-5 -left-5 z-20 rounded-2xl bg-[#27272E] px-4 py-3 text-white shadow-drnube-float">
                <p className="text-[10px] font-bold text-[#FAB8C4] uppercase">Google Calendar</p>
                <p className="font-heading text-xs font-extrabold text-white mt-0.5">Agenda 100% Sincronizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
