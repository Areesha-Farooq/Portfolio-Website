import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext.jsx';

const links = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-paper/70 dark:bg-midnight/70 border-b border-black/5 dark:border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display font-semibold text-lg">
          Areesha<span className="text-teal">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-teal dark:hover:text-teal-soft transition-colors"
              >
                {`0${i + 1}`}
                <span className="text-black/30 dark:text-white/30">.</span>{' '}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="p-2 rounded-full card-surface hover:scale-105 transition-transform"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="md:hidden p-2 rounded-full card-surface"
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm"
        >
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-teal dark:hover:text-teal-soft"
              >
                {`0${i + 1}`}. {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
