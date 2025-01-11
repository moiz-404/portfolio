import React, { useState } from 'react';

const Header = () => {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = () => {
    const email = 'kawsarv.design@gmail.com';
    navigator.clipboard.writeText(email).then(
      () => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(''), 2000); // Clear the message after 2 seconds
      },
      (err) => {
        console.error('Failed to copy text: ', err);
        setCopyStatus('Failed to copy');
        setTimeout(() => setCopyStatus(''), 2000);
      },
    );
  };

  return (
    <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4">
      {/* Left Section: Email and Buttons */}
      <div className="flex items-center space-x-6">
        <span className="text-neutralDark font-medium text-lg py-2">
          {'kawsarv.design@gmail.com'}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleCopy}
        >
          {copyStatus || 'Copy'}
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
          CV
        </button>
      </div>

      {/* Right Section: Menu Toggle for Mobile */}
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Navbar Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="#"
          className="text-neutralDark py-2 px-3 rounded hover:text-primary transition"
        >
          LinkedIn
        </a>
        <span>/</span>
        <a
          href="#"
          className="text-neutralDark py-2 px-3 rounded hover:text-primary transition"
        >
          Dribbble
        </a>
        <span>/</span>
        <a
          href="#"
          className="text-neutralDark py-2 px-3 rounded hover:text-primary transition"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Header;
