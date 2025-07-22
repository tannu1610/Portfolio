import { Section } from 'lucide-react'
import React from 'react'
import java from '../assets/java1.png'
import C from '../assets/C.png'
import CPP from '../assets/CPP.png'
import spring from '../assets/spring.png'
import aws from '../assets/aws.png'
import Bootstrap from '../assets/Bootstrap.png'
import css from '../assets/css.png'
import tailwindcss from '../assets/tailwindcss.png'
import html from '../assets/html.png'
import Script from '../assets/Script.png'
import react from '../assets/react.png'
import mysql from '../assets/mysql.png'
import oracle from '../assets/oracle.png'
import { h3 } from 'framer-motion/client'
//import docker from '../assets/docker.png'
//import kubernetes from '../assets/kubernetes.png'
//import microservices from '../assets/microservices.png'
//import api1 from '../assets/api1.png'
//import rest from '../assets/rest.png'

const skills = [
    { img: java, name: 'java' , desc:'Java is a widely-used programming language for coding web applications' },
    { img: C, name: 'C', desc: 'The C programming language is a procedural and general-purpose language that provides low-level access to system memory' },
    { img: CPP, name: 'C++', desc: 'C++ is a powerful programming language, often used to create high-performance applications and software, especially in game development and systems programming' },
    { img: spring, name: 'Spring Boot', desc: 'Spring Boot is a framework that makes it easier to create and run Java applications, particularly web applications and microservices.' },
    { img: Bootstrap, name: 'Bootstrap', desc: 'Bootstrap is a powerful, open-source front-end framework used to design responsive and mobile-first websites using pre-built HTML, CSS, and JavaScript components.' },
    { img: html, name: 'HTML', desc: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
    { img: css, name: 'CSS', desc: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML' },
    { img: tailwindcss, name: 'TailwindCSS', desc: 'Tailwind CSS is an open-source framework used to style your website in HTML without external CSS' },
    { img: Script, name: 'React', desc: 'React is a JavaScript-based UI development library.' },
    { img: react, name: 'JavaScript', desc: 'JavaScript is a programming language that makes websites interactive and dynamic.' },
    { img: mysql, name: 'MYSQL Database', desc: 'MySQL is an open source relational database management system (RDBMS) that used to store and manage data.' },
    { img: oracle, name: 'ORACLE Database', desc: 'An Oracle Database is a collection of data organized by type with relationships being maintained between the different types.' },
   // { img: docker, name: 'Docker', desc: 'Docker is an open-source platform that enables developers to build, deploy, run, update and manage containers.' },
    //{ img: kubernetes, name: 'Kubernetes', desc: 'Kubernetes, often called K8s, is a system that manages and orchestrates your applications, especially those running in containers.' },
    //{ img: microservices, name: 'Microservices', desc: 'Microservices allow a large application to be separated into smaller independent parts, with each part having its own realm of responsibility.' },
    //{ img: api1, name: 'API', desc: 'API (Application Programming Interface) is a set of rules and tools that allows different software applications to communicate and exchange data.' },
    //{ img: rest, name: 'C', rest: 'lorem ipsum dolor sit' }
]

const Skills = () => {
  return (
 <section
  id="skills"
  data-aos="fade-up"
  data-aos-delay="250"
  className="w-full py-20 bg-gradient-to-b from-gray-200/10 to-white relative dark:from-gray-800 dark:to-gray-900"
>
  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm dark:bg-gray-800/50 z-0"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16 group">
      <h2 className="text-4xl font-bold text-red-600 inline-block relative pb-2 dark:text-red-400 tracking-wide">
        MY SKILLS
        <span className="absolute bottom-0 left-0 h-1 bg-red-400 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
        Technologies I've learned through experience
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          data-aos-delay={`${index * 100}`}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const light = e.currentTarget.querySelector('.light');
            if (light) {
              light.style.left = `${x}px`;
              light.style.top = `${y}px`;
            }
          }}
          className="relative group flex flex-col items-center p-6 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl border border-white/20 dark:bg-gray-800/80 dark:border-gray-700/50 transition-all duration-300 overflow-hidden hover:scale-[1.05]"
        >
       {/* Sunlight Glow Layer */}
<div className="light absolute w-40 h-40 bg-yellow-300/30 rounded-full pointer-events-none blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 z-0"></div>


          {/* Icon */}
          <div className="mb-4 p-4 bg-white/80 rounded-2xl shadow-md transform group-hover:rotate-6 group-hover:bg-red-50 dark:bg-gray-700/80 transition-all duration-500 z-10">
            <img
              src={skill.img}
              alt={`${skill.name} Icon`}
              className="w-14 h-14 object-contain grayscale-[30%] group-hover:grayscale-0 group-hover:scale-125 transition-transform duration-300"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-1 dark:text-gray-200 group-hover:text-red-500 transition-colors duration-300 tracking-wide uppercase z-10">
            {skill.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 text-center dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-all duration-300 px-2 z-10">
            {skill.desc}
          </p>

          {/* Border highlight */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-red-300/40 transition-all duration-500 pointer-events-none z-10"></div>
        </div>
      ))}
    </div>
  </div>
</section>




  )
}

export default Skills;