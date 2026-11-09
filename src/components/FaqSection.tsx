import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
  badge?: string;
}

const faqs: FaqItem[] = [
  {
    question: '¿Cuánto tiempo tarda en estar lista mi web?',
    answer:
      'Tu web está lista y 100% online en solo 48 a 72 horas hábiles una vez que nos pasás la información básica de tu negocio (fotos, precios y servicios). Sin demoras ni meses de espera.',
    badge: '48hs'
  },
  {
    question: '¿Tengo que pagar una mensualidad obligatoria para mantener mi web?',
    answer:
      '¡No! Con el Plan Web Express el pago es por única vez. Te entregamos la web llave en mano, el dominio y el hosting quedan funcionando y no te atamos a ninguna suscripción mensual. Si en el futuro querés que hagamos modificaciones grandes o sumes un bot de IA, podés contratarnos por tarea o con plan de soporte.',
    badge: 'Sin ataduras'
  },
  {
    question: '¿Cómo funciona el bot de WhatsApp? ¿Uso mi propio número?',
    answer:
      'Sí, funciona directamente con tu número actual de WhatsApp (sea WhatsApp normal o WhatsApp Business), o podemos conectarlo a una línea nueva si preferís separar lo personal de lo comercial. El bot atiende a tus clientes las 24 hs, pasa precios, muestra fotos y deriva a tu teléfono cuando es una consulta compleja.',
    badge: 'Tu número'
  },
  {
    question: '¿Puedo actualizar precios, fotos y productos yo mismo?',
    answer:
      '¡Totalmente! Las webs y sistemas están pensados para dueños de negocio, no para programadores. Te entregamos un panel simple o una planilla sincronizada para que puedas cambiar un precio o pausar un producto en 10 segundos desde tu celular.',
    badge: '100% Simple'
  },
  {
    question: '¿Qué medios de pago aceptan para contratar el servicio?',
    answer:
      'Aceptamos transferencia bancaria, Mercado Pago (dinero en cuenta y tarjetas de débito/crédito) y USDT / cripto si estás en el exterior. Trabajamos con un anticipo del 50% al iniciar y el 50% restante cuando la web o sistema está online y funcionando a tu entera satisfacción.',
    badge: '50% / 50%'
  },
  {
    question: '¿Qué pasa si necesito ayuda o cambios después del lanzamiento?',
    answer:
      'Todos nuestros trabajos incluyen 30 días de garantía y soporte directo por WhatsApp. Si surge cualquier duda, ajuste o consulta, nos escribís y lo resolvemos en el día.',
    badge: 'Garantía 30 días'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-dr-anim="scale-y">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5956E9]/20 bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9] mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#27272E] leading-[1.08]">
            Respuestas claras, <span className="text-[#5956E9]">cero letra chica</span>
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-[#525260] font-normal leading-relaxed">
            Todo lo que necesitás saber antes de dar el paso y empezar a digitalizar tu negocio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#F6F8FF] border-[#5956E9]/30 shadow-md'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
                data-dr-anim="translate-y"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-2">
                    {faq.badge && (
                      <span className="hidden sm:inline-block rounded-full bg-[#EBEAFB] px-3 py-1 text-xs font-bold text-[#5956E9]">
                        {faq.badge}
                      </span>
                    )}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#27272E]">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center font-bold text-base transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#5956E9] text-white rotate-180'
                        : 'bg-slate-100 text-[#525260]'
                    }`}
                  >
                    ▾
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 -mt-2">
                    <p className="text-base sm:text-lg text-[#525260] leading-relaxed border-t border-slate-200/60 pt-4">
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
            <span>Escribir por WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
