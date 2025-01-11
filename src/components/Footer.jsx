import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-2 border-t text-gray-800 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto py-5 px-3">
        {/* Left Section: Copyright */}
        <div>© 2020. All Rights Reserved.</div>

        {/* Right Section: Social Media Links */}
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-800">
            LinkedIn
          </a>
          <span>/</span>
          <a href="#" className="hover:text-gray-800">
            Dribbble
          </a>
          <span>/</span>
          <a href="#" className="hover:text-gray-800">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
