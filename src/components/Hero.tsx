declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
    </section>
  );
}

export default Hero;
