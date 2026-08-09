import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-eyebrow mb-3">// 02. skills</p>
      <h2 className="font-display font-700 text-3xl sm:text-4xl mb-12">
        What I work with
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="card-surface p-6"
          >
            <h3 className="font-display font-600 mb-5">{group.title}</h3>
            <div className="space-y-5">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <Icon className="text-teal dark:text-teal-soft" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-black/50 dark:text-fog/50">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-teal dark:bg-teal-soft"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
