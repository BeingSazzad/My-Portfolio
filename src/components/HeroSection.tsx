import React from 'react';

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
          <span>HELLO · UI/UX &amp; PRODUCT DESIGNER</span>
        </div>
      </div>

      {/* Hero Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.12] tracking-tight text-white max-w-2xl">
        Designing Digital Products<br />
        That Are Functional &amp;<br />
        <span className="color-gradient font-semibold">Built to Ship</span>
      </h1>

      {/* Subtitle Description — UI/UX Core + Vibe Coding Edge + Additional Support */}
      <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl font-normal">
        UI/UX Designer based in Dhaka. My primary focus is crafting user-centred interfaces in Figma, bridged with live vibe coding prototypes, and backed by full-lifecycle support in WordPress, SEO, and growth marketing.
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
      <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">5+</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">Years Experience</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">35+</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">Projects Delivered</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-semibold text-[#fff95b] tracking-tight">100%</div>
          <div className="text-xs sm:text-sm text-white/50 mt-1">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};
