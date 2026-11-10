import React from 'react';

export const V2Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07060a] py-12 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff0055] to-[#9333ea] flex items-center justify-center font-bold text-sm text-white shadow-[0_0_10px_rgba(255,0,85,0.4)]">
            S
          </div>
          <span className="text-base font-bold text-white tracking-tight">
            Sazzad Chowdhury<span className="text-[#ff0055]">.</span>
          </span>
          <span className="text-xs text-white/40 font-mono hidden sm:inline">
            • Senior Product Designer
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/40 font-mono text-center">
          © {new Date().getFullYear()} Sazzad Chowdhury. Crafted with Figma &amp; Vibe Coding.
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#ff0055]/50 hover:bg-[#ff0055]/10 flex items-center justify-center text-white/60 hover:text-[#ff0055] transition-all cursor-pointer"
          aria-label="Back to top"
        >
          <i className="ri-arrow-up-line text-lg" />
        </button>

      </div>
    </footer>
  );
};
