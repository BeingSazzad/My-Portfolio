import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isRemoved, setIsRemoved] = useState<boolean>(false);

  useEffect(() => {
    // Increment percentages smoothly
    const step1 = Math.floor(Math.random() * 20 + 25); // ~35
    const step2 = Math.floor(Math.random() * 20 + 65); // ~75

    const t1 = setTimeout(() => setPercent(step1), 300);
    const t2 = setTimeout(() => setPercent(step2), 900);
    const t3 = setTimeout(() => setPercent(100), 1600);
    const t4 = setTimeout(() => setIsFading(true), 2100);
    const t5 = setTimeout(() => {
      setIsRemoved(true);
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (isRemoved) return null;

  const circumference = 2 * Math.PI * 60; // r = 60
  const dashoffset = circumference * (1 - percent / 100);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-700 ease-in-out pointer-events-none ${
        isFading ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center w-48 h-48">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r="60"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="3"
          />
          {/* Animated gradient progress circle */}
          <circle
            cx="80"
            cy="80"
            r="60"
            fill="none"
            stroke="url(#preloaderGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
            className="transition-all duration-500 ease-out"
          />
          <defs>
            <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff95b" />
              <stop offset="100%" stopColor="#ff930f" />
            </linearGradient>
          </defs>
        </svg>

        {/* Counter digits */}
        <div className="absolute flex items-baseline font-mono text-3xl font-semibold tracking-tight text-white">
          <span>{percent.toString().padStart(2, '0')}</span>
          <span className="text-xs font-normal text-white/50 ml-1">%</span>
        </div>
      </div>

      <div className="mt-6 text-xs uppercase tracking-[0.25em] text-[#9c9c9c] font-medium">
        Loading...
      </div>
    </div>
  );
};

