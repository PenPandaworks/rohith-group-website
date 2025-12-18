import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Products from './components/Products';
import Process from './components/Process';
import Contact from './components/Contact';
import Media from './components/Media';
import AgeVerification from './components/AgeVerification';
import Logo from './components/Logo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const verified = sessionStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero') || document.querySelector('section:first-of-type') as HTMLElement;
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsHeaderVisible(scrollPosition < heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

  const handleVerification = (verified: boolean) => {
    if (verified) {
      sessionStorage.setItem('ageVerified', 'true');
      setIsVerified(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  if (!isVerified) {
    return <AgeVerification onVerify={handleVerification} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav 
        className={`fixed top-0 w-full z-50 bg-transparent transition-all duration-500 ease-in-out ${
          isHeaderVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('heritage'); }} 
              className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Logo className="w-[200px] sm:w-[250px] h-auto max-h-[100px]" />
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('products')} className="text-white hover:text-brand transition-colors duration-300 font-light tracking-wide">
                Products
              </button>
              <button onClick={() => scrollToSection('process')} className="text-white hover:text-brand transition-colors duration-300 font-light tracking-wide">
                Our Process
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-brand transition-colors duration-300 font-light tracking-wide">
                Contact Page
              </button>
              <button onClick={() => scrollToSection('media')} className="text-white hover:text-brand transition-colors duration-300 font-light tracking-wide">
                Media Articles
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-brand transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-yellow-600/20 pt-4">
              <button onClick={() => scrollToSection('products')} className="block w-full text-left text-white hover:text-brand transition-colors py-2">
                Products
              </button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left text-white hover:text-brand transition-colors py-2">
                Our Process
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-brand transition-colors py-2">
                Contact Page
              </button>
              <button onClick={() => scrollToSection('media')} className="block w-full text-left text-white hover:text-brand transition-colors py-2">
                Media Articles
              </button>
            </div>
          )}
        </div>
      </nav>

      <Hero />
      <Heritage />
      <Products />
      <Process />
      <Contact />
      <Media />

      <footer className="bg-black border-t border-yellow-600/20 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div 
                onClick={() => scrollToSection('heritage')}
                className="mb-4 hover:opacity-80 transition-opacity cursor-pointer inline-block"
              >
                <Logo className="h-20" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting exceptional spirits with uncompromising quality and time-honored tradition since our founding.
              </p>
            </div>
            <div>
              <h4 className="text-white font-light mb-4 tracking-wide">Quick Links</h4>
              <div className="space-y-2 mb-6">
                <button onClick={() => scrollToSection('products')} className="block text-gray-400 hover:text-brand transition-colors text-sm">
                  Products
                </button>
                <button onClick={() => scrollToSection('process')} className="block text-gray-400 hover:text-brand transition-colors text-sm">
                  Our Process
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-brand transition-colors text-sm">
                  Contact
                </button>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/rohithgroup.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white hover:border-brand hover:text-brand transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white hover:border-brand hover:text-brand transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-light mb-4 tracking-wide">Legal</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Please drink responsibly. Must be of legal drinking age to purchase or consume our products.
              </p>
            </div>
          </div>
          <div className="border-t border-brand/20 pt-8 text-center">
            <p className="text-gray-500 text-sm mb-2">
              &copy; {new Date().getFullYear()} ROHITH GROUP. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Powered by Pen Panda
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
