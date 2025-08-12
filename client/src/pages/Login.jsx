import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [, setLocation] = useLocation();
  const { login, isLoggingIn } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await login({
        email: formData.email,
        password: formData.password
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
    loginCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-3xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      width: '100%',
      maxWidth: '440px',
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
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
    label: {
      fontWeight: 500,
      color: 'var(--color-text-primary)',
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
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
    },
    checkbox: {
      width: '16px',
      height: '16px',
      accentColor: 'var(--color-accent-2)',
    },
    checkboxLabel: {
      fontSize: '14px',
      cursor: 'pointer',
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
    forgotPassword: {
      textAlign: 'right',
      marginTop: 'var(--spacing-sm)',
    },
    forgotPasswordLink: {
      fontSize: '14px',
      color: 'var(--color-accent-3)',
      textDecoration: 'none',
      transition: 'var(--transition-fast)',
    }
  };

  const mobileStyles = `
    @media (max-width: 480px) {
      .login-card {
        padding: var(--spacing-xl);
        margin: var(--spacing-md);
      }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      
      <div style={styles.pageContainer}>
        <div style={styles.loginCard} className="login-card">
          <div style={styles.header}>
            <h1 style={styles.title} className="text-gradient">
              Welcome Back
            </h1>
            <p style={styles.subtitle}>
              Sign in to your VIRUZVERSE account
            </p>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">
                Email Address
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
                placeholder="Enter your email"
                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
                onBlur={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.2)'}
                disabled={isLoggingIn}
              />
              {errors.email && (
                <span style={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">
                Password
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
                placeholder="Enter your password"
                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
                onBlur={(e) => e.target.style.borderColor = errors.password ? '#ef4444' : 'rgba(255,255,255,0.2)'}
                disabled={isLoggingIn}
              />
              {errors.password && (
                <span style={styles.errorMessage}>{errors.password}</span>
              )}
              
              <div style={styles.forgotPassword}>
                <a href="#" style={styles.forgotPasswordLink}>
                  Forgot password?
                </a>
              </div>
            </div>

            <div style={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                style={styles.checkbox}
                checked={formData.rememberMe}
                onChange={handleChange}
                disabled={isLoggingIn}
              />
              <label htmlFor="rememberMe" style={styles.checkboxLabel}>
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={styles.submitButton}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div style={styles.links}>
            <p>
              Don't have an account?{' '}
              <Link 
                href="/signup" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-1)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-accent-3)'}
              >
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
