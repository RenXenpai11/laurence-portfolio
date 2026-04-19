import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Built a full-stack commerce platform that improved checkout speed by 38% and reduced cart drop-off.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-[#00d9ff]/20 to-[#0066ff]/20',
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Delivered an ML-powered analytics dashboard that cut reporting turnaround time by 45% for stakeholders.',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    gradient: 'from-[#ff6b6b]/20 to-[#ff0066]/20',
  },
  {
    title: 'IoT Smart Home Hub',
    description: 'Engineered a smart home hub with 99.2% command success rate across connected devices and automations.',
    tags: ['IoT', 'React Native', 'AWS', 'MQTT'],
    gradient: 'from-[#00d9ff]/20 to-[#00ff88]/20',
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projects" className="relative min-h-screen py-28">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[3rem] mb-16 text-center"
        >
          Featured <span className="text-[#00d9ff]">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card group overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 backdrop-blur-3xl" />
                <div className="absolute inset-0 neomorph-inset-sm opacity-30" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-[#00d9ff] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-[#0a0a0f] border border-[#1a1a24] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff] hover:bg-[#00d9ff]/20 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Case Study</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a24] border border-[#2a2a34] text-gray-400 hover:border-[#00d9ff]/30 hover:text-[#00d9ff] transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#00d9ff]/5 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
