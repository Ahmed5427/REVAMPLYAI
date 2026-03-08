"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const outcomes = [
  {
    icon: "⚡",
    title: "Faster Response Times",
    description: "Customer inquiries handled automatically in seconds, not hours. Every lead, every request, instantly acknowledged and routed.",
    metric: "10x",
    metricLabel: "Faster responses",
  },
  {
    icon: "⏱️",
    title: "Reduced Workload",
    description: "Hours of manual administrative work eliminated every week. Your team focuses on high-value work, not repetitive tasks.",
    metric: "40%",
    metricLabel: "Less admin time",
  },
  {
    icon: "🧭",
    title: "Improved Clarity",
    description: "Real-time operational dashboards give you visibility into every part of the business. No more guessing, no more flying blind.",
    metric: "360°",
    metricLabel: "Business visibility",
  },
  {
    icon: "📈",
    title: "Stronger Profitability",
    description: "Operational efficiency directly improves margins. Less waste, less overhead, more output from the same investment.",
    metric: "↑",
    metricLabel: "Margin improvement",
  },
  {
    icon: "🚀",
    title: "Easier to Scale",
    description: "Systems that grow with you. Add revenue without proportionally adding headcount. Scale the business, not the complexity.",
    metric: "3x",
    metricLabel: "Scale capacity",
  },
  {
    icon: "💎",
    title: "Increased Business Value",
    description: "A systematized business is worth more. Buyers pay premiums for companies that run without owner dependency.",
    metric: "↑",
    metricLabel: "Exit valuation",
  },
];

export default function Outcomes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="outcomes" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(59,130,246,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs uppercase tracking-widest font-medium mb-6"
          >
            Outcomes
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-4xl mx-auto mb-6"
          >
            What Happens When a Business{" "}
            <span className="text-gradient-blue">Modernizes Its Operating System</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            The businesses that modernize their operations don&apos;t just work better &mdash;
            they become fundamentally more valuable.
          </motion.p>
        </div>

        {/* Outcomes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: "easeOut" as const }}
              className="group relative p-6 rounded-2xl glass border border-white/[0.06] hover:border-accent/20 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.06) 0%, transparent 60%)" }}
              />

              <div className="relative z-10">
                {/* Metric */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{outcome.icon}</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-gradient-blue">{outcome.metric}</div>
                    <div className="text-white/30 text-xs">{outcome.metricLabel}</div>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{outcome.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
