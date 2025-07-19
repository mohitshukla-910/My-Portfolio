'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Message sent!');
    } else {
      alert('Failed to send message.');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen flex items-center bg-[#0a192f]">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center text-gray-400"
          >
            <p>You can also reach me at:</p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="mailto:mohitshukla9102@gmail.com"
                className="hover:text-cyan-500 transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/mohit-shukla-aabb76291/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mohitshukla-910"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 