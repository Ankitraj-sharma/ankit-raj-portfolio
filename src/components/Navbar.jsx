import React from 'react';
import { 
  Code2, 
  Award, 
  Download, 
  Menu, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Terminal,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, HackerrankIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  soundOn, 
  setSoundOn, 
  openDrawer, 
  setOpenDrawer,
  openTerminal,
  setOpenTerminal 
}) {
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    playSound('success');
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.15 }
    });
    // Open resume or mailto
    window.open(`mailto:${personal.email}?subject=Interview%20/%20Opportunity%20for%20Ankit%20Raj%20Sharma&body=Hi%20Ankit,%20we%20reviewed%20your%20portfolio...`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={() => playSound('click')}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl glass-nav hover:border-[#ff5e14]/50 transition-all group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#ff5e14] flex items-center justify-center text-white font-black text-sm shadow-md shadow-[#ff5e14]/30 group-hover:scale-105 transition-transform">
            <span className="tracking-tighter">AR</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider uppercase text-white group-hover:text-[#ff5e14] transition-colors">
              {personal.shortName}
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 font-mono -mt-0.5">
              FULLSTACK
            </span>
          </div>
        </a>

        {/* Center Floating Social Capsule */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-nav shadow-lg">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
            className="p-2 rounded-full text-slate-300 hover:text-[#0077b5] hover:bg-white/10 transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.social.leetcode}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
            className="p-2 rounded-full text-slate-300 hover:text-[#ffa116] hover:bg-white/10 transition-all"
            title="LeetCode"
          >
            <LeetcodeIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.social.hackerrank}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
            className="p-2 rounded-full text-slate-300 hover:text-[#00ea64] hover:bg-white/10 transition-all"
            title="HackerRank"
          >
            <HackerrankIcon className="w-4 h-4" />
          </a>
          <div className="h-4 w-px bg-white/10 mx-1" />
          <button
            onClick={() => {
              playSound('click');
              setOpenTerminal(true);
            }}
            onMouseEnter={() => playSound('hover')}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
            title="Interactive Recruiter CLI"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI</span>
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              setSoundOn(!soundOn);
              if (!soundOn) playSound('click');
            }}
            className="p-2.5 rounded-xl glass-nav text-slate-300 hover:text-white hover:border-[#ff5e14]/40 transition-all"
            title={soundOn ? "Mute SFX" : "Enable SFX"}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-[#ff5e14]" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Dark / Light Mode */}
          <button
            onClick={() => {
              playSound('click');
              setDarkMode(!darkMode);
            }}
            className="p-2.5 rounded-xl glass-nav text-slate-300 hover:text-white hover:border-[#ff5e14]/40 transition-all"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            onMouseEnter={() => playSound('hover')}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#ff5e14] hover:text-white shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>

          {/* 9-Dot Bento Menu Button */}
          <button
            onClick={() => {
              playSound('tab');
              setOpenDrawer(true);
            }}
            onMouseEnter={() => playSound('hover')}
            className="p-2.5 rounded-xl glass-nav text-white hover:border-[#ff5e14] transition-all group"
            title="Open Menu"
          >
            <div className="w-4 h-4 grid grid-cols-3 gap-0.5">
              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5e14] transition-colors" />
              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5e14] transition-colors" />
              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5e14] transition-colors" />
              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5e14] transition-colors" />
              <span className="w-1 h-1 rounded-full bg-white group-hover:bg-[#ff5e14] transition-colors" />
              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5e14] transition-colors" />
              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5e14] transition-colors" />
              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5e14] transition-colors" />
              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5e14] transition-colors" />
            </div>
          </button>
        </div>

      </div>
    </header>
  );
}
