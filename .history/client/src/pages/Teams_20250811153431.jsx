import { useState } from 'react';
import { useRoute, Link } from 'wouter';
import TeamDetail from '../components/TeamDetail';
import teamBg from '../assests/team.jpg';

// Import team images
import vrTeamImg from '../assests/VR team.jpg';
import cloudTeamImg from '../assests/cloud team.png';
import appDevTeamImg from '../assests/application developer team.jpg';
import fullStackTeamImg from '../assests/fullstack team.jpg';
import mediaBrandingTeamImg from '../assests/media and branding team.jpg';
import digitalMarketingTeamImg from '../assests/digital marketing team.jpeg';

export default function Teams() {
  const [match, params] = useRoute('/teams/:teamId');
  const [hoveredTeam, setHoveredTeam] = useState(null);

  // Team data structure
  const teams = [
    {
      id: 'vr-team',
      name: 'VR Team',
      description: 'Creative technologists crafting immersive virtual reality experiences using Unity, 3D modeling, and cutting-edge VR technologies to deliver stunning virtual worlds.',
      icon: '🥽',
      color: '#6e4bc3',
      memberCount: 3,
      specialties: ['Unity Development', '3D Modeling', 'VR Design', 'Immersive Experiences'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 1,
          name: 'Hrithik Ram .M',
          role: 'VR Developer',
          bio: 'Skilled VR developer specializing in Unity 3D and immersive experience creation. Passionate about building virtual worlds that engage and inspire users.',
          avatar: '👨‍💻',
          email: 'hrithikram@viruzverse.com',
          linkedin: 'https://linkedin.com/in/hrithikram',
          skills: ['Unity 3D', 'C#', 'VR Development', '3D Modeling', 'Game Design'],
          experience: '3+ years',
          education: 'Bachelor in Computer Science',
          achievements: [
            'Developed immersive VR training modules',
            'Created interactive 3D environments',
            'Optimized VR applications for performance',
            'Contributed to award-winning VR projects'
          ]
        },
        {
          id: 2,
          name: 'Gowtham V',
          role: '3D Artist & Designer',
          bio: '3D artist and designer with expertise in creating stunning visual assets and immersive environments for VR applications.',
          avatar: '👨‍🎨',
          email: 'gowtham@viruzverse.com',
          linkedin: 'https://linkedin.com/in/gowthamv',
          skills: ['3D Modeling', 'Blender', 'Maya', 'Texturing', 'Animation'],
          experience: '2+ years',
          education: 'Bachelor in Visual Arts',
          achievements: [
            'Created 100+ high-quality 3D assets',
            'Designed immersive VR environments',
            'Optimized 3D models for VR performance',
            'Collaborated on multiple VR projects'
          ]
        },
        {
          id: 3,
          name: 'Jaya Sudhan S',
          role: 'VR UI/UX Designer',
          bio: 'VR UI/UX designer focused on creating intuitive and user-friendly interfaces for virtual reality applications and experiences.',
          avatar: '👨‍🎨',
          email: 'jayasudhan@viruzverse.com',
          linkedin: 'https://linkedin.com/in/jayasudhans',
          skills: ['VR UI Design', 'User Experience', 'Interaction Design', 'Prototyping', 'Unity UI'],
          experience: '2+ years',
          education: 'Bachelor in Design',
          achievements: [
            'Designed intuitive VR user interfaces',
            'Improved user engagement by 40%',
            'Created interactive VR prototypes',
            'Specialized in VR accessibility design'
          ]
        }
      ]
    },
    {
      id: 'cloud-team',
      name: 'Cloud Team',
      description: 'Cloud infrastructure specialists architecting scalable, secure, and cost-effective cloud solutions using cutting-edge technologies like AWS, Azure, and modern DevOps practices.',
      icon: '☁️',
      color: '#a34b6e',
      memberCount: 4,
      specialties: ['AWS Cloud', 'Azure', 'DevOps', 'Kubernetes', 'Infrastructure as Code', 'Cloud Security'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 101,
          name: 'Pranesh Kumar',
          role: 'Cloud Solutions Architect',
          bio: 'Senior cloud architect specializing in designing and implementing scalable cloud infrastructures. Expert in multi-cloud environments and enterprise-grade solutions.',
          avatar: '👨‍💻',
          email: 'pranesh@viruzverse.com',
          linkedin: 'https://linkedin.com/in/praneshkumar',
          skills: ['AWS', 'Azure', 'Cloud Architecture', 'Terraform', 'Kubernetes', 'Docker'],
          experience: '6+ years',
          education: 'MS in Cloud Computing',
          achievements: [
            'Designed cloud infrastructure for 50+ enterprise clients',
            'Reduced cloud costs by 40% through optimization',
            'Led migration of legacy systems to cloud-native architectures',
            'Certified AWS Solutions Architect Professional'
          ]
        },
        {
          id: 102,
          name: 'Chandrapriyan',
          role: 'DevOps Engineer',
          bio: 'DevOps specialist focused on automation, continuous integration, and cloud infrastructure management. Passionate about building reliable and scalable deployment pipelines.',
          avatar: '👨‍🔧',
          email: 'chandrapriyan@viruzverse.com',
          linkedin: 'https://linkedin.com/in/chandrapriyan',
          skills: ['CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Monitoring'],
          experience: '4+ years',
          education: 'BS in Information Technology',
          achievements: [
            'Implemented CI/CD pipelines for 100+ projects',
            'Achieved 99.9% system uptime across all services',
            'Reduced deployment time from hours to minutes',
            'Built automated monitoring and alerting systems'
          ]
        },
        {
          id: 103,
          name: 'Priya',
          role: 'Cloud Security Engineer',
          bio: 'Cloud security specialist ensuring robust security measures across cloud environments. Expert in compliance, threat detection, and security automation.',
          avatar: '👩‍💼',
          email: 'priya@viruzverse.com',
          linkedin: 'https://linkedin.com/in/priya-cloud',
          skills: ['Cloud Security', 'AWS Security', 'Compliance', 'Identity Management', 'Threat Detection'],
          experience: '5+ years',
          education: 'MS in Cybersecurity',
          achievements: [
            'Implemented security frameworks for 30+ cloud environments',
            'Achieved SOC2 and ISO27001 compliance',
            'Reduced security incidents by 80%',
            'Built automated security monitoring solutions'
          ]
        },
        {
          id: 104,
          name: 'Vibitha BK',
          role: 'Cloud Solutions Architect',
          bio: 'Senior cloud architect specializing in designing and implementing scalable cloud infrastructures. Expert in multi-cloud environments and enterprise-grade solutions.',
          avatar: '👨‍💻',
          email: 'pranesh@viruzverse.com',
          linkedin: 'https://linkedin.com/in/praneshkumar',
          skills: ['AWS', 'Azure', 'Cloud Architecture', 'Terraform', 'Kubernetes', 'Docker'],
          experience: '6+ years',
          education: 'MS in Cloud Computing',
          achievements: [
            'Designed cloud infrastructure for 50+ enterprise clients',
            'Reduced cloud costs by 40% through optimization',
            'Led migration of legacy systems to cloud-native architectures',
            'Certified AWS Solutions Architect Professional'
          ]
        },
        
        {
          id: 105,
          name: 'Prisha',
          role: 'Cloud Data Engineer',
          bio: 'Data engineer specializing in cloud-native data pipelines and analytics. Expert in building scalable data architectures using modern cloud services.',
          avatar: '👩‍💻',
          email: 'prisha@viruzverse.com',
          linkedin: 'https://linkedin.com/in/prisha-data',
          skills: ['AWS Data Services', 'Apache Spark', 'Data Pipeline', 'BigQuery', 'Snowflake', 'Python'],
          experience: '3+ years',
          education: 'MS in Data Science',
          achievements: [
            'Built data pipelines processing 10TB+ daily',
            'Designed real-time analytics platforms',
            'Optimized data costs by 50% through efficient architectures',
            'Created ML model deployment pipelines'
          ]
        }
      ]
    },
    {
      id: 'application-dev',
      name: 'Application Dev Team',
      description: 'Expert developers creating innovative mobile and desktop applications',
      icon: '📱',
      color: '#45b7d1',
      memberCount: 10,
      specialties: ['Mobile Development', 'Cross-platform', 'Native Apps', 'UI/UX'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 7,
          name: 'David Kim',
          role: 'VR/AR Lead Developer',
          bio: 'VR/AR specialist with expertise in Unity, Unreal Engine, and immersive experience design.',
          avatar: '👨‍🎨',
          email: 'david@viruzverse.com',
          linkedin: 'https://linkedin.com/in/davidkim',
          skills: ['Unity 3D', 'Unreal Engine', 'C#', 'Blender', 'VR/AR SDKs'],
          experience: '9+ years',
          education: 'MS in Computer Graphics',
          achievements: [
            'Developed award-winning VR training applications',
            'Created immersive experiences for 100+ clients',
            'Optimized VR applications for mobile platforms',
            'Published 15+ VR/AR research papers'
          ]
        },
        {
          id: 8,
          name: 'Maya Patel',
          role: '3D Artist & Designer',
          bio: '3D artist and designer creating stunning visual experiences and immersive environments.',
          avatar: '👩‍🎨',
          email: 'maya@viruzverse.com',
          linkedin: 'https://linkedin.com/in/mayapatel',
          skills: ['3D Modeling', 'Texturing', 'Animation', 'Blender', 'Maya'],
          experience: '6+ years',
          education: 'BFA in 3D Animation',
          achievements: [
            'Created 200+ high-quality 3D assets',
            'Designed immersive environments for education',
            'Won 3 awards for VR environment design',
            'Collaborated on Hollywood VFX projects'
          ]
        }
      ]
    },
    {
      id: 'fullstack-team',
      name: 'FullStack Team',
      description: 'Versatile developers mastering both frontend and backend technologies',
      icon: '💻',
      color: '#4bc36e',
      memberCount: 12,
      specialties: ['React', 'Node.js', 'Database Design', 'API Development'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 9,
          name: 'James Wilson',
          role: 'Senior FullStack Developer',
          bio: 'Full-stack expert with extensive experience in modern web technologies and scalable application architecture.',
          avatar: '👨‍💻',
          email: 'james@viruzverse.com',
          linkedin: 'https://linkedin.com/in/jameswilson',
          skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'GraphQL'],
          experience: '11+ years',
          education: 'MS in Software Engineering',
          achievements: [
            'Built 20+ production applications',
            'Reduced development time by 40%',
            'Led team of 15+ developers',
            'Architected microservices handling millions of requests'
          ]
        }
      ]
    },
    {
      id: 'media-branding-team',
      name: 'Media and Branding',
      description: 'Creative professionals building compelling brand experiences and visual storytelling',
      icon: '🎨',
      color: '#c34b6e',
      memberCount: 8,
      specialties: ['Brand Design', 'Video Production', 'Content Creation', 'Visual Identity'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 10,
          name: 'Dr. Aisha Ahmed',
          role: 'Creative Director',
          bio: 'Brand strategist and creative director with expertise in building memorable brand experiences across all touchpoints.',
          avatar: '👩‍🎨',
          email: 'aisha@viruzverse.com',
          linkedin: 'https://linkedin.com/in/aishaahmed',
          skills: ['Brand Strategy', 'Visual Design', 'Video Editing', 'Adobe Creative Suite', 'Animation'],
          experience: '10+ years',
          education: 'MFA in Visual Communications',
          achievements: [
            'Rebranded 50+ companies',
            'Created award-winning campaigns',
            'Led creative team of 20+ professionals',
            'Increased brand recognition by 300%'
          ]
        }
      ]
    },
    {
      id: 'digital-marketing-team',
      name: 'Digital Marketing Team',
      description: 'Marketing experts driving growth through data-driven digital strategies',
      icon: '📊',
      color: '#6ec34b',
      memberCount: 7,
      specialties: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 11,
          name: 'Sofia Martinez',
          role: 'Digital Marketing Lead',
          bio: 'Marketing strategist passionate about driving growth through innovative digital campaigns and data analysis.',
          avatar: '👩‍💼',
          email: 'sofia@viruzverse.com',
          linkedin: 'https://linkedin.com/in/sofiamartinez',
          skills: ['Digital Strategy', 'Google Analytics', 'Social Media Marketing', 'Content Strategy', 'PPC'],
          experience: '8+ years',
          education: 'MS in Digital Marketing',
          achievements: [
            'Increased organic traffic by 400%',
            'Generated $2M+ in digital revenue',
            'Built marketing team from ground up',
            'Achieved 25% conversion rate improvement'
          ]
        }
      ]
    }
  ];

  // If we have a team ID in the URL, show the team detail
  console.log('Route match:', match, 'params:', params);
  if (match && params.teamId) {
    console.log('Team ID found:', params.teamId);
    const team = teams.find(t => t.id === params.teamId);
    console.log('Team found:', team);
    if (team) {
      return <TeamDetail team={team} />;
    } else {
      console.log('Team not found for ID:', params.teamId);
      // Return a not found message or redirect
      return (
        <div style={{ padding: '100px', textAlign: 'center' }}>
          <h1>Team not found</h1>
          <p>The team with ID "{params.teamId}" does not exist.</p>
          <Link href="/teams">← Back to Teams</Link>
        </div>
      );
    }
  }

  const handleTeamHover = (index, isHovering) => {
    setHoveredTeam(isHovering ? index : null);
  };

  // Function to get team background image
  const getTeamImage = (teamId) => {
    switch(teamId) {
      case 'vr-team':
        return vrTeamImg;
      case 'cloud-team':
        return cloudTeamImg;
      case 'application-dev':
        return appDevTeamImg;
      case 'fullstack-team':
        return fullStackTeamImg;
      case 'media-branding-team':
        return mediaBrandingTeamImg;
      case 'digital-marketing-team':
        return digitalMarketingTeamImg;
      default:
        return null;
    }
  };

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0',
      textAlign: 'center',
      background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.6) 100%), url(${teamBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      paddingTop: '120px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
    },
    pageTitle: {
      fontSize: 'clamp(40px, 7vw, 72px)',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
    },
    pageSubtitle: {
      fontSize: '22px',
      color: '#ffffff',
      opacity: 0.95,
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.4,
      textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
    },
    section: {
      padding: 'var(--spacing-3xl) 0',
    },
    sectionTitle: {
      fontSize: '42px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-md)',
    },
    sectionDescription: {
      textAlign: 'center',
      fontSize: '18px',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto var(--spacing-2xl)',
      lineHeight: 1.6,
    },
    teamsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-2xl)',
    },
    teamCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
    },
    teamIcon: {
      fontSize: '48px',
      marginBottom: 'var(--spacing-md)',
      display: 'block',
    },
    teamName: {
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-sm)',
      color: 'var(--color-text-primary)',
    },
    teamDescription: {
      fontSize: '14px',
      lineHeight: 1.6,
      opacity: 0.8,
      marginBottom: 'var(--spacing-lg)',
    },
    teamStats: {
      display: 'flex',
      gap: 'var(--spacing-lg)',
      marginBottom: 'var(--spacing-lg)',
    },
    teamStat: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '20px',
      fontWeight: 700,
      color: 'var(--color-accent-3)',
    },
    statLabel: {
      fontSize: '12px',
      opacity: 0.7,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    specialtiesList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--spacing-xs)',
    },
    specialty: {
      background: 'rgba(255,255,255,0.1)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '12px',
      opacity: 0.8,
    },
    statsSection: {
      background: 'var(--color-surface)',
      padding: 'var(--spacing-3xl) 0',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--spacing-xl)',
      textAlign: 'center',
    },
    statCard: {
      padding: 'var(--spacing-lg)',
    },
    statCardNumber: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-sm)',
      background: 'var(--gradient-primary)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    statCardLabel: {
      fontSize: '16px',
      opacity: 0.8,
    },
    ctaSection: {
      textAlign: 'center',
      padding: 'var(--spacing-xl) var(--spacing-lg)',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(255,255,255,0.1)',
      margin: 'var(--spacing-2xl) 0',
      backdropFilter: 'blur(10px)',
    },
    ctaTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
      background: 'var(--gradient-primary)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    ctaDescription: {
      fontSize: '14px',
      opacity: 0.8,
      marginBottom: 'var(--spacing-md)',
      maxWidth: '400px',
      margin: '0 auto var(--spacing-md)',
      lineHeight: 1.5,
    }
  };

  const overallStats = {
    totalMembers: teams.reduce((sum, team) => sum + team.memberCount, 0),
    totalTeams: teams.length,
    countries: 8,
    experience: '10+'
  };

  return (
    <>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle}>
            Our Teams
          </h1>
          <p style={styles.pageSubtitle}>
            Meet the brilliant minds driving innovation at VIRUZVERSE. Our diverse, global teams work together to create cutting-edge solutions.
          </p>
        </div>
      </section>

      

      {/* Teams Grid */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Explore Our Teams</h2>
          <p style={styles.sectionDescription}>
            Each team brings unique expertise and passion to deliver exceptional results. Click on any team to learn more about their members and specializations.
          </p>
          <div style={styles.teamsGrid}>
            {teams.map((team, index) => {
              const teamImage = getTeamImage(team.id);
              return (
                <Link 
                  key={team.id} 
                  href={`/teams/${team.id}`}
                  style={{
                    ...styles.teamCard,
                    transform: hoveredTeam === index ? 'translateY(-10px) scale(1.02)' : '',
                    boxShadow: hoveredTeam === index ? `0 20px 40px ${team.color}40` : '',
                    borderColor: hoveredTeam === index ? `${team.color}80` : 'rgba(255,255,255,0.1)',
                    backgroundImage: teamImage && hoveredTeam === index ? `url(${teamImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                  onMouseEnter={() => handleTeamHover(index, true)}
                  onMouseLeave={() => handleTeamHover(index, false)}
                >
                  {/* Background overlay for better text readability on hover */}
                  {teamImage && hoveredTeam === index && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      zIndex: 1,
                      borderRadius: 'var(--radius-xl)'
                    }} />
                  )}
                  <h3 style={{
                    ...styles.teamName,
                    position: 'relative',
                    zIndex: 2
                  }}>{team.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>
              Join Our Team
            </h2>
            <p style={styles.ctaDescription}>
              Ready to work with exceptional people on cutting-edge projects? Explore career opportunities at VIRUZVERSE.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/careers" className="btn-primary">
                View Open Positions
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Our HR Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
