import React, { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  id: string;
  sender: 'client' | 'bot';
  text?: string;
  time: string;
  badge?: string;
  productCard?: {
    title: string;
    price: string;
    desc: string;
    tag: string;
  };
}

const scenarioOptions = [
  {
    id: 'precios',
    buttonLabel: '💵 ¿Cuánto sale una web?',
    clientMessage: 'Hola! Cuánto sale hacer una web para mi negocio y cuánto tardan?',
    botReply:
      '¡Hola! 👋 Diseñamos tu web lista para vender en solo 48 horas hábiles. Incluye dominio, hosting de alta velocidad, catálogo y botón de WhatsApp.',
    productCard: {
      title: 'Plan Web Express 48hs',
      price: '$180.000 ARS',
      desc: 'Entrega llave en mano con catálogo y botón de WhatsApp.',
      tag: '🔥 Más Elegido'
    }
  },
  {
    id: 'bot-ia',
    buttonLabel: '🤖 ¿Cómo funciona el Bot de WhatsApp?',
    clientMessage: 'Cómo funciona el bot de IA? Puede tomar pedidos o turnos?',
    botReply:
      '¡Totalmente! 🤖 El bot atiende las 24 hs los 7 días de la semana. Responde dudas, envía fotos de productos, cotizaciones y agenda citas directo en tu Google Calendar sin que tengas que tocar el teléfono.',
    productCard: {
      title: 'Bot de WhatsApp con IA',
      price: 'Atención 24/7',
      desc: 'Cero demora de espera. Derivación automática a tu celular personal.',
      tag: '⚡ 100% Automático'
    }
  },
  {
    id: 'sistema',
    buttonLabel: '📊 Quiero ordenar mi negocio (Chau Excel)',
    clientMessage: 'Tengo un quilombo de planillas y stock. Tienen algún sistema simple?',
    botReply:
      '¡Sí! 🚀 Desarrollamos paneles a medida súper sencillos para que controles desde el celular tus clientes, stock crítico, cobros diarios y recordatorios automáticos por WhatsApp.',
    productCard: {
      title: 'Sistema de Gestión / CRM',
      price: 'A Medida',
      desc: 'Tus ventas, clientes y stock centralizados en una sola pantalla.',
      tag: '✨ Todo en 1'
    }
  }
];

