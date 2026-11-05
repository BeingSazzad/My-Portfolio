import React from 'react';

interface PricingPlan {
  name: string;
  badge?: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'BASIC',
    description: 'For projects with a clear brief and established assets.',
    price: '$45',
    unit: '/hour',
    features: [
      'UI/UX wireframing & interface design',
      'High-fidelity Figma source files',
      'Interactive click-through prototype',
      'Web & mobile responsive layouts',
      'Design tokens & developer handoff',
      'Async communication & updates',
      'Post-delivery design support',
    ],
  },
  {
    name: 'FULL PRODUCT DESIGN',
    badge: 'MOST POPULAR',
    description: 'For founders & teams wanting complete product UX from concept to code.',
    price: '$95',
    unit: '/hour',
    popular: true,
    features: [
      'End-to-end UX research & user journey mapping',
      'Complete Figma design system & variants',
      'Interactive vibe coding prototype (React / Tailwind)',
      'High-conversion landing page & app UX',
      'Direct developer handoff & implementation QA',
      'Dedicated Slack channel & sprint reviews',
      'Priority delivery & ongoing consultation',
    ],
  },
];

export const PricingSection: React.FC = () => {
  const scrollToContact = (planName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const serviceSelect = document.getElementById('service-select') as HTMLSelectElement | null;
      if (serviceSelect) {
        serviceSelect.value = planName;
      }
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-price-tag-3-line text-[#fff95b] mr-2 text-xs" />
          <span>PRICING</span>
        </div>
      </div>

      {/* Heading */}
      <h3 className="section-title">
        Choose the Plan<br />
        <span className="color-gradient font-semibold">That's Right for You</span>
      </h3>

      {/* Pricing Cards Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card relative flex flex-col justify-between ${
              plan.popular ? 'border-[#fff95b]/60 shadow-[0_0_35px_rgba(255,249,91,0.08)]' : ''
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-gradient-to-r from-[#fff95b] to-[#ff930f] text-black shadow-md">
                {plan.badge}
              </span>
            )}

            <div>
              {/* Card Header: Title, Description, and Price */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
                <div className="flex-1">
                  <span className="text-base font-semibold text-white tracking-wider uppercase block">
                    {plan.name}
                  </span>
                  <p className="text-xs sm:text-sm text-white/60 mt-1 leading-relaxed max-w-xs">
                    {plan.description}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-4xl sm:text-[46px] font-bold tracking-tight color-gradient inline-block">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/60 ml-1 font-mono">{plan.unit}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/15 my-8" />

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-white/80">
                    <i className="ri-check-line text-[#fff95b] text-base mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose Plan Button */}
            <button
              onClick={() => scrollToContact(plan.name)}
              className="visiblo-btn-color w-full py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase"
            >
              <span>CHOOSE PLAN</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
