"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";

// Split headline words for staggered reveal
const HEADLINE = ["Modern", "Operating", "Systems"];

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.1,
      delay: 0.5 + i * 0.14,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.9 + i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orb1.current) {
      gsap.to(orb1.current, {
        y: -40,
        x: 25,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    if (orb2.current) {
      gsap.to(orb2.current, {
        y: 30,
        x: -20,
        duration: 13,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3,
      });
    }
    // Animated underline extends after headline
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.2, delay: 1.6, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.028,
          mixBlendMode: "overlay",
        }}
      />

      {/* Ambient orbs */}
      <div
        ref={orb1}
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "15%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 68%)",
          filter: "blur(50px)",
        }}
      />
      <div
        ref={orb2}
        className="absolute pointer-events-none"
        style={{
          bottom: "18%",
          right: "12%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 68%)",
          filter: "blur(60px)",
        }}
      />

      {/* Horizontal rule — top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]"
        style={{ transformOrigin: "left center" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 pt-32 pb-24">

        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="inline-block w-6 h-px bg-accent"
          />
          <span
            className="text-white/40 font-mono"
            style={{ fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase" }}
          >
            Operational Modernisation Consultancy
          </span>
        </motion.div>

        {/* Headline — split word reveal */}
        <div className="mb-6">
          <div className="overflow-hidden mb-2">
            <div className="flex flex-wrap gap-x-[0.22em]">
              {HEADLINE.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="show"
                  className="inline-block text-white font-black tracking-tight leading-[0.9]"
                  style={{ fontSize: "clamp(3.5rem, 9.5vw, 10rem)" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Second line — "for Established" with animated underline */}
          <div className="overflow-hidden">
            <motion.div
              custom={3}
              variants={wordVariants}
              initial="hidden"
              animate="show"
              className="inline-flex items-baseline gap-[0.22em]"
            >
              <span
                className="text-white/35 font-black tracking-tight leading-[0.9]"
                style={{ fontSize: "clamp(3.5rem, 9.5vw, 10rem)" }}
              >
                for
              </span>
              <span className="relative">
                <span
                  className="text-white font-black tracking-tight leading-[0.9]"
                  style={{ fontSize: "clamp(3.5rem, 9.5vw, 10rem)" }}
                >
                  Established
                </span>
                <div
                  ref={lineRef}
                  className="absolute bg-accent"
                  style={{
                    bottom: "0.06em",
                    left: 0,
                    right: 0,
                    height: "3px",
                    transformOrigin: "left center",
                  }}
                />
              </span>
            </motion.div>
          </div>

          {/* Third line — Businesses */}
          <div className="overflow-hidden">
            <motion.span
              custom={4}
              variants={wordVariants}
              initial="hidden"
              animate="show"
              className="inline-block text-white/35 font-black tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 9.5vw, 10rem)" }}
            >
              Businesses
            </motion.span>
          </div>
        </div>

        {/* Descriptor + CTA row */}
        <div className="mt-16 flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">
          {/* Sub-copy */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/40 leading-relaxed max-w-sm lg:max-w-xs"
            style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)", lineHeight: 1.8 }}
          >
            We redesign the operational systems inside established companies — workflows,
            automations, and infrastructure — so they scale without adding complexity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => {
                document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-7 py-3.5 bg-accent text-white text-sm font-semibold overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]"
            >
              <span className="relative z-10">Book a Discovery Call</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
            </button>

            <button
              onClick={() => {
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-3 px-7 py-3.5 text-white/50 text-sm font-medium rounded-full border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-300"
            >
              View Services
              <span className="transition-transform duration-300 group-hover:translate-x-1 opacity-60">→</span>
            </button>
          </motion.div>
        </div>

        {/* Stats row — bottom */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 pt-8 border-t border-white/[0.06] flex flex-wrap gap-10 lg:gap-16"
        >
          {[
            { value: "£1M–10M", label: "Revenue Range" },
            { value: "5+", label: "Platforms Built" },
            { value: "100%", label: "Systems-First" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-white font-black leading-none mb-2"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/30 font-mono"
                style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 right-10 lg:right-14 z-10 flex flex-col items-center gap-3"
      >
        <div
          className="text-white/25 font-mono"
          style={{
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </div>
        <div
          className="w-px bg-gradient-to-b from-white/30 to-transparent"
          style={{ height: "48px" }}
        />
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
