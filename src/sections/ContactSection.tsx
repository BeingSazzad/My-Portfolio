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
          <span>CONTACT</span>
        </div>
      </div>

      {/* Heading */}
      <h3 className="section-title">
        <span className="text-metallic">Let's Build Something </span><br className="hidden sm:inline" />
        <span className="color-gradient font-semibold">Exceptional Together</span>
      </h3>

      {/* Clean Full-Width Contact Form — Clutter Free */}
      <div className="mt-12 max-w-2xl">
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
              className="visiblo-btn-color px-10 py-4 text-xs uppercase tracking-wider font-semibold cursor-pointer disabled:opacity-50 flex items-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <i className="ri-loader-4-line animate-spin text-sm" />
                  <span>SENDING...</span>
                </>
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <i className="ri-send-plane-fill text-xs" />
                </>
              )}
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
    </section>
  );
};
