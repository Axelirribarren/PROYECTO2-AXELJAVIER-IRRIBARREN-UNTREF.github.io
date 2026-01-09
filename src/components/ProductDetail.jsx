import React from 'react';
import styles from './ProductDetail.module.css';
import { useCart } from '../context/CartContext';

const ProductDetail = ({ product, onBack }) => {
    const { addToCart } = useCart();

    const {
        marca,
        titulo,
        img1,
        precio,
        oferta,
        descuento,
        descripcion,
        specs,
        reviews
    } = product;

    const hasOffer = oferta && oferta !== precio;
    const finalPrice = hasOffer ? oferta : precio;

    // Helper to calculate average rating
    const averageRating = reviews
        ? Math.round(reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length)
        : 5;

    const renderStars = (count) => {
        return "⭐".repeat(count);
    };

    return (
        <div className={`container ${styles.container}`}>
            <button onClick={onBack} className={styles.backButton}>
                ← Volver al catálogo
            </button>

            <div className={styles.grid}>
                {/* Left Column: Image */}
                <div className={styles.imageSection}>
                    <img
                        src={img1 || 'https://via.placeholder.com/600x600?text=No+Image'}
                        alt={titulo}
                        className={styles.mainImage}
                    />
                </div>

                {/* Right Column: Info */}
                <div className={styles.infoSection}>
                    <span className={styles.brand}>{marca}</span>
                    <h1 className={styles.title}>{titulo}</h1>

                    <div className={styles.priceBlock}>
                        {hasOffer ? (
                            <>
                                <span className={styles.currentPrice}>{oferta}</span>
                                <span className={styles.oldPrice}>{precio}</span>
                                <span className={styles.discountTag}>{descuento} OFF</span>
                            </>
                        ) : (
                            <span className={styles.currentPrice}>{precio}</span>
                        )}
                    </div>

                    <p className={styles.description}>{descripcion}</p>

                    <div className={styles.specs}>
                        <h3 className={styles.specsTitle}>Características Técnicas</h3>
                        <ul className={styles.specsList}>
                            {specs && Object.entries(specs).map(([key, value]) => (
                                <li key={key}>
                                    <span>{key}</span>
                                    <strong>{value}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        className={`btn btn-primary ${styles.addToCartBtn}`}
                        onClick={() => addToCart(product)}
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>

            {/* Social Proof */}
            <div className={styles.reviewsSection}>
                <div className={styles.reviewsHeader}>
                    <h3 className={styles.reviewsTitle}>Opiniones destacadas</h3>
                    <div className={styles.starRating}>{renderStars(averageRating)}</div>
                    <p>Basado en {reviews?.length || 0} reviews</p>
                </div>

                <div className={styles.reviewsGrid}>
                    {reviews && reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <span className={styles.reviewUser}>{review.user}</span>
                            <div className={styles.reviewStars}>{renderStars(review.rating)}</div>
                            <p className={styles.reviewText}>"{review.comment}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
