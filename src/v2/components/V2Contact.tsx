import React, { useState } from 'react';

export const V2Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: 'UI/UX Design', message: '' });
    }, 4000);
  };

  return (
    <section id="v2-contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Headline & Information */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-medium tracking-widest text-[#ff0055] uppercase block">
              // LET'S CONNECT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Get Ready To Create <br />
              <span className="v2-gradient-text">Something Great.</span>
            </h2>

            <p className="text-base text-white/65 leading-relaxed">
              Have an upcoming product launch, design system revamp, or need a senior designer for your agency team? Drop a line and let's turn your vision into shipped software.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href="mailto:shazzad.cse@gmail.com"
                className="flex items-center gap-4 group text-white/80 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff0055] group-hover:border-[#ff0055]/50 group-hover:bg-[#ff0055]/10 transition-all">
                  <i className="ri-mail-line text-xl" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">Direct Email</div>
                  <div className="text-sm sm:text-base font-semibold group-hover:text-[#ff0055] transition-colors">
                    shazzad.cse@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+8801830685904"
                className="flex items-center gap-4 group text-white/80 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff0055] group-hover:border-[#ff0055]/50 group-hover:bg-[#ff0055]/10 transition-all">
                  <i className="ri-phone-line text-xl" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">Phone &amp; WhatsApp</div>
                  <div className="text-sm sm:text-base font-semibold group-hover:text-[#ff0055] transition-colors">
                    +880 1830-685904
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff0055]">
                  <i className="ri-map-pin-line text-xl" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">Location &amp; Availability</div>
                  <div className="text-sm font-semibold text-white/90">
                    Dhaka, Bangladesh • Remote Worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="v2-card p-8 sm:p-10 relative">
              <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry</h3>
              <p className="text-xs text-white/50 font-mono mb-8">
                Typical reply time: within 24 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#ff0055]/20 border border-[#ff0055] text-[#ff0055] flex items-center justify-center mx-auto text-2xl shadow-[0_0_20px_rgba(255,0,85,0.4)]">
                    <i className="ri-check-line" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-white/60">
                    Thank you, Sazzad will reach back to you shortly at {formData.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/60 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#ff0055] text-white text-sm outline-none transition-all placeholder:text-white/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/60 uppercase">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#ff0055] text-white text-sm outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/60 uppercase">Service Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#121019] border border-white/10 focus:border-[#ff0055] text-white text-sm outline-none transition-all"
                    >
                      <option value="UI/UX Design">UI/UX Design (Web &amp; Mobile)</option>
                      <option value="Vibe Coding & Prototyping">Vibe Coding &amp; Prototyping</option>
                      <option value="Web Development">Web &amp; WordPress Development</option>
                      <option value="UX Audit & Strategy">UX Audit &amp; Strategy</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/60 uppercase">Project Brief</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, timeline, and goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#ff0055] text-white text-sm outline-none transition-all resize-none placeholder:text-white/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl v2-btn-primary font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <span>Send Message</span>
                    <i className="ri-send-plane-fill ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
