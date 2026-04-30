import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [state, handleSubmit] = useForm("xzdopkrw");

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
                { icon: <FiPhone />, label: "WhatsApp", val: "+234 811 442 6150", href: "https://wa.me/2348114426150" },
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
              {state.succeeded ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto text-4xl">
                    ✓
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter">Thank you!</h3>
                  <p className="text-slate-500 font-medium">Your message has been received. I'll get back to you shortly.</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-4 focus:border-slate-900 dark:focus:border-white outline-none transition-all text-xl font-bold"
                      placeholder="Enter your name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-4 focus:border-slate-900 dark:focus:border-white outline-none transition-all text-xl font-bold"
                      placeholder="name@company.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-4 focus:border-slate-900 dark:focus:border-white outline-none transition-all text-xl font-bold resize-none"
                      placeholder="Tell me about your vision..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="btn-primary w-full justify-center group py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                    {!state.submitting && <FiSend className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
