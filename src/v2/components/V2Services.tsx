import React, { useState } from 'react';
import { services } from '../../data/services';

export const V2Services: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="v2-services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium tracking-widest text-[#ff0055] uppercase block mb-2">
            // SERVICES &amp; SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Comprehensive Solutions That <br className="hidden sm:inline" />
            <span className="v2-gradient-text">Empower Your Digital Product</span>
          </h2>
        </div>

        {/* 4 Interactive Service Cards */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;
            const num = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`v2-card p-6 sm:p-8 transition-all duration-300 relative group ${
                  isHovered ? 'border-[#ff0055]/50 bg-[#161320]' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-6 min-w-[320px]">
                    <span className="font-mono text-2xl font-bold text-white/30 group-hover:text-[#ff0055] transition-colors">
                      {num}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle: Description */}
                  <p className="text-sm sm:text-base text-white/65 max-w-xl leading-relaxed">
                    {service.description}
                  </p>

                  {/* Right: Circular Arrow Action */}
                  <div className="flex items-center justify-end">
                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'border-[#ff0055] bg-[#ff0055] text-white shadow-[0_0_15px_rgba(255,0,85,0.5)] rotate-45'
                          : 'border-white/15 text-white/60 bg-white/[0.02]'
                      }`}
                    >
                      <i className="ri-arrow-right-up-line text-lg" />
                    </div>
                  </div>

                </div>

                {/* Tags Row */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-white/60 group-hover:border-[#ff0055]/30 group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
