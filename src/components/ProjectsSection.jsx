import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ArrowUpRight, 
  FolderGit2 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'Full Stack', 'AI / ML', 'AI & Web', 'Frontend'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* GIANT BACKDROP TEXT: WORKS (Frame 0189 of Reel) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none text-center -z-10">
        <h2 className="text-[16vw] font-black uppercase tracking-tight text-white/[0.03] leading-none text-stroke-title">
          WORKS
        </h2>
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 02 · PRODUCTION PORTFOLIO
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
          FEATURED <span className="text-[#ff5e14]">PROJECTS</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-3 font-mono">
          Architected with clean code, modern stacks, and deployed across Vercel, Render, and GitHub Pages.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-4" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playSound('tab');
              setActiveCategory(cat);
            }}
            className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
              activeCategory === cat
                ? 'bg-[#ff5e14] text-white shadow-lg shadow-[#ff5e14]/30 scale-105'
                : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onMouseEnter={() => playSound('hover')}
            className="group glass-panel rounded-3xl p-6 flex flex-col justify-between border border-white/10 hover:border-[#ff5e14]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5e14]/5 rounded-full blur-2xl group-hover:bg-[#ff5e14]/15 transition-all pointer-events-none" />

            <div>
              {/* Card Header: Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#ff5e14] transition-colors">
                  0{idx + 1} // {project.year}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-[#ff5e14] font-semibold">
                  {project.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#ff5e14] transition-colors mb-2 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {project.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[10px] font-mono text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playSound('click')}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#ff5e14] hover:text-white transition-all shadow-md"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound('click')}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-[#ff5e14] transition-all text-xs font-mono"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* GitHub Repository Banner */}
      <div className="mt-16 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <FolderGit2 className="w-6 h-6 text-[#ff5e14]" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-display font-bold text-white">
              Explore More Repositories on GitHub
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              @Ankitraj-sharma · Continuous commits, open-source architectures & utilities
            </p>
          </div>
        </div>

        <a
          href="https://github.com/Ankitraj-sharma"
          target="_blank"
          rel="noreferrer"
          onClick={() => playSound('click')}
          className="px-6 py-3 rounded-2xl bg-[#ff5e14] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#e04f0f] transition-all shadow-lg shadow-[#ff5e14]/30 flex items-center gap-2 whitespace-nowrap"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View GitHub Profile</span>
        </a>
      </div>

    </section>
  );
}
