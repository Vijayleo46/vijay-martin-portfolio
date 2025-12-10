import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowRight, Sparkles, Code2, Cpu, Globe, Mail, Star, ExternalLink, Zap, Rocket, Terminal, Box, Layers, Hexagon } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-dark-500 to-dark-400 pt-20" style={{ perspective: '1000px' }}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated Gradient Layers */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-purple-900/10 via-black/95 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-indigo-900/8 via-transparent to-transparent"
          animate={{
            backgroundPosition: ["100% 100%", "0% 0%", "100% 100%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Multiple Animated Orbs with Complex Movement */}
        <motion.div 
            animate={{ 
                scale: [1, 1.4, 1.2, 1],
                opacity: [0.08, 0.18, 0.12, 0.08],
                x: [0, 80, -40, 0],
                y: [0, -50, 30, 0],
                rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-600/10 to-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.3, 1.1, 1],
                opacity: [0.06, 0.14, 0.1, 0.06],
                x: [0, -60, 40, 0],
                y: [0, 60, -30, 0],
                rotate: [360, 180, 0]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-[100px] mix-blend-screen" 
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.5, 1, 1.2, 1],
                opacity: [0.05, 0.12, 0.08, 0.15, 0.05],
                x: [0, 50, -50, 30, 0],
                y: [0, -40, 40, -20, 0],
                rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-emerald-600/8 to-blue-600/8 rounded-full blur-[130px] mix-blend-screen" 
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1.4, 1],
                opacity: [0.04, 0.1, 0.06, 0.04],
                x: [0, -70, 70, 0],
                y: [0, 50, -50, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 7 }}
            className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-gradient-to-r from-fuchsia-600/8 to-violet-600/8 rounded-full blur-[110px] mix-blend-screen" 
        />
        
        {/* Optimized Floating Particles - Reduced from 25 to 12 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Optimized Wave Lines - Reduced from 3 to 2 */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent hidden lg:block"
            style={{
              top: `${35 + i * 30}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear"
            }}
          />
        ))}

        {/* Pulsing Grid Effect */}
        <motion.div
          className="absolute inset-0 bg-grid-white/[0.02]"
          animate={{
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 3D Floating Image Cards */}
        {/* Top Left - Code/Tech Image */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 10, 0],
            rotateX: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl"
            style={{
              transform: 'translateZ(50px)',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotateY: 15 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"
              alt="Coding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-4">
              <span className="text-white font-bold text-sm">Full-Stack Dev</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Top Right - AI/Innovation Image */}
        <motion.div
          className="absolute top-32 right-16 hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            y: [0, 15, 0],
            rotateY: [0, -10, 0],
            rotateX: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <motion.div
            className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-indigo-500/30 shadow-2xl"
            style={{
              transform: 'translateZ(60px)',
              boxShadow: '0 20px 60px rgba(99, 102, 241, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotateY: -15 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop"
              alt="AI Innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end p-3">
              <span className="text-white font-bold text-sm">AI Innovator</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Left - Mobile/Flutter Image */}
        <motion.div
          className="absolute bottom-32 left-20 hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            y: [0, -18, 0],
            rotateY: [0, 12, 0],
            rotateZ: [0, -3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <motion.div
            className="w-36 h-48 rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl"
            style={{
              transform: 'translateZ(40px)',
              boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotateY: 12 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop"
              alt="Mobile Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent flex items-end p-3">
              <span className="text-white font-bold text-xs">Flutter Dev</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Right - Design/UI Image */}
        <motion.div
          className="absolute bottom-24 right-24 hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            y: [0, 20, 0],
            rotateY: [0, -8, 0],
            rotateX: [0, 3, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <motion.div
            className="w-44 h-44 rounded-2xl overflow-hidden border-4 border-fuchsia-500/30 shadow-2xl"
            style={{
              transform: 'translateZ(55px)',
              boxShadow: '0 20px 60px rgba(236, 72, 153, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotateY: -12 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop"
              alt="UI/UX Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/80 to-transparent flex items-end p-3">
              <span className="text-white font-bold text-sm">UI/UX Design</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Optimized 3D Floating Elements - Reduced for Performance */}
        {/* Floating 3D Cubes - Reduced from 8 to 4 */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute hidden lg:block"
            style={{
              left: `${15 + (i * 25)}%`,
              top: `${25 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/15 to-indigo-500/15 border border-purple-400/20 rounded-lg flex items-center justify-center">
              <Box size={20} className="text-purple-400/50" />
            </div>
          </motion.div>
        ))}

        {/* Floating 3D Hexagons - Reduced from 6 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute hidden lg:block"
            style={{
              right: `${15 + (i * 30)}%`,
              top: `${30 + (i % 2) * 35}%`,
            }}
            animate={{
              y: [0, 25, 0],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1
            }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 border border-indigo-400/20 rounded-full flex items-center justify-center">
              <Hexagon size={22} className="text-indigo-400/50" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
        >
            {/* Subtle Status Badge */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-slate-900/60 border border-slate-700/30 backdrop-blur-xl text-purple-300 font-medium text-sm hover:border-purple-500/30 transition-all duration-300 cursor-default group"
            >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <Star size={14} className="text-yellow-400" />
                Available for innovative projects
                <Sparkles size={14} className="text-indigo-400" />
            </motion.div>
            
            {/* Enhanced Main Title with Letter Animation */}
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-6 leading-none"
                style={{ 
                  fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif", 
                  letterSpacing: '0.02em',
                  fontWeight: 900
                }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50, rotateY: -90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                className="inline-block text-white"
                style={{ 
                  textShadow: '0 0 20px rgba(255,255,255,0.15), 0 5px 15px rgba(0,0,0,0.8)'
                }}
              >
                VIJAY
              </motion.span>{" "}
              <motion.span 
                initial={{ opacity: 0, x: 50, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateZ: -2 }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-500 hover:from-fuchsia-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-700"
                style={{ 
                  textShadow: '0 0 30px rgba(168,85,247,0.3), 0 5px 15px rgba(0,0,0,0.8)'
                }}
              >
                MARTIN
              </motion.span>
            </motion.h1>
            
            {/* Enhanced Subtitle with Wave Animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl font-medium leading-relaxed"
            >
              <motion.span 
                className="text-slate-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Crafting digital experiences with
              </motion.span>{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Flutter & Full-Stack
              </motion.span>{" "}
              <motion.span 
                className="text-slate-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                expertise and
              </motion.span>{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
              >
                AI Innovation
              </motion.span>
            </motion.div>
            
            {/* Tech Stack Pills - Empty array, keeping structure */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl"
            >
              {[].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-full text-slate-300 text-sm font-medium backdrop-blur-sm hover:border-indigo-500/50 hover:bg-slate-700/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtle Action Buttons */}
            <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
            >
                <motion.a 
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">View My Work</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a 
                    href={CONTACT_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-xl text-white px-8 py-4 rounded-full font-semibold border border-slate-600/50 hover:border-indigo-400/50 hover:bg-slate-800/60 transition-all duration-300"
                >
                    <ExternalLink size={20} />
                    GitHub Profile
                </motion.a>
                
                <motion.a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-slate-800/60 backdrop-blur-xl text-slate-300 px-8 py-4 rounded-full font-semibold border border-slate-600/50 hover:border-emerald-400/50 hover:bg-slate-700/60 hover:text-emerald-300 transition-all duration-300"
                >
                    <Mail size={20} />
                    Get In Touch
                </motion.a>
            </motion.div>
            
            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="flex flex-col items-center gap-2 text-slate-500"
            >
                <motion.span 
                  className="text-sm font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Scroll to explore
                </motion.span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-slate-500 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </motion.div>

        {/* Subtle Floating Icons Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-15 hidden lg:block">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="w-full h-full relative"
            >
                {[
                    { Icon: Code2, color: "text-indigo-400", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", delay: 0 },
                    { Icon: Cpu, color: "text-purple-400", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", delay: 0.5 },
                    { Icon: Globe, color: "text-cyan-400", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2", delay: 1 },
                    { Icon: Sparkles, color: "text-pink-400", position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2", delay: 1.5 },
                ].map(({ Icon, color, position, delay }, index) => (
                    <motion.div 
                        key={index}
                        className={`absolute ${position}`}
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.15, 0.3, 0.15]
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: delay
                        }}
                    >
                        <Icon size={45} className={color} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
        
        {/* Minimal Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-10 hidden xl:block">
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Code2 size={24} className="text-indigo-300" />
            </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 hidden xl:block">
            <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <Cpu size={28} className="text-purple-300" />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
