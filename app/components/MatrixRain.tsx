"use client";
import { useEffect, useRef } from "react";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const glyphs =
      "アイウエオカキクケコサシスセソタチツテト0123456789<>/\\|=+*";
    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    const fontSize = 16;
    let raf = 0;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(window.innerWidth / (fontSize * 1.6));
      drops = Array.from({ length: columns }, () => Math.random() * -60);
      speeds = Array.from(
        { length: columns },
        () => 0.25 + Math.random() * 0.45,
      );
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 55) return;
      last = t;

      ctx.fillStyle = "rgba(9, 13, 11, 0.16)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < columns; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)] ?? "0";
        const x = i * fontSize * 1.6;
        const y = (drops[i] ?? 0) * fontSize;
        ctx.fillStyle =
          Math.random() > 0.99 ? "rgba(57,255,136,0.22)" : "rgba(57,255,136,0.07)";
        ctx.fillText(char, x, y);
        if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
        drops[i] = (drops[i] ?? 0) + (speeds[i] ?? 0.3);
      }
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    resize();
    window.addEventListener("resize", resize);
    if (!reduced) raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 opacity-[0.8]" />
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_45%,color-mix(in_srgb,var(--color-background)_10%,transparent)_100%)]" />
    </div>
  );
}
