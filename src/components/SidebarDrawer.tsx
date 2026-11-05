import React from 'react';

interface SidebarDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  activeSection: string;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'service', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onToggle,
  onClose,
  activeSection,
}) => {
  const handleNavClick = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hamburger Trigger Button */}
      <button
        onClick={onToggle}
        aria-label="Toggle menu"
        className="fixed top-6 right-6 z-50 flex flex-col justify-center items-center w-12 h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-md hover:border-[#fff95b] transition-all duration-300 focus:outline-none"
      >
        <span
          className={`h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5 bg-[#fff95b]' : 'mb-1'
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'mb-1'
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5 bg-[#fff95b]' : ''
          }`}
        />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Slide-out Menu Drawer */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-80 max-w-[85vw] bg-[#0c0c0c] border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-xl font-semibold tracking-tight text-white">Menu</span>
            <span className="text-xs font-mono text-[#fff95b] px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
              NAVIGATION
            </span>
          </div>

          <nav className="mt-8 flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-lg py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'text-[#fff95b] font-medium bg-white/5 translate-x-1'
                      : 'text-white/70 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <i className="ri-arrow-right-s-line text-[#fff95b]" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer info in sidebar */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-xs text-white/50 mb-3">GET IN TOUCH</p>
          <a
            href="mailto:shazzad.cse@gmail.com"
            className="text-sm text-white hover:text-[#fff95b] transition-colors font-medium block"
          >
            shazzad.cse@gmail.com
          </a>
          <div className="mt-4 flex gap-3 text-white/60">
            <a
              href="https://dribbble.com/Sazzad_Ux"
              target="_blank"
              rel="noreferrer"
              title="Dribbble"
              className="hover:text-[#fff95b] transition-colors p-2 rounded-full bg-white/5"
            >
              <i className="ri-dribbble-line text-sm" />
            </a>
            <a
              href="https://github.com/BeingSazzad"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="hover:text-[#fff95b] transition-colors p-2 rounded-full bg-white/5"
            >
              <i className="ri-github-fill text-sm" />
            </a>
            <a
              href="https://linkedin.com/in/beingsazzad"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="hover:text-[#fff95b] transition-colors p-2 rounded-full bg-white/5"
            >
              <i className="ri-linkedin-fill text-sm" />
            </a>
            <a
              href="tel:+8801830685904"
              title="Phone"
              className="hover:text-[#fff95b] transition-colors p-2 rounded-full bg-white/5"
            >
              <i className="ri-phone-line text-sm" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
