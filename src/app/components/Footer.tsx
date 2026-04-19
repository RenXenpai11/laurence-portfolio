import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-[#1a1a24]">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10">
                <Logo />
              </div>
              <span className="text-xl font-semibold">Portfolio</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Crafting exceptional digital experiences through clean code and innovative design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#00d9ff]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#00d9ff] transition-colors">Home</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-[#00d9ff] transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#00d9ff] transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-[#00d9ff] transition-colors">Skills</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-[#00d9ff]">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#0d0d12] border border-[#1a1a24] flex items-center justify-center hover:border-[#00d9ff]/50 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#0d0d12] border border-[#1a1a24] flex items-center justify-center hover:border-[#00d9ff]/50 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#0d0d12] border border-[#1a1a24] flex items-center justify-center hover:border-[#00d9ff]/50 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="mailto:laurencejan1431@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#0d0d12] border border-[#1a1a24] flex items-center justify-center hover:border-[#00d9ff]/50 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1a1a24] text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Your Name. All rights reserved. Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00d9ff]/5 blur-[100px] pointer-events-none" />
    </footer>
  );
}
