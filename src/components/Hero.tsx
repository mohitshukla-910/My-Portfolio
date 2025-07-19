'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#0a192f]">
      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-cyan-500 text-lg font-medium mb-4">
                Hello, I'm Mohit Shukla
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                I'm a Full Stack Developer
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-4xl text-gray-400 font-bold mb-8">
                I'm a Full Stack Developer
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                I'm a Full Stack Developer who is passionate about creating better digital experiences.
                Currently, I'm focused on building accessible and user-friendly products.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="inline-block bg-transparent hover:bg-cyan-500 text-cyan-500 hover:text-white border border-cyan-500 px-8 py-3 rounded transition-colors duration-300"
              >
                View My Work!
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-cyan-500">
                <Image
                  src="/images/mohit.jpg"
                  alt="Mohit Shukla"
                  width={256}
                  height={256}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero 