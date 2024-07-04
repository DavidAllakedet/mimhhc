// src/components/Footer.js
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Nom de l'Entreprise</h3>
                <p>123 Rue de l'Exemple, Ville, Pays</p>
                <p>Téléphone: +123 456 789</p>
                <div className="social-links">
                    <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Nom de l'Entreprise. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
