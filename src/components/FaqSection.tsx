import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  badge?: string;
}

const faqs: FaqItem[] = [
  {
    id: 'tiempo',
    category: 'Entrega',
    question: '¿Cuánto tiempo tarda en estar lista mi web?',
    answer:
      'Tu web está lista y 100% online en solo 48 a 72 horas hábiles una vez que nos pasás la información básica de tu negocio (fotos, precios y servicios). Sin demoras ni meses de espera.',
    badge: '48 horas'
  },
  {
    id: 'mensualidad',
    category: 'Costos',
    question: '¿Tengo que pagar una mensualidad obligatoria para mantener mi web?',
    answer:
      'No. Con el Plan Web Express el pago es por única vez. Te entregamos la web llave en mano, el dominio y el hosting quedan funcionando y no te atamos a ninguna suscripción mensual obligatoria. La web es 100% tuya. Si más adelante querés sumar un bot de WhatsApp con IA o hacer cambios grandes, podés contratarnos puntualmente o con un abono opcional.',
    badge: 'Sin ataduras'
  },
  {
    id: 'bot-whatsapp',
    category: 'WhatsApp IA',
    question: '¿Cómo funciona el bot de WhatsApp? ¿Uso mi propio número?',
    answer:
      'Sí, funciona directamente con tu número actual de WhatsApp (sea normal o WhatsApp Business), o podemos conectarlo a una línea nueva si preferís separar lo personal de lo comercial. El asistente inteligente atiende consultas las 24 hs, pasa precios, muestra fotos de productos y deriva a tu teléfono cuando es una consulta específica.',
    badge: 'Tu número actual'
  },
  {
    id: 'autogestion',
    category: 'Gestión',
    question: '¿Puedo actualizar precios, fotos y productos yo mismo sin saber programar?',
    answer:
      'Totalmente. Las webs y sistemas están pensados para comerciantes y profesionales, no para programadores. Te entregamos un panel simple o una planilla sincronizada para que puedas cambiar un precio o pausar un producto en 10 segundos desde tu celular.',
    badge: '100% Simple'
  },
  {
    id: 'pagos',
    category: 'Costos',
    question: '¿Qué medios de pago aceptan para contratar el servicio?',
    answer:
      'Aceptamos transferencia bancaria, Mercado Pago (dinero en cuenta y tarjetas de débito/crédito) y USDT / cripto si estás en el exterior. Trabajamos con un anticipo del 50% al iniciar y el 50% restante cuando la web o sistema está online y funcionando a tu entera satisfacción.',
    badge: '50% y 50%'
  },
  {
    id: 'garantia',
    category: 'Soporte',
    question: '¿Qué pasa si necesito ayuda o cambios después del lanzamiento?',
    answer:
      'Todos nuestros trabajos incluyen 30 días de garantía y soporte directo por WhatsApp con Nicolás. Si surge cualquier duda, ajuste de texto o consulta técnica, nos escribís y lo resolvemos en el día.',
    badge: 'Garantía 30 días'
  }
];

export default function FaqSection() {
  // Support toggling items with set of open IDs
  const [openIds, setOpenIds] = useState<string[]>(['tiempo']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-dr-anim="scale-y">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5956E9]/20 bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#27272E] leading-[1.08]">
            Respuestas claras, <span className="text-[#5956E9]">cero letra chica</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#525260] font-normal leading-relaxed">
            Hacé clic en cualquier pregunta para ver el detalle de tiempos, pagos y funcionamiento.
          </p>
        </div>

        {/* Accordion List - Notice: NO data-dr-anim on children so React re-renders never wipe opacity/transform! */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#F6F8FF] border-[#5956E9]/40 shadow-md ring-1 ring-[#5956E9]/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-2">
                    {faq.badge && (
                      <span className="hidden sm:inline-block rounded-full bg-[#EBEAFB] px-2.5 py-0.5 text-xs font-bold text-[#5956E9] flex-shrink-0">
                        {faq.badge}
                      </span>
                    )}
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#27272E] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#5956E9] text-white rotate-180'
                        : 'bg-slate-100 text-[#525260]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-200/70 animate-fadeIn">
                    <p className="text-sm sm:text-base text-[#525260] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#27272E] to-[#1E1E24] p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-heading text-xl sm:text-2xl font-bold">
              ¿Tenés una duda específica sobre tu rubro?
            </h4>
            <p className="text-sm sm:text-base text-slate-300 mt-1">
              Escribinos por WhatsApp y te contestamos en el momento sin ningún compromiso.
            </p>
          </div>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Nico!%20Tengo%20una%20consulta%20antes%20de%20empezar."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-[#5956E9] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#5956E9]/40 hover:bg-[#4441C8] transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Escribir por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
