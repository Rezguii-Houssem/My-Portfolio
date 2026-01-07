import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AnimatedShaderBackground from "@/components/animated-shader-background";
import EntryScreen from "@/components/entry-screen";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-slate-200 selection:bg-blue-500/30 relative overflow-hidden">
      <EntryScreen />
      <div className="fixed inset-0 z-0">
        <AnimatedShaderBackground />
      </div>
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
