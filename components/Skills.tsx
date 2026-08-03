"use client";

import { Code2, Database, Sparkles, Cpu, Layers } from "lucide-react";

export function Skills() {
  const languagesFrameworks = [
    { name: "Python", category: "Core" },
    { name: "Django", category: "Backend" },
    { name: "Flutter", category: "Mobile" },
    { name: "Java", category: "Core" },
    { name: "JavaScript", category: "Frontend" },
    { name: "PHP", category: "Backend" },
    { name: "C", category: "System" },
    { name: "C++", category: "System" },
    { name: "WordPress", category: "CMS" },
    { name: "HTML/CSS", category: "Frontend" },
  ];

  const coreDomainsDatabases = [
    { name: "Generative AI & Gemini API", highlight: true },
    { name: "DBMS / RDBMS", highlight: true },
    { name: "Machine Learning", highlight: true },
    { name: "Blockchain", highlight: true },
    { name: "Network Security", highlight: true },
    { name: "FastAPI", highlight: true },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            A comprehensive overview of programming languages, frameworks, core technical domains, and security expertise.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Languages & Frameworks */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Languages & Frameworks</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Primary programming stacks & development tools</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {languagesFrameworks.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3.5 py-2 rounded-xl text-sm font-medium bg-blue-50/70 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 border border-blue-200/80 dark:border-blue-800/60 hover:bg-blue-100/60 dark:hover:bg-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Core Domains & Databases */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Domains & Databases</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Specialized areas, AI architectures & databases</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreDomainsDatabases.map((domain) => (
                <div
                  key={domain.name}
                  className="p-3.5 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-2.5 bg-blue-50/70 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 border-blue-200/80 dark:border-blue-800/60 hover:bg-blue-100/60 dark:hover:bg-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 shadow-xs"
                >
                  <Database className="w-4 h-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{domain.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
