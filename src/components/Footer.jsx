import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function Footer({ onOpenTerminal }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-white/10 bg-black/60 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#ff5e14] flex items-center justify-center text-white font-black text-sm">
            AR
          </div>
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">
              {personal.name}
            </h4>
            <p className="text-[11px] font-mono text-slate-400">
              Full Stack Developer & AI Engineer · Marwadi University
            </p>
          </div>
        </div>

        {/* Center Tech & Credit */}
        <div className="text-center">
          <p className="text-xs font-mono text-slate-400">
            Engineered with <span className="text-[#ff5e14]">React</span>, <span className="text-cyan-400">Vite</span>, and <span className="text-indigo-400">Tailwind CSS</span>
          </p>
          <p className="text-[10px] font-mono text-slate-400 mt-1">
            © {new Date().getFullYear()} Ankit Raj Sharma · All Rights Reserved
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playSound('click');
              onOpenTerminal();
            }}
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            title="Open CLI Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-[#ff5e14] transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
