import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import skholarImg from '../assets/projects/skholar.png';
import tpsImg from '../assets/projects/tps.png';
import syntaxImg from '../assets/projects/syntax.png';

const Projects = () => {
  const projects = [
    {
      title: 'Skholar',
      category: 'Education Platform',
      image: skholarImg,
      problem: 'The platform struggled to reach students searching for educational resources online.',
      whatIDid: 'Improved the site structure, built the core infrastructure, and optimized it for search engines.',
      result: 'Increased visibility significantly — students can now find the platform easily on Google.',
      tags: ['Web', 'SEO', 'Infrastructure'],
      website: 'https://skholar.site'
    },
    {
      title: 'Syntax',
      category: 'EdTech / Learning App',
      image: syntaxImg,
      problem: 'Students were learning theory but couldn\'t apply it to real jobs when they finished.',
      whatIDid: 'Built a gamified learning platform that makes coding feel practical and career-focused.',
      result: 'A platform that bridges the gap between classroom learning and what employers actually need.',
      tags: ['Web App', 'UI/UX', 'Next.js'],
      website: 'https://learnsyntax.app'
    },
    {
      title: 'The Problem Solvers',
      category: 'Product Studio',
      image: tpsImg,
      problem: 'Founders had ideas but no clear path from concept to a working product.',
      whatIDid: 'Created a product studio framework to guide ideas from the first conversation all the way to launch.',
      result: '3+ digital products launched and actively running.',
      tags: ['Strategy', 'Systems', 'Launch'],
      website: 'https://theproblemsolvers.site'
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="editorial-title mb-4">
              Real <span className="gradient-text italic">Work.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              Not just what I built — but the problem it solved and the difference it made.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-[3rem] overflow-hidden group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-700 h-full flex flex-col">
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-sm">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="w-20 h-20 rounded-full bg-white text-slate-900 flex items-center justify-center text-2xl hover:scale-110 transition-transform"
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3">{project.category}</p>
                  <h3 className="text-3xl font-black mb-6 tracking-tighter">{project.title}</h3>

                  {/* Problem / What I Did / Result */}
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">The Problem</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">What I Did</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{project.whatIDid}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">The Result</p>
                      <p className="text-sm text-slate-800 dark:text-slate-200 font-bold leading-relaxed">{project.result}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
