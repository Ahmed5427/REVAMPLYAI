"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Operational Assessment",
    subtitle: "Start Here",
    description:
      "A comprehensive analysis of your current operating systems. We map every process, identify all inefficiencies, and produce a detailed modernization roadmap specific to your business.",
    includes: [
      "Full process audit",
      "Technology stack review",
      "Inefficiency identification",
      "Modernization roadmap",
      "Priority ranking",
    ],
    accentColor: "#3B82F6",
    gradient: "from-blue-500/10 to-transparent",
    tag: "Foundation",
  },
  {
    title: "Operating System Implementation",
    subtitle: "Core Service",
    description:
      "We redesign and implement your complete business operating system. From workflow automation to software integration, we rebuild the infrastructure that runs your business.",
    includes: [
      "Workflow redesign",
      "Automation implementation",
      "Software integration",
      "Dashboard creation",
      "Team training",
    ],
    accentColor: "#8B5CF6",
    gradient: "from-purple-500/10 to-transparent",
    tag: "Transformation",
    featured: true,
  },
  {
    title: "Ongoing Operational Optimization",
    subtitle: "Long-Term Partnership",
    description:
      "Continuous improvement of your operating system as your business grows. Regular reviews, performance monitoring, and progressive enhancements to keep your systems modern.",
    includes: [
      "Monthly performance reviews",
      "Continuous automation",
      "System scaling support",
      "New tool evaluation",
      "Strategic advisory",
    ],
    accentColor: "#10B981",
    gradient: "from-emerald-500/10 to-transparent",
    tag: "Growth",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs uppercase tracking-widest font-medium mb-6"
          >
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl mx-auto"
          >
            Three Ways We{" "}
            <span className="text-gradient-blue">Work Together</span>
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: "easeOut" as const }}
              className={`relative rounded-2xl p-8 overflow-hidden group transition-all duration-500 border ${
                service.featured
                  ? "border-accent/30 bg-accent/5"
                  : "glass border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              {/* BG gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} ${service.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-500`} />

              {/* Featured glow */}
              {service.featured && (
                <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              <div className="relative z-10">
                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: `${service.accentColor}15`,
                      color: service.accentColor,
                      border: `1px solid ${service.accentColor}30`,
                    }}
                  >
                    {service.tag}
                  </span>
                  {service.featured && (
                    <span className="text-xs text-accent font-semibold">Most Popular</span>
                  )}
                </div>

                {/* Subtitle */}
                <p className="text-white/30 text-xs uppercase tracking-widest mb-3">{service.subtitle}</p>

                {/* Title */}
                <h3 className="text-white font-black text-2xl lg:text-3xl mb-4 leading-tight tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Includes list */}
                <div className="space-y-2.5 mb-8">
                  {service.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${service.accentColor}20` }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5" stroke={service.accentColor} strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    service.featured
                      ? "bg-accent text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                      : "glass border border-white/10 text-white hover:border-white/30"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
