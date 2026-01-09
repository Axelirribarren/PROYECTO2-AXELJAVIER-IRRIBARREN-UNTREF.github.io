import React, { useState } from 'react';
import styles from './LoginModal.module.css';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login
        if (username && password) {
            onLogin(username);
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <h2 className={styles.title}>Iniciar Sesión</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="username">Usuario</label>
                        <input 
                            type="text" 
                            id="username"
                            className={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Tu usuario"
                            required
                        />
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    
                    <button type="submit" className={styles.submitBtn}>
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
