"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const platforms = [
  {
    name: "DealerBids",
    category: "Automotive",
    description:
      "Digital wholesale vehicle marketplace connecting dealers. Eliminated the inefficiencies of traditional auction-based vehicle trading with a modern, digital-first platform.",
    tags: ["Marketplace", "Automotive", "B2B"],
    status: "Live",
    accentColor: "#3B82F6",
    metric: "Vehicle transactions digitized",
    bgGradient: "from-blue-600/20 via-blue-900/10 to-transparent",
  },
  {
    name: "LotPilot",
    category: "Automotive AI",
    description:
      "AI-powered dealership operating platform. Gives dealers the intelligence and automation to run their operations like a modern tech company.",
    tags: ["AI", "SaaS", "Automation"],
    status: "Live",
    accentColor: "#8B5CF6",
    metric: "Dealer operations automated",
    bgGradient: "from-purple-600/20 via-purple-900/10 to-transparent",
  },
  {
    name: "CarConnective",
    category: "Connected Vehicles",
    description:
      "Connected vehicle intelligence platform bringing data-driven insights to vehicle ownership and dealership relationships.",
    tags: ["Connected", "Intelligence", "Data"],
    status: "Launching Soon",
    accentColor: "#06B6D4",
    metric: "Connected vehicle insights",
    bgGradient: "from-cyan-600/20 via-cyan-900/10 to-transparent",
  },
  {
    name: "RoomService AI",
    category: "Hospitality",
    description:
      "AI-powered hospitality guest communication platform. Automates the entire guest journey from booking to checkout, eliminating manual communication overhead.",
    tags: ["AI", "Hospitality", "Communication"],
    status: "Live",
    accentColor: "#F59E0B",
    metric: "Guest interactions automated",
    bgGradient: "from-amber-600/20 via-amber-900/10 to-transparent",
  },
  {
    name: "HospitalityOS",
    category: "Hospitality",
    description:
      "Complete operating system for hospitality businesses. The full-stack solution for hotels and service businesses to run on a modern, connected infrastructure.",
    tags: ["Platform", "Hospitality", "OS"],
    status: "In Development",
    accentColor: "#10B981",
    metric: "Operational systems unified",
    bgGradient: "from-emerald-600/20 via-emerald-900/10 to-transparent",
  },
];

export default function TechPlatforms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="platforms" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs uppercase tracking-widest font-medium mb-6"
          >
            Technology Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl"
          >
            Platforms Built to{" "}
            <span className="text-gradient-blue">Prove the Method</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-lg mt-6 max-w-2xl"
          >
            Duncan MacDonald has bootstrapped multiple technology platforms from scratch.
            Each one validates the operational modernization methodology Revamply brings to clients.
          </motion.p>
        </div>

        {/* Platforms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" as const }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="relative rounded-2xl glass border border-white/[0.06] p-6 overflow-hidden cursor-default group transition-all duration-500"
              style={{
                borderColor: active === i ? `${platform.accentColor}30` : undefined,
              }}
            >
              {/* BG gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${platform.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white/30 text-xs uppercase tracking-widest">{platform.category}</span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: `${platform.accentColor}15`,
                      color: platform.accentColor,
                      border: `1px solid ${platform.accentColor}30`,
                    }}
                  >
                    {platform.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-black text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {platform.name}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-300">
                  {platform.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {platform.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/[0.06]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${platform.accentColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
