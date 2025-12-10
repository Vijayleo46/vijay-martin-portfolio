import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Github, Linkedin, MapPin, Send, ArrowRight, ExternalLink, Code2, Sparkles, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const services = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'Building scalable web applications' },
    { icon: Sparkles, title: 'AI Integration', desc: 'Implementing intelligent solutions' },
    { icon: Rocket, title: 'Mobile Apps', desc: 'Cross-platform Flutter development' }
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-black via-slate-950 to-black pt-32 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
            style={{ fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif" }}
          >
            LET'S BUILD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600">
              SOMETHING AMAZING
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Ready to transform your ideas into reality? Let's collaborate on your next project.
          </motion.p>
        </div>



        {/* Services Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Our Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Services
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-400 mb-6">{service.desc}</p>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:text-purple-300"
                  >
                    Learn More <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 mb-20 overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-slate-300 text-lg max-w-xl">
                Get in touch and let's discuss how we can bring your vision to life with cutting-edge technology.
              </p>
            </div>
            
            <motion.a
              href={`mailto:${CONTACT_INFO.email}`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg whitespace-nowrap"
            >
              <Send size={24} />
              Contact Me
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, color: 'from-purple-600 to-indigo-600' },
            { icon: Linkedin, href: CONTACT_INFO.linkedin, color: 'from-blue-600 to-cyan-600' },
            { icon: Github, href: CONTACT_INFO.github, color: 'from-slate-700 to-slate-900' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${social.color} text-white shadow-lg border border-white/10`}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full">
            <MapPin size={18} className="text-purple-400" />
            <span className="text-slate-300 font-medium">{CONTACT_INFO.location}</span>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Vijay Martin.</span>
            <span>All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-purple-400"
            >
              ❤️
            </motion.span>
            <span>using React & Tailwind</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ backgroundSize: '200% 200%' }}
      />
    </footer>
  );
};

export default Footer;
