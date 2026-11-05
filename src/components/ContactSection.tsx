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
        Let's Build Something <br />
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

            {/* Subject / Project Scope Text Input — No Dropdown */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                Project Scope / Subject
              </label>
              <input
                type="text"
                placeholder="e.g. Mobile App UI/UX, Web Design, Vibe Coding, etc."
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="visiblo-btn-color px-10 py-4 text-xs font-semibold tracking-wider uppercase disabled:opacity-50 cursor-pointer"
              >
                <span>{status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                <i className="ri-send-plane-fill ml-2 text-sm" />
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <i className="ri-checkbox-circle-fill text-lg" />
                  <span>Thank you! Your message has been received. I'll get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-rose-400 text-sm font-medium">
                  <i className="ri-error-warning-fill text-lg" />
                  <span>Please fill out all required fields.</span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="p-6 rounded-[20px] border border-white/10 bg-white/[0.02]">
            <span className="text-xs font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
              DIRECT EMAIL
            </span>
            <a
              href="mailto:shazzad.cse@gmail.com"
              className="text-base sm:text-lg font-medium text-white hover:text-[#fff95b] transition-colors break-all"
            >
              shazzad.cse@gmail.com
            </a>
            <p className="text-xs text-white/50 mt-1">Average response time: &lt; 24h</p>
          </div>

          <div className="p-6 rounded-[20px] border border-white/10 bg-white/[0.02]">
            <span className="text-xs font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
              PHONE &amp; WHATSAPP
            </span>
            <a
              href="tel:+8801830685904"
              className="text-base sm:text-lg font-medium text-white hover:text-[#fff95b] transition-colors font-mono"
            >
              +880 1830-685904
            </a>
            <p className="text-xs text-white/50 mt-1">Available on WhatsApp &amp; Calls</p>
          </div>

          <div className="p-6 rounded-[20px] border border-white/10 bg-white/[0.02]">
            <span className="text-xs font-mono text-[#fff95b] uppercase tracking-wider block mb-1">
              LOCATION &amp; STATUS
            </span>
            <div className="text-base font-medium text-white">
              Middle Badda, Dhaka, Bangladesh
            </div>
            <div className="flex items-center gap-2 text-white font-medium text-xs mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Selective Roles &amp; Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
