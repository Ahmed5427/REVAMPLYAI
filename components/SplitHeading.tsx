"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}

/**
 * Splits text into individual characters and reveals them
 * one by one when the element scrolls into view — Awwwards-style.
 */
export default function SplitHeading({
  text,
  className = "",
  style,
  delay = 0,
  as: Tag = "h2",
}: SplitHeadingProps) {
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".split-char");

    gsap.fromTo(
      chars,
      { y: "105%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.75,
        stagger: 0.025,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el) st.kill();
      });
    };
  }, [delay]);

  // Split text into words, and each word into characters
  const words = text.split(" ");

  return (
    <Tag ref={wrapperRef as React.RefObject<HTMLHeadingElement>} className={className} style={style}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block overflow-hidden mr-[0.2em] last:mr-0"
          style={{ verticalAlign: "bottom" }}
        >
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="split-char inline-block"
              style={{ willChange: "transform" }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
