import { ChevronRight } from "lucide-react";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center font-mono">
          <ChevronRight className="size-5 text-primary" />
          <span className="text-sm tracking-wide text-text-muted">~/</span>
          <h1 className="text-lg text-text-primary sm:text-xl">Name</h1>
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 font-mono text-xs text-text-muted sm:text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary focus-visible:text-primary hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
