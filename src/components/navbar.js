import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eSquaredLogo from '../assets/eSquaredLogo.png';
import './navbar.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={eSquaredLogo} alt="Logo" className="logo-image" />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu hidden md:flex items-center space-x-8 text-lg">
          {navItems.map((navItem) => (
            <li key={navItem.name}>
              <Link to={navItem.path} className="text-white hover:text-gray-400">
                {navItem.name}
              </Link>
            </li>
          ))}

          {/* Sign Up / Sign In Buttons */}
          <div className="auth-buttons">
            <Link to="/signup" className="btn-signup">Sign Up</Link>
            <Link to="/signin" className="btn-signin">Sign In</Link>
          </div>
        </div>

      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="nav-menu md:hidden p-4">
          {navItems.map((navItem) => (
            <div key={navItem.name} className="border-b border-gray-700">
              <Link
                to={navItem.path}
                className="block text-lg text-white hover:text-gray-400 px-4 py-2"
              >
                {navItem.name}
              </Link>
            </div>
          ))}

          {/* Mobile Sign Up / Sign In Buttons */}
          <div className="mobile-auth-buttons flex flex-col items-center mt-4">
            <Link to="/signup" className="btn-signup-mobile">Sign Up</Link>
            <Link to="/signin" className="btn-signin-mobile">Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





