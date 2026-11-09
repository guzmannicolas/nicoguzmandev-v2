import React from 'react';
import { Clock, TrendingDown, FileSpreadsheet, DollarSign, Zap, Globe, LayoutDashboard, TrendingUp, Check, X, ArrowRight } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    problem: 'Responder consultas a cualquier hora',
    description: 'Estás cenando o un domingo descansando y te entran mensajes pidiendo precios o turnos que si no contestás ya, se van con otro.'
  },
  {
    icon: TrendingDown,
    problem: 'Sin página web o con una web vieja',
    description: 'Mandás listas de precios por PDF o fotos pesadas por WhatsApp. Tus clientes no pueden ver tus trabajos ordenados.'
  },
  {
    icon: FileSpreadsheet,
    problem: 'Planillas de Excel y anotadores rotos',
    description: 'No sabés exactamente cuánto vendiste hoy, quién te debe o si te queda stock del producto más vendido.'
  },
  {
    icon: DollarSign,
    problem: 'Plata perdida en publicidad que no rinde',
    description: 'Gastás en anuncios o historias de Instagram, pero como la gente llega a un chat frío o tarda en ser atendida, no compran.'
  }
];

const solutions = [
  {
    icon: Zap,
    solution: 'Atención y cotización en piloto automático',
    description: 'Un bot con Inteligencia Artificial responde en 3 segundos, muestra fotos, pasa presupuestos y agenda turnos las 24 hs.'
  },
  {
    icon: Globe,
    solution: 'Página web lista en 48hs pensada para celular',
    description: 'Tus clientes entran, eligen lo que quieren y te compran con 1 clic o te escriben con el pedido ya armado.'
  },
  {
    icon: LayoutDashboard,
    solution: 'Panel de control simple desde tu propio celular',
    description: 'Ves tus ingresos, lista de clientes y citas del día en una sola pantalla clara y sin complicaciones.'
  },
  {
    icon: TrendingUp,
    solution: 'Multiplicás la conversión de cada visita',
    description: 'Al dar respuestas inmediatas y una presencia seria, tu negocio transmite confianza y cierra muchas más ventas.'
  }
];

export default function TransformationComparison() {
  return (
    <section className="relative py-24 bg-[#F6F8FF] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-dr-anim="scale-y">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FAB8C4] bg-[#FAB8C4]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#9E1B32] mb-4">
            Transformación Real
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#27272E] leading-[1.08]">
            El cambio de tu negocio: <br className="hidden sm:inline" />
            <span className="text-[#999FAE]">Antes</span> vs. <span className="text-[#5956E9]">Después</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#525260] font-normal leading-relaxed">
            La diferencia entre seguir perdiendo horas atendiendo manualmente o tener un sistema que trabaje por vos todo el día.
          </p>
        </div>

        {/* 3D Process Image Banner */}
        <div className="mb-14 overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-drnube-float p-3 sm:p-4">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900/5 aspect-[21/9] max-h-[360px] flex items-center justify-center">
            <img
              src="/images/mockup-transformation-process.jpg"
              alt="Proceso de transformación digital para negocios"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white">
                <span className="rounded-full bg-[#5956E9] px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider">
                  Proceso Llave en Mano
                </span>
                <p className="font-heading text-xl sm:text-2xl font-bold mt-2 text-white">
                  Conectamos tu negocio al mundo digital en 48 horas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: ANTES (El Problema) */}
          <div
            className="rounded-3xl bg-white p-8 sm:p-10 border border-rose-100 shadow-sm relative overflow-hidden"
            data-dr-anim="scale-x-left"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-rose-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                  <X className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#27272E]">Sin Digitalizar</h3>
                  <p className="text-xs text-rose-600 font-semibold">El estrés del día a día</p>
                </div>
              </div>
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-600">
                Pérdida de Tiempo
              </span>
            </div>

            <div className="space-y-6">
              {painPoints.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-[#525260] border border-slate-100">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#27272E]">
                        {item.problem}
                      </h4>
                      <p className="mt-1 text-sm text-[#525260] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: DESPUÉS */}
          <div
            className="rounded-3xl bg-white p-8 sm:p-10 border-2 border-[#5956E9] shadow-drnube-float relative overflow-hidden"
            data-dr-anim="scale-x-right"
          >
            <div className="absolute top-0 right-0 bg-[#5956E9] text-white px-5 py-1.5 rounded-bl-2xl text-xs font-bold tracking-wider uppercase">
              Tu Nuevo Estándar
            </div>

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#5956E9]/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#27272E]">Con NicoGuzman.dev</h3>
                  <p className="text-xs text-emerald-600 font-semibold">Negocio ordenado y vendiendo 24/7</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {solutions.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#27272E]">
                        {item.solution}
                      </h4>
                      <p className="mt-1 text-sm text-[#525260] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href="/precios"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5956E9] py-3.5 text-center text-sm font-bold text-white shadow-md shadow-[#5956E9]/25 hover:bg-[#4441C8] transition-all"
              >
                <span>Quiero Dar el Salto Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
