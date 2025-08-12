import { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function AnimatedTimeline({ milestones }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Timeline Progress Bar */}
      <div className="fixed top-20 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"
          style={{ scaleX: timelineProgress }}
          transformOrigin="left"
        />
      </div>

      {/* Timeline Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 opacity-30" />

        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0;
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={itemVariants}
              className={`flex items-center mb-20 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content Card */}
              <motion.div
                className={`flex-1 ${isEven ? 'pr-16' : 'pl-16'}`}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                  {/* Phase Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4"
                  >
                    {milestone.phase}
                  </motion.div>

                  {/* Year */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2"
                  >
                    {milestone.year}
                  </motion.h3>

                  {/* Title */}
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {milestone.title}
                  </motion.h4>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-blue-300 italic mb-4"
                  >
                    {milestone.subtitle}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-gray-300 leading-relaxed mb-6"
                  >
                    {milestone.description}
                  </motion.p>

                  {/* Achievements */}
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="space-y-2 mb-6"
                  >
                    {milestone.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <span className="text-purple-400 mr-3">✦</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Highlight */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 }}
                    className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-4"
                  >
                    <p className="text-purple-200 italic">
                      <strong>💫 The Breakthrough:</strong> {milestone.highlight}
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Icon Circle */}
              <motion.div
                variants={iconVariants}
                className="relative z-10 flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl shadow-2xl border-4 border-white/10">
                  {milestone.icon}
                </div>
                
                {/* Progress Ring */}
                <motion.div
                  variants={progressVariants}
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  style={{
                    background: 'conic-gradient(from 0deg, #8b5cf6, #3b82f6, #ec4899, #8b5cf6)',
                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))'
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
