declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Spline canvas */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <spline-viewer
          url="https://prod.spline.design/guFaon3UbuhfS8AM/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            backgroundColor: '#000000'
          }}
        />
      </div>
      
      {/* View Products Button - Positioned below lion element */}
      <div className="relative z-20 mt-auto mb-20 md:mb-32 pointer-events-auto">
        <button
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('products');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="btn-shine px-6 py-3 rounded-full border border-white/40 text-white font-semibold tracking-wide bg-transparent hover:border-brand transition-all duration-300"
        >
          View Products
        </button>
      </div>
    </section>
  );
}

export default Hero;
