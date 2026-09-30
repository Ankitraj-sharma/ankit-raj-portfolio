import React, { useState } from 'react';
import { Camera, Sparkles, X, ZoomIn, Compass, Bike, TreePine, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function GallerySection() {
  const { gallery } = portfolioData;
  const [activePhoto, setActivePhoto] = useState(null);

  const getIcon = (badge) => {
    switch (badge) {
      case 'KTM Duke 200': return <Bike className="w-3.5 h-3.5 text-[#ff5e14]" />;
      case 'Perspective': return <TreePine className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Hacker Mode': return <Terminal className="w-3.5 h-3.5 text-indigo-400" />;
      default: return <Sparkles className="w-3.5 h-3.5 text-amber-400" />;
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 05 · LIFE BEYOND THE SCREEN
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
          PERSPECTIVE & <span className="text-[#ff5e14]">PASSIONS</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-3 font-mono">
          Riding open roads, connecting with deep roots, and the late-night passion for building great things.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-4" />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              playSound('click');
              setActivePhoto(item);
            }}
            onMouseEnter={() => playSound('hover')}
            className="group glass-panel rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#ff5e14]/50 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full glass-nav text-[11px] font-mono text-white">
                {getIcon(item.badge)}
                <span>{item.badge}</span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass-nav flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Details on Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-display font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 font-normal leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="p-3 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{item.category}</span>
              <span className="text-[#ff5e14] group-hover:translate-x-1 transition-transform">
                View &rarr;
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="max-w-3xl w-full glass-panel rounded-3xl overflow-hidden p-3 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                playSound('click');
                setActivePhoto(null);
              }}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass-nav flex items-center justify-center text-white hover:text-[#ff5e14] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] rounded-2xl overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#ff5e14]/20 border border-[#ff5e14]/40 text-[#ff5e14] text-xs font-mono">
                  {activePhoto.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activePhoto.category}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
