import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatementSection from './components/StatementSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import SkillsSection from './components/SkillsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NavigationDrawer from './components/NavigationDrawer';
import TerminalModal from './components/TerminalModal';
import { toggleSound, isSoundEnabled } from './utils/audio';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openTerminal, setOpenTerminal] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Sync sound setting
  const handleToggleSound = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
  };

  // Mouse spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Shortcut key: press ` (backtick) or ~ to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey) {
        // Only toggle if not currently in an input
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
        setOpenTerminal((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-[#ff5e14] selection:text-white">
      
      {/* Dynamic Cursor Spotlight Follower */}
      <div 
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ff5e14]/5 via-cyan-500/5 to-transparent blur-3xl z-40 transition-transform duration-100 ease-out hidden sm:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* Floating Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        soundOn={soundOn}
        setSoundOn={handleToggleSound}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        openTerminal={openTerminal}
        setOpenTerminal={setOpenTerminal}
      />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setOpenTerminal(true)} />
        <StatementSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setOpenTerminal(true)} />

      {/* Fullscreen Bento Navigation Drawer */}
      <NavigationDrawer
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />

      {/* Interactive Recruiter CLI Simulator */}
      <TerminalModal
        isOpen={openTerminal}
        onClose={() => setOpenTerminal(false)}
      />

    </div>
  );
}
