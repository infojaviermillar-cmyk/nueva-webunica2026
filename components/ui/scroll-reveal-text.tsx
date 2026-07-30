"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  mode?: 'light' | 'dark';
  startColor?: string;
  endColor?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  startColor: string;
  endColor: string;
}

const Word = ({ children, progress, range, startColor, endColor }: WordProps) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const color = useTransform(progress, range, [startColor, endColor]);

  return (
    <span className="relative inline-block mr-[0.3em] last:mr-0">
      <motion.span style={{ opacity, color }}>
        {children}
      </motion.span>
    </span>
  );
};

export default function ScrollRevealText({ 
  text, 
  className = "", 
  mode = "light",
  startColor,
  endColor 
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.4"]
  });

  const defaultStartColor = startColor || (mode === "dark" ? "rgba(233, 213, 255, 0.45)" : "#a1a1aa");
  const defaultEndColor = endColor || (mode === "dark" ? "#ffffff" : "#09090b");

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap items-center justify-center font-light leading-relaxed ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
            startColor={defaultStartColor}
            endColor={defaultEndColor}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}
