"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/lib/constants";
import { Button } from "./Button";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
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
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.09] hover:border-primary/40 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 shadow-glass-lg flex flex-col justify-between"
    >
      {/* Background Soft Glow */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

      <div>
        {/* Header: Badge & Category */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/15 text-primary-light border border-primary/25">
            <Sparkles className="w-3 h-3 text-accent" />
            {project.badge}
          </span>
          <span className="text-xs font-mono text-muted tracking-wider uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features List */}
        <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
          <p className="text-xs font-mono uppercase text-muted tracking-wider">Key Engineering Features</p>
          <ul className="space-y-1.5">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/[0.06]">
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            href={project.githubUrl}
            target="_blank"
            variant="secondary"
            size="sm"
            icon={<Github className="w-4 h-4" />}
            iconPosition="left"
            className="flex-1"
          >
            GitHub
          </Button>
          <Button
            href={project.liveUrl}
            target="_blank"
            variant="primary"
            size="sm"
            icon={<ExternalLink className="w-4 h-4" />}
            iconPosition="right"
            className="flex-1"
          >
            Live Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
