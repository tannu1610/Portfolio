import React, { useRef } from 'react';
import { FiMessageSquare, FiMail, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kzxzca5',        
      'template_e42fepw',          
      form.current,
      {
        publicKey: '3XsAw1-kyLw_MuABL' 
      }
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again.');
      }
    );
  };



  return (
    <section
      data-aos="fade-up"
      data-aos-delay="250"
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Get In <span className="text-red-600 dark:text-red-400">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            I'd love to hear from you. Feel free to reach out!
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors"
        >
          <motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-2">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                id="name"
                name="from_name" 
                placeholder="Enter your name"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:border-transparent"
                required
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                name="reply_to" 
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:border-transparent"
                required
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-2">
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3">
                <FiMessageSquare className="text-gray-400 dark:text-gray-500" />
              </div>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:border-transparent"
                required
              />
            </div>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all"
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
          <p>
            Or email me directly at:{' '}
            <a
              href="mailto:saurabhmehta0050@gmail.com"
              className="text-gray-950 dark:text-white font-bold underline"
            >
              tannukumari161004@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;