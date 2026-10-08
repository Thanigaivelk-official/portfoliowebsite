"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Layers,
  Code2,
  Sparkles,
  BookOpen,
  CheckCircle,
  Award,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO, STATS, CORE_SKILL_PILLS } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { SkillBadge } from "./ui/SkillBadge";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering Mindset"
          highlightText="& Academic Foundation"
          description="A dedicated MCA graduate ready to build practical, scalable software solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-base md:text-lg text-slate-300 leading-relaxed">
              <p className="border-l-2 border-primary pl-4 py-1 text-white font-medium">
                &ldquo;{PERSONAL_INFO.aboutParagraphs[0]}&rdquo;
              </p>
              <p>
                {PERSONAL_INFO.aboutParagraphs[1]}
              </p>
              <p>
                {PERSONAL_INFO.aboutParagraphs[2]}
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">MCA Graduate (2023)</h4>
                  <p className="text-xs text-muted mt-0.5">Annamalai University</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <Code2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack Capability</h4>
                  <p className="text-xs text-muted mt-0.5">Frontend, Backend & Databases</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <Sparkles className="w-5 h-5 text-secondary-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Problem Solving</h4>
                  <p className="text-xs text-muted mt-0.5">Data structures & clean logic</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Continuous Learner</h4>
                  <p className="text-xs text-muted mt-0.5">Adapts rapidly to modern stacks</p>
                </div>
              </div>
            </div>

            {/* Skill Pills section */}
            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-xs font-mono uppercase text-muted tracking-wider mb-3">
                Core Competencies & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {CORE_SKILL_PILLS.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statistics Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, idx) => (
              <GlassCard
                key={stat.label}
                glow={idx % 2 === 0 ? "primary" : "accent"}
                className="p-6 flex flex-col justify-between text-center min-h-[160px]"
              >
                <div className="w-full flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light">
                    {idx === 0 && <GraduationCap className="w-5 h-5" />}
                    {idx === 1 && <Layers className="w-5 h-5" />}
                    {idx === 2 && <Terminal className="w-5 h-5" />}
                    {idx === 3 && <Sparkles className="w-5 h-5" />}
                  </div>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">
                    <AnimatedCounter
                      value={stat.numericValue}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-slate-200">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] font-mono text-muted mt-0.5">
                    {stat.sublabel}
                  </p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
