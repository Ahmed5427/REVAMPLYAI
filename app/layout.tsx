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
        {children}
      </body>
    </html>
  );
}
