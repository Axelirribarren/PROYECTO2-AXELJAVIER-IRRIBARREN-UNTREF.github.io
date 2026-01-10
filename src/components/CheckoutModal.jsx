import React, { useState } from 'react';
import styles from './CheckoutModal.module.css';
import { useCart } from '../context/CartContext';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { cartItems, clearCart } = useCart();
    const [step, setStep] = useState('form'); // form | processing | success
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    if (!isOpen) return null;

    // Helper to calculate total
    const calculateTotal = () => {
        const total = cartItems.reduce((sum, item) => {
            const price = parseInt((item.oferta || item.precio).replace(/[^0-9]/g, ''));
            return sum + (price * item.quantity);
        }, 0);
        return total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep('processing');

        // Simulate API call
        setTimeout(() => {
            setStep('success');
            clearCart();
        }, 2000);
    };

    const handleClose = () => {
        setStep('form');
        setFormData({ name: '', cardNumber: '', expiry: '', cvv: '' });
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={handleClose}>×</button>

                {step === 'form' && (
                    <>
                        <h2 className={styles.title}>Finalizar Compra</h2>

                        <div className={styles.summary}>
                            <div className={styles.summaryRow}>
                                <span>Items ({cartItems.length})</span>
                            </div>
                            <div className={styles.summaryTotal}>
                                <span>Total a Pagar</span>
                                <span>{calculateTotal()}</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Nombre en la Tarjeta</label>
                                <input
                                    type="text"
                                    required
                                    className={styles.input}
                                    placeholder="Como figura en la tarjeta"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Número de Tarjeta</label>
                                <input
                                    type="text"
                                    required
                                    className={styles.input}
                                    placeholder="0000 0000 0000 0000"
                                    maxLength="19"
                                    value={formData.cardNumber}
                                    onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                                />
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup} style={{ flex: 1 }}>
                                    <label className={styles.label}>Vencimiento</label>
                                    <input
                                        type="text"
                                        required
                                        className={styles.input}
                                        placeholder="MM/AA"
                                        maxLength="5"
                                        value={formData.expiry}
                                        onChange={e => setFormData({ ...formData, expiry: e.target.value })}
                                    />
                                </div>
                                <div className={styles.formGroup} style={{ flex: 1 }}>
                                    <label className={styles.label}>CVV</label>
                                    <input
                                        type="password"
                                        required
                                        className={styles.input}
                                        placeholder="123"
                                        maxLength="4"
                                        value={formData.cvv}
                                        onChange={e => setFormData({ ...formData, cvv: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                Pagar {calculateTotal()}
                            </button>
                        </form>
                    </>
                )}

                {step === 'processing' && (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⌛</div>
                        <h3>Procesando pago...</h3>
                        <p>Por favor espera un momento.</p>
                    </div>
                )}

                {step === 'success' && (
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <span className={styles.successIcon}>✅</span>
                        <h2 className={styles.title}>¡Compra Exitosa!</h2>
                        <p className={styles.successMessage}>
                            Gracias por tu compra, {formData.name}.<br />
                            Te hemos enviado el recibo a tu email.
                        </p>
                        <button onClick={handleClose} className={`btn btn-primary ${styles.submitBtn}`}>
                            Volver a la tienda
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;
