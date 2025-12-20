'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the project, its purpose, and the technologies used. This project showcases my ability to build modern and responsive web applications.',
    image: '/placeholder.svg',
    liveUrl: '#',
    sourceUrl: '#',
    tech: ['React', 'Next.js', 'TailwindCSS'],
  },
  {
    title: 'Project Two',
    description: 'Another project that highlights different skills and technologies. For example, a full-stack application with a custom API and a database.',
    image: '/placeholder.svg',
    liveUrl: '#',
    sourceUrl: '#',
    tech: ['VueJS', 'Laravel', 'MySQL'],
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-600 mb-16">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg overflow-hidden"
            whileHover={{ y: -6, boxShadow: '0 12px 20px -8px rgba(16,24,40,0.08)' }}
          >
            <Image src={project.image} alt={project.title} width={500} height={224} className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-inherit mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary-dark text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-gray-200 mb-6">{project.description}</p>
              <div className="flex items-center gap-6 justify-between">
                <div className="flex items-center gap-6">
                  <a href={project.liveUrl} className="text-primary-dark hover:underline transition-colors flex items-center gap-2">
                    <FaExternalLinkAlt /> <span className="hidden sm:inline">View Live</span>
                  </a>
                  <a href={project.sourceUrl} className="text-slate-600 dark:text-gray-200 hover:underline transition-colors flex items-center gap-2">
                    <FaGithub /> <span className="hidden sm:inline">Source Code</span>
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  {/* Social / share buttons (placeholders) */}
                  <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-gray-200 p-2 rounded-md">Share</a>
                  <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-gray-200 p-2 rounded-md">Save</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
