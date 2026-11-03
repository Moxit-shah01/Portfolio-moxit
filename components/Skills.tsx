"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  Server,
  Code2,
  Smartphone,
  Database,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Layers,
  Cpu,
  Info,
} from "lucide-react";
import {
  PythonIcon,
  DjangoIcon,
  FastApiIcon,
  JavaIcon,
  SpringBootIcon,
  FlutterIcon,
  ReactIcon,
  JavaScriptIcon,
  Html5Icon,
  Css3Icon,
  CIcon,
  CppIcon,
  PhpIcon,
  PostgreSqlIcon,
  MySqlIcon,
  SqliteIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  PostmanIcon,
  AwsIcon,
  GeminiAiIcon,
  CiscoSecurityIcon,
  AiBrainIcon,
  RestApiIcon,
  DatabaseRdbmsIcon,
} from "@/components/icons/TechIcons";

interface SkillItem {
  name: string;
  badge?: string;
  badgeType?: "core" | "certified" | "framework" | "proficient" | "tool";
  icon: React.ComponentType<{ className?: string }>;
  context: string;
}

interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: {
    bg: string;
    border: string;
    text: string;
    badge: string;
  };
  prominent?: boolean;
  skills: SkillItem[];
}

const marqueeTechs = [
  { name: "Python", icon: PythonIcon },
  { name: "Django", icon: DjangoIcon },
  { name: "Google Gemini AI", icon: GeminiAiIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Spring Boot", icon: SpringBootIcon },
  { name: "FastAPI", icon: FastApiIcon },
  { name: "React", icon: ReactIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "PostgreSQL", icon: PostgreSqlIcon },
  { name: "MySQL", icon: MySqlIcon },
  { name: "SQLite", icon: SqliteIcon },
  { name: "Cisco Defense", icon: CiscoSecurityIcon },
  { name: "Git", icon: GitIcon },
  { name: "Postman", icon: PostmanIcon },
];

const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "LLM orchestration, Gemini API integration & ML pipelines",
    icon: Bot,
    prominent: true,
    color: {
      bg: "bg-blue-50 dark:bg-blue-950/60",
      border: "border-blue-200/80 dark:border-blue-800/80",
      text: "text-blue-600 dark:text-blue-400",
      badge: "bg-blue-100/80 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300",
    },
    skills: [
      {
        name: "Google Gemini API",
        badge: "Certified",
        badgeType: "certified",
        icon: GeminiAiIcon,
        context: "Google GenAI Studio certified; automated content pipelines in AI Social Media Assistant",
      },
      {
        name: "Generative AI",
        badge: "Core Focus",
        badgeType: "core",
        icon: Sparkles,
        context: "Prompt engineering, dynamic text generation, multimodal workflows",
      },
      {
        name: "Machine Learning",
        badge: "Applied",
        badgeType: "proficient",
        icon: AiBrainIcon,
        context: "Classification algorithms and predictive path recommendations in Career Advisor",
      },
      {
        name: "Artificial Intelligence",
        badge: "Core",
        badgeType: "core",
        icon: Bot,
        context: "Conversational agents, intelligent summarization, automated data generation",
      },
      {
        name: "AI App Development",
        badge: "Production",
        badgeType: "core",
        icon: Cpu,
        context: "Full-stack integration of neural APIs into production Django & web interfaces",
      },
      {
        name: "Python for AI",
        badge: "Core",
        badgeType: "core",
        icon: PythonIcon,
        context: "Data manipulation, payload structuring, and asynchronous model communication",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "Scalable server architectures, RESTful APIs & database operations",
    icon: Server,
    prominent: true,
    color: {
      bg: "bg-emerald-50 dark:bg-emerald-950/60",
      border: "border-emerald-200/80 dark:border-emerald-800/80",
      text: "text-emerald-600 dark:text-emerald-400",
      badge: "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300",
    },
    skills: [
      {
        name: "Python",
        badge: "Primary",
        badgeType: "core",
        icon: PythonIcon,
        context: "Core language for backend microservices, scripts, and AI-driven web apps",
      },
      {
        name: "Django",
        badge: "Production",
        badgeType: "core",
        icon: DjangoIcon,
        context: "Production framework at Swing IT Services internship, MVC structure & ORM",
      },
      {
        name: "FastAPI",
        badge: "Framework",
        badgeType: "framework",
        icon: FastApiIcon,
        context: "High-concurrency async endpoints powering Optical Store Management backend",
      },
      {
        name: "Java & Spring Boot",
        badge: "Enterprise",
        badgeType: "framework",
        icon: SpringBootIcon,
        context: "Spring Boot RESTful microservices, IoC/DI, enterprise Java backend logic",
      },
      {
        name: "REST API Development",
        badge: "Core",
        badgeType: "core",
        icon: RestApiIcon,
        context: "Clean endpoint contracts, HTTP status handling, JSON serialization & security",
      },
      {
        name: "CRUD Operations",
        badge: "Architecture",
        badgeType: "proficient",
        icon: Database,
        context: "Optimized relational database queries, relational models, transactional integrity",
      },
      {
        name: "API Integration",
        badge: "Applied",
        badgeType: "proficient",
        icon: Layers,
        context: "Third-party webhook ingestion, Gemini AI SDK, external authentication flows",
      },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Core syntax, object-oriented design & systems foundations",
    icon: Code2,
    color: {
      bg: "bg-amber-50 dark:bg-amber-950/60",
      border: "border-amber-200/80 dark:border-amber-800/80",
      text: "text-amber-600 dark:text-amber-400",
      badge: "bg-amber-100/80 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300",
    },
    skills: [
      {
        name: "Python",
        badge: "Advanced",
        badgeType: "core",
        icon: PythonIcon,
        context: "Daily development language across Django, FastAPI, AI tools, and automation",
      },
      {
        name: "Java",
        badge: "OOP",
        badgeType: "core",
        icon: JavaIcon,
        context: "Object-oriented software design, algorithms, educational platform AlgoMinds",
      },
      {
        name: "JavaScript",
        badge: "ES6+",
        badgeType: "proficient",
        icon: JavaScriptIcon,
        context: "Interactive UI event handling, async fetch, client-side dynamic behaviors",
      },
      {
        name: "C++",
        badge: "Academic",
        badgeType: "proficient",
        icon: CppIcon,
        context: "Data structures, memory optimization, competitive problem-solving concepts",
      },
      {
        name: "C",
        badge: "Systems",
        badgeType: "proficient",
        icon: CIcon,
        context: "Foundational CS degree coursework in memory pointers, structures, and OS concepts",
      },
      {
        name: "PHP",
        badge: "Server-side",
        badgeType: "proficient",
        icon: PhpIcon,
        context: "Dynamic web rendering, backend script processing, and legacy web support",
      },
    ],
  },
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile",
    subtitle: "Cross-platform mobile apps & responsive user interfaces",
    icon: Smartphone,
    color: {
      bg: "bg-cyan-50 dark:bg-cyan-950/60",
      border: "border-cyan-200/80 dark:border-cyan-800/80",
      text: "text-cyan-600 dark:text-cyan-400",
      badge: "bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300",
    },
    skills: [
      {
        name: "Flutter",
        badge: "Mobile",
        badgeType: "framework",
        icon: FlutterIcon,
        context: "Cross-platform iOS/Android app engineered for Optical Store Management",
      },
      {
        name: "React / Next.js",
        badge: "Modern Web",
        badgeType: "framework",
        icon: ReactIcon,
        context: "Modern component architecture, server components, and responsive Web apps",
      },
      {
        name: "HTML5",
        badge: "Semantic",
        badgeType: "proficient",
        icon: Html5Icon,
        context: "Accessible HTML5 semantic structuring, SEO optimization, responsive layout tags",
      },
      {
        name: "CSS3 / Tailwind",
        badge: "Styling",
        badgeType: "proficient",
        icon: Css3Icon,
        context: "Responsive utility-first layouts, modern dark/light mode, CSS transitions",
      },
      {
        name: "JavaScript UI",
        badge: "DOM",
        badgeType: "proficient",
        icon: JavaScriptIcon,
        context: "Client-side interactive state, form validation, theme switching logic",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    subtitle: "Relational schema design, SQL queries & cloud data stores",
    icon: Database,
    color: {
      bg: "bg-indigo-50 dark:bg-indigo-950/60",
      border: "border-indigo-200/80 dark:border-indigo-800/80",
      text: "text-indigo-600 dark:text-indigo-400",
      badge: "bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300",
    },
    skills: [
      {
        name: "PostgreSQL",
        badge: "Relational",
        badgeType: "proficient",
        icon: PostgreSqlIcon,
        context: "ACID compliant relational database for structured multi-table schemas",
      },
      {
        name: "MySQL",
        badge: "Relational",
        badgeType: "proficient",
        icon: MySqlIcon,
        context: "Enterprise relational database queries, normalization, indexing and joins",
      },
      {
        name: "SQLite",
        badge: "Embedded",
        badgeType: "core",
        icon: SqliteIcon,
        context: "Lightweight local database management for rapid prototyping & Django testing",
      },
      {
        name: "Firebase",
        badge: "NoSQL",
        badgeType: "proficient",
        icon: FirebaseIcon,
        context: "Cloud Firestore, real-time data synchronization, and mobile backend auth",
      },
      {
        name: "DBMS / RDBMS",
        badge: "Foundations",
        badgeType: "certified",
        icon: DatabaseRdbmsIcon,
        context: "Comprehensive university academic training: ER modeling, normalization & transactions",
      },
    ],
  },
  {
    id: "security-tools",
    title: "Cloud, Security & Tools",
    subtitle: "Cisco-certified network defense, version control & DevOps tools",
    icon: ShieldCheck,
    color: {
      bg: "bg-purple-50 dark:bg-purple-950/60",
      border: "border-purple-200/80 dark:border-purple-800/80",
      text: "text-purple-600 dark:text-purple-400",
      badge: "bg-purple-100/80 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300",
    },
    skills: [
      {
        name: "Cisco Network Defense",
        badge: "Certified",
        badgeType: "certified",
        icon: CiscoSecurityIcon,
        context: "Cisco Networking Academy Certified in Network Defense & Endpoint Security (Apr 2026)",
      },
      {
        name: "Cybersecurity",
        badge: "Certified",
        badgeType: "certified",
        icon: ShieldCheck,
        context: "Endpoint protection, network defense principles, access control & threat mitigation",
      },
      {
        name: "Git",
        badge: "VCS",
        badgeType: "core",
        icon: GitIcon,
        context: "Daily version control, branching strategies, rebase, and code conflict resolution",
      },
      {
        name: "GitHub",
        badge: "Workflow",
        badgeType: "core",
        icon: GithubIcon,
        context: "Collaborative repository workflows, pull requests, project tracking, issue triage",
      },
      {
        name: "Postman",
        badge: "Testing",
        badgeType: "tool",
        icon: PostmanIcon,
        context: "Comprehensive REST API testing, authorization header validation, collection runs",
      },
      {
        name: "AWS Fundamentals",
        badge: "Cloud",
        badgeType: "tool",
        icon: AwsIcon,
        context: "Cloud hosting fundamentals, S3 asset storage concepts, basic compute architectures",
      },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  const totalSkillCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors"
      aria-label="Technical Skills and Capabilities"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/70 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills &amp; Expertise
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            AI integration, Python/Django backends, and cross-platform mobile apps are my core. Complementary engineering practices and certified cybersecurity fundamentals support them.
          </p>
        </div>

        {/* Dynamic Tech Marquee (Reference Inspiration) */}
        <div
          className="relative mb-12 py-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-2xs backdrop-blur-xs"
          aria-label="Technologies carousel"
        >
          {/* Subtle gradient side fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-6 sm:gap-8 px-4">
            {/* Duplicated list to create infinite loop without glitch */}
            {[...marqueeTechs, ...marqueeTechs].map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${idx}`}
                  className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shrink-0 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-2xs cursor-default"
                >
                  <TechIcon className="w-4 h-4 shrink-0" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/70 dark:border-slate-700/70 gap-1.5 max-w-full">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                activeCategory === "all"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>All Stack</span>
              <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono">
                {totalSkillCount}
              </span>
            </button>

            {skillCategories.map((cat) => {
              const CatIcon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <CatIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Cards Grid */}
        <div
          className={`grid gap-6 ${
            activeCategory === "all"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 max-w-3xl mx-auto"
          }`}
        >
          {displayedCategories.map((category) => {
            const CatIcon = category.icon;
            const isFeatured = category.prominent && activeCategory === "all";

            return (
              <div
                key={category.id}
                className={`rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 ${
                  isFeatured
                    ? "md:col-span-1 lg:col-span-1 ring-1 ring-blue-500/10 dark:ring-blue-500/20"
                    : ""
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl ${category.color.bg} ${category.color.text} border ${category.color.border} shrink-0 group-hover:scale-105 transition-transform duration-200`}
                      >
                        <CatIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {category.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    {category.prominent && (
                      <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                        Primary
                      </span>
                    )}
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const TechIcon = skill.icon;
                      const tooltipKey = `${category.id}-${skill.name}`;
                      const isTooltipOpen = activeTooltip === tooltipKey;

                      // Badge color helper
                      let badgeStyle = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300";
                      if (skill.badgeType === "core") {
                        badgeStyle = "bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50";
                      } else if (skill.badgeType === "certified") {
                        badgeStyle = "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50";
                      } else if (skill.badgeType === "framework") {
                        badgeStyle = "bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50";
                      }

                      return (
                        <div
                          key={skill.name}
                          className="relative"
                          onMouseEnter={() => setActiveTooltip(tooltipKey)}
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          <div
                            tabIndex={0}
                            role="button"
                            aria-label={`${skill.name} - ${skill.context}`}
                            onFocus={() => setActiveTooltip(tooltipKey)}
                            onBlur={() => setActiveTooltip(null)}
                            className="px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <TechIcon className="w-4 h-4 shrink-0" />
                            <span className="font-medium">{skill.name}</span>

                            {skill.badge && (
                              <span
                                className={`text-[10px] px-1.5 py-0.2 rounded-md font-semibold tracking-tight ${badgeStyle}`}
                              >
                                {skill.badge}
                              </span>
                            )}
                          </div>

                          {/* Hover Tooltip (Consistent & Informative) */}
                          {isTooltipOpen && (
                            <div
                              role="tooltip"
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 w-56 sm:w-64 p-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 text-xs shadow-xl border border-slate-700 dark:border-slate-600 pointer-events-none transition-opacity duration-150 animate-in fade-in zoom-in-95"
                            >
                              <div className="flex items-center gap-1.5 mb-1 text-[11px] font-semibold text-blue-400 dark:text-blue-300">
                                <Info className="w-3.5 h-3.5" />
                                <span>{skill.name}</span>
                              </div>
                              <p className="text-[11px] leading-relaxed text-slate-300 dark:text-slate-300">
                                {skill.context}
                              </p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Count / Meta */}
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                  <span>{category.skills.length} Technologies &amp; Methods</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Project-Verified</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Proficiency & Credibility Legend */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Engineering Proficiency Framework
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Every listed skill reflects verified project deployments, professional internships, or official certifications.
                </p>
              </div>
            </div>

            {/* Badges explanation */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                  Core
                </span>
                <span className="text-slate-600 dark:text-slate-400 text-[11px]">Primary stack</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50">
                  Certified
                </span>
                <span className="text-slate-600 dark:text-slate-400 text-[11px]">Cisco / Google credentials</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                  Framework
                </span>
                <span className="text-slate-600 dark:text-slate-400 text-[11px]">Architecture tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
