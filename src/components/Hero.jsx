import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import meImg from '../assets/ME.jpg';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-slate-200/30 dark:bg-slate-800/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-100/30 dark:bg-slate-900/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute inset-0 noise-bg opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main Headline Section */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-[2px] bg-slate-900 dark:bg-white"></span>
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                Mobile & Web Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="editorial-title"
            >
              <span className="block">Oreoluwa</span>
              <span className="block text-slate-400 dark:text-slate-600">Ifedinma</span>
              <span className="block gradient-text italic">Chiazor.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 max-w-3xl leading-tight font-medium mb-12"
            >
              Building human-centric digital products through <span className="text-slate-900 dark:text-white font-black">Javin-Ozel</span>. I craft bespoke mobile and web solutions that turn complex ideas into seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary group"
              >
                Let's Start a Project
                <FiArrowDownRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
              </button>
              <a
                href="https://wa.me/2348114426150"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-3 group"
              >
                <FaWhatsapp className="text-[#25D366] w-6 h-6 group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Visual/Image Section */}
          <div className="lg:col-span-4 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img
                src={meImg}
                alt="Oreoluwa Ifedinma Chiazor"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="glass-card rounded-[2rem] p-6 backdrop-blur-3xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Philosophy</p>
                  <p className="text-sm font-bold leading-tight italic">"I can do all things through Christ who strengthens me."</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-slate-900 dark:border-white rounded-br-[3rem] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
