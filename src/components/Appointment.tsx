import { useState, FormEvent } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';

const locations = [
  'Dembel behind Olompiya ',
];

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM',
];

export const Appointment = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Brand Colors from Logo
  const brandBlue = '#00538C';
  const brandGray = '#7D7E81';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('appointments').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="appointment" className="py-20 bg-[#828282] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: brandBlue }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: brandGray }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Schedule Your <span style={{ color: brandBlue }}>Site Visit</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-light">
            Take the first step towards your dream location. Book a personalized tour with our expert team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A3344]/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-white font-semibold">
                    <User className="w-5 h-5" style={{ color: brandBlue }} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                    onFocus={(e) => e.target.style.borderColor = brandBlue}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-white font-semibold">
                    <Mail className="w-5 h-5" style={{ color: brandBlue }} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    onFocus={(e) => e.target.style.borderColor = brandBlue}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center gap-2 text-white font-semibold">
                    <Phone className="w-5 h-5" style={{ color: brandBlue }} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    placeholder="+251-XXX-XXX-XXX"
                    onFocus={(e) => e.target.style.borderColor = brandBlue}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="flex items-center gap-2 text-white font-semibold">
                    <MapPin className="w-5 h-5" style={{ color: brandBlue }} />
                    Preferred Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors appearance-none"
                    onFocus={(e) => e.target.style.borderColor = brandBlue}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <option value="" className="bg-[#1A3344]">Select a location</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc} className="bg-[#1A3344]">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="preferredDate" className="flex items-center gap-2 text-white font-semibold">
                    <Calendar className="w-5 h-5" style={{ color: brandBlue }} />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors"
                    onFocus={(e) => e.target.style.borderColor = brandBlue}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                   />
                </div>

                <div className="space-y-2">
                  <label htmlFor="preferredTime" className="flex items-center gap-2 text-white font-semibold">
                    <Clock className="w-5 h-5" style={{ color: brandBlue }} />
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors appearance-none"
                    onFocus={(e) => e.target.style.borderColor = brandBlue}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <option value="" className="bg-[#1A3344]">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#1A3344]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-white font-semibold">
                  <MessageSquare className="w-5 h-5" style={{ color: brandBlue }} />
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                  onFocus={(e) => e.target.style.borderColor = brandBlue}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <p className="text-green-500 font-semibold">
                    Appointment booked successfully! We'll contact you shortly.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <p className="text-red-500 font-semibold">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                style={{ 
                  backgroundColor: brandBlue,
                  boxShadow: isSubmitting ? 'none' : `0 10px 20px -5px ${brandBlue}40`
                }}
              >
                {isSubmitting ? 'Processing...' : 'Book Your Site Visit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};