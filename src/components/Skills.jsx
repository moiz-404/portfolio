import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaCloud,
  FaDatabase,
} from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Firebase', icon: <FaCloud className="text-yellow-400" /> }, // Using yellow for Firebase
  { name: 'MongoDB', icon: <FaDatabase className="text-green-700" /> },
  { name: 'PostgreSQL', icon: <FaDatabase className="text-blue-700" /> },
];

const Skills = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-800 leading-tight mb-6">
          My Skills
        </h1>
        <p className="text-lg text-neutralDark mx-auto mb-12">
          I have a strong technical foundation in building modern web
          applications. 
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-center mb-6">
            <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md w-full h-28 flex-grow">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-lg text-gray-900">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
