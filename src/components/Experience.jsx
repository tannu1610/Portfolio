import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

import rgpv from '../assets/rgpv.jpg'
import pol from '../assets/pol.jpg'

const experience = [
  {
    id: '1',
    role: 'Software Engineer',
    company: 'College Student',
    period: '2K23 - Present',
    desc: 'Develope Website using SpringBoot',
    icon: <FaBriefcase className="text-blue-500 text-2xl dark:text-blue-400" />,
    type: 'Fresher',
  },
  {
    id: '2',
    role: 'Database Administrator',
    company: 'College Student',
    period: '2K23 - Present',
    desc: 'A Database Administrator (DBA) ensures an organization database systems operate efficiently, securely, and reliably, by maintaining, securing, and optimizing databases.',
    icon: <FaBriefcase className="text-green-500 text-2xl dark:text-green-400" />,
    type: 'fresher',
  },
 {
  id: '3',
  role: 'B.Tech Computer Science Engineering',
  company: 'RGPV (Bhopal)',
  period: '2K23 - 2K26',
  desc: 'Computer Science Engineering Student.',
  icon: (
    <div className="flex items-center space-x-2">
      <FaGraduationCap className="text-red-500 text-2xl dark:text-red-400" />
      <img
        src={rgpv}
        alt="RGPV Logo"
        className="w-15 h-12 rounded-full object-contain"
      />
    </div>
  ),
  type: 'education',
},
 {
  id: '4',
  role: 'Diploma of Education, Computer Engineering',
  company: 'Government Polytechnic, Kharsawan',
  period: '2K20 - 2K23',
  desc: 'Computer Science Engineering.',
  icon: (
    <div className="flex items-center space-x-2">
      <FaGraduationCap className="text-red-500 text-2xl dark:text-red-400" />
      <img
        src={pol}
        alt="pol Logo"
        className="w-15 h-12 rounded-full object-contain"
      />
    </div>
  ),
  type: 'education',
}



];
export const Experience = () => {
  return (
    <section
      id="experience"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-20 px-4 sm:px-8 bg-gray-50/40 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Professional <span className="text-red-600 dark:text-red-400">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My career path and educational background
          </p>
        </div>

        {/* Center line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-red-300 via-pink-400 to-red-500 dark:from-red-400 dark:via-pink-600 dark:to-red-700"></div>

        <div className="space-y-12 relative">
          {experience.map((ex, idx) => (
            <div
              key={ex.id}
              className={`flex flex-col sm:flex-row ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              } items-center sm:items-start group transition-transform duration-300`}
            >
              <div className="sm:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-xl border border-red-300 dark:border-red-500 shadow-lg group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-300 ease-in-out hover:border-pink-400 dark:hover:border-pink-500">
                <div className="flex items-center mb-4">
                  <div className="min-w-[2rem]">
                    {ex.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {ex.role}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{ex.company}</p>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 italic mb-2">{ex.period}</p>
                <p className="text-gray-700 dark:text-gray-200">{ex.desc}</p>

                <span
                  className={`mt-4 inline-block px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                    ex.type === 'work' || ex.type === 'Fresher' || ex.type === 'fresher'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
                  }`}
                >
                  {ex.type === 'work' || ex.type === 'Fresher' || ex.type === 'fresher'
                    ? 'Work Experience'
                    : 'Education'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


