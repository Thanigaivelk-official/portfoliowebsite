"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "./ui/Button";
import { HeroWorkspace } from "./HeroWorkspace";

// Dynamic import for 3D Background with SSR disabled for optimal performance
const HeroBackground3D = dynamic(() => import("./HeroBackground3D"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated typing effect
  useEffect(() => {
    const currentFullRole = PERSONAL_INFO.heroRoles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.heroRoles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : currentFullRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* 3D Particle & Aurora Background */}
      <HeroBackground3D />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small status pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-slate-300 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Opportunities • Software Developer | IT Graduate</span>
            </motion.div>

            {/* Small Intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl font-medium text-slate-400"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-1 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
            >
              Thanigaivel K
            </motion.h1>

            {/* Dynamic Typing Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-3 flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-tight"
            >
              <span className="text-muted">&gt;</span>
              <span className="bg-gradient-to-r from-primary-light via-secondary-light to-accent bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="w-2.5 h-7 md:h-9 bg-accent inline-block animate-pulse" />
            </motion.div>

            {/* Exact Hero Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              &ldquo;{PERSONAL_INFO.heroBio}&rdquo;
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              {/* Primary: View Projects */}
              <Button
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View Projects
              </Button>

              {/* Secondary: Download Resume */}
              <Button
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                download="Thanigaivel_Resume.pdf"
                variant="secondary"
                size="lg"
                icon={<FileDown className="w-4 h-4" />}
                iconPosition="left"
              >
                Download Resume
              </Button>

              {/* Ghost: Contact Me */}
              <Button
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                variant="ghost"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Quick Skills Pill Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 pt-6 border-t border-white/[0.08] w-full"
            >
              <p className="text-xs font-mono uppercase text-muted tracking-widest mb-3 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                {["Python", "Java", "PHP", "JavaScript", "React", "SQL", "MySQL", "Oracle"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-accent/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <HeroWorkspace />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
