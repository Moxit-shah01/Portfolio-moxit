"use client";

import { Award, GraduationCap, CheckCircle, ShieldCheck, Cpu, ExternalLink } from "lucide-react";

export function EducationCertifications() {
  const certifications = [
    {
      title: "Network Defense & Endpoint Security",
      issuer: "Cisco Networking Academy",
      date: "April 2026",
      badge: "Cisco Certified",
    },
    {
      title: "Introduction to Generative AI Studio",
      issuer: "Google Generative AI",
      date: "2026",
      badge: "Google Cloud / AI",
    },
    {
      title: "Virtual Job Simulations",
      issuer: "Forage Platform",
      detail: "JPMorgan Chase, PwC Switzerland, Deloitte, TCS, Tech Mahindra",
      badge: "Simulations",
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
            <Award className="w-3.5 h-3.5" />
            <span>Qualifications & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Formal academic background and industry certifications in cybersecurity, AI, and enterprise software engineering.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Certifications */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Professional credentials & practical simulations</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>{cert.title}</span>
                        </h4>
                        <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                          {cert.issuer} {cert.date ? `• ${cert.date}` : ""}
                        </p>
                        {cert.detail && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 bg-white dark:bg-slate-900/80 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                            <span className="font-semibold text-slate-700 dark:text-slate-300">Companies:</span> {cert.detail}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
                        {cert.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Education */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Academic background & university degree</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      B.Sc. in Computer Science
                    </h4>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                      Department of Computer Science, Gujarat University
                    </p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    Graduated
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Cumulative Grade Point Average (CGPA):
                  </span>
                  <div className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-base font-extrabold shadow-sm">
                    8.27 / 10
                  </div>
                </div>
              </div>

              {/* Key academic coursework pill highlight */}
              <div className="mt-6 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                <h5 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-2">
                  Academic Focus Areas
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Relational Database Management Systems (RDBMS), Operating Systems, and Computer Networks.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
