"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "£1M", label: "Minimum Revenue" },
  { value: "£10M", label: "Upper Revenue Range" },
  { value: "10–50", label: "Employee Count" },
  { value: "5+", label: "Years in Business" },
];

const industries = [
  { name: "Professional Services", icon: "⚖️" },
  { name: "Property Management", icon: "🏢" },
  { name: "Construction", icon: "🏗️" },
  { name: "Hospitality", icon: "🏨" },
  { name: "Automotive", icon: "🚗" },
  { name: "Service Businesses", icon: "🛠️" },
];

const traits = [
  "Profitable and established — not a startup",
  "Operational pain is slowing growth",
  "The owner is the bottleneck",
  "Software is disconnected and manual",
  "Ready to invest in modernization",
  "Aiming to scale or increase exit value",
];

export default function IdealClients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ideal-clients" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs uppercase tracking-widest font-medium mb-6"
          >
            Who We Work With
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl"
          >
            The Businesses{" "}
            <span className="text-gradient-blue">We Work With</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Stats + traits */}
          <div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-5 rounded-2xl glass border border-white/[0.06]">
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Traits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p className="text-white/30 text-xs uppercase tracking-widest mb-5 font-medium">Profile</p>
              <div className="space-y-3">
                {traits.map((trait, i) => (
                  <motion.div
                    key={trait}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-white/60 text-sm">{trait}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Industries */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-white/30 text-xs uppercase tracking-widest mb-6 font-medium">Industries</p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                    className="group flex items-center gap-4 p-5 rounded-2xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default"
                  >
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{industry.icon}</span>
                    <span className="text-white/70 font-medium text-sm group-hover:text-white transition-colors duration-300">
                      {industry.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Big quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 p-6 rounded-2xl border border-accent/20 bg-accent/5"
            >
              <p className="text-white/70 text-base leading-relaxed italic">
                &ldquo;If your business was built before modern digital infrastructure existed &mdash; and it&apos;s
                profitable but operationally constrained &mdash; Revamply was built for you.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">D</span>
                </div>
                <span className="text-white/40 text-sm">Duncan MacDonald, Founder</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
