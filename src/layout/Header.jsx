import React, { useState } from 'react';
import styles from './Header.module.css';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { label: 'Catálogo', href: '#' },
        { label: 'Ofertas', href: '#' },
        { label: 'Usados', href: '#' },
        { label: 'Contactenos', href: '#contact' },
    ];

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>

                {/* Mobile Menu Toggle */}
                <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Toggle menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                {/* Logo */}
                <div className={styles.logo}>
                    Zedier<span>.</span>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className={styles.navLink}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Actions */}
                <div className={styles.actions}>
                    <div className={styles.cartBtn}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className={styles.badge}>{totalItems}</span>
                    </div>
                    <div className={styles.avatar}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <button className={styles.menuBtn} onClick={toggleMenu} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <nav className={styles.mobileNav}>
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className={styles.navLink} onClick={toggleMenu}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

            </div>
        </header>
    );
};

export default Header;
