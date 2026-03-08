"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 128;

const currentFrame = (index: number) =>
  `/frames/frame-${(index + 1).toString().padStart(4, "0")}.jpg`;

// 5-act story structure mapped to frame ranges
const CHAPTERS = [
  {
    id: 1,
    startFrame: 0,
    endFrame: 24,
    label: "01",
    eyebrow: "The Reality",
    title: "Running on\nYesterday's\nSystems",
    body: "Manual workflows. Disconnected software.\nOwner dependency. Hidden inefficiencies\nthat quietly erode your business value.",
    align: "left" as const,
  },
  {
    id: 2,
    startFrame: 25,
    endFrame: 50,
    label: "02",
    eyebrow: "The Assessment",
    title: "We Map\nEvery\nGap",
    body: "A deep operational audit before a single\nline of code. Every process, every tool,\nevery opportunity surfaced and quantified.",
    align: "right" as const,
  },
  {
    id: 3,
    startFrame: 51,
    endFrame: 76,
    label: "03",
    eyebrow: "The Architecture",
    title: "A Modern\nOperating\nSystem",
    body: "Designed specifically for your business.\nIntegration-first. Automation-driven.\nBuilt to scale without adding complexity.",
    align: "left" as const,
  },
  {
    id: 4,
    startFrame: 77,
    endFrame: 102,
    label: "04",
    eyebrow: "The Build",
    title: "Nothing Ships\nUntil It's\nRight",
    body: "We build. You approve. Every workflow\nredesigned from scratch using tools that\nactually fit how your business works.",
    align: "right" as const,
  },
  {
    id: 5,
    startFrame: 103,
    endFrame: 127,
    label: "05",
    eyebrow: "The Outcome",
    title: "Runs\nWithout\nYou",
    body: "More time. More growth. More business\nvalue. An operation that compounds — not\none that demands you every single day.",
    align: "left" as const,
  },
];

