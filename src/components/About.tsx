'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#0a192f]">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 text-white"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 mb-6"
            >
              Hello! My name is Mohit Shukla, and I'm a Full Stack Developer.
              My interest in Web Development started in 1st year when I first started learning HTML and CSS.
              I'm a Full Stack Developer with a passion for building web applications that are both functional and aesthetically pleasing.
              I'm a quick learner and I'm always looking to improve my skills.
              I'm a team player and I'm always looking to collaborate with others to create something great.
              I'm a problem solver and I'm always looking to find a solution to a problem.
              I'm a detail-oriented and I'm always looking to make my work perfect.
              I'm a self-motivated and I'm always looking to improve my skills.
              I'm a quick learner and I'm always looking to improve my skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400"
            >
              I've worked on projects so far. I'm specialized in skills or technologies and always eager to learn new technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6"
            >
              <h3 className="text-xl font-bold mb-4 text-white">Education & Experience</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>B.Tech CSE - Sage University Bhopal(2023–2027)</li>
                <li>12th - Bihar School Examination Board (2021–2023)</li>
                <li>10th - Bihar School Examination Board (2020–2021)</li>
              </ul>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative w-64 h-64 mx-auto group">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg transform rotate-12 transition-transform group-hover:rotate-6" />
              <div className="absolute inset-0 bg-[#0a192f] rounded-lg transform rotate-6 transition-transform group-hover:rotate-3" />
              <div className="relative rounded-lg overflow-hidden">
                <div className="w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                  <Image
                    src="/images/mohit.jpg"
                    alt="Mohit Shukla"
                    width={256}
                    height={256}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
