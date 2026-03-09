"use client";

import Link from "next/link";

type FooterLink =
  | { label: string; href: string; type: "page" }
  | { label: string; href: string; type: "anchor" }
  | { label: string; href: string; type: "email" };

const footerLinks: Record<string, FooterLink[]> = {
  Navigation: [
    { label: "Home", href: "/", type: "page" },
    { label: "Operational Assessment", href: "/operational-assessment", type: "page" },
    { label: "Modernising Businesses Before Exit", href: "/modernizing-businesses-before-exit", type: "page" },
    { label: "Case Studies", href: "#", type: "anchor" },
    { label: "About", href: "#founder", type: "anchor" },
    { label: "Book a Call", href: "#final-cta", type: "anchor" },
  ],
  Services: [
    { label: "Operational Assessment", href: "/operational-assessment", type: "page" },
    { label: "OS Implementation", href: "#services", type: "anchor" },
    { label: "Ongoing Optimisation", href: "#services", type: "anchor" },
  ],
  Contact: [
    { label: "Book a Discovery Call", href: "mailto:hello@revamply.com", type: "email" },
    { label: "Request Assessment", href: "mailto:hello@revamply.com?subject=Operational Assessment Request", type: "email" },
    { label: "hello@revamply.com", href: "mailto:hello@revamply.com", type: "email" },
  ],
};

export default function Footer() {
  const handleAnchorNav = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/[0.06] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-6 w-fit">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-black text-sm">R</span>
              </div>
              <span className="text-white font-bold text-lg">Revamply</span>
            </Link>

            {/* Tagline */}
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-2">
              Modern Operating Systems for Established Businesses
            </p>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-6">
              Helping companies redesign the systems that power their operations.
            </p>

            {/* Social placeholders */}
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "Email"].map((social) => (
                <button
                  key={social}
                  className="w-9 h-9 rounded-full glass border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 text-xs font-medium"
                  aria-label={social}
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-white/20 text-xs uppercase tracking-widest font-medium mb-5">{category}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.type === "page" ? (
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : link.type === "email" ? (
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleAnchorNav(link.href)}
                        className="text-white/50 hover:text-white text-sm transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Revamply. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-white/20 hover:text-white/50 text-xs transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-white/20 hover:text-white/50 text-xs transition-colors duration-200">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
