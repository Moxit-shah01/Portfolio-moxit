"use client";

import Image from "next/image";
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Bot,
  Smartphone,
  Cpu,
  ShieldCheck,
  Compass,
  Factory,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

interface Project {
  id: string;
  title: string;
  category: string;
  projectType?: string;
  clientLabel?: string;
  role?: string;
  status?: string;
  stack: string[];
  desc: string;
  keyResponsibilities?: string[];
  icon: any;
  featured?: boolean;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "shree-swami-engineering",
    title: "Shree Swami Engineering",
    category: "Industrial Engineering & Piping Solutions",
    projectType: "FREELANCE PROJECT",
    clientLabel: "CLIENT WEBSITE DEVELOPMENT",
    role: "Freelance Web Developer",
    status: "Completed",
    desc: "Developed a modern, responsive corporate business website for Shree Swami Engineering as a real-world freelance client delivery. The platform establishes the company's digital presence, showcasing its extensive industrial pipe catalog (MS, HDPE, fittings), engineering capabilities, interactive WhatsApp inquiry routing, and Google Maps location integration.",
    keyResponsibilities: [
      "Client requirement planning & responsive UI/UX architecture",
      "Industrial product catalog & technical specification display",
      "Direct WhatsApp customer inquiry routing & Google Maps integration",
      "Cross-device mobile optimization & production Netlify deployment",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "WhatsApp API",
      "Google Maps",
      "Netlify",
    ],
    icon: Factory,
    featured: true,
    image: "/images/shree-swami-engineering.png",
    liveUrl: "https://shreeswamiengineering.netlify.app/",
    githubUrl: "https://github.com/imvishalpatel/shree-swami-engineering-website",
  },
  {
    id: "ai-social-assistant",
    title: "AI Social Media Assistant",
    category: "AI & Full-Stack Web",
    stack: ["Python", "Django", "Gemini AI", "HTML", "CSS", "JavaScript"],
    desc: "Web application leveraging Google Gemini AI APIs to generate automated social media content, viral post hooks, and automated visual creative ideas.",
    icon: Bot,
    featured: true,
    image: "/images/ai-social-assistant.png",
    githubUrl: "https://github.com/Moxit-shah01",
  },
  {
    id: "optical-store-app",
    title: "Optical Store Management App",
    category: "Mobile & Backend",
    stack: ["Flutter", "FastAPI", "Python"],
    desc: "Cross-platform mobile app designed for optical store inventory, customer tracking, prescription tracking, and retail sales management.",
    icon: Smartphone,
    featured: true,
    githubUrl: "https://github.com/Moxit-shah01",
  },
  {
    id: "career-advisor",
    title: "Career Advisor",
    category: "AI & Virtual Advisor",
    stack: ["Python", "Django", "Machine Learning", "HTML", "CSS"],
    desc: "Intelligent virtual career advisor platform featuring skills assessment, job market analysis, and personalized career path recommendations.",
    icon: Compass,
    image: "/images/career-advisor.png",
    githubUrl: "https://github.com/Moxit-shah01",
  },
  {
    id: "algominds",
    title: "AlgoMinds",
    category: "Interactive Platform",
    stack: ["Java", "HTML", "CSS"],
    desc: "Interactive software platform focusing on algorithmic problem-solving, data structure simulations, and educational concepts.",
    icon: Cpu,
    githubUrl: "https://github.com/Moxit-shah01",
  },
  {
    id: "rockwallet",
    title: "RockWallet",
    category: "Blockchain Concept",
    stack: ["Blockchain", "Cryptography", "JavaScript"],
    desc: "Decentralized crypto wallet application concept built on blockchain principles with transaction security and asset management.",
    icon: ShieldCheck,
    image: "/images/rockwallet.png",
    githubUrl: "https://github.com/Moxit-shah01",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 shadow-2xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A curated portfolio featuring real-world freelance client deliveries, full-stack AI applications, cross-platform mobile apps, and systems engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            const isFreelance = Boolean(project.projectType);

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl bg-white dark:bg-slate-900 border p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                  isFreelance
                    ? "border-emerald-300/80 dark:border-emerald-700/80 md:col-span-2 lg:col-span-2 bg-gradient-to-b from-white to-emerald-50/20 dark:from-slate-900 dark:to-emerald-950/10 ring-1 ring-emerald-500/10"
                    : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {/* Accent top gradient on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 ${
                    isFreelance
                      ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 opacity-100"
                      : "bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div>
                  {/* Top card header */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl border transition-colors duration-300 ${
                          isFreelance
                            ? "bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/70 group-hover:bg-emerald-600 group-hover:text-white"
                            : "bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/60 group-hover:bg-blue-600 group-hover:text-white"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                          {project.category}
                        </span>
                        {project.role && (
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                            <Briefcase className="w-3 h-3" />
                            <span>Role: {project.role}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Status Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.projectType && (
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 px-2.5 py-0.5 rounded-full shadow-2xs tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {project.projectType}
                        </span>
                      )}

                      {project.clientLabel && (
                        <span className="hidden sm:inline-flex items-center text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded-full tracking-wider">
                          {project.clientLabel}
                        </span>
                      )}

                      {project.featured && !project.projectType && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-2.5 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-amber-500" /> Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${
                      isFreelance
                        ? "text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 text-2xl"
                        : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Key Client Deliverables Checklist for Freelance Projects */}
                  {project.keyResponsibilities && (
                    <div className="mb-5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
                      <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Key Responsibilities &amp; Delivered Features</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                        {project.keyResponsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Screenshot Banner if available */}
                  {project.image && (
                    <div className="relative w-full aspect-16/9 mb-6 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={project.image}
                        alt={`${project.title} Interface Screenshot`}
                        fill
                        sizes={isFreelance ? "(max-width: 1024px) 100vw, 1200px" : "(max-width: 768px) 100vw, 50vw"}
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-semibold text-slate-400 self-center mr-1">Stack:</span>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2">
                    {/* Source code / repo link */}
                    <a
                      href={project.githubUrl || "https://github.com/Moxit-shah01"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{project.githubUrl ? "GitHub Repo" : "Source Code"}</span>
                    </a>

                    {/* Live Website / Inquire Link */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs shadow-blue-500/20 hover:shadow-md transition-all group/btn"
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <span>Inquire Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
