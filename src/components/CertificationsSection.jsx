import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Copy, 
  Check, 
  Award,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CertificationsSection() {
  const { certifications } = portfolioData;
  const [copiedId, setCopiedId] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const handleCopy = (certId) => {
    navigator.clipboard.writeText(certId);
    setCopiedId(certId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const issuers = ['ALL', 'Cisco', 'Infosys', 'Coursera', 'Udemy'];

  const filteredCerts = filter === 'ALL'
    ? certifications
    : certifications.filter(c => c.issuer.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="certifications" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 04 · VERIFIED CREDENTIALS
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white">
          INDUSTRY <span className="text-[#ff5e14]">CERTIFICATIONS</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-2 font-mono">
          Verified industry credentials across Python for Data Science, CCNA Networking, Cybersecurity, and Linux.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-3" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {issuers.map((iss) => (
          <button
            key={iss}
            onClick={() => setFilter(iss)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
              filter === iss
                ? 'bg-[#ff5e14] text-white shadow-md shadow-orange-500/25 font-bold'
                : 'bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {iss}
          </button>
        ))}
      </div>

      {/* Editorial Table with Guaranteed Contrast */}
      <div className="rounded-3xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md">
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {filteredCerts.map((cert, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
            >
              {/* Left Column: Number, Title & Issuer */}
              <div className="flex items-start sm:items-center gap-4 flex-1">
                <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-[#ff5e14] transition-colors w-8 flex-shrink-0">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-[#ff5e14] transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-mono text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{cert.issuer}</span>
                    <span>·</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Year, Cert ID, Copy Action */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 self-end md:self-center">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                  {cert.date}
                </span>

                {/* Cert ID Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <span className="text-[11px] truncate max-w-[120px] sm:max-w-[170px]" title={cert.certId}>
                    ID: {cert.certId}
                  </span>
                  
                  {cert.certId !== "Infosys Verified" && (
                    <button
                      onClick={() => handleCopy(cert.certId)}
                      className="text-slate-400 hover:text-[#ff5e14] transition-colors ml-1"
                      title="Copy Certificate ID"
                    >
                      {copiedId === cert.certId ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
