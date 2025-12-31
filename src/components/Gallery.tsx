import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Play, HardHat, Camera, Box } from 'lucide-react';

// Data specifically for the current Bole Olympia site
const activeSiteGallery = [
  {
    type: 'video',
    url: 'img/video.mp4', // Ensure this file exists in your public/img folder
    thumbnail: 'img/image01.jpg',
    title: 'Outside Environment',
    category: 'Live Living',
    icon: HardHat
  },
    {
    type: 'image',
    url: 'img/imageplan03.jpg',
    title: 'Site plan Three bedroom',
    category: 'Utilities',
    icon: MapPin
  },
  {
    type: 'image',
    url: 'img/image03.jpg',
    title: 'structural view',
    category: 'Phase 1',
    icon: Box
  },
  
  {
    type: 'image',
    url: 'img/image_2.jpg',
    title: 'Site Overview',
    category: 'Aerial View',
    icon: Camera
  },
  
  {
    type: 'image',
    url: 'img/imageplan01.jpg',
    title: 'Site plan two bedroom',
    category: 'Utilities',
    icon: MapPin
  },

];

const GalleryItem = ({ item, index }: { item: typeof activeSiteGallery[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const brandBlue = '#00538C';

  // Handle video playback on hover
  const handleMouseEnter = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      // Optional: videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-[2rem] transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${index === 0 ? 'md:col-span-2 md:row-span-2' : 'h-[300px]'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-full w-full overflow-hidden bg-brand-navy">
        {item.type === 'video' ? (
          <video
            ref={videoRef}
            src={item.url}
            poster={item.thumbnail}
            className="h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={item.url}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        )}

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3344] via-[#1A3344]/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

        {/* Centered Play Button for Video */}
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-full border border-white/20 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
        )}

        {/* Content Labels */}
        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 mb-2">
            <item.icon className="w-4 h-4" style={{ color: brandBlue }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              {item.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white leading-tight">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const brandBlue = '#00538C';

  return (
    <section id="gallery" className="py-24 bg-[#828282] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bole <span style={{ color: brandBlue }}>Olympia</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto font-light leading-relaxed">
            Witness the transformation. Our current development at Bole Olympia is moving at pace, setting new benchmarks for luxury and construction quality in Addis Ababa.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {activeSiteGallery.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-3 bg-primary-blue text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:bg-primary-dark shadow-[0_20px_40px_-15px_rgba(0,83,140,0.3)]"
          >
            Schedule a Site Visit
            <Play className="w-4 h-4 fill-white transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};