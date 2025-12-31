import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // New Brand Colors derived from your logo
  const brandBlue = '#00538C';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Changed from bg-gray-300 to a clean white/light-gray for a premium look
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <img src="img/icon_logo.png" alt="UpScale Logo" className="w-14 h-14 object-contain" />
            <div>
              <h1 className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-[#828282]' : 'text-white'}`}>
                UpScale <span style={{ color: brandBlue }}>Real Estate</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                Premium Site Locations
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'locations', 'gallery', 'features'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors font-medium ${isScrolled ? 'text-gray-700' : 'text-white'
                  } hover:text-[#00538C]`}
                style={{ transition: 'color 0.3s ease' }}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('appointment')}
              // Replaced primary-red with brand blue
              className="text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-md"
              style={{ backgroundColor: brandBlue }}
            >
              Book Visit
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in-down bg-white rounded-b-2xl shadow-xl px-4">
            <div className="flex flex-col space-y-4">
              {['home', 'locations', 'gallery', 'features'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-gray-800 font-medium py-2 border-b border-gray-100 capitalize"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('appointment')}
                className="text-white px-6 py-3 rounded-xl text-center font-bold"
                style={{ backgroundColor: brandBlue }}
              >
                Book Visit
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Top Bar Info */}
      <div className={`py-2 transition-opacity duration-300 ${isScrolled ? 'hidden' : 'bg-black/20 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" style={{ color: brandBlue }} />
            <span className="font-light">+251-911-046-555 / +251-911-565-570</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: brandBlue }} />
            <span className="font-light">Prime Locations Bole Olympia</span>
          </div>
        </div>
      </div>
    </header>
  );
};