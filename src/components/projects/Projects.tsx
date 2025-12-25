'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'Coverise',
    description: 'Coverise — an AI-powered document generation platform that produces professional, industry-standard documents instantly. It focuses on lightning-fast delivery, secure 256-bit encryption, affordable pricing, and polished templates for a seamless user experience.',
    image: '/project1.png',
    liveUrl: 'https://www.coverise.co.uk/',
    sourceUrl: 'https://github.com/OmarFaruque/coverise.co.uk',
    tech: ['React', 'Next.js', 'TailwindCSS', 'PostgreSQL'],
  },
  {
    title: 'Tempnow',
    description: 'TempNow — a user-focused document delivery platform prioritizing speed, reliability and ease-of-use. Features include instant document generation and download, secure encrypted payments, professional templates, a simple three-step purchase flow, and a 14-day money-back guarantee to build customer trust.',
    image: '/project2.png',
    liveUrl: '#',
    sourceUrl: '#',
    tech: ['Next.js', 'TailwindCSS', 'PostgreSQL'],
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-600 mb-4">My Startup Projects</h2>
      <p className="text-center text-slate-600 dark:text-slate-400 mb-16">Here are a few projects I've worked on recently.</p>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`md:order-${index % 2 === 0 ? '1' : '2'}`}>
              <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-auto rounded-lg shadow-lg"/>
            </div>
            <div className={`md:order-${index % 2 === 0 ? '2' : '1'}`}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-inherit mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3 -ml-3">
                {project.tech.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary-dark text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-gray-200 mb-6">{project.description}</p>
              <div className="flex items-center gap-6">
                <a target='_blank' href={project.liveUrl} className="text-primary-dark hover:underline transition-colors flex items-center gap-2">
                  <FaExternalLinkAlt /> <span>View Live</span>
                </a>
                <a target='_blank' href={project.sourceUrl} className="text-slate-600 dark:text-gray-200 hover:underline transition-colors flex items-center gap-2">
                  <FaGithub /> <span>Source Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
