import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative dark min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden portfolio-container">
      {/* Neomorphic Background Grid */}
      <div className="fixed inset-0 background-tiles pointer-events-none" />
      
      {/* Header */}
      <Header scrollProgress={scrollProgress} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <TechStack />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cursor effect container */}
      <div className="fixed bottom-8 right-1/2 translate-x-1/2 w-6 h-6 pointer-events-none z-50">
        <div className="w-full h-full rounded-full border-2 border-[#00d9ff]/50 animate-pulse" />
      </div>
    </div>
  );
}