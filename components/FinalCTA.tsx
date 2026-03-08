"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="final-cta" ref={ref} className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-50" />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 80% at center, transparent 30%, black 100%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8 py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-medium text-white/60 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Limited Engagements Available
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" as const }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8"
        >
          Start Modernizing{" "}
          <span className="text-gradient-blue">Your Business</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-white/50 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Every successful company eventually reaches a point where its operational systems must evolve.
          Revamply helps established businesses redesign the systems that power their operations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="mailto:hello@revamply.com"
            className="group relative px-10 py-5 rounded-full bg-accent text-white font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:scale-105"
          >
            <span className="relative z-10">Book a Discovery Call</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="mailto:hello@revamply.com?subject=Operational Assessment Request"
            className="group px-10 py-5 rounded-full glass border border-white/10 hover:border-white/30 text-white font-semibold text-base transition-all duration-300 hover:bg-white/[0.04]"
          >
            Request an Assessment
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 text-white/25 text-xs uppercase tracking-widest"
        >
          <span>No long-term commitment required</span>
          <span className="hidden sm:block">·</span>
          <span>Free initial consultation</span>
          <span className="hidden sm:block">·</span>
          <span>Results-focused engagement</span>
        </motion.div>
      </div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </section>
  );
}
