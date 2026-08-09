import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// The backend URL is read from an env var so it's easy to point at
// localhost while developing and at your deployed API in production.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setShowPopup(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-eyebrow mb-3">// 04. contact</p>
      <h2 className="font-display font-700 text-3xl sm:text-4xl mb-4">
        Let's work together
      </h2>
      <p className="text-black/70 dark:text-fog/70 mb-10 max-w-lg">
        Have an internship opening, a project, or just want to say hi? My
        inbox is open.
      </p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="card-surface p-6 max-w-xl space-y-5"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-2.5 rounded-lg bg-paper dark:bg-midnight border border-black/10 dark:border-white/10 focus:border-teal outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-lg bg-paper dark:bg-midnight border border-black/10 dark:border-white/10 focus:border-teal outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a bit about the opportunity..."
            className="w-full px-4 py-2.5 rounded-lg bg-paper dark:bg-midnight border border-black/10 dark:border-white/10 focus:border-teal outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-3 rounded-xl bg-teal text-white font-medium hover:bg-teal-soft transition-colors disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'error' && (
          <p className="text-sm text-red-500">
            Something went wrong. Please check that the backend server is
            running and try again.
          </p>
        )}
      </motion.form>

      {/* "Message Sent" popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 right-6 bg-teal text-white px-5 py-3 rounded-xl shadow-lg font-medium z-50"
          >
            ✅ Message Sent! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
