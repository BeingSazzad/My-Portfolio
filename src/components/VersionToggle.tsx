import React from 'react';

interface VersionToggleProps {
  currentVersion: 'v1' | 'v2';
  onSwitch: (version: 'v1' | 'v2') => void;
}

export const VersionToggle: React.FC<VersionToggleProps> = ({ currentVersion, onSwitch }) => {
  return (
    <aside
      aria-label="A/B Portfolio Version Switcher"
      className="fixed bottom-6 right-6 md:top-6 md:bottom-auto z-50 flex items-center p-1.5 rounded-full bg-[#110e19]/90 border border-white/20 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-1 text-[11px] font-mono tracking-wider">
        <span className="hidden sm:inline-block px-2.5 text-white/40 uppercase font-semibold">
          A/B Test:
        </span>

        {/* Version 1 Button */}
        <button
          onClick={() => onSwitch('v1')}
          className={`px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            currentVersion === 'v1'
              ? 'bg-[#fff95b] text-black font-bold shadow-[0_0_15px_rgba(255,249,91,0.4)]'
              : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${currentVersion === 'v1' ? 'bg-black' : 'bg-[#fff95b]'}`} />
          <span>V1 • Gold</span>
        </button>

        {/* Version 2 Button */}
        <button
          onClick={() => onSwitch('v2')}
          className={`px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            currentVersion === 'v2'
              ? 'bg-[#ff0055] text-white font-bold shadow-[0_0_15px_rgba(255,0,85,0.5)]'
              : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${currentVersion === 'v2' ? 'bg-white' : 'bg-[#ff0055]'}`} />
          <span>V2 • Crimson</span>
        </button>
      </div>
    </aside>
  );
};
