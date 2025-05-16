import React from 'react';
import { motion } from 'framer-motion';


function About() {
  return (
    <section className="py-5 mt-5 min-vh-100">
      <div className="container">
        <motion.h2
          className="mb-4 text-3xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
        Versatile and detail-oriented Full Stack Developer with strong expertise in front-end development
        using React, HTML, CSS, and JavaScript, along with hands-on experience in backend development 
        using Node.js and Express. Proficient in a wide array of programming languages including C, C++,
        Java, PHP, and Python. Passionate about creating high-performance, user-friendly web applications. 
        Backed by a strong academic foundation in Software Quality Assurance and Computer Science.</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Graduate Certificate in Software Quality Assurance and Test Engineering</strong><br></br>Conestoga College, Canada
            <br></br>April 2022</li>
            <li><strong>Master of Technology in Computer Science(2018)</strong><br></br>Sri Guru Granth Sahib World University, Fatehgarh Sahib, Punjab, India
            <br></br>Oct 2018</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
