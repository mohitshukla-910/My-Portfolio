'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
   
    { name: 'Java', level: 65 },
    { name: 'Python', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'JavaScript', level: 65 },
    { name: 'HTML', level: 95 },
    { name: ' CSS', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'Github', level: 85 },
 
  ]

  return (
    <div className="min-h-screen flex items-center bg-[#0a192f]">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] p-6 rounded-lg hover:bg-[#233554] transition-colors"
              >
                <div className="text-lg font-medium mb-2">{skill.name}</div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="bg-cyan-500 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills 