import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { EducationCertifications } from "@/components/EducationCertifications";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <EducationCertifications />
      </main>
      <ContactFooter />
    </div>
  );
}
