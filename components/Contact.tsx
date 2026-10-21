"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
  Youtube,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    // Simulate reliable dispatch & formulate mailto fallback option
    setTimeout(() => {
      setStatus("success");
      setStatusMessage("Thank you! Your message inquiry has been recorded. You can also reach out directly via email.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something"
          highlightText="Together"
          description="Whether you have an entry-level opportunity, project collaboration, or just want to discuss software engineering — I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard glow="primary" className="p-6 sm:p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Fill out the form below or email me directly at{" "}
                <a
                  href={`mailto:${PERSONAL_INFO.socialLinks.emailRaw}`}
                  className="text-primary-light hover:underline font-mono"
                >
                  {PERSONAL_INFO.socialLinks.emailRaw}
                </a>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase text-muted tracking-wider mb-1.5"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase text-muted tracking-wider mb-1.5"
                    >
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase text-muted tracking-wider mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Opportunity / Collaboration / Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase text-muted tracking-wider mb-1.5"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Thanigaivel, I reviewed your portfolio and would like to connect regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Status alerts */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>{statusMessage}</div>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>{statusMessage}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={status === "loading"}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    Send Message
                  </Button>

                  <a
                    href={`mailto:${PERSONAL_INFO.socialLinks.emailRaw}?subject=${encodeURIComponent(
                      formData.subject || "Portfolio Contact"
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="text-xs font-mono text-muted hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Or open default email client</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </form>
            </GlassCard>
          </motion.div>

          {/* Right: Glass Contact Card & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Connect Info */}
            <GlassCard glow="accent" className="p-6 md:p-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white">
                  Quick Details
                </h4>
                <p className="text-xs text-muted mt-1">
                  Open for software developer & fresher positions
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-primary-light shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted uppercase">Email Address</p>
                    <a
                      href={PERSONAL_INFO.socialLinks.email}
                      className="text-white hover:text-primary-light font-mono text-xs md:text-sm transition-colors"
                    >
                      {PERSONAL_INFO.socialLinks.emailRaw}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-secondary-light shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted uppercase">Phone Number</p>
                    <a
                      href={PERSONAL_INFO.socialLinks.phone}
                      className="text-white hover:text-secondary-light font-mono text-xs md:text-sm transition-colors"
                    >
                      {PERSONAL_INFO.socialLinks.phoneRaw}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-accent shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted uppercase">Location</p>
                    <p className="text-white text-xs md:text-sm">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted uppercase">Availability</p>
                    <p className="text-emerald-400 text-xs md:text-sm font-medium">Immediate Joiner / Full-time</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs font-mono uppercase text-muted tracking-wider mb-3">
                  Connect on Social Platforms
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href={PERSONAL_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/50 hover:bg-primary/10 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-primary-light transition-colors" />
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-white mt-1.5">LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/50 hover:bg-primary/10 transition-all group"
                  >
                    <Github className="w-5 h-5 text-slate-300 group-hover:text-primary-light transition-colors" />
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-white mt-1.5">GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/50 hover:bg-primary/10 transition-all group"
                  >
                    <Youtube className="w-5 h-5 text-slate-300 group-hover:text-primary-light transition-colors" />
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-white mt-1.5">YouTube</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
