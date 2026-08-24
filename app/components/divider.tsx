"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type Props = {
  section: string;
  id?: string;
  children?: ReactNode;
};

export function Divider({ section, id, children }: Props) {
  const [expanded, setExpanded] = useState(true);
  const Icon = expanded ? ChevronDown : ChevronRight;

  useEffect(() => {
    if (!id) return;

    const openAndScroll = () => {
      setExpanded(true);
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    };

    const onHashChange = () => {
      if (window.location.hash === `#${id}`) openAndScroll();
    };

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      if (anchor.getAttribute("href") !== `#${id}`) return;

      event.preventDefault();
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`);
      }
      openAndScroll();
    };

    if (window.location.hash === `#${id}`) setExpanded(true);

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, [id]);

  return (
    <section id={id} className="scroll-mt-28">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((open) => !open)}
        className={`flex w-full cursor-pointer items-center gap-3 text-left ${expanded ? "mb-6" : ""}`}
      >
        <Icon className="size-5 shrink-0 text-primary" />
        <h2 className="font-mono text-sm tracking-[0.32em] text-primary sm:text-base">
          {section}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
      </button>
      {expanded ? children : null}
    </section>
  );
}
