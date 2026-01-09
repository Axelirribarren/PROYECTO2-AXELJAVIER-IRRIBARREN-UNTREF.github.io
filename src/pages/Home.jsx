import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../assets/products.json';

const Home = () => {
    // Splitting data for demo purposes
    const newArrivals = productsData.slice(0, 3);
    const saleItems = productsData.slice(3, 6);

    return (
        <div>
            {/* Nuevos Celulares Section */}
            <section className="container" id="catalogo" style={{ padding: '4rem 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        color: 'var(--color-text-main)',
                        marginBottom: '0.5rem'
                    }}>
                        Nuevos Celulares
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>La última tecnología en tus manos.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {newArrivals.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Ofertas Section */}
            <section id="ofertas" style={{
                backgroundColor: 'var(--color-bg-accent)',
                padding: '4rem 1rem',
                marginTop: '2rem'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: 'var(--color-text-main)',
                            marginBottom: '0.5rem'
                        }}>
                            Ofertas Imperdibles
                        </h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>Precios increíbles por tiempo limitado.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {saleItems.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
