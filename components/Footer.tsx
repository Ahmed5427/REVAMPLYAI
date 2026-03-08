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
    { label: "Ongoing Optimization", href: "#services" },
  ],
  Contact: [
    { label: "Book a Discovery Call", href: "#final-cta" },
    { label: "Request Assessment", href: "#final-cta" },
    { label: "hello@revamply.com", href: "mailto:hello@revamply.com" },
  ],
};

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith("mailto")) {
      window.location.href = href;
      return;
    }
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
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-black text-sm">R</span>
              </div>
              <span className="text-white font-bold text-lg">Revamply</span>
            </div>

            {/* Tagline */}
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Modern operating systems for established businesses. We redesign the systems that
              power your business.
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
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200 text-left"
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
