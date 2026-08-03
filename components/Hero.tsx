"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Terminal, Shield, Smartphone, Bot } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

export function Hero() {
  return (
    <section id="about" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Headline with Profile Avatar */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-blue-600/30 shadow-md shrink-0">
                <Image
                  src="/moxit.jpg"
                  alt="Moxit Shah"
                  fill
                  sizes="(max-width: 768px) 80px, 96px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m <span className="text-blue-600 dark:text-blue-500">Moxit Shah</span> 👋
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              Software Developer specializing in{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-100">AI Integration</span> (Django/Gemini),{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-100">Mobile App Development</span> (Flutter), and{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-100">Network Cybersecurity</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-200 w-full sm:w-auto group cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com/Moxit-shah01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition-all duration-200 w-full sm:w-auto group cursor-pointer"
              >
                <GithubIcon className="w-5 h-5 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Mini Highlight Pills */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                ⚡ Django & Gemini AI
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                📱 Cross-Platform Flutter
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                🔒 Cisco Certified Defense
              </span>
            </div>

          </div>

          {/* Decorative Visual Card on Right */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Sharp Container Card */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">moxit_dev.py</span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 hover:border-blue-400 hover:shadow-xs transition-all duration-200 flex items-start gap-3 group">
                    <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">AI Assistant & Generative Models</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Google Gemini API, Custom AI Workflows & Django Integration</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 hover:border-blue-400 hover:shadow-xs transition-all duration-200 flex items-start gap-3 group">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Mobile Development</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Flutter & FastAPI inventory management & tracking apps</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 hover:border-blue-400 hover:shadow-xs transition-all duration-200 flex items-start gap-3 group">
                    <div className="p-2 rounded-lg bg-indigo-600 text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Cybersecurity & Networking</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Network Defense, Endpoint Security & Blockchain concepts</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" /> Gujarat University CS
                  </span>
                  <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">CGPA: 8.27</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
