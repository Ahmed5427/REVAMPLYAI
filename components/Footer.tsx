"use client";

const footerLinks = {
  Company: [
    { label: "About", href: "#founder" },
    { label: "REVAMP Method", href: "#revamp-method" },
    { label: "Playbook", href: "#playbook" },
    { label: "Platforms", href: "#platforms" },
  ],
  Services: [
    { label: "Operational Assessment", href: "#services" },
    { label: "OS Implementation", href: "#services" },
    { label: "Ongoing Optimisation", href: "#services" },
  ],
  Contact: [
    { label: "Book a Discovery Call", href: "#final-cta" },
    { label: "Request Assessment", href: "#final-cta" },
    { label: "hello@revamply.com", href: "mailto:hello@revamply.com" },
  ],
};

export default function Footer() {
  const go = (href: string) => {
    if (href.startsWith("mailto")) { window.location.href = href; return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 lg:gap-8 pb-14 border-b border-white/[0.05]">

          {/* Brand */}
          <div>
            <button onClick={() => go("#hero")} className="flex items-center gap-2.5 mb-6 group">
              <div
                className="flex items-center justify-center rounded-md bg-accent"
                style={{ width: "26px", height: "26px" }}
              >
                <span className="text-white font-black text-sm leading-none">R</span>
              </div>
              <span
                className="text-white font-bold tracking-tight"
                style={{ fontSize: "15px" }}
              >
                Revamply
              </span>
            </button>

            <p
              className="text-white/30 leading-relaxed mb-7"
              style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)", lineHeight: 1.8, maxWidth: "280px" }}
            >
              Modern operating systems for established businesses. We redesign the systems
              that power your operations.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {["Li", "Tw", "Em"].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-300"
                  style={{ fontSize: "11px" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                className="text-white/20 font-mono mb-5"
                style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}
              >
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => go(link.href)}
                      className="text-white/40 hover:text-white/80 transition-colors duration-200 text-left"
                      style={{ fontSize: "clamp(0.82rem, 0.95vw, 0.875rem)" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/18 font-mono"
            style={{ fontSize: "10px", letterSpacing: "0.12em" }}
          >
            © {new Date().getFullYear()} Revamply. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <button
                key={label}
                className="text-white/18 hover:text-white/40 transition-colors duration-200 font-mono"
                style={{ fontSize: "10px", letterSpacing: "0.1em" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
