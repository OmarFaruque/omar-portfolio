'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-700'
          : 'bg-white/5 dark:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-semibold shadow-md p-2 ring-1 ring-transparent border border-transparent dark:ring-1 dark:ring-white/10 dark:border-gray-700 dark:bg-primary/90"
              title="Omar Faruque"
              style={{ borderRadius: '6px' }}
            >
              <span>OF</span>
            </div>
            <div className="leading-tight">
              <Link href="/" className="text-base md:text-lg font-semibold text-slate-900 dark:text-inherit">
                Omar Faruque
              </Link>
              <div className="text-xs md:text-sm text-slate-500 dark:text-inherit">
                Full-Stack Developer
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="px-3 py-2 rounded text-slate-700 hover:text-slate-900 dark:hover:text-slate-500 dark:text-inherit transition-colors">
              About
            </a>
            <a href="#skills" className="px-3 py-2 rounded text-slate-700 hover:text-slate-900 dark:hover:text-slate-500 dark:text-inherit transition-colors">
              Skills
            </a>
            <a href="#projects" className="px-3 py-2 rounded text-slate-700 hover:text-slate-900 dark:hover:text-slate-500 dark:text-inherit transition-colors">
              Projects
            </a>
            <a href="#contact" className="px-3 py-2 rounded text-slate-700 hover:text-slate-900 dark:text-inherit dark:hover:text-slate-500 transition-colors">
              Contact
            </a>

            <div className="ml-2 flex items-center gap-4">
              <a href="#" aria-label="GitHub" className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-500 dark:text-inherit p-1">
                <FaGithub />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-500 dark:text-inherit p-1">
                <FaLinkedin />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
