"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const examines = [
  { icon: "💬", title: "Customer Communication Workflows", description: "How your business currently handles incoming enquiries, responses, and ongoing communication with customers." },
  { icon: "🎯", title: "Lead Management Processes", description: "The systems and steps your team uses to capture, qualify, and convert leads into customers." },
  { icon: "⚙️", title: "Internal Operational Systems", description: "The workflows and processes that power your day-to-day operations behind the scenes." },
  { icon: "📅", title: "Scheduling and Task Management", description: "How your team organises, assigns, and tracks work across the business." },
  { icon: "🔗", title: "Current Software Infrastructure", description: "Every tool and platform your business currently uses, and how — or whether — they connect." },
  { icon: "📊", title: "Operational Reporting and Visibility", description: "How you currently measure performance and gain insight into how the business is running." },
];

const deliverables = [
  { number: "01", title: "Operational Workflow Review", description: "A detailed map of how your business currently operates, end to end." },
  { number: "02", title: "Modernisation Opportunities", description: "Clearly identified areas where operational systems can be significantly improved." },
  { number: "03", title: "Recommended System Architecture", description: "A blueprint for your modernised operating system, tailored specifically to your business." },
  { number: "04", title: "Implementation Roadmap", description: "A structured plan for how modernisation can be delivered, prioritised by impact." },
];

export default function OperationalAssessment() {
  const heroRef = useRef(null);
  const examinesRef = useRef(null);
  const deliverablesRef = useRef(null);
  const ctaRef = useRef(null);

  const examinesInView = useInView(examinesRef, { once: true, margin: "-80px" });
  const deliverablesInView = useInView(deliverablesRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <main className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center relative overflow-hidden">
                <span className="text-white font-black text-sm leading-none">R</span>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Revamply</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">
                ← Back to Home
              </Link>
              <a
                href="mailto:hello@revamply.com?subject=Operational Assessment Request"
                className="relative px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                <span className="relative z-10">Request Assessment</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        {/* Background orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 80% at center, transparent 30%, black 100%)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-xs font-medium text-white/60 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8"
          >
            Discover How Your Business{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Could Run More Efficiently
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/50 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            The Revamply Operational Assessment identifies how your company currently operates
            and where modernisation can significantly improve efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <a
              href="mailto:hello@revamply.com?subject=Operational Assessment Request"
              className="group relative inline-flex px-10 py-5 rounded-full bg-[#3B82F6] text-white font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Request Operational Assessment</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* What the assessment examines */}
      <section ref={examinesRef} className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={examinesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#3B82F6] text-xs uppercase tracking-widest font-medium mb-6"
            >
              What We Examine
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={examinesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[0.95] tracking-tight max-w-2xl"
            >
              The Assessment Examines Every Part of How You Operate
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {examines.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={examinesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
                className="group relative p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:bg-white/[0.03]"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
                />
                <div className="relative z-10">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section ref={deliverablesRef} className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#3B82F6] text-xs uppercase tracking-widest font-medium mb-6"
            >
              What You Receive
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[0.95] tracking-tight max-w-2xl"
            >
              A Structured Report With{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Clear Recommendations
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/50 text-lg mt-6 max-w-2xl"
            >
              Following the review, Revamply provides a structured report outlining
              modernisation opportunities and recommended improvements.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={deliverablesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                className="group relative p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] hover:border-[#3B82F6]/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 0% 50%, rgba(59,130,246,0.04) 0%, transparent 60%)" }}
                />
                <div className="relative z-10">
                  <span className="text-white/20 text-xs font-mono block mb-4">{item.number}</span>
                  <h3 className="text-white font-black text-xl lg:text-2xl mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300">{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-xs font-medium text-white/60 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            Get Started
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-8"
          >
            Start With an{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Operational Assessment
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-lg leading-relaxed mb-12"
          >
            Book a conversation with Revamply to explore how the Operational Assessment
            could identify meaningful improvements across your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="mailto:hello@revamply.com?subject=Operational Assessment Request"
              className="group relative px-10 py-5 rounded-full bg-[#3B82F6] text-white font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Request Operational Assessment</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <Link
              href="/"
              className="group px-10 py-5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] hover:border-white/30 text-white font-semibold text-base transition-all duration-300 hover:bg-white/[0.04]"
            >
              Back to Home
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Revamply. All rights reserved.</p>
          <Link href="/" className="text-white/40 hover:text-white text-xs transition-colors duration-200">
            revamply.com
          </Link>
        </div>
      </footer>
    </main>
  );
}
