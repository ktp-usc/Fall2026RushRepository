import { Skill } from "./skill";

const languages = [
  "Java",
  "TypeScript",
  "JavaScript",
  "SQL",
  "C++",
  "HTML/CSS",
];
const frameworks = [
  "React",
  "Next.js",
  "Express.js",
  "JavaFX",
  "Jest",
  "SuperTest",
  "Tailwind CSS",
];
const tools = [
  "PostgreSQL",
  "Prisma",
  "Neon",
  "Git / GitHub",
  "Linux",
  "Vercel",
  "REST APIs",
  "JWT / Auth",
];

export function Skills() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Skill title={"LANGUAGES"} details={languages} />
      <Skill title={"FRAMEWORKS / LIBRARIES"} details={frameworks} />
      <Skill title={"TOOLS / TECHNOLOGIES"} details={tools} />
    </div>
  );
}
