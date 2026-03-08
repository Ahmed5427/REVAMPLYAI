"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!glowRef.current) return;
    gsap.to(glowRef.current, {
      scale: 1.15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="final-cta"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Frame 127 — cinematic closing frame */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/frames/frame-0128.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.22, zIndex: 0 }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 90% at 50% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.88) 100%)",
          zIndex: 1,
        }}
      />

      {/* Blue glow on top */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0.05) 45%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 2,
        }}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" style={{ zIndex: 2 }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-32 text-center" style={{ zIndex: 3 }}>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 mb-12"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
          />
          <span
            className="text-white/40 font-mono"
            style={{ fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase" }}
          >
            Limited Engagements Available
          </span>
        </motion.div>

        {/* Giant headline */}
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-black tracking-tight leading-[0.88] mb-8"
          style={{ fontSize: "clamp(3rem, 8.5vw, 9rem)" }}
        >
          Start Modernising{" "}
          <span className="text-gradient-blue">Your Business</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="text-white/40 leading-relaxed mb-14 mx-auto"
          style={{
            fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
            maxWidth: "520px",
            lineHeight: 1.85,
          }}
        >
          Every successful company eventually reaches a point where its operational
          systems must evolve. Revamply helps established businesses redesign the
          systems that power their operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="mailto:hello@revamply.com"
            className="group relative px-10 py-4.5 rounded-full bg-accent text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
          >
            <span className="relative z-10">Book a Discovery Call</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          </a>

          <a
            href="mailto:hello@revamply.com?subject=Operational Assessment Request"
            className="group flex items-center gap-3 px-10 py-4.5 rounded-full border border-white/12 text-white/55 hover:text-white hover:border-white/25 transition-all duration-300"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
          >
            Request an Assessment
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 lg:gap-10"
        >
          {[
            "No long-term commitment",
            "Free initial consultation",
            "Results-focused",
          ].map((text, i) => (
            <span
              key={i}
              className="text-white/20 font-mono"
              style={{ fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase" }}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
