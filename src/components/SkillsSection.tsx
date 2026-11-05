import React from 'react';

interface ToolItem {
  name: string;
  icon?: string;
  svg?: React.ReactNode;
}

const tools: ToolItem[] = [
  {
    name: 'Figma',
    icon: '/assets/figma.png',
  },
  {
    name: 'Photoshop',
    svg: (
      <div className="w-14 h-14 rounded-2xl bg-[#001e36] border border-[#31a8ff]/40 flex items-center justify-center text-[#31a8ff] font-bold text-xl shadow-[0_0_15px_rgba(49,168,255,0.2)]">
        Ps
      </div>
    ),
  },
  {
    name: 'Illustrator',
    svg: (
      <div className="w-14 h-14 rounded-2xl bg-[#330000] border border-[#ff9a00]/40 flex items-center justify-center text-[#ff9a00] font-bold text-xl shadow-[0_0_15px_rgba(255,154,0,0.2)]">
        Ai
      </div>
    ),
  },
  {
    name: 'WordPress',
    icon: '/assets/wordpress.png',
  },
  {
    name: 'React',
    icon: '/assets/react.png',
  },
  {
    name: 'Cursor',
    svg: (
      <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-white/50 transition-colors">
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path
            d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M12 22V12" stroke="#ffffff" strokeWidth="1.8" />
          <path d="M21 7L12 12L3 7" stroke="#ffffff" strokeWidth="1.8" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Lovable',
    svg: (
      <div className="w-14 h-14 rounded-2xl bg-[#1e0f18] border border-[#ff4582]/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,69,130,0.25)]">
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <defs>
            <linearGradient id="lovableGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4582" />
              <stop offset="100%" stopColor="#ff7a00" />
            </linearGradient>
          </defs>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#lovableGrad)"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'Antigravity',
    svg: (
      <div className="w-14 h-14 rounded-2xl bg-[#1a1708] border border-[#fff95b]/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,249,91,0.2)]">
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <defs>
            <linearGradient id="agyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff95b" />
              <stop offset="100%" stopColor="#ff930f" />
            </linearGradient>
          </defs>
          <path
            d="M12 2.5L2.5 19H21.5L12 2.5Z"
            stroke="url(#agyGrad)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M12 7.5L6.5 17H17.5L12 7.5Z" fill="url(#agyGrad)" fillOpacity="0.3" />
          <circle cx="12" cy="13.5" r="2" fill="url(#agyGrad)" />
        </svg>
      </div>
    ),
  },
];

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
