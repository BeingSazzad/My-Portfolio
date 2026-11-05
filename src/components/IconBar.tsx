import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'ri-home-3-line' },
  { id: 'about', label: 'About', icon: 'ri-user-line' },
  { id: 'resume', label: 'Resume', icon: 'ri-align-center' },
  { id: 'service', label: 'Services', icon: 'ri-briefcase-2-line' },
  { id: 'skills', label: 'Skills', icon: 'ri-cpu-line' },
  { id: 'portfolio', label: 'Portfolio', icon: 'ri-computer-line' },
  { id: 'testimonials', label: 'Comments', icon: 'ri-chat-1-line' },
  { id: 'pricing', label: 'Pricing', icon: 'ri-price-tag-2-line' },
  { id: 'contact', label: 'Contact', icon: 'ri-mail-send-line' },
];

interface IconBarProps {
  activeSection: string;
}

export const IconBar: React.FC<IconBarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Quick section navigation"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 w-[64px] flex-col items-center py-5 rounded-[14px] border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col items-center gap-5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-label={`Navigate to ${item.label}`}
              className="group relative flex items-center justify-center p-2 rounded-lg text-white/60 hover:text-[#fff95b] transition-colors duration-200"
            >
              {/* Tooltip on the left */}
              <span className="pointer-events-none absolute right-[calc(100%+12px)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap bg-[#252525] text-white text-[12px] font-medium py-1 px-2.5 rounded shadow-lg border border-white/10">
                {item.label}
                {/* Arrow */}
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#252525] rotate-45 border-t border-r border-white/10" />
              </span>

              {/* Icon */}
              <i
                className={`${item.icon} text-lg transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? 'text-[#fff95b] scale-110' : 'text-white/60'
                }`}
              />

              {/* Active glow dot */}
              {isActive && (
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-3 rounded-full bg-[#fff95b] shadow-[0_0_8px_#fff95b]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

