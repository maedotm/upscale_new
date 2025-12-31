import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Brand Colors from Logo
  const brandBlue = '#00538C';
  const brandGray = '#7D7E81';

  return (
    <footer className="bg-[#000000] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Updated logo display to fit corporate aesthetic */}
              <img src="img/icon_logo.png" alt="UpScale Logo" className="w-16 h-14 bg-tr p-1 rounded-md" />
              <div>
                <h3 className="text-xl font-bold text-white">
                  UpScale <span style={{ color: brandBlue }}>Real Estate</span>
                </h3>
                <p className="text-[10px] uppercase tracking-widest" style={{ color: brandGray }}>
                  P.L.C.
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Your trusted partner in finding premium site locations for luxurious living and smart investments.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href=""
                  className="bg-dark-lighter text-white p-2 rounded-lg transition-all hover:scale-110"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = brandBlue}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'} // matches dark-lighter
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'locations', 'features'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 transition-colors capitalize text-sm hover:text-white"
                    onMouseEnter={(e) => e.currentTarget.style.color = brandBlue}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Site Consultation</li>
              <li>Location Analysis</li>
              <li>Investment Planning</li>
              <li>Legal Documentation</li>
              <li>Property Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" style={{ color: brandBlue }} />
                <div className="text-sm">
                  <p className="text-gray-400">+251 911 565 570</p>
                  <p className="text-gray-400">+251 911 046 555</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1" style={{ color: brandBlue }} />
                <div className="text-sm">
                  <p className="text-gray-400">info@upscalerealestateplc.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" style={{ color: brandBlue }} />
                <p className="text-gray-400 text-sm">behind Olompiya, Bole, Addis Ababa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-xs">
            {currentYear} Designed by <a href="https://github.com/maedotm" className='font-thin text-2px_red [-webkit-text-stroke:1px_white]'>Maedot</a> All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};