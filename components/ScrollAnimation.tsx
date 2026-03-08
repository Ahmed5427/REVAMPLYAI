"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 128;

const currentFrame = (index: number) =>
  `/frames/frame-${(index + 1).toString().padStart(4, "0")}.jpg`;

export default function ScrollAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameObjRef = useRef({ frame: 0 });
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);

  // Preload images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const onLoad = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
      if (loadedCount === FRAME_COUNT) {
        setLoaded(true);
        // Draw first frame
        const canvas = canvasRef.current;
        if (canvas && images[0]) {
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
      img.onerror = onLoad; // count errors too
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
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Initial draw
    drawFrame(0);

    // Main frame scrub animation
    const tl = gsap.to(frameObjRef.current, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: false,
        onUpdate: () => {
          drawFrame(Math.round(frameObjRef.current.frame));
        },
      },
      onUpdate: function () {
        drawFrame(Math.round(frameObjRef.current.frame));
      },
    });

    // Text fade animations
    const leftText = textLeftRef.current;
    const rightText = textRightRef.current;

    if (leftText) {
      gsap.fromTo(
        leftText,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "25% top",
            scrub: true,
          },
        }
      );
      gsap.to(leftText, {
        opacity: 0,
        x: -40,
        duration: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "35% top",
          end: "55% top",
          scrub: true,
        },
      });
    }

    if (rightText) {
      gsap.fromTo(
        rightText,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "60% top",
            end: "80% top",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, [loaded]);

  return (
    <section
      id="animation-section"
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: "400vh" }}
    >
      {/* Sticky canvas container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none z-10"
             style={{ background: "radial-gradient(ellipse at center, transparent 40%, black 100%)" }} />

        {/* Loading state */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black">
            <div className="text-white/40 text-xs uppercase tracking-widest mb-4">
              Loading Experience
            </div>
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-200"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div className="text-white/20 text-xs mt-3">{loadProgress}%</div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
            objectFit: "contain",
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
          aria-label="Animated visualization of business system transformation"
        />

        {/* Overlay vignette */}
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "radial-gradient(ellipse 70% 70% at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Left text — "From Fragmented Systems" */}
        <div
          ref={textLeftRef}
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 max-w-xs opacity-0"
        >
          <div className="text-white/30 text-xs uppercase tracking-widest mb-3">Before</div>
          <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
            From Fragmented
            <br />
            <span className="text-gradient-blue">Systems</span>
          </h3>
          <p className="text-white/40 text-sm mt-3 leading-relaxed">
            Manual workflows, disconnected software, operational bottlenecks
          </p>
          <div className="mt-4 w-8 h-px bg-accent" />
        </div>

        {/* Right text — "To Integrated Operations" */}
        <div
          ref={textRightRef}
          className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 max-w-xs text-right opacity-0"
        >
          <div className="text-accent text-xs uppercase tracking-widest mb-3">After</div>
          <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
            To Integrated
            <br />
            <span className="text-gradient-blue">Operations</span>
          </h3>
          <p className="text-white/40 text-sm mt-3 leading-relaxed">
            Automated systems, connected workflows, intelligent infrastructure
          </p>
          <div className="mt-4 ml-auto w-8 h-px bg-accent" />
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <p className="text-white/20 text-xs uppercase tracking-[0.3em] font-medium">
            Scroll to Explore
          </p>
        </div>

        {/* Section title overlay */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <p className="text-white/15 text-xs uppercase tracking-[0.3em] font-medium">
            The Transformation
          </p>
        </div>
      </div>
    </section>
  );
}
