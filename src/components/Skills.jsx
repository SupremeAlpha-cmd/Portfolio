import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiZap, FiArrowRight } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      id: "01",
      title: "Idea to Product",
      description: "Don't know where to start? This is where we begin. I help you plan, structure, and turn your idea into a real product — from the first conversation to launch. No tech background needed.",
      tags: ["Strategy", "MVP", "Planning"],
      icon: <FiZap />,
      featured: true,
      badge: "Start Here"
    },
    {
      id: "02",
      title: "Web Development",
      description: "Clean, fast websites and dashboards built to perform. Whether it's a landing page, a web app, or a full platform — I build it to look great and work even better.",
      tags: ["React", "Next.js", "SEO"],
      icon: <FiMonitor />,
    },
    {
      id: "03",
      title: "Mobile Apps",
      description: "Smooth, reliable apps for Android & iOS. I build apps that feel native, load fast, and keep users coming back.",
      tags: ["Flutter", "iOS", "Android"],
      icon: <FiSmartphone />,
    },
  ];

  return (
    <section id="skills" className="section-padding overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="editorial-title mb-6">
              What I <span className="gradient-text italic">Do.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-tight">
              Three ways I help you go from idea to a real product. Not sure which one you need?{' '}
              <span className="text-slate-900 dark:text-white font-black">Start at #01.</span>
            </p>
          </div>
        </div>

        <div className="space-y-0 border-t border-slate-200 dark:border-slate-800">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-500 ${
                service.featured
                  ? 'hover:bg-slate-900 dark:hover:bg-white'
                  : 'hover:bg-slate-50 dark:hover:bg-slate-900/40'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 md:px-8">
                <div className="lg:col-span-1">
                  <span className="text-sm font-black text-slate-300 dark:text-slate-700 group-hover:text-slate-400 dark:group-hover:text-slate-500 transition-colors">
                    {service.id}
                  </span>
                </div>

                <div className="lg:col-span-4 flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    service.featured
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 group-hover:bg-white dark:group-hover:bg-slate-900 group-hover:text-slate-900 dark:group-hover:text-white'
                      : 'bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900'
                  }`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={`text-3xl font-black tracking-tighter transition-all duration-500 ${
                      service.featured ? 'group-hover:text-white dark:group-hover:text-slate-900' : ''
                    } group-hover:translate-x-2`}>
                      {service.title}
                    </h3>
                    {service.featured && (
                      <span className="inline-flex items-center gap-1.5 mt-1 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/20">
                        ⭐ Start Here — Most Requested
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className={`font-medium leading-relaxed max-w-xl transition-colors duration-500 ${
                    service.featured
                      ? 'text-slate-600 dark:text-slate-400 group-hover:text-slate-300 dark:group-hover:text-slate-600'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {service.description}
                  </p>
                </div>

                <div className="lg:col-span-2 flex flex-wrap gap-2 justify-end">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-colors ${
                      service.featured
                        ? 'text-slate-400 border border-slate-700 group-hover:border-slate-500 dark:group-hover:border-slate-400'
                        : 'text-slate-400 border border-slate-200 dark:border-slate-800 group-hover:border-slate-400'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
