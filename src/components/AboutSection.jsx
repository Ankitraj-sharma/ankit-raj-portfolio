import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Bike,
  TreePine,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { personal, education, achievements } = portfolioData;

  const perspectives = [
    {
      title: "Focus & Velocity",
      subtitle: "KTM Duke 200 Rides",
      img: "./images/ankit-duke.jpg",
      desc: "Speed with control. Long rides clear the mind, teaching split-second precision and focus on the road ahead.",
      tag: "Focus"
    },
    {
      title: "Rooted Growth",
      subtitle: "Banyan Perspective",
      img: "./images/ankit-banyan.jpg",
      desc: "Grounded in deep computer science principles. Durable software comes from patient resilience and strong roots.",
      tag: "Resilience"
    },
    {
      title: "Engineering Grit",
      subtitle: "Deep Build Mode",
      img: "./images/ankit-hoodie.jpg",
      desc: "Debugging till it compiles clean. The commitment to finish what is started and refine until production-ready.",
      tag: "Grit"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 01 · BACKGROUND & EXPERIENCE
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-[var(--text-primary)]">
          ABOUT & <span className="text-[#ff5e14]">CREDENTIALS</span>
        </h2>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Education & Academic Merit */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Education Card */}
          <div className="theme-card p-6 sm:p-7 rounded-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#ff5e14] mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Background</span>
            </div>

            <div className="space-y-5">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-orange-500/40 pl-4 py-0.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                    {edu.institution} · <span className="font-mono text-[var(--text-muted)]">{edu.period}</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] mt-1 font-mono leading-relaxed">
                    Coursework: {edu.coursework}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Philosophy Statement */}
          <div className="theme-surface p-6 rounded-3xl border-l-4 border-l-[#ff5e14]">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
              Engineering Stance
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed italic">
              "{personal.statement}"
            </p>
          </div>

        </div>

        {/* Right Column: Experience & Leadership Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <div className="theme-card p-6 sm:p-7 rounded-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#ff5e14] mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Industry Internships & Campus Leadership</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl theme-surface hover:border-[#ff5e14]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-orange-600 dark:text-orange-400 block mb-1 uppercase">
                      {item.period}
                    </span>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                      {item.role}
                    </h4>
                    <p className="text-xs font-medium text-[var(--text-secondary)] mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <p className="text-[11px] text-[var(--text-muted)] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Perspective & Life Beyond Code: Clean Balanced Photo Cards */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">
              Beyond The Terminal
            </h3>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Mindset, balance, and character outside the code editor.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perspectives.map((item, idx) => (
            <div
              key={idx}
              className="theme-card rounded-3xl overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-medium">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h4>
                  <span className="text-xs text-[#ff5e14] font-mono block mb-1.5">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
