import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Github, Linkedin, MapPin, Send, Code2, Sparkles, Heart, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-black via-slate-950 to-black pt-32 pb-12 border-t border-dark-200 overflow-hidden" style={{ perspective: '1000px' }}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* 3D Floating Icons */}
        {[Code2, Sparkles, Rocket].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:block"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1
            }}
          >
            <Icon size={32} className="text-purple-500/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* 3D Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6 relative"
            style={{ 
              fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",
              textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LET'S{" "}
            </motion.span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600">
              COLLABORATE
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Available for freelance projects and full-time opportunities. 
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold">
              scalable and intelligent
            </span>{" "}
            together.
          </motion.p>
        </motion.div>

        {/* 3D Social Icons */}
        <motion.div 
          className="flex justify-center gap-6 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a 
            href={`mailto:${CONTACT_INFO.email}`}
            whileHover={{ 
              scale: 1.15, 
              rotateY: 180,
              boxShadow: '0 10px 40px rgba(139, 92, 246, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-400/30 text-white backdrop-blur-sm shadow-lg"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
              style={{ transform: 'translateZ(-10px)' }}
            />
            <Mail size={24} className="relative z-10" />
          </motion.a>

          <motion.a 
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.15, 
              rotateY: 180,
              boxShadow: '0 10px 40px rgba(0, 119, 181, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-white backdrop-blur-sm shadow-lg"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="absolute inset-0 bg-[#0077b5] rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
              style={{ transform: 'translateZ(-10px)' }}
            />
            <Linkedin size={24} className="relative z-10" />
          </motion.a>

          <motion.a 
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.15, 
              rotateY: 180,
              boxShadow: '0 10px 40px rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700/20 to-slate-900/20 border border-slate-400/30 text-white backdrop-blur-sm shadow-lg"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="absolute inset-0 bg-white rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
              style={{ transform: 'translateZ(-10px)' }}
            />
            <Github size={24} className="relative z-10 group-hover:text-black" />
          </motion.a>

          <motion.a 
            href={`mailto:${CONTACT_INFO.email}`}
            whileHover={{ 
              scale: 1.15, 
              rotateY: 180,
              boxShadow: '0 10px 40px rgba(236, 72, 153, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-600/20 to-fuchsia-600/20 border border-pink-400/30 text-white backdrop-blur-sm shadow-lg"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-600 to-fuchsia-600 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
              style={{ transform: 'translateZ(-10px)' }}
            />
            <Send size={24} className="relative z-10" />
          </motion.a>
        </motion.div>

        {/* 3D Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="inline-flex items-center gap-3 text-slate-300 mb-16 bg-gradient-to-r from-dark-200/60 to-dark-300/60 px-6 py-3 rounded-full border border-dark-100/50 backdrop-blur-xl shadow-lg"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <MapPin size={18} className="text-purple-400" />
          </motion.div>
          <span className="font-medium">{CONTACT_INFO.location}</span>
        </motion.div>

        {/* 3D Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12"
        />

        {/* Bottom Section with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500"
        >
          <motion.div
            whileHover={{ scale: 1.05, color: '#a78bfa' }}
            className="flex items-center gap-2"
          >
            <span>© {new Date().getFullYear()} Vijay Martin.</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              All rights reserved.
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.div>
            <span>using React & Tailwind</span>
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Bottom Accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: '200% 200%' }}
      />
    </footer>
  );
};

export default Footer;
