"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, FileDown } from "lucide-react";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { isScrolled, activeSection } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<any>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-glass-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label="Thanigaivel - Back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent p-px shadow-neon-primary transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-white">
                <span className="text-accent">&lt;</span>T<span className="text-primary-light">/&gt;</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-primary-light transition-colors duration-200 text-base md:text-lg">
                Thanigaivel K
              </span>
              <span className="text-[10px] font-mono text-muted tracking-widest uppercase -mt-1 hidden sm:block">
                Software Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-3 py-1.5 rounded-full shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={cn(
                    "relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive ? "text-white" : "text-muted hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right CTA Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              download="Thanigaivel_Resume.pdf"
              variant="secondary"
              size="sm"
              icon={<FileDown className="w-3.5 h-3.5" />}
              iconPosition="left"
              ariaLabel="Download Resume"
            >
              Resume
            </Button>
            <Button
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              variant="primary"
              size="sm"
              ariaLabel="Contact Thanigaivel"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#0B1120]/95 backdrop-blur-2xl border-b border-white/[0.1]"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={cn(
                      "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/20 text-white border border-primary/30"
                        : "text-muted hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 flex flex-col gap-2.5">
                <Button
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  download="Thanigaivel_Resume.pdf"
                  variant="secondary"
                  size="md"
                  icon={<FileDown className="w-4 h-4" />}
                  iconPosition="left"
                  className="w-full justify-center"
                >
                  Download Resume
                </Button>
                <Button
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
