"use client";

import { Briefcase, Calendar, CheckCircle2, Building2, ChevronRight } from "lucide-react";

export function Experience() {
  const bulletPoints = [
    "Developed AI-powered web applications using Django and Python.",
    "Integrated Google Gemini AI APIs for intelligent, automated content generation.",
    "Handled full-stack development, backend integration, testing, and debugging.",
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Hands-on software development experience building real-world AI applications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto">
          
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
            
            {/* Experience Item */}
            <div className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-50 dark:border-slate-950 ring-4 ring-blue-500/20 group-hover:scale-125 transition-transform duration-200" />

              {/* Main Card */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Software Development Intern
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>Swing IT Services</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Jan 2026 – Apr 2026</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Applied Technologies */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs font-medium text-slate-400 self-center mr-1">Stack:</span>
                  {["Django", "Python", "Google Gemini AI API", "Full-Stack Development", "Debugging"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
