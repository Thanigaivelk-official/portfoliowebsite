"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Building2,
  CheckCircle2,
  BadgeCheck,
  Calendar,
  Sparkles,
} from "lucide-react";
import { TIMELINE_JOURNEY } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";

export function Experience() {
  const { workExperience, education, certifications } = TIMELINE_JOURNEY;

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Experience & Academic Background"
          title="Career Journey"
          highlightText="& Verified Credentials"
          description="A timeline highlighting industry background verification experience at Matrix Business India and academic excellence at Annamalai University."
        />

        <div className="relative border-l border-white/[0.1] ml-4 md:ml-36 pl-6 md:pl-10 space-y-14">
          {/* Work Experience: Matrix Business India */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-neon-accent">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Date label */}
            <div className="md:absolute md:-left-40 md:top-2 text-xs font-mono font-bold text-accent mb-2 md:mb-0">
              {workExperience.period}
            </div>

            <GlassCard glow="accent" className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                  Professional Experience
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                  <Building2 className="w-3.5 h-3.5 text-accent" />
                  {workExperience.company}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white">
                {workExperience.role}
              </h3>

              <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
                {workExperience.description}
              </p>

              {/* Award Callout */}
              <div className="mt-4 p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center gap-3 text-xs md:text-sm text-amber-200">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="font-semibold">{workExperience.award}</span>
              </div>

              {/* Responsibilities list */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                <p className="text-xs font-mono uppercase text-muted tracking-wider">
                  Key Responsibilities & Deliverables
                </p>
                <ul className="space-y-2">
                  {workExperience.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>

          {/* Education Entries */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary-light shadow-neon-primary">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Date label */}
              <div className="md:absolute md:-left-40 md:top-2 text-xs font-mono font-bold text-slate-400 mb-2 md:mb-0">
                {edu.period}
              </div>

              <GlassCard glow="primary" className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/15 text-primary-light border border-primary/25 font-bold">
                    {edu.grade}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                    <Building2 className="w-3.5 h-3.5 text-accent" />
                    {edu.institution}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {edu.degree}
                </h3>

                <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <p className="text-xs font-mono uppercase text-muted tracking-wider mb-3">
                    Curriculum & Technical Focus
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {edu.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] text-xs text-slate-200 border border-white/[0.05]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center text-secondary-light shadow-neon-secondary">
              <BadgeCheck className="w-4 h-4" />
            </div>

            <div className="md:absolute md:-left-40 md:top-2 text-xs font-mono font-bold text-secondary-light mb-2 md:mb-0">
              Certifications
            </div>

            <GlassCard glow="secondary" className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold text-white">
                  Professional Certifications & Training
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
