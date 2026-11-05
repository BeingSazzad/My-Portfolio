import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-user-smile-line text-[#fff95b] mr-2 text-xs" />
          <span>ABOUT</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        My Journey &amp; <span className="color-gradient font-semibold">Vision</span>
      </h2>

      {/* Narrative Bio — Core UI/UX + Vibe Coding + Additional Support Hierarchy */}
      <div className="mt-8 space-y-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-normal">
        <p>
          Hi, I’m <span className="text-white font-medium">Sazzad Chowdhury</span>. My primary focus and craft is <span className="text-white font-semibold">UI/UX &amp; Product Design</span>—designing intuitive, scalable digital interfaces in Figma with obsessive care for user behavior, clear visual hierarchy, and tokenized design systems.
        </p>
        <p>
          Where I provide a distinctive edge is in <span className="text-[#fff95b] font-medium">Vibe Coding &amp; Frontend Prototyping</span>. Instead of just delivering static screens, I build live, interactive prototypes with React and modern AI coding tools—ensuring designs feel natural and developer handoffs are friction-free.
        </p>
        <p>
          As <span className="text-white/90 font-medium">additional full-stack support</span>, I leverage over 5 years of background in building complete WordPress websites, graphic design, SEO, and digital marketing. This means every product I design is built with real business conversion, organic discoverability, and technical feasibility in mind.
        </p>
      </div>

      {/* Three Structured Guiding Pillars */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-compass-3-line text-lg" />
          </div>
          <span className="text-[10px] font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
            CORE FOCUS
          </span>
          <h4 className="text-white font-medium text-base mb-2">UI/UX &amp; Systems</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            User research, wireframing, high-fidelity Figma components, and tokenized design systems.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-flashlight-line text-lg" />
          </div>
          <span className="text-[10px] font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
            THE EDGE
          </span>
          <h4 className="text-white font-medium text-base mb-2">Vibe Coding</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Live interactive code prototypes (React / Tailwind) to test micro-interactions before engineering.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-stack-line text-lg" />
          </div>
          <span className="text-[10px] font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
            FULL SUPPORT
          </span>
          <h4 className="text-white font-medium text-base mb-2">Web, SEO &amp; Growth</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            End-to-end WordPress websites, technical SEO architecture, and conversion-backed marketing strategy.
          </p>
        </div>
      </div>
    </section>
  );
};
