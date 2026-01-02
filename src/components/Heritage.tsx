import { useState, useEffect } from 'react';
import { useParallax } from '../hooks/useParallax';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDER_IMAGES: string[] = [
  '/classsico grapes02 .webp',
  '/latest photo slider the regal blend.webp',
  '/photo slider feinn webp.webp'
];

function Heritage() {
  const { elementRef } = useParallax(0.2);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="heritage"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="relative w-full border-t-2 border-white/20 overflow-hidden bg-black"
      style={{ 
        minHeight: '100vh',
        height: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Photo Slider Background */}
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center">
        {SLIDER_IMAGES.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute transition-opacity duration-300 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ 
                objectFit: 'contain',
                objectPosition: 'center',
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
              loading={index === currentSlide ? 'eager' : 'lazy'}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                console.error('❌ Failed to load image:', image);
                console.error('Image src:', img.src);
                console.error('Expected URL:', window.location.origin + image);
                img.style.border = '5px solid red';
                img.style.backgroundColor = '#ff000050';
              }}
              onLoad={() => {
                console.log('✅ Image loaded successfully:', image);
              }}
            />
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-yellow-400 p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-30 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-yellow-400 p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-30 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {SLIDER_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-400 w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default Heritage;
