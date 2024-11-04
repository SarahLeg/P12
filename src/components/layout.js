import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className='main'>
        <div>
            <header className='header'>
                <h1>Sarah Legrand - Portfolio</h1>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer className='footer'>
                <p>&copy; 2024 Mon Portfolio</p>
                <ul>
                    <li><a href="https://linkedin.com/in/votreprofil">LinkedIn</a></li>
                    <li><a href="https://github.com/votreprofil">GitHub</a></li>
                    <li><a href="https://github.com/votreprofil">Télécharger mon CV</a></li>
                </ul>
            </footer>
        </div>
    </div>
  );
};

export default Layout;