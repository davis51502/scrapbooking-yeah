import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const closeMobileMenu = () => setHover(false);

    const navItems = [
        { path: '/', text: 'Home' },
        { path: '/services', text: 'Services' },
        { path: '/gallery', text: 'Gallery' },
        { path: '/contact', text: 'Contact' }
        
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Menu Icon */}
                <div 
                    className='menu-icon' 
                    onMouseEnter={handleMouseEnter}
                >
                    <i className="fas fa-bars" />
                </div>

                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img 
                        src= "/gallery/Si-Logo.jpg" 
                        alt="Scrapbook Impressions" 
                        className="logo-image"
                    />
                </Link>

                {/* Hover Navigation Menu */}
                <div 
                    className={hover ? 'side-menu active' : 'side-menu'}
                    onMouseLeave={handleMouseLeave}
                >
                    <ul className='nav-menu'>
                        {navItems.map((item, index) => (
                            <li key={index} className='nav-item'>
                                <Link 
                                    to={item.path} 
                                    className='nav-links' 
                                    onClick={closeMobileMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar