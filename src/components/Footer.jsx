import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiArrowUp } from 'react-icons/fi';
import { SiX } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/SupremeAlpha-cmd', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/oreoluwa-chiazor-663b16395/', label: 'LinkedIn' },
    { icon: SiX, url: 'https://x.com/OreoluwaChiazor', label: 'X' },
    { icon: FiInstagram, url: 'https://www.instagram.com/oreoluwaifedinma?igsh=MWhtcTI2eXZzaGdxMg==', label: 'Instagram' },
    { icon: FiFacebook, url: 'https://www.facebook.com/profile.php?id=61575762574824', label: 'Facebook' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-32 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-md">
            <div className="text-4xl font-black tracking-tighter mb-8 cursor-pointer group flex items-center gap-2" onClick={scrollToTop}>
              <span className="text-slate-900 dark:text-white">Javin-Ozel</span>
              <span className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full"></span>
            </div>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic mb-8">
              "I believe that great software isn't just about the technology it's about the people who use it every day."
            </p>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">
              © {new Date().getFullYear()} Oreoluwa Ifedinma Chiazor
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-10">
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-500 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group"
            >
              Back to top
              <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:-translate-y-2 transition-transform">
                <FiArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
            Built with Javin-Ozel Precision
          </div>
          <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 italic">
            Philippians 4:13
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
