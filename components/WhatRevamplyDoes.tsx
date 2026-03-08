"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const systems = [
  {
    title: "Automated Customer Communication",
    description: "Every customer touchpoint automated and personalized at scale.",
    icon: "💬",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Streamlined Workflows",
    description: "Multi-step business processes redesigned for maximum efficiency.",
    icon: "⚡",
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Operational Dashboards",
    description: "Real-time visibility into every aspect of your business performance.",
    icon: "📊",
    color: "from-green-500/20 to-transparent",
  },
  {
    title: "Integrated Business Software",
    description: "All your tools connected into a unified, coherent operating stack.",
    icon: "🔗",
    color: "from-orange-500/20 to-transparent",
  },
  {
    title: "Intelligent Customer Response",
    description: "AI-powered systems that respond, follow up, and convert automatically.",
    icon: "🤖",
    color: "from-pink-500/20 to-transparent",
  },
  {
    title: "Cross-Department Automation",
    description: "Automation embedded across every department, not just one area.",
    icon: "🔄",
    color: "from-cyan-500/20 to-transparent",
  },
];

export default function WhatRevamplyDoes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="what-we-do" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", pointerEvents: "none" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs uppercase tracking-widest font-medium mb-6"
            >
              Our Approach
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight"
            >
              We Redesign the Systems That{" "}
              <span className="text-gradient-blue">Run Businesses</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-2 lg:pt-16"
          >
            <p className="text-white/50 text-lg leading-relaxed mb-6">
              Revamply analyzes how your company currently operates and redesigns the systems
              that power your business. Rather than simply recommending software tools, we design
              complete operational systems that integrate modern automation, intelligent workflows,
              and connected infrastructure.
            </p>
            <p className="text-white font-semibold text-lg">
              Objective: Create a business that runs more efficiently and scales more easily.
            </p>
          </motion.div>
        </div>

        {/* Systems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {systems.map((system, i) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" as const }}
              className="group relative p-6 rounded-2xl glass border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* BG gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 inline-block">
                  {system.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                  {system.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {system.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/10 hover:border-accent/50 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            View Our Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
