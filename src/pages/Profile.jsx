import React, { useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import dp from '../assets/moizahmed.jpg';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('About');

  const tabs = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <div className="max-h-full overflow-y-auto">
        {/* Header Section */}
        <section className="bg-[#F9F9F9] text-gray-900 py-4 shadow-md border-b-2 border-dashed">
          <Header />
        </section>

        {/* Main Layout */}
        <div className="bg-[#F9F9F9] min-h-screen flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="flex-[1_1_25%] py-10 px-6 min-h-screen bg-[#F9F9F9]">
            {/* Profile Section */}
            <div className="overflow-hidden rounded-lg mb-6 relative">
              <img
                className="size-72 object-cover rounded-lg mx-auto" // Adjusted class
                src={dp}
                alt="Profile"
              />
            </div>
            <div className="p-5 text-left">
              <a href="#" className="block">
                <h4 className="text-3xl font-bold text-gray-900 tracking-tight hover:text-blue-500 transition-all duration-300">
                  Moiz Ahmed
                </h4>
              </a>
              <h6 className="text-lg font-medium text-gray-600 mt-2 italic tracking-wide">
                MERN Stack Developer
              </h6>
            </div>

            <div className="flex-grow border-b-2 border-dashed border-bg-[#F9F9F9]"></div>
            {/* Navigation */}
            <nav className='p-4'>
              <ul className="space-y-4 mt-6">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={`group cursor-pointer flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-500 to-purple-800 text-white'
                        : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span
                      className={`text-lg font-medium tracking-wide transition-all duration-300 ${
                        activeTab === tab
                          ? 'text-white'
                          : 'group-hover:text-blue-500'
                      }`}
                    >
                      {tab}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content Section */}
          <div className="w-full flex-[1_1_65%] md:w-3/4 p-8 md:ml-6 bg-[#F9F9F9]">
            {activeTab === 'About' && <About />}
            {activeTab === 'Skills' && <Skills />}
            {activeTab === 'Projects' && <Projects />}
            {activeTab === 'Contact' && <Contact />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
