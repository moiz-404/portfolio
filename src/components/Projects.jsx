import React, { useState } from 'react';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const projects = [
    {
      date: "2023-10-11",
      title: "Project One: Web Application Development",
      description: "A comprehensive web app built using React and Node.js.",
      imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      projectUrl: "/projects/project1"
    },
    {
      date: "2023-09-25",
      title: "Project Two: E-Commerce Platform",
      description: "An advanced e-commerce platform with custom features and integrations.",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
      projectUrl: "/projects/project2"
    },
    {
      date: "2023-09-24",
      title: "Project Three: Data Analysis Dashboard",
      description: "A data visualization dashboard built with Python and React.",
      imageUrl: "https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bMUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      projectUrl: "/projects/project3"
    },
    {
      date: "2023-10-11",
      title: "Project One: Web Application Development",
      description: "A comprehensive web app built using React and Node.js.",
      imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      projectUrl: "/projects/project1"
    },
    {
      date: "2023-09-25",
      title: "Project Two: E-Commerce Platform",
      description: "An advanced e-commerce platform with custom features and integrations.",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
      projectUrl: "/projects/project2"
    },
    {
      date: "2023-09-24",
      title: "Project Three: Data Analysis Dashboard",
      description: "A data visualization dashboard built with Python and React.",
      imageUrl: "https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bMUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      projectUrl: "/projects/project3"
    },
    {
      date: "2023-08-15",
      title: "Project Four: Mobile App for Fitness Tracking",
      description: "A mobile app for tracking fitness goals, workouts, and progress.",
      imageUrl: "https://images.unsplash.com/photo-1596431461353-812c18a04785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmaXRuZXNzfGVufDB8fHx8fDE3MTI3NTMxMjQw&ixlib=rb-4.0.3&q=80&w=1080",
      projectUrl: "/projects/project4"
    }
  ];

  const loadMoreProjects = () => {
    if (visibleProjects + 3 <= projects.length) {
      setVisibleProjects(prev => prev + 3); // Show 3 more projects
    } else {
      setVisibleProjects(projects.length); // Show all projects
      setIsExpanded(true); // Mark as expanded
    }
  };

  const hideProjects = () => {
    setVisibleProjects(6); // Reset to show only the first 6 projects
    setIsExpanded(false); // Mark as not expanded
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-purple-800">
            My Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-700">
            Discover some of the exciting projects I’ve worked on. Each project demonstrates my skills and expertise in various domains.
          </p>
        </div>

        <div className="max-h-[70vh] overflow-y-auto scrollbar-hide mt-8">
          <div className="grid max-w-2xl auto-rows-fr gap-8 sm:mt-12 lg:mx-0 lg:max-w-none 
            xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div key={index} className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden relative group transition-transform transform hover:scale-105">
                <div
                  className="w-full h-40 bg-cover bg-center absolute top-0 left-0 opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                ></div>

                <div className="relative z-10 p-4 space-y-4">
                  <div className="text-xs font-semibold text-gray-600">{project.date}</div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h2>

                  <p className="text-base text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>

                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          {!isExpanded ? (
            <button
              onClick={loadMoreProjects}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={hideProjects}
              className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
