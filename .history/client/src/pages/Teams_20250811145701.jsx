import { useState } from 'react';
import { useRoute, Link } from 'wouter';
import TeamDetail from '../components/TeamDetail';
import teamBg from '../assests/team.jpg';

export default function Teams() {
  const [match, params] = useRoute('/teams/:teamId');
  const [hoveredTeam, setHoveredTeam] = useState(null);

  // Team data structure
  const teams = [
    {
      id: 'vr-team',
      name: 'VR Team',
      description: 'Creative technologists crafting immersive virtual reality experiences',
      icon: '🥽',
      color: '#6e4bc3',
      memberCount: 8,
      specialties: ['Unity Development', '3D Modeling', 'UX Design', 'Immersive Technology'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 1,
          name: 'Praneeth Kumar',
          role: 'CEO & Founder',
          bio: 'Visionary entrepreneur with 10+ years in technology and innovation. Leading VIRUZVERSE with a passion for transforming digital experiences.',
          avatar: '👨‍💼',
          email: 'praneeth@viruzverse.com',
          linkedin: 'https://linkedin.com/in/praneethkumar',
          skills: ['Strategic Leadership', 'Innovation', 'Technology Vision', 'Team Building'],
          experience: '10+ years',
          education: 'Masters in Computer Science',
          achievements: [
            'Founded VIRUZVERSE in 2020',
            'Led company to serve 10,000+ users',
            'Pioneered VR education solutions',
            'Built cross-functional teams across 3 countries'
          ]
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          role: 'CTO',
          bio: 'Technology expert specializing in VR/AR, AI, and cloud infrastructure. Driving technical excellence across all VIRUZVERSE products.',
          avatar: '👩‍💻',
          email: 'sarah@viruzverse.com',
          linkedin: 'https://linkedin.com/in/sarahjohnson',
          skills: ['VR/AR Development', 'Cloud Architecture', 'AI/ML', 'Technical Strategy'],
          experience: '12+ years',
          education: 'PhD in Computer Science, Stanford',
          achievements: [
            'Architected VIRUZVERSE platform infrastructure',
            '50+ patents in VR/AR technologies',
            'Led development of award-winning VR training solutions',
            'Speaker at 20+ international tech conferences'
          ]
        },
        {
          id: 3,
          name: 'Michael Rodriguez',
          role: 'Head of Product',
          bio: 'Product strategist with deep expertise in user experience and market research. Ensuring our products solve real-world problems.',
          avatar: '👨‍🔬',
          email: 'michael@viruzverse.com',
          linkedin: 'https://linkedin.com/in/michaelrodriguez',
          skills: ['Product Strategy', 'UX Research', 'Market Analysis', 'Agile Methodology'],
          experience: '15+ years',
          education: 'MBA, Harvard Business School',
          achievements: [
            'Launched 5 successful products with 95%+ user satisfaction',
            'Reduced time-to-market by 40% through agile practices',
            'Led product teams across 10+ countries',
            'Established product-market fit for key solutions'
          ]
        },
        {
          id: 4,
          name: 'Emily Davis',
          role: 'Head of Operations',
          bio: 'Operations expert ensuring smooth business processes and exceptional client delivery across all VIRUZVERSE initiatives.',
          avatar: '👩‍💼',
          email: 'emily@viruzverse.com',
          linkedin: 'https://linkedin.com/in/emilydavis',
          skills: ['Operations Management', 'Process Optimization', 'Team Leadership', 'Client Success'],
          experience: '12+ years',
          education: 'Masters in Business Administration',
          achievements: [
            'Implemented operations processes serving 10,000+ users',
            'Achieved 99.9% client satisfaction rate',
            'Built global operations team of 50+ professionals',
            'Streamlined workflows reducing operational costs by 35%'
          ]
        }
      ]
    },
    {
      id: 'cloud-team',
      name: 'Cloud Team',
      description: 'Cloud infrastructure experts ensuring scalable and reliable solutions',
      icon: '☁️',
      color: '#a34b6e',
      memberCount: 6,
      specialties: ['AWS', 'Azure', 'DevOps', 'Infrastructure'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 5,
          name: 'Alex Chen',
          role: 'Senior Full-stack Developer',
          bio: 'Expert full-stack developer with expertise in React, Node.js, and cloud technologies. Building scalable applications.',
          avatar: '👨‍💻',
          email: 'alex@viruzverse.com',
          linkedin: 'https://linkedin.com/in/alexchen',
          skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
          experience: '8+ years',
          education: 'BS Computer Science',
          achievements: [
            'Architected microservices handling 1M+ requests/day',
            'Reduced application load time by 60%',
            'Led migration to cloud-native architecture',
            'Mentored 10+ junior developers'
          ]
        },
        {
          id: 6,
          name: 'Lisa Wang',
          role: 'DevOps Engineer',
          bio: 'DevOps specialist ensuring robust, scalable, and secure infrastructure for all VIRUZVERSE applications.',
          avatar: '👩‍🔧',
          email: 'lisa@viruzverse.com',
          linkedin: 'https://linkedin.com/in/lisawang',
          skills: ['Kubernetes', 'Docker', 'CI/CD', 'AWS', 'Monitoring'],
          experience: '7+ years',
          education: 'MS in Information Systems',
          achievements: [
            'Achieved 99.9% system uptime',
            'Implemented automated CI/CD pipelines',
            'Reduced deployment time by 80%',
            'Built comprehensive monitoring solutions'
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
      name: 'Media and Branding Team',
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
  if (match && params.teamId) {
    const team = teams.find(t => t.id === params.teamId);
    if (team) {
      return <TeamDetail team={team} />;
    }
  }

  const handleTeamHover = (index, isHovering) => {
    setHoveredTeam(isHovering ? index : null);
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
      padding: 'var(--spacing-3xl) 0',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
    },
    ctaTitle: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    ctaDescription: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: 'var(--spacing-xl)',
      maxWidth: '600px',
      margin: '0 auto var(--spacing-xl)',
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
            {teams.map((team, index) => (
              <Link 
                key={team.id} 
                href={`/teams/${team.id}`}
                style={{
                  ...styles.teamCard,
                  transform: hoveredTeam === index ? 'translateY(-10px) scale(1.02)' : '',
                  boxShadow: hoveredTeam === index ? `0 20px 40px ${team.color}40` : '',
                  borderColor: hoveredTeam === index ? `${team.color}80` : 'rgba(255,255,255,0.1)'
                }}
                onMouseEnter={() => handleTeamHover(index, true)}
                onMouseLeave={() => handleTeamHover(index, false)}
              >
                <h3 style={styles.teamName}>{team.name}</h3>
              </Link>
            ))}
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
            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
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
