"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Youtube, Mail, Heart, Code2 } from "lucide-react";
import { PERSONAL_INFO, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#070B14] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/[0.06]">
          {/* Col 1: Monogram & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent p-px">
                <div className="w-full h-full bg-[#0B1120] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-white">
                  &lt;T/&gt;
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Thanigaivel K
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted max-w-sm leading-relaxed">
              Software Developer & IT Graduate (MCA CGPA 8.99, Annamalai University) focused on building clean, secure, and scalable software solutions.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono uppercase text-muted tracking-wider mb-3">
              Quick Links
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social Icons & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.email}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-primary-light transition-colors group"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <div className="p-1 rounded-md bg-white/[0.05] group-hover:bg-primary/20 transition-colors">
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>© {currentYear} Thanigaivel K. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-500">
            <span>Crafted with Next.js, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
