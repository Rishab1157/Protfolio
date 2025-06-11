import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode, currentPage, changePage }) => {
  return (
    <nav className={darkMode ? 'dark' : ''}>
      <div className="nav-left">
        <h1 className="nav-logo">Rishab Sharma</h1>
      </div>
      <ul className="nav-links">
        <li
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => changePage('home')}
        >
          Home
        </li>
        <li
          className={currentPage === 'about' ? 'active' : ''}
          onClick={() => changePage('about')}
        >
          About
        </li>
        <li
          className={currentPage === 'projects' ? 'active' : ''}
          onClick={() => changePage('projects')}
        >
          Projects
        </li>
        <li
          className={currentPage === 'contact' ? 'active' : ''}
          onClick={() => changePage('contact')}
        >
          Contact
        </li>
      </ul>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
