import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(v => !v)
    const closeMenu = () => setIsOpen(false)

    // close on Escape
    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') closeMenu()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    // prevent body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const navItems = [
        { path: '/', text: 'Home' },
        { path: '/services', text: 'Services' },
        { path: '/gallery', text: 'Gallery' },
        { path: '/contact', text: 'Contact' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Menu Icon - mobile */}
                <button
                    className='menu-icon'
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    aria-controls='site-drawer'
                    onClick={toggleMenu}
                >
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden />
                </button>

                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img
                        src="/gallery/Si-Logo.jpg"
                        alt="Scrapbook Impressions"
                        className="logo-image"
                    />
                </Link>

                {/* Desktop nav */}
                <ul className='nav-desktop'>
                    {navItems.map((item, index) => (
                        <li key={index} className='nav-item'>
                            <Link to={item.path} className='nav-links'>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile drawer */}
                <div
                    id='site-drawer'
                    className={isOpen ? 'side-menu active' : 'side-menu'}
                    onClick={(e) => { if (e.target === e.currentTarget) closeMenu() }}
                >
                    <ul className='nav-menu'>
                        {navItems.map((item, index) => (
                            <li key={index} className='nav-item'>
                                <Link
                                    to={item.path}
                                    className='nav-links'
                                    onClick={closeMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* overlay when open */}
                {isOpen && <div className='drawer-overlay' onClick={closeMenu} />}
            </div>
        </nav>
    )
}

export default NavBar