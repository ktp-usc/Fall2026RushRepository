import { MatrixBackground } from "./components/MatrixRain";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Divider } from "./components/divider";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function app() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-background/50" />
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-28 pt-4 sm:px-6 lg:px-8">
        <Hero />
        <Divider id="about" section={"ABOUT"}>
          <About />
        </Divider>
        <Divider id="skills" section={"SKILLS"}>
          <Skills />
        </Divider>
        <Divider id="projects" section={"PROJECTS"}>
          <Projects />
        </Divider>
        <Divider id="contact" section={"CONTACT"}>
          <Contact />
        </Divider>
      </main>
    </div>
  );
}
