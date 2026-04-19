import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiNextdotjs,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStacks: { name: string; color: string; icon: IconType }[] = [
    { name: 'React', color: '#61DAFB', icon: SiReact },
    { name: 'TypeScript', color: '#3178C6', icon: SiTypescript },
    { name: 'Node.js', color: '#68A063', icon: SiNodedotjs },
    { name: 'Python', color: '#F7C948', icon: SiPython },
    { name: 'Docker', color: '#2496ED', icon: SiDocker },
    { name: 'AWS', color: '#FF9900', icon: FaAws },
    { name: 'MongoDB', color: '#47A248', icon: SiMongodb },
    { name: 'PostgreSQL', color: '#4169E1', icon: SiPostgresql },
    { name: 'GraphQL', color: '#E10098', icon: SiGraphql },
    { name: 'Next.js', color: '#FFFFFF', icon: SiNextdotjs },
  ];

  return (
    <section ref={ref} className="relative py-20">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl mb-4 text-gray-400">Technologies I Work With</h3>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-[#00d9ff] to-[#ff6b6b]" />
        </motion.div>

        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStacks.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              whileHover={{ scale: 1.08, y: -4 }}
              title={tech.name}
              aria-label={tech.name}
              className="w-20 h-14 flex items-center justify-center rounded-lg bg-[#0d0d12] border border-[#1a1a24] hover:border-[#00d9ff]/60 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle color glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
                style={{ backgroundColor: tech.color }}
              />
              <tech.icon
                className="relative w-7 h-7 text-gray-300 transition-colors duration-300"
                style={{ color: tech.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}