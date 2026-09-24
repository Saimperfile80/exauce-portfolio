import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { Philosophy } from "@/components/main/philosophy";
import { Skills } from "@/components/main/skills";
import { AIArchitecture } from "@/components/main/ai-architecture";
import { Encryption } from "@/components/main/encryption";
import { Projects } from "@/components/main/projects";
import { BackgroundSection } from "@/components/main/background-section";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12 sm:gap-20">
        <Hero />
        <About />
        <Philosophy />
        <Skills />
        <AIArchitecture />
        <Encryption />
        <Projects />
        <BackgroundSection />
        <Contact />
      </div>
    </main>
  );
}
