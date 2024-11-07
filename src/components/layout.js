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
                <ul>
                    <li><a href="www.linkedin.com/in/sarah-legrand06">Lien vers mon LinkedIn</a></li>
                    <li><a href="https://github.com/SarahLeg">Lien vers ma page Github</a></li>
                </ul>
            </footer>
        </div>
    </div>
  );
};

export default Layout;