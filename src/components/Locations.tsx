import { MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const locations = [
  {
    id: 1,
    name: 'Bole Olompiya',
    description: 'Experience urban luxury in the heart of the city. Prime location with easy access to business districts, entertainment, schools and dining.',
    image: 'img/image03.jpg',
    features: ['City Center', 'Transit Access', 'Shopping District'],
  },
  {
    id: 2,
    name: 'Next site soon',
    description: 'Peaceful offering stunning views and surroundings. Perfect for those seeking a balanced lifestyle.',
    image: 'img/image_2.jpg',
    features: ['Waterfront', 'Nature Trails', 'Recreational Areas'],
  },
  {
    id: 3,
    name: 'Next site soon',
    description: 'Elevated locations with breathtaking views. Premium sites designed for luxury living surrounded by natural beauty.',
    image: 'img/fence.jpg',
    features: ['Fresh View', 'Entertaining', 'Fresh Air'],
  },
];

const LocationCard = ({ location, index }: { location: typeof locations[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  // Brand Colors
  const brandBlue = '#00538C';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform border border-white/5 hover:border-[#00538C]/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Updated Gradient to match logo's deep navy/blue tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3344] via-[#1A3344]/40 to-transparent"></div>

        <div 
          className="absolute top-4 right-4 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
          style={{ backgroundColor: brandBlue }}
        >
          Premium Location
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <MapPin className="w-5 h-5" style={{ color: brandBlue }} />
          {location.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all leading-relaxed">
          {location.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {location.features.map((feature) => (
            <span
              key={feature}
              className="bg-white/5 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] uppercase font-semibold border border-white/10"
            >
              {feature}
            </span>
          ))}
        </div>

        <button 
          className="flex items-center gap-2 transition-colors font-bold group/btn"
          style={{ color: brandBlue }}
          onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm">Schedule Visit</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export const Locations = () => {
  const { ref, isVisible } = useScrollAnimation();
  const brandBlue = '#00538C';
  const brandGray = '#7D7E81';

  return (
    <section id="locations" className="py-20 bg-[#828282] relative overflow-hidden">
      {/* Brand accent glows */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandBlue }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandGray }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white  mb-4">
            Explore Our <span className="text-primary-blue ">Premium Locations</span>
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto font-light">
            Discover exceptional sites across diverse landscapes. Each location is carefully selected to offer unparalleled living experiences and investment opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
            style={{ 
                backgroundColor: brandBlue,
                boxShadow: `0 10px 20px -5px ${brandBlue}50` 
            }}
          >
            Book a Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};