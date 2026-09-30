import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Languages, 
  Terminal, 
  ExternalLink,
  Download
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function AboutSection() {
  const { personal, education, achievements } = portfolioData;

  const handleDownloadCV = () => {
    playSound('success');
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.4 }
    });
    window.open(`mailto:${personal.email}?subject=Resume%20Request%20for%20Ankit%20Raj%20Sharma`, '_blank');
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 01 · BACKGROUND & JOURNEY
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
          ABOUT <span className="text-[#ff5e14]">ANKIT RAJ SHARMA</span>
        </h2>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Photo Card (Styled like Reel Frame 0094) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden glass-panel p-3 group border border-white/10 hover:border-[#ff5e14]/50 transition-all shadow-2xl">
            
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
              <img
                src="./images/ankit-portrait.jpg"
                alt="Ankit Raj Sharma Portrait"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-nav flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Ankit Raj Sharma
                  </h4>
                  <p className="text-xs text-slate-300 font-mono">
                    Marwadi University · Rajkot
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#ff5e14]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold font-mono">7.91</span>
                </div>
              </div>
            </div>

            {/* Quick Location & Status */}
            <div className="flex items-center justify-between p-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff5e14]" />
                <span>Rajkot, Gujarat (360003)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Relocation / Remote</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Narrative & Arc Badge (Reel Frame 0094) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Reel-Inspired Arc Badge & Narrative Banner */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col sm:flex-row gap-6 items-center">
            
            {/* Split Half Circle Graphic (Signature element from Frame 0094) */}
            <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center relative overflow-hidden shadow-inner">
                {/* Orange Left Half Arc */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-[#ff5e14] to-amber-500 rounded-l-full shadow-lg" />
                <div className="relative z-10 text-center flex flex-col items-center">
                  <span className="text-4xl font-display font-black text-white leading-none">
                    2+
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 mt-1">
                    Years of
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#ff5e14] font-bold">
                    Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Accompanying Text */}
            <div className="flex-1">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                "From initial architecture to production deployment, I focus on delivering scalable, bulletproof software. My foundation combines rigorous computer engineering principles with fast-paced hands-on development in full-stack web and autonomous AI."
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  ⚡ Full Stack
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  🔒 Cisco Cyber Intern
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  🤖 AI Agents & LLMs
                </span>
              </div>
            </div>

          </div>

          {/* Education & Academic Rigor */}
          <div className="glass-panel p-6 rounded-3xl">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff5e14] mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-[#ff5e14]/40 pl-4 py-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-amber-400 font-semibold">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {edu.institution} · <span className="text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Coursework: {edu.coursework}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Key Roles */}
          <div className="glass-panel p-6 rounded-3xl">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Leadership & Industry Experience</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.slice(0, 4).map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                    <span>{item.role}</span>
                  </div>
                  <div className="text-[11px] text-[#ff5e14] font-mono">
                    {item.organization}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download CTA */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleDownloadCV}
              onMouseEnter={() => playSound('hover')}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#ff5e14] hover:text-white transition-all shadow-xl"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => playSound('click')}
              className="px-6 py-3 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-[#ff5e14] transition-all text-xs font-semibold uppercase tracking-wider"
            >
              Contact Ankit
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
