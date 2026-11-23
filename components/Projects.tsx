"use client";

import React from "react";
import { PROJECTS } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ui/ProjectCard";

export function Projects() {
  const [flagship, ...otherProjects] = PROJECTS;

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Work"
          title="Engineered Systems"
          highlightText="& Production Builds"
          description="Full-stack web applications, video streaming pipelines, and secure backend systems built with modern architectures."
        />

        {/* Bolder Project Showcase: Flagship full-width feature followed by supporting systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {flagship && (
            <ProjectCard project={flagship} index={0} isFlagship={true} />
          )}

          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
              isFlagship={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
