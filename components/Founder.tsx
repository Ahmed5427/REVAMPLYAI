"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const companies = [
  {
    year: "2019",
    name: "DealerBids",
    role: "Founder",
    description: "Digital wholesale vehicle marketplace — solving fragmented dealer-to-dealer transactions",
    status: "Active",
  },
  {
    year: "2021",
    name: "LotPilot",
    role: "Founder",
    description: "AI-powered dealership operating platform — intelligent automation for automotive retail",
    status: "Active",
  },
  {
    year: "2022",
    name: "RoomService AI",
    role: "Founder",
    description: "Hospitality guest communication platform — automated concierge at scale",
    status: "Active",
  },
  {
    year: "2023",
    name: "CarConnective",
    role: "Founder",
    description: "Connected vehicle intelligence platform — real-time fleet and buyer-intent data",
    status: "Launching Soon",
  },
  {
    year: "2024",
    name: "HospitalityOS",
    role: "Founder",
    description: "Complete operating system for hospitality businesses",
    status: "In Development",
  },
];

const statusStyles: Record<string, string> = {
  Active: "text-emerald-400/80 border-emerald-500/20 bg-emerald-500/[0.06]",
  "Launching Soon": "text-accent/80 border-accent/20 bg-accent/[0.06]",
  "In Development": "text-white/30 border-white/10 bg-white/[0.04]",
};

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="founder"
      ref={ref}
      className="relative py-32 lg:py-40 bg-black overflow-hidden"
    >
      <div className="section-line" />

      {/* Ghost background text */}
      <div
        className="ghost-text absolute select-none pointer-events-none font-black"
        style={{
          fontSize: "clamp(6rem, 18vw, 22rem)",
          lineHeight: 1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
          opacity: 0.018,
        }}
      >
        FOUNDER
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="section-number">The Founder</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className="text-white font-black tracking-tight leading-[0.92]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
            >
              Built by an Operator{" "}
              <span className="text-gradient-blue">Who Knows the Problem</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/35 leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.85 }}
            >
              Duncan MacDonald is a multi-company founder who has built software
              platforms from scratch across automotive and hospitality industries.
              Rather than consulting from the outside, he has lived the operational
              challenge — bootstrapping systems that modernise how businesses actually run.
            </motion.p>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[480px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left — Portrait card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          >
            {/* Portrait placeholder */}
            <div
              className="relative w-full overflow-hidden mb-8"
              style={{
                aspectRatio: "4 / 5",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Crosshair corner decorations */}
              {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-5 h-5 pointer-events-none`}
                  style={{
                    borderTop: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    borderBottom: i >= 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    borderLeft: i % 2 === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    borderRight: i % 2 === 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  }}
                />
              ))}

              {/* Monogram */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="flex items-center justify-center rounded-full mb-5"
                  style={{
                    width: "72px",
                    height: "72px",
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.2)",
                  }}
                >
                  <span
                    className="text-accent font-black"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1 }}
                  >
                    D
                  </span>
                </div>
                <p
                  className="text-white font-bold mb-1"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  Duncan MacDonald
                </p>
                <p
                  className="text-white/30 font-mono"
                  style={{ fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase" }}
                >
                  Founder — Revamply
                </p>
              </div>

              {/* Subtle scan-line texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)",
                }}
              />
            </div>

            {/* Pull quote */}
            <div
              className="border-l-2 border-accent/40 pl-6"
              style={{ borderLeftWidth: "2px" }}
            >
              <p
                className="text-white/60 leading-relaxed mb-4"
                style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)", lineHeight: 1.85 }}
              >
                &ldquo;Revamply is the culmination of those lessons: not advice,
                but{" "}
                <span className="text-white font-semibold">actual operational transformation</span>
                {" "}delivered by someone who has built it from the ground up.&rdquo;
              </p>
              <p
                className="text-white/20 font-mono"
                style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase" }}
              >
                Duncan MacDonald
              </p>
            </div>
          </motion.div>

          {/* Right — Companies built */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10"
            >
              <p
                className="text-white/20 font-mono mb-1"
                style={{ fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase" }}
              >
                Track Record
              </p>
              <p
                className="text-white/20 font-mono"
                style={{ fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase" }}
              >
                {companies.length} companies founded across 2 industries
              </p>
            </motion.div>

            {/* Company list */}
            <div className="divide-y divide-white/[0.06]">
              {companies.map((company, i) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.18 + i * 0.07, ease: "easeOut" }}
                  className="group grid items-start py-7"
                  style={{ gridTemplateColumns: "64px 1fr auto" }}
                >
                  {/* Year */}
                  <p
                    className="text-white/20 font-mono pt-0.5"
                    style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                  >
                    {company.year}
                  </p>

                  {/* Name + description */}
                  <div className="pr-6">
                    <p
                      className="text-white font-bold mb-1.5 group-hover:text-accent transition-colors duration-300"
                      style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
                    >
                      {company.name}
                    </p>
                    <p
                      className="text-white/35 leading-relaxed"
                      style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)", lineHeight: 1.7 }}
                    >
                      {company.description}
                    </p>
                  </div>

                  {/* Status badge */}
                  <span
                    className={`shrink-0 font-mono border rounded-full px-3 py-1 ${statusStyles[company.status] || statusStyles["In Development"]}`}
                    style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }}
                  >
                    {company.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Credential bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-6"
            >
              {[
                { value: "5+", label: "Companies Built" },
                { value: "2", label: "Industries" },
                { value: "7yrs", label: "Building Operators" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-white font-black mb-1"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white/25 font-mono"
                    style={{ fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
