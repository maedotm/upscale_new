import { Shield, Zap, Users, Award, TrendingUp, MapPin, Building, Home } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Shield,
    title: 'Secure Investment',
    description: 'All locations are thoroughly vetted with clear titles and legal documentation, ensuring your investment is protected.',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Strategically selected sites in high-growth areas with excellent connectivity and future development potential.',
  },
  {
    icon: Building,
    title: 'Infrastructure Ready',
    description: 'Sites come with essential infrastructure including roads, water, electricity, and modern amenities.',
  },
  {
    icon: TrendingUp,
    title: 'High Appreciation',
    description: 'Our locations show consistent value appreciation with strong historical growth and future potential.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Professional team providing personalized consultation and support throughout your site selection journey.',
  },
  {
    icon: Zap,
    title: 'Quick Processing',
    description: 'Streamlined documentation and registration process to help you secure your dream location quickly.',
  },
  {
    icon: Home,
    title: 'Flexible Options',
    description: 'Various site sizes and payment plans tailored to meet diverse requirements and budgets.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in real estate development and customer satisfaction across the industry.',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = feature.icon;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group bg-primary-blue border border-white/5 rounded-2xl p-8 hover:border-primary-blue/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20  transition-colors group-hover:scale-110 transform duration-300">
        <Icon className="w-8 h-8 text-wite" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 bg-[#828282] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-primary-blue">UpScale</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We deliver exceptional value through our commitment to quality, transparency, and customer satisfaction. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-light via-primary-blue to-light-gray rounded-3xl p-18 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Find Your Perfect Location?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a personalized site visit and discover why thousands have chosen UpScale for their real estate investments.
            </p>
            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-primary-blue px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              Schedule Your Visit Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
