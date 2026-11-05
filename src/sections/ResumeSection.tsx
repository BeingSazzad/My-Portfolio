import React from 'react';
import { experiences } from '../data/experiences';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-briefcase-line text-[#fff95b] mr-2 text-xs" />
          <span>WORK EXPERIENCE</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        <span className="text-metallic">Companies &amp; </span><br className="hidden sm:inline" />
        <span className="color-gradient font-semibold">Work Experience</span>
      </h2>

      {/* Work Experience List */}
      <div className="mt-12 divide-y divide-white/15 border-t border-b border-white/15">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="py-7 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 group hover:bg-white/[0.02] px-3 -mx-3 rounded-lg transition-colors duration-200"
          >
            <div className="flex-1">
              <h4 className="text-xl md:text-2xl font-medium text-white group-hover:text-[#fff95b] transition-colors">
                {exp.role}
              </h4>
              <p className="text-base text-white/60 mt-1 font-normal">
                {exp.company}
              </p>
            </div>
            <div className="text-sm md:text-base font-mono text-white/40 group-hover:text-white/70 transition-colors">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
