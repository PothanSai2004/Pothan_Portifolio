// import React from 'react';
// import './NavbarFinal.css';

// const NavbarFinal = ({ data, isOpen, setIsOpen, scrolled }) => {
//     const toggleMenu = () => setIsOpen(!isOpen);

//     const navLinks = [
//         { name: 'Experience', href: '#experience' },
//         { name: 'Skills', href: '#skills' },
//         { name: 'Projects', href: '#projects' },
//         { name: 'Certifications', href: '#certifications' },
//         { name: 'Contact', href: '#contact' },
//     ];

//     const brandName = data?.intro?.name ? data.intro.name.split(' ')[0] : 'Portfolio';

//     return (
//         <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//             <div className="navbar-brand">
//                 {brandName}<span style={{ color: 'white' }}>.</span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="desktop-menu">
//                 {navLinks.map(link => (
//                     <a
//                         key={link.name}
//                         href={link.href}
//                         className="desktop-menu-link"
//                     >
//                         {link.name}
//                     </a>
//                 ))}
//             </div>

//             {/* Mobile Hamburger */}
//             <button
//                 className={`mobile-toggle ${isOpen ? 'open' : ''}`}
//                 onClick={toggleMenu}
//             >
//                 <span className="hamburger-line" />
//                 <span className="hamburger-line" />
//                 <span className="hamburger-line" />
//             </button>

//             {/* Mobile Menu */}
//             <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
//                 {navLinks.map(link => (
//                     <a
//                         key={link.name}
//                         href={link.href}
//                         onClick={() => setIsOpen(false)}
//                         className="mobile-menu-link"
//                     >
//                         {link.name}
//                     </a>
//                 ))}
//             </div>
//         </nav>
//     );
// };

// export default NavbarFinal;
// ===============================================================================
import React, { useState } from "react";
import "./NavbarFinal.css";

const NavbarFinal = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-inner">

        {/* Brand (responsive) */}
        <div className="nav-logo">
          <span className="nav-brand-desktop">Pothan Thummala.</span>
          <span className="nav-brand-mobile">Pothan.</span>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarFinal;
