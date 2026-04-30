import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Infrastructure & Mobile Lead',
      company: 'Skholar',
      period: '2024 - Present',
      description: 'Architecting the technical ecosystem and infrastructure. Scaled the platform to achieve #1 Google rankings and built a stable, high-performance foundation for thousands of students.',
      impact: 'Infrastructure & Scale'
    },
    {
      title: 'Fullstack Web Developer',
      company: 'Syntax',
      period: 'Late 2024 - Present',
      description: 'Developing a gamified learning platform focused on real-world career readiness. Crafting immersive user experiences and learning modules that bridge the gap between classroom and career.',
      impact: 'Product Engineering'
    },
  ];

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="editorial-title">
            History of <span className="gradient-text italic">Impact.</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl">
            A journey through building products, scaling startups, and delivering technical solutions that drive business success.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-12 border-t border-slate-200 dark:border-slate-800"
            >
              <div className="lg:col-span-3">
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">{exp.period}</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">{exp.company}</p>
              </div>

              <div className="lg:col-span-6">
                <h3 className="text-3xl font-black tracking-tighter mb-4 text-slate-800 dark:text-slate-200">
                  {exp.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>

              <div className="lg:col-span-3 lg:text-right">
                <span className="inline-block px-6 py-2 bg-slate-100 dark:bg-slate-900/50 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                  {exp.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
