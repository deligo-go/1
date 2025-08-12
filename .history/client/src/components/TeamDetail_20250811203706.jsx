import { useState } from 'react';
import { Link } from 'wouter';

export default function TeamDetail({ team }) {
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleMemberHover = (index, isHovering) => {
    setHoveredMember(isHovering ? index : null);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      paddingTop: '80px',
      background: '#000000',
    },
    backButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 20px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '12px',
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: 500,
      marginBottom: '40px',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
    },
    teamHeader: {
      textAlign: 'center',
      padding: '60px 40px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '24px',
      marginBottom: '60px',
      border: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at center, ${team.color}10 0%, transparent 70%)`,
      zIndex: 1,
    },
    headerContent: {
      position: 'relative',
      zIndex: 2,
    },
    teamIcon: {
      fontSize: '64px',
      marginBottom: '24px',
      display: 'block',
      filter: 'drop-shadow(0 4px 20px rgba(110,75,195,0.3))',
    },
    teamName: {
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 800,
      marginBottom: '16px',
      color: '#ffffff',
      letterSpacing: '-0.02em',
    },
    teamDescription: {
      fontSize: '18px',
      opacity: 0.8,
      maxWidth: '700px',
      margin: '0 auto 40px',
      lineHeight: 1.6,
      color: '#e2e8f0',
      fontWeight: 300,
    },
    teamStatsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '20px',
      maxWidth: '500px',
      margin: '0 auto',
    },
    teamStat: {
      textAlign: 'center',
      padding: '20px 16px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.3s ease',
    },
    statNumber: {
      fontSize: '28px',
      fontWeight: 800,
      color: team.color,
      marginBottom: '8px',
      display: 'block',
    },
    statLabel: {
      fontSize: '12px',
      opacity: 0.7,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#a0aec0',
    },
    specialtiesSection: {
      padding: '80px 0',
      background: 'rgba(255,255,255,0.01)',
      position: 'relative',
    },
    sectionTitle: {
      fontSize: 'clamp(28px, 4vw, 36px)',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '16px',
      color: '#ffffff',
      letterSpacing: '-0.02em',
    },
    sectionSubtitle: {
      fontSize: '16px',
      textAlign: 'center',
      opacity: 0.6,
      marginBottom: '48px',
      color: '#a0aec0',
      maxWidth: '600px',
      margin: '0 auto 48px',
    },
    specialtiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '20px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    specialtyCard: {
      background: 'rgba(255,255,255,0.02)',
      padding: '24px 20px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    membersSection: {
      padding: '80px 0',
    },
    membersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-xl)',
    },
    memberCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
      position: 'relative',
      overflow: 'hidden',
    },
    memberAvatar: {
      fontSize: '64px',
      marginBottom: 'var(--spacing-md)',
      display: 'block',
      textAlign: 'center',
    },
    memberAvatarImg: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: 'var(--spacing-md)',
      border: '3px solid rgba(255,255,255,0.1)',
      display: 'block',
      margin: '0 auto var(--spacing-md)',
    },
    memberName: {
      fontSize: '22px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-xs)',
      textAlign: 'center',
    },
    memberRole: {
      fontSize: '14px',
      padding: '4px 12px',
      background: `${team.color}30`,
      border: `1px solid ${team.color}60`,
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
      marginBottom: 'var(--spacing-md)',
      textAlign: 'center',
      width: '100%',
    },
    memberBio: {
      fontSize: '14px',
      lineHeight: 1.6,
      opacity: 0.8,
      marginBottom: 'var(--spacing-md)',
    },
    memberSkills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--spacing-xs)',
      marginBottom: 'var(--spacing-md)',
    },
    skillTag: {
      background: 'rgba(255,255,255,0.1)',
      padding: '2px 6px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '11px',
      opacity: 0.8,
    },
    contactInfo: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      justifyContent: 'center',
    },
    contactLink: {
      padding: 'var(--spacing-xs)',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-sm)',
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '12px',
      transition: 'var(--transition-medium)',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 'var(--spacing-lg)',
    },
    modalContent: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-2xl)',
      maxWidth: '600px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      position: 'relative',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    closeButton: {
      position: 'absolute',
      top: 'var(--spacing-md)',
      right: 'var(--spacing-md)',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: '18px',
    },
    modalAvatar: {
      fontSize: '80px',
      textAlign: 'center',
      marginBottom: 'var(--spacing-lg)',
    },
    modalName: {
      fontSize: '28px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-sm)',
    },
    modalRole: {
      fontSize: '16px',
      textAlign: 'center',
      padding: '6px 16px',
      background: `${team.color}30`,
      border: `1px solid ${team.color}60`,
      borderRadius: 'var(--radius-md)',
      display: 'inline-block',
      marginBottom: 'var(--spacing-lg)',
      width: '100%',
    },
    modalSection: {
      marginBottom: 'var(--spacing-lg)',
    },
    modalSectionTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
      color: team.color,
    },
    modalList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    modalListItem: {
      padding: 'var(--spacing-xs) 0',
      fontSize: '14px',
      opacity: 0.9,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--spacing-sm)',
    },
    modalBullet: {
      color: team.color,
      fontWeight: 700,
      marginTop: '2px',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-lg)',
    },
    infoItem: {
      background: 'rgba(255,255,255,0.05)',
      padding: 'var(--spacing-md)',
      borderRadius: 'var(--radius-md)',
    },
    infoLabel: {
      fontSize: '12px',
      opacity: 0.7,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: 'var(--spacing-xs)',
    },
    infoValue: {
      fontSize: '14px',
      fontWeight: 600,
    }
  };

  return (
    <div style={styles.container}>
      <div className="container">
        {/* Back Button */}
        <Link 
          href="/teams" 
          style={styles.backButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
        >
          ← Back to All Teams
        </Link>

        {/* Team Header */}
        <div style={styles.teamHeader}>
          <div style={styles.teamIcon}>{team.icon}</div>
          <h1 style={styles.teamName}>{team.name}</h1>
          <p style={styles.teamDescription}>{team.description}</p>
          
          <div style={styles.teamStatsGrid}>
            <div style={styles.teamStat}>
              <div style={styles.statNumber}>{team.memberCount}</div>
              <div style={styles.statLabel}>Members</div>
            </div>
            <div style={styles.teamStat}>
              <div style={styles.statNumber}>{team.specialties.length}</div>
              <div style={styles.statLabel}>Specialties</div>
            </div>
            <div style={styles.teamStat}>
              <div style={styles.statNumber}>5+</div>
              <div style={styles.statLabel}>Years Avg</div>
            </div>
          </div>
        </div>

        {/* Team Specialties */}
        <section style={styles.specialtiesSection}>
          <div className="container">
            <h2 style={styles.sectionTitle}>Team Specialties</h2>
            <div style={styles.specialtiesGrid}>
              {team.specialties.map((specialty, index) => (
                <div 
                  key={index} 
                  style={styles.specialtyCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${team.color}20`;
                    e.currentTarget.style.borderColor = `${team.color}40`;
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  {specialty}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section style={styles.membersSection}>
          <div className="container">
            <h2 style={styles.sectionTitle}>Meet the Team</h2>
            <div style={styles.membersGrid}>
              {team.members.map((member, index) => (
                <div
                  key={member.id}
                  style={{
                    ...styles.memberCard,
                    transform: hoveredMember === index ? 'translateY(-8px) scale(1.02)' : '',
                    boxShadow: hoveredMember === index ? `0 20px 40px ${team.color}40` : '',
                    borderColor: hoveredMember === index ? `${team.color}80` : 'rgba(255,255,255,0.1)',
                    ...(typeof member.avatar === 'string' && (member.avatar.includes('.jpg') || member.avatar.includes('.png') || member.avatar.includes('.jpeg')) ? {
                      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), url(${member.avatar})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      minHeight: '280px',
                    } : {})
                  }}
                  onMouseEnter={() => handleMemberHover(index, true)}
                  onMouseLeave={() => handleMemberHover(index, false)}
>
                  {typeof member.avatar === 'string' && (member.avatar.includes('.jpg') || member.avatar.includes('.png') || member.avatar.includes('.jpeg')) ? (
                    <>
                      <h3 style={{
                        ...styles.memberName,
                        color: '#ffffff',
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                        marginTop: 'auto',
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: '24px',
                        fontWeight: 800,
                      }}>{member.name}</h3>
                      <div style={{
                        ...styles.memberRole,
                        background: `linear-gradient(135deg, ${team.color}90, ${team.color}70)`,
                        border: `1px solid ${team.color}`,
                        color: '#ffffff',
                        textShadow: '0 1px 5px rgba(0,0,0,0.5)',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                        marginBottom: '0',
                      }}>{member.role}</div>
                    </>
                  ) : (
                    <>
                      <div style={styles.memberAvatar}>{member.avatar}</div>
                      <h3 style={styles.memberName}>{member.name}</h3>
                      <div style={styles.memberRole}>{member.role}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
