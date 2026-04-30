import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiSearch, FiLayers, FiCode } from 'react-icons/fi';
import skholarImg from '../assets/projects/skholar.png';
import tpsImg from '../assets/projects/tps.png';
import syntaxImg from '../assets/projects/syntax.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    {
      title: 'Skholar',
      category: 'Education / SEO',
      description: 'A comprehensive educational ecosystem ranked #1 on Google for key search terms through advanced technical SEO and infrastructure optimization.',
      image: skholarImg,
      impact: '#1 Google Ranking',
      tags: ['Strategy', 'Fullstack', 'Growth'],
      website: 'https://skholar.site'
    },
    {
      title: 'Syntax',
      category: 'EdTech / Gamification',
      description: 'A gamified learning platform bridging the gap between classroom theory and real-world career readiness in tech.',
      image: syntaxImg,
      impact: 'Career-Ready Focus',
      tags: ['Next.js', 'UI/UX', 'Product'],
      website: 'https://learnsyntax.app'
    },
    {
      title: 'The Problem Solvers',
      category: 'Business / Infrastructure',
      description: 'A central product studio dedicated to building social-impact products and technical infrastructure for growing businesses.',
      image: tpsImg,
      impact: '3+ Products Launched',
      tags: ['Systems', 'Architecture', 'Scale'],
      website: 'https://theproblemsolvers.site'
    },
  ];

  const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.tags.includes(activeTab));

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="editorial-title mb-4">
              Case <span className="gradient-text italic">Studies.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              A curated selection of digital products where strategy meets engineering to deliver measurable business impact.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {['All', 'Strategy', 'Product', 'Systems'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' 
                    : 'glass-card text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="glass-card rounded-[3rem] overflow-hidden group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-700">
                  {/* Image Holder */}
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
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest">
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">{project.category}</p>
                    <h3 className="text-3xl font-black mb-6 tracking-tighter">{project.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
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
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
