import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Contact Narrative */}
          <div className="lg:col-span-6 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="editorial-title mb-8">
                Let's <span className="gradient-text italic">Connect.</span>
              </h2>
              <p className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-medium leading-tight tracking-tight max-w-xl">
                Ready to turn your vision into a high-performance digital product? I'm currently accepting new collaborations and strategy sessions.
              </p>
            </motion.div>

            <div className="space-y-8 pt-12 border-t border-slate-200 dark:border-slate-800">
              {[
                { icon: <FiMail />, label: "Email", val: "robosapienc@gmail.com", href: "mailto:robosapienc@gmail.com" },
                { icon: <FiPhone />, label: "WhatsApp", val: "+234 802 258 6582", href: "https://wa.me/2348022586582" },
                { icon: <FiMapPin />, label: "Location", val: "Edo State, Nigeria", href: "#" },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-xl font-black text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-[3.5rem] p-10 md:p-16"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-4 focus:border-slate-900 dark:focus:border-white outline-none transition-all text-xl font-bold"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-4 focus:border-slate-900 dark:focus:border-white outline-none transition-all text-xl font-bold"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Project Details</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-4 focus:border-slate-900 dark:focus:border-white outline-none transition-all text-xl font-bold resize-none"
                    placeholder="Tell me about your vision..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center group py-6">
                  Send Message
                  <FiSend className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {status && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-sm font-black uppercase tracking-widest text-slate-500"
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
