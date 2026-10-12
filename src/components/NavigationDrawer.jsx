import React from 'react';
import { X, ChevronRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function NavigationDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal } = portfolioData;

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT & EXPERIENCE", href: "#about" },
    { label: "FEATURED WORKS", href: "#projects" },
    { label: "TECH CAPABILITIES", href: "#skills" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "GET IN TOUCH", href: "#contact" }
  ];

  const handleNavClick = (href) => {
    onClose();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-stretch">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Main Drawer Container */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row bg-[var(--bg-surface)] text-[var(--text-primary)] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full theme-surface flex items-center justify-center text-[var(--text-primary)] hover:text-[#ff5e14] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Half: Menu Navigation */}
        <div className="flex-1 p-8 sm:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10">
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-[#ff5e14] flex items-center justify-center text-white font-black text-sm">
              AR
            </div>
            <span className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase">
              // DIRECTORY INDEX
            </span>
          </div>

          <nav className="space-y-3">
            {navLinks.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="group flex items-center justify-between py-3.5 border-b border-slate-200 dark:border-white/5 cursor-pointer hover:border-[#ff5e14]/50 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[#ff5e14] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-2 transition-all duration-300">
                    {item.label}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-[var(--text-muted)] group-hover:text-white group-hover:bg-[#ff5e14] group-hover:border-[#ff5e14] transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </nav>

        </div>

        {/* Right Half: Quick Contact Information */}
        <div className="w-full lg:w-[420px] p-8 sm:p-16 flex flex-col justify-between bg-slate-50 dark:bg-black/40">
          
          <div>
            <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-4 block font-semibold">
              CONTACT INFORMATION
            </span>

            <div className="space-y-6 mt-6">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff5e14] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-[var(--text-muted)] block uppercase">Location</span>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                    {personal.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#ff5e14] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-[var(--text-muted)] block uppercase">Official Email</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-[var(--text-primary)] hover:text-[#ff5e14] transition-colors mt-0.5 block"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#ff5e14] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-[var(--text-muted)] block uppercase">Phone & WhatsApp</span>
                  <a
                    href={personal.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-[var(--text-primary)] hover:text-emerald-500 transition-colors mt-0.5 block font-mono"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

            </div>

            <div className="mt-8">
              <a
                href={personal.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#ff5e14] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#ea580c] transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-white/10 mt-8">
            <span className="text-[11px] font-mono uppercase text-[var(--text-muted)] block mb-3">
              Direct Profiles
            </span>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[var(--text-secondary)]">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--text-primary)] flex items-center gap-1"
              >
                GITHUB &rarr;
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0077b5] flex items-center gap-1"
              >
                LINKEDIN &rarr;
              </a>
              <a
                href={personal.social.leetcode}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ffa116] flex items-center gap-1"
              >
                LEETCODE &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
