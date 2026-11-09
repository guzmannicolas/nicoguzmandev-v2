import React, { useState } from 'react';
import { ExternalLink, Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface TemplateItem {
  name: string;
  category: string;
  tag: string;
  slug: string;
  url: string;
  description: string;
  features: string[];
}

const templates: TemplateItem[] = [
  {
    name: 'Barbería & Peluquería',
    category: 'Estética y Cuidado Personal',
    tag: 'Turnos y Lista de Precios',
    slug: 'barberia',
    url: 'https://barberia.templates.nicoguzmandev.com',
    description: 'Diseñada para salones y barberías que quieren mostrar sus cortes, precios en pesos y permitir reservas directas.',
    features: ['Catálogo de servicios con precios', 'Botón de reserva por WhatsApp', 'Ubicación en Google Maps', 'Galería de fotos de trabajos']
  },
  {
    name: 'Restaurante & Bistró',
    category: 'Gastronomía',
    tag: 'Carta Digital y Pedidos',
    slug: 'restaurante',
    url: 'https://restaurante.templates.nicoguzmandev.com',
    description: 'Menú interactivo con fotos apetitosas de platos, precios actualizados y pedidos directos por WhatsApp.',
    features: ['Carta digital categorizada', 'Botón directo para pedir delivery', 'Horarios de atención', 'Reserva de mesas']
  },
  {
    name: 'Taller Mecánico & Estética',
    category: 'Servicios Automotrices',
    tag: 'Turnos y Cotización',
    slug: 'taller',
    url: 'https://taller.templates.nicoguzmandev.com',
    description: 'Web profesional para talleres mecánicos, gomerías o detailing automotor con cotizador de servicios.',
    features: ['Lista de servicios mecánicos', 'Recepción de consultas técnicas', 'Mapa y cómo llegar', 'Horarios y teléfonos de guardia']
  },
  {
    name: 'Inmobiliaria & Propiedades',
    category: 'Bienes Raíces',
    tag: 'Catálogo de Propiedades',
    slug: 'inmobiliaria',
    url: 'https://inmobiliaria.templates.nicoguzmandev.com',
    description: 'Catálogo de inmuebles en alquiler y venta con filtros por zona, fotos en alta resolución y contacto directo.',
    features: ['Ficha técnica de propiedades', 'Filtro por venta y alquiler', 'Galería de ambientes', 'Contacto directo con el asesor']
  },
  {
    name: 'Consultorio & Clínica',
    category: 'Salud y Bienestar',
    tag: 'Turnos Médicos',
    slug: 'consultorio',
    url: 'https://consultorio.templates.nicoguzmandev.com',
    description: 'Presencia médica seria y confiable para profesionales de la salud, consultorios odontológicos y centros estéticos.',
    features: ['Especialidades médicas', 'Información de obras sociales', 'Solicitud de turnos online', 'Equipo de profesionales']
  },
  {
    name: 'Gimnasio & Fitness',
    category: 'Deportes y Entrenamiento',
    tag: 'Membresías y Clases',
    slug: 'gimnasio',
    url: 'https://gimnasio.templates.nicoguzmandev.com',
    description: 'Web dinámica para boxes de Crossfit, gimnasios y academias con planes mensuales y grilla de horarios.',
    features: ['Grilla de clases y horarios', 'Planes de cuotas y pases libres', 'Formulario para clase de prueba', 'Galería de instalaciones']
  },
  {
    name: 'Estudio Jurídico / Contable',
    category: 'Servicios Profesionales',
    tag: 'Consultoría y Asesoramiento',
    slug: 'profesional',
    url: 'https://profesional.templates.nicoguzmandev.com',
    description: 'Sitio sobrio y moderno para abogados, contadores y consultores de empresas.',
    features: ['Áreas de práctica y especialidades', 'Solicitud de asesoramiento confidencial', 'Perfil de los socios', 'Artículos y novedades']
  },
  {
    name: 'Estudio Fotográfico',
    category: 'Arte y Creatividad',
    tag: 'Portfolio y Presupuestos',
    slug: 'fotografia',
    url: 'https://fotografia.templates.nicoguzmandev.com',
    description: 'Portfolio visual para fotógrafos de eventos, bodas, productos o moda con cotizador online.',
    features: ['Galería fotográfica de alta resolución', 'Paquetes de cobertura y precios', 'Testimonios de clientes', 'Reserva de fecha']
  }
];

export default function TemplatesShowroom() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Gastronomía', 'Estética y Cuidado Personal', 'Servicios Automotrices', 'Bienes Raíces', 'Salud y Bienestar', 'Deportes y Entrenamiento', 'Servicios Profesionales', 'Arte y Creatividad'];

  const filteredTemplates = selectedCategory === 'Todos'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#5956E9] text-white shadow-md shadow-[#5956E9]/20'
                  : 'bg-[#F6F8FF] text-[#525260] hover:bg-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((tpl) => (
            <div
              key={tpl.slug}
              className="rounded-3xl bg-[#F6F8FF] p-6 border border-slate-200/80 shadow-sm hover:shadow-drnube-float transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-[#EBEAFB] px-3 py-1 text-xs font-bold text-[#5956E9]">
                    {tpl.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-[#999FAE]">
                    Lista en 48hs
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#27272E]">
                  {tpl.name}
                </h3>
                <p className="mt-2 text-sm text-[#525260] leading-relaxed">
                  {tpl.description}
                </p>

                <div className="mt-5 space-y-2 border-t border-slate-200/60 pt-4">
                  {tpl.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#27272E]">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/60 flex items-center gap-3">
                <a
                  href={tpl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#5956E9] py-2.5 px-4 text-xs font-bold text-white shadow-sm hover:bg-[#4441C8] transition-colors"
                >
                  <span>Probar Demo en Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/5491100000000?text=${encodeURIComponent(`Hola Nico! Me interesa la web template de ${tpl.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 py-2.5 px-4 text-xs font-bold text-[#27272E] hover:border-[#5956E9] hover:text-[#5956E9] transition-colors"
                >
                  <span>Pedir Esta</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
