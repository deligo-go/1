import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const styles = {
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'var(--color-text-secondary)',
    },
    input: {
      width: '100%',
      padding: '0.875rem 1rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      border: '1px solid var(--color-border)',
      borderRadius: '0.75rem',
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-text)',
      transition: 'all 0.2s ease',
      '&:focus': {
        outline: 'none',
        borderColor: 'var(--color-primary)',
        boxShadow: '0 0 0 3px var(--color-primary-20)',
      },
      '&::placeholder': {
        color: 'var(--color-text-tertiary)',
        opacity: 0.7,
      },
    },
    textarea: {
      minHeight: '150px',
      resize: 'vertical',
      fontFamily: 'inherit',
      lineHeight: '1.6',
    },
    submitButton: {
      width: '100%',
      padding: '1rem 1.5rem',
      fontSize: '1rem',
      fontWeight: 600,
      color: 'white',
      background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
      border: 'none',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
      },
      '&:active': {
        transform: 'translateY(0)',
      },
      '&:disabled': {
        opacity: 0.7,
        cursor: 'not-allowed',
        transform: 'none',
        boxShadow: 'none',
      },
    },
    successMessage: {
      textAlign: 'center',
      padding: '2rem',
      borderRadius: '0.75rem',
      backgroundColor: 'var(--color-success-50)',
      border: '1px solid var(--color-success-100)',
    },
    successIcon: {
      color: 'var(--color-success-600)',
      marginBottom: '1rem',
    },
    successTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: 'var(--color-success-800)',
      marginBottom: '0.5rem',
    },
    successText: {
      color: 'var(--color-success-700)',
      lineHeight: '1.6',
    },
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--color-primary)';
    e.target.style.boxShadow = '0 0 0 3px var(--color-primary-20)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'var(--color-border)';
    e.target.style.boxShadow = 'none';
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Don't clear the form data so it can be shown in the success message
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div style={styles.successMessage}>
        <CheckCircle size={48} style={styles.successIcon} />
        <h3 style={styles.successTitle}>Message Sent Successfully!</h3>
        <p style={styles.successText}>
          Thank you, <strong>{formData.name}</strong>. We've received your message and will get back to you at <strong>{formData.email}</strong> shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '0.5rem' }}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Full Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="John Doe" 
          style={styles.input} 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email Address</label>
        <input 
          type="email" 
          id="email" 
          placeholder="john.doe@example.com" 
          style={styles.input} 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div style={styles.formGroup}>
        <label htmlFor="message" style={styles.label}>Your Message</label>
        <textarea 
          id="message" 
          placeholder="How can we help you?" 
          style={{...styles.input, ...styles.textarea}} 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        style={styles.submitButton}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
