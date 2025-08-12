import React from 'react';
import { Link } from 'wouter';
import { Youtube, Instagram, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const styles = {
    contactInfo: {
      marginTop: '20px',
    },
    sectionTitle: {
      fontSize: '1rem',
      marginBottom: '10px',
    },
    contactItem: {
      display: 'block',
      marginBottom: '8px',
      color: 'inherit',
      textDecoration: 'none',
    },
    flagIcon: {
      marginRight: '5px'
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>VIRUZVERSE</h3>
            <p>Pioneering the future of digital interaction with cutting-edge solutions in VR and AI.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/journey">Our Journey</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.youtube.com/@ViruzverseTech" 
                 className="social-icon" 
                 aria-label="YouTube"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com/viruzverse.tech?igsh=dXNhZGt6djh1OGlx" 
                 className="social-icon" 
                 aria-label="Instagram"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/viruzverse-solutions/posts/?feedView=all" 
                 className="social-icon" 
                 aria-label="LinkedIn"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@viruzverse.com" 
                 className="social-icon" 
                 aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            
            <div style={styles.contactInfo}>
              <h3 style={styles.sectionTitle}>Connect</h3>
              <a href="mailto:viruzverse@proton.me" 
                 style={styles.contactItem} 
                 className="footer-hover">
                Email: viruzverse@proton.me
              </a>
              <a href="tel:+919659008000" 
                 style={styles.contactItem} 
                 className="footer-hover">
                Ph: +91 96590 08000
              </a>
              <span style={styles.contactItem}>
                <span role="img" aria-label="UAE Flag" style={styles.flagIcon}>🇦🇪</span> 
                Headquarters: Dubai Internet City, Building 1, Sheikh Zayed Road, Dubai, UAE
                <br />
                <span role="img" aria-label="India Flag" style={styles.flagIcon}>🇮🇳</span> 
                 Branch: SECE Campus, Coimbatore,TamilNadu
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VIRUZVERSE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;