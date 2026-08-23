import { ChevronRight } from "lucide-react";
export function Header() {
  return (
    <div className="flex justify-between w-full fixed z-50 border-b border-text-muted backdrop-blur-md items-center">
      <div className="flex items-center">
        <ChevronRight className="text-primary" />
        <h1 className="text-text-primary font-mono text-xl">Name</h1>
      </div>
      <nav className="flex gap-4 text-text-muted font-mono m-4 text-xl cursor-pointer">
        <a href="#about" className="hover:text-primary hover:underline">
          ABOUT
        </a>
        <a href="#projects" className="hover:text-primary hover:underline">
          PROJECTS
        </a>
        <a href="#projects" className="hover:text-primary hover:underline">
          SKILLS
        </a>
        <a href="#contact" className="hover:text-primary hover:underline">
          CONTACT
        </a>
      </nav>
    </div>
  );
}
