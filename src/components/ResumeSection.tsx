import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Senior UI/UX Designer',
    company: 'Sparktech Agency',
    period: 'Nov 2024 — Present',
  },
  {
    role: 'UI/UX Designer (Remote)',
    company: 'Bizzflare',
    period: 'Nov 2023 — Oct 2024',
  },
  {
    role: 'Digital Marketer & Web Developer',
    company: 'One Sky Communications',
    period: 'Sep 2021 — Jul 2024',
  },
  {
    role: 'Interface & Digital Designer',
    company: 'Independent Client Practice',
    period: '2019 — 2021',
  },
];

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-briefcase-line text-[#fff95b] mr-2 text-xs" />
          <span>RESUME</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="section-title">
        Creative Thinker <br />
        <span className="color-gradient font-semibold">Designer, Innovator</span>
      </h2>

      {/* Work Experience List */}
      <div className="mt-12 divide-y divide-white/15 border-t border-b border-white/15">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="py-7 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 group hover:bg-white/[0.02] px-3 -mx-3 rounded-lg transition-colors duration-200"
          >
            <div className="flex-1">
              <h4 className="text-xl md:text-2xl font-medium text-white group-hover:text-[#fff95b] transition-colors">
                {exp.role}
              </h4>
              <p className="text-base text-white/60 mt-1 font-normal">
                {exp.company}
              </p>
            </div>

            <div className="text-sm md:text-base text-white/50 font-mono whitespace-nowrap">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
