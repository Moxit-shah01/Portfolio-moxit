"use client";

import { Briefcase, Calendar, CheckCircle2, Building2, ChevronRight } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Business Operations Head",
    company: "Clariity",
    type: "Part-time",
    period: "Mar 2026 – Present",
    location: "Ahmedabad, Gujarat, India · Remote",
    current: true,
    bullets: [
      "Leading business operations strategy and streamlining organizational workflows.",
      "Driving cross-functional coordination across teams to optimize delivery pipelines.",
      "Overseeing product and service delivery with a focus on operational efficiency.",
    ],
    stack: ["Business Operations", "Strategy", "Team Leadership", "Remote Collaboration"],
  },
  {
    title: "Software Development Intern",
    company: "Swing IT Services",
    type: "Internship",
    period: "Jan 2026 – Apr 2026",
    location: "Ahmedabad, Gujarat, India",
    bullets: [
      "Developed AI-powered web applications using Django and Python.",
      "Integrated Google Gemini AI APIs for intelligent, automated content generation.",
      "Handled full-stack development, backend integration, testing, and debugging.",
    ],
    stack: ["Django", "Python", "Google Gemini AI API", "Full-Stack Development", "Debugging"],
  },
];

export function Experience() {
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
            Hands-on experience in software development, AI integration, and business operations leadership.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto">
          
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
            
            {experiences.map((exp) => (
              <div key={exp.company} className="relative group">
                
                {/* Timeline Indicator Node */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-slate-50 dark:border-slate-950 ring-4 group-hover:scale-125 transition-transform duration-200 ${
                  exp.current
                    ? "bg-emerald-500 ring-emerald-500/20"
                    : "bg-blue-600 ring-blue-500/20"
                }`} />

                {/* Main Card */}
                <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200">
                  
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                        <span className="text-slate-400 dark:text-slate-600">·</span>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">{exp.type}</span>
                      </div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{exp.location}</p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Applied Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-medium text-slate-400 self-center mr-1">Stack:</span>
                    {exp.stack.map((tech) => (
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
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
