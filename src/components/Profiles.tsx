import React from 'react';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

type ProfileLink = {
  title: string;
  url: string;
  icon: React.ReactNode;
  subtitle?: string;
};

const profiles: ProfileLink[] = [
  {
    title: 'Fiverr',
    url: 'https://www.fiverr.com/s/XL9PP2e',
    icon: <SiFiverr size={28} />,
    subtitle: 'Laravel, Next.js, Payments, eCommerce',
  },
  {
    title: 'Upwork',
    url: 'https://www.upwork.com',
    icon: <SiUpwork size={28} />,
    subtitle: 'Available for long-term & hourly work',
  },
];

export default function Profiles() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-inherit mb-8">Hire Me / Platforms</h2>

      <p className="text-center text-slate-800 dark:text-gray-200 max-w-2xl mx-auto mb-8">
        You can hire me through my freelance profiles — fast responses, proven track record, and lifetime bug support. Click a card to visit the profile.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {profiles.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-transparent hover:border-slate-100 dark:hover:border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className="text-primary-dark">{p.icon}</div>
              <div>
                <div className="text-lg font-semibold text-slate-900 dark:text-inherit">{p.title}</div>
                {p.subtitle && <div className="text-sm text-slate-700 dark:text-inherit">{p.subtitle}</div>}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-slate-700 dark:text-inherit">Open profile</div>
              <div className="text-primary-dark dark:text-inherit flex items-center gap-2 font-medium">
                Visit <FaExternalLinkAlt size={12} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
