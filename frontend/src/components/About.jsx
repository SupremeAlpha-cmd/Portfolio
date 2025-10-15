import React from 'react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      style={{
        padding: 'calc(var(--grid-unit) * 4) 0',
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
        {/* Section Label */}
        <div className="label" style={{ marginBottom: '48px', opacity: 0.7 }}>
          ABOUT ME
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}
        >
          {/* Main About Text */}
          <div>
            <h2 className="title-big" style={{ marginBottom: '32px' }}>
              JUNIOR<br />DEVELOPER
            </h2>
            <p className="text-body" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
              {personal.about}
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Currently based in {personal.location}, I specialize in creating cross-platform mobile applications
              with a focus on performance and user experience. Always eager to learn new technologies and best practices.
            </p>
          </div>

          {/* Stats Card */}
          <div
            style={{
              background: 'var(--bg-white)',
              border: '1px solid var(--border-light)',
              borderRadius: 0,
              padding: '48px'
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <div className="label-small" style={{ marginBottom: '8px', opacity: 0.7 }}>
                EXPERIENCE
              </div>
              <div className="text-regular">1+ Year</div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div className="label-small" style={{ marginBottom: '8px', opacity: 0.7 }}>
                PROJECTS COMPLETED
              </div>
              <div className="text-regular">10+</div>
            </div>

            <div>
              <div className="label-small" style={{ marginBottom: '8px', opacity: 0.7 }}>
                FOCUS AREA
              </div>
              <div className="text-regular">Mobile Development</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about {
            padding: calc(var(--grid-unit) * 2) 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
