import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-slate-200/20 dark:bg-slate-800/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Main Story Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="editorial-title mb-12">
                The <span className="gradient-text italic">Partnership.</span>
              </h2>
              <div className="space-y-8 text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-medium leading-tight tracking-tight">
                <p>
                  I partner with visionary founders and established businesses to build digital products that matter.
                  To me, code is simply the medium, the true goal is creating solutions that resonate with real people.
                </p>
                <p className="text-slate-900 dark:text-white font-black text-4xl md:text-5xl">
                  "I believe that great software isn't just about the technology—it's about the people who use it every day."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-200 dark:border-slate-800"
            >
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">The Mission</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  My mission is to simplify complex technology so you can focus on what you do best. Whether it's a mobile app for thousands or a specialized web tool, I ensure it's built with purpose and precision.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">The Foundation</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  Driven by a commitment to excellence and a faith-centered approach to every project. "I can do all things through Christ who strengthens me." — Philippians 4:13
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats / Sidebar Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-[3.5rem] p-12 sticky top-40"
            >
              <div className="space-y-12">
                {[
                  { label: "Years of Engineering", val: "2+" },
                  { val: "5+", label: "Successful Launches" },
                  { val: "2", label: "Core Startup Roles" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-8 last:border-0 last:pb-0">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</span>
                    <span className="text-6xl font-black tracking-tighter gradient-text">{stat.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest">Currently Building</p>
                <div className="flex flex-wrap gap-3">
                  {['Syntax', 'Skholar', 'TPS'].map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
