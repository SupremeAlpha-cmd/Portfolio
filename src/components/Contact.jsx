import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiArrowUpRight } from 'react-icons/fi';

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
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-100/50 dark:bg-slate-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Let's <span className="gradient-text">Connect.</span>
          </h2>
          <div className="w-24 h-1 bg-slate-200 dark:bg-slate-800 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Have a vision? <br />
                <span className="text-slate-400">Let's build it together.</span>
              </h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md">
                Whether you're looking for a developer to launch your next app or a partner to scale your business, I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <FiMail />, label: "Email", val: "robosapienc@gmail.com", href: "mailto:robosapienc@gmail.com" },
                { icon: <FiPhone />, label: "Phone & WhatsApp", val: "+234 802 258 6582", href: "tel:+2348022586582" },
                { icon: <FiMapPin />, label: "Location", val: "Benin City, Edo State, Nigeria", href: "#" },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="p-5 glass-card rounded-2xl text-slate-900 dark:text-white group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Follow for updates</span>
              <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
              {/* Could add social icons here if needed, but they are in footer too */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card rounded-[3rem] p-8 lg:p-12 shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-slate-900 dark:focus:ring-white outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-slate-900 dark:focus:ring-white outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-slate-900 dark:focus:ring-white outline-none transition-all font-medium resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center group py-5">
                  Send Message
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {status && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-500/10 text-green-600 dark:text-green-400 rounded-2xl text-sm font-bold border border-green-500/20"
                  >
                    {status}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
