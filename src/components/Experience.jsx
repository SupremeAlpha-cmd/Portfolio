import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Lead Developer & Co-founder',
      company: 'Skholar',
      period: '2024 - Present',
      location: 'Remote',
      description: 'Leading the technical vision and infrastructure. Successfully optimized the platform to rank #1 on Google for key educational terms. Managed end-to-end mobile and web development including complex SEO and geographic data systems.',
      tech: ['SEO Optimization', 'Mobile Infrastructure', 'Web Performance'],
      current: true,
    },
    {
      title: 'Fullstack Web Developer',
      company: 'Syntax',
      period: 'Late 2024 - Present',
      location: 'Remote',
      description: 'Building a gamified learning platform that prepares students for the real world. Focused on creating an engaging user experience and high-performance learning modules to bridge the gap between education and career.',
      tech: ['Next.js', 'User Experience', 'Gamification'],
      current: true,
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-slate-200/20 dark:bg-slate-800/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Career <span className="gradient-text">Milestones.</span>
          </h2>
          <div className="w-24 h-1 bg-slate-200 dark:bg-slate-800 rounded-full hidden md:block"></div>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 rounded-full bg-slate-900 dark:bg-white border-4 border-white dark:border-primary-950 -translate-x-1/2 shadow-xl z-20 hidden md:block" />

              {/* Content Card */}
              <div className="w-full md:w-[45%]">
                <div className="glass-card rounded-[2.5rem] p-8 lg:p-10 group hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
                      <FiBriefcase className="w-6 h-6" />
                    </div>
                    {exp.current && (
                      <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-slate-500 transition-colors">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    {exp.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

