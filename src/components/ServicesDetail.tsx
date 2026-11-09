import React, { useState } from 'react';
import { Globe, Bot, LayoutDashboard, MapPin, Check, ArrowRight, Zap, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface ServiceItem {
  id: string;
  category: string;
  badge: string;
  badgeColor: string;
  title: string;
  tagline: string;
  description: string;
  stats: { value: string; label: string };
  image: string;
  features: string[];
  whatsappMessage: string;
}

const services: ServiceItem[] = [
  {
    id: 'webs-express',
    category: 'Presencia Online',
    badge: 'ENTREGA EN 48 HORAS',
    badgeColor: 'bg-[#FFDC60]/40 text-[#855B00] border-[#FFDC60]',
    title: 'Páginas Web Profesionales de Alta Conversión',
    tagline: 'Tu vidriera abierta al mundo las 24 hs, lista para vender.',
    description:
      'Diseñamos webs ultra rápidas, modernas y pensadas 100% para celular. Con catálogo claro, botón de compra o reserva directa y sin suscripciones obligatorias.',
    stats: { value: '+85%', label: 'de tus clientes compran desde el celular' },
    image: '/images/mockup-macbook-dashboard.jpg',
    features: [
      'Dominio propio (.com o .com.ar) y hosting de alta velocidad incluido',
      'Catálogo de productos o lista de servicios con fotos de alta calidad',
      'Botón flotante de WhatsApp directo para cerrar ventas al instante',
      'Carga en menos de 1 segundo (Google premia la velocidad)',
      'La web es 100% tuya, sin alquileres forzados ni letra chica'
    ],
    whatsappMessage: 'Hola Nico! Quiero consultar para hacer una web profesional para mi negocio en 48hs.'
  },
  {
    id: 'whatsapp-ia',
    category: 'Inteligencia Artificial',
    badge: 'ATENCIÓN 24/7 SIN DESCANSO',
    badgeColor: 'bg-[#FAB8C4]/40 text-[#9E1B32] border-[#FAB8C4]',
    title: 'Agente de WhatsApp con Inteligencia Artificial',
    tagline: 'Atendé, cotizá y cerrá ventas mientras estás ocupado o dormís.',
    description:
      'Un asistente inteligente entrenado exclusivamente con la información de tu negocio. Responde consultas frecuentes en 3 segundos, muestra productos y agenda citas sin hacer esperar al cliente.',
    stats: { value: '0 seg', label: 'tiempo de espera para tus clientes' },
    image: '/images/mockup-iphone-whatsapp-ai.jpg',
    features: [
      'Responde preguntas de precios, stock, ubicación y métodos de pago al instante',
      'Agenda turnos y reuniones sincronizado directo con tu Google Calendar',
      'Envía fotos de productos y links de cobro por Mercado Pago',
      'Deriva a tu WhatsApp personal sólo cuando el cliente necesita atención humana',
      'Funciona con tu número actual de WhatsApp sin perder contactos ni chats'
    ],
    whatsappMessage: 'Hola Nico! Me interesa automatizar mi WhatsApp con un agente de IA para responder consultas 24/7.'
  },
  {
    id: 'sistemas-gestion',
    category: 'Gestión y Automatización',
    badge: 'CHAU PLANILLAS Y CUADERNOS',
    badgeColor: 'bg-[#EBEAFB] text-[#5956E9] border-[#5956E9]/20',
    title: 'Sistemas a Medida, CRM y Control de Stock',
    tagline: 'Todo tu negocio en una sola pantalla, simple y accesible desde el celular.',
    description:
      'Dejá de perder tiempo cruzando planillas de Excel o anotando en cuadernos que se pierden. Desarrollamos paneles simples donde ves tus ventas, clientes, deudas y pedidos en tiempo real.',
    stats: { value: '3 hrs/día', label: 'de trabajo manual que te ahorrás' },
    image: '/images/mockup-transformation-process.jpg',
    features: [
      'Base de datos centralizada con historial completo de compras por cliente',
      'Recordatorios automáticos de turnos y vencimientos por WhatsApp',
      'Control de inventario, stock crítico y alertas de reposición',
      'Panel accesible desde el celular, tablet o notebook con contraseña segura',
      'Diseñado específicamente para la forma en que trabaja tu negocio'
    ],
    whatsappMessage: 'Hola Nico! Quiero ordenar mi negocio con un sistema o panel de control a medida.'
  },
  {
    id: 'google-maps',
    category: 'Visibilidad Local',
    badge: 'PRIMEROS PUESTOS EN GOOGLE',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: 'Google Maps y Posicionamiento de Negocio Local',
    tagline: 'Aparecé primero cuando alguien busque tu servicio en tu barrio o ciudad.',
    description:
      'Optimizamos al 100% tu ficha de Google Mi Negocio (Google Maps) para que cuando un cliente potencial busque lo que vendés en tu zona, encuentre tu negocio antes que a la competencia.',
    stats: { value: '+200%', label: 'más llamadas y visitas desde Google Maps' },
    image: '/images/mockup-macbook-dashboard.jpg',
    features: [
      'Configuración profesional de tu perfil en Google Maps con palabras clave locales',
      'Estrategia para conseguir reseñas positivas de 5 estrellas',
      'Enlace directo a tu catálogo web y botón de llamado inmediato',
      'Estadísticas claras de cuánta gente te buscó y llamó en el mes'
    ],
    whatsappMessage: 'Hola Nico! Quiero mejorar la presencia de mi negocio en Google Maps y búsquedas locales.'
  }
];

export default function ServicesDetail() {
  const [activeTab, setActiveTab] = useState('webs-express');
  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="servicios" className="relative py-20 lg:py-28 bg-[#F6F8FF] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-dr-anim="scale-y">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5956E9]/20 bg-[#EBEAFB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5956E9] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#5956E9]" />
            Servicios Integrales
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#27272E] leading-[1.08]">
            Todo lo que tu negocio necesita para <span className="text-[#5956E9]">vender en digital</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#525260] font-normal leading-relaxed">
            Sin jerga técnica. Diseñamos, configuramos y dejamos todo listo para que empieces a facturar online.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#5956E9] text-white shadow-lg shadow-[#5956E9]/30 scale-105'
                    : 'bg-white text-[#525260] hover:text-[#27272E] hover:bg-slate-50 border border-slate-200/80 shadow-sm'
                }`}
              >
                {service.id === 'webs-express' ? (
                  <Globe className="w-4 h-4" />
                ) : service.id === 'whatsapp-ia' ? (
                  <Bot className="w-4 h-4" />
                ) : service.id === 'sistemas-gestion' ? (
                  <LayoutDashboard className="w-4 h-4" />
                ) : (
                  <MapPin className="w-4 h-4" />
                )}
                <span>{service.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div
          key={currentService.id}
          className="rounded-3xl bg-white p-7 sm:p-10 lg:p-14 border border-slate-100 shadow-drnube-float transition-all duration-500"
          data-dr-anim="translate-y"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Info & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${currentService.badgeColor}`}
                >
                  {currentService.badge}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#525260]">
                  Garantía & Soporte Directo
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#27272E] leading-snug">
                  {currentService.title}
                </h3>
                <p className="mt-2 text-lg font-medium text-[#5956E9]">
                  {currentService.tagline}
                </p>
                <p className="mt-3 text-base sm:text-lg text-[#525260] leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Metric Callout */}
              <div className="flex items-center gap-4 rounded-2xl bg-[#F6F8FF] p-4 border border-[#5956E9]/10">
                <div className="font-heading text-3xl font-extrabold text-[#5956E9]">
                  {currentService.stats.value}
                </div>
                <div className="text-sm font-medium text-[#525260] leading-tight">
                  {currentService.stats.label}
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#999FAE]">
                  Qué incluye este servicio:
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {currentService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base font-medium text-[#27272E]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`https://wa.me/5491100000000?text=${encodeURIComponent(currentService.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#5956E9] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-[#5956E9]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4441C8]"
                >
                  <span>Consultar por este servicio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/precios"
                  className="rounded-full bg-slate-100 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#27272E] transition-all hover:bg-slate-200"
                >
                  Ver Precios Transparentes
                </a>
              </div>
            </div>

            {/* Right: Visual Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-white p-2 border border-slate-200 shadow-xl group">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 backdrop-blur-md p-3.5 border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                    <div>
                      <p className="text-xs font-bold text-[#27272E]">Entrega Rápida Garantizada</p>
                      <p className="text-[11px] text-[#999FAE]">Sin costos ocultos ni complicaciones</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#EBEAFB] px-2.5 py-1 text-[11px] font-bold text-[#5956E9]">
                    100% Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-[#FFDC60]/40 flex items-center justify-center text-[#855B00] mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#27272E]">Velocidad Real</h4>
            <p className="mt-1 text-sm text-[#525260]">
              Tu web lista y online en 48 a 72 hs hábiles. Sin demoras innecesarias.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-[#FAB8C4]/40 flex items-center justify-center text-[#9E1B32] mb-4">
              <Bot className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#27272E]">WhatsApp Directo</h4>
            <p className="mt-1 text-sm text-[#525260]">
              Tus clientes no tienen que registrarse; compran directo con un clic.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-[#EBEAFB] flex items-center justify-center text-[#5956E9] mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#27272E]">Fácil de Usar</h4>
            <p className="mt-1 text-sm text-[#525260]">
              Te entregamos todo listo y te mostramos cómo actualizar precios en 15 minutos.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#27272E]">30 Días de Garantía</h4>
            <p className="mt-1 text-sm text-[#525260]">
              Acompañamiento post-lanzamiento para que todo funcione impecable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
