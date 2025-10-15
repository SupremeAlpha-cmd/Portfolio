import React from 'react';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(to right, var(--border-color) 1px, transparent 1px), linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)',
          backgroundSize: '47.6px 47.6px',
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzYwNTQ0ODQzfDA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 48px',
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Label */}
        <div className="label" style={{ marginBottom: '24px', opacity: 0.7 }}>
          FLUTTER DEVELOPER
        </div>

        {/* Name */}
        <h1
          className="hero-title"
          style={{
            marginBottom: '32px',
            maxWidth: '100%'
          }}
        >
          {personal.name.split(' ')[0]}<br />
          {personal.name.split(' ').slice(1).join(' ')}
        </h1>

        {/* Tagline */}
        <p
          className="text-big"
          style={{
            maxWidth: '800px',
            marginBottom: '48px',
            color: 'var(--text-secondary)'
          }}
        >
          {personal.tagline}
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToProjects}
          style={{
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
          VIEW PROJECTS
          <ChevronDown size={20} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero {
            padding: 120px 24px 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
