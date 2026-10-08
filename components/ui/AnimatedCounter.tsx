"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  decimals = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    if (value > 2000) {
      start = value - 30;
    } else if (value > 5 && decimals > 0) {
      start = value - 3;
    }

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Easing: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = start + (value - start) * ease;

      if (decimals > 0) {
        setDisplayValue(currentVal.toFixed(decimals));
      } else {
        setDisplayValue(Math.round(currentVal).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(decimals > 0 ? value.toFixed(decimals) : value.toString());
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
