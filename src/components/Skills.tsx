import React from 'react';
import { skills } from '../data';

const Skills: React.FC = () => {
  // Group skills by category
  const skillsByCategory = {
    language: skills.filter(skill => skill.category === 'language'),
    framework: skills.filter(skill => skill.category === 'framework'),
    tool: skills.filter(skill => skill.category === 'tool'),
    soft: skills.filter(skill => skill.category === 'soft'),
  };

  const categories = [
    { id: 'language', label: 'Languages' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'tool', label: 'Tools & Platforms' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map(category => (
            <div key={category.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.label}
              </h3>
              <div className="space-y-4">
                {skillsByCategory[category.id as keyof typeof skillsByCategory].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;