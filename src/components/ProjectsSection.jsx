import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  FolderGit2, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  GitPullRequest,
  Star,
  Terminal,
  Database,
  Brain
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const { projects, openSourceContributions } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'AI & Data Science', 'Full Stack', 'ML & Cybersecurity', 'Frontend'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none text-center -z-10 opacity-20 dark:opacity-15">
        <span className="text-[13vw] font-black uppercase tracking-tight text-stroke-bg leading-none block">
          WORKS
        </span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 02 · PRODUCTION DELIVERABLES & AI SYSTEMS
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white">
          FEATURED <span className="text-[#ff5e14]">PROJECTS</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-2 font-mono">
          Full-stack web architectures, RAG pipelines, on-device machine learning, and venture intelligence agents.
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
                : 'bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-[#ff5e14]/50'
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
            className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md hover:border-[#ff5e14]/60 transition-all flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              {/* Header: Index & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 group-hover:text-[#ff5e14] transition-colors">
                  0{idx + 1} // {project.year}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold border border-orange-500/20">
                  {project.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-[#ff5e14] transition-colors mb-2.5 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Architectural Highlights */}
              <div className="space-y-2 mb-6">
                {project.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800 mb-5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-[10px] font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-[#ff5e14] transition-all text-xs font-mono"
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

      {/* DEDICATED OPEN SOURCE CONTRIBUTIONS SECTION */}
      <div className="mt-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-orange-500/10 text-[#ff5e14]">
            <GitPullRequest className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              Open Source Contributions & Ecosystem Work
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Practical community engagements, upstream forks, and open-source tooling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {openSourceContributions.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold">
                    {item.type}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-medium">
                    {item.role}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-[#ff5e14] hover:text-[#ea580c] flex items-center gap-1 font-semibold"
              >
                <span>View Contribution</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Repository Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#ff5e14] flex-shrink-0">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
              25+ Repositories & Continuous Commits
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
              @Ankitraj-sharma · Explore all web applications, ML experiments, AI agents, and systems code
            </p>
          </div>
        </div>

        <a
          href="https://github.com/Ankitraj-sharma"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-[#ff5e14] dark:hover:bg-[#ff5e14] dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap shadow-md"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Explore GitHub Profile</span>
        </a>
      </div>

    </section>
  );
}
