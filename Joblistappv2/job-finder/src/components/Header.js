import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/">
          <img src="logo.png" alt="Jobs-in-ee-logo" />
        </Link>
        <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i> 
        </button>
      </nav>
    </header>
  );
};

export default Header;
