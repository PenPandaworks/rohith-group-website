import { useState } from 'react';
import ProductDetail from './ProductDetail';
import { useParallax } from '../hooks/useParallax';

interface Product {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
}

const PRODUCTS: Product[] = [
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

function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { offset, elementRef } = useParallax(0.25);

  return (
    <section
      id="products"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-24 bg-black border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="text-center mb-16 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.2}px)` }}
        >
          <span className="text-brand tracking-[0.3em] text-sm font-light uppercase mb-4 block">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Exceptional Spirits
          </h2>
          <div className="w-24 h-px bg-brand mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Each expression in our collection represents years of dedication, expertise, and an uncompromising commitment to quality.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.15}px)` }}
        >
          {PRODUCTS.map((product) => (
              <ProductCard
                key={product.name}
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

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="group relative bg-black border border-white/10 p-8 hover:border-brand/50 transition-all duration-500 flex flex-col">

              <div className="mb-4 sm:mb-6 flex justify-center">
                  <div 
                    className="h-40 sm:h-48 md:h-52 flex items-center justify-center cursor-pointer w-full relative"
                    onClick={onClick}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`h-full w-auto max-w-full object-contain transition-transform duration-300 hover:scale-110 ${
                        product.name === 'Classico' 
                          ? 'rotate-[1deg] hover:rotate-[1deg]' 
                          : 'hover:rotate-3'
                      }`}
                      style={{ maxHeight: '100%', display: 'block' }}
                      onError={(e) => {
                        console.error('Product image failed to load:', product.image);
                        (e.target as HTMLImageElement).style.border = '2px solid red';
                      }}
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
