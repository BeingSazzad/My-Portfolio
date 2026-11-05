import React from 'react';
import { ProjectModalData } from './LightboxModal';

interface ProjectItem extends ProjectModalData {
  id: number;
  colSpan: string;
  badge: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Shxsh — Community Kindness Social App',
    category: 'Android App · Google Play · UI/UX Design',
    badge: 'LIVE ON GOOGLE PLAY',
    description:
      'Positive social platform designed to encourage community kindness and uplifting messaging. Crafted the complete mobile UI/UX experience from ground up: engagement feeds, user streaks, anonymous and direct messaging flows, and frictionless onboarding.',
    image: '/assets/project-01.jpg',
    colSpan: 'col-span-1 md:col-span-12',
  },
  {
    id: 2,
    title: 'MamaCare — Caregiver Platform',
    category: 'Mobile Product · Healthcare & Childcare',
    badge: 'ACTIVE PRODUCT',
    description:
      'Childcare platform connecting African diaspora families with vetted, trusted caregivers. Designed multi-step caregiver onboarding, verified identity profiles, calendar booking flows, and instant support channels.',
    image: '/assets/project-02.jpg',
    colSpan: 'col-span-1 md:col-span-6',
  },
  {
    id: 3,
    title: 'Investors Hub — Property Network',
    category: 'Web Platform · Fintech & Real Estate',
    badge: 'LIVE & MONETIZED',
    description:
      'Exclusive off-market property investor network built for South Africa (investors-hub.co.za). Architected anonymous investor chat rooms, verified tier access, interactive listing feeds, and subscription billing flows.',
    image: '/assets/project-03.jpg',
    colSpan: 'col-span-1 md:col-span-6',
  },
  {
    id: 4,
    title: 'EduFuture IT — EdTech Platform',
    category: 'Web Platform · Education & Training',
    badge: 'LIVE PLATFORM',
    description:
      'Leading Bangladeshi IT training and skill-development platform (edufutureit.com). Delivered full UI/UX design featuring intuitive course discovery, trainer onboarding portals, student success showcases, and seminar scheduling systems.',
    image: '/assets/project-04.jpg',
    colSpan: 'col-span-1 md:col-span-12',
  },
];

interface PortfolioSectionProps {
  onSelectProject: (p: ProjectModalData) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="portfolio" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-folder-open-line text-[#fff95b] mr-2 text-xs" />
          <span>SELECTED CASE STUDIES</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        Projects Where Creativity <br />
        <span className="color-gradient font-semibold">Meets Business Strategy</span>
      </h2>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.colSpan} group cursor-pointer`}
            onClick={() => onSelectProject(project)}
          >
            {/* Card Frame with Lightbox Zoom feel */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.03] p-3 sm:p-4 transition-all duration-500 hover:border-white/40 hover:shadow-[0_10px_40px_rgba(255,249,91,0.06)]">
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono font-medium text-[#fff95b]">
                  {project.badge}
                </div>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <i className="ri-zoom-in-line text-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Title and Category below card */}
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <span className="text-xs font-mono text-[#fff95b] uppercase tracking-wider block">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-[#fff95b] transition-colors mt-0.5">
                  {project.title}
                </h3>
              </div>

              <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/40 transition-all flex-shrink-0 ml-4">
                <i className="ri-arrow-right-up-line text-base" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
