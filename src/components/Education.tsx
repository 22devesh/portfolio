import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 ml-6 pl-8 pb-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`mb-10 ${index === education.length - 1 ? '' : ''}`}
              >
                <div className="absolute -left-6 mt-2">
                  <div className="bg-blue-600 dark:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  
                  {edu.institution && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-medium">Institution: </span>
                      {edu.institution}
                    </p>
                  )}
                  
                  {edu.duration && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-medium">Duration: </span>
                      {edu.duration}
                    </p>
                  )}
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Score: </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.score}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;