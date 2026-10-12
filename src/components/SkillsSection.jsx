import React from 'react';
import { 
  Layers, 
  Server, 
  Sparkles, 
  Database, 
  Terminal,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills } = portfolioData;

  const skillGroups = [
    {
      title: "Frontend Engineering",
      icon: <Layers className="w-5 h-5 text-[#ff5e14]" />,
      desc: "Responsive web apps, component systems, and high-performance UI.",
      items: skills.frontend
    },
    {
      title: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      desc: "RESTful architecture, multi-role auth, and scalable services.",
      items: skills.backend
    },
    {
      title: "AI & Machine Learning",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      desc: "Autonomous agent workflows, Gemini LLM integrations, and Python analytics.",
      items: skills.aiMl
    },
    {
      title: "Databases & Schemas",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      desc: "Relational MySQL models and flexible MongoDB document stores.",
      items: skills.databases
    },
    {
      title: "Cloud & Tooling",
      icon: <Terminal className="w-5 h-5 text-cyan-500" />,
      desc: "Linux environments, Git workflows, Vercel, Render, and Packet Tracer.",
      items: skills.toolsCloud
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 03 · TECHNICAL PROFICIENCIES
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-[var(--text-primary)]">
          CORE <span className="text-[#ff5e14]">CAPABILITIES</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mt-2 font-mono">
          Languages, frameworks, databases, and AI tooling backed by real production deployments.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-3" />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className={`theme-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between ${
              idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl theme-surface">
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-[var(--text-primary)]">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {group.desc}
                  </p>
                </div>
              </div>

              {/* Skills Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-3 rounded-2xl theme-surface hover:border-[#ff5e14]/40 transition-all flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-[var(--text-primary)]">
                      {item.name}
                    </span>
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-200 dark:border-white/5">
                      <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold">
                        {item.level}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e14]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
