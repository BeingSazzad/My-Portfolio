import React from 'react';

export const V2Hero: React.FC = () => {
  return (
    <section id="v2-home" className="relative pt-32 sm:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ff0055]/20 via-[#9333ea]/15 to-transparent blur-[120px] pointer-events-none -z-10 v2-neon-glow" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-[#ff0055]/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#ff0055]/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,0,85,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#ff0055] animate-ping" />
              <span className="text-xs font-mono font-medium tracking-wide uppercase text-white/80">
                Senior Product Designer &amp; UI/UX Specialist
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              <span className="v2-metallic-text">Hello, I'm</span>{' '}
              <span className="v2-gradient-text">Sazzad Chowdhury</span>
              <br />
              <span className="text-white/90 text-3xl sm:text-4xl lg:text-[46px] font-bold block mt-2">
                Crafting High-Impact Digital Products &amp; Design Systems
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/65 max-w-xl leading-relaxed">
              With 5+ years of experience, I transform complex ideas into clean, user-centric web &amp; mobile interfaces. Combining engineering grounding with conversion strategy to build products users love.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#v2-contact"
                className="v2-btn-primary px-8 py-3.5 text-xs uppercase tracking-wider font-semibold group"
              >
                <span>Hire Me / Let's Talk</span>
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#v2-works"
                className="px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#ff0055]/40 text-white text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Works</span>
                <i className="ri-folder-user-line text-sm text-[#ff0055]" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 flex items-center gap-4 text-white/50">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40">Connect:</span>
              <a
                href="https://dribbble.com/BeingSazzad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:text-[#ff0055] hover:border-[#ff0055]/40 hover:bg-white/5 transition-all"
                aria-label="Dribbble"
              >
                <i className="ri-dribbble-line text-base" />
              </a>
              <a
                href="https://github.com/BeingSazzad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:text-[#ff0055] hover:border-[#ff0055]/40 hover:bg-white/5 transition-all"
                aria-label="GitHub"
              >
                <i className="ri-github-line text-base" />
              </a>
              <a
                href="https://linkedin.com/in/BeingSazzad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:text-[#ff0055] hover:border-[#ff0055]/40 hover:bg-white/5 transition-all"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-line text-base" />
              </a>
              <a
                href="mailto:shazzad.cse@gmail.com"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:text-[#ff0055] hover:border-[#ff0055]/40 hover:bg-white/5 transition-all"
                aria-label="Email"
              >
                <i className="ri-mail-line text-base" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual with Neon Glow & Floating Badges */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Backing Neon Orb */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff0055]/30 to-[#9333ea]/30 blur-2xl -z-10 scale-95" />
              
              {/* Profile Card Container with Glow Border */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden border border-white/15 bg-gradient-to-b from-[#181524] to-[#0c0a12] p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <img
                  src="/assets/images/profile.jpg"
                  alt="Sazzad Chowdhury"
                  className="w-full h-full object-cover rounded-[30px] filter brightness-95 contrast-105"
                />

                {/* Subtle dark gradient overlay at bottom of photo */}
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Info Pill */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#121019]/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-tight">Sazzad Chowdhury</h3>
                    <p className="text-xs text-[#ff0055] font-mono">Product Designer</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/70 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to Work</span>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-[#121019]/90 backdrop-blur-xl border border-[#ff0055]/40 text-white text-xs font-semibold shadow-xl flex items-center gap-2 animate-bounce">
                <span className="text-[#ff0055]">✦</span>
                <span>Figma &amp; Design Systems</span>
              </div>

              {/* Floating Left Stat Badge */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 p-3.5 rounded-2xl bg-[#121019]/95 backdrop-blur-xl border border-white/15 text-white shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff0055] to-[#e11d48] flex items-center justify-center text-white font-bold text-base shadow-[0_0_12px_rgba(255,0,85,0.4)]">
                  5+
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Years of Craft</div>
                  <div className="text-[10px] text-white/50 font-mono">80+ Projects Done</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
