import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Zap, Code, Users, Target, Sparkles, ChevronRight, Building } from 'lucide-react';
import { motion } from 'framer-motion';
// anime.js will be imported dynamically

const Experience = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const initAnimations = async () => {
      try {
        // @ts-ignore
        const { animate } = await import('https://esm.sh/animejs');
        
        // DRAWING ANIMATION for the vertical timeline path (desktop)
        if (pathRef.current) {
          const path = pathRef.current;
          const pathLength = path.getTotalLength();
          // prepare stroke for "draw" effect
          path.style.strokeDasharray = `${pathLength}`;
          path.style.strokeDashoffset = `${pathLength}`;

          animate({
            targets: path,
            strokeDashoffset: [pathLength, 0],
            easing: 'easeInOutSine',
            duration: 1200,
            delay: 300,
          });
        }

        // STAGGERED card entrance animation
        if (cardsRef.current.length) {
          animate({
            targets: cardsRef.current,
            translateY: [30, 0],
            opacity: [0, 1],
            delay: animate.stagger(120),
            duration: 700,
            easing: 'easeOutCubic'
          });
        }

        // Dot pulse animation (the circle indicators on the timeline)
        if (dotsRef.current.length) {
          animate({
            targets: dotsRef.current,
            scale: [1, 1.35],
            opacity: [1, 0.85],
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            delay: animate.stagger(200, {start: 600}),
            duration: 900,
          });
        }
      } catch (error) {
        console.log('Anime.js not loaded, using fallback animations');
        // Fallback CSS animations
        if (cardsRef.current.length) {
          cardsRef.current.forEach((card: HTMLDivElement | null, index: number) => {
            setTimeout(() => {
              if (card) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }
            }, 300 + (index * 120));
          });
        }
      }
    };

    initAnimations();
  }, []);

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-black via-dark-500 to-dark-300 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.08, 0.18, 0.08],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/3 to-indigo-600/3 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Floating Icons with Enhanced Animation */}
        {[Code, Users, Target, Award].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            <Icon size={40} className="text-indigo-400" />
          </motion.div>
        ))}

        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <motion.line
            x1="0" y1="30%" x2="100%" y2="30%"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="0" y1="70%" x2="100%" y2="70%"
            stroke="url(#lineGradient2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(139, 92, 246)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <TrendingUp className="text-indigo-400" size={40} />
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-white font-display"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              CAREER{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600">
                JOURNEY
              </span>
            </motion.h2>
            <Sparkles className="text-purple-400" size={40} />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Tracing my path through the tech landscape, from curious beginner to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold">
              innovative problem solver
            </span>
          </motion.p>
          

        </div>

        {/* Enhanced Timeline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Enhanced SVG Timeline */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1">
            <svg className="w-full h-full" viewBox="0 0 4 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="timelineGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1e293b" stopOpacity="0.3" />
                  <stop offset="20%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                  <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1e293b" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                ref={pathRef}
                d="M2 0 Q2 25 2 50 Q2 75 2 100"
                stroke="url(#timelineGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                className="timeline-path"
              />
            </svg>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-cyan-600 opacity-50" />

          {/* Experience Cards */}
          <div className="space-y-24">
            {EXPERIENCE.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const cardIcons = [Briefcase, Code, Users, Target];
              const CardIcon = cardIcons[idx % cardIcons.length];
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -100 : 100, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: idx * 0.2, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`relative ${isEven ? 'lg:pr-1/2' : 'lg:pl-1/2'}`}
                  ref={(el: HTMLDivElement | null) => cardsRef.current[idx] = el}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Timeline Dot with Enhanced Animation */}
                  <motion.div
                    ref={(el: HTMLDivElement | null) => dotsRef.current[idx] = el}
                    className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    animate={{ 
                      scale: activeCard === idx ? 1.2 : 1,
                      boxShadow: activeCard === idx ? "0 0 30px rgba(99, 102, 241, 0.8)" : "0 0 15px rgba(99, 102, 241, 0.4)"
                    }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center border-4 border-slate-900 shadow-2xl relative"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(99, 102, 241, 0.4)",
                          "0 0 40px rgba(139, 92, 246, 0.6)",
                          "0 0 20px rgba(99, 102, 241, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Pulsing Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        animate={{ rotate: activeCard === idx ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CardIcon size={24} className="text-white" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden absolute left-6 top-12 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-slate-900 z-10 flex items-center justify-center">
                    <CardIcon size={12} className="text-white" />
                  </div>

                  {/* Experience Card */}
                  <motion.div 
                    className={`relative ${isEven ? 'lg:mr-12' : 'lg:ml-12'} ml-16 lg:ml-0 group`}
                    whileHover={{ y: -10, scale: 1.02, rotateY: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Animated Card Background Glow */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Animated Border Gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(90deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3), rgba(236,72,153,0.3))",
                        backgroundSize: "200% 200%"
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="relative bg-gradient-to-br from-dark-200/95 to-dark-300/95 backdrop-blur-xl border border-dark-100/50 group-hover:border-purple-400/50 rounded-3xl p-8 transition-all duration-500 shadow-2xl">
                      {/* Card Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                        <div className="space-y-3">
                          <motion.h3 
                            className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-500"
                            whileHover={{ scale: 1.05, x: 10 }}
                            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 + 0.3 }}
                          >
                            {exp.role}
                          </motion.h3>
                          
                          <div className="flex flex-wrap items-center gap-4 text-slate-300">
                            <div className="flex items-center gap-2">
                              <Building size={18} className="text-indigo-400" />
                              <span className="font-semibold">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-purple-400" />
                              <span className="text-sm">Onsite</span>
                            </div>
                          </div>
                        </div>
                        
                        <motion.div
                          className="flex flex-col items-end gap-2"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 + 0.5, type: "spring" }}
                        >
                          <motion.span 
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg"
                            animate={{
                              boxShadow: [
                                "0 4px 20px rgba(99, 102, 241, 0.3)",
                                "0 4px 30px rgba(139, 92, 246, 0.5)",
                                "0 4px 20px rgba(99, 102, 241, 0.3)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {exp.period}
                          </motion.span>
                          <motion.div 
                            className="flex items-center gap-1 text-xs text-slate-400"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                              <Calendar size={12} />
                            </motion.div>
                            <span>Duration</span>
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Achievements/Details */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Zap size={18} className="text-yellow-400" />
                          <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                        </div>
                        
                        <div className="grid gap-4">
                          {exp.details.map((detail, dIdx) => (
                            <motion.div
                              key={dIdx}
                              initial={{ opacity: 0, x: -20, scale: 0.9 }}
                              whileInView={{ opacity: 1, x: 0, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: 0.1 * dIdx,
                                type: "spring",
                                stiffness: 100
                              }}
                              whileHover={{ 
                                x: 10, 
                                scale: 1.02,
                                backgroundColor: "rgba(139, 92, 246, 0.1)"
                              }}
                              className="flex items-start gap-4 p-4 bg-dark-300/40 rounded-2xl border border-dark-100/30 group-hover:border-purple-500/30 transition-colors duration-300 cursor-pointer"
                            >
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 mt-2 shrink-0"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  boxShadow: [
                                    "0 0 5px rgba(139, 92, 246, 0.5)",
                                    "0 0 15px rgba(139, 92, 246, 0.8)",
                                    "0 0 5px rgba(139, 92, 246, 0.5)"
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: dIdx * 0.3 }}
                              />
                              <p className="text-slate-300 leading-relaxed">{detail}</p>
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ChevronRight size={16} className="text-purple-400 mt-1 shrink-0" />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </div>


                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-32"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-dark-200/90 to-dark-300/90 backdrop-blur-xl rounded-3xl border border-dark-100/50">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-indigo-400" size={32} />
              <h3 className="text-2xl font-bold text-white">Ready for the Next Challenge</h3>
              <Sparkles className="text-purple-400" size={32} />
            </div>
            <p className="text-slate-300 max-w-2xl leading-relaxed">
              My journey continues to evolve with each project, always seeking innovative solutions 
              and pushing the boundaries of what's possible in technology.
            </p>
            <motion.button
              className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award size={20} />
              Let's Build Something Amazing
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
