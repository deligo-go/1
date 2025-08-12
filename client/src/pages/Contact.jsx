import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import '../styles/Contact.css';

const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="info-item">
    <a href={href} aria-label={label}>
      <div className="info-icon">{icon}</div>
      <div className="info-text">
        <span className="label">{label}</span>
        <span className="value">{value}</span>
      </div>
    </a>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  useEffect(() => {
    const particleContainer = document.querySelector('.particle-container');
    const particleCount = 50; // Optimized particle count

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 3 + 1; // 1px to 4px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const animationDuration = Math.random() * 15 + 10; // 10s to 25s
      const animationDelay = Math.random() * 25;
      particle.style.animation = `float ${animationDuration}s ${animationDelay}s linear infinite`;
      
      particleContainer.appendChild(particle);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      // Simulate success
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset form status after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="particle-container"></div>
      <div className="contact-container">
        <div className="contact-info-card">
          <h2>Contact Information</h2>
          <p className="subtitle">Have a question or want to work together? Reach out to us.</p>
          <ContactInfoItem 
            icon={<Mail size={20} />} 
            label="Email Us" 
            value="contact@viruzverse.com" 
            href="mailto:contact@viruzverse.com"
          />
          <ContactInfoItem 
            icon={<Phone size={20} />} 
            label="Call Us" 
            value="+1 (234) 567-890" 
            href="tel:+1234567890"
          />
          <ContactInfoItem 
            icon={<MapPin size={20} />} 
            label="Our Location" 
            value="123 Innovation Drive, Tech City"
          />
          <ContactInfoItem 
            icon={<Clock size={20} />} 
            label="Business Hours" 
            value="Mon - Fri: 9AM - 6PM"
          />
        </div>

        <div className="contact-form-card">
          <h2>Send a Message</h2>
          {status === 'success' ? (
            <div className="status-message status-success">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g., John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
