"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: "none" | "primary" | "secondary" | "accent";
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = "none",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  const glowStyles = {
    none: "",
    primary: "before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-primary/20 before:to-secondary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10",
    secondary: "before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-secondary/20 before:to-accent/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10",
    accent: "before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-accent/20 before:to-primary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
      className={cn(
        "relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-glass-sm",
        "transition-colors duration-300 hover:border-white/[0.18] hover:bg-white/[0.06]",
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
