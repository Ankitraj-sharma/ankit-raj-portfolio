import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenTerminal }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/60 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#ff5e14] flex items-center justify-center text-white font-black text-sm">
            AR
          </div>
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[var(--text-primary)]">
              {personal.name}
            </h4>
            <p className="text-[11px] font-mono text-[var(--text-muted)]">
              Computer Engineering · Marwadi University NAAC A+
            </p>
          </div>
        </div>

        {/* Center Credits */}
        <div className="text-center">
          <p className="text-xs font-mono text-[var(--text-secondary)]">
            Built with <span className="text-[#ff5e14] font-semibold">React 19</span>, <span className="font-semibold">Vite</span>, and <span className="font-semibold">Tailwind CSS</span>
          </p>
          <p className="text-[10px] font-mono text-[var(--text-muted)] mt-1">
            © {new Date().getFullYear()} Ankit Raj Sharma · All Rights Reserved
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenTerminal}
            className="p-2.5 rounded-xl theme-surface text-[var(--text-secondary)] hover:text-emerald-500 transition-colors"
            title="Launch CLI Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl theme-surface text-[var(--text-secondary)] hover:text-[#ff5e14] transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
