import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Mission() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const missionData = {
    mission: {
      icon: "🎯",
      title: "Our Mission",
      subtitle: "Empowering Digital Transformation",
      description: "To revolutionize the digital landscape by creating innovative, secure, and scalable solutions that bridge the gap between technology and human potential. We strive to empower businesses and individuals with cutting-edge digital tools that drive growth, enhance security, and foster meaningful connections in an increasingly interconnected world.",
      highlights: [
        "Create innovative digital solutions",
        "Bridge technology and human potential",
        "Empower businesses and individuals",
        "Drive sustainable digital growth"
      ]
    },
    vision: {
      icon: "🔮",
      title: "Our Vision",
      subtitle: "Shaping Tomorrow's Digital Reality",
      description: "To be the global leader in digital innovation, recognized for our commitment to excellence, security, and human-centered technology. We envision a future where technology seamlessly enhances human capabilities, creating a more connected, secure, and prosperous world for generations to come.",
      highlights: [
        "Global leadership in digital innovation",
        "Human-centered technology approach",
        "Seamless technology integration",
        "Sustainable future development"
      ]
    },
    goals: {
      icon: "🎯",
      title: "Our Goals",
      subtitle: "Strategic Objectives for Success",
      description: "To establish VIRUZVERSE as the premier digital solutions provider, achieving market leadership through continuous innovation, exceptional service delivery, and unwavering commitment to client success. We aim to expand our global footprint while maintaining the highest standards of quality and security.",
      highlights: [
        "Market leadership in digital solutions",
        "Global expansion and presence",
        "Continuous innovation pipeline",
        "Exceptional client satisfaction"
      ]
    },
    values: {
      icon: "💎",
      title: "Our Core Values",
      subtitle: "The Foundation of Everything We Do",
      description: "Our values guide every decision, action, and interaction. They are the compass that directs our journey toward excellence and the principles that define our character as an organization.",
      highlights: [
        "Innovation through experimentation",
        "Security by design",
        "People-centered technology",
        "Continuous learning and growth"
      ]
    }
  };

  const strategicPillars = [
    {
      icon: "🚀",
      title: "Innovation Excellence",
      description: "Pioneering cutting-edge solutions that push the boundaries of what's possible in the digital realm.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: "🛡️",
      title: "Security First",
      description: "Building robust, secure systems that protect our clients' data and digital assets with military-grade security.",
      color: "from-blue-500 to-green-500"
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Creating solutions that transcend borders and positively impact communities worldwide.",
      color: "from-green-500 to-yellow-500"
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "Building lasting relationships based on trust, transparency, and mutual success.",
      color: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mb-6">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Driving digital transformation through innovation, security, and human-centered technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={containerRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            {/* Mission */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl mr-4">
                    {missionData.mission.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{missionData.mission.title}</h2>
                    <p className="text-purple-300 italic">{missionData.mission.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {missionData.mission.description}
                </p>
                <ul className="space-y-2">
                  {missionData.mission.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <span className="text-purple-400 mr-3">✦</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mr-4">
                    {missionData.vision.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{missionData.vision.title}</h2>
                    <p className="text-blue-300 italic">{missionData.vision.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {missionData.vision.description}
                </p>
                <ul className="space-y-2">
                  {missionData.vision.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <span className="text-blue-400 mr-3">✦</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Goals */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center text-2xl mr-4">
                    {missionData.goals.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{missionData.goals.title}</h2>
                    <p className="text-green-300 italic">{missionData.goals.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {missionData.goals.description}
                </p>
                <ul className="space-y-2">
                  {missionData.goals.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <span className="text-green-400 mr-3">✦</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl mr-4">
                    {missionData.values.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{missionData.values.title}</h2>
                    <p className="text-pink-300 italic">{missionData.values.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {missionData.values.description}
                </p>
                <ul className="space-y-2">
                  {missionData.values.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <span className="text-pink-400 mr-3">✦</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Strategic Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
              Strategic Pillars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The four foundational pillars that guide our strategic direction and operational excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {strategicPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 h-full text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-12 backdrop-blur-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us in shaping the future of technology. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-full inline-block hover:shadow-2xl transition-all duration-300"
                >
                  Get Started Today
                </motion.a>
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-purple-500/50 text-purple-300 font-semibold px-8 py-4 rounded-full inline-block hover:bg-purple-500/10 transition-all duration-300"
                >
                  Explore Our Solutions
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
