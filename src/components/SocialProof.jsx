import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

// 🔧 TO ADD: Replace placeholder testimonials with real client quotes or DM screenshots
const testimonials = [
  {
    quote: "Oreoluwa helped us get online when we had no idea where to start. He didn't just build he explained everything along the way.",
    name: "Founder, Skholar",
    role: "Education Startup",
    initial: "S"
  },
  {
    quote: "I came with just an idea and left with a working product. The process was clear and stress-free the entire time.",
    name: "Co-founder, Syntax",
    role: "EdTech Platform",
    initial: "S"
  },
];

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/20 transition-colors" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-12 mb-24 pb-16 border-b border-slate-200 dark:border-slate-800"
        >
          {[
            { val: "5+", label: "Products Launched" },
            { val: "2+", label: "Years Building" },
            { val: "2", label: "Active Startups" },
            { val: "100%", label: "Commitment to Every Project" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black tracking-tighter gradient-text">{stat.val}</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            What People <span className="gradient-text italic">Say.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
            From the founders and teams I've worked with.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="glass-card rounded-[2.5rem] p-10"
            >
              <FiMessageSquare className="w-8 h-8 text-slate-300 dark:text-slate-700 mb-6" />
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-black text-lg">
                  {t.initial}
                </div>
                <div>
                  <p className="font-black text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
