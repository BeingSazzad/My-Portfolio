import React, { useState, useEffect } from 'react';

// Core UI Components
import { Preloader } from './components/Preloader';
import { BackgroundVideo } from './components/BackgroundVideo';
import { IconBar } from './components/IconBar';
import { ProfileCard } from './components/ProfileCard';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';

// Page Flow Sections
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ResumeSection } from './sections/ResumeSection';
import { ServicesSection } from './sections/ServicesSection';
import { SkillsSection } from './sections/SkillsSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ContactSection } from './sections/ContactSection';

// Shared Types
import { ProjectModalData } from './types';

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
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
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-[#ffffffbf] overflow-x-clip selection:bg-[#fff95b] selection:text-black">
      {/* 1. Preloader Animation */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* 2. Signature 3D Glowing Ambient Video Background */}
      <BackgroundVideo />

      {/* 3. Right Floating Dock Navigation */}
      <IconBar activeSection={activeSection} />

      {/* 4. Main Responsive Grid Container — Visiblo Proportioned Layout */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Fixed / Sticky Profile Card — stays locked in place as you scroll */}
          <aside className="w-full lg:w-[320px] xl:w-[350px] flex-shrink-0 self-stretch relative">
            <div className="lg:sticky lg:top-8 xl:top-12 z-20">
              <ProfileCard />
            </div>
          </aside>

          {/* Right Column: Main Content Sections — Balanced & Breathable */}
          <main className="w-full flex-1 min-w-0">
            <HeroSection />
            <AboutSection />
            <ResumeSection />
            <ServicesSection />
            <SkillsSection />
            <PortfolioSection onSelectProject={setSelectedProject} />
            <ContactSection />
            <Footer />
          </main>
        </div>
      </div>

      {/* 6. Lightbox Modal for Projects */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
