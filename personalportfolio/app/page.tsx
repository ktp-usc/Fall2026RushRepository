// import Image from "next/image";
import { MatrixBackground } from "./components/MatrixRain";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Divider } from "./components/divider";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
export default function app() {
  return (
    <div className="items-center flex flex-col">
      <MatrixBackground />
      <div className="fixed inset-0 bg-black/80 z-0"></div>
      <Header />
      <main className="z-10 inset-0 relative  flex flex-col">
        <Hero />
        <Divider section={"ABOUT"} />
        <About />
        <Divider section={"SKILLS"} />
        <Skills />
        <Divider section={"PROJECTS"} />
        <Divider section={"CONTACT"} />
      </main>
    </div>
  );
}
