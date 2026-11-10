import React, { useState } from 'react';
import { V2Navbar } from './components/V2Navbar';
import { V2Hero } from './components/V2Hero';
import { V2AboutStats } from './components/V2AboutStats';
import { V2Portfolio } from './components/V2Portfolio';
import { V2Services } from './components/V2Services';
import { V2ExperienceEducation } from './components/V2ExperienceEducation';
import { V2Contact } from './components/V2Contact';
import { V2Footer } from './components/V2Footer';
import { LightboxModal } from '../components/LightboxModal';
import { ProjectModalData } from '../types';

export const PortfolioV2: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);

  const scrollToContact = () => {
    document.getElementById('v2-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#09080e] text-[#f8fafc] selection:bg-[#ff0055] selection:text-white relative overflow-x-clip font-sans">
      {/* Top Fixed Navbar */}
      <V2Navbar onTalkClick={scrollToContact} />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <V2Hero />
        <V2AboutStats />
        <V2Portfolio onSelectProject={setSelectedProject} />
        <V2Services />
        <V2ExperienceEducation />
        <V2Contact />
      </main>

      {/* Footer */}
      <V2Footer />

      {/* Lightbox Modal for Projects */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default PortfolioV2;
