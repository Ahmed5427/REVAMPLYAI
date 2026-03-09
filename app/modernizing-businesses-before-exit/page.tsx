"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    icon: "⚡",
    title: "More Efficient",
    description: "Operational systems that run faster, with less manual intervention and fewer bottlenecks slowing the business down.",
  },
  {
    icon: "🎯",
    title: "Easier to Manage",
    description: "Clear processes, integrated software, and real-time visibility make it simpler for any manager — not just the founder — to run the business.",
  },
  {
    icon: "🔓",
    title: "Less Dependent on the Owner",
    description: "Systems that remove the owner from daily operations, making the business capable of running independently.",
  },
  {
    icon: "💎",
    title: "More Attractive to Potential Buyers",
    description: "Buyers pay a premium for businesses that are well-systemised, scalable, and not reliant on a single individual.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Built Before Modern Systems Existed",
    description: "Many successful companies were built long before modern operational infrastructure existed. What worked then often creates friction now — and that friction reduces value.",
  },
  {
    number: "02",
    title: "Buyers Value Systems, Not Just Revenue",
    description: "A business that runs on manual processes and owner knowledge is a risk to a buyer. A business with documented, automated systems is an asset.",
  },
  {
    number: "03",
    title: "Modernisation Strengthens the Foundation",
    description: "Operational modernisation doesn't just make the business more valuable — it makes it more stable, more predictable, and easier to transition.",
  },
];

export default function ModernizingBusinessesBeforeExit() {
  const examinesRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const examinesInView = useInView(examinesRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
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
                href="mailto:hello@revamply.com?subject=Discovery Conversation Request"
                className="relative px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                <span className="relative z-10">Book a Discovery Call</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
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
            For Business Owners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8"
          >
            Preparing Businesses for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the Next Chapter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/50 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Many successful companies were built long before modern operational systems existed.
            Revamply helps business owners modernise their operations before long-term growth
            or future transition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <a
              href="mailto:hello@revamply.com?subject=Discovery Conversation Request"
              className="group relative inline-flex px-10 py-5 rounded-full bg-[#3B82F6] text-white font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Book a Discovery Conversation</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* Why modernise before exit */}
      <section ref={examinesRef} className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={examinesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[#3B82F6] text-xs uppercase tracking-widest font-medium mb-6"
              >
                Why It Matters
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={examinesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[0.95] tracking-tight"
              >
                Before Selling a Company, Modernising Operational Infrastructure Can{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Significantly Improve How the Business Is Perceived by Buyers
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={examinesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-0 lg:pt-12 space-y-6"
            >
              {reasons.map((reason) => (
                <div key={reason.number} className="flex gap-6">
                  <span className="text-white/20 text-xs font-mono shrink-0 mt-1">{reason.number}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{reason.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What the business becomes */}
      <section ref={benefitsRef} className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#3B82F6] text-xs uppercase tracking-widest font-medium mb-6"
            >
              The Outcome
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[0.95] tracking-tight max-w-2xl mb-6"
            >
              Revamply Helps Business Owners Redesign Their Systems So the Company Becomes:
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                className="group relative p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] hover:border-[#3B82F6]/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 0% 50%, rgba(59,130,246,0.05) 0%, transparent 60%)" }}
                />
                <div className="relative z-10">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-white font-black text-xl lg:text-2xl mb-3 tracking-tight">{benefit.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300">{benefit.description}</p>
                </div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 p-8 lg:p-12 rounded-3xl border border-[#3B82F6]/20 bg-[#3B82F6]/5"
          >
            <p className="text-xl lg:text-2xl font-semibold text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
              Operational modernisation can strengthen the foundation of a business before long-term growth or future transition.{" "}
              <span className="text-white">It prepares the business for the next chapter.</span>
            </p>
          </motion.div>
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
            Take the Next Step
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-8"
          >
            Start a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Discovery Conversation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-lg leading-relaxed mb-12"
          >
            If you are considering future growth or an eventual exit, speak with Revamply
            to explore how operational modernisation could strengthen the value and appeal
            of your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="mailto:hello@revamply.com?subject=Discovery Conversation Request"
              className="group relative px-10 py-5 rounded-full bg-[#3B82F6] text-white font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Book a Discovery Conversation</span>
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
