
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers, Github, Rocket, Zap, Star, Code, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startProjectAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startProjectAnimation = async () => {
    try {
      // Import anime.js ESM version
      const { animate, svg } = await import('https://esm.sh/animejs');
      
      if (!pathRef.current || !projectsRef.current) return;

      // Animate the path drawing with motion path
      const pathDrawAnimation = animate(svg.createDrawable(pathRef.current), {
        draw: '0 1',
        ease: 'linear',
        duration: 3000,
        delay: 500,
      });

      // Create motion path for floating elements
      const motionPath = svg.createMotionPath(pathRef.current);
      
      // Animate floating cars/rockets along the path
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        animate(element, {
          ease: 'linear',
          duration: 8000 + (index * 1000),
          loop: true,
          delay: 1000 + (index * 500),
          ...motionPath
        });
      });

      // Animate project cards with staggered entrance
      const projectCards = projectsRef.current.querySelectorAll('.project-card');
      
      animate(projectCards, {
        translateX: [
          { value: -150, duration: 0 },
          { value: 0, duration: 1200 }
        ],
        translateY: [
          { value: 80, duration: 0 },
          { value: 0, duration: 1200 }
        ],
        opacity: [0, 1],
        scale: [0.7, 1],
        rotate: [8, 0],
        easing: 'easeOutElastic(1, .6)',
        delay: animate.stagger(300, { start: 1500 }),
      });

      // Continuous floating animation for icons
      animate('.project-icon', {
        translateY: [
          { value: -15, duration: 2000 },
          { value: 15, duration: 2000 }
        ],
        rotate: [
          { value: -8, duration: 2000 },
          { value: 8, duration: 2000 }
        ],
        scale: [
          { value: 0.95, duration: 2000 },
          { value: 1.05, duration: 2000 }
        ],
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
        delay: animate.stagger(400),
      });

      // Sparkle effects
      animate('.sparkle-effect', {
        scale: [0, 1.5, 0],
        opacity: [0, 1, 0],
        rotate: [0, 180, 360],
        easing: 'easeInOutQuad',
        duration: 2000,
        loop: true,
        delay: animate.stagger(600, { start: 2000 }),
      });

    } catch (error) {
      console.log('Anime.js not loaded, using fallback animations');
      // Fallback to CSS animations if anime.js fails to load
      const projectCards = projectsRef.current?.querySelectorAll('.project-card');
      projectCards?.forEach((card, index) => {
        setTimeout(() => {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateY(0) scale(1)';
        }, 500 + (index * 200));
      });
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-gradient-to-br from-black via-dark-500 to-dark-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-ping" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-50 animate-bounce" />
      </div>

      {/* Enhanced Animated SVG Path with Motion Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main animated path */}
          <path
            ref={pathRef}
            d="M100,500 Q300,200 600,400 Q900,150 1100,350"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="15,10"
            opacity="0.8"
            filter="url(#glow)"
          />
          
          {/* Secondary decorative paths */}
          <path
            d="M150,450 Q400,250 700,380 Q950,180 1050,320"
            stroke="#6366f1"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            opacity="0.4"
          />
          <path
            d="M80,520 Q350,300 650,420 Q880,200 1120,380"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
            opacity="0.3"
          />
        </svg>
        
        {/* Floating elements that follow the motion path */}
        <div className="floating-element absolute w-6 h-6 -ml-3 -mt-3">
          <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg">
            <Rocket size={16} className="text-white p-1" />
          </div>
        </div>
        
        <div className="floating-element absolute w-5 h-5 -ml-2.5 -mt-2.5">
          <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg">
            <Code size={12} className="text-white p-0.5" />
          </div>
        </div>
        
        <div className="floating-element absolute w-4 h-4 -ml-2 -mt-2">
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
            <Sparkles size={10} className="text-white p-0.5" />
          </div>
        </div>
      </div>

      {/* Sparkle Effects */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="sparkle-effect absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
            opacity: 0
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-6"
            >
                <Rocket className="text-indigo-400 project-icon" size={32} />
                <motion.h2 
                    className="text-4xl md:text-6xl font-black text-white"
                >
                    FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">PROJECTS</span>
                </motion.h2>
                <Zap className="text-purple-400 project-icon" size={32} />
            </motion.div>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed"
            >
                Journey through my digital creations where <span className="text-indigo-400 font-semibold">innovation meets execution</span>. 
                Each project represents a milestone in my development adventure.
            </motion.p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="project-card group relative bg-gradient-to-br from-dark-200/90 to-dark-300/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-dark-100/50 hover:border-purple-400/50 transition-all duration-700 flex flex-col h-full transform-gpu"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ opacity: 0 }}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Project Number Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Image Container with Enhanced Effects */}
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  animate={{ 
                    scale: hoveredIndex === idx ? 1.15 : 1,
                    filter: hoveredIndex === idx ? "brightness(1.1) saturate(1.2)" : "brightness(1) saturate(1)"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                
                {/* Floating Project Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="project-icon w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                </div>
                
                {/* Enhanced Tech Stack */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIdx) => (
                        <motion.div 
                            key={tech} 
                            className="bg-slate-950/80 backdrop-blur-md text-xs font-semibold text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-500/30 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + (idx * 0.2) + (techIdx * 0.1) }}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                    <Star className="text-yellow-400 project-icon" size={20} />
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500">
                        {project.title}
                    </h3>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                </p>

                {/* Enhanced Action Area */}
                <div className="space-y-4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent group-hover:via-indigo-500/50 transition-colors duration-500" />
                    
                    <div className="flex justify-between items-center">
                        <motion.button 
                            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Layers size={16} /> 
                            <span>Explore Details</span>
                        </motion.button>
                        
                        <motion.button 
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ExternalLink size={18} />
                        </motion.button>
                    </div>
                </div>
              </div>

              {/* Enhanced Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-400/30 transition-colors duration-500" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-indigo-600/10 group-hover:via-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
        >
            <motion.button
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <Github size={20} />
                View All Projects on GitHub
                <ExternalLink size={18} />
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
