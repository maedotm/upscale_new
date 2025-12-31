import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Locations } from './components/Locations';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Appointment } from './components/Appointment';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Locations />
      <Features />
      <Gallery />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
