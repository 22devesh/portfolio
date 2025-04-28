import React from 'react';
import { aboutMe } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {aboutMe}
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
              <div className="text-gray-700 dark:text-gray-300">Years Coding</div>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-700 dark:text-gray-300">Projects</div>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
              <div className="text-gray-700 dark:text-gray-300">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;