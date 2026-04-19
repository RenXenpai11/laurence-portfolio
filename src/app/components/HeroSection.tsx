import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="max-w-[1600px] w-full mx-auto px-8">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-[5rem] leading-tight mb-6 tracking-tight">
              Hi, I'm <span className="text-[#00d9ff]">Laurence</span>.
            </h1>
            <h2 className="text-[2.65rem] leading-tight mb-6 text-gray-400 max-w-5xl mx-auto">
              Full-Stack Developer building scalable web applications.
            </h2>
            <p className="text-base text-gray-500 tracking-wide">
              Built and deployed 12+ web projects with a focus on performance, reliability, and clean UX.
            </p>
          </motion.div>

          {/* Geometric Sculpture */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto h-[400px] my-16"
            style={{ opacity }}
          >
            <div className="absolute inset-0 flex items-center justify-center perspective-1000">
              <motion.div
                className="geometric-sculpture"
                style={{
                  rotateX,
                  rotateY,
                }}
              >
                {/* Central Glass Prism */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 relative">
                    {/* Hexagonal Faces */}
                    {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                      const skills = ['React', 'Next.js', 'MySQL', 'Node.js', 'TypeScript', 'AWS'];
                      return (
                        <motion.div
                          key={angle}
                          className="absolute inset-0 flex items-center justify-center glass-face"
                          style={{
                            transform: `rotateZ(${angle}deg) translateY(-80px)`,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <div className="w-32 h-16 flex items-center justify-center bg-gradient-to-br from-[#00d9ff]/10 to-transparent backdrop-blur-md border border-[#00d9ff]/30 rounded-lg">
                            <span className="text-sm font-medium text-[#00d9ff]">
                              {skills[index]}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Glowing Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-[#00d9ff]/20 blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vertical Coral Orange Line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0.5 h-32 bg-gradient-to-b from-[#ff6b6b] to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
      </div>

      {/* Background Tiles */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-30 pointer-events-none">
        {Array.from({ length: 48 }).map((_, i) => (
          <motion.div
            key={i}
            className="neomorph-tile aspect-square"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02 }}
          />
        ))}
      </div>
    </section>
  );
}
