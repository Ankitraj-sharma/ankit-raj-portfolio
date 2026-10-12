import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  FolderGit2, 
  CheckCircle2, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'Full Stack', 'AI / ML', 'Frontend'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none text-center -z-10 opacity-30 dark:opacity-25">
        <span className="text-[14vw] font-black uppercase tracking-tight text-stroke-bg leading-none block">
          WORKS
        </span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 02 · PRODUCTION DELIVERABLES
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-[var(--text-primary)]">
          FEATURED <span className="text-[#ff5e14]">PROJECTS</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mt-2 font-mono">
          Architected with clean code, verified with DevTools QA, and deployed across Vercel, Render, and GitHub Pages.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-3" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
              activeCategory === cat
                ? 'bg-[#ff5e14] text-white shadow-md shadow-orange-500/25 font-bold'
                : 'theme-surface text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#ff5e14]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="theme-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div>
              {/* Header: Index & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[var(--text-muted)] group-hover:text-[#ff5e14] transition-colors">
                  0{idx + 1} // {project.year}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold border border-orange-500/20">
                  {project.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-[#ff5e14] transition-colors mb-2.5 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Architectural Highlights */}
              <div className="space-y-2 mb-6">
                {project.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-white/10 mb-5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.05] text-[10px] font-mono font-medium text-[var(--text-secondary)] border border-slate-200 dark:border-white/5"
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
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#ff5e14] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#ea580c] shadow-md shadow-orange-500/20 transition-all"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl theme-surface text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#ff5e14] transition-all text-xs font-mono"
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
      <div className="mt-14 theme-card p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#ff5e14] flex-shrink-0">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-display font-bold text-[var(--text-primary)]">
              Continuous Open-Source Work
            </h4>
            <p className="text-xs text-[var(--text-secondary)] font-mono mt-0.5">
              @Ankitraj-sharma · Explore all 25+ repositories, architectures, and full codebases
            </p>
          </div>
        </div>

        <a
          href="https://github.com/Ankitraj-sharma"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-surface)] hover:bg-[#ff5e14] hover:text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap shadow-md"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Explore GitHub</span>
        </a>
      </div>

    </section>
  );
}
