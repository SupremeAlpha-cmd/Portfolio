import React from 'react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { name: 'framework', label: 'FRAMEWORKS' },
    { name: 'language', label: 'LANGUAGES' },
    { name: 'backend', label: 'BACKEND' },
    { name: 'integration', label: 'INTEGRATION' },
    { name: 'tools', label: 'TOOLS' },
    { name: 'architecture', label: 'ARCHITECTURE' }
  ];

  return (
    <section
      id="skills"
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
          TECHNICAL SKILLS
        </div>

        <h2 className="title-big" style={{ marginBottom: '64px' }}>
          WHAT I WORK WITH
        </h2>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}
        >
          {categories.map((category) => {
            const categorySkills = skills.filter(s => s.category === category.name);
            if (categorySkills.length === 0) return null;

            return (
              <div
                key={category.name}
                style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: 0,
                  padding: '32px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(35, 35, 35, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="label-small" style={{ marginBottom: '24px', opacity: 0.7 }}>
                  {category.label}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '8px'
                        }}
                      >
                        <span className="text-body">{skill.name}</span>
                        <span className="label-small" style={{ opacity: 0.5 }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: '2px',
                          backgroundColor: 'var(--border-light)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: `${skill.level}%`,
                            backgroundColor: 'var(--accent-primary)',
                            transition: 'width 1s ease'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills {
            padding: calc(var(--grid-unit) * 2) 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
