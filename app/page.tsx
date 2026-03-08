"use client";

import { useState } from "react";
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
import SmoothScroll from "@/components/SmoothScroll";

// Client-only components
const ScrollAnimation = dynamic(() => import("@/components/ScrollAnimation"), {
  ssr: false,
  loading: () => (
    <div className="relative bg-black" style={{ height: "800vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          className="text-white/15 font-mono"
          style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase" }}
        >
          Loading…
        </div>
      </div>
    </div>
  ),
});

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });
const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {/* Page loader — covers until animation completes */}
      {!loaderDone && <Loader onComplete={() => setLoaderDone(true)} />}

      <SmoothScroll>
        <Cursor />
        <ScrollProgress />
        <main
          className="bg-black min-h-screen"
          style={{
            opacity: loaderDone ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
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
      </SmoothScroll>
    </>
  );
}
