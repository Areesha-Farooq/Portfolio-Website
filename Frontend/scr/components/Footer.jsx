import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/areesha-farooq', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/areesha-farooq', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:areesha.farooq@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-sm text-black/50 dark:text-fog/50">
          © {new Date().getFullYear()} Areesha Farooq. Built with React & Tailwind.
        </p>
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full card-surface hover:text-teal dark:hover:text-teal-soft hover:-translate-y-0.5 transition-all"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
