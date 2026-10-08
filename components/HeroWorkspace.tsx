"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal as TerminalIcon,
  Database,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  CheckCircle2,
  Play,
  FileCode2,
} from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface CodeTab {
  filename: string;
  lang: string;
  code: string[];
}

const TABS: CodeTab[] = [
  {
    filename: "Thanigaivel.java",
    lang: "java",
    code: [
      "public class Thanigaivel {",
      "  private final String role = \"Software Developer\";",
      "  private final String degree = \"MCA (2023)\";",
      "  private final String[] stack = {",
      "    \"Java\", \"Python\", \"PHP\", \"React\", \"SQL\"",
      "  };",
      "",
      "  public void buildScalableApps() {",
      "    while (true) {",
      "      solveRealWorldProblems();",
      "      commitCleanCode();",
      "    }",
      "  }",
      "}",
    ],
  },
  {
    filename: "service.py",
    lang: "python",
    code: [
      "import mysql.connector",
      "from dataclasses import dataclass",
      "",
      "@dataclass",
      "class ApplicationPipeline:",
      "    def __init__(self, db_config):",
      "        self.connection = mysql.connector.connect(**db_config)",
      "        print('[SUCCESS] MySQL Database Connected')",
      "",
      "    def process_records(self, payload: dict):",
      "        cursor = self.connection.cursor()",
      "        query = 'INSERT INTO logs (status) VALUES (%s)'",
      "        cursor.execute(query, ('PROCESSED',))",
      "        return {'status': 200, 'success': True}",
    ],
  },
  {
    filename: "App.tsx",
    lang: "tsx",
    code: [
      "import React, { useState } from 'react';",
      "import { GlassCard, Button } from '@/components/ui';",
      "",
      "export const ModernDashboard = () => {",
      "  const [ready, setReady] = useState(true);",
      "",
      "  return (",
      "    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>",
      "      <GlassCard glow='primary'>",
      "        <h3>Engineered with High Standards</h3>",
      "      </GlassCard>",
      "    </div>",
      "  );",
      "};",
    ],
  },
];

const FLOATING_BADGES = [
  { name: "Java", icon: "☕", x: "-6%", y: "12%", delay: 0 },
  { name: "Python", icon: "🐍", x: "88%", y: "8%", delay: 0.5 },
  { name: "React", icon: "⚛️", x: "-8%", y: "65%", delay: 1 },
  { name: "MySQL", icon: "🐬", x: "90%", y: "60%", delay: 1.5 },
  { name: "PHP", icon: "🐘", x: "78%", y: "88%", delay: 2 },
];

export function HeroWorkspace() {
  const [activeTab, setActiveTab] = useState(0);
  const mouse = useMousePosition();

  // Subtle 3D Parallax offset
  const offsetX = mouse.normalizedX * 10;
  const offsetY = mouse.normalizedY * 8;

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Glow Halo behind editor */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      {/* Floating Technology Badges */}
      {FLOATING_BADGES.map((badge, idx) => (
        <motion.div
          key={badge.name}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4.5 + idx * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: badge.delay,
          }}
          style={{
            top: badge.y,
            left: badge.x,
          }}
          className="absolute z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F172A]/90 border border-white/[0.14] shadow-glass-lg backdrop-blur-md text-xs font-mono text-white pointer-events-none select-none"
        >
          <span>{badge.icon}</span>
          <span className="font-semibold text-slate-200">{badge.name}</span>
        </motion.div>
      ))}

      {/* Main IDE Window */}
      <motion.div
        animate={{
          x: offsetX,
          y: offsetY,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="relative rounded-2xl bg-[#090E17]/90 border border-white/[0.12] backdrop-blur-2xl shadow-2xl overflow-hidden"
      >
        {/* Editor Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-primary-light" />
              thanigaivel-workspace — VS Code
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Ready
            </span>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center bg-[#070B13] border-b border-white/[0.06] overflow-x-auto no-scrollbar">
          {TABS.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.filename}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono border-r border-white/[0.06] transition-colors ${
                  isActive
                    ? "bg-[#0B1120] text-primary-light border-b-2 border-b-primary font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                }`}
              >
                <FileCode2 className={`w-3.5 h-3.5 ${isActive ? "text-primary-light" : "text-slate-500"}`} />
                {tab.filename}
              </button>
            );
          })}
        </div>

        {/* Code Content */}
        <div className="p-4 md:p-5 font-mono text-xs md:text-[13px] leading-relaxed overflow-x-auto min-h-[250px] bg-[#090E17]">
          {TABS[activeTab].code.map((line, i) => (
            <div key={i} className="table-row group">
              <span className="table-cell pr-4 select-none text-slate-600 text-right text-[11px] w-6">
                {i + 1}
              </span>
              <span className="table-cell font-mono text-slate-200 whitespace-pre">
                {formatHighlightedCode(line)}
              </span>
            </div>
          ))}
        </div>

        {/* Integrated Terminal Panel */}
        <div className="border-t border-white/[0.08] bg-[#060A10]/95 p-3.5">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.05] text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-accent" />
              <span>bash — node v20.18.0</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <span>Port: 3000</span>
              <span>UTF-8</span>
            </div>
          </div>
          <div className="font-mono text-[11px] space-y-1 text-slate-300">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-accent font-bold">$</span>
              <span>npm run dev</span>
            </div>
            <div className="text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Compiled in 128ms • Server running at http://localhost:3000</span>
            </div>
            <div className="text-slate-400 flex items-center gap-1.5">
              <Database className="w-3 h-3 text-primary-light" />
              <span>Database status: Connected to MySQL & Oracle services</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Simple lightweight syntax colorizer for the mock IDE tabs
function formatHighlightedCode(line: string) {
  // Java / Python / TS keywords
  const keywords = ["public", "class", "private", "final", "String", "void", "while", "true", "import", "from", "def", "return", "const", "export"];
  const tokens = line.split(/(\s+|"[^"]*"|'[^']*'|[(),={}:;.[\]])/);

  return tokens.map((token, index) => {
    if (keywords.includes(token)) {
      return <span key={index} className="text-secondary-light font-semibold">{token}</span>;
    }
    if (token.startsWith('"') || token.startsWith("'")) {
      return <span key={index} className="text-emerald-300">{token}</span>;
    }
    if (["Thanigaivel", "ApplicationPipeline", "ModernDashboard"].includes(token)) {
      return <span key={index} className="text-accent font-bold">{token}</span>;
    }
    if (["solveRealWorldProblems", "commitCleanCode", "process_records", "useState"].includes(token)) {
      return <span key={index} className="text-primary-light">{token}</span>;
    }
    if (["boolean", "dict", "int", "number"].includes(token)) {
      return <span key={index} className="text-amber-300">{token}</span>;
    }
    return <span key={index}>{token}</span>;
  });
}
