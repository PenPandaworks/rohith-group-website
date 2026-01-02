import { useState } from 'react';
import ProductDetail from './ProductDetail';
import { useParallax } from '../hooks/useParallax';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { offset, elementRef } = useParallax(0.25);
  const products = [
    {
      name: 'The Regal Blend',
      subtitle: 'Blended Malt Whiskey',
      description: 'Our flagship expression, meticulously aged in charred oak barrels. Rich, complex, with notes of vanilla, caramel, and subtle spice.',
      image: '/the regal blend cutput webp.webp',
      price: 'Premium Selection'
    },
    {
      name: 'Classico',
      subtitle: 'Premium Blended Grape Brandy',
      description: 'An extraordinary blend of our finest reserves, hand-selected by our master distiller. Smooth, refined, and exceptionally balanced.',
      image: '/classico cut out_.png',
      price: 'Exclusive Collection'
    },
    {
      name: 'Feinn',
      subtitle: 'Premium Vodka',
      description: 'Smooth, refined, and crafted to stand out — Feinn brings clarity to every moment.',
      image: '/feinn_.png',
      price: 'Connoisseur\'s Choice'
    }
  ];

  return (
    <section
      id="products"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="text-center mb-16 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.2}px)` }}
        >
          <span className="text-brand tracking-[0.3em] text-sm font-light uppercase mb-4 block">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exceptional Spirits
          </h2>
          <div className="w-24 h-px bg-brand mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Each expression in our collection represents years of dedication, expertise, and an uncompromising commitment to quality.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.15}px)` }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

      </div>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

function ProductCard({ product, onClick }: any) {
  return (
    <div className="group relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 hover:border-brand/50 transition-all duration-500 flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(to right, transparent, #EFBF04, transparent)'}}></div>

              <div className="mb-6 flex justify-center">
                <div className="h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain transition-transform duration-300 hover:scale-110 hover:rotate-3"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                {product.name}
              </h3>

              <p className="text-brand text-sm tracking-wider uppercase text-center mb-4">
                {product.subtitle}
              </p>

              <div className="w-16 h-px bg-brand/50 mx-auto mb-6"></div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center flex-grow">
                {product.description}
              </p>

              <div className="text-center mb-6">
                <span className="text-white/70 text-xs tracking-widest uppercase">
                  {product.price}
                </span>
              </div>

              <button
                onClick={onClick}
                className="btn-shine w-full py-3 mt-auto rounded-full border border-white/40 text-white text-sm font-semibold tracking-wide bg-transparent hover:border-brand transition-all duration-300"
              >
                DISCOVER MORE
              </button>
            </div>
  );
}

export default Products;
