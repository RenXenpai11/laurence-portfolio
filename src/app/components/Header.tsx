import { motion } from 'motion/react';
import { Logo } from './Logo';

interface HeaderProps {
  scrollProgress: number;
}

export function Header({ scrollProgress }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Glow ring behind logo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d9ff]/20 to-[#ff6b6b]/10 blur-md" />
            <div className="relative z-10">
              <Logo />
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-8"
        >
          <a href="#home" className="nav-link">HOME</a>
          <a href="#experience" className="nav-link">EXPERIENCE</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a
            href="mailto:laurencejan1431@gmail.com?subject=Let's Work Together"
            className="collab-btn premium-cta px-6 py-2.5 rounded-full bg-[#00d9ff] text-[#0a0a0f] hover:bg-[#00f0ff] transition-all duration-300 inline-block"
          >
            LET'S WORK TOGETHER
          </a>
        </motion.nav>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-6 top-0 h-screen flex items-center">
        <div className="w-0.5 h-[60vh] bg-[#1a1a24] rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-[#00d9ff]"
            style={{
              height: `${scrollProgress * 100}%`,
            }}
          />
        </div>
      </div>
    </header>
  );
}