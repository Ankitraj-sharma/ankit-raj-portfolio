import React from 'react';
import { 
  Download, 
  Sun, 
  Moon, 
  Terminal,
  Menu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  openDrawer, 
  setOpenDrawer,
  openTerminal,
  setOpenTerminal 
}) {
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    window.open(`mailto:${personal.email}?subject=Resume%20Request%20-%20Ankit%20Raj%20Sharma&body=Hi%20Ankit,%20we%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect.`, '_blank');
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-2xl theme-nav hover:border-[#ff5e14]/50 transition-all group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#ff5e14] to-amber-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <span>AR</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider uppercase text-[var(--text-primary)] group-hover:text-[#ff5e14] transition-colors">
              {personal.shortName}
            </span>
            <span className="text-[10px] tracking-widest text-[var(--text-muted)] font-mono -mt-0.5">
              FULLSTACK
            </span>
          </div>
        </a>

        {/* Center Navigation Links (Clean & Professional) */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full theme-nav">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-500/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-4 w-px bg-slate-400/20 mx-1" />
          <button
            onClick={() => setOpenTerminal(true)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all"
            title="Interactive Recruiter CLI"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI</span>
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2">
          
          {/* Social Quick Links */}
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl theme-nav text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#ff5e14]/40 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl theme-nav text-[var(--text-secondary)] hover:text-[#0077b5] hover:border-[#ff5e14]/40 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl theme-nav text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#ff5e14]/50 transition-all"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Download Resume Button */}
          <button
            onClick={handleDownloadCV}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ff5e14] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#ea580c] shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Bento Menu Toggle */}
          <button
            onClick={() => setOpenDrawer(true)}
            className="p-2.5 rounded-xl theme-nav text-[var(--text-primary)] hover:border-[#ff5e14] transition-all"
            title="Open Directory Menu"
          >
            <div className="w-4 h-4 grid grid-cols-3 gap-0.5">
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-300" />
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-300" />
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-300" />
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-300" />
              <span className="w-1 h-1 rounded-full bg-[#ff5e14]" />
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-300" />
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-300" />
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-300" />
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-300" />
            </div>
          </button>

        </div>

      </div>
    </header>
  );
}
