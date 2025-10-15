import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
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
          SELECTED WORK
        </div>

        <h2 className="title-big" style={{ marginBottom: '64px' }}>
          PROJECTS
        </h2>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '48px',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className="label-small"
              style={{
                background: filter === category ? 'var(--text-primary)' : 'transparent',
                color: filter === category ? 'var(--bg-white)' : 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: 0,
                padding: '12px 24px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                if (filter !== category) {
                  e.target.style.background = 'rgba(35, 35, 35, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== category) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 0,
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(35, 35, 35, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Project Image */}
              <div
                style={{
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'var(--color-background)'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                {project.featured && (
                  <div
                    className="label-small"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'var(--accent-primary)',
                      color: 'var(--accent-foreground)',
                      padding: '8px 16px'
                    }}
                  >
                    FEATURED
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div style={{ padding: '32px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '12px'
                  }}
                >
                  <div>
                    <div className="label-small" style={{ marginBottom: '8px', opacity: 0.7 }}>
                      {project.category}
                    </div>
                    <h3 className="text-regular">{project.title}</h3>
                  </div>
                  <div className="label-small" style={{ opacity: 0.5 }}>
                    {project.year}
                  </div>
                </div>

                <p className="text-body" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="label-small"
                      style={{
                        border: '1px solid var(--border-light)',
                        padding: '6px 12px',
                        opacity: 0.7
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-color)',
                      borderRadius: 0,
                      padding: '10px 20px',
                      fontFamily: "'PPSupplyMono-Regular', ui-monospace, monospace",
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.05em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      flex: 1
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(35, 35, 35, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                    }}
                  >
                    <ExternalLink size={14} />
                    VIEW
                  </button>
                  <button
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-color)',
                      borderRadius: 0,
                      padding: '10px 20px',
                      fontFamily: "'PPSupplyMono-Regular', ui-monospace, monospace",
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.05em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      flex: 1
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(35, 35, 35, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                    }}
                  >
                    <Github size={14} />
                    CODE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects {
            padding: calc(var(--grid-unit) * 2) 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
