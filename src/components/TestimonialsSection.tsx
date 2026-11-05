import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Shazzadul has a rare ability to bridge design and engineering. He delivers token-based Figma systems that make implementation effortless, communicates risks early, and consistently crafts high-quality user experiences.',
    author: 'Nadir Hossain',
    role: 'Lead Software Engineer',
  },
  {
    id: 2,
    quote:
      'Working alongside Shazzadul is a masterclass in UX clarity. His attention to typography, spacing geometry, and user flows brings immense polish to every product.',
    author: 'Md. Asadujjaman Mahfuz',
    role: 'Senior UI Designer',
  },
  {
    id: 3,
    quote:
      'Shazzadul understands that shipping matters. He cuts through complexity, explains UX decisions with clarity, and takes full responsibility for product outcomes, not just static screens.',
    author: 'Kevin Lawson',
    role: 'Product Director',
  },
  {
    id: 4,
    quote:
      'You always know where things stand with Shazzadul. No fluff, no over-engineering — just clear design decisions, solid prototyping, and consistent delivery.',
    author: 'Alex Turner',
    role: 'Founder & Strategist',
  },
];

export const TestimonialsSection: React.FC = () => {
  const list = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 md:py-24 border-b border-white/10 overflow-hidden">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-chat-voice-line text-[#fff95b] mr-2 text-xs" />
          <span>COMMENTS</span>
        </div>
      </div>

      {/* Heading */}
      <h3 className="section-title">
        What People Say<br />
        <span className="color-gradient font-semibold">About My Work</span>
      </h3>

      {/* Continuous Marquee Ticker */}
      <div className="relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="ticker-track gap-6 py-4">
          {list.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[440px] flex-shrink-0 rounded-[20px] border border-[#393939] bg-white/[0.03] backdrop-blur-md p-7 sm:p-8 flex flex-col justify-between hover:border-[#fff95b]/50 transition-colors duration-300"
            >
              <div className="text-white/30 text-2xl mb-3">
                <i className="ri-double-quotes-l" />
              </div>

              <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed font-normal italic">
                "{item.quote}"
              </p>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h5 className="text-base font-semibold text-white tracking-tight">
                    {item.author}
                  </h5>
                  <p className="text-xs text-white/50">{item.role}</p>
                </div>

                <div className="flex gap-1 text-[#fff95b] text-xs">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill" />
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
