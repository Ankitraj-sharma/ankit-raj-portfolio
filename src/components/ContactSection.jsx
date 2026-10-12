import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Ankit,\nMy name is ${form.name} (${form.email}).\nRegarding: ${form.subject}\n\nMessage:\n${form.message}`);
    window.open(`https://wa.me/${personal.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 05 · DIRECT OUTREACH
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white">
          GET IN <span className="text-[#ff5e14]">TOUCH</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-2 font-mono">
          Available for full-time software engineering roles, Data Science internships, or project collaborations.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Contact Methods */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Card 1: WhatsApp */}
          <a
            href={personal.social.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/60 transition-all group flex items-start justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
                  Direct Messaging
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  Chat on WhatsApp
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-mono mt-0.5">
                  {personal.phone}
                </p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
          </a>

          {/* Card 2: Email */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#ff5e14]/60 transition-all group flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff5e14] group-hover:scale-105 transition-transform flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-orange-600 dark:text-orange-400 font-semibold tracking-wider">
                  Official Email
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 break-all">
                  {personal.email}
                </h4>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs text-slate-600 dark:text-slate-300 hover:text-[#ff5e14] transition-colors mt-1 inline-block"
                >
                  Compose email &rarr;
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#ff5e14] text-slate-600 dark:text-slate-300 transition-all"
              title="Copy Email Address"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Card 3: Location */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#ff5e14] flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                Current Location
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Rajkot, Gujarat, India (360003)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Marwadi University Campus · Open to Relocation & Remote Roles
              </p>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className="p-4 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Connect Online:</span>
            <div className="flex items-center gap-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#ff5e14] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0077b5] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#ffa116] transition-colors"
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
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 font-mono">
                Initiate a direct conversation with Ankit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma / Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 mb-2 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 mb-2 font-medium">
                  Subject / Opportunity *
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Software Engineer / Data Scientist Opening"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 mb-2 font-medium">
                  Message Details *
                </label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share details regarding the role, technical scope, or project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#ff5e14] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#ea580c] transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transform hover:-translate-y-0.5"
            >
              <span>Transmit Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}
