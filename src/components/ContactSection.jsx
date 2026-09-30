import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const { personal } = portfolioData;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    playSound('click');
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound('success');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 }
    });
    setSubmitted(true);

    // Open WhatsApp or mailto with formatted message
    const text = encodeURIComponent(`Hi Ankit,\nMy name is ${form.name} (${form.email}).\nRegarding: ${form.subject}\n\nMessage:\n${form.message}`);
    window.open(`https://wa.me/${personal.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 06 · INITIATE CONVERSATION
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
          LET'S BUILD <span className="text-[#ff5e14]">SOMETHING GREAT</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-3 font-mono">
          Looking for full-time engineering roles, high-impact AI/web projects, or technical collaborations.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Card 1: WhatsApp Instant */}
          <a
            href={personal.social.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={() => playSound('click')}
            onMouseEnter={() => playSound('hover')}
            className="p-6 rounded-3xl glass-panel border border-emerald-500/20 hover:border-emerald-500/60 transition-all group flex items-start justify-between shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                  Instant Messaging
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  Chat on WhatsApp
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {personal.phone}
                </p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
          </a>

          {/* Card 2: Email */}
          <div className="p-6 rounded-3xl glass-panel border border-[#ff5e14]/20 hover:border-[#ff5e14]/60 transition-all group flex items-start justify-between shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5e14]/10 border border-[#ff5e14]/30 flex items-center justify-center text-[#ff5e14] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#ff5e14] font-semibold tracking-wider">
                  Official Email
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5 break-all">
                  {personal.email}
                </h4>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs text-slate-400 hover:text-white transition-colors mt-1 inline-block"
                >
                  Click to compose email &rarr;
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
              title="Copy Email Address"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Card 3: Location & Campus */}
          <div className="p-6 rounded-3xl glass-panel border border-white/10 shadow-xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
              <MapPin className="w-6 h-6 text-[#ff5e14]" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                Current Location
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Rajkot, Gujarat, India (360003)
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Marwadi University Campus · Willing to relocate & open to global remote
              </p>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className="p-5 rounded-3xl glass-panel border border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase">Connect & Verify:</span>
            <div className="flex items-center gap-3">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#0077b5] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#ffa116] transition-colors"
                title="LeetCode"
              >
                <LeetcodeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl flex flex-col justify-between h-full relative"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono">
                Fill the details below to trigger an instant message via WhatsApp & Email.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Satwaj / recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                  Subject / Opportunity *
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Full Stack Developer Opening / Project"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                  Message Details *
                </label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell Ankit about your project, timeline, or interview process..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#ff5e14] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#e04f0f] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff5e14]/30 transform hover:-translate-y-0.5"
            >
              <span>Transmit Message & Contact</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}
