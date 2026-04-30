import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiArrowRight, FiCheck } from 'react-icons/fi';
import { SiGoogleplay } from 'react-icons/si';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[60] cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-[70] flex items-center justify-center pointer-events-none"
          >
            <div className="w-full max-w-5xl max-h-full bg-white dark:bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col relative border border-slate-200 dark:border-slate-800">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-900 dark:text-white hover:rotate-90 transition-transform duration-300 z-50"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="flex-grow overflow-y-auto custom-scrollbar">
                <div className="grid lg:grid-cols-2 min-h-full">
                  
                  {/* Left Side - Visuals */}
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="rounded-[2rem] overflow-hidden shadow-2xl mb-12 aspect-video">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Tech Stack</p>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="px-4 py-2 glass-card rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {project.website && (
                          <a 
                            href={project.website} 
                            target="_blank" 
                            rel="noreferrer"
                            className="btn-primary flex-1 justify-center"
                          >
                            Live Site <FiExternalLink />
                          </a>
                        )}
                        {project.playStore && (
                          <a 
                            href={project.playStore} 
                            target="_blank" 
                            rel="noreferrer"
                            className="glass-card flex-1 justify-center py-4 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
                          >
                            Play Store <SiGoogleplay />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="p-8 md:p-12 lg:p-16 space-y-12">
                    <div>
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
                        {project.title}
                      </h2>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                        {project.role}
                      </p>
                    </div>

                    <div className="space-y-8">
                       {/* Challenge */}
                       <div className="space-y-4">
                        <h4 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="w-8 h-px bg-slate-900 dark:bg-white" />
                          The Challenge
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                          {project.caseStudy?.challenge || "Solving complex architectural hurdles to deliver a seamless user experience."}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="w-8 h-px bg-slate-900 dark:bg-white" />
                          The Solution
                        </h4>
                        <div className="space-y-3">
                          {project.caseStudy?.solution?.map((point, idx) => (
                            <div key={idx} className="flex gap-3 text-slate-500 dark:text-slate-400 font-medium">
                              <FiCheck className="text-slate-900 dark:text-white mt-1 shrink-0" />
                              <p>{point}</p>
                            </div>
                          )) || <p>Developing a robust and scalable infrastructure.</p>}
                        </div>
                      </div>

                      {/* Result */}
                      <div className="p-8 glass-card rounded-3xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Impact & Result</p>
                        <p className="text-xl md:text-2xl font-black tracking-tight italic">
                          "{project.caseStudy?.result || "High-performance solution delivered with 99.9% uptime."}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
