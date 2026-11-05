import React, { useEffect } from 'react';
import { ProjectModalData } from '../types';

interface LightboxModalProps {
  project: ProjectModalData | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#111111] border border-white/15 rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-300 transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black border border-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
        >
          <i className="ri-close-line text-xl" />
        </button>

        {/* Image Preview */}
        <div className="relative w-full max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-contain max-h-[60vh]"
          />
        </div>

        {/* Project Meta Footer */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/10 bg-black/50">
          <div>
            <span className="text-xs font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
              {project.category}
            </span>
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-white/60 mt-1 max-w-xl">
              {project.description}
            </p>

            {project.tags && project.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="visiblo-btn-color text-xs py-2.5 px-5 flex items-center gap-2"
              >
                <i className="ri-github-fill text-sm" />
                <span>GitHub Repo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="visiblo-btn-arrow text-xs py-2.5 px-5"
            >
              <span>Close View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
