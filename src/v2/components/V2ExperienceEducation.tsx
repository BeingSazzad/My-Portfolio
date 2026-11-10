import React from 'react';
import { experiences, educations } from '../../data/experiences';

export const V2ExperienceEducation: React.FC = () => {
  return (
    <section id="v2-resume" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium tracking-widest text-[#ff0055] uppercase block mb-2">
            // EXPERIENCE &amp; EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Professional Track Record &amp; <span className="v2-gradient-text">Academic Roots</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#ff0055]/15 border border-[#ff0055]/30 flex items-center justify-center text-[#ff0055]">
                <i className="ri-briefcase-line text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Work Experience</h3>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="v2-card p-6 relative group hover:border-[#ff0055]/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h4 className="text-lg font-bold text-white group-hover:text-[#ff0055] transition-colors">
                          {exp.role}
                        </h4>
                        {exp.type && (
                          <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/60">
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-white/60 mt-1">{exp.company}</p>
                    </div>

                    <span className="text-xs font-mono text-white/40 whitespace-nowrap bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Background */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#ff0055]/15 border border-[#ff0055]/30 flex items-center justify-center text-[#ff0055]">
                <i className="ri-graduation-cap-line text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Academic Background</h3>
            </div>

            <div className="space-y-4">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="v2-card p-6 relative group hover:border-[#ff0055]/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h4 className="text-lg font-bold text-white group-hover:text-[#ff0055] transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[#ff0055]">
                          {edu.field}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-white/60 mt-1">{edu.institution}</p>
                    </div>

                    <span className="text-xs font-mono text-white/40 whitespace-nowrap bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}

              {/* Design Philosophy Spotlight */}
              <div className="v2-card p-6 bg-gradient-to-br from-[#1b1222] to-[#110e19] border border-[#ff0055]/20 space-y-2 mt-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055] uppercase">
                  <span>✦</span>
                  <span>The Dual Advantage</span>
                </div>
                <h5 className="text-base font-bold text-white">
                  Computer Science (CSE) + Marketing (MBA)
                </h5>
                <p className="text-xs text-white/60 leading-relaxed">
                  My CSE degree gives me deep technical empathy for developers and interaction physics, while my MBA in Marketing ensures every user flow is optimized for engagement, conversion, and business growth.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
