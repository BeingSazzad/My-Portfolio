import React, { useState } from 'react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'UI/UX & Product Design',
    description:
      'End-to-end user-centred interface design for web and mobile. From user research, journey mapping, and wireframing to high-fidelity, interactive prototypes built for developer handoff.',
    tags: ['Figma', 'Mobile & Web Apps', 'User Flows', 'Wireframing', 'Interactive Prototypes'],
  },
  {
    id: 2,
    title: 'AI-Driven Design & Vibe Coding',
    description:
      'Supercharging research, ideation, and rapid prototyping using modern AI tools and vibe coding. I code interactive React/Tailwind prototypes that turn static design concepts into realistic proof-of-concepts.',
    tags: ['AI for UX', 'Vibe Coding', 'Rapid Prototyping', 'Frontend Bridge', 'React / Tailwind'],
  },
  {
    id: 3,
    title: 'Design Systems & Token Architecture',
    description:
      'Creating scalable, token-driven design systems in Figma and code. Enforcing consistent typography, spacing, accessible contrast (WCAG 2.2 AA), and modular components that developers love.',
    tags: ['Design Tokens', 'Component Libraries', 'Figma Variants', 'WCAG 2.2 AA', 'Handoff Specs'],
  },
  {
    id: 4,
    title: 'Web & WordPress Solutions',
    description:
      'Custom website and WordPress development optimized for speed, responsive fluidity, and conversion. Transforming intricate Figma mockups into clean, functional, maintainable web experiences.',
    tags: ['Custom WordPress', 'Responsive Web', 'Landing Pages', 'CMS Architecture'],
  },
  {
    id: 5,
    title: 'Conversion UX & Usability Testing',
    description:
      'Auditing and refining digital products to eliminate user drop-off. Leveraging 5+ years of digital marketing and behavioral data to optimize onboarding, checkout, and engagement funnels.',
    tags: ['Usability Testing', 'Conversion Optimization', 'Funnel Redesign', 'Information Architecture'],
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
          <span>SERVICES &amp; CAPABILITIES</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        Solutions That <br />
        <span className="color-gradient font-semibold">Empower Your Product</span>
      </h2>

      {/* Accordion Container */}
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
                <span
                  className={`text-2xl md:text-[28px] font-medium tracking-tight transition-all duration-300 ${
                    isOpen
                      ? 'text-white pl-2'
                      : 'text-white/70 group-hover:text-white'
                  }`}
                >
                  {service.title}
                </span>

                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
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
