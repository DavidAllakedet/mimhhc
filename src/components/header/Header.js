// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div>
                
            </div>
            <nav>
            <img src="/logo.png" width="100px" height="100px" alt="Logo" />
                <ul>
                    <li><Link to="/">Description</Link></li>
                    <li><Link to="/vision">Vision</Link></li>
                    <li><Link to="/mission">Mission</Link></li>
                    <li><Link to="/valeurs">Valeurs</Link></li>
                    <li><Link to="/programme">Programme</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
