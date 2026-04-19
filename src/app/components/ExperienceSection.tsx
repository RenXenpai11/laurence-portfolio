import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Headphones, Zap, Cpu } from 'lucide-react';

const experiences = [
  {
    icon: Headphones,
    title: 'Tech Support Specialist',
    company: 'TechCorp Inc.',
    period: '2023 - Present',
    description: 'Providing expert technical assistance and system troubleshooting.',
  },
  {
    icon: Zap,
    title: 'Engineering Intern',
    company: 'Innovation Labs',
    period: '2022 - 2023',
    description: 'Developed cutting-edge solutions for industrial automation.',
  },
  {
    icon: Cpu,
    title: 'IoT Developer',
    company: 'SmartDevices Co.',
    period: '2021 - 2022',
    description: 'Built interconnected systems for smart home applications.',
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" className="relative min-h-screen py-28">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[3rem] mb-16 text-center"
        >
          Professional <span className="text-[#00d9ff]">Experience</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="neomorph-card group"
              >
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 rounded-xl bg-[#0a0a0f] flex items-center justify-center mb-6 neomorph-inset group-hover:shadow-[inset_0_0_20px_rgba(0,217,255,0.3)] transition-shadow duration-300">
                    <Icon className="w-8 h-8 text-[#00d9ff] group-hover:text-[#00f0ff] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl mb-2 text-white">{exp.title}</h3>
                  <p className="text-[#00d9ff] mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* OJT Tracker Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card max-w-4xl mx-auto"
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl mb-2">OJT Tracker</h3>
                <p className="text-gray-400">Project Management System</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-[#ff6b6b]/20 border border-[#ff6b6b]/50">
                <span className="text-[#ff6b6b] text-sm font-medium">In Progress</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="neomorph-inset p-4 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">Pending Tasks</p>
                <p className="text-3xl text-[#00d9ff]">12</p>
              </div>
              <div className="neomorph-inset p-4 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">Completed</p>
                <p className="text-3xl text-[#ff6b6b]">28</p>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="h-32 neomorph-inset rounded-xl p-4 flex items-end gap-2">
              {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#00d9ff] to-[#00d9ff]/50 rounded-t"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : {}}
                  transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated background element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00d9ff]/5 blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
