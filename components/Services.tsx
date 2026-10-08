"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Monitor,
  Server,
  Database,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-primary-light" />,
  Monitor: <Monitor className="w-6 h-6 text-accent" />,
  Server: <Server className="w-6 h-6 text-secondary-light" />,
  Database: <Database className="w-6 h-6 text-emerald-400" />,
  Cpu: <Cpu className="w-6 h-6 text-amber-400" />,
  Zap: <Zap className="w-6 h-6 text-cyan-400" />,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Developer Offerings"
          title="What I Bring to the Table"
          highlightText="& Technical Services"
          description="Services tailored to modern software requirements, from end-to-end web apps to database modeling and performance optimization."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                glow={index % 2 === 0 ? "primary" : "accent"}
                className="p-7 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/[0.1] shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {SERVICE_ICONS[service.icon]}
                    </div>
                    <span className="text-xs font-mono text-muted/60 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 font-medium leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted">
                      Key Deliverables
                    </p>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-primary-light group-hover:text-white transition-colors">
                  <span>Professional Standard</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
