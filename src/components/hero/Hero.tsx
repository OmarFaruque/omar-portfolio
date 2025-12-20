'use client';

import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-white dark:bg-dark relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-500 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="block">I build scalable web apps with Laravel, Node.js, and Next.js</span>
          <span className="block text-primary-dark mt-2 text-xl md:text-2xl">Full-Stack Developer</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          I design and ship reliable, maintainable web platforms — from APIs and backend systems to blazing fast front-ends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.55 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="btn"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-outline text-slate-900 dark:text-slate-700"
          >
            Contact
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
