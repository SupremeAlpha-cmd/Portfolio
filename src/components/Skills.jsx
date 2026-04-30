import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiFlutter, SiDart, SiReact, SiFirebase, SiGit, SiSupabase, SiNodedotjs, SiTailwindcss, SiVite } from 'react-icons/si';
import { FiCode, FiSmartphone, FiLayout, FiDatabase, FiCloud } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillGroups = [
    {
      title: "Mobile App Development",
      icon: <FiSmartphone />,
      skills: [
        { name: "Flutter", icon: SiFlutter, level: 95 },
        { name: "Dart", icon: SiDart, level: 90 },
      ],
      description: "Building fast, high-quality mobile apps for iOS and Android.",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Web Design & Development",
      icon: <FiLayout />,
      skills: [
        { name: "React", icon: SiReact, level: 85 },
        { name: "Tailwind", icon: SiTailwindcss, level: 90 },
        { name: "Vite", icon: SiVite, level: 85 },
      ],
      description: "Modern, responsive websites that look great on any screen.",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Cloud & Backend Systems",
      icon: <FiDatabase />,
      skills: [
        { name: "Render", icon: FiCloud, level: 85 },
        { name: "Supabase", icon: SiSupabase, level: 80 },
        { name: "Firebase", icon: SiFirebase, level: 85 },
      ],
      description: "Secure and reliable databases to power your business data.",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Product Strategy & Tools",
      icon: <FiCode />,
      skills: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "REST APIs", icon: FiCloud, level: 95 },
      ],
      description: "Technical planning and integration for seamless operations.",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-primary-900/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Services & <span className="gradient-text">Expertise.</span>
          </h2>
          <div className="w-24 h-1 bg-slate-200 dark:bg-slate-800 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-500 ${group.className}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-slate-100 dark:bg-slate-800/50 rounded-2xl text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-500">
                    {group.icon}
                  </div>
                  <div className="flex -space-x-3">
                    {group.skills.map((s, idx) => (
                      <div key={idx} className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                        <s.icon className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-3 tracking-tight text-slate-900 dark:text-white">
                  {group.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: (i * 0.2) + (idx * 0.1) }}
                        className="h-full bg-slate-900 dark:bg-white rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
