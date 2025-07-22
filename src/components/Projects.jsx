import React, { useState } from 'react';
import { FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import aws1 from '../assets/aws1.png'; 
import ecommerce from '../assets/ecommerce.jpg'; 
import mgnt  from '../assets/mgnt.jpg'; 
import systwm from '../assets/system.jpg'; 
import portpoliosau from '../assets/portpoliosau.webp'; 


const projects = [
   {
    id: 1,
    title: ' Inventory Management System',
    desc: 'An  Inventory Management System application built with Spring Boot and React.',
    technologies: ['Spring Boot','tailwindcss','lambok','mysql',],
    github: 'https://github.com/tannu1610/Inventry-Management-System',
    demo: 'https://github.com/tannu1610/Inventry-Management-System',
    image: mgnt,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - projectsPerPage : prevIndex - 1
    );
  };

  return (
    <section
      id="projects"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-20 px-4 sm:px-8 relative bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My <span className="text-red-600 dark:text-red-400">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Explore some of the key projects I’ve worked on.
        </p>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 z-10"
          >
            <FiChevronRight className="text-gray-700 dark:text-gray-200 rotate-180 text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 z-10"
          >
            <FiChevronRight className="text-gray-700 dark:text-gray-200 text-xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 dark:bg-red-800 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index * projectsPerPage
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;