// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white">Description</Link></li>
                    <li><Link to="/vision" className="text-white">Vision</Link></li>
                    <li><Link to="/mission" className="text-white">Mission</Link></li>
                    <li><Link to="/valeurs" className="text-white">Valeurs</Link></li>
                    <li><Link to="/programme" className="text-white">Programme</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
