import React from 'react';

export const ProfileCard: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <div className="profile-box rounded-[38px] p-6 sm:p-7 md:p-8 flex flex-col items-center text-center bg-[#0d0d0d]/90 backdrop-blur-2xl border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-white/25">
        {/* Profile Image */}
        <div className="relative w-full aspect-square max-w-[280px] rounded-[28px] overflow-hidden mb-6 border border-white/10 group">
          <img
            src="/assets/images/profile.jpg"
            alt="Sazzad Chowdhury"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Full Name — Soft Silver/Metallic #e2e2e2 from reference */}
        <h3 className="text-2xl sm:text-[28px] font-medium text-[#e2e2e2] tracking-tight leading-tight">
          Sazzad Chowdhury
        </h3>

        {/* Subtitle / Role: Product Designer (clean, single title, muted color) */}
        <div className="mt-2 flex flex-col items-center">
          <p className="text-sm sm:text-[15px] font-normal text-white/60 tracking-tight leading-snug">
            Product Designer
          </p>
        </div>

        {/* Social Links — Dribbble -> GitHub -> LinkedIn -> Phone */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <a
            href="https://dribbble.com/Sazzad_Ux"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble Portfolio"
            title="Dribbble"
            className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white/70 hover:text-[#fff95b] hover:border-[#fff95b] hover:bg-white/5 transition-all duration-200"
          >
            <i className="ri-dribbble-line text-base" />
          </a>
          <a
            href="https://github.com/BeingSazzad"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
            className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white/70 hover:text-[#fff95b] hover:border-[#fff95b] hover:bg-white/5 transition-all duration-200"
          >
            <i className="ri-github-fill text-base" />
          </a>
          <a
            href="https://linkedin.com/in/beingsazzad"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
            className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white/70 hover:text-[#fff95b] hover:border-[#fff95b] hover:bg-white/5 transition-all duration-200"
          >
            <i className="ri-linkedin-fill text-base" />
          </a>
          <a
            href="tel:+8801830685904"
            aria-label="Phone / WhatsApp Contact"
            title="Phone / WhatsApp"
            className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white/70 hover:text-[#fff95b] hover:border-[#fff95b] hover:bg-white/5 transition-all duration-200"
          >
            <i className="ri-phone-line text-sm" />
          </a>
        </div>

        {/* Divider & Contact Button */}
        <div className="w-full mt-7 pt-6 border-t border-white/10 flex flex-col items-center gap-4">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #ffe144 0%, #ff8e14 100%)',
              boxShadow:
                '0 4px 28px rgba(255, 142, 20, 0.55), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
            }}
          >
            <span>LET'S TALK</span>
          </a>

          {/* Email — Clean, no underline */}
          <a
            href="mailto:shazzad.cse@gmail.com"
            className="text-xs font-mono text-white/60 hover:text-[#fff95b] transition-colors"
          >
            shazzad.cse@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};