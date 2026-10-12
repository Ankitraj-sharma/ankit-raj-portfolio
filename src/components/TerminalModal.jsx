import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function TerminalModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal, stats, projects, certifications, skills } = portfolioData;

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Ankit Raj Sharma OS [Version 2.0.26]' },
    { type: 'system', text: 'Type "help" to view available commands, or click the quick tags below.' }
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const cmd = cmdText.trim().toLowerCase();
    playSound('click');

    const newHistory = [...history, { type: 'user', text: `$ ${cmdText}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • bio        : Overview & background of Ankit
  • skills     : Technical stack (Data Science, ML, Supabase, Web)
  • projects   : Featured live deployed apps & Sentinel ML
  • opensource : Upstream PRs to Odoo, Apache Camel K & GraphRAG
  • certs      : 10+ industry certifications (Cisco, Infosys, Coursera)
  • contact    : Email, phone, WhatsApp & location
  • hire       : Schedule an interview / send email
  • clear      : Clear terminal screen
  • exit       : Close this CLI session`
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'output',
          text: `${personal.name}
Role: ${personal.title}
University: ${personal.university} | CGPA: ${personal.cgpa}
Location: ${personal.location}
Bio: ${personal.bio}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Data Science: Python, NumPy, Pandas, Scikit-Learn, EDA, Statistical Modeling
AI / ML     : Sentinel On-Device ML, Gemini 3.8 Flash, GraphRAG, Knowledge Graphs
Databases   : Supabase (Postgres + RLS + Realtime), MongoDB, MySQL, Vector DBs
Backend     : Node.js, Express, Python APIs, Odoo Framework, Apache Camel K, Java, C#
Frontend    : React, Next.js, TypeScript, Tailwind CSS, Bootstrap 5
Platforms   : Jupyter Notebooks, Google Colab, Kaggle, Linux, Git, Docker`
        });
        break;

      case 'opensource':
        newHistory.push({
          type: 'output',
          text: `Upstream Open Source & System Contributions:
• Odoo (Core ERP)     : Fixed ModelsConverter.to_url TypeError (#292724)
• Apache Camel K      : Fixed TestRunAndLogErrorMvn assertion on K8s (#6870)
• Sentinel Android    : Co-Developer of On-Device ML Phishing Engine (Team PhishShield)
• Microsoft GraphRAG  : Hierarchical graph summarization & multi-hop RAG
• Playwright Python   : E2E browser automation & asynchronous QA pipelines
• HackerRank MU       : Operations Coordinator & DSA mentorship`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map(p => `• [${p.year}] ${p.title} (${p.category}) -> ${p.live !== '#' ? p.live : p.github}`).join('\n')
        });
        break;

      case 'certs':
        newHistory.push({
          type: 'output',
          text: certifications.slice(0, 5).map(c => `• ${c.title} — ${c.issuer} (${c.date})`).join('\n') + `\n...and 5+ more.`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email   : ${personal.email}
Phone   : ${personal.phone}
Location: ${personal.location}
GitHub  : ${personal.social.github}
LinkedIn: ${personal.social.linkedin}`
        });
        break;

      case 'hire':
        newHistory.push({
          type: 'output',
          text: `Opening mail client for an interview request...`
        });
        setTimeout(() => {
          window.open(`mailto:${personal.email}?subject=Interview%20Invitation`, '_blank');
        }, 600);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" to see valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="w-full max-w-3xl rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col h-[560px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              ankit@portfolio-core:~
            </span>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen */}
        <div className="flex-1 p-5 overflow-y-auto font-mono text-xs text-slate-300 space-y-3 bg-[#080d16]/95">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {item.type === 'system' && (
                <span className="text-slate-400">{item.text}</span>
              )}
              {item.type === 'user' && (
                <span className="text-emerald-400 font-bold">{item.text}</span>
              )}
              {item.type === 'output' && (
                <span className="text-slate-200">{item.text}</span>
              )}
              {item.type === 'error' && (
                <span className="text-rose-400">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Helper Command Buttons */}
        <div className="px-5 py-2 bg-slate-950/80 border-t border-white/5 flex flex-wrap gap-2 text-[11px] font-mono">
          <span className="text-slate-500 self-center">Run:</span>
          {['bio', 'skills', 'projects', 'opensource', 'certs', 'contact', 'hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition-colors border border-white/5"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-900/90 border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-sm font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command here (e.g. bio, projects, contact)..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-white placeholder-slate-500"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
