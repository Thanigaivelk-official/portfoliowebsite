"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ui/ProjectCard";
import { FolderGit2, Sparkles } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web Application", "Software Development", "Object-Oriented Software", "Frontend & Performance"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Work"
          title="Featured Software Projects"
          highlightText="& Implementations"
          description="Realistic software development projects showcasing full-stack capabilities, Python database scripts, Java OOP architecture, and modern Next.js."
        />

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-neon-primary"
                  : "bg-white/[0.04] text-slate-400 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
