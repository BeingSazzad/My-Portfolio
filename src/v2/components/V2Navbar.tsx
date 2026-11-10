import React, { useState, useEffect } from 'react';

interface V2NavbarProps {
  onTalkClick?: () => void;
}

export const V2Navbar: React.FC<V2NavbarProps> = ({ onTalkClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#v2-home' },
    { name: 'About', href: '#v2-about' },
    { name: 'Works', href: '#v2-works' },
    { name: 'Services', href: '#v2-services' },
    { name: 'Resume', href: '#v2-resume' },
    { name: 'Contact', href: '#v2-contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09080e]/85 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#v2-home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff0055] to-[#9333ea] p-[2px] shadow-[0_0_15px_rgba(255,0,85,0.4)]">
            <div className="w-full h-full rounded-full bg-[#09080e] flex items-center justify-center font-bold text-lg text-white">
              S
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#ff0055] transition-colors">
            Sazzad<span className="text-[#ff0055]">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#ff0055] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#v2-contact"
            onClick={(e) => {
              if (onTalkClick) {
                onTalkClick();
              } else {
                handleNavClick(e, '#v2-contact');
              }
            }}
            className="hidden sm:inline-flex v2-btn-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider"
          >
            <span>Let's Talk</span>
            <i className="ri-arrow-right-up-line ml-1.5 text-sm" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="md:hidden w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white"
          >
            <i className={mobileMenuOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0c15]/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-base font-medium text-white/80 hover:text-[#ff0055] py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#v2-contact"
            onClick={(e) => handleNavClick(e, '#v2-contact')}
            className="block text-center v2-btn-primary py-3 text-sm font-semibold uppercase mt-4"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
};
