import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/SupremeAlpha-cmd', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/oreoluwa-chiazor-663b16395/', label: 'LinkedIn' },
    { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FiInstagram, url: 'https://www.instagram.com/oreoluwaifedinma?igsh=MWhtcTI2eXZzaGdxMg==', label: 'Instagram' },
    { icon: FiFacebook, url: 'https://www.facebook.com/profile.php?id=61575762574824', label: 'Facebook' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-white dark:bg-primary-950 border-t border-slate-100 dark:border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black tracking-tighter mb-4 group cursor-pointer" onClick={scrollToTop}>
              <span className="text-slate-900 dark:text-white">Javin-Ozel</span>
              <span className="text-slate-400">.</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xs">
              Building next-generation digital experiences with precision and passion.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card rounded-2xl text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
            >
              Back to top
              <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Oreoluwa Ifedinma Chiazor. All Rights Reserved.
          </p>
          <p className="text-slate-400 text-[10px] font-medium italic">
            "I can do all things through Christ who strengthens me."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
