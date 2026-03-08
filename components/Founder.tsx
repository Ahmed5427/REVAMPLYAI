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
    year: "2023",
    name: "CarConnective",
    role: "Founder",
    description: "Connected vehicle intelligence platform",
    status: "Launching Soon",
  },
  {
    year: "2022",
    name: "RoomService AI",
    role: "Founder",
    description: "Hospitality guest communication platform — automated concierge at scale",
    status: "Active",
  },
  {
    year: "2024",
    name: "HospitalityOS",
    role: "Founder",
    description: "Complete operating system for hospitality businesses",
    status: "In Development",
  },
];

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="founder" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs uppercase tracking-widest font-medium mb-6"
            >
              The Founder
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-8"
            >
              Built by an Entrepreneur Who Builds{" "}
              <span className="text-gradient-blue">Real Systems</span>
            </motion.h2>

            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 glass border border-white/10"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-4">
                  <span className="text-3xl font-black text-accent">D</span>
                </div>
                <p className="text-white font-bold text-lg">Duncan MacDonald</p>
                <p className="text-white/40 text-sm">Founder, Revamply</p>
              </div>
              {/* Decorative grid */}
              <div className="absolute inset-0 grid-bg opacity-50" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="space-y-4"
            >
              <p className="text-white/60 text-base leading-relaxed">
                Duncan MacDonald is a multi-technology company founder who has spent years building
                software platforms from scratch to solve real operational inefficiencies across
                multiple industries.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                Rather than consulting from the outside, Duncan has lived the challenge — bootstrapping
                platforms that modernize how businesses actually operate, from automotive wholesale to
                hospitality management.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                Revamply is the culmination of those lessons: a consultancy that delivers not advice,
                but <span className="text-white font-semibold">actual operational transformation</span>.
              </p>
            </motion.div>
          </div>

          {/* Right — Timeline */}
          <div className="pt-0 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/30 text-xs uppercase tracking-widest font-medium mb-8"
            >
              Companies Built
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />

              <div className="space-y-8">
                {companies.map((company, i) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" as const }}
                    className="pl-8 relative group"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-0.5 group-hover:scale-150 transition-transform duration-300" />

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-white/30 text-xs font-mono">{company.year}</span>
                          <span className="text-white font-bold text-lg">{company.name}</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">{company.description}</p>
                      </div>
                      <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${
                        company.status === "Active"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : company.status === "Launching Soon"
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : "bg-white/5 text-white/40 border border-white/10"
                      }`}>
                        {company.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
