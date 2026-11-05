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
        <span className="text-metallic">Crafting Products </span><br className="hidden sm:inline" />
        <span className="color-gradient font-semibold">From Concept to Ship</span>
      </h2>

      {/* Pure Visiblo Narrative — Human-Centric, Honest Craft */}
      <div className="mt-8 space-y-6 text-base sm:text-lg text-white/65 leading-relaxed font-normal max-w-2xl">
        <p>
          I design digital products from initial concepts to final polish. Most of my days are spent inside Figma—mapping user journeys, sketching layout solutions, and building token-driven design systems that keep engineering teams aligned.
        </p>
        <p>
          Because great design doesn't stop at static canvases, I regularly build functional prototypes in React and Tailwind. Prototyping in code allows me to test actual interaction physics, catch edge cases before sprint planning, and hand off specs that developers can build with zero ambiguity.
        </p>
      </div>
    </section>
  );
};