import React from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onSelect, viewMode = 'grid' }) => {
    // Ensure properties exist, default to safe values
    const {
        marca = '',
        titulo = 'Producto',
        img1 = '',
        precio = '$0',
        oferta = null,
        descuento = ''
    } = product;

    // Convert checks to boolean for cleaner logic
    const hasOffer = oferta && oferta !== precio;

    return (
        <article className={`${styles.card} ${viewMode === 'list' ? styles.cardList : ''}`}>
            <div className={styles.imageWrapper}>
                <img
                    src={img1 || 'https://via.placeholder.com/300x300?text=No+Image'}
                    alt={`${marca} ${titulo}`}
                    className={styles.image}
                    loading="lazy"
                />
            </div>

            <div className={styles.content}>
                <span className={styles.brand}>{marca}</span>
                <h3 className={styles.title}>{titulo}</h3>

                <div className={styles.prices}>
                    {hasOffer ? (
                        <>
                            <span className={styles.priceBefore}>{precio}</span>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>{oferta}</span>
                                <span className={styles.discount}>{descuento || 'Oferta'}</span>
                            </div>
                        </>
                    ) : (
                        <span className={styles.price}>{precio}</span>
                    )}
                </div>

                <div className={styles.actions}>
                    <button
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                        onClick={() => onSelect(product)}
                    >
                        Ver más
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
