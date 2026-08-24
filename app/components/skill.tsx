"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type Props = {
  title: string;
  details: string[];
};

export function Skill({ title, details }: Props) {
  const [expanded, setExpanded] = useState(true);
  const Icon = expanded ? ChevronDown : ChevronRight;

  return (
    <div className="panel overflow-hidden">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((open) => !open)}
        className={`flex w-full cursor-pointer items-center gap-1 bg-surface-elevated/70 px-3 py-3 text-left ${expanded ? "border-b border-border" : ""}`}
      >
        <Icon className="size-4 text-primary" />
        <h3 className="font-mono text-xs tracking-[0.14em] text-secondary">
          {title}
        </h3>
      </button>
      {expanded ? (
        <ul>
          {details.map((detail, index) => (
            <li
              className="flex items-center gap-3 border-b border-border px-4 py-2.5 last:border-b-0 hover:bg-surface-hover/70"
              key={detail}
            >
              <span className="w-6 shrink-0 font-mono text-xs text-primary">
                {index.toString().padStart(2, "0")}
              </span>
              <span className="text-sm text-text-primary">{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
