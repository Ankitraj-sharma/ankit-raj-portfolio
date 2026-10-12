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
  Terminal,
  TrendingUp,
  Brain
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { personal, education, achievements } = portfolioData;

  const perspectives = [
    {
      title: "Focus & Velocity",
      subtitle: "KTM Duke 200 (GJ 03 JH 4014)",
      img: "./images/ankit-duke.jpg",
      desc: "Speed with control. Night rides clear the mind, teaching split-second precision and calm focus under fast conditions.",
      tag: "Focus"
    },
    {
      title: "Rooted Growth",
      subtitle: "Banyan Perspective",
      img: "./images/ankit-banyan.jpg",
      desc: "Grounded in deep engineering principles. Lasting software and rigorous models demand patient resilience and strong roots.",
      tag: "Resilience"
    },
    {
      title: "Engineering Grit",
      subtitle: "Deep Build Energy",
      img: "./images/ankit-hoodie.jpg",
      desc: "Debugging till it compiles clean. The commitment to finish what is started and refine algorithms until production-ready.",
      tag: "Grit"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 01 · BACKGROUND & CAREER VISION
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white">
          ABOUT & <span className="text-[#ff5e14]">EXPERIENCE</span>
        </h2>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Academic Foundation & Data Science Vision */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Education Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#ff5e14] mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>

            <div className="space-y-5">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-orange-500/40 pl-4 py-0.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {edu.institution} · <span className="font-mono text-slate-500 dark:text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-mono leading-relaxed">
                    Coursework: {edu.coursework}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plan: Data Scientist Vision Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/30 dark:border-orange-500/20 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff5e14] font-bold mb-2">
              <Brain className="w-4 h-4" />
              <span>Target Career Trajectory: Data Scientist</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Advancing from full-stack architectures into <strong>Data Science & Applied Machine Learning</strong>. Passionate about feature engineering, predictive modeling with Scikit-Learn, exploratory data analysis (EDA), and connecting data pipelines with production systems.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-mono font-semibold">
              <span className="px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-600 dark:text-orange-400">
                Python Data Science
              </span>
              <span className="px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-600 dark:text-orange-400">
                NumPy & Pandas
              </span>
              <span className="px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-600 dark:text-orange-400">
                ML Modeling
              </span>
              <span className="px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-600 dark:text-orange-400">
                GraphRAG
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Experience & Leadership */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#ff5e14] mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Internships & Leadership Timeline</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-[#ff5e14]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-orange-600 dark:text-orange-400 block mb-1 uppercase">
                      {item.period}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {item.role}
                    </h4>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Perspective & Life Beyond Code Cards */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
              Mindset & Perspective Beyond Code
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              The balance, drive, and personal character behind the engineering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perspectives.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md flex flex-col group hover:border-[#ff5e14]/50 transition-all"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-medium">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <span className="text-xs text-[#ff5e14] font-mono block mb-1 font-semibold">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
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
