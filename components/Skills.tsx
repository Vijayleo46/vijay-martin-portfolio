
import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white mb-6"
            >
                TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ARSENAL</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SKILLS.map((category, idx) => (
            <motion.div 
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark-200/50 backdrop-blur-md border border-dark-100 rounded-3xl p-8 hover:border-dark-100/70 transition-colors"
            >
                <h3 className="text-xl font-bold text-gray-200 mb-8 border-b border-dark-100 pb-4">
                    {category.name}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                    {category.skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 group cursor-pointer"
                            whileHover={{ y: -5 }}
                            whileTap={{ rotate: 360, scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-16 h-16 bg-dark-300 rounded-2xl flex items-center justify-center border border-dark-100 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all duration-300">
                                <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
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
