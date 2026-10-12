import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, GraduationCap, Code, ShieldCheck, Terminal, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  const { personal, stats } = portfolioData;

  const roles = [
    "Full-Stack Web Architect",
    "Autonomous AI Agent Developer",
    "Cisco Cybersecurity Trained",
    "HackerRank Operations Lead"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
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
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-8 flex flex-col justify-center overflow-hidden">
      
      {/* Subtle Background Typography Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none text-center -z-0 opacity-40 dark:opacity-30">
        <span className="text-[14vw] font-black uppercase tracking-tight text-stroke-bg leading-none block">
          ENGINEER
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Professional Narrative & Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full theme-surface w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                Available for Full-Time Roles & Projects
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
                Crafting robust software &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] via-amber-500 to-[#ff5e14]">
                  intelligent systems.
                </span>
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="min-h-[32px] mt-3 flex items-center">
                <span className="text-base sm:text-lg font-mono font-medium text-[var(--text-secondary)]">
                  &gt; {displayText}
                  <span className="animate-pulse text-[#ff5e14] font-bold">|</span>
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-[var(--text-primary)] font-semibold">Ankit Raj Sharma</strong> — a full-stack engineer and Computer Engineering graduate student at <strong className="text-[var(--text-primary)] font-semibold">Marwadi University (NAAC A+, CGPA 7.91)</strong>. Experienced in building production web applications, autonomous AI agents, and secure network infrastructure.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2 max-w-xl">
              
              <div className="p-3.5 rounded-2xl theme-surface border-l-4 border-l-amber-500">
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono uppercase">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>CGPA</span>
                </div>
                <div className="text-2xl font-display font-bold text-[var(--text-primary)] mt-0.5">
                  7.91
                </div>
                <span className="text-[10px] text-[var(--text-muted)] font-mono">
                  Marwadi Univ A+
                </span>
              </div>

              <div className="p-3.5 rounded-2xl theme-surface border-l-4 border-l-[#ff5e14]">
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono uppercase">
                  <Code className="w-3.5 h-3.5 text-[#ff5e14]" />
                  <span>Shipped</span>
                </div>
                <div className="text-2xl font-display font-bold text-[var(--text-primary)] mt-0.5">
                  7+ Live
                </div>
                <span className="text-[10px] text-[var(--text-muted)] font-mono">
                  Production Apps
                </span>
              </div>

              <div className="p-3.5 rounded-2xl theme-surface border-l-4 border-l-indigo-500">
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Badges</span>
                </div>
                <div className="text-2xl font-display font-bold text-[var(--text-primary)] mt-0.5">
                  10+
                </div>
                <span className="text-[10px] text-[var(--text-muted)] font-mono">
                  Cisco & Industry
                </span>
              </div>

            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#ff5e14] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#ea580c] shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}?subject=Resume%20Request%20-%20Ankit%20Raj%20Sharma`}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl theme-surface font-semibold text-xs tracking-wider uppercase text-[var(--text-primary)] hover:border-[#ff5e14]/50 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#ff5e14]" />
                <span>Get Resume</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="p-3.5 rounded-2xl theme-surface text-[var(--text-muted)] hover:text-emerald-500 transition-colors"
                title="Launch Recruiter Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Balanced Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Refined Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent rounded-[32px] blur-2xl -z-10" />

              {/* Photo Card with Neutral Background Plate */}
              <div className="photo-frame rounded-[32px] p-3 overflow-hidden">
                
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-end justify-center">
                  
                  {/* Subtle inner radial gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Clean studio image */}
                  <img
                    src="./images/ankit-portrait.jpg"
                    alt="Ankit Raj Sharma — Full Stack Developer"
                    className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700"
                  />

                  {/* Bottom Info Floating Pill */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-bold font-display uppercase tracking-wider text-slate-900 dark:text-white">
                        Ankit Raj Sharma
                      </h3>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#ff5e14]" />
                        Rajkot, Gujarat · Open for Relocation
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#ff5e14] font-mono text-xs font-bold">
                      A+
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
