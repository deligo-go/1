import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '../hooks/useAuth';

export default function Signup() {
  const [, setLocation] = useLocation();
  const { register, isRegistering } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors = {};
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });
      // Redirect to home page on success
      setLocation('/');
    } catch (error) {
      // Error handling is done in useAuth hook
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-lg)',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
    },
    signupCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-3xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      width: '100%',
      maxWidth: '480px',
      backdropFilter: 'blur(10px)',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-2xl)',
    },
    title: {
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-sm)',
    },
    subtitle: {
      opacity: 0.8,
      marginBottom: 'var(--spacing-lg)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-lg)',
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-md)',
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
      background: 'var(--color-bg-primary)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      color: 'white',
      fontSize: '16px',
      transition: 'var(--transition-fast)',
    },
    select: {
      background: 'var(--color-bg-primary)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
    },
    inputError: {
      borderColor: '#ef4444',
      boxShadow: '0 0 0 3px rgba(239,68,68,0.2)',
    },
    errorMessage: {
      color: '#ef4444',
      fontSize: '14px',
      marginTop: 'var(--spacing-xs)',
    },
    checkboxGroup: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--spacing-sm)',
    },
    checkbox: {
      width: '16px',
      height: '16px',
      accentColor: 'var(--color-accent-2)',
      marginTop: '2px',
      flexShrink: 0,
    },
    checkboxLabel: {
      fontSize: '14px',
      cursor: 'pointer',
      lineHeight: 1.4,
    },
    termsLink: {
      color: 'var(--color-accent-3)',
      textDecoration: 'none',
    },
    submitButton: {
      marginTop: 'var(--spacing-md)',
    },
    links: {
      textAlign: 'center',
      marginTop: 'var(--spacing-lg)',
      paddingTop: 'var(--spacing-lg)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    },
    link: {
      color: 'var(--color-accent-3)',
      textDecoration: 'none',
      transition: 'var(--transition-fast)',
    },
    passwordStrength: {
      fontSize: '12px',
      marginTop: 'var(--spacing-xs)',
      opacity: 0.7,
    }
  };

  const mobileStyles = `
    @media (max-width: 480px) {
      .signup-card {
        padding: var(--spacing-xl);
        margin: var(--spacing-md);
      }
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `;

  const getPasswordStrength = (password) => {
    if (!password) return '';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };

  const getPasswordStrengthColor = (strength) => {
    switch (strength) {
      case 'Weak': return '#ef4444';
      case 'Medium': return '#f59e0b';
      case 'Strong': return '#10b981';
      default: return 'inherit';
    }
  };

  return (
    <>
      <style>{mobileStyles}</style>
      
      <div style={styles.pageContainer}>
        <div style={styles.signupCard} className="signup-card">
          <div style={styles.header}>
            <h1 style={styles.title} className="text-gradient">
              Join VIRUZVERSE
            </h1>
            <p style={styles.subtitle}>
              Create your account and start exploring the future
            </p>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formRow} className="form-row">
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="username">
                  Username <span style={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  style={{
                    ...styles.input,
                    ...(errors.username ? styles.inputError : {})
                  }}
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
                  onBlur={(e) => e.target.style.borderColor = errors.username ? '#ef4444' : 'rgba(255,255,255,0.2)'}
                  disabled={isRegistering}
                />
                {errors.username && (
                  <span style={styles.errorMessage}>{errors.username}</span>
                )}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="role">
                  Account Type
                </label>
                <select
                  id="role"
                  name="role"
                  style={styles.select}
                  value={formData.role}
                  onChange={handleChange}
                  disabled={isRegistering}
                >
                  <option value="user">Individual</option>
                  <option value="admin">Business</option>
                </select>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">
                Email Address <span style={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  ...styles.input,
                  ...(errors.email ? styles.inputError : {})
                }}
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
                onBlur={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.2)'}
                disabled={isRegistering}
              />
              {errors.email && (
                <span style={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">
                Password <span style={styles.required}>*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                style={{
                  ...styles.input,
                  ...(errors.password ? styles.inputError : {})
                }}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
                onBlur={(e) => e.target.style.borderColor = errors.password ? '#ef4444' : 'rgba(255,255,255,0.2)'}
                disabled={isRegistering}
              />
              {formData.password && (
                <div style={{
                  ...styles.passwordStrength,
                  color: getPasswordStrengthColor(getPasswordStrength(formData.password))
                }}>
                  Password strength: {getPasswordStrength(formData.password)}
                </div>
              )}
              {errors.password && (
                <span style={styles.errorMessage}>{errors.password}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="confirmPassword">
                Confirm Password <span style={styles.required}>*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                style={{
                  ...styles.input,
                  ...(errors.confirmPassword ? styles.inputError : {})
                }}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
                onBlur={(e) => e.target.style.borderColor = errors.confirmPassword ? '#ef4444' : 'rgba(255,255,255,0.2)'}
                disabled={isRegistering}
              />
              {errors.confirmPassword && (
                <span style={styles.errorMessage}>{errors.confirmPassword}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <div style={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  style={styles.checkbox}
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  disabled={isRegistering}
                />
                <label htmlFor="agreeToTerms" style={styles.checkboxLabel}>
                  I agree to the{' '}
                  <a href="#" style={styles.termsLink}>Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" style={styles.termsLink}>Privacy Policy</a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <span style={styles.errorMessage}>{errors.agreeToTerms}</span>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={styles.submitButton}
              disabled={isRegistering}
            >
              {isRegistering ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div style={styles.links}>
            <p>
              Already have an account?{' '}
              <Link 
                href="/login" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-1)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-accent-3)'}
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
