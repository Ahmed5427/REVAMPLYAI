"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    letter: "R",
    title: "Review Operations",
    description:
      "We begin with a comprehensive review of your current operational systems. Every process, tool, workflow, and team structure is mapped and analysed to identify the true state of your business.",
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
    title: "Visualise the Future System",
    description:
      "Before a single tool is implemented, we architect your future operating system. You'll see exactly what your business will look like when fully modernised.",
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
      "Modernisation is never one-and-done. We establish continuous improvement cycles, ensuring your operating system evolves as your business grows.",
    number: "06",
  },
];

export default function RevampMethod() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const lettersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lettersRef.current) return;
    const letters = lettersRef.current.querySelectorAll(".letter-item");
    gsap.fromTo(
      letters,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: lettersRef.current,
          start: "top 82%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section id="revamp-method" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="section-line" />

      {/* Ghost REVAMP decoration */}
      <div
        className="ghost-text"
        style={{ fontSize: "24vw", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}
      >
        REVAMP
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-20 lg:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="section-number">The Framework</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-black tracking-tight leading-[0.92]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
            >
              The REVAMP{" "}
              <span className="text-gradient-blue">Methodology</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="text-white/40 leading-relaxed lg:pt-16"
            style={{ fontSize: "clamp(0.9rem, 1.15vw, 1rem)", lineHeight: 1.85 }}
          >
            A structured, proven methodology for transforming how a business operates —
            from initial assessment to continuous improvement. Every engagement follows
            the same rigorous six-step process.
          </motion.p>
        </div>

        {/* Animated REVAMP letters */}
        <div ref={lettersRef} className="flex gap-3 lg:gap-4 mb-16 lg:mb-20">
          {"REVAMP".split("").map((letter, i) => (
            <div
              key={i}
              className="letter-item opacity-0 relative flex flex-col items-center justify-center"
              style={{
                width: "clamp(44px, 7vw, 72px)",
                height: "clamp(44px, 7vw, 72px)",
                borderRadius: "12px",
                background: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.18)",
              }}
            >
              <span
                className="text-accent font-black leading-none"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              className="group relative grid grid-cols-[60px_1fr] lg:grid-cols-[100px_260px_1fr] items-start gap-0 py-8 border-b border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Number */}
              <div
                className="text-white/15 font-mono group-hover:text-accent/40 transition-colors duration-300 pt-1"
                style={{ fontSize: "11px", letterSpacing: "0.12em" }}
              >
                {step.number}
              </div>

              {/* Letter badge (desktop) */}
              <div className="hidden lg:flex items-center pt-0.5">
                <div
                  className="flex items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-accent/15"
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "rgba(59,130,246,0.07)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                >
                  <span className="text-accent font-black text-2xl leading-none">{step.letter}</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-2">
                <h3
                  className="text-white font-bold mb-2 group-hover:text-white/90 transition-colors duration-300"
                  style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300"
                  style={{
                    fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
                    lineHeight: 1.8,
                    maxWidth: "560px",
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute left-0 bottom-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
