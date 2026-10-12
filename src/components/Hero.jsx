import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, GraduationCap, Code, ShieldCheck, Terminal, MapPin, Database, Sparkles, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  const { personal, stats } = portfolioData;

  const roles = [
    "Full-Stack Web Architect",
    "Aspiring Data Scientist & ML Engineer",
    "Upstream Open Source Contributor (Odoo & Apache)",
    "Co-Developer — Sentinel Android (Team PhishShield)",
    "Autonomous AI Agent & RAG Developer",
    "Operations Coordinator — HackerRank MU"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 25 : 55;

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
      
      {/* Subtle Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none text-center -z-0 opacity-20 dark:opacity-15">
        <span className="text-[13vw] font-black uppercase tracking-tight text-stroke-bg leading-none block">
          ENGINEER
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                Available for Full-Time Roles & Projects
              </span>
            </div>

            {/* Main Headline with HIGH CONTRAST */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Crafting robust software &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] via-amber-500 to-[#ff5e14]">
                  intelligent systems.
                </span>
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="min-h-[32px] mt-3 flex items-center">
                <span className="text-sm sm:text-base font-mono font-medium text-slate-700 dark:text-slate-300">
                  <span className="text-[#ff5e14] font-bold">&gt;</span> {displayText}
                  <span className="animate-pulse text-[#ff5e14] font-bold">|</span>
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Ankit Raj Sharma</strong> — Full Stack Developer, Open Source Contributor (<strong className="text-[#ff5e14] font-semibold">Odoo</strong> & <strong className="text-[#ff5e14] font-semibold">Apache Camel K</strong>), and aspiring <strong className="text-orange-600 dark:text-orange-400 font-semibold">Data Scientist & AI Engineer</strong> (B.Tech Computer Engineering, <strong className="text-slate-900 dark:text-white font-semibold">Marwadi University NAAC A+, CGPA 7.91</strong>). Co-developer of <strong className="text-slate-900 dark:text-white font-semibold">Sentinel Android</strong> (Team PhishShield ML cybersecurity) with expertise across <strong className="text-slate-900 dark:text-white font-semibold">React, Node.js, Supabase, Python & RAG architectures</strong>.
            </p>

            {/* Quick Metrics Strip - Perfectly Color Graded */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2 max-w-xl">
              
              <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 border-l-4 border-l-amber-500 shadow-sm dark:shadow-md">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>CGPA</span>
                </div>
                <div className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  7.91
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mt-0.5">
                  Marwadi Univ A+
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 border-l-4 border-l-[#ff5e14] shadow-sm dark:shadow-md">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                  <Code className="w-3.5 h-3.5 text-[#ff5e14]" />
                  <span>Shipped</span>
                </div>
                <div className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  8+ Live
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mt-0.5">
                  Web & AI Systems
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 border-l-4 border-l-indigo-500 shadow-sm dark:shadow-md">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Badges</span>
                </div>
                <div className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  10+
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mt-0.5">
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
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 font-semibold text-xs tracking-wider uppercase text-slate-900 dark:text-white hover:border-[#ff5e14]/60 transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#ff5e14]" />
                <span>Get Resume</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors shadow-sm"
                title="Launch Recruiter Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Balanced Professional Studio Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            
            <div className="relative w-full max-w-[370px] sm:max-w-[410px]">
              
              {/* Refined Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent rounded-[32px] blur-2xl -z-10" />

              {/* Studio Frame with Dark/Light Adaptive Border */}
              <div className="p-3 rounded-[32px] bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl">
                
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-200 dark:bg-[#0f172a] flex items-end justify-center">
                  
                  {/* Subtle inner bottom gradient for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Clean studio image */}
                  <img
                    src="./images/ankit-portrait.jpg"
                    alt="Ankit Raj Sharma — Full Stack Developer & Aspiring Data Scientist"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Bottom Info Floating Card */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 p-3.5 rounded-2xl bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-lg flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-bold font-display uppercase tracking-wider text-slate-900 dark:text-white">
                        Ankit Raj Sharma
                      </h3>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 font-mono flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#ff5e14]" />
                        Rajkot, Gujarat · Full Stack & Data Science
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
