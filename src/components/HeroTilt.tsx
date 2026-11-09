import React, { useState, useRef } from 'react';
import { ArrowRight, Bot, Globe, LayoutDashboard, CheckCircle2, Zap, Clock, ShieldCheck, Sparkles } from 'lucide-react';

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
      {/* Dr.Nube Floating Pastel Accent Shapes */}
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
          {/* Left Column: Big, Bold, Concise Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div
              data-dr-anim="scale-y"
              className="inline-flex items-center gap-2 rounded-full bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#5956E9]" />
              <span>Digitalización Integral para Comercios y Negocios</span>
            </div>

            {/* Masked Line-by-Line Title Reveal */}
            <h1 className="title-mask-container is-inview font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-[#27272E] sm:text-5xl lg:text-[58px]">
              <span className="title-mask-box">
                <span className="title-mask-text">Menos tareas manuales.</span>
              </span>
              <span className="title-mask-box">
                <span className="title-mask-text">
                  <span className="text-[#5956E9]">Más ventas</span> online
                </span>
              </span>
              <span className="title-mask-box">
                <span className="title-mask-text">las 24 horas.</span>
              </span>
            </h1>

            {/* Concise, impactful subtext */}
            <p
              data-dr-anim="scale-y"
              data-dr-delay="150"
              className="max-w-xl text-lg sm:text-xl leading-relaxed text-[#525260] font-normal"
            >
              Páginas web listas en 48 hs, agentes de WhatsApp que atienden y cobran por vos, y sistemas simples sin planillas de Excel.
            </p>

            {/* Primary & Secondary CTAs */}
            <div
              data-dr-anim="scale-y"
              data-dr-delay="250"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <a
                href="/precios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5956E9] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-drnube-btn transition-all duration-300 hover:-translate-y-1 hover:bg-[#4441C8]"
              >
                <span>Ver Planes y Precios</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-6 py-3.5 text-sm sm:text-base font-bold text-[#27272E] shadow-sm transition-all duration-300 hover:border-[#5956E9] hover:text-[#5956E9]"
              >
                <span>Conocer Servicios</span>
              </a>
            </div>

            {/* 3 Metric Pills */}
            <div
              data-dr-anim="scale-y"
              data-dr-delay="350"
              className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 max-w-lg"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFDC60]/40 text-[#855B00]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-heading text-base font-extrabold text-[#27272E]">48hs</p>
                  <p className="text-[11px] font-medium text-[#999FAE]">Entrega web</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAB8C4]/40 text-[#9E1B32]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-heading text-base font-extrabold text-[#27272E]">24/7</p>
                  <p className="text-[11px] font-medium text-[#999FAE]">WhatsApp IA</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-heading text-base font-extrabold text-emerald-600">30 días</p>
                  <p className="text-[11px] font-medium text-[#999FAE]">Garantía total</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Card Frame */}
          <div className="lg:col-span-6 relative">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative rounded-3xl bg-white p-6 sm:p-8 border border-slate-100 shadow-drnube-float"
            >
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FAB8C4]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFDC60]" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex rounded-full bg-[#F6F8FF] p-1 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveTab('bot')}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all cursor-pointer ${
                      activeTab === 'bot'
                        ? 'bg-[#5956E9] text-white shadow-sm'
                        : 'text-[#525260] hover:text-[#27272E]'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>WhatsApp IA</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('webs')}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all cursor-pointer ${
                      activeTab === 'webs'
                        ? 'bg-[#5956E9] text-white shadow-sm'
                        : 'text-[#525260] hover:text-[#27272E]'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Web Propia</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('erp')}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all cursor-pointer ${
                      activeTab === 'erp'
                        ? 'bg-[#5956E9] text-white shadow-sm'
                        : 'text-[#525260] hover:text-[#27272E]'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Control Total</span>
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
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      En línea 24/7
                    </span>
                  </div>

                  {/* Simulated WhatsApp Conversation */}
                  <div className="space-y-3 rounded-2xl bg-[#ECF2F6]/70 p-4 text-sm">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-3 shadow-xs text-[#27272E]">
                      <p className="text-[11px] font-bold text-[#999FAE] mb-0.5">Cliente · 23:15 hs</p>
                      Hola, ¿tienen turno para corte y barba mañana viernes? ¿Cuánto sale?
                    </div>
                    <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#5956E9] p-3.5 text-white shadow-sm">
                      <p className="text-[11px] font-semibold text-[#EBEAFB] mb-0.5 flex items-center gap-1">
                        <Bot className="w-3 h-3" /> Asistente IA · Inmediato
                      </p>
                      ¡Hola! Sí, queda libre a las 16:30 y 18:00 hs. El total es $14.000. Te dejo el link de Mercado Pago para reservar tu seña de $4.000 en 1 clic.
                    </div>
                  </div>

                  {/* Metric Badges */}
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div className="rounded-2xl bg-[#F6F8FF] p-3 text-center">
                      <p className="text-[11px] font-semibold text-[#525260]">Respuesta</p>
                      <p className="font-heading text-lg font-extrabold text-[#27272E]">&lt; 3 seg</p>
                    </div>
                    <div className="rounded-2xl bg-[#EBEAFB] p-3 text-center">
                      <p className="text-[11px] font-semibold text-[#5956E9]">Cobros MP</p>
                      <p className="font-heading text-lg font-extrabold text-[#5956E9]">Automático</p>
                    </div>
                    <div className="rounded-2xl bg-[#F6F8FF] p-3 text-center">
                      <p className="text-[11px] font-semibold text-[#525260]">Clientes perdidos</p>
                      <p className="font-heading text-lg font-extrabold text-emerald-600">0%</p>
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
                        Presencia Profesional
                      </p>
                      <p className="font-heading text-lg font-bold text-[#27272E]">
                        Tu Vidriera Online en 48 hs
                      </p>
                    </div>
                    <span className="rounded-full bg-[#FFDC60]/50 px-3 py-1 text-xs font-bold text-[#855B00]">
                      Entrega Rápida
                    </span>
                  </div>

                  <div className="space-y-2 rounded-2xl bg-white p-4 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#27272E]">tu-negocio.com</span>
                      <span className="text-xs font-semibold text-emerald-600">SSL Activo</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-4/5 bg-[#5956E9]"></div>
                    </div>
                    <p className="text-xs text-[#525260]">
                      Optimizada para celulares, catálogo de fotos, lista de precios y botón flotante de WhatsApp.
                    </p>
                  </div>

                  <a
                    href="/templates"
                    className="block text-center rounded-xl bg-[#5956E9] py-2.5 text-xs font-bold text-white hover:bg-[#4441C8] transition-colors"
                  >
                    Ver Showroom de Templates
                  </a>
                </div>
              )}

              {/* Tab 3: ERP / Control */}
              {activeTab === 'erp' && (
                <div className="pt-5 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-[#F6F8FF] px-4 py-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5956E9]">
                        Orden Total
                      </p>
                      <p className="font-heading text-lg font-bold text-[#27272E]">
                        Chau Planillas de Excel
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      En Tiempo Real
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#F6F8FF] p-3">
                      <p className="text-[11px] text-[#525260]">Ventas de hoy</p>
                      <p className="font-heading text-xl font-bold text-[#27272E]">$185.000</p>
                    </div>
                    <div className="rounded-2xl bg-[#F6F8FF] p-3">
                      <p className="text-[11px] text-[#525260]">Pedidos pendientes</p>
                      <p className="font-heading text-xl font-bold text-[#5956E9]">8 órdenes</p>
                    </div>
                  </div>

                  <a
                    href="/servicios#sistemas"
                    className="block text-center rounded-xl bg-[#27272E] py-2.5 text-xs font-bold text-white hover:bg-black transition-colors"
                  >
                    Conocer Sistemas de Gestión
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
