import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Database, Server, Smartphone, GitBranch, Palette } from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Frontend Dev', level: 95 },
  { icon: Database, name: 'Database', level: 85 },
  { icon: Server, name: 'Backend', level: 90 },
  { icon: Smartphone, name: 'Mobile', level: 80 },
  { icon: GitBranch, name: 'Version Control', level: 92 },
  { icon: Palette, name: 'UI/UX Design', level: 88 },
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="skills" className="relative min-h-screen py-28">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[3rem] mb-16 text-center"
        >
          Technical <span className="text-[#ff6b6b]">Skills</span>
        </motion.h2>

        {/* Hexagonal Grid */}
        <div className="hexagon-grid max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const delay = index * 0.15;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay }}
                className="hexagon-panel group"
              >
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-[#0a0a0f] flex items-center justify-center mb-3 neomorph-inset"
                    whileHover={{ 
                      boxShadow: 'inset 0 0 30px rgba(0,217,255,0.4)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Icon 
                      className="w-6 h-6 text-[#00d9ff] group-hover:text-[#00f0ff] transition-colors duration-300" 
                      strokeWidth={2} 
                    />
                  </motion.div>
                  
                  <h3 className="mb-2 text-center text-base">{skill.name}</h3>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full h-1.5 bg-[#1a1a24] rounded-full overflow-hidden neomorph-inset-sm">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00d9ff] to-[#00f0ff]"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: delay + 0.3 }}
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1.5">{skill.level}%</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-base tracking-wide">
            Focused on building maintainable systems, scalable APIs, and polished user experiences.
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#ff6b6b]/5 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}