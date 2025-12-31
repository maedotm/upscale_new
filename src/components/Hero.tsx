import { useEffect, useState } from 'react';
import { ChevronDown, MapPin, TrendingUp, Award } from 'lucide-react';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Brand Colors from Logo
  const brandBlue = '#00538C';
  const brandGray = '#7D7E81';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLocations = () => {
    const element = document.getElementById('locations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("img/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3344]/30 via-[#1A3344]/50 to-[#333333]"></div>
      </div>

      {/* Decorative Brand Glows */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float opacity-20"
          style={{ backgroundColor: brandBlue }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float opacity-10" 
          style={{ backgroundColor: brandGray, animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-down">
            <div 
              className="inline-flex items-center gap-2 border rounded-full px-6 py-2 mb-6"
              style={{ backgroundColor: `${brandBlue}15`, borderColor: `${brandBlue}40` }}
            >
              <Award className="w-5 h-5" style={{ color: brandBlue }} />
              <span className="text-white text-sm font-medium tracking-wide">Premium Site Locations</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white  mb-6 animate-fade-in-up">
            Discover Your
            <span className="block mt-2 text-primary-blue [-webkit-text-stroke:1px_white]" >Dream Location</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Experience premium site locations designed for modern living. From urban centers to serene landscapes, we offer the finest locations for your future home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToLocations}
              className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              style={{ 
                backgroundColor: brandBlue,
                boxShadow: `0 10px 15px -3px ${brandBlue}40`
              }}
            >
              Explore Locations
            </button>
            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Schedule Visit
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: MapPin, title: "Bole Olympia", desc: "Prime Locations" },
              { icon: TrendingUp, title: "98%", desc: "Client Satisfaction" },
              { icon: Award, title: "5+", desc: "Experienced Partners" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105 group">
                <feature.icon className="w-10 h-10 mb-3 mx-auto transition-colors" style={{ color: brandBlue }} />
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToLocations}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <ChevronDown className="w-8 h-8" style={{ color: brandBlue }} />
      </button>
    </section>
  );
};