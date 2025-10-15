import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--text-primary)',
        color: 'var(--bg-white)',
        padding: 'calc(var(--grid-unit) * 2) 0',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 48px'
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Brand */}
          <div>
            <div className="header-logo" style={{ color: 'var(--bg-white)', marginBottom: '24px' }}>
              OIC
            </div>
            <p className="text-body" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '24px' }}>
              {personal.tagline}
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-white)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = 'var(--bg-white)';
                }}
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-white)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = 'var(--bg-white)';
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-white)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = 'var(--bg-white)';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="label-small" style={{ color: 'var(--bg-white)', marginBottom: '24px' }}>
              QUICK LINKS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="#about"
                className="text-body"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-body"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-body"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-body"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="label-small" style={{ color: 'var(--bg-white)', marginBottom: '24px' }}>
              GET IN TOUCH
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="text-body"
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '12px',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              {personal.email}
            </a>
            <p className="text-body" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {personal.location}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <p className="label-small" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © {currentYear} {personal.name.split(' ')[0]} {personal.name.split(' ')[personal.name.split(' ').length - 1]}. ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={scrollToTop}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 0,
              padding: '12px',
              color: 'var(--bg-white)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--accent-primary)';
              e.target.style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.color = 'var(--bg-white)';
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: calc(var(--grid-unit) * 1.5) 24px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
