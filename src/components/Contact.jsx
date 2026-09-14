import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Interested in discussing AI & Machine Learning solutions, core engineering workflows, or new opportunities? Drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:vishwamkce2023@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      vishwamkce2023@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+917339236313"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">Phone</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      +91 7339236313
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/50 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-white">
                      Namakkal, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 font-mono block mb-3 uppercase tracking-wider">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/vishwa20102005"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vishwa20102005/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
              <h3 className="text-xl font-bold text-white font-heading mb-6">
                Send a Message
              </h3>

              {isSent ? (
                <div className="p-8 text-center space-y-3 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, Vishwa will respond to your email as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI / ML / Engineering Opportunity Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vishwa, I came across your portfolio and would love to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50 cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Transmission...' : 'Send Transmission'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
