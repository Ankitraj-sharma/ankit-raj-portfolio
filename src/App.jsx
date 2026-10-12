import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NavigationDrawer from './components/NavigationDrawer';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ankit_portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openTerminal, setOpenTerminal] = useState(false);

  // Sync dark class on html element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('ankit_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('ankit_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Keyboard shortcut: `~` or ` to open terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey) {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
        setOpenTerminal((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-200 relative selection:bg-[#ff5e14] selection:text-white">
      
      {/* Subtle Ambient Background Lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[140px]" />
      </div>

      {/* Modern Executive Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        openTerminal={openTerminal}
        setOpenTerminal={setOpenTerminal}
      />

      {/* Main Streamlined Content */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setOpenTerminal(true)} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setOpenTerminal(true)} />

      {/* Fullscreen Navigation Drawer */}
      <NavigationDrawer
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />

      {/* Interactive Recruiter CLI Modal */}
      <TerminalModal
        isOpen={openTerminal}
        onClose={() => setOpenTerminal(false)}
      />

    </div>
  );
}
