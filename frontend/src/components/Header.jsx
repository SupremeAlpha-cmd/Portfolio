import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'var(--color-background)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div
        style={{
          maxWidth: '1920px',
          margin: '0 auto',
          padding: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Logo */}
        <div className="header-logo" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
          OIC
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }}
          className="desktop-nav"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="label-small"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 12px',
              transition: 'opacity 0.15s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="label-small"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 12px',
              transition: 'opacity 0.15s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="label-small"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 12px',
              transition: 'opacity 0.15s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              background: 'var(--accent-primary)',
              border: 'none',
              borderRadius: 0,
              padding: '12px 24px',
              fontFamily: "'PPSupplyMono-Regular', ui-monospace, monospace",
              fontSize: '12px',
              fontWeight: 400,
              color: 'var(--accent-foreground)',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minHeight: '44px',
              letterSpacing: '0.05em'
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
            CONTACT
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'transparent',
            border: '1px solid var(--border-color)',
            borderRadius: 0,
            padding: '8px',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="mobile-nav"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px',
            borderTop: '1px solid var(--border-light)',
            backgroundColor: 'var(--color-background)'
          }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="label-small"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left'
            }}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="label-small"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left'
            }}
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="label-small"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left'
            }}
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              background: 'var(--accent-primary)',
              border: 'none',
              borderRadius: 0,
              padding: '12px 24px',
              fontFamily: "'PPSupplyMono-Regular', ui-monospace, monospace",
              fontSize: '12px',
              fontWeight: 400,
              color: 'var(--accent-foreground)',
              textTransform: 'uppercase',
              cursor: 'pointer',
              letterSpacing: '0.05em'
            }}
          >
            CONTACT
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
