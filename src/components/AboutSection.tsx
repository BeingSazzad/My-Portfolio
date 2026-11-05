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

      {/* Narrative Bio */}
      <div className="mt-8 space-y-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-normal">
        <p>
          Hi, I’m <span className="text-white font-medium">Sazzad Chowdhury</span>—a Senior UI/UX Designer passionate about crafting functional, beautiful, and user-centred digital products that stand the test of time.
        </p>
        <p>
          With over 5 years across digital product, marketing psychology, and interface design, I understand user behavior, business goals, and what it truly takes to ship. I blend deep research with modern design tools, AI-accelerated workflows, and vibe coding—bridging the gap between conceptual mockups and production-ready code.
        </p>
      </div>

      {/* Three Guiding Philosophy Pillars */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-compass-3-line text-lg" />
          </div>
          <h4 className="text-white font-medium text-base mb-2">User-Centred UX</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Data-informed research, wireframing, and usability testing that drive conversion.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-layout-masonry-line text-lg" />
          </div>
          <h4 className="text-white font-medium text-base mb-2">Design Systems</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Scalable token systems in Figma and code with strict accessibility and spacing hierarchy.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] mb-4">
            <i className="ri-flashlight-line text-lg" />
          </div>
          <h4 className="text-white font-medium text-base mb-2">Vibe Coding</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Interactive prototypes built with frontend tools to eliminate developer handoff friction.
          </p>
        </div>
      </div>
    </section>
  );
};
