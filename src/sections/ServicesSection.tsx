import React, { useState } from 'react';
import { services } from '../data/services';

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
          <span>CAPABILITIES &amp; SERVICES</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        <span className="text-metallic">Solutions That </span><br className="hidden sm:inline" />
        <span className="color-gradient font-semibold">Empower Your Product</span>
      </h2>

      {/* Accordion Container with Clean Hierarchy */}
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
                <div className="flex items-center gap-3">
                  <span
                    className={`text-2xl md:text-[28px] font-medium tracking-tight transition-all duration-300 ${
                      isOpen
                        ? 'text-[#e2e2e2] pl-2'
                        : 'text-white/70 group-hover:text-[#e2e2e2]'
                    }`}
                  >
                    {service.title}
                  </span>
                </div>

                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${
                    isOpen
                      ? 'border-[#fff95b] text-[#fff95b] rotate-90 bg-white/5'
                      : 'border-white/20 text-white/50 group-hover:border-white/50 group-hover:text-[#e2e2e2]'
                  }`}
                >
                  <i className="ri-arrow-right-line text-lg" />
                </div>
              </button>

              {isOpen && (
                <div className="pb-8 pt-1 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl animate-fadeIn pl-2">
                  <p>{service.description}</p>

                  {/* Capability Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-white/60 hover:text-[#e2e2e2] hover:border-[#fff95b]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
