import React, { useState } from 'react';
import styles from './Header.module.css';
import { useCart } from '../context/CartContext';
import LoginModal from '../components/LoginModal';
import CartSidebar from '../components/CartSidebar';
import CheckoutModal from '../components/CheckoutModal';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [user, setUser] = useState(null); // null = Guest, string = Username
    const { totalItems } = useCart();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogin = (username) => {
        setUser(username);
        setIsLoginOpen(false);
    };

    const handleCheckoutRequest = () => {
        setIsCartOpen(false);
        if (!user) {
            setIsLoginOpen(true);
        } else {
            setIsCheckoutOpen(true);
        }
    };

    const navItems = [
        { label: 'Catálogo', href: '#catalogo' },
        { label: 'Ofertas', href: '#ofertas' },
        { label: 'Contacto', href: '#footer' },
    ];

    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.container}`}>

                    {/* Mobile Menu Toggle */}
                    <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className={styles.logo}>
                        Zedier Phone Store
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
                        {user ? (
                            <div className={styles.userInfo}>
                                <span>Hola, {user}</span>
                            </div>
                        ) : (
                            <button className={styles.loginBtn} onClick={() => setIsLoginOpen(true)}>
                                Login
                            </button>
                        )}

                        <div className={styles.cartBtn} onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
                        </div>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                        <button className={styles.closeMenuBtn} onClick={toggleMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <nav className={styles.mobileNav}>
                            {navItems.map((item) => (
                                <a key={item.label} href={item.href} className={styles.mobileNavLink} onClick={toggleMenu}>
                                    {item.label}
                                </a>
                            ))}
                            <button className={styles.mobileLoginBtn} onClick={() => { toggleMenu(); setIsLoginOpen(true); }}>
                                {user ? `Hola, ${user}` : 'Login'}
                            </button>
                        </nav>
                    </div>

                </div>
            </header>

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onLogin={handleLogin}
            />

            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onCheckout={handleCheckoutRequest}
            />

            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
            />
        </>
    );
};

export default Header;
