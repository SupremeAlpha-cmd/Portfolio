import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiExternalLink, FiPrinter } from 'react-icons/fi';

const Resume = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-primary-950 transition-colors duration-500 py-20 px-6 md:py-32">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto mb-12 flex justify-between items-center no-print">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <button 
          onClick={handlePrint}
          className="btn-primary py-3 px-6 text-xs flex items-center gap-2"
        >
          <FiPrinter />
          Print / Save PDF
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 dark:bg-slate-900 rounded-full blur-3xl opacity-50 -z-10" />

        {/* Header */}
        <header className="border-b border-slate-100 dark:border-slate-800/50 pb-12 mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
            Oreoluwa Ifedinma <span className="gradient-text">Chiazor.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest">
            Mobile & Web Developer | Javin-Ozel
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            <div className="space-y-3">
              <a href="mailto:robosapienc@gmail.com" className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors">
                <FiMail className="text-slate-400" /> robosapienc@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <FiPhone className="text-slate-400" /> +234 802 258 6582 / +234 913 777 4930
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-slate-400" /> Benin City, Edo State, Nigeria
              </div>
            </div>
            <div className="space-y-3 md:text-right md:flex md:flex-col md:items-end">
              <a href="https://www.linkedin.com/in/oreoluwa-chiazor-663b16395/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors">
                LinkedIn <FiLinkedin className="text-slate-400" />
              </a>
              <a href="https://github.com/SupremeAlpha-cmd" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors">
                GitHub <FiGithub className="text-slate-400" />
              </a>
              <a href="https://javin.site" className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors font-black uppercase text-[10px] tracking-widest">
                javin-ozel.site <FiExternalLink className="text-slate-400" />
              </a>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Professional Summary</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Results-driven Mobile and Web Developer with 2+ years of experience building high-performance digital products from the ground up. 
            Specializing in Startup Architecture, turning business visions into market-ready applications. Proven track record of optimizing platforms 
            for discovery—achieving #1 Google Search rankings—and designing gamified educational experiences that drive user engagement.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Work Experience</h2>
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Lead Developer & Co-founder</h3>
                  <p className="text-lg font-bold text-slate-400 italic">Skholar</p>
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-slate-500">2024 – Present</span>
              </div>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                  <span>Architected the core mobile and web infrastructure for a growing educational ecosystem.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                  <span className="text-slate-900 dark:text-white font-bold">Key Achievement: Spearheaded a technical SEO campaign that resulted in the platform ranking #1 on Google for primary industry keywords.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                  <span>Managed end-to-end product lifecycle, ensuring seamless synchronization between mobile (Flutter) and web platforms.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Fullstack Web Developer</h3>
                  <p className="text-lg font-bold text-slate-400 italic">Syntax (learnsyntax.app)</p>
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-slate-500">2024 – Present</span>
              </div>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                  <span>Developed a specialized gamified learning platform focused on bridging the gap between theory and career-ready programming skills.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                  <span>Leveraged Next.js and modern web strategies to create a high-performance, interactive environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Skills */}
        <div className="grid md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Education</h2>
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">B.Sc. (Ed) in Computer Science</h3>
              <p className="text-sm font-bold text-slate-400 mb-2 italic">University of Benin (UNIBEN)</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">200 Level | Education Education</p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Service Focus</h2>
            <div className="flex flex-wrap gap-2">
              {["Mobile Dev", "Web Dev", "SEO", "Cloud", "UI/UX", "Strategy", "Agile"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-900 dark:text-white">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Favorite Quote */}
        <footer className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800/50 text-center">
            <p className="text-slate-400 text-sm italic">
                "I believe that great software isn't just about the technology—it's about the people who use it every day."
            </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Resume;
