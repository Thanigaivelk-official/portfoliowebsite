"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  level?: "Learning" | "Familiar" | "Proficient";
  icon?: React.ReactNode;
  showLevel?: boolean;
  className?: string;
}

export function SkillBadge({
  name,
  level,
  icon,
  showLevel = false,
  className,
}: SkillBadgeProps) {
  const levelColors = {
    Learning: "bg-amber-400/10 text-amber-300 border-amber-400/20",
    Familiar: "bg-accent/10 text-accent-light border-accent/20",
    Proficient: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  };

  const levelDot = {
    Learning: "bg-amber-400",
    Familiar: "bg-accent",
    Proficient: "bg-emerald-400",
  };

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium",
        "bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2]",
        "text-slate-200 backdrop-blur-md transition-all duration-300 shadow-sm",
        className
      )}
    >
      {icon ? (
        <span className="text-primary-light group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      ) : level ? (
        <span className={cn("w-2 h-2 rounded-full", levelDot[level])} />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-primary-light group-hover:bg-accent transition-colors duration-300" />
      )}

      <span className="tracking-wide">{name}</span>

      {showLevel && level && (
        <span
          className={cn(
            "ml-1 text-[10px] font-mono font-normal px-1.5 py-0.5 rounded border uppercase tracking-wider",
            levelColors[level]
          )}
        >
          {level}
        </span>
      )}
    </motion.div>
  );
}
