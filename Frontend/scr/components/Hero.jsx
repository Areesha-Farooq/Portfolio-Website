import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/profile.jpg"
            alt="Areesha Farooq"
            className="w-20 h-20 rounded-full object-cover border-2 border-teal mb-6"
          />
          <p className="section-eyebrow mb-4">// hello world</p>
          <h1 className="font-display font-700 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Hi, I'm{' '}
            <span className="text-teal dark:text-teal-soft">
              Areesha Farooq
            </span>
          </h1>
          <p className="text-lg text-black/70 dark:text-fog/70 mb-8 max-w-md">
            A CS student in Lahore learning to build full stack products —
            one line of code, one bug, one deploy at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-teal text-white font-medium hover:bg-teal-soft transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-black/10 dark:border-white/20 font-medium hover:border-teal hover:text-teal transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Signature element: a mock code editor card introducing her as an object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card-surface p-6 font-mono text-sm leading-7 overflow-hidden"
        >
          <div className="flex gap-1.5 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber" />
            <span className="w-3 h-3 rounded-full bg-teal" />
          </div>
          <p>
            <span className="text-amber">const</span>{' '}
            <span className="text-teal dark:text-teal-soft">developer</span> ={' '}
            {'{'}
          </p>
          <p className="pl-4">name: <span className="text-teal-soft">'Areesha Farooq'</span>,</p>
          <p className="pl-4">role: <span className="text-teal-soft">'Aspiring Full Stack Dev'</span>,</p>
          <p className="pl-4">
            skills: [<span className="text-teal-soft">'C++'</span>,{' '}
            <span className="text-teal-soft">'React'</span>,{' '}
            <span className="text-teal-soft">'Node.js'</span>],
          </p>
          <p className="pl-4">location: <span className="text-teal-soft">'Lahore, Pakistan'</span>,</p>
          <p className="pl-4">
            available:{' '}
            <span className="text-amber">true</span>
            <span className="animate-blink">_</span>
          </p>
          <p>{'}'};</p>
        </motion.div>
      </div>
    </section>
  );
}
