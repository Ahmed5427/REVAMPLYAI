"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Manual Workflows",
    description: "Critical tasks performed by hand that should be automated, consuming irreplaceable time.",
  },
  {
    number: "02",
    title: "Disconnected Software",
    description: "Multiple platforms that don't communicate, creating data silos and duplicated effort.",
  },
  {
    number: "03",
    title: "Slow Response Times",
    description: "Customers wait too long because every process depends on manual human intervention.",
  },
  {
    number: "04",
    title: "Owner Dependency",
    description: "The business cannot operate without you — making scaling or exiting nearly impossible.",
  },
  {
    number: "05",
    title: "Administrative Bottlenecks",
    description: "Back-office processes strangling front-line capacity and limiting growth.",
  },
  {
    number: "06",
    title: "Eroded Business Value",
    description: "Operational inefficiencies reduce profitability, scalability, and eventual exit multiple.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="section-line" />

      {/* Ghost decoration */}
      <div
        className="ghost-text"
        style={{ fontSize: "22vw", right: "-4vw", top: "50%", transform: "translateY(-50%)" }}
      >
        PROBLEM
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-20 lg:mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="section-number">The Challenge</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-black tracking-tight leading-[0.92] mb-8"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
          >
            Successful Businesses Running on{" "}
            <span className="text-gradient-blue">Outdated Infrastructure</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="text-white/40 leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", maxWidth: "520px", lineHeight: 1.8 }}
          >
            Thousands of profitable businesses were built before modern digital infrastructure existed.
            Over time, these companies develop operational patterns that quietly limit growth
            and erode business value.
          </motion.p>
        </div>

        {/* Problems — editorial list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 + i * 0.07, ease: "easeOut" }}
              className="group relative flex gap-6 lg:gap-8 py-7 lg:py-8 border-b border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Number */}
              <span
                className="text-white/15 font-mono font-bold shrink-0 transition-colors duration-300 group-hover:text-accent/40"
                style={{ fontSize: "11px", letterSpacing: "0.1em", paddingTop: "3px" }}
              >
                {problem.number}
              </span>

              {/* Content */}
              <div>
                <h3
                  className="text-white font-bold mb-2 group-hover:text-white/90 transition-colors duration-300"
                  style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300"
                  style={{ fontSize: "clamp(0.82rem, 1vw, 0.9rem)", lineHeight: 1.75 }}
                >
                  {problem.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute left-0 bottom-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-16 lg:mt-20"
        >
          <div className="flex items-start gap-6 p-8 lg:p-10 rounded-2xl border border-accent/15 bg-accent/[0.04]">
            <div className="w-px self-stretch bg-accent/40 shrink-0" />
            <p
              className="text-white/70 font-semibold leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.7 }}
            >
              These inefficiencies often limit growth and reduce business value.{" "}
              <span className="text-white">
                Modern businesses require a modern operating system.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
