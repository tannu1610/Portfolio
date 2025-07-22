import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gray-200/85 dark:bg-gray-900 text-black dark:text-white py-8 relative'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-sm'>
                        &copy; {currentYear} Tannu. All rights reserved. 🚀
                    </p>

                    <div className='flex space-x-4 mt-4 md:mt-0'>
                      <a
  href='https://github.com/tannu1610'
  target='_blank'
  rel='noopener noreferrer'
  className='text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
  aria-label='Github'
>
  <FaGithub size={20} />
</a>

                        <a href='https://www.linkedin.com/in/tannu-kumari-7563a824b' target='_blank' rel='noopener noreferrer'
                            className='text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
                            aria-label='LinkedIn'>
                            <FaLinkedin size={20} />
                        </a>
                        <a href='#' target='_blank' rel='noopener noreferrer'
                            className='text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
                            aria-label='Twitter'>
                            <FaTwitter size={20} />
                        </a>
                     <a
  href='mailto:tannukumari161004@gmail.com'
  target='_blank'
  rel='noopener noreferrer'
  className='text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
  aria-label='Email'
>
  <FaEnvelope size={20} />
</a>

                    </div>
                </div>

                <div className='mt-4'>
                    <ul className='flex space-x-4 text-sm items-center'>
                        <li>
                            <a href='#skills' className='text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors duration-300'>
                                🛠️ My Skills
                            </a>
                        </li>
                        <li>😄</li>
                        <li>
                            <a href='#projects' className='text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors duration-300'>
                                💡 My Projects
                            </a>
                        </li>
                        <li>❤️</li>
                        <li>🌸</li>
                        <li>
                            <a href='#contact' className='text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors duration-300'>
                                📞 Contact
                            </a>
                        </li>
                        <li>
                        <a
                      href="#contact"
                    className="text-pink-600 dark:text-yellow-300 hover:text-red-700 dark:hover:text-white font-semibold italic tracking-wide transition-colors duration-300"
                      >
                 🔔 Radhey Radhey
                   </a>
                   </li>

                        <li>🙏</li>
                        <li>👍</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;