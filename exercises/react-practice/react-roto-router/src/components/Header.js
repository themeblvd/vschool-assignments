import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const path = window.location.pathname;

    return (
        <header className="site-header">
            <ul className="site-nav">
                <li>
                    <Link to="/" className={path === '/' ? 'home-active' : ''}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={path === '/about' ? 'about-active' : ''}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/services"
                        className={
                            path === '/services' ? 'services-active' : ''
                        }
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={path === '/contact' ? 'contact-active' : ''}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
