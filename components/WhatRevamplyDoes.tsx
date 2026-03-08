"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Automated Customer Communication",
    description: "Every customer touchpoint automated and personalised at scale.",
  },
  {
    number: "02",
    title: "Streamlined Workflows",
    description: "Multi-step business processes redesigned for maximum efficiency.",
  },
  {
    number: "03",
    title: "Operational Dashboards",
    description: "Real-time visibility into every aspect of business performance.",
  },
  {
    number: "04",
    title: "Integrated Business Software",
    description: "All tools connected into a unified, coherent operating stack.",
  },
  {
    number: "05",
    title: "Intelligent Customer Response",
    description: "AI-powered systems that respond, follow up, and convert automatically.",
  },
  {
    number: "06",
    title: "Cross-Department Automation",
    description: "Automation embedded across every department — not just one area.",
  },
];

export default function WhatRevamplyDoes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="what-we-do" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="section-line" />

      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header — two column */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start mb-20 lg:mb-28">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="section-number">Our Approach</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-black tracking-tight leading-[0.92]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
            >
              We Redesign the Systems That{" "}
              <span className="text-gradient-blue">Run Your Business</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="lg:pt-16"
          >
            <p
              className="text-white/40 leading-relaxed mb-6"
              style={{ fontSize: "clamp(0.9rem, 1.15vw, 1rem)", lineHeight: 1.85 }}
            >
              Revamply analyses how your company currently operates and redesigns the systems
              that power it. Rather than recommending software tools, we design complete operational
              systems that integrate modern automation, intelligent workflows, and connected infrastructure.
            </p>
            <div className="flex items-start gap-4">
              <div className="w-px h-8 bg-accent/50 shrink-0 mt-1" />
              <p
                className="text-white font-semibold"
                style={{ fontSize: "clamp(0.9rem, 1.15vw, 1rem)" }}
              >
                Objective: Create a business that operates more efficiently and scales more easily.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.06 + i * 0.06, ease: "easeOut" }}
              className="group relative bg-black p-8 hover:bg-white/[0.025] transition-all duration-400 cursor-default"
            >
              <div
                className="text-white/15 font-mono mb-5 group-hover:text-accent/40 transition-colors duration-300"
                style={{ fontSize: "11px", letterSpacing: "0.15em" }}
              >
                {cap.number}
              </div>
              <h3
                className="text-white font-bold mb-3 leading-tight"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
              >
                {cap.title}
              </h3>
              <p
                className="text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300"
                style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)", lineHeight: 1.75 }}
              >
                {cap.description}
              </p>
              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 flex justify-center"
        >
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/25 text-sm font-medium transition-all duration-300"
          >
            View Our Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
