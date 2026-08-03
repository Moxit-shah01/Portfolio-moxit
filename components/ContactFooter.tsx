"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, Send, Sparkles, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const email = "smoxit01@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormSent(false);
    }, 4000);
  };

  return (
    <footer id="contact" className="relative pt-16 md:pt-24 bg-slate-900 text-slate-100 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/60 text-blue-300 border border-blue-800">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let&apos;s Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Whether you have a project idea, career opportunity, or technical inquiry, feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 space-y-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <a href={`mailto:${email}`} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate block">
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <a
                href="tel:+917016626303"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center gap-3 hover:border-blue-500/50 transition-colors group block"
              >
                <div className="p-3 rounded-lg bg-emerald-600/20 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Phone Number</p>
                  <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    +91-7016626303
                  </p>
                </div>
              </a>

              {/* Social Links */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Professional Profiles
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/moxitshah01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:bg-blue-600/10 hover:border-blue-500/50 text-slate-200 hover:text-blue-400 flex items-center gap-2.5 text-sm font-semibold transition-all group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/Moxit-shah01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:bg-slate-800 hover:border-slate-600 text-slate-200 hover:text-white flex items-center gap-2.5 text-sm font-semibold transition-all group"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">Got a proposal or quick question? Send a message directly.</p>

              {formSent ? (
                <div className="p-8 rounded-xl bg-emerald-950/60 border border-emerald-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-emerald-200">Thank you for reaching out. Moxit will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Moxit, I'd like to discuss a project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Moxit Shah. Built with Next.js & Tailwind CSS.</p>
          <p className="text-slate-500 flex items-center gap-1">
            Designed for high performance & clean user experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
