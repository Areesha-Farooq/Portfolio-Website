import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="section-eyebrow mb-3">// 01. about</p>
        <h2 className="font-display font-700 text-3xl sm:text-4xl mb-6">
          A little about me
        </h2>
        <p className="text-black/70 dark:text-fog/70 leading-relaxed">
          I'm a 2nd year Computer Science student based in Lahore, Pakistan,
          passionate about web development and building things that live on
          the internet. I enjoy the logic of C++ as much as the instant
          feedback of a browser refresh, and I'm currently deepening my
          skills in React and Node.js to become a well-rounded full stack
          developer. When I'm not debugging, I'm probably reading about the
          next tool I want to learn.
        </p>
      </motion.div>
    </section>
  );
}
