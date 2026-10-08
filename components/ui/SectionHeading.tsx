"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlightText,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl text-left",
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn("mb-4 inline-flex items-center", isCenter ? "justify-center" : "justify-start")}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-primary/10 border border-primary/25 text-primary-light shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
      >
        {title}{" "}
        {highlightText && (
          <span className="bg-gradient-to-r from-primary-light via-secondary-light to-accent bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-muted leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
