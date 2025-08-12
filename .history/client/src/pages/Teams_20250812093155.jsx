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

// Import member images
import praneshImg from '../assests/Team members/pranesh.jpg';
import adityaImg from '../assests/Team members/aditya.jpg';
import pradeepImg from '../assests/Team members/pradeep.jpg';
import prishaImg from '../assests/Team members/prisha.jpg';
import priyaImg from '../assests/Team members/priya.jpg';
import sankarImg from '../assests/Team members/sankar.jpg';
import stefaniaImg from '../assests/Team members/stefania.jpg';
import vibithabkImg from '../assests/Team members/vibitha bk.jpg';
import chandraPriyanImg from '../assests/Team members/chandra priyan.jpg';
import gowthamImg from '../assests/Team members/gowtham.jpg';
import jayaSudhanImg from '../assests/Team members/jaya sudhan.png';
import hrithickImg from '../assests/Team members/hrithick.jpg';
import nivethaImg from '../assests/Team members/nivetha.jpg';
import susindharanImg from '../assests/Team members/susindharan.jpg';
import jithendarImg from '../assests/Team members/jithendar.PNG';

export default function Teams() {
  const [match, params] = useRoute('/teams/:teamId');
  const [hoveredTeam, setHoveredTeam] = useState(null);

  // Team data structure
  const teams = [
    {
      id: 'vr-team',
      name: 'VR Team',
      description: 'Our VR specialists are pioneering the future of immersive technology, creating breathtaking virtual worlds that transform how people learn, work, and interact. Using advanced Unity development, sophisticated 3D modeling techniques, and cutting-edge VR hardware integration, we build experiences that blur the line between reality and imagination. From educational simulations that make learning engaging to training environments that prepare professionals for real-world challenges, our team delivers VR solutions that captivate users and drive meaningful outcomes.',
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
          avatar: hrithickImg,
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
          avatar: gowthamImg,
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
          avatar: jayaSudhanImg,
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
      description: 'Our cloud architects and DevOps engineers are the backbone of modern digital infrastructure, designing and implementing enterprise-grade cloud solutions that scale seamlessly with business growth. Specializing in AWS, Azure, and Google Cloud platforms, we create robust, secure, and cost-optimized environments that support millions of users. Our expertise spans from containerization with Kubernetes and Docker to advanced CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions. We ensure 99.99% uptime while reducing operational costs and enhancing security posture for organizations worldwide.',
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
          avatar: praneshImg,
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
          avatar: chandraPriyanImg,
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
          avatar: priyaImg,
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
          avatar: vibithabkImg,
          email: 'vibithabkviruzverse.com',
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
          avatar: prishaImg,
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
      name: 'App Development ',
      description: 'Our mobile and application development experts create powerful, user-centric applications that connect people and businesses across all platforms. From native iOS and Android development to cross-platform solutions using React Native and Flutter, we build apps that combine stunning design with robust functionality. Our team specializes in creating seamless user experiences, integrating complex backend systems, implementing real-time features, and ensuring optimal performance across devices. Whether developing consumer apps with millions of downloads or enterprise solutions for specific business needs, we deliver applications that users love and businesses depend on.',
      icon: '📱',
      color: '#45b7d1',
      memberCount: 3,
      specialties: ['Mobile Development', 'React Native', 'Flutter', 'Cross-platform', 'Native Apps', 'API Integration'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 201,
          name: 'Sarvesh',
          role: 'Senior Mobile App Developer',
          bio: 'Experienced mobile app developer specializing in cross-platform solutions and native iOS/Android development. Expert in creating scalable and user-friendly mobile applications.',
          avatar: '👨‍💻',
          email: 'sarvesh@viruzverse.com',
          linkedin: 'https://linkedin.com/in/sarvesh-mobile',
          skills: ['React Native', 'Flutter', 'iOS Development', 'Android Development', 'TypeScript', 'Firebase'],
          experience: '5+ years',
          education: 'BS in Computer Science',
          achievements: [
            'Developed 25+ mobile applications',
            'Built apps with 1M+ downloads on app stores',
            'Reduced app development time by 40% using cross-platform frameworks',
            'Led mobile app architecture for enterprise clients'
          ]
        },
        {
          id: 202,
          name: 'Sankar',
          role: 'Full-Stack App Developer',
          bio: 'Full-stack developer focused on end-to-end mobile and web application development. Passionate about creating seamless user experiences across all platforms.',
          avatar: sankarImg,
          email: 'sankar@viruzverse.com',
          linkedin: 'https://linkedin.com/in/sankar-fullstack',
          skills: ['React Native', 'Node.js', 'MongoDB', 'REST APIs', 'GraphQL', 'AWS'],
          experience: '4+ years',
          education: 'BE in Information Technology',
          achievements: [
            'Built complete app ecosystems with backend services',
            'Developed real-time messaging applications',
            'Optimized app performance for 50% faster load times',
            'Created reusable component libraries'
          ]
        },
        {
          id: 203,
          name: 'Pradeep',
          role: 'UI/UX App Designer & Developer',
          bio: 'Designer-developer hybrid specializing in mobile app UI/UX and frontend development. Creates intuitive and visually appealing mobile experiences.',
          avatar: pradeepImg,
          email: 'pradeep@viruzverse.com',
          linkedin: 'https://linkedin.com/in/pradeep-designer',
          skills: ['UI/UX Design', 'Flutter', 'Figma', 'Adobe XD', 'React Native', 'Animation'],
          experience: '3+ years',
          education: 'Bachelor in Design',
          achievements: [
            'Designed user interfaces for 30+ mobile apps',
            'Improved user engagement by 60% through design optimization',
            'Created design systems for consistent app experiences',
            'Won 2 awards for mobile app design excellence'
          ]
        }
      ]
    },
    {
      id: 'fullstack-team',
      name: 'FullStack Team',
      description: 'Our full-stack developers are the Swiss Army knives of software development, seamlessly bridging frontend elegance with backend power. Masters of modern web technologies including React, Node.js, Python, and cloud platforms, they architect complete digital solutions from database design to user interface. With expertise in microservices architecture, API development, real-time applications, and scalable system design, our full-stack team builds end-to-end solutions that handle everything from startup MVPs to enterprise-scale applications serving millions of users.',
      icon: '💻',
      color: '#4bc36e',
      memberCount: 3,
      specialties: ['React', 'Node.js', 'Database Design', 'API Development'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 9,
          name: 'Safil',
          role: 'Senior FullStack Developer',
          bio: 'Full-stack expert with extensive experience in modern web technologies and scalable application architecture.',
          avatar: '👨‍💻',
          email: 'safil@viruzverse.com',
          linkedin: 'https://linkedin.com/in/safil',
          skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'GraphQL'],
          experience: '5+ years',
          education: 'BS in Computer Science',
          achievements: [
            'Built 15+ production applications',
            'Reduced development time by 35%',
            'Led full-stack development projects',
            'Architected scalable web applications'
          ]
        },
        {
          id: 10,
          name: 'Steffania',
          role: 'Full Stack Developer',
          bio: 'Versatile developer skilled in both frontend and backend technologies, creating seamless user experiences.',
          avatar: stefaniaImg,
          email: 'steffania@viruzverse.com',
          linkedin: 'https://linkedin.com/in/steffania',
          skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS'],
          experience: '3+ years',
          education: 'BE in Information Technology',
          achievements: [
            'Developed 10+ web applications',
            'Improved application performance by 40%',
            'Built responsive user interfaces',
            'Integrated complex backend systems'
          ]
        },
        {
          id: 11,
          name: 'Nivetha',
          role: 'Full Stack Developer',
          bio: 'Passionate developer focused on creating efficient, user-friendly applications with modern technologies.',
          avatar: nivethaImg,
          email: 'nivetha@viruzverse.com',
          linkedin: 'https://linkedin.com/in/nivetha',
          skills: ['React', 'Python', 'Django', 'JavaScript', 'MySQL'],
          experience: '3+ years',
          education: 'BS in Software Engineering',
          achievements: [
            'Built end-to-end web solutions',
            'Optimized database queries for better performance',
            'Created reusable component libraries',
            'Collaborated on multiple full-stack projects'
          ]
        }
      ]
    },
    {
      id: 'media-branding-team',
      name: 'Media and Branding',
      description: 'Our creative strategists and visual storytellers craft compelling brand narratives that resonate with audiences and drive business growth. Combining artistic vision with strategic thinking, we develop comprehensive brand identities, engaging video content, stunning graphic designs, and cohesive marketing materials that make lasting impressions. From logo design and brand guidelines to social media campaigns and multimedia productions, our team ensures every touchpoint reflects your brand\'s unique personality and values, creating emotional connections that convert prospects into loyal customers.',
      icon: '🎨',
      color: '#c34b6e',
      memberCount: 2,
      specialties: ['Brand Design', 'Video Production', 'Content Creation', 'Visual Identity'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 12,
          name: 'Susindiran G',
          role: 'Creative Director',
          bio: 'Brand strategist and creative director with expertise in building memorable brand experiences across all touchpoints.',
          avatar: susindharanImg,
          email: 'susindiran@viruzverse.com',
          linkedin: 'https://linkedin.com/in/susindirang',
          skills: ['Brand Strategy', 'Visual Design', 'Video Editing', 'Adobe Creative Suite', 'Animation'],
          experience: '6+ years',
          education: 'Bachelor in Visual Arts',
          achievements: [
            'Rebranded 30+ companies',
            'Created award-winning campaigns',
            'Led creative projects for major brands',
            'Increased brand recognition by 250%'
          ]
        },
        {
          id: 13,
          name: 'Aditya K',
          role: 'Media Designer',
          bio: 'Creative media designer specializing in visual storytelling, graphic design, and multimedia content creation.',
          avatar: adityaImg,
          email: 'aditya@viruzverse.com',
          linkedin: 'https://linkedin.com/in/adityak',
          skills: ['Graphic Design', 'Video Production', 'Motion Graphics', 'Photoshop', 'Illustrator'],
          experience: '4+ years',
          education: 'Bachelor in Graphic Design',
          achievements: [
            'Designed visual content for 100+ projects',
            'Created engaging social media campaigns',
            'Produced high-quality video content',
            'Won 3 design excellence awards'
          ]
        }
      ]
    },
    {
      id: 'digital-marketing-team',
      name: 'Digital Marketing Team',
      description: 'Our digital marketing specialists are growth hackers and data scientists rolled into one, driving measurable business results through strategic online campaigns and analytics-driven decision making. Experts in SEO, SEM, social media marketing, content strategy, and conversion optimization, we create multi-channel campaigns that maximize ROI and build lasting customer relationships. From increasing organic traffic by 400% to generating millions in digital revenue, our team combines creative storytelling with rigorous data analysis to deliver marketing strategies that not only reach but engage and convert your target audience.',
      icon: '📊',
      color: '#6ec34b',
      memberCount: 2,
      specialties: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
      image: '/api/placeholder/400/200',
      members: [
        {
          id: 14,
          name: 'Jithender',
          role: 'Digital Marketing Lead',
          bio: 'Marketing strategist passionate about driving growth through innovative digital campaigns and data analysis.',
          avatar: '👨‍💼',
          email: 'jithender@viruzverse.com',
          linkedin: 'https://linkedin.com/in/jithender',
          skills: ['Digital Strategy', 'Google Analytics', 'Social Media Marketing', 'Content Strategy', 'PPC'],
          experience: '5+ years',
          education: 'MBA in Digital Marketing',
          achievements: [
            'Increased organic traffic by 350%',
            'Generated $1.5M+ in digital revenue',
            'Built successful marketing campaigns',
            'Achieved 20% conversion rate improvement'
          ]
        },
        {
          id: 15,
          name: 'Vibitha',
          role: 'Digital Marketing Specialist',
          bio: 'Data-driven marketing professional focused on SEO, content marketing, and performance optimization.',
          avatar: vibithabkImg,
          email: 'vibitha@viruzverse.com',
          linkedin: 'https://linkedin.com/in/vibitha',
          skills: ['SEO/SEM', 'Content Marketing', 'Social Media', 'Email Marketing', 'Analytics'],
          experience: '4+ years',
          education: 'Bachelor in Marketing',
          achievements: [
            'Improved website rankings for 50+ keywords',
            'Created content that generated 500K+ views',
            'Managed social media campaigns with 2M+ reach',
            'Increased email open rates by 40%'
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px',
      marginTop: '48px',
      maxWidth: '1200px',
      margin: '48px auto 0',
    },
    teamCard: {
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '24px',
      padding: '48px 32px',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
    },
    teamName: {
      fontSize: 'clamp(28px, 4vw, 36px)',
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      position: 'relative',
      zIndex: 2,
      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
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
                    transform: hoveredTeam === index ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredTeam === index ? `0 25px 50px ${team.color}30, 0 0 0 1px ${team.color}40` : '0 4px 20px rgba(0,0,0,0.1)',
                    borderColor: hoveredTeam === index ? `${team.color}60` : 'rgba(255,255,255,0.08)',
                    backgroundImage: teamImage && hoveredTeam === index ? `url(${teamImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
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
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      zIndex: 1,
                      borderRadius: '24px'
                    }} />
                  )}
                  
                  <h3 style={{
                    ...styles.teamName,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {team.name}
                  </h3>
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
