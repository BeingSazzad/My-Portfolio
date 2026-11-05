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
        Design Craft &amp; <span className="color-gradient font-semibold">Product Philosophy</span>
      </h2>

      {/* 2-Column Split: Crisp Narrative (Left) + Quick Facts Card (Right) — Uses Full Width */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Clutter-Free, Punchy Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal">
            I turn complex product workflows into intuitive digital experiences and scalable Figma design systems.
          </p>
          <p className="text-base sm:text-lg text-white/65 leading-relaxed font-normal">
            By pairing deep visual craft with <span className="text-[#fff95b] font-medium">live interactive code prototyping</span> in React, I bridge design with engineering—delivering products that users love and developers ship without friction.
          </p>
        </div>

        {/* Right: Sleek Highlights Card — Fills the Right-Side Space Elegantly */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-col justify-between space-y-4">
          <span className="text-xs font-mono text-[#fff95b] uppercase tracking-wider">
            AT A GLANCE
          </span>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-1.5 border-b border-white/10">
              <span className="text-white/50">Specialization</span>
              <span className="text-white font-medium">UI/UX &amp; Design Systems</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-white/10">
              <span className="text-white/50">The Edge</span>
              <span className="text-[#fff95b] font-medium">React Code Prototypes</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-white/10">
              <span className="text-white/50">Experience</span>
              <span className="text-white font-medium">5+ Years Shipped</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-white/50">Location</span>
              <span className="text-white font-medium">Dhaka · Remote Global</span>
            </div>
          </div>
        </div>
      </div>

      {/* Three Guiding Pillars — Full Width 3-Col Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-compass-3-line text-lg" />
          </div>
          <span className="text-[11px] font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
            01 / SYSTEM ARCHITECTURE
          </span>
          <h4 className="text-white font-medium text-base mb-2">Design Systems &amp; UX</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Tokenized Figma components, atomic architecture, and accessibility standards (WCAG 2.2) engineered for scale.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-flashlight-line text-lg" />
          </div>
          <span className="text-[11px] font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
            02 / CODE VALIDATION
          </span>
          <h4 className="text-white font-medium text-base mb-2">Interactive Prototyping</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Functional React &amp; Tailwind prototypes to stress-test micro-interactions and eliminate handoff friction.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-stack-line text-lg" />
          </div>
          <span className="text-[11px] font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
            03 / BUSINESS ROI
          </span>
          <h4 className="text-white font-medium text-base mb-2">Conversion &amp; Growth</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Data-informed user onboarding, retention flows, and web architecture built to turn visitors into active users.
          </p>
        </div>
      </div>
    </section>
  );
};
