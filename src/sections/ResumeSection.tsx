import React from 'react';
import { experiences, educations } from '../data/experiences';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <span>EXPERIENCE &amp; EDUCATION</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        <span className="text-metallic">Work Experience &amp; </span><br className="hidden sm:inline" />
        <span className="color-gradient font-semibold">Education</span>
      </h2>

      {/* 01. Work Experience Subsection */}
      <div className="mt-12">
        <div className="text-xs font-mono tracking-widest text-[#fff95b] uppercase mb-4">
          // WORK EXPERIENCE
        </div>

        <div className="divide-y divide-white/15 border-t border-b border-white/15">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="py-7 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 group hover:bg-white/[0.02] px-3 -mx-3 rounded-lg transition-colors duration-200"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="text-xl md:text-2xl font-medium text-[#e2e2e2] group-hover:text-[#fff95b] transition-colors">
                    {exp.role}
                  </h4>
                  {exp.type && (
                    <span className="text-[11px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/50 group-hover:border-[#fff95b]/30 group-hover:text-[#fff95b]/90 transition-colors">
                      {exp.type}
                    </span>
                  )}
                </div>
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
      </div>

      {/* 02. Education Subsection */}
      <div className="mt-14 pt-10 border-t border-white/10">
        <div className="text-xs font-mono tracking-widest text-[#fff95b] uppercase mb-4">
          // ACADEMIC BACKGROUND
        </div>

        <div className="divide-y divide-white/15 border-t border-b border-white/15">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="py-7 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 group hover:bg-white/[0.02] px-3 -mx-3 rounded-lg transition-colors duration-200"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="text-xl md:text-2xl font-medium text-[#e2e2e2] group-hover:text-[#fff95b] transition-colors">
                    {edu.degree}
                  </h4>
                  <span className="text-[11px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/50 group-hover:border-[#fff95b]/30 group-hover:text-[#fff95b]/90 transition-colors">
                    {edu.field}
                  </span>
                </div>
                <p className="text-base text-white/60 mt-1 font-normal">
                  {edu.institution}
                </p>
              </div>
              <div className="text-sm md:text-base font-mono text-white/40 group-hover:text-white/70 transition-colors">
                {edu.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
