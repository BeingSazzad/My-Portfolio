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

      {/* Heading with Metallic & Gold Gradients */}
      <h2 className="section-title">
        <span className="text-metallic">My Journey &amp; </span>
        <span className="color-gradient font-semibold">Vision</span>
      </h2>

      {/* Pure Visiblo Narrative — Clutter-Free, No Artificial Boxes */}
      <div className="mt-8 space-y-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
        <p>
          Hi, I’m <span className="text-white font-medium">Sazzad Chowdhury</span>—a Senior UI/UX &amp; Product Designer passionate about scalable design systems, intuitive digital products, and interactive prototypes. With a deep focus on user behaviour and interface clarity, I strive to turn complex workflows into elegant, high-performing digital experiences.
        </p>
        <p>
          Over the past 5+ years, I’ve led product design across diverse mobile apps and web platforms, blending visual craft with live interactive code prototyping in React. I believe in eliminating engineering friction and building digital products that users love and businesses thrive on.
        </p>
      </div>
    </section>
  );
};
