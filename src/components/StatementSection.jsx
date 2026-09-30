import React from 'react';
import { Sparkles, ArrowUpRight, Zap, Target, Cpu, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function StatementSection() {
  const { personal } = portfolioData;

  const tickerItems = [
    "REACT.JS & NEXT.JS",
    "NODE.JS & EXPRESS",
    "AUTONOMOUS AI AGENTS",
    "CISCO CYBERSECURITY",
    "MONGODB & MYSQL",
    "TYPESCRIPT ARCHITECTURE",
    "VERCEL & RENDER DEPLOYMENTS",
    "MARWADI UNIVERSITY A+"
  ];

  return (
    <section id="statement" className="py-20 relative overflow-hidden bg-black/40 border-y border-white/5">
      
      {/* Infinite Marquee Ticker */}
      <div className="py-3 border-y border-white/10 bg-white/[0.02] flex overflow-hidden select-none whitespace-nowrap">
        <div className="flex animate-marquee gap-8 items-center text-xs font-mono tracking-widest text-slate-400">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-[#ff5e14]">✦</span>
              <span className="hover:text-white transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        
        {/* Metric Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          
          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-[#ff5e14]">
            <span className="text-3xl font-display font-black text-white">7.91</span>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
              B.Tech CGPA
            </span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-cyan-400">
            <span className="text-3xl font-display font-black text-white">7+</span>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
              Live Projects
            </span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-indigo-400">
            <span className="text-3xl font-display font-black text-white">10+</span>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
              Certifications
            </span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-emerald-400">
            <span className="text-3xl font-display font-black text-white">100%</span>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
              Commitment to Quality
            </span>
          </div>

        </div>

        {/* Central Bold Philosophy Statement (Reel Frame 0060) */}
        <div className="text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#ff5e14]/30 text-xs font-mono uppercase tracking-wider text-[#ff5e14] mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Philosophy & Engineering Ethos</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-white leading-tight sm:leading-snug tracking-tight">
            I AM DEDICATED TO BRINGING YOUR VISION TO LIFE BY CRAFTING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] via-amber-400 to-[#ff5e14]">
              UNIQUE, HIGHLY AESTHETIC, AND IMPACTFUL
            </span>{' '}
            DIGITAL EXPERIENCES.
          </h2>

          <p className="mt-6 text-sm sm:text-base font-mono text-slate-400 uppercase tracking-widest">
            My work speaks louder than words — explore the results.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#projects"
              onClick={() => playSound('click')}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#ff5e14] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={() => playSound('click')}
              className="px-6 py-3 rounded-full glass-panel text-white font-semibold text-xs tracking-wider uppercase hover:border-[#ff5e14] transition-all flex items-center gap-2"
            >
              <span>Get In Touch</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
