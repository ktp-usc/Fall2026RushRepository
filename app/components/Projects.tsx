import { Project } from "./Project";

export function Projects() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Project
        title={"Project Title"}
        description={"Short description of what this project does..."}
        technologies={["React", "Next.js", "TypeScript"]}
        liveLink={"https://your-project.vercel.app"}
        githubLink={"https://github.com/your-handle/project"}
      />
      <Project
        title={"Another Project"}
        description={"Another placeholder description..."}
        technologies={["Java", "PostgreSQL"]}
        liveLink={"https://your-other-project.vercel.app"}
        githubLink={"https://github.com/your-handle/another-project"}
      />
    </div>
  );
}
