import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={`container ${styles.content}`}>

                {/* Socials */}
                <div className={styles.section}>
                    <h3>Redes Sociales</h3>
                    <div className={styles.links}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>

                {/* Contact */}
                <div className={styles.section}>
                    <h3>Contacto</h3>
                    <div className={styles.links}>
                        <a href="tel:+541100000000" className={styles.linkItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>11-0000-0000</span>
                        </a>
                        <a href="mailto:axelirribarren@gmail.com" className={styles.linkItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <span>axelirribarren@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Map */}
                <div className={styles.section}>
                    <h3>Ubicación</h3>
                    <div style={{ height: '200px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.066850016401!2d-58.56357494999999!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1f28b26118d%3A0x6bba46c4f34a176!2sUniversidad%20Nacional%20de%20Tres%20de%20Febrero%20(UNTREF)%20-%20Sede%20Caseros%20I!5e0!3m2!1ses!2sar!4v1704845000000!5m2!1ses!2sar"
                            className={styles.mapFrame}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación"
                        ></iframe>
                    </div>
                </div>

            </div>

            <div className={styles.credits}>
                <div>
                    Desarrollado por <strong>Irribarren, Axel Javier</strong>
                </div>
                <div className={styles.techLogos}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className={styles.techIcon} title="React" />
                    <img src="https://vitejs.dev/logo.svg" alt="Vite" className={styles.techIcon} title="Vite" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS" className={styles.techIcon} title="CSS Modules" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
