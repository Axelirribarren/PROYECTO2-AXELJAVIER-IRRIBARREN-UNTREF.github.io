import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../assets/products.json';

const Home = () => {
    return (
        <section className="container" id="catalogo" style={{ padding: '3rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nuestro Catálogo</h2>
                <p>Encuentra el dispositivo perfecto para ti.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {productsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Home;
