"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const platforms = [
  {
    index: "01",
    name: "DealerBids",
    category: "Automotive",
    description:
      "Digital wholesale vehicle marketplace. Eliminated the inefficiencies of traditional auction-based trading with a modern, digital-first platform.",
    tags: ["Marketplace", "B2B", "Automotive"],
    status: "Live",
    accent: "#3B82F6",
  },
  {
    index: "02",
    name: "LotPilot",
    category: "Automotive AI",
    description:
      "AI-powered dealership operating platform. Gives dealers the intelligence and automation to run operations like a modern tech company.",
    tags: ["AI", "SaaS", "Automation"],
    status: "Live",
    accent: "#8B5CF6",
  },
  {
    index: "03",
    name: "CarConnective",
    category: "Connected Vehicles",
    description:
      "Connected vehicle intelligence platform bringing data-driven insights to vehicle ownership and dealership relationships.",
    tags: ["Connected", "Intelligence", "Data"],
    status: "Launching Soon",
    accent: "#06B6D4",
  },
  {
    index: "04",
    name: "RoomService AI",
    category: "Hospitality",
    description:
      "AI-powered hospitality guest communication platform. Automates the entire guest journey from booking to checkout.",
    tags: ["AI", "Hospitality", "Communication"],
    status: "Live",
    accent: "#F59E0B",
  },
  {
    index: "05",
    name: "HospitalityOS",
    category: "Hospitality",
    description:
      "Complete operating system for hospitality businesses. The full-stack solution for hotels and service businesses to run on modern infrastructure.",
    tags: ["Platform", "Hospitality", "OS"],
    status: "In Development",
    accent: "#10B981",
  },
];

export default function TechPlatforms() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Measure how far we need to scroll horizontally
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 120}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="platforms"
      ref={sectionRef}
      className="relative bg-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="section-line" />

        {/* Header */}
        <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-12 pb-10 pt-16 flex items-end justify-between w-full shrink-0">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="section-number">Technology Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-black tracking-tight leading-[0.92]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}
            >
              Platforms Built to{" "}
              <span className="text-gradient-blue">Prove the Method</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2 text-white/25 font-mono shrink-0"
            style={{ fontSize: "10px", letterSpacing: "0.3em" }}
          >
            ← Scroll →
          </motion.div>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex gap-5 px-6 lg:px-12 pb-16 items-stretch"
          style={{ width: "max-content" }}
        >
          {platforms.map((p) => (
            <div
              key={p.name}
              className="relative rounded-2xl overflow-hidden group flex flex-col"
              style={{
                width: "clamp(280px, 32vw, 400px)",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.025)",
                flexShrink: 0,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
              />

              {/* Hover bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${p.accent}12 0%, transparent 70%)` }}
              />

              <div className="relative z-10 p-8 flex flex-col flex-1">
                {/* Index + category */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-white/15 font-mono"
                    style={{ fontSize: "11px", letterSpacing: "0.15em" }}
                  >
                    {p.index}
                  </span>
                  <span
                    className="text-white/30 font-mono"
                    style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="text-white font-black tracking-tight mb-4 leading-none"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}
                >
                  {p.name}
                </h3>

                {/* Description */}
                <p
                  className="text-white/35 leading-relaxed flex-1 group-hover:text-white/50 transition-colors duration-300"
                  style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)", lineHeight: 1.8 }}
                >
                  {p.description}
                </p>

                {/* Tags + status */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-white/30 rounded-full px-2.5 py-0.5"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.1em",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="shrink-0 ml-3 rounded-full px-2.5 py-1 font-mono"
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      background: `${p.accent}15`,
                      color: p.accent,
                      border: `1px solid ${p.accent}25`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* End spacer */}
          <div style={{ width: "clamp(280px, 32vw, 400px)", flexShrink: 0 }} className="flex items-center justify-center">
            <div className="text-center">
              <div
                className="text-white/10 font-black tracking-tight leading-none mb-4"
                style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
              >
                +More
              </div>
              <p className="text-white/20 font-mono" style={{ fontSize: "10px", letterSpacing: "0.3em" }}>
                More coming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
