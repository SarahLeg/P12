import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className='navbar_content'>
        <Link to="/" className='navbar_content_about' ><li>À propos de moi</li></Link>
        <Link to="/skills" className='navbar_content_skills' ><li>Mes compétences</li></Link>
        <Link to="/projects" className='navbar_content_projects' ><li>Mes projets</li></Link>
        <Link to="/contact" className='navbar_content_contact' ><li>Me contacter</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;