// src/components/Hero.jsx
import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import Leetcode from '../assets/leetcode.png';
import whatsapp from '../assets/whatsapp.png';
import tannuimg from '../assets/tannuimg.png';
import tania1 from '../assets/tania1.png';
import DynamicName from './DynamicName'; // 👈 Import here

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex-col dark:bg-gray-900 dark:text-gray-100">
{/* <div className="absolute mid-h-[420px] md:w-[340px] h-[660px] w-[580px] right-56 
        bg-gradient-to-r from-red-600 via-blue-600 to-green-400 rounded-full transform rotate-12 
        top-8 shadow-[0_0_100px_rgba(255,165,0,0.7)] z-0 dark:bg-gradient-to-r dark:from-red-400 dark:via-blue-400 dark:to-green-300 dark:shadow-[0_0_100px_rgba(255,165,0,0.5)]"
        aria-hidden="true">
      </div> */}

<div className="absolute mid-h-[420px] md:w-[340px] h-[660px] w-[580px] right-56 
  bg-gradient-to-r from-red-600 via-blue-600 to-green-400 rounded-full transform rotate-12 
  top-8 shadow-[0_0_250px_80px_rgba(255,200,0,0.4)] z-0 
  blur-sm opacity-95
  dark:bg-gradient-to-r dark:from-red-400 dark:via-blue-400 dark:to-green-300 
  dark:shadow-[0_0_200px_60px_rgba(255,165,0,0.3)]"
  aria-hidden="true">
</div>



      <section data-aos="fade-up" data-aos-delay="250" className="body-font relative z-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col 
            md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

            {/* Social Links */}
            <div data-aos="fade-up" data-aos-delay="400" className="flex space-x-4 md-2" aria-label="Social media links">
              <a href="https://www.linkedin.com/in/tannu-kumari-7563a824b" aria-label="linkedin">
                <img src={linkedin} alt="linkedin" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
           
             
              <a href="https://leetcode.com/u/TannuSingh_16/" aria-label="Leetcode">
                <img src={Leetcode} alt="Leetcode" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>

              <a href="https://wa.me/9176678 00991" aria-label="whatsapp">
                <img src={whatsapp} alt="whatsapp" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
             
              <a href="https://github.com/tannu1610" aria-label="github">
                <img src={github} alt="github" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Dynamic Heading */}
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900 dark:text-white">
              Hi! I'm <DynamicName />
            </h1>

            <h2 className="sm:text-3xl mb-4 font-bold text-blue-950 dark:text-blue-300">
              Software Engineering Student
            </h2>

            <p className="mb-8 leading-relaxed text-black dark:text-gray-300 max-w-lg">
             I am a highly motivated and results-driven Computer Science student eager to contribute to a dynamic corporate environment. With a strong foundation in technical skills, effective communication, and analytical thinking, I am seeking an opportunity to apply my knowledge to real-world challenges. My goal is to drive value to the organization while gaining practical experience that fosters both personal and professional growth.
            </p>

            <div className="flex justify-center">
              <a
                href="/tannu.resume.pdf"
                download="tannu.resume.pdf"
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6
                focus:outline-none hover:bg-red-700 rounded-full text-lg
                hover:shadow-[0_0_20px_rgba(255,100,0,0.5)] transition-all
                dark:bg-red-600 dark:hover:bg-red-500"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div data-aos="fade-left" data-aos-delay="500" className="relative z-20 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={tannuimg}
              alt="profile"
              className="object-cover object-top rounded-full w-80 h-80
              border-4 border-white shadow-xl dark:border-gray-700"
              width={320}
              height={320}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
