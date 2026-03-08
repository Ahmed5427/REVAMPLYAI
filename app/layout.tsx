import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revamply — Modern Operating Systems for Established Businesses",
  description:
    "Revamply helps established companies modernize the systems that power their operations. By redesigning workflows and implementing intelligent automation, we help businesses operate more efficiently, scale more easily, and prepare for the future.",
  openGraph: {
    title: "Revamply — Modern Operating Systems for Established Businesses",
    description:
      "We help established businesses redesign the systems that power their operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {/* Full-page grain texture — fixed, covers everything */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9980,
            pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            opacity: 0.035,
            mixBlendMode: "overlay",
          }}
        />
        {children}
      </body>
    </html>
  );
}
