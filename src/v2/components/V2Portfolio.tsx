import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectModalData } from '../../types';
import { ProgressiveImage } from '../../components/ProgressiveImage';

interface V2PortfolioProps {
  onSelectProject: (p: ProjectModalData) => void;
}

export const V2Portfolio: React.FC<V2PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'UI/UX', 'Web Design', 'Mobile App'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            p.badge.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <section id="v2-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-medium tracking-widest text-[#ff0055] uppercase block mb-2">
              // SELECTED PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Recent Works &amp; <span className="v2-gradient-text">Case Studies</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff0055] to-[#e11d48] text-white shadow-[0_0_15px_rgba(255,0,85,0.4)]'
                      : 'bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2x2 Clean Modern Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="v2-card group p-5 sm:p-6 cursor-pointer overflow-hidden relative flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/60 mb-5 border border-white/10">
                <ProgressiveImage
                  src={project.image}
                  alt={project.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#09080e]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono font-semibold text-[#ff0055]">
                  {project.badge}
                </div>

                {/* Hover Quick View Pill */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-[#ff0055] text-white font-semibold text-xs tracking-wider uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-2">
                    <span>View Case Study</span>
                    <i className="ri-arrow-right-up-line text-sm" />
                  </span>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#ff0055] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/40">{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff0055] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <i className="ri-arrow-right-up-line text-lg text-white/40 group-hover:text-[#ff0055] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>

                <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags row */}
                <div className="pt-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] border border-white/10 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
