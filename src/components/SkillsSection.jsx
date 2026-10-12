import React from 'react';
import { 
  Layers, 
  Server, 
  Sparkles, 
  Database, 
  Terminal,
  Brain,
  TrendingUp,
  Cloud,
  Cpu,
  Zap,
  BarChart2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills } = portfolioData;

  const skillGroups = [
    {
      title: "Data Science Core (Career Focus)",
      icon: <BarChart2 className="w-5 h-5 text-amber-500" />,
      badge: "Aspiring Data Scientist",
      desc: "Data manipulation, statistical analysis, exploratory visualization, and insights extraction.",
      items: skills.dataScience,
      highlight: true
    },
    {
      title: "Machine Learning & AI Systems",
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      badge: "Intermediate ML",
      desc: "Supervised/unsupervised algorithms, evaluation metrics, RAG pipelines, and GraphRAG.",
      items: skills.machineLearning,
      highlight: true
    },
    {
      title: "Data Platforms & Environments",
      icon: <Terminal className="w-5 h-5 text-cyan-500" />,
      badge: "Scientific Tools",
      desc: "Interactive notebooks, cloud compute, and reproducible research workflows.",
      items: skills.dataPlatforms
    },
    {
      title: "Databases, Schemas & Cloud Stores",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      badge: "Supabase & SQL/NoSQL",
      desc: "Modern Postgres with RLS, realtime events, document collections, and vector stores.",
      items: skills.databases
    },
    {
      title: "Frontend Engineering",
      icon: <Layers className="w-5 h-5 text-[#ff5e14]" />,
      badge: "Modern Web",
      desc: "React, Next.js, TypeScript, and responsive enterprise interfaces.",
      items: skills.frontend
    },
    {
      title: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      badge: "APIs & Services",
      desc: "Node.js, Express, Java, C#, and high-throughput REST architecture.",
      items: skills.backend
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 03 · TECHNICAL ARSENAL & PLATFORMS
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white">
          SKILLS & <span className="text-[#ff5e14]">CAPABILITIES</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-2 font-mono">
          Full-Stack Web Engineering + Data Science, Machine Learning, Supabase, and AI Tooling.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-3" />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md hover:border-[#ff5e14]/60 transition-all flex flex-col justify-between ${
              group.highlight ? 'ring-1 ring-orange-500/30' : ''
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {group.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-[#ff5e14]/50 transition-all flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      {item.name}
                    </span>
                    <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-slate-200 dark:border-slate-800">
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
