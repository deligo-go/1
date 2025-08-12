import React, { useEffect, useRef } from 'react';
import { FaLightbulb, FaRocket, FaUsers, FaChartLine, FaAward, FaVrCardboard, FaGlobe, FaBullseye } from 'react-icons/fa';
import journeyBg from '../assests/journey.jpeg';
import '../styles/journey-animations.css';
import '../styles/Journey.css'; // Import new styles

const journeyMilestones = [
  {
    year: '2020',
    title: 'The Spark of an Idea',
    description: 'Our journey began with a simple yet powerful idea: to revolutionize the digital landscape with immersive and intuitive virtual reality experiences.',
    icon: <FaLightbulb />,
  },
  {
    year: '2021',
    title: 'Launch & Liftoff',
    description: 'After months of relentless development and innovation, we launched our first flagship product, marking our official entry into the market.',
    icon: <FaRocket />,
  },
  {
    year: '2022',
    title: 'Expanding Horizons',
    description: 'We expanded our team, secured key partnerships, and began exploring new frontiers in augmented and mixed reality.',
    icon: <FaBullseye />,
  },
  {
    year: '2023',
    title: 'Virtual Reality Mainstream',
    description: 'Our solutions gained mainstream recognition, being adopted by industries ranging from entertainment to education and healthcare.',
    icon: <FaVrCardboard />,
  },
  {
    year: '2024',
    title: 'Global Impact',
    description: 'With a presence in multiple continents, we continue to push the boundaries of what is possible, shaping the future of digital interaction.',
    icon: <FaGlobe />,
  },
];

const Journey = () => {
  const timelineRef = useRef(null);
  const dotRef = useRef(null);
  const milestoneRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' }
    );

    const handleScroll = () => {
      if (!timelineRef.current || !dotRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = window.scrollY + timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition >= timelineTop && scrollPosition <= timelineTop + timelineHeight - windowHeight) {
        const progress = (scrollPosition - timelineTop) / (timelineHeight - windowHeight);
        const dotPosition = progress * (timelineHeight - dotRef.current.offsetHeight);
        dotRef.current.style.top = `${dotPosition}px`;
      } else if (scrollPosition < timelineTop) {
        dotRef.current.style.top = '0px';
      } else {
        dotRef.current.style.top = `${timelineHeight - dotRef.current.offsetHeight}px`;
      }
    };

    const currentMilestones = milestoneRefs.current;
    currentMilestones.forEach((milestone) => {
      if (milestone) observer.observe(milestone);
    });

    window.addEventListener('scroll', handleScroll);

    // Final Polish: Left-side particle generation
    const particleContainer = document.querySelector('.journey-particle-container');
    if (particleContainer) {
      // Clear any existing particles to prevent duplication on re-renders
      particleContainer.innerHTML = '';
      const particleCount = 20; // Reduced for a more subtle effect
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('journey-particle');
        const size = Math.random() * 2.5 + 1; // Smaller particles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        // Position is relative to the container, which is already 50% width
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        // Randomize animation properties for a more natural effect
        const animationDuration = Math.random() * 30 + 40; // 40s to 70s duration
        const animationDelay = Math.random() * 40;
        particle.style.animation = `faint-float ${animationDuration}s ${animationDelay}s linear infinite`;
        particleContainer.appendChild(particle);
      }
    }

    return () => {
      currentMilestones.forEach((milestone) => {
        if (milestone) observer.unobserve(milestone);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    pageContainer: {
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1, // Make the page container grow to fill the main layout area
    },
    heroSection: {
      position: 'relative',
      height: '60vh',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${journeyBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: 'calc(100% + 40px)', // Full bleed by overriding padding
      marginLeft: '-20px', // Center the full-bleed section
      overflowX: 'hidden', // Prevent horizontal scrollbar
    },
    heroContent: {
      maxWidth: '800px',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffffff',
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      color: '#ffffff',
      marginBottom: '2rem',
    },
    timelineSection: {
      padding: '100px 0', // Vertical padding only
      position: 'relative',
      flexGrow: 1,
    },
    timelineContentContainer: {
      position: 'relative',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px', // Horizontal padding for content
    },
    movingDot: {
      width: '20px',
      height: '20px',
      backgroundColor: '#4a90e2',
      borderRadius: '50%',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '0',
      zIndex: 3,
      transition: 'top 0.3s linear',
      boxShadow: '0 0 15px #4a90e2, 0 0 25px #4a90e2',
    },
    timelinePath: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '50%',
      width: '3px',
      backgroundColor: '#2a2a2a',
      marginLeft: '-1.5px',
    },
    milestoneItem: {
      padding: '10px 40px',
      position: 'relative',
      width: '50%',
      boxSizing: 'border-box',
      marginBottom: '50px',
    },
    milestoneContent: {
      padding: '20px 30px',
      backgroundColor: '#1a1a1a',
      position: 'relative',
      borderRadius: '8px',
      border: '1px solid #2a2a2a',
    },
    milestoneYear: {
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '10px',
      fontSize: '1.2rem',
    },
    milestoneTitle: {
      fontWeight: 'bold',
      fontSize: '1.4rem',
      marginBottom: '10px',
    },
    milestoneDescription: {
      color: '#ffffff',
      lineHeight: '1.6',
    },
    milestoneIcon: {
      position: 'absolute',
      top: '20px',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: '#0a0a0a',
      border: '3px solid #4a90e2',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.8rem',
      zIndex: 10,
    },
  };

  return (
    <div style={styles.pageContainer}>
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Journey Through Innovation</h1>
          <p style={styles.heroSubtitle}>From Vision to Virtual Reality - Discover how VIRUZVERSE evolved through each milestone</p>
        </div>
      </section>

      <div style={styles.timelineSection} className="journey-timeline-section">
        <div className="journey-particle-container"></div>
        <div style={styles.timelineContentContainer} ref={timelineRef}>
          <div style={styles.timelinePath} className="journey-timeline-path"></div>
          <div ref={dotRef} style={styles.movingDot}></div>
          {journeyMilestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          const itemStyle = {
            ...styles.milestoneItem,
            left: isLeft ? '0' : '50%',
            paddingLeft: isLeft ? '0' : '40px',
            paddingRight: isLeft ? '40px' : '0',
            textAlign: isLeft ? 'right' : 'left',
          };
          const contentStyle = {
            ...styles.milestoneContent,
            textAlign: 'left',
          };
          const iconStyle = {
            ...styles.milestoneIcon,
            right: isLeft ? '-25px' : 'auto',
            left: isLeft ? 'auto' : '-25px',
          };

          return (
            <div 
              key={index} 
              style={itemStyle} 
              ref={(el) => (milestoneRefs.current[index] = el)}
              className="journey-milestone"
              data-index={index}
            >
              <div style={contentStyle}>
                <div style={iconStyle}>{milestone.icon}</div>
                <h3 style={styles.milestoneYear}>{milestone.year}</h3>
                <h4 style={styles.milestoneTitle}>{milestone.title}</h4>
                <p style={styles.milestoneDescription}>{milestone.description}</p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Journey;
