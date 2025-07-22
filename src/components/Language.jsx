import React from 'react';

const language = [
  { name: 'English', level: 'Native', proficiency: 70 },
  { name: 'Hindi', level: 'Native', proficiency: 95 },
];

const Language = () => {
  return (
    <section
      id="languages"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-16 px-4 sm:px-8 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 max-w-xl mx-auto px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Language <span className="text-red-600 dark:text-red-400">Proficiency</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            I possess strong communication skills in both English and Hindi, enabling me to collaborate effectively in diverse teams.
            My ability to understand and convey technical concepts clearly helps in efficient teamwork and project execution.
            I continuously work on improving my language skills to adapt in both professional and academic environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {language.map((lang, idx) => (
            <div
              key={idx}
              className="
                bg-gray-50 dark:bg-gray-800 p-5 sm:p-7 rounded-2xl shadow-md border border-transparent
                dark:border-gray-700
                transition-shadow transition-transform duration-300 ease-in-out transform
                hover:scale-105 hover:shadow-[0_10px_30px_rgba(239,68,68,0.5)] dark:hover:shadow-[0_10px_30px_rgba(248,113,113,0.6)]
                cursor-pointer
                will-change-transform
                "
              aria-label={`Language proficiency in ${lang.name}`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {lang.name}
                </h3>
                <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                  {lang.level}
                </span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 sm:h-3">
                <div
                  className="bg-red-500 dark:bg-red-600 h-2.5 sm:h-3 rounded-full transition-all duration-500"
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>

              <div className="flex justify-end mt-2">
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {lang.proficiency}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Language;
