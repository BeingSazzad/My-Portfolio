import React, { useState } from 'react';

interface ServiceItem {
  id: number;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    badge: 'CORE FOCUS',
    badgeColor: 'text-[#fff95b] border-[#fff95b]/30 bg-[#fff95b]/5',
    title: 'UI/UX & Product Design',
    description:
      'My primary craft: human-centred interface design for web and mobile products. Delivering data-backed user research, user journey flows, wireframes, high-fidelity Figma components, and token-driven design systems ready for production.',
    tags: ['Figma', 'Mobile & Web Apps', 'Design Systems', 'User Research', 'Wireframing', 'WCAG 2.2 AA'],
  },
  {
    id: 2,
    badge: 'THE EDGE',
    badgeColor: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
    title: 'Vibe Coding & Frontend Prototyping',
    description:
      'Bridging the gap between conceptual design and engineering. Using modern AI tools (Cursor, Lovable, Antigravity) and React/Tailwind to code functional, live prototypes—testing real physics, animations, and states before engineering build.',
    tags: ['React', 'Tailwind CSS', 'Cursor', 'Lovable', 'Vibe Coding', 'Interactive Prototypes'],
  },
  {
    id: 3,
    badge: 'ADDITIONAL SUPPORT',
    badgeColor: 'text-white/60 border-white/20 bg-white/5',
    title: 'Full Website WordPress Development',
    description:
      'Complete end-to-end website solutions using WordPress. Transforming approved UI designs into clean, responsive, fast-loading, and easily maintainable websites with custom theme architecture and CMS flexibility.',
    tags: ['Custom WordPress', 'Responsive Web', 'Landing Pages', 'CMS Architecture', 'Speed Optimization'],
  },
  {
    id: 4,
    badge: 'ADDITIONAL SUPPORT',
    badgeColor: 'text-white/60 border-white/20 bg-white/5',
    title: 'Conversion UX, SEO & Growth Strategy',
    description:
      'Leveraging over 5 years of hands-on background in digital marketing and SEO. Designing landing pages and product funnels engineered for organic search visibility, high retention, and measurable business conversions.',
    tags: ['Technical SEO', 'Conversion Optimization', 'Funnel Redesign', 'Marketing Psychology', 'Graphic Assets'],
  },
];

export const ServicesSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="service" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-customer-service-2-line text-[#fff95b] mr-2 text-xs" />
          <span>CAPABILITIES &amp; SERVICES</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        Solutions That <br />
        <span className="color-gradient font-semibold">Empower Your Product</span>
      </h2>

      {/* Accordion Container with Clear Hierarchy */}
      <div className="mt-12 border-t border-white/15 divide-y divide-white/15">
        {services.map((service) => {
          const isOpen = openId === service.id;
          return (
            <div key={service.id} className="group">
              <button
                type="button"
                onClick={() => toggleAccordion(service.id)}
                aria-expanded={isOpen}
                className="w-full py-7 md:py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span
                    className={`text-2xl md:text-[28px] font-medium tracking-tight transition-all duration-300 ${
                      isOpen
                        ? 'text-white pl-2'
                        : 'text-white/70 group-hover:text-white'
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border self-start sm:self-auto ${service.badgeColor}`}
                  >
                    {service.badge}
                  </span>
                </div>

                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${
                    isOpen
                      ? 'border-[#fff95b] text-[#fff95b] rotate-90 bg-white/5'
                      : 'border-white/20 text-white/50 group-hover:border-white/50 group-hover:text-white'
                  }`}
                >
                  <i className="ri-arrow-right-line text-lg" />
                </div>
              </button>

              {/* Accordion Body */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 pb-8 pl-2' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                  {service.description}
                </p>

                {/* Sub-tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
