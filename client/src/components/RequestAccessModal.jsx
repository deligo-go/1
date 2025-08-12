import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiPost } from '../lib/api';
import { useToast } from '../hooks/use-toast';

export default function RequestAccessModal({ isOpen, onClose, productId, productTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const { toast } = useToast();

  const submitRequest = useMutation({
    mutationFn: (data) => apiPost('/api/contact', { ...data, productId }),
    onSuccess: () => {
      toast({
        title: "Request Submitted",
        description: "We'll contact you soon about accessing this product.",
      });
      onClose();
      setFormData({ name: '', email: '', company: '', message: '' });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    submitRequest.mutate(formData);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const styles = {
    overlay: {
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
      backdropFilter: 'blur(4px)',
    },
    content: {
      background: 'var(--color-bg-primary)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      maxWidth: '600px',
      width: '90%',
      maxHeight: '90vh',
      overflow: 'auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--spacing-lg)',
      paddingBottom: 'var(--spacing-md)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    title: {
      fontSize: '24px',
      fontWeight: 600,
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '4px',
      lineHeight: 1,
      transition: 'var(--transition-fast)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-lg)',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
    label: {
      fontWeight: 500,
      color: 'var(--color-text-primary)',
    },
    required: {
      color: 'var(--color-accent-1)',
    },
    input: {
      background: 'var(--color-surface)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      color: 'white',
      fontSize: '16px',
      transition: 'var(--transition-fast)',
    },
    textarea: {
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: 'inherit',
    },
    submitButton: {
      marginTop: 'var(--spacing-md)',
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      style={styles.overlay}
      className="modal-overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div style={styles.content} className="modal-content">
        <div style={styles.header}>
          <h2 style={styles.title} className="text-gradient">
            Request Enterprise Access
          </h2>
          <button 
            style={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
            onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-3)'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            ×
          </button>
        </div>
        
        {productTitle && (
          <p style={{ marginBottom: 'var(--spacing-lg)', opacity: 0.8 }}>
            Request access to <strong>{productTitle}</strong>
          </p>
        )}
        
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Full Name <span style={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              name="name"
              style={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
              onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Email Address <span style={styles.required}>*</span>
            </label>
            <input 
              type="email" 
              name="email"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
              onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Company Name</label>
            <input 
              type="text" 
              name="company"
              style={styles.input}
              value={formData.company}
              onChange={handleChange}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Message <span style={styles.required}>*</span>
            </label>
            <textarea 
              name="message"
              style={{...styles.input, ...styles.textarea}}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements and use case..."
              required
              onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary"
            style={styles.submitButton}
            disabled={submitRequest.isPending}
          >
            {submitRequest.isPending ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
