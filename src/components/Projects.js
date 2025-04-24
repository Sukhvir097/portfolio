import React from 'react';
import { motion } from 'framer-motion';
import portfolioImage from '../assets/portfolio-thumbnail.png';

function Projects() {
  // Example project data
  const projects = [
    // {
    //   name: "React Todo App",
    //   description: "A simple to-do list app with add, delete, and filter functionality.",
    //   image: "https://via.placeholder.com/300x150",
    //   demoLink: "https://your-demo-link.com",
    //   githubLink: "https://github.com/your-username/todo-app",
    // },
    {
      name: "Personal Portfolio",
      description: "A clean and responsive personal portfolio built with React and Bootstrap.",
      image: portfolioImage,
      demoLink: "https://sukhvir097.github.io/portfolio/",
      githubLink: "https://github.com/Sukhvir097/portfolio.git",
    },
    // {
    //   name: "Weather App",
    //   description: "A weather app that fetches data from an API and shows current weather details.",
    //   image: "https://via.placeholder.com/300x150",
    //   demoLink: "https://your-demo-link.com",
    //   githubLink: "https://github.com/your-username/weather-app",
    // }
  ];

  return (
    <section className="py-5 my-5">
      <div className="container">
        <motion.h2
          className="mb-4 text-3xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4">
                <img src={project.image} className="card-img-top" alt={project.name} />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.demoLink} className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.githubLink} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
