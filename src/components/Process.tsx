import { Droplet, Flame, Clock, CheckCircle, LucideIcon } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: Droplet,
    title: 'Selection',
    description: 'We source only the finest ingredients, selecting premium grains and pure spring water from pristine sources.'
  },
  {
    icon: Flame,
    title: 'Distillation',
    description: 'Our copper pot stills, operated by master craftsmen, extract the purest essence through time-honored techniques.'
  },
  {
    icon: Clock,
    title: 'Maturation',
    description: 'Years of patient aging in hand-selected oak barrels develop the rich, complex character our spirits are known for.'
  },
  {
    icon: CheckCircle,
    title: 'Perfection',
    description: 'Each batch is personally approved by our master distiller, ensuring uncompromising quality in every bottle.'
  }
];

function Process() {
  const { offset, elementRef } = useParallax(0.2);

  return (
    <section
      id="process"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-24 bg-black border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="text-center mb-16 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.2}px)` }}
        >
          <span className="text-brand tracking-[0.3em] text-sm font-light uppercase mb-4 block">
            Our Craft
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            The Art of Distillation
          </h2>
          <div className="w-24 h-px bg-brand mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every bottle is the result of generations of expertise, meticulous attention to detail, and an unwavering commitment to excellence.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.15}px)` }}
        >
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-transparent mx-auto flex items-center justify-center transition-all duration-300">
                    <Icon className="text-brand w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-transparent flex items-center justify-center text-brand text-sm font-light">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-black border-t border-b border-white/10 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-semibold text-white italic mb-6 leading-relaxed">
              "True craftsmanship cannot be rushed. It demands patience, precision, and an absolute dedication to perfection."
            </blockquote>
            <cite className="text-brand text-sm tracking-widest uppercase not-italic">
              Master Distiller
            </cite>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;
