import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import JourneyBackground from '../components/JourneyBackground';
import AnimatedHero from '../components/AnimatedHero';
import AnimatedTimeline from '../components/AnimatedTimeline';
import AnimatedValues from '../components/AnimatedValues';
import AnimatedCTA from '../components/AnimatedCTA';

export default function Journey() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const journeyMilestones = [
    {
      phase: 'Phase 01',
      year: '2020',
      title: 'The Spark of Innovation',
      subtitle: 'From Vision to Reality',
      icon: '💡',
      description: 'It all began with a simple yet profound question: What if technology could solve real-world problems while nurturing the next generation of IT leaders? In the depths of a global pandemic, when the world needed digital solutions more than ever, VIRUZVERSE was born from the convergence of three passionate minds.',
      achievements: [
        'Founded with a clear vision to bridge technology and education',
        'Identified the gap in immersive learning solutions',
        'Established core values: Innovation, Security, and Global Impact'
      ],
      highlight: 'The moment we realized that virtual reality wasn\'t just entertainment—it was the future of learning.'
    },
    {
      phase: 'Phase 02',
      year: '2021',
      title: 'Building the Foundation',
      subtitle: 'First Steps into Tomorrow',
      icon: '🚀',
      description: 'Our first year was about proving concepts and building trust. We launched with GetMe, a revolutionary school bus tracking solution that showcased our ability to blend cutting-edge technology with practical applications. Parents could finally track their children\'s school buses in real-time, while schools gained unprecedented attendance management capabilities.',
      achievements: [
        'Launched GetMe - our flagship school tracking solution',
        'Served 1,000+ students across multiple schools',
        'Developed cross-platform expertise (Mobile & Desktop)',
        'Established our reputation for reliable, user-focused solutions'
      ],
      highlight: 'GetMe wasn\'t just our first product—it was proof that technology could make families feel safer.'
    },
    {
      phase: 'Phase 03',
      year: '2022',
      title: 'Expanding Horizons',
      subtitle: 'Diversifying Our Digital DNA',
      icon: '🎯',
      description: 'Growth meant exploring new territories. We ventured into real estate with our Broker App, revolutionizing how brokers find and present properties. Simultaneously, we entered the hospitality sector with CafeAura, making food ordering seamless for both mobile and desktop users. Each project taught us something new about different industries.',
      achievements: [
        'Launched Broker App with location-based property matching',
        'Introduced CafeAura with QR code verification system',
        'Expanded team to include specialists in multiple domains',
        'Achieved 95% client satisfaction rate'
      ],
      highlight: 'The year we learned that great technology isn\'t one-size-fits-all—it\'s industry-intelligent.'
    },
    {
      phase: 'Phase 04',
      year: '2023',
      title: 'The VR Revolution',
      subtitle: 'Stepping into Virtual Realities',
      icon: '🥽',
      description: 'This was our breakthrough year. We officially established our VR Division, creating immersive interior and exterior design experiences that transformed how architects and clients collaborate. Our 3D elevation renderings became the gold standard for showcasing building exteriors, while our VR solutions enabled clients to \'walk through\' their future spaces before construction began.',
      achievements: [
        'Established dedicated VR & 3D Division',
        'Created photorealistic architectural visualizations',
        'Developed Unity and Blender expertise',
        'Completed 50+ VR projects across architecture and training'
      ],
      highlight: 'The moment our clients first \'walked\' through their unbuilt homes—that\'s when we knew VR had unlimited potential.'
    },
    {
      phase: 'Phase 05',
      year: '2024',
      title: 'Enterprise Evolution',
      subtitle: 'Scaling Solutions, Amplifying Impact',
      icon: '🌍',
      description: 'Today, VIRUZVERSE stands as a comprehensive digital solutions powerhouse. From BillBro\'s lightning-fast billing for retail shops to Invoicify\'s advanced inventory analytics, we\'ve proven that innovation scales. Our Sentinel AI security platform now protects enterprises globally, while our VR training simulations are reshaping professional education across industries.',
      achievements: [
        'Launched Sentinel AI for enterprise cybersecurity',
        'Deployed solutions across 10+ countries',
        'Achieved 99.9% uptime across all platforms',
        'Built a global network of 10,000+ active users'
      ],
      highlight: 'We\'re no longer just building products—we\'re crafting the digital infrastructure for tomorrow\'s world.'
    }
  ];

  const coreValues = [
    {
      icon: '🔬',
      title: 'Innovation Through Experimentation',
      description: 'Every breakthrough starts with curiosity. We embrace failure as a stepping stone to innovation.'
    },
    {
      icon: '🛡️',
      title: 'Security by Design',
      description: 'In a digital world, trust is everything. We build security into every line of code, every user interaction.'
    },
    {
      icon: '🌟',
      title: 'People-Centered Technology',
      description: 'Technology should amplify human potential, not replace it. Every solution we create puts people first.'
    },
    {
      icon: '🎓',
      title: 'Learning Never Stops',
      description: 'We\'re not just building the future—we\'re learning from it. Every project teaches us something new.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Three.js Background */}
      <JourneyBackground />

      {/* Loading Screen */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
          />
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.div style={{ y: heroY, opacity: heroOpacity }}>
        <AnimatedHero />
      </motion.div>

      {/* Introduction Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              Where Innovation Meets Purpose
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every great journey begins with a simple question. Ours was:{' '}
              <em className="text-purple-300">
                "What if technology could not only solve today's problems but also prepare us for tomorrow's possibilities?"
              </em>{' '}
              What started as a vision has evolved into a mission—to create digital solutions that don't just work, but inspire, protect, and empower.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedTimeline milestones={journeyMilestones} />
        </div>
      </section>

      {/* Values Section */}
      <AnimatedValues values={coreValues} />

      {/* CTA Section */}
      <AnimatedCTA />

      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {['Hero', 'Timeline', 'Values', 'CTA'].map((section, index) => (
            <motion.button
              key={section}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 bg-white/30 rounded-full hover:bg-purple-500 transition-colors duration-300"
              onClick={() => {
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </div>
  );
}
