export function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col gap-8 pt-2"
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-mono text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
          Firstname Lastname
        </h1>
        <h2 className="font-mono text-3xl font-semibold text-secondary sm:text-5xl">
          Computer Science
        </h2>
      </div>
      <p className="max-w-2xl text-lg text-text-secondary sm:text-2xl">
        Major Year, at the University of South Carolina. I...
      </p>
      <div className="flex flex-wrap gap-3 font-mono text-sm text-text-secondary sm:text-base">
        <a
          href="#projects"
          className="glow-border cursor-pointer border border-border px-4 py-2"
        >
          VIEW PROJECTS
        </a>
        <a
          href="https://github.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-border cursor-pointer border border-border px-4 py-2"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-border cursor-pointer border border-border px-4 py-2"
        >
          LINKEDIN
        </a>
        <a
          href="mailto:youremail@email.com"
          className="glow-border cursor-pointer border border-border px-4 py-2"
        >
          EMAIL
        </a>
      </div>
    </section>
  );
}
