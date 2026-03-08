"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Method", href: "#revamp-method" },
  { label: "Services", href: "#services" },
  { label: "Playbook", href: "#playbook" },
  { label: "About", href: "#founder" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(0,0,0,0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <button
              onClick={() => go("#hero")}
              className="flex items-center gap-2.5 group"
            >
              <div
                className="relative overflow-hidden rounded-md flex items-center justify-center"
                style={{ width: "28px", height: "28px", background: "#3B82F6" }}
              >
                <span className="text-white font-black text-sm leading-none relative z-10">R</span>
                <div className="absolute inset-0 bg-white/15 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 skew-x-12" />
              </div>
              <span
                className="text-white font-bold tracking-tight"
                style={{ fontSize: "15px", letterSpacing: "-0.01em" }}
              >
                Revamply
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => go(link.href)}
                  className="relative text-white/50 hover:text-white transition-colors duration-200 group"
                  style={{ fontSize: "13px", letterSpacing: "0.01em" }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => go("#final-cta")}
                className="relative px-5 py-2.5 bg-accent text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_28px_rgba(59,130,246,0.4)]"
                style={{ fontSize: "13px" }}
              >
                <span className="relative z-10">Book a Call</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 flex flex-col gap-[5px]"
              aria-label="Toggle menu"
            >
              <span
                className="block bg-white transition-all duration-300"
                style={{
                  width: "22px",
                  height: "1.5px",
                  transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
                }}
              />
              <span
                className="block bg-white transition-all duration-300"
                style={{
                  width: "22px",
                  height: "1.5px",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block bg-white transition-all duration-300"
                style={{
                  width: "22px",
                  height: "1.5px",
                  transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/96 backdrop-blur-2xl flex flex-col items-start justify-end p-8 pb-16"
          >
            <div className="w-full">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  onClick={() => go(link.href)}
                  className="block w-full text-left py-4 border-b border-white/[0.06] text-white font-black hover:text-accent transition-colors"
                  style={{ fontSize: "clamp(2rem, 6vw, 3rem)", letterSpacing: "-0.02em" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1 }}
                onClick={() => go("#final-cta")}
                className="mt-8 px-8 py-4 bg-accent text-white font-bold rounded-full text-lg"
              >
                Book a Call →
              </motion.button>
            </div>

            {/* Corner label */}
            <div
              className="absolute top-7 left-8 text-white/20 font-mono"
              style={{ fontSize: "10px", letterSpacing: "0.35em" }}
            >
              MENU
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