export default function LiveInteractiveChat() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'client',
      text: scenarioOptions[0].clientMessage,
      time: '14:20'
    },
    {
      id: 'm2',
      sender: 'bot',
      text: scenarioOptions[0].botReply,
      time: '14:20',
      productCard: scenarioOptions[0].productCard
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSelectScenario = (index: number) => {
    if (index === selectedScenario && !isTyping) return;
    setSelectedScenario(index);
    setIsTyping(true);

    const scenario = scenarioOptions[index];

    // Client sends message immediately
    setMessages([
      {
        id: `client-${Date.now()}`,
        sender: 'client',
        text: scenario.clientMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    // Bot types and responds after 1.2s delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: scenario.botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          productCard: scenario.productCard
        }
      ]);
    }, 1200);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <section id="simulador-ia" className="relative py-28 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-dr-anim="scale-y">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            Simulador en Vivo
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#27272E] leading-[1.08]">
            Mirá cómo responde tu <span className="text-[#5956E9]">Bot de WhatsApp</span>
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-[#525260] font-normal leading-relaxed">
            Hacé click en cualquiera de las consultas para ver la velocidad con la que la Inteligencia Artificial atiende y cierra ventas en tiempo real.
          </p>
        </div>

        {/* Interactive Layout: Prompts & Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Prompts & Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#999FAE]">
                Paso 1: Elegí una pregunta para probarlo
              </span>
              <div className="flex flex-col gap-3">
                {scenarioOptions.map((scenario, idx) => {
                  const isSelected = selectedScenario === idx;
                  return (
                    <button
                      key={scenario.id}
                      onClick={() => handleSelectScenario(idx)}
                      disabled={isTyping}
                      className={`text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#5956E9] text-white border-[#5956E9] shadow-lg shadow-[#5956E9]/25 scale-[1.02]'
                          : 'bg-[#F6F8FF] text-[#27272E] border-slate-200/80 hover:bg-white hover:border-[#5956E9]/40 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl sm:text-2xl">
                          {scenario.id === 'precios' ? '⚡' : scenario.id === 'bot-ia' ? '💬' : '📊'}
                        </span>
                        <div>
                          <p className={`font-heading font-bold text-base sm:text-lg ${isSelected ? 'text-white' : 'text-[#27272E]'}`}>
                            {scenario.buttonLabel}
                          </p>
                          <p className={`text-xs mt-0.5 ${isSelected ? 'text-white/80' : 'text-[#525260]'}`}>
                            Click para simular respuesta en vivo
                          </p>
                        </div>
                      </div>
                      <span className={`text-lg font-bold ${isSelected ? 'text-[#FFDC60]' : 'text-slate-400'}`}>
                        {isSelected ? '● Activo' : 'Probar →'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Benefit Box */}
            <div className="rounded-2xl bg-[#EBEAFB] p-6 border border-[#5956E9]/20 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#5956E9]">
                <span>✓ Ventajas de automatizar tu WhatsApp:</span>
              </div>
              <ul className="text-sm text-[#27272E] space-y-1.5 font-medium">
                <li>• Nunca más perdés una venta a las 11 de la noche ni un domingo.</li>
                <li>• No pagás empleados de atención ni estás esclavizado al teléfono.</li>
                <li>• Funciona con tu número actual de WhatsApp Business o normal.</li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20probar%20un%20bot%20de%20WhatsApp%20para%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#5956E9] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#4441C8] transition-all"
                >
                  <span>Quiero mi propio Bot de WhatsApp</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Smartphone Frame Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[42px] bg-[#1F2937] p-3 shadow-2xl ring-1 ring-slate-900/10 border-4 border-slate-700/50 relative">
              {/* Phone Dynamic Island / Camera */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 h-5 w-28 bg-black rounded-full z-20 flex items-center justify-end px-3">
                <div className="h-2 w-2 rounded-full bg-[#5956E9]/60"></div>
              </div>

              {/* Screen Container */}
              <div className="overflow-hidden rounded-[34px] bg-[#0B141B] flex flex-col h-[580px] shadow-inner">
                {/* WhatsApp Top Header Bar */}
                <div className="bg-[#1F2C34] pt-8 pb-3 px-4 flex items-center justify-between border-b border-white/5 z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-[#5956E9] flex items-center justify-center text-white font-heading font-bold text-sm shadow-md">
                        NG
                      </div>
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#1F2C34]"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-white font-heading font-semibold text-sm">
                          Bot NicoGuzman.dev
                        </span>
                        <span className="text-emerald-400 text-xs">✓</span>
                      </div>
                      <p className="text-[11px] text-emerald-400 font-medium">
                        {isTyping ? 'escribiendo respuesta...' : 'en línea las 24 horas'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span>📞</span>
                    <span>⋮</span>
                  </div>
                </div>

                {/* WhatsApp Chat Body with Wallpaper Texture */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0B141B] text-sm">
                  {/* Security Notification Pill */}
                  <div className="text-center my-1">
                    <span className="rounded-lg bg-[#182229] px-3 py-1 text-[10px] text-[#8696A0] inline-block shadow-sm">
                      🔒 Los mensajes están cifrados de extremo a extremo
                    </span>
                  </div>

                  {/* Messages Flow */}
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender === 'client' ? 'items-end' : 'items-start'
                      } animate-fadeIn`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3 shadow-md ${
                          msg.sender === 'client'
                            ? 'bg-[#005C4B] text-white rounded-tr-none'
                            : 'bg-[#202C33] text-[#E9EDEF] rounded-tl-none border border-white/5'
                        }`}
                      >
                        <p className="leading-relaxed text-[13px]">{msg.text}</p>

                        {/* Bot Product Card Attachment */}
                        {msg.productCard && (
                          <div className="mt-2.5 rounded-xl bg-[#111B21] p-2.5 border border-white/10 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="rounded bg-[#5956E9] px-2 py-0.5 text-[10px] font-bold text-white">
                                {msg.productCard.tag}
                              </span>
                              <span className="text-emerald-400 font-heading font-bold text-xs">
                                {msg.productCard.price}
                              </span>
                            </div>
                            <p className="font-heading font-semibold text-white text-xs">
                              {msg.productCard.title}
                            </p>
                            <p className="text-[11px] text-slate-400 leading-tight">
                              {msg.productCard.desc}
                            </p>
                            <a
                              href="https://wa.me/5491100000000?text=Hola%20Nico!%20Quiero%20pedir%20este%20servicio."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full rounded-lg bg-[#00A884] py-1.5 text-center text-[11px] font-bold text-white hover:bg-[#008f6f] transition-colors mt-1"
                            >
                              👉 Quiero Contratar
                            </a>
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400">
                          <span>{msg.time}</span>
                          {msg.sender === 'client' && <span className="text-[#53BDEB]">✓✓</span>}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator Bubble */}
                  {isTyping && (
                    <div className="flex items-start">
                      <div className="rounded-2xl rounded-tl-none bg-[#202C33] px-4 py-2.5 border border-white/5 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"></span>
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* WhatsApp Chat Input Footer */}
                <div className="bg-[#1F2C34] p-3 flex items-center gap-2 border-t border-white/5">
                  <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2 text-xs text-slate-400">
                    Escribe un mensaje...
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#00A884] flex items-center justify-center text-white text-xs">
                    ➤
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
