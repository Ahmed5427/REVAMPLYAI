"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    tag: "Foundation",
    label: "Start Here",
    title: "Operational\nAssessment",
    description:
      "A comprehensive analysis of your current operating systems. We map every process, identify all inefficiencies, and produce a detailed modernisation roadmap specific to your business.",
    includes: [
      "Full process audit",
      "Technology stack review",
      "Inefficiency identification",
      "Modernisation roadmap",
      "Priority ranking",
    ],
    accent: "#3B82F6",
    featured: false,
  },
  {
    number: "02",
    tag: "Transformation",
    label: "Core Service",
    title: "Operating System\nImplementation",
    description:
      "We redesign and implement your complete business operating system. From workflow automation to software integration, we rebuild the infrastructure that runs your business.",
    includes: [
      "Workflow redesign",
      "Automation implementation",
      "Software integration",
      "Dashboard creation",
      "Team training",
    ],
    accent: "#8B5CF6",
    featured: true,
  },
  {
    number: "03",
    tag: "Growth",
    label: "Long-Term Partnership",
    title: "Ongoing\nOptimisation",
    description:
      "Continuous improvement of your operating system as your business evolves. Regular reviews, performance monitoring, and progressive enhancements.",
    includes: [
      "Monthly performance reviews",
      "Continuous automation",
      "System scaling support",
      "New tool evaluation",
      "Strategic advisory",
    ],
    accent: "#10B981",
    featured: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="section-line" />

      <div className="ghost-text" style={{ fontSize: "18vw", right: "-3vw", top: "50%", transform: "translateY(-50%)" }}>
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="section-number">Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-black tracking-tight leading-[0.92]"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)", maxWidth: "700px" }}
          >
            Three Ways We{" "}
            <span className="text-gradient-blue">Work Together</span>
          </motion.h2>
        </div>

        {/* Services — large editorial cards */}
        <div className="space-y-4 lg:space-y-5">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                background: service.featured
                  ? `rgba(${parseInt(service.accent.slice(1, 3), 16)}, ${parseInt(service.accent.slice(3, 5), 16)}, ${parseInt(service.accent.slice(5, 7), 16)}, 0.06)`
                  : "rgba(255,255,255,0.02)",
                border: service.featured
                  ? `1px solid ${service.accent}30`
                  : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Featured top line */}
              {service.featured && (
                <div
                  className="absolute top-0 left-16 right-16 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                  }}
                />
              )}

              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_280px] gap-0">
                {/* Left — number + tag */}
                <div className="flex flex-col justify-between p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                  <div>
                    <div
                      className="text-white/15 font-mono mb-4"
                      style={{ fontSize: "11px", letterSpacing: "0.15em" }}
                    >
                      {service.number} / 03
                    </div>
                    <div
                      className="inline-flex items-center px-2.5 py-1 rounded-full font-mono"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        background: `${service.accent}18`,
                        color: service.accent,
                        border: `1px solid ${service.accent}25`,
                      }}
                    >
                      {service.tag}
                    </div>
                  </div>
                  <div
                    className="hidden lg:block text-white/25 font-mono"
                    style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase" }}
                  >
                    {service.label}
                  </div>
                </div>

                {/* Middle — title + description */}
                <div className="p-8 lg:p-10 lg:border-r border-white/[0.06]">
                  <h3
                    className="text-white font-black tracking-tight leading-[0.9] mb-5"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white/40 leading-relaxed"
                    style={{ fontSize: "clamp(0.85rem, 1.05vw, 0.95rem)", lineHeight: 1.8, maxWidth: "460px" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Right — includes + CTA */}
                <div className="flex flex-col justify-between p-8 lg:p-10">
                  <ul className="space-y-3 mb-8">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="shrink-0 mt-[3px]"
                          style={{ color: service.accent, fontSize: "12px" }}
                        >
                          ✓
                        </span>
                        <span
                          className="text-white/45"
                          style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                    style={
                      service.featured
                        ? { background: service.accent, color: "white" }
                        : {
                            background: "rgba(255,255,255,0.04)",
                            color: "rgba(255,255,255,0.7)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!service.featured) {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!service.featured) {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                      }
                    }}
                  >
                    Get Started →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
