"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { SkillBadge } from "./ui/SkillBadge";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Programming: <Code className="w-5 h-5 text-primary-light" />,
  "Frontend Development": <Layout className="w-5 h-5 text-accent" />,
  "Backend Development": <Server className="w-5 h-5 text-secondary-light" />,
  Databases: <Database className="w-5 h-5 text-emerald-400" />,
  "Development Tools": <Wrench className="w-5 h-5 text-amber-400" />,
  "Computer Science Concepts": <Brain className="w-5 h-5 text-rose-400" />,
};

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterTabs = [
    "All",
    "Programming",
    "Frontend Development",
    "Backend Development",
    "Databases",
    "Development Tools",
    "Computer Science Concepts",
  ];

  const displayedCategories =
    selectedFilter === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title === selectedFilter);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Engineered with Precision"
          highlightText="& Core Technologies"
          description="A structured overview of technical skills with honest qualitative proficiencies across the stack."
        />

        {/* Qualitative Proficiency Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-xs font-mono text-slate-300">
          <span className="text-muted uppercase tracking-wider">Proficiency Scale:</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-white font-medium">Proficient</span>
            <span className="text-muted">(Hands-on & Academic Projects)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="text-white font-medium">Familiar</span>
            <span className="text-muted">(Working Knowledge)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-white font-medium">Learning</span>
            <span className="text-muted">(Active Exploration)</span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-neon-primary"
                    : "bg-white/[0.03] text-slate-400 border-white/[0.08] hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {tab === "Computer Science Concepts" ? "CS Concepts" : tab}
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="p-6 h-full flex flex-col justify-between hover:border-white/[0.18]">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                        {CATEGORY_ICONS[category.title] || <Sparkles className="w-5 h-5 text-accent" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-muted leading-tight">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges with Qualitative Levels */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <SkillBadge
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          showLevel={true}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-muted">
                    <span>{category.skills.length} competencies</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      Verified
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
