import { useParallax } from '../hooks/useParallax';

function Media() {
  const { offset, elementRef } = useParallax(0.2);

  return (
    <section
      id="media"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-24 bg-black border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="text-center mb-16 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.2}px)` }}
        >
          <span className="text-brand tracking-[0.3em] text-sm font-light uppercase mb-4 block">
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Press & Awards
          </h2>
          <div className="w-24 h-px bg-brand mx-auto mb-6"></div>
          <div className="mt-8 overflow-visible">
            <p className="shine-text inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal font-allura leading-tight pb-2">
              Coming Soon
            </p>
            <p className="text-gray-400 mt-6 text-lg">
              Exciting updates on the way
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
