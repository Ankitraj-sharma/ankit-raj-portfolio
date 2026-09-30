import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, GraduationCap, Flame, Code, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function Hero({ onOpenTerminal }) {
  const { personal, stats, heroBullets } = portfolioData;

  // Typing effect for dynamic sub-roles
  const roles = [
    "Full Stack Developer",
    "AI Agent Architect",
    "Cybersecurity Graduate",
    "HackerRank Coordinator"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 flex flex-col justify-between overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#ff5e14]/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* GIANT BACKDROP TYPOGRAPHY: DEVELOPER */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-full select-none pointer-events-none text-center -z-0">
        <h1 className="text-[13vw] sm:text-[14vw] font-black uppercase tracking-tight text-white/[0.04] leading-none text-stroke-title">
          DEVELOPER
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Main 3-Column Layout: Left Card, Center Portrait, Right Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 lg:pt-0">
          
          {/* Left Column: Bio & Highlights Card */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl relative overflow-hidden group hover:border-[#ff5e14]/40 transition-all shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff5e14]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Available for Opportunities
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white leading-tight">
                HELLO! I'M <span className="text-[#ff5e14]">{personal.name}</span>
              </h2>

              <div className="min-h-[28px] mt-1 mb-4 flex items-center">
                <span className="text-sm sm:text-base font-mono font-medium text-slate-300">
                  &gt; {displayText}
                  <span className="animate-pulse text-[#ff5e14]">|</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5 font-normal">
                Computer Engineering student at <strong className="text-white">Marwadi University (NAAC A+)</strong> with a CGPA of <strong className="text-amber-400">7.91</strong>. Specialized in production full-stack systems, Cisco cybersecurity, and intelligent AI agents.
              </p>

              {/* Bullet Features */}
              <div className="space-y-2.5 pt-3 border-t border-white/10">
                {heroBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-[#ff5e14] mt-0.5 text-xs">✦</span>
                    <span className="leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  onClick={() => playSound('click')}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ff5e14] text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#ff5e14]/30 hover:bg-[#e04f0f] transition-all transform hover:-translate-y-0.5"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    playSound('click');
                    onOpenTerminal();
                  }}
                  className="px-4 py-3 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-[#ff5e14]/50 transition-all font-mono text-xs flex items-center gap-1.5"
                  title="Run interactive terminal"
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CLI</span>
                </button>
              </div>

            </div>
          </div>

          {/* Center Column: Portrait Image with Layering */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] flex items-end justify-center">
              
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-0 m-auto w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#ff5e14]/25 via-amber-500/20 to-indigo-600/10 blur-3xl -z-10 animate-pulse-glow" />

              {/* Persona Cutout Photo */}
              <div className="relative w-full h-full flex items-end justify-center">
                <img
                  src="./images/ankit-hero.png"
                  alt="Ankit Raj Sharma"
                  className="w-full h-auto max-h-[92%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-[1.02] transition-transform duration-500 z-10"
                />
              </div>

              {/* Floating Bottom Pill Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full glass-nav border border-[#ff5e14]/40 shadow-xl flex items-center gap-2 whitespace-nowrap">
                <Flame className="w-4 h-4 text-[#ff5e14] animate-bounce" />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-white">
                  Full Stack · AI · Cyber
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Floating Stats Cards (Inspired by Reel Frame 0030) */}
          <div className="lg:col-span-3 order-3 flex flex-col gap-4">
            
            {/* Stat 1: CGPA */}
            <div className="glass-panel p-5 rounded-2xl hover:border-amber-400/40 transition-all group animate-float-slow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400">
                  Academic Merit
                </span>
                <GraduationCap className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-extrabold text-white">
                  7.91
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold">CGPA</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Marwadi University (NAAC A+)</p>
            </div>

            {/* Stat 2: Projects (Dark High Contrast Card from Reel) */}
            <div className="p-5 rounded-2xl bg-black border border-white/20 hover:border-[#ff5e14] transition-all group shadow-2xl animate-float-delayed">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#ff5e14]">
                  Production Code
                </span>
                <Code className="w-4 h-4 text-[#ff5e14] group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-extrabold text-white">
                  7+
                </span>
                <span className="text-xs font-mono text-[#ff5e14] font-bold">LIVE DEPLOYED</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">Vercel, Render & GitHub Actions</p>
            </div>

            {/* Stat 3: Certifications */}
            <div className="glass-panel p-5 rounded-2xl hover:border-indigo-400/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400">
                  Industry Badges
                </span>
                <ShieldCheck className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-extrabold text-white">
                  10+
                </span>
                <span className="text-xs font-mono text-indigo-400 font-bold">CERTIFIED</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Cisco, Infosys, Coursera & Udemy</p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="pt-8 flex justify-center items-center">
        <a 
          href="#statement"
          onClick={() => playSound('hover')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-[#ff5e14] transition-colors">
            Scroll To Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center p-1 group-hover:border-[#ff5e14] transition-colors">
            <span className="w-1 h-2 rounded-full bg-[#ff5e14] animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
}
