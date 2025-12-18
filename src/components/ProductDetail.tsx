import { X } from 'lucide-react';

interface ProductDetailProps {
  product: {
    name: string;
    subtitle: string;
    description: string;
    image: string;
    price: string;
  };
  onClose: () => void;
}

function ProductDetail({ product, onClose }: ProductDetailProps) {
  const fullDescriptions: Record<string, string> = {
    'The Regal Blend': 'The Regal Blend represents the pinnacle of whiskey craftsmanship. This exceptional blended malt is meticulously aged in hand-selected charred oak barrels for a minimum of 12 years. Each barrel is carefully monitored by our master distiller to ensure optimal flavor development. The result is a remarkably smooth spirit with layers of complexity - opening with rich vanilla and caramel notes, followed by hints of dried fruit, toasted oak, and a subtle spice finish that lingers elegantly on the palate. Perfect for savoring neat or with a single ice cube.',
    'Classico': 'Classico embodies the art of grape brandy distillation at its finest. Created from premium wine grapes harvested at peak ripeness, this brandy undergoes a traditional double-distillation process in copper pot stills. Aged gracefully in French oak casks, it develops a smooth, velvety character with notes of ripe pear, apricot, and gentle baking spices. The finish is long and warming, with hints of honey and toasted almonds. An ideal digestif that pairs beautifully with fine chocolates and cigars.',
    'Feinn': 'Feinn represents the ultimate expression of vodka purity and refinement. Distilled six times through a proprietary filtration process using activated charcoal and quartz crystals, this premium vodka achieves an unparalleled level of clarity and smoothness. Made from the finest winter wheat, Feinn delivers a clean, crisp taste with a subtle sweetness and silky texture. Its neutral character makes it perfect for premium cocktails, while its exceptional smoothness ensures it can be enjoyed chilled and neat.'
  };

  return (
    <div className="fixed inset-0 bg-black z-[100] overflow-y-auto">
      <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onClose}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-brand transition-colors duration-300 z-10"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className={`max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] w-auto max-w-full object-contain ${
                  product.name === 'Classico' ? 'rotate-[1deg]' : ''
                }`}
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-brand tracking-[0.3em] text-sm font-light uppercase mb-4">
                {product.subtitle}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                {product.name}
              </h1>

              <div className="w-24 h-px bg-brand mb-8"></div>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                {fullDescriptions[product.name] || 'Crafted with precision and passion, this exceptional spirit represents our commitment to quality and tradition.'}
              </p>

              <div className="bg-black border border-brand/20 p-6 mb-8">
                <h3 className="text-white text-sm tracking-widest uppercase mb-2 font-semibold">Classification</h3>
                <p className="text-brand text-xl font-semibold">{product.price}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-brand mt-2"></div>
                  <div>
                    <h4 className="text-white font-light mb-1">Craftsmanship</h4>
                    <p className="text-gray-400 text-sm">Hand-crafted by master distillers with decades of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-brand mt-2"></div>
                  <div>
                    <h4 className="text-white font-light mb-1">Quality</h4>
                    <p className="text-gray-400 text-sm">Only the finest ingredients and traditional methods</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-brand mt-2"></div>
                  <div>
                    <h4 className="text-white font-light mb-1">Heritage</h4>
                    <p className="text-gray-400 text-sm">Rooted in time-honored traditions of excellence</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-500 text-xs">
                  Please enjoy responsibly. Must be of legal drinking age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
