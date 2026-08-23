export function Hero() {
  return (
    <div className="pt-40 m-4 flex flex-col gap-4">
      <div>
        <h1 className="text-5xl font-mono text-text-primary font-semibold">
          Firstname Lastname
        </h1>
        <h2 className="text-5xl font-mono text-secondary font-semibold">
          Computer Science
        </h2>
      </div>
      <div>
        <p className="text-2xl text-text-secondary">
          Major Year, at the University of South Carolina. I...
        </p>
      </div>
      <div className="flex gap-4 text-2xl font-mono text-text-muted">
        <button className=" border-border pl-4 pr-4 p-2 border-2 cursor-pointer hover:text-primary">
          VIEW PROJECTS
        </button>
        <button className=" border-border pl-4 pr-4 p-2 border-2 cursor-pointer hover:text-primary">
          GITHUB
        </button>
        <button className=" border-border pl-4 pr-4 p-2 border-2 cursor-pointer hover:text-primary">
          LINKEDIN
        </button>
        <button className=" border-border pl-4 pr-4 p-2 border-2 cursor-pointer hover:text-primary">
          EMAIL
        </button>
      </div>
    </div>
  );
}
