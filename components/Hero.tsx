"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const scrollIndicator = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating orb animations
    if (orb1.current) {
      gsap.to(orb1.current, {
        y: -30,
        x: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    if (orb2.current) {
      gsap.to(orb2.current, {
        y: 20,
        x: -15,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    }
    // Scroll indicator bounce
    if (scrollIndicator.current) {
      gsap.to(scrollIndicator.current, {
        y: 12,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    }
  }, []);

  const handleScrollDown = () => {
    const el = document.querySelector("#animation-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black grid-bg"
    >
      {/* Background orbs */}
      <div
        ref={orb1}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb2}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-medium text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Operational Modernization Consultancy
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8"
      >
        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-8"
        >
          <span className="block text-white">Modern Operating</span>
          <span className="block text-white">Systems for</span>
          <span className="block">
            <span className="text-gradient-blue">Established</span>{" "}
            <span className="text-white">Businesses</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Revamply helps established companies modernize the systems that power
          their operations. By redesigning workflows and implementing intelligent
          automation, we help businesses operate more efficiently, scale more
          easily, and prepare for the future.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#final-cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 rounded-full bg-accent text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            <span className="relative z-10">Book a Discovery Call</span>
            <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            onClick={() => {
              const el = document.querySelector("#services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold text-sm hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300"
          >
            Request an Operational Assessment
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="mt-20 flex flex-wrap justify-center gap-8 lg:gap-16"
        >
          {[
            { value: "£1M–10M", label: "Revenue Range" },
            { value: "5+", label: "Platforms Built" },
            { value: "100%", label: "Systems-Focused" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <div
              ref={scrollIndicator}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-accent" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
