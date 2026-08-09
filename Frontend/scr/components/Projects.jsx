import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-eyebrow mb-3">// 03. projects</p>
      <h2 className="font-display font-700 text-3xl sm:text-4xl mb-12">
        Things I've built
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-surface p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div>
              <h3 className="font-display font-600 text-lg mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded-full bg-teal/10 text-teal dark:text-teal-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-black/70 dark:text-fog/70 mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex gap-4 font-mono text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-teal dark:hover:text-teal-soft transition-colors"
              >
                <FiGithub /> Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-teal dark:hover:text-teal-soft transition-colors"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
