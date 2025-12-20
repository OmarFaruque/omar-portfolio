import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-inherit mb-8">Get In Touch</h2>
      <p className="text-slate-800 dark:text-inherit mb-10 max-w-xl mx-auto text-lg">
        I&apos;m currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, my inbox is always open.
      </p>
      <a
        href="mailto:your.email@example.com"
        className="btn shadow-lg ring-0 dark:ring-1 dark:ring-white/6"
      >
        Say Hello
      </a>
      <div className="mt-12 flex justify-center space-x-8">
        <a href="#" className="text-slate-700 hover:text-slate-900 dark:text-gray-200 transition-transform transform hover:scale-110">
          <FaGithub size={26} />
        </a>
        <a href="#" className="text-slate-700 hover:text-slate-900 dark:text-gray-200 transition-transform transform hover:scale-110">
          <FaLinkedin size={26} />
        </a>
        <a href="#" className="text-slate-700 hover:text-slate-900 dark:text-gray-200 transition-transform transform hover:scale-110">
          <FaTwitter size={26} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
