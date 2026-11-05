import React from 'react';
import { ToolItem } from '../types';

export const coreCapabilities: string[] = [
  'User Research',
  'Wireframing & Prototyping',
  'Usability Testing',
  'Information Architecture',
  'User Flows & Journey Mapping',
  'Visual & Interface Design',
  'Design Systems',
  'Responsive Design',
  'Interactive Code Prototyping',
];

export const tools: ToolItem[] = [
  {
    name: 'Figma',
    icon: '/assets/images/figma.png',
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
    icon: '/assets/images/wordpress.png',
  },
  {
    name: 'React',
    icon: '/assets/images/react.png',
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
