import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#fff95b', '#ff930f', '#ffffff'],
      });
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-white/10">
      {/* Eyebrow Badge */}
      <div className="mb-6">
        <div className="eyebrow-badge">
          <i className="ri-mail-send-line text-[#fff95b] mr-2 text-xs" />
          <span>CONTACT &amp; COLLABORATION</span>
        </div>
      </div>

      {/* Heading */}
      <h3 className="section-title">
        <span className="text-metallic">Let's Build Something </span><br className="hidden sm:inline" />
        <span className="color-gradient font-semibold">Exceptional Together</span>
      </h3>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                  Your Name <span className="text-[#fff95b]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/20 focus:border-[#fff95b] text-white px-5 py-4 rounded-[12px] outline-none transition-colors duration-200 text-sm placeholder:text-white/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                  Your Email <span className="text-[#fff95b]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/20 focus:border-[#fff95b] text-white px-5 py-4 rounded-[12px] outline-none transition-colors duration-200 text-sm placeholder:text-white/30"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="e.g. Product Design Inquiry"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/20 focus:border-[#fff95b] text-white px-5 py-4 rounded-[12px] outline-none transition-colors duration-200 text-sm placeholder:text-white/30"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                Message <span className="text-[#fff95b]">*</span>
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your product vision, timeline, and goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/20 focus:border-[#fff95b] text-white px-5 py-4 rounded-[12px] outline-none transition-colors duration-200 text-sm resize-none placeholder:text-white/30"
              />
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="visiblo-btn-color px-10 py-4 text-xs uppercase tracking-wider font-semibold cursor-pointer disabled:opacity-50"
              >
                <span>
                  {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                </span>
                <i className="ri-send-plane-fill ml-2 text-xs" />
              </button>

              {status === 'success' && (
                <div className="text-emerald-400 text-sm flex items-center gap-2">
                  <i className="ri-checkbox-circle-fill text-base" />
                  <span>Message sent successfully! I'll reply within 24h.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="text-rose-400 text-sm flex items-center gap-2">
                  <i className="ri-error-warning-fill text-base" />
                  <span>Please fill in all required fields.</span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-7 rounded-[22px] border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <span className="text-xs font-mono text-[#fff95b] uppercase tracking-wider block mb-2">
              DIRECT REACH
            </span>
            <h4 className="text-white text-lg font-medium mb-4">
              Let's Discuss Your Product
            </h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] flex-shrink-0">
                  <i className="ri-mail-line" />
                </div>
                <a
                  href="mailto:shazzad.cse@gmail.com"
                  className="hover:text-white transition-colors truncate"
                >
                  shazzad.cse@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] flex-shrink-0">
                  <i className="ri-phone-line" />
                </div>
                <a
                  href="tel:+8801830685904"
                  className="hover:text-white transition-colors"
                >
                  +880 1830-685904
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#fff95b] flex-shrink-0">
                  <i className="ri-map-pin-line" />
                </div>
                <span>Dhaka, Bangladesh · Remote Worldwide</span>
              </div>
            </div>
          </div>

          <div className="p-7 rounded-[22px] border border-white/10 bg-gradient-to-br from-[#fff95b]/10 to-transparent">
            <span className="text-xs font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
              CURRENT AVAILABILITY
            </span>
            <p className="text-white font-medium text-base mt-2">
              Available for high-impact Product Design contracts &amp; Senior UI/UX roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
