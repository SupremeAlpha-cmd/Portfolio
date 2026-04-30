import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSmartphone, FiLayout, FiDatabase, FiTarget, FiArrowRight } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      id: "01",
      title: "Mobile App Development",
      description: "Crafting high-performance, native-quality experiences for iOS and Android using Flutter. I focus on fluid animations and responsive logic that users love.",
      tools: ["Flutter", "Dart", "Firebase"],
      icon: <FiSmartphone />
    },
    {
      id: "02",
      title: "Web Solutions",
      description: "Building modern, SEO-optimized web applications with React and Next.js. I specialize in fast-loading, accessible interfaces that convert visitors into users.",
      tools: ["React", "Tailwind CSS", "Next.js"],
      icon: <FiLayout />
    },
    {
      id: "03",
      title: "Infrastructure & Backend",
      description: "Architecting reliable server-side systems and cloud databases. Ensuring your product remains stable and secure as your user base scales.",
      tools: ["Node.js", "Supabase", "Cloud Auth"],
      icon: <FiDatabase />
    },
    {
      id: "04",
      title: "Product Strategy",
      description: "Translating business requirements into technical roadmaps. I help startups define their MVP and scale their technical footprint efficiently.",
      tools: ["Discovery", "Architecture", "Optimization"],
      icon: <FiTarget />
    }
  ];

  return (
    <section id="skills" className="section-padding overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
          <div className="max-w-3xl">
            <h2 className="editorial-title mb-6">
              Expertise & <span className="gradient-text italic">Services.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-tight">
              A comprehensive approach to building digital products, combining technical precision with business-driven strategy.
            </p>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 vertical-text hidden lg:block">
            Solutions / 2024
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
              className="group relative py-16 border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 md:px-8">
                <div className="lg:col-span-1">
                  <span className="text-sm font-black text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {service.id}
                  </span>
                </div>
                
                <div className="lg:col-span-4 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>

                <div className="lg:col-span-2 flex flex-wrap gap-2 justify-end">
                  {service.tools.map((tool, idx) => (
                    <span key={idx} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-full group-hover:border-slate-400 transition-colors">
                      {tool}
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
