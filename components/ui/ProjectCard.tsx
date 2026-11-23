"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles, CheckCircle2, Flame } from "lucide-react";
import { ProjectItem } from "@/lib/constants";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  isFlagship?: boolean;
}

export function ProjectCard({ project, index, isFlagship = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D Tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 24,
    stiffness: 180,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    damping: 24,
    stiffness: 180,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative rounded-2xl backdrop-blur-xl p-6 md:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden",
        isFlagship
          ? "bg-white/[0.05] border border-primary/40 shadow-glass-lg md:col-span-2 hover:border-primary/60"
          : "bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] shadow-glass-sm"
      )}
    >
      {/* Dynamic Background Glow - Quieter, subtle ambient depth */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl transition-opacity duration-500 blur-2xl -z-10",
          isFlagship
            ? "bg-gradient-to-r from-primary/15 to-accent/15 opacity-50 group-hover:opacity-80"
            : "bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-50"
        )}
      />

      <div>
        {/* Top Header: Badge, Status, Category */}
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide",
                isFlagship
                  ? "bg-primary text-white shadow-neon-primary border border-primary-light"
                  : "bg-primary/15 text-primary-light border border-primary/30"
              )}
            >
              {isFlagship ? (
                <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              ) : (
                <Sparkles className="w-3.5 h-3.5 text-accent" />
              )}
              {project.badge}
            </span>

            {isFlagship && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live OTT Deployment
              </span>
            )}
          </div>

          <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-extrabold tracking-tight text-white group-hover:text-primary-light transition-colors duration-200",
            isFlagship ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"
          )}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed max-w-4xl">
          {project.description}
        </p>

        {/* Key Features List */}
        <div className="mt-6 space-y-2 border-t border-white/[0.08] pt-4">
          <p className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
            Architecture & Engineering Highlights
          </p>
          <ul
            className={cn(
              "grid gap-2 mt-2",
              isFlagship ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            )}
          >
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/[0.08]">
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.06] text-slate-200 border border-white/[0.1] hover:border-accent/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            href={project.githubUrl}
            target="_blank"
            variant="secondary"
            size="sm"
            icon={<Github className="w-4 h-4" />}
            iconPosition="left"
            className="flex-1 font-semibold"
          >
            Source Code
          </Button>

          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              target="_blank"
              variant="primary"
              size="sm"
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
              className={cn("flex-1 font-bold", isFlagship && "shadow-neon-primary")}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
