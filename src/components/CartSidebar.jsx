import React from 'react';
import styles from './CartSidebar.module.css';
import { useCart } from '../context/CartContext';

const CartSidebar = ({ isOpen, onClose, onCheckout }) => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    // Helper to parse price string to number (e.g. "$700.000" -> 700000)
    const parsePrice = (priceStr) => {
        if (!priceStr) return 0;
        return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    };

    // Calculate total price
    const calculateTotal = () => {
        const total = cartItems.reduce((sum, item) => {
            const price = item.oferta && item.oferta !== item.precio
                ? parsePrice(item.oferta)
                : parsePrice(item.precio);
            return sum + (price * item.quantity);
        }, 0);
        return total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 });
    };

    return (
        <div className={`${styles.sidebarOverlay} ${isOpen ? styles.open : ''}`} onClick={onClose}>
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Tu Carrito</h2>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar carrito">
                        ×
                    </button>
                </div>

                <div className={styles.content}>
                    {cartItems.length === 0 ? (
                        <p className={styles.emptyCart}>Tu carrito está vacío.</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className={styles.cartItem}>
                                <img
                                    src={item.img1}
                                    alt={item.titulo}
                                    className={styles.itemImage}
                                />
                                <div className={styles.itemDetails}>
                                    <h4 className={styles.itemTitle}>{item.titulo}</h4>
                                    <p className={styles.itemPrice}>
                                        {item.oferta && item.oferta !== item.precio ? item.oferta : item.precio}
                                    </p>
                                    <div className={styles.itemControls}>
                                        <span className={styles.quantity}>Cant: {item.quantity}</span>
                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.totalRow}>
                            <span className={styles.totalLabel}>Total:</span>
                            <span className={styles.totalAmount}>{calculateTotal()}</span>
                        </div>
                        <button
                            className={`btn btn-primary ${styles.checkoutBtn}`}
                            onClick={onCheckout}
                        >
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </aside>
        </div>
    );
};

export default CartSidebar;
