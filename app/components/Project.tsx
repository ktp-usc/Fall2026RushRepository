type Props = {
  title?: string | null;
  description?: string | null;
  technologies?: string[] | null;
  liveLink?: string | null;
  githubLink?: string | null;
};

export function Project({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
}: Props) {
  const techList = technologies?.filter(Boolean) ?? [];

  return (
    <article className="panel flex flex-col">
      {title ? (
        <div className="panel-title">
          <span className="text-primary">▸</span>
          {title}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {description ? (
          <p className="text-text-primary">{description}</p>
        ) : null}
        {techList.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {techList.map((tech) => (
              <li
                key={tech}
                className="border border-border bg-surface-elevated/70 px-2 py-1 font-mono text-xs tracking-wide text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 font-mono text-sm text-text-secondary">
          <a
            href={liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-border cursor-pointer border border-border px-3 py-1.5"
          >
            LIVE
          </a>
          <a
            href={githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-border cursor-pointer border border-border px-3 py-1.5"
          >
            GITHUB
          </a>
        </div>
      </div>
    </article>
  );
}
