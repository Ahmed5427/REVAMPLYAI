"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const exitLoader = () => {
      const tl = gsap.timeline({ onComplete: () => onCompleteRef.current() });

      tl.to(countRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
      tl.fromTo(
        wordRefs.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" },
        "-=0.1"
      );
      tl.to({}, { duration: 0.5 });
      tl.to(topPanelRef.current, { y: "-100%", duration: 0.9, ease: "power3.inOut" });
      tl.to(bottomPanelRef.current, { y: "100%", duration: 0.9, ease: "power3.inOut" }, "<");
    };

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(exitLoader, 200);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9990] overflow-hidden">
      {/* Top panel */}
      <div
        ref={topPanelRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-black flex items-end justify-center pb-4"
      >
        {/* Counter */}
        <div
          ref={countRef}
          className="absolute bottom-8 right-10 lg:right-14 font-mono tabular-nums text-white/20"
          style={{ fontSize: "clamp(0.7rem, 1vw, 0.8rem)", letterSpacing: "0.15em" }}
        >
          {String(count).padStart(3, "0")}
        </div>

        {/* Brand word — hidden until exit */}
        <div className="overflow-hidden pb-1">
          <span
            ref={(el) => { wordRefs.current[0] = el; }}
            className="inline-block text-white font-black tracking-tight opacity-0"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1 }}
          >
            Modern
          </span>
        </div>
      </div>

      {/* Bottom panel */}
      <div
        ref={bottomPanelRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black flex items-start justify-center pt-4"
      >
        {/* Loading bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06] overflow-hidden">
          <div
            className="h-full bg-white/50"
            style={{ width: `${count}%`, transition: "width 0.05s linear" }}
          />
        </div>

        {/* Brand word */}
        <div className="overflow-hidden pt-1">
          <span
            ref={(el) => { wordRefs.current[1] = el; }}
            className="inline-block text-white font-black tracking-tight opacity-0"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1 }}
          >
            Operating
          </span>
        </div>

        {/* Bottom label */}
        <div
          className="absolute bottom-8 left-10 lg:left-14 font-mono text-white/20"
          style={{ fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase" }}
        >
          Revamply
        </div>
      </div>

      {/* Center line */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-px h-px bg-white/[0.06] z-10" />
    </div>
  );
}
