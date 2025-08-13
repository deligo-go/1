import React from 'react';
import { Link } from 'wouter';
import { Youtube, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <h2>VIRUZVERSE</h2>
              <div className="brand-tagline">Innovate • Create • Elevate</div>
            </div>
            <p className="brand-description">
              Pioneering the future of digital interaction with cutting-edge solutions in VR, AI, and innovative software development.
            </p>
            <div className="social-icons">
              <a href="https://www.youtube.com/@ViruzverseTech" 
                 className="social-icon youtube" 
                 aria-label="YouTube"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com/viruzverse.tech?igsh=dXNhZGt6djh1OGlx" 
                 className="social-icon instagram" 
                 aria-label="Instagram"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/viruzverse-solutions/posts/?feedView=all" 
                 className="social-icon linkedin" 
                 aria-label="LinkedIn"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="mailto:viruzverse@proton.me" 
                 className="social-icon email" 
                 aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/solutions">VR & 3D Services</Link></li>
              <li><Link href="/solutions">Mobile Apps</Link></li>
              <li><Link href="/solutions">Business Tools</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link href="/mission">About Us</Link></li>
              <li><Link href="/journey">Our Journey</Link></li>
              <li><Link href="/teams">Our Team</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            
            <div className="contact-list">
              <div className="contact-item">
                <Mail size={14} />
                <a href="mailto:contact@viruzverse.tech">contact@viruzverse.tech</a>
              </div>
              
              <div className="contact-item">
                <Phone size={14} />
                <a href="tel:+919659008000">+91 96590 08000</a>
              </div>
              
              <div className="contact-item location-item">
                <MapPin size={14} />
                <div className="location-details">
                  <div className="location-entry">
                    <div className="location-header">
                      <span className="flag">🇦🇪</span>
                      <span className="location-label">Headquarters:</span>
                    </div>
                    <span>Dubai Internet City, Building 1, Sheikh Zayed Road, Dubai, UAE</span>
                  </div>
                  <div className="location-entry">
                    <div className="location-header">
                      <span className="flag">🇮🇳</span>
                      <span className="location-label">Branch:</span>
                    </div>
                    <span>SECE Campus, Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright in main footer */}
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} VIRUZVERSE. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;