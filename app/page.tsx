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
import FrameStrip from "@/components/FrameStrip";

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
          <FrameStrip startFrame={0} endFrame={24} />
          <ScrollAnimation />
          <FrameStrip startFrame={25} endFrame={76} reverse />
          <Problem />
          <WhatRevamplyDoes />
          <FrameStrip startFrame={51} endFrame={102} />
          <Founder />
          <TechPlatforms />
          <RevampMethod />
          <Playbook />
          <Services />
          <FrameStrip startFrame={77} endFrame={127} reverse />
          <IdealClients />
          <Outcomes />
          <FinalCTA />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
