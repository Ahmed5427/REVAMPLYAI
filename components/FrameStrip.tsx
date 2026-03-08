"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FrameStripProps {
  /** Starting frame index (0-based). 8 frames will be shown spaced across the range. */
  startFrame?: number;
  endFrame?: number;
  /** Flip the scroll direction so alternate strips feel different */
  reverse?: boolean;
}

// Pick N evenly-spaced frames between start and end
function pickFrames(start: number, end: number, count: number): number[] {
  const frames: number[] = [];
  for (let i = 0; i < count; i++) {
    frames.push(Math.round(start + (i / (count - 1)) * (end - start)));
  }
  return frames;
}

const frameUrl = (index: number) =>
  `/frames/frame-${(index + 1).toString().padStart(4, "0")}.jpg`;

export default function FrameStrip({
  startFrame = 0,
  endFrame = 127,
  reverse = false,
}: FrameStripProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const frames = pickFrames(startFrame, endFrame, 9);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "140px", background: "black" }}
      aria-hidden="true"
    >
      {/* Top / bottom hairline fades */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      {/* Film strip track — slides in on scroll */}
      <motion.div
        initial={{ x: reverse ? "8%" : "-8%", opacity: 0 }}
        animate={inView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-stretch"
        style={{ gap: "1px" }}
      >
        {frames.map((frameIdx, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: `${100 / frames.length}%` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={frameUrl(frameIdx)}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.18 }}
              loading="lazy"
            />
            {/* Left separator */}
            {i > 0 && (
              <div
                className="absolute inset-y-0 left-0 w-px"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />
            )}
            {/* Frame number label */}
            <div
              className="absolute bottom-2 left-2 font-mono text-white/15"
              style={{ fontSize: "8px", letterSpacing: "0.15em" }}
            >
              {String(frameIdx + 1).padStart(4, "0")}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Left / right fade vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, black 0%, transparent 12%, transparent 88%, black 100%)",
        }}
      />

      {/* Centre label */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <span
          className="font-mono text-white/10"
          style={{ fontSize: "9px", letterSpacing: "0.5em", textTransform: "uppercase" }}
        >
          Frame sequence
        </span>
      </div>
    </div>
  );
}
