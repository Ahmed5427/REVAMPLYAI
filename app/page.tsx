"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatRevamplyDoes from "@/components/WhatRevamplyDoes";
import Founder from "@/components/Founder";
import TechPlatforms from "@/components/TechPlatforms";
import RevampMethod from "@/components/RevampMethod";
import Playbook from "@/components/Playbook";
import Services from "@/components/Services";
import IdealClients from "@/components/IdealClients";
import Outcomes from "@/components/Outcomes";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Dynamically import the heavy scroll animation section (client-side only)
const ScrollAnimation = dynamic(() => import("@/components/ScrollAnimation"), {
  ssr: false,
  loading: () => (
    <div className="relative bg-black" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="text-white/20 text-xs uppercase tracking-widest">
          Loading Animation...
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <ScrollAnimation />
      <Problem />
      <WhatRevamplyDoes />
      <Founder />
      <TechPlatforms />
      <RevampMethod />
      <Playbook />
      <Services />
      <IdealClients />
      <Outcomes />
      <FinalCTA />
      <Footer />
    </main>
  );
}
