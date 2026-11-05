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
      {/* Eyebrow Badge — Pure Visiblo Minimalism */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <span>HELLO</span>
        </div>
      </div>

      {/* Hero Headline — Visiblo Signature Metallic & Gold Gradient */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[62px] font-medium leading-[1.14] tracking-tight">
        <span className="text-metallic">Designing digital products</span><br />
        <span className="text-metallic">that feel simple &amp; </span><span className="color-gradient font-semibold">ready to ship</span>
      </h1>

      {/* Subtitle Description — Human-Centric, Senior, No Geographic Filler */}
      <p className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl font-normal">
        Product Designer with 5+ years of experience crafting mobile and web apps. I build clean systems in Figma, validate interactions with code prototypes, and care about the details that make software a joy to use.
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

      {/* Quantitative Credibility Bar — 80+ Projects Completed */}
      <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-[#e2e2e2] tracking-tight">5+</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">Years Experience</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-[#e2e2e2] tracking-tight">80+</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">Projects Completed</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-[#fff95b] tracking-tight">100%</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">Client Satisfaction</div>
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