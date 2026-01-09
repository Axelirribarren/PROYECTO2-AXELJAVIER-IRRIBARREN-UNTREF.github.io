import React from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { marca, titulo, img1, precio, oferta, descuento } = product;
    const { addToCart } = useCart();

    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={img1} alt={`${marca} ${titulo}`} className={styles.image} loading="lazy" />
            </div>

            <div className={styles.content}>
                <span className={styles.brand}>{marca}</span>
                <h3 className={styles.title}>{titulo}</h3>

                <div className={styles.prices}>
                    {oferta ? (
                        <>
                            <span className={styles.priceBefore}>{precio}</span>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>{oferta}</span>
                                <span className={styles.discount}>-{descuento}</span>
                            </div>
                        </>
                    ) : (
                        <span className={styles.price}>{precio}</span>
                    )}
                </div>

                <button
                    className="btn btn-primary"
                    style={{ marginTop: '1rem', width: '100%' }}
                    onClick={() => addToCart(product)}
                >
                    Añadir al Carrito
                </button>
            </div>
        </article>
    );
};

export default ProductCard;
