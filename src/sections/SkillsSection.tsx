import React from 'react';
import { tools } from '../data/skills';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-tools-fill text-[#fff95b] mr-2 text-xs" />
          <span>TOOLS &amp; STACK</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        Tools &amp; <span className="color-gradient font-semibold">Technologies</span>
      </h2>

      {/* Tools Grid — 4 Columns on desktop, 8 tools, ONLY Tool Name */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="skill-card group flex flex-col items-center justify-center p-6 sm:p-8 rounded-[22px] transition-all duration-300 relative overflow-hidden text-center hover:border-[#fff95b]/50 hover:-translate-y-1 cursor-default"
          >
            {/* Ambient hover light gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Icon Container */}
            <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              {tool.icon ? (
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="max-h-12 max-w-12 object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                />
              ) : (
                tool.svg
              )}
            </div>

            {/* ONLY Tool Name */}
            <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-[#fff95b] transition-colors">
              {tool.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};
