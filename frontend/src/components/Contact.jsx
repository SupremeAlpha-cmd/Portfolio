import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setStatus('Message sent! (Demo only - not actually sent)');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'calc(var(--grid-unit) * 4) 0',
        backgroundColor: 'var(--bg-white)'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 48px'
        }}
      >
        {/* Section Label */}
        <div className="label" style={{ marginBottom: '48px', opacity: 0.7 }}>
          GET IN TOUCH
        </div>

        <h2 className="title-big" style={{ marginBottom: '64px' }}>
          LET'S WORK<br />TOGETHER
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px'
          }}
        >
          {/* Contact Info */}
          <div>
            <p className="text-body" style={{ marginBottom: '48px', color: 'var(--text-secondary)' }}>
              Have a project in mind or just want to chat about Flutter development? 
              Feel free to reach out through any of these channels.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'opacity 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div className="label-small" style={{ marginBottom: '4px', opacity: 0.7 }}>
                    EMAIL
                  </div>
                  <div className="text-body">{personal.email}</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'opacity 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Github size={20} />
                </div>
                <div>
                  <div className="label-small" style={{ marginBottom: '4px', opacity: 0.7 }}>
                    GITHUB
                  </div>
                  <div className="text-body">@SupremeAlpha</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'opacity 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="label-small" style={{ marginBottom: '4px', opacity: 0.7 }}>
                    LINKEDIN
                  </div>
                  <div className="text-body">Connect with me</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              border: '1px solid var(--border-light)',
              padding: '48px'
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  className="label-small"
                  style={{ display: 'block', marginBottom: '12px', opacity: 0.7 }}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: 0,
                    fontFamily: "'PPNeueMontrealTT-Book', ui-sans-serif, system-ui, sans-serif",
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    transition: 'border-color 0.15s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  className="label-small"
                  style={{ display: 'block', marginBottom: '12px', opacity: 0.7 }}
                >
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: 0,
                    fontFamily: "'PPNeueMontrealTT-Book', ui-sans-serif, system-ui, sans-serif",
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    transition: 'border-color 0.15s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  className="label-small"
                  style={{ display: 'block', marginBottom: '12px', opacity: 0.7 }}
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: 0,
                    fontFamily: "'PPNeueMontrealTT-Book', ui-sans-serif, system-ui, sans-serif",
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    resize: 'vertical',
                    transition: 'border-color 0.15s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'var(--accent-primary)',
                  border: 'none',
                  borderRadius: 0,
                  padding: '16px 32px',
                  fontFamily: "'PPSupplyMono-Regular', ui-monospace, monospace",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'var(--accent-foreground)',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  minHeight: '52px',
                  letterSpacing: '0.05em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--accent-hover)';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--accent-primary)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <Send size={16} />
                SEND MESSAGE
              </button>

              {/* Status Message */}
              {status && (
                <div
                  className="text-body"
                  style={{
                    marginTop: '16px',
                    padding: '12px',
                    backgroundColor: 'var(--accent-primary)',
                    color: 'var(--accent-foreground)',
                    textAlign: 'center'
                  }}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact {
            padding: calc(var(--grid-unit) * 2) 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
