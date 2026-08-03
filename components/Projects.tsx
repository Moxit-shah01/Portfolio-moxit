"use client";

import Image from "next/image";
import { FolderGit2, ExternalLink, Sparkles, Layers, Bot, Smartphone, Cpu, ShieldCheck, Compass } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

interface Project {
  id: string;
  title: string;
  category: string;
  stack: string[];
  desc: string;
  icon: any;
  featured?: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    id: "ai-social-assistant",
    title: "AI Social Media Assistant",
    category: "AI & Full-Stack Web",
    stack: ["Python", "Django", "Gemini AI", "HTML", "CSS", "JavaScript"],
    desc: "Web application leveraging Google Gemini AI APIs to generate automated social media content.",
    icon: Bot,
    featured: true,
    image: "/images/ai-social-assistant.png",
  },
  {
    id: "career-advisor",
    title: "Career Advisor",
    category: "AI & Virtual Advisor",
    stack: ["Python", "Django", "Machine Learning", "HTML", "CSS"],
    desc: "Intelligent virtual career advisor platform featuring skills assessment, job market analysis, and personalized career path recommendations.",
    icon: Compass,
    image: "/images/career-advisor.png",
  },
  {
    id: "optical-store-app",
    title: "Optical Store Management App",
    category: "Mobile & Backend",
    stack: ["Flutter", "FastAPI", "Python"],
    desc: "Cross-platform mobile app designed for optical store inventory, customer tracking, and sales management.",
    icon: Smartphone,
    featured: true,
  },
  {
    id: "algominds",
    title: "AlgoMinds",
    category: "Interactive Platform",
    stack: ["Java", "HTML", "CSS"],
    desc: "Interactive software platform focusing on algorithmic problem-solving and educational concepts.",
    icon: Cpu,
  },
  {
    id: "rockwallet",
    title: "RockWallet",
    category: "Blockchain Concept",
    stack: ["Blockchain", "Cryptography"],
    desc: "Decentralized crypto wallet application concept built on blockchain principles.",
    icon: ShieldCheck,
    image: "/images/rockwallet.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            A selection of software projects spanning AI integration, mobile development, and blockchain concepts.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Accent line on top of card on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-amber-500" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Project Screenshot Banner if available */}
                  {project.image && (
                    <div className="relative w-full aspect-16/9 mb-6 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={project.image}
                        alt={`${project.title} Dashboard Screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
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
                  <div className="mt-6 flex items-center justify-between pt-2">
                    <a
                      href="https://github.com/Moxit-shah01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>Inquire Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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
