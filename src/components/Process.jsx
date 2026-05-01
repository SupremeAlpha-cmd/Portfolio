import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "I Listen",
      desc: "You explain your idea or problem — no tech talk needed. I ask the right questions to understand what you actually want to achieve.",
      color: "bg-blue-500"
    },
    {
      number: "02",
      title: "I Plan",
      desc: "I help you structure it clearly and decide what actually matters. We figure out what to build, in what order, and why — before a single line of code is written.",
      color: "bg-purple-500"
    },
    {
      number: "03",
      title: "I Build",
      desc: "I turn the plan into a real, working product. You stay in the loop at every step, and I make sure the final result matches your vision.",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="process" className="section-padding bg-slate-50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Section Header */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              How I <span className="gradient-text">Work.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4">
              Simple. Collaborative. No surprises.
            </p>
            <p className="text-lg text-slate-400 dark:text-slate-500 font-medium leading-relaxed mb-12 italic">
              "You don't need to understand the tech — you just need to see it work."
            </p>

            <div className="glass-card rounded-[3rem] p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/50 dark:bg-slate-800/50 rounded-full blur-3xl -mr-16 -mt-16" />
              <h3 className="text-2xl font-black mb-4 tracking-tight">Have an idea?</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                You don't need a perfect plan. Just bring the idea — we'll build the plan together.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 font-black uppercase tracking-widest text-xs"
              >
                Let's Talk
                <span className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center">→</span>
              </a>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-card rounded-[2.5rem] p-10 group hover:scale-[1.02] transition-all duration-500 flex gap-8 items-start"
              >
                <div className={`w-14 h-14 shrink-0 ${step.color} rounded-2xl flex items-center justify-center text-white text-lg font-black shadow-lg group-hover:rotate-6 transition-transform`}>
                  {step.number}
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-3 tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
