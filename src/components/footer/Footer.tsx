import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-700 dark:text-slate-300 text-sm">&copy; {new Date().getFullYear()} Omar Faruque</div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white transition-colors">GitHub</a>
          <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
