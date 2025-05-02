import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const navItems = [
        { path: '/', text: 'Home' },
        { path: '/gallery', text: 'Gallery' },
        { path: '/contact', text: 'Contact' }, 
        { path: '/services', text: 'Services' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Menu Icon */}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    Scrapbook <span className="logo-sub">IMPRESSIONS</span>
                </Link>

                {/* Fold-out Navigation Menu */}
                <div className={click ? 'side-menu active' : 'side-menu'}>
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