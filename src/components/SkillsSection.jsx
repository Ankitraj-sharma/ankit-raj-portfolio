import React from 'react';
import { 
  Code2, 
  Server, 
  Sparkles, 
  Database, 
  Terminal, 
  Cpu, 
  Layers, 
  Flame, 
  Globe 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function SkillsSection() {
  const { skills } = portfolioData;

  const skillGroups = [
    {
      title: "Frontend Engineering",
      icon: <Layers className="w-5 h-5 text-[#ff5e14]" />,
      desc: "Responsive, high-FPS user interfaces with modern component ecosystems.",
      items: skills.frontend
    },
    {
      title: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      desc: "Scalable REST APIs, enterprise architectures, and robust services.",
      items: skills.backend
    },
    {
      title: "AI & Machine Learning",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      desc: "Autonomous AI agents, Gemini LLM integrations, and predictive models.",
      items: skills.aiMl
    },
    {
      title: "Databases & Schemas",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      desc: "Relational SQL and flexible NoSQL document stores with indexes.",
      items: skills.databases
    },
    {
      title: "Cloud, DevOps & Tooling",
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      desc: "Linux environments, CI/CD pipelines, Git workflows, and hosting.",
      items: skills.toolsCloud
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 04 · CAPABILITIES & ARSENAL
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
          TECH <span className="text-[#ff5e14]">STACK</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-3 font-mono">
          Languages, frameworks, databases, and AI tooling mastered through real-world deployment.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-4" />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            onMouseEnter={() => playSound('hover')}
            className={`glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#ff5e14]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group shadow-xl ${
              idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#ff5e14] transition-colors">
                  {group.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {group.desc}
                </p>
              </div>
            </div>

            {/* Skill Pills Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5">
              {group.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-slate-200">
                    {item.name}
                  </span>
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
                    <span className="text-[10px] font-mono text-[#ff5e14] font-semibold">
                      {item.level}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e14]" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
