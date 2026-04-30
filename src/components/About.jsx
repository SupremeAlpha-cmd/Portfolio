import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiLayout } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-slate-200/30 dark:bg-slate-800/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            About <span className="gradient-text">Me.</span>
          </h2>
          <div className="w-24 h-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Side - Visual Role card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-[2.5rem] p-4 lg:p-8 shadow-2xl relative group overflow-hidden">
              {/* Decorative background pulse */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200 dark:bg-slate-800 rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 shadow-xl">
                    <FiLayout className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">Startup Architect</h4>
                    <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">From Vision to Reality</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Product Definition", desc: "Helping you define the core features that people actually need.", color: "bg-blue-500" },
                    { label: "Rapid Prototyping", desc: "Turning your napkin sketches into working digital models.", color: "bg-purple-500" },
                    { label: "Market-Ready Apps", desc: "Building scalable apps ready for thousands of users.", color: "bg-emerald-500" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-1">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{item.label}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 mt-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                        <div 
                          className="w-full h-full opacity-50 bg-cover bg-center" 
                          style={{ backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=${i}')` }}
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trusted by Startups</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 space-y-8"
          >
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              Bridging the Gap Between <span className="text-slate-400 underline decoration-slate-200 dark:decoration-slate-800">Business Strategy</span> and <span className="italic">Technical Execution.</span>
            </h3>
            
            <div className="space-y-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              <p>
                I'm a Mobile and Web Developer with over 2 years of experience bringing digital products to life. 
                I don't just write code; I partner with startups to build solutions that actually solve problems and delight users.
              </p>
              <p>
                Currently, I'm the technology lead at two growing startups, where I focus on creating high-performance apps that are as beautiful as they are functional.
              </p>
              <p className="p-6 glass-card rounded-[2rem] italic border-l-4 border-slate-900 dark:border-white text-base">
                "I believe that great software isn't just about the technology—it's about the people who use it every day."
              </p>
            </div>

            {/* Stats Block */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
              {[
                { val: "2+", label: "Years in Field" },
                { val: "5+", label: "Live Products" },
                { val: "2", label: "Startup Roles" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.val}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
