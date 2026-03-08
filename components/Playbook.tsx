"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Start With Broken Systems",
    description:
      "Every transformation begins with an honest audit of what's broken. The first step isn't to build — it's to understand the depth of the dysfunction. Only then can you design something better.",
  },
  {
    number: "02",
    title: "Deconstruct Everything",
    description:
      "Before rebuilding, you must pull the existing system apart. Every process, every assumption, every 'we've always done it this way' — everything gets examined and challenged.",
  },
  {
    number: "03",
    title: "Replace Work With Systems",
    description:
      "The goal is never to work harder. It's to build systems so robust that manual work becomes the exception, not the rule. Every repeatable task is a candidate for automation.",
  },
  {
    number: "04",
    title: "Move Faster Than the Market",
    description:
      "Speed is a competitive advantage. The businesses that implement modern operating systems first will outcompete those that wait. Urgency of modernization isn't a luxury — it's survival.",
  },
  {
    number: "05",
    title: "Small Teams. Big Output.",
    description:
      "A well-systemized business of 15 people can outperform a disorganized company of 150. Leverage technology and intelligent workflows to maximize the output of every person.",
  },
  {
    number: "06",
    title: "Build Platforms, Not Just Products",
    description:
      "Think in ecosystems, not isolated solutions. The most powerful businesses are built on platforms that compound value over time, not one-off products that solve single problems.",
  },
  {
    number: "07",
    title: "Own the Experience",
    description:
      "Don't just automate — design. Every customer touchpoint, every internal process should be intentionally designed, not just digitized. Systemization is the opportunity to elevate the entire experience.",
  },
  {
    number: "08",
    title: "Solve Pain, Not Ideas",
    description:
      "The best systems solve real, felt pain — not theoretical inefficiencies. Start with what genuinely hurts the business and work from there. Pain is the compass.",
  },
  {
    number: "09",
    title: "Think in Decades",
    description:
      "Operational modernization isn't a project — it's a posture. The businesses that win long-term are the ones that commit to continuous evolution, not one-time fixes.",
  },
  {
    number: "10",
    title: "Rebuild the Operating System",
    description:
      "Don't patch the old system — rebuild it. Incremental fixes on a broken foundation produce incremental results. The most impactful transformation comes from fundamentally rethinking how the business runs.",
  },
];

export default function Playbook() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="playbook" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(59,130,246,0.04) 0%, transparent 100%)",
        }}
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
              The Playbook
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight"
            >
              The Revamply{" "}
              <span className="text-gradient-blue">Playbook</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-0 lg:pt-16"
          >
            <p className="text-white/50 text-lg leading-relaxed">
              How Duncan MacDonald builds modern companies. 10 principles that guide every
              engagement, platform, and decision at Revamply.
            </p>
          </motion.div>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.04, ease: "easeOut" as const }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left p-6 lg:p-8 rounded-2xl border transition-all duration-400 group ${
                  openIndex === i
                    ? "border-accent/30 bg-accent/5"
                    : "border-white/[0.06] glass hover:border-white/[0.12]"
                }`}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="text-white/20 text-xs font-mono shrink-0 group-hover:text-accent transition-colors duration-300" style={{ color: openIndex === i ? "#3B82F6" : undefined }}>
                      {principle.number}
                    </span>
                    <h3 className={`font-black text-xl lg:text-2xl tracking-tight transition-colors duration-300 ${
                      openIndex === i ? "text-white" : "text-white/80 group-hover:text-white"
                    }`}>
                      {principle.title}
                    </h3>
                  </div>

                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "border-accent bg-accent rotate-45"
                      : "border-white/20 group-hover:border-white/40"
                  }`}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" as const }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/50 text-base leading-relaxed mt-4 pl-12 max-w-3xl">
                        {principle.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
