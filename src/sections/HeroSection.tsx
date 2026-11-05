import React from 'react';
import { coreCapabilities } from '../data/skills';

export const HeroSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-6 md:pt-10 pb-16 md:pb-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-sparkling-fill text-[#fff95b] mr-2 text-xs" />
          <span>SENIOR UI/UX &amp; PRODUCT DESIGNER</span>
        </div>
      </div>

      {/* Hero Headline — Magnetic, Hook-Driven */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium leading-[1.14] tracking-tight text-white max-w-2xl">
        Designing Scalable Products <br className="hidden sm:inline" />
        Users Love &amp; <span className="color-gradient font-semibold">Engineers Love to Build</span>
      </h1>

      {/* Subtitle Description — High-Impact Product Narrative */}
      <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl font-normal">
        Senior UI/UX &amp; Product Designer specializing in scalable design systems, conversion UX, and live interactive prototypes. I eliminate engineering handoff friction by proving micro-interactions in code—turning complex problems into high-performing digital products that ship on time.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          onClick={scrollToContact}
          className="visiblo-btn-color px-8 py-3.5 text-sm uppercase tracking-wide cursor-pointer font-semibold"
        >
          <span>Let's Work Together</span>
        </a>

        <a
          href="#portfolio"
          onClick={scrollToPortfolio}
          className="visiblo-btn-arrow group cursor-pointer"
        >
          <span>Explore Works</span>
          <i className="ri-arrow-right-up-line transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-sm" />
        </a>
      </div>

      {/* Quantitative Credibility Bar */}
      <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">5+</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">Years Experience</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">35+</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">Products Shipped</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-[#fff95b] tracking-tight">100%</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">On-Time Delivery</div>
        </div>
      </div>

      {/* Dynamic Skills Marquee Ticker */}
      <div className="mt-12 overflow-hidden py-3.5 px-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
        <div className="ticker-track flex items-center gap-6 whitespace-nowrap">
          {coreCapabilities.concat(coreCapabilities).map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-wide uppercase text-white/70 hover:text-[#fff95b] transition-colors"
            >
              <span className="text-[#fff95b] text-xs">✦</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
