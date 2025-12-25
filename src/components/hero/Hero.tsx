'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center bg-white dark:bg-dark relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-400">
              Omar Faruque
            </h2>
            <h3 className="text-lg md:text-xl text-primary-dark mt-1">
              Full-Stack Developer
            </h3>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-500 leading-tight mt-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="block">I build scalable web apps with Laravel, Node.js, and Next.js</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-500 max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          >
            I'm a passionate digital craftsman who loves building things for the web. I've spent years exploring countless web and mobile applications, which inspired me to start designing and building my own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.55 }}
            className="mt-10 flex justify-center md:justify-start gap-4"
          >
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="#contact" className="btn-outline text-slate-900 dark:text-slate-700">
              Contact
            </a>
          </motion.div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;

