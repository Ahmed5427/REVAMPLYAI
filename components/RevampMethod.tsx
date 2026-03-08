"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    letter: "R",
    title: "Review Operations",
    description:
      "We begin with a comprehensive review of your current operational systems. Every process, tool, workflow, and team structure is mapped and analyzed to identify the true state of your business.",
    number: "01",
  },
  {
    letter: "E",
    title: "Expose Inefficiencies",
    description:
      "Hidden inefficiencies are surfaced and quantified. We identify where time, money, and growth potential are being lost — and where manual work can be replaced with intelligent systems.",
    number: "02",
  },
  {
    letter: "V",
    title: "Visualize the Future System",
    description:
      "Before a single tool is implemented, we architect your future operating system. You'll see exactly what your business will look like when fully modernized.",
    number: "03",
  },
  {
    letter: "A",
    title: "Automate Workflows",
    description:
      "With the blueprint defined, we implement automation across your operations. Workflows are rebuilt from scratch using modern tooling designed to scale with your business.",
    number: "04",
  },
  {
    letter: "M",
    title: "Monitor Performance",
    description:
      "Your new operating system comes with full visibility. Real-time dashboards and performance metrics give you clarity across every area of the business.",
    number: "05",
  },
  {
    letter: "P",
    title: "Progressively Improve",
    description:
      "Modernization is never one-and-done. We establish continuous improvement cycles, ensuring your operating system evolves as your business grows.",
    number: "06",
  },
];

export default function RevampMethod() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wordRef.current) return;
    const letters = wordRef.current.querySelectorAll(".letter-animate");
    gsap.fromTo(
      letters,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: wordRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section id="revamp-method" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Decorative large text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.015] leading-none select-none pointer-events-none tracking-tight">
        REVAMP
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs uppercase tracking-widest font-medium mb-6"
          >
            The Framework
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl mb-6"
          >
            The REVAMP Operational Modernization{" "}
            <span className="text-gradient-blue">Framework</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl"
          >
            A structured, proven methodology for transforming how a business operates —
            from initial assessment to continuous improvement.
          </motion.p>
        </div>

        {/* Animated REVAMP letters */}
        <div ref={wordRef} className="flex gap-4 lg:gap-6 mb-20 overflow-hidden">
          {"REVAMP".split("").map((letter, i) => (
            <div
              key={i}
              className="letter-animate opacity-0 relative w-12 h-12 lg:w-16 lg:h-16 rounded-xl border border-accent/30 flex items-center justify-center"
              style={{ background: "rgba(59,130,246,0.06)" }}
            >
              <span className="text-accent font-black text-xl lg:text-2xl">{letter}</span>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent hidden lg:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.letter}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: "easeOut" as const }}
                className="group relative grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 p-6 lg:p-8 rounded-2xl glass border border-white/[0.06] hover:border-accent/20 transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Background accent on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 0% 50%, rgba(59,130,246,0.04) 0%, transparent 60%)" }}
                />

                {/* Letter + number */}
                <div className="flex items-center lg:items-start gap-4 lg:gap-0 lg:flex-col">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}
                  >
                    <span className="text-accent font-black text-3xl lg:text-4xl leading-none">
                      {step.letter}
                    </span>
                  </div>
                  <span className="text-white/20 text-xs font-mono lg:mt-3">{step.number}</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-white font-black text-xl lg:text-2xl mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300 max-w-2xl">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
