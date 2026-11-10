import React, { useState, useEffect } from 'react';

// Core UI Components (V1)
import { Preloader } from './components/Preloader';
import { BackgroundVideo } from './components/BackgroundVideo';
import { IconBar } from './components/IconBar';
import { ProfileCard } from './components/ProfileCard';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { VersionToggle } from './components/VersionToggle';

// Page Flow Sections (V1)
import { HeroSection } from './sections/HeroSection';
import { ResumeSection } from './sections/ResumeSection';
import { ServicesSection } from './sections/ServicesSection';
import { SkillsSection } from './sections/SkillsSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ContactSection } from './sections/ContactSection';

// Version 2 Page (Modern Crimson Figma Template)
import { PortfolioV2 } from './v2/PortfolioV2';

// Shared Types
import { ProjectModalData } from './types';

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);

  // A/B Testing Version State: 'v1' (Visiblo Gold) or 'v2' (Crimson Modern)
  const [version, setVersion] = useState<'v1' | 'v2'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash.includes('v2') || search.includes('v=2') || path.startsWith('/v2')) {
        return 'v2';
      }
    }
    return 'v1';
  });

  const handleSwitchVersion = (v: 'v1' | 'v2') => {
    setVersion(v);
    if (typeof window !== 'undefined') {
      window.location.hash = v;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync hash changes (e.g. user types #v2 or #v1 in URL bar or uses browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('v2')) {
        setVersion('v2');
      } else if (hash.includes('v1')) {
        setVersion('v1');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // V1 Active section scroll spy
  useEffect(() => {
    if (version !== 'v1') return;

    const sectionIds = [
      'home',
      'resume',
      'service',
      'skills',
      'portfolio',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 260;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [version]);

  return (
    <>
      {/* Persistent A/B Testing Version Switcher */}
      <VersionToggle currentVersion={version} onSwitch={handleSwitchVersion} />

      {version === 'v2' ? (
        /* =========================================
           VERSION 2: Crimson Modern Figma Template
           ========================================= */
        <PortfolioV2 />
      ) : (
        /* =========================================
           VERSION 1: Visiblo Metallic Amber-Gold
           ========================================= */
        <div className="relative min-h-screen bg-black text-[#ffffffbf] overflow-x-clip selection:bg-[#fff95b] selection:text-black">
          {/* 0. Top Reading / Scroll Progress Bar */}
          <ScrollProgressBar />

          {/* 1. Preloader Animation */}
          <Preloader onComplete={() => setLoading(false)} />

          {/* 2. Signature 3D Glowing Ambient Video Background */}
          <BackgroundVideo />

          {/* 3. Right Floating Dock Navigation */}
          <IconBar activeSection={activeSection} />

          {/* 4. Main Responsive Grid Container — Visiblo Proportioned Layout */}
          <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-16">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
              {/* Left Column: Fixed / Sticky Profile Card */}
              <aside className="w-full lg:w-[320px] xl:w-[350px] flex-shrink-0 self-stretch relative">
                <div className="lg:sticky lg:top-8 xl:top-12 z-20">
                  <ProfileCard />
                </div>
              </aside>

              {/* Right Column: Main Content Sections */}
              <main className="w-full flex-1 min-w-0">
                <HeroSection />
                <ResumeSection />
                <ServicesSection />
                <SkillsSection />
                <PortfolioSection onSelectProject={setSelectedProject} />
                <ContactSection />
                <Footer />
              </main>
            </div>
          </div>

          {/* Lightbox Modal for Projects */}
          <LightboxModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      )}
    </>
  );
};

export default App;
