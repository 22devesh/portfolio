import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning is essential in tech. Here are some certifications I've earned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
              </div>
              
              <div className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                <span className="font-medium">Issuer: </span>
                {cert.issuer}
              </div>
              
              <div className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                <span className="font-medium">Date: </span>
                {cert.date}
              </div>
              
              <div className="mt-auto">
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm"
                  >
                    View Credential
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;