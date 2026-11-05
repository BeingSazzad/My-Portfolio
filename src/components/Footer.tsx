import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/50">
      <div>
        <p className="font-normal text-white/60">
          &copy; {new Date().getFullYear()} <span className="text-white font-medium">Sazzad Chowdhury</span>. All rights reserved.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#fff95b] transition-colors focus:outline-none"
        >
          <span>Back to Top</span>
          <i className="ri-arrow-up-line text-base" />
        </button>
      </div>
    </footer>
  );
};
