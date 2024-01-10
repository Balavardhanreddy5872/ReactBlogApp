import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/get-blog" className="navbar-link">All Blog</Link></li>
        <li className="navbar-item"><Link to="/get-balance" className="navbar-link">Get Blog details</Link></li>
        <li className="navbar-item"><Link to="/delete-account" className="navbar-link">delete Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



