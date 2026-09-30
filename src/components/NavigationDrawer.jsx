import React from 'react';
import { X, ChevronRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function NavigationDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal } = portfolioData;

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT ME", href: "#about" },
    { label: "FEATURED WORKS", href: "#projects" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "TECH ARSENAL", href: "#skills" },
    { label: "PASSIONS & LIFE", href: "#gallery" },
    { label: "GET IN TOUCH", href: "#contact" }
  ];

  const handleNavClick = (href) => {
    playSound('click');
    onClose();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-stretch animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={() => {
          playSound('click');
          onClose();
        }}
      />

      {/* Main Drawer Container: Split Screen as in Reel Frame 0473 */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row bg-[#0a0d14] text-white overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#ff5e14] hover:border-[#ff5e14] transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Half: Giant Menu Navigation */}
        <div className="flex-1 p-8 sm:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg bg-[#ff5e14] flex items-center justify-center text-white font-black text-sm">
              AR
            </div>
            <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
              // NAVIGATION DIRECTORY
            </span>
          </div>

          <nav className="space-y-4">
            {navLinks.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => playSound('hover')}
                className="group flex items-center justify-between py-3 border-b border-white/5 cursor-pointer hover:border-[#ff5e14]/50 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-slate-500 group-hover:text-[#ff5e14] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-slate-200 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                    {item.label}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-[#ff5e14] group-hover:bg-[#ff5e14] transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </nav>

        </div>

        {/* Right Half: Contact Information (Reel Frame 0473) */}
        <div className="w-full lg:w-[420px] p-8 sm:p-16 flex flex-col justify-between bg-black/40">
          
          <div>
            <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-4 block">
              CONTACT INFORMATION
            </span>

            <div className="space-y-6 mt-6">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff5e14] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Location</span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {personal.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#ff5e14] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Direct Email</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-white hover:text-[#ff5e14] transition-colors mt-0.5 block"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#ff5e14] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Phone & WhatsApp</span>
                  <a
                    href={personal.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors mt-0.5 block font-mono"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Button */}
            <div className="mt-8">
              <a
                href={personal.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('click')}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#ff5e14] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#e04f0f] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff5e14]/20"
              >
                <span>Message on WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Social Links Footer Row */}
          <div className="pt-8 border-t border-white/10 mt-8">
            <span className="text-[11px] font-mono uppercase text-slate-500 block mb-3">
              Social Profiles
            </span>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1"
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
