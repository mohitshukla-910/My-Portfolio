'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'Fitness Maintainer',
      description: 'A fitness maintainer is a website that helps you maintain your fitness goals. It is a web application that allows you to track your fitness goals and progress.',
      image: '/images/fitness.jpg',
      tech: ['Html', 'CSS', 'JavaScript'],
    
    },
    {
      title: 'Couture Camp',
      description: 'A website for a University Uniforms brand that allows you to buy and sell Uniforms.',
      image: '/images/couture.jpg',
      tech: ['Html', 'CSS', 'JavaScript'],
     
    },
    {
      title: 'Medisync  ',
      description: 'A website for the help to the patients to get the best treatment and advise for their diseases.',
      image: '/images/medisync.jpg',
      tech: ['Html', 'CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com'
    }
  ]

  return (
    <div className="min-h-screen flex items-center bg-[#0a192f]">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Some Things I've Built</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] rounded-lg overflow-hidden group"
              >
                <div className="relative h-48 bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-500">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-[#233554] text-cyan-500 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-500 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-500 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects 