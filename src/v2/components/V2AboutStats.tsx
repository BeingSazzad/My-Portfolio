import React from 'react';
import { tools } from '../../data/skills';

export const V2AboutStats: React.FC = () => {
  const skillsList = [
    { name: 'UI/UX & Product Design', percent: 95, icon: 'ri-palette-line' },
    { name: 'Figma Design Systems & Tokens', percent: 92, icon: 'ri-layout-masonry-line' },
    { name: 'Vibe Coding & Code Prototypes', percent: 88, icon: 'ri-code-s-slash-line' },
    { name: 'Web & Responsive Development', percent: 85, icon: 'ri-computer-line' },
  ];

  return (
    <section id="v2-about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Narrative Section Statement */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-medium tracking-widest text-[#ff0055] uppercase block mb-3">
            // ABOUT MY PRACTICE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-white/90">
            I bridge the gap between <span className="v2-gradient-text">human empathy</span> and <span className="text-white">scalable systems</span>. Every interface I craft is engineered to feel effortless for users and seamless for developers to build.
          </h2>
        </div>

        {/* Stats & Capabilities Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Big Spotlight Card with Glowing Orb */}
          <div className="lg:col-span-5 v2-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Neon Orb Inside Card */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-tr from-[#ff0055]/30 to-[#9333ea]/20 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            <div className="space-y-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-[#ff0055] inline-block">
                EXPERIENCE AT A GLANCE
              </span>
              <div className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight">
                5<span className="text-[#ff0055]">+</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white/90">
                Years of Dedicated Digital Craft
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Operating across fast-paced agency environments and independent product builds. Transforming ambiguous requirements into crystal-clear product experiences.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">80+</div>
                <div className="text-xs text-white/50 font-mono mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#ff0055]">100%</div>
                <div className="text-xs text-white/50 font-mono mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column: Skill Progress Bars & Capabilities */}
          <div className="lg:col-span-7 v2-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-medium tracking-widest text-[#ff0055] uppercase block mb-2">
                // CORE CAPABILITIES
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Specialized Competencies
              </h3>

              <div className="space-y-6">
                {skillsList.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-white/90 flex items-center gap-2">
                        <i className={`${skill.icon} text-[#ff0055]`} />
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-[#ff0055] font-semibold">
                        {skill.percent}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden p-[1px]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#ff0055] to-[#ec4899] v2-progress-fill shadow-[0_0_12px_rgba(255,0,85,0.5)]"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Education Summary Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/50 font-mono">
              <div>
                <span className="text-white font-medium">MBA in Marketing</span> • Jagannath Univ.
              </div>
              <div>
                <span className="text-white font-medium">B.Sc. in CSE</span> • Daffodil Intl. Univ.
              </div>
            </div>
          </div>

        </div>

        {/* Tools Stack Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span className="text-xs font-mono font-medium tracking-widest text-[#ff0055] uppercase block mb-1">
                // MY TECH &amp; DESIGN STACK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Tools I Use Daily
              </h3>
            </div>
            <span className="text-xs font-mono text-white/40">Figma • AI Vibe Coding • Frontend</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((t, idx) => (
              <div
                key={idx}
                className="v2-card p-4 flex flex-col items-center justify-center text-center gap-3 group hover:border-[#ff0055]/50 transition-all cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  {t.icon ? (
                    <img src={t.icon} alt={t.name} className="max-h-10 max-w-10 object-contain filter drop-shadow" />
                  ) : (
                    t.svg
                  )}
                </div>
                <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