export default function ScrollAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameObjRef = useRef({ frame: 0 });
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getChapterForFrame = useCallback((frame: number) => {
    for (let i = 0; i < CHAPTERS.length; i++) {
      if (frame >= CHAPTERS[i].startFrame && frame <= CHAPTERS[i].endFrame) return i;
    }
    return CHAPTERS.length - 1;
  }, []);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const onLoad = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
      if (loadedCount === FRAME_COUNT) {
        setLoaded(true);
        const canvas = canvasRef.current;
        if (canvas && images[0]?.complete) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            canvas.width = images[0].naturalWidth || 1920;
            canvas.height = images[0].naturalHeight || 1080;
            ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
          }
        }
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = onLoad;
      img.onerror = onLoad;
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (index: number) => {
      const img = imagesRef.current[Math.max(0, Math.min(index, FRAME_COUNT - 1))];
      if (!img?.complete) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    drawFrame(0);

    // Main frame scrub — slow and cinematic
    gsap.to(frameObjRef.current, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        onUpdate: () => {
          const f = Math.round(frameObjRef.current.frame);
          drawFrame(f);
          setActiveChapter(getChapterForFrame(f));
        },
      },
    });

    // Chapter panel animations
    CHAPTERS.forEach((chapter, idx) => {
      const el = chapterRefs.current[idx];
      if (!el) return;

      const totalFrames = FRAME_COUNT - 1;
      const startPct = (chapter.startFrame / totalFrames) * 100;
      const endPct = (chapter.endFrame / totalFrames) * 100;
      const range = endPct - startPct;

      // Fade in with lift
      gsap.fromTo(
        el,
        { opacity: 0, y: 44, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: `${startPct}% top`,
            end: `${startPct + range * 0.2}% top`,
            scrub: 1.5,
          },
        }
      );

      // Fade out (all but last)
      if (idx < CHAPTERS.length - 1) {
        gsap.to(el, {
          opacity: 0,
          y: -44,
          filter: "blur(8px)",
          ease: "power3.in",
          scrollTrigger: {
            trigger: section,
            start: `${endPct - range * 0.2}% top`,
            end: `${endPct}% top`,
            scrub: 1.5,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [loaded, getChapterForFrame]);

  return (
    <section
      id="animation-section"
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: "800vh" }}
      aria-label="Transformation story"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Canvas — full bleed cover */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
          aria-hidden="true"
        />

        {/* Cinematic layered vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: [
              "radial-gradient(ellipse 80% 72% at 50% 50%, transparent 22%, rgba(0,0,0,0.6) 100%)",
              "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 78%, rgba(0,0,0,0.7) 100%)",
            ].join(", "),
          }}
        />

        {/* Per-chapter color tint overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[11] transition-all duration-[1200ms] ease-out"
          style={{
            background: [
              // Chapter 1: cool blue-grey (fragmented, cold)
              "rgba(20,20,40,0.18)",
              // Chapter 2: slight amber (scrutiny, audit)
              "rgba(40,30,10,0.12)",
              // Chapter 3: deep blue (architecture, precision)
              "rgba(10,20,50,0.15)",
              // Chapter 4: purple (build, energy)
              "rgba(30,15,50,0.12)",
              // Chapter 5: clear blue (outcome, clarity)
              "rgba(5,20,60,0.10)",
            ][activeChapter],
          }}
        />

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
            <div
              className="text-white/25 mb-8 font-mono"
              style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase" }}
            >
              Preparing Experience
            </div>
            <div className="relative w-48 h-px bg-white/10 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-white transition-all duration-150"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div
              className="text-white/20 mt-5 font-mono tabular-nums"
              style={{ fontSize: "11px" }}
            >
              {loadProgress}%
            </div>
          </div>
        )}

        {/* Chapter panels */}
        {CHAPTERS.map((chapter, idx) => (
          <div
            key={chapter.id}
            ref={(el) => { chapterRefs.current[idx] = el; }}
            className={`absolute top-1/2 -translate-y-1/2 z-20 opacity-0 ${
              chapter.align === "left"
                ? "left-8 sm:left-14 lg:left-20 xl:left-28"
                : "right-8 sm:right-14 lg:right-20 xl:right-28"
            }`}
            style={{ maxWidth: "min(400px, 36vw)" }}
          >
            {/* Eyebrow */}
            <div
              className="text-accent font-mono mb-5 flex items-center gap-3"
              style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase" }}
            >
              <span
                className="bg-accent inline-block"
                style={{ width: "16px", height: "1px" }}
              />
              {chapter.eyebrow}
            </div>

            {/* Chapter title */}
            <h2
              className="text-white font-black tracking-tight leading-[0.88] mb-6"
              style={{
                fontSize: "clamp(2rem, 3.6vw, 4.2rem)",
                whiteSpace: "pre-line",
              }}
            >
              {chapter.title}
            </h2>

            {/* Body copy */}
            <p
              className="text-white/45 leading-relaxed"
              style={{
                fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                whiteSpace: "pre-line",
                lineHeight: 1.85,
              }}
            >
              {chapter.body}
            </p>

            {/* Ghost chapter number */}
            <div
              className="absolute font-black text-white select-none pointer-events-none"
              style={{
                fontSize: "clamp(6rem, 11vw, 13rem)",
                lineHeight: 1,
                opacity: 0.03,
                bottom: "-2rem",
                [chapter.align === "left" ? "right" : "left"]: "-1.5rem",
              }}
            >
              {chapter.label}
            </div>
          </div>
        ))}

        {/* Side progress indicator */}
        <div className="absolute right-5 lg:right-7 top-1/2 -translate-y-1/2 z-30 flex flex-col items-end gap-4">
          {CHAPTERS.map((_, idx) => (
            <div
              key={idx}
              className="flex items-center"
              style={{
                opacity: idx === activeChapter ? 1 : idx < activeChapter ? 0.35 : 0.15,
                transition: "opacity 0.5s ease",
              }}
            >
              <div
                style={{
                  width: idx === activeChapter ? "22px" : "8px",
                  height: "2px",
                  background: idx === activeChapter ? "#3B82F6" : "rgba(255,255,255,0.45)",
                  borderRadius: "2px",
                  transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Top label */}
        <div
          className="absolute top-7 left-1/2 -translate-x-1/2 z-30"
          style={{
            fontSize: "9px",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.18)",
            fontFamily: "monospace",
          }}
        >
          The Transformation
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          style={{
            opacity: activeChapter >= CHAPTERS.length - 1 ? 0 : 0.4,
            transition: "opacity 0.7s ease",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "white",
              fontFamily: "monospace",
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: "1px",
              height: "32px",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
