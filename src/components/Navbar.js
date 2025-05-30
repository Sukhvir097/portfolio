import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>Sukhvir Singh</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={closeNavbar}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={closeNavbar}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

