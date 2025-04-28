import React from 'react';
import { socialLinks } from '../data';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">Devesh Singhal</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Aspiring Software Developer | Java, MERN Stack Enthusiast
            </h2>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/public/Devesh cv.pdf"

                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg shadow-md hover:shadow-lg border border-blue-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full ring-4 ring-blue-500 dark:ring-blue-400 shadow-xl overflow-hidden">
              <img
                src="/profil.jpg"
                alt="Devesh Singhal"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-blue-600 dark:bg-blue-500 opacity-10 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-blue-500 dark:bg-blue-400 opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-blue-400 dark:bg-blue-300 opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
