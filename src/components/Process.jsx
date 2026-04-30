import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiLayers, FiCode, FiTrendingUp } from 'react-icons/fi';

const Process = () => {
  const steps = [
    {
      icon: <FiSearch />,
      title: "Strategy & Discovery",
      desc: "We start by diving deep into your business goals, target audience, and market challenges to define a roadmap for success.",
      color: "bg-blue-500"
    },
    {
      icon: <FiLayers />,
      title: "Product Design",
      desc: "Crafting intuitive user journeys and sophisticated visual identities that resonate with users and reinforce brand authority.",
      color: "bg-purple-500"
    },
    {
      icon: <FiCode />,
      title: "Technical Engineering",
      desc: "Building scalable, high-performance architecture using modern technologies like React, Flutter, and cloud infrastructure.",
      color: "bg-emerald-500"
    },
    {
      icon: <FiTrendingUp />,
      title: "Growth & Scale",
      desc: "Post-launch optimization, SEO strategies, and performance scaling to ensure your product continues to win in the market.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="process" className="section-padding bg-slate-50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Section Header */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              How I <span className="gradient-text">Deliver Value.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12">
              Building a successful digital product requires more than just code. It requires a holistic approach that balances business strategy with engineering excellence.
            </p>
            
            <div className="glass-card rounded-[3rem] p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/50 dark:bg-slate-800/50 rounded-full blur-3xl -mr-16 -mt-16" />
              <h3 className="text-2xl font-black mb-4 tracking-tight">Need a customized solution?</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8">Let's discuss your specific requirements and build something extraordinary together.</p>
              <button className="flex items-center gap-2 font-black uppercase tracking-widest text-xs">
                Start a Consultation 
                <span className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center">→</span>
              </button>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-[2.5rem] p-8 group hover:scale-[1.03] transition-all duration-500"
              >
                <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  {step.icon}
                </div>
                <h4 className="text-xl font-black mb-3 tracking-tight">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
