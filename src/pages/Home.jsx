import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import productsData from '../assets/products.json';

const Home = () => {
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [viewMode, setViewMode] = React.useState('grid'); // 'grid' | 'list'

    // Splitting data for demo purposes
    const newArrivals = productsData.slice(0, 3);
    const saleItems = productsData.slice(3, 6);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        // Scroll to top when opening detail
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setSelectedProduct(null);
    };

    if (selectedProduct) {
        return <ProductDetail product={selectedProduct} onBack={handleBack} />;
    }

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: viewMode === 'grid'
            ? 'repeat(auto-fill, minmax(280px, 1fr))'
            : '1fr',
        gap: '2rem'
    };

    const ViewToggle = () => (
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <button
                onClick={() => setViewMode('grid')}
                className="btn"
                style={{
                    backgroundColor: viewMode === 'grid' ? 'var(--color-primary)' : 'var(--color-bg-alt)',
                    color: viewMode === 'grid' ? 'white' : 'var(--color-text-muted)',
                    border: '1px solid var(--color-border)'
                }}
            >
                ⊞ Grid
            </button>
            <button
                onClick={() => setViewMode('list')}
                className="btn"
                style={{
                    backgroundColor: viewMode === 'list' ? 'var(--color-primary)' : 'var(--color-bg-alt)',
                    color: viewMode === 'list' ? 'white' : 'var(--color-text-muted)',
                    border: '1px solid var(--color-border)'
                }}
            >
                ☰ Lista
            </button>
        </div>
    );

    return (
        <div>
            {/* Nuevos Celulares Section */}
            <section className="container" id="catalogo" style={{ padding: '4rem 1.5rem' }}>
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

                <ViewToggle />

                <div style={gridStyle}>
                    {newArrivals.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onSelect={handleProductSelect}
                            viewMode={viewMode}
                        />
                    ))}
                </div>
            </section>

            {/* Ofertas Section */}
            <section id="ofertas" style={{
                backgroundColor: 'var(--color-bg-accent)',
                padding: '4rem 1.5rem',
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

                    <div style={gridStyle}>
                        {saleItems.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onSelect={handleProductSelect}
                                viewMode={viewMode}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Home;
