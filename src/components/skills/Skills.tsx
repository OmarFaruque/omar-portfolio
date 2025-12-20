'use client'; // This component now uses hooks and event handlers, so it's a client component.

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPhp, SiLaravel, SiVuedotjs, SiReact, SiNextdotjs, SiMysql,
  SiPostgresql, SiTailwindcss, SiAlpinedotjs, SiTypescript, SiWordpress, SiPrestashop,
  SiJavascript, SiJquery, SiBootstrap, SiOpenai, SiMongodb, SiFirebase,
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaServer, FaCode, FaDatabase, FaDocker, FaAws, FaSyncAlt, FaGlobe, FaCog, FaRobot } from 'react-icons/fa';

const categories = [
  {
    title: 'Backend',
    items: [
      { name: 'PHP', icon: <SiPhp size={22} /> },
      { name: 'Laravel', icon: <SiLaravel size={22} /> },
      { name: 'Livewire (Laravel)', icon: <SiLaravel size={18} /> },
      { name: 'Node.js', icon: <FaServer size={22} /> },
      { name: 'REST APIs', icon: <FaCode size={22} /> },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', icon: <SiJavascript size={22} /> },
      { name: 'TypeScript', icon: <SiTypescript size={22} /> },
      { name: 'React', icon: <SiReact size={22} /> },
      { name: 'Next.js', icon: <SiNextdotjs size={22} /> },
      { name: 'Vue.js', icon: <SiVuedotjs size={22} /> },
      { name: 'AlpineJS', icon: <SiAlpinedotjs size={22} /> },
      { name: 'Tailwind', icon: <SiTailwindcss size={22} /> },
      { name: 'Bootstrap', icon: <SiBootstrap size={22} /> },
      { name: 'jQuery', icon: <SiJquery size={22} /> },
      { name: 'AJAX', icon: <FaSyncAlt size={18} /> },
      { name: 'HTML & CSS', icon: <><FaHtml5 size={18} /><FaCss3Alt size={18} /></> },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', icon: <SiMysql size={22} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={22} /> },
      { name: 'MongoDB', icon: <SiMongodb size={22} /> },
      { name: 'Firebase', icon: <SiFirebase size={22} /> },
      { name: 'Neon/Managed DBs', icon: <FaDatabase size={22} /> },
    ],
  },
  {
    title: 'CMS & eCommerce',
    items: [
      { name: 'WordPress / WooCommerce', icon: <SiWordpress size={22} /> },
      { name: 'PrestaShop', icon: <SiPrestashop size={22} /> },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { name: 'AI Agents', icon: <FaRobot size={20} /> },
      { name: 'Custom Chatbots', icon: <SiOpenai size={20} /> },
      { name: 'Prompt Engineering', icon: <FaRobot size={18} /> },
      { name: 'LLMs (OpenAI, etc.)', icon: <SiOpenai size={18} /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: <FaDocker size={22} /> },
      { name: 'AWS', icon: <FaAws size={22} /> },
      { name: 'VPS / Server Admin', icon: <FaServer size={22} /> },
      { name: 'cPanel', icon: <FaCog size={20} /> },
      { name: 'Domains & DNS', icon: <FaGlobe size={20} /> },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-200 mb-8">Tools & Technologies</h2>

      <p className="text-center text-slate-800 dark:text-gray-200 max-w-2xl mx-auto mb-10">
        I work across the full stack — building APIs, backend systems, and polished front-ends. Below are the technologies and tools I use frequently in production.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            className="bg-white dark:bg-dark p-8 rounded-2xl shadow-sm dark:shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-medium text-slate-900 dark:text-inherit mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-3 bg-slate-50 dark:bg-gray-900 px-4 py-2 rounded-md border border-transparent hover:border-slate-200 dark:hover:border-gray-700 transition min-w-[140px]"
                >
                  <div className="text-primary-dark">{s.icon}</div>
                  <div className="text-sm font-medium text-slate-800 dark:text-gray-100">{s.name}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
