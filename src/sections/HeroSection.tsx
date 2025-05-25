import React from 'react';
import Logo from '../assets/WynmereStudios.png';
import StarParticles from '../components/StarParticles';
import Button from '../components/Button';
import { Wand } from 'lucide-react'; // Add Wand import

const HeroSection: React.FC = () => {
  const scrollToCreations = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const creationsSection = document.querySelector('#creations');
    if (creationsSection) {
      creationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 z-0" />

      {/* Star particles */}
      <StarParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
          <img
            src={Logo}
            alt="Wynmere Studios Logo"
            className="mx-auto w-300 md:w-100"
            style={{ height: '300px', marginBottom: '50px', marginTop: '50px', objectFit: 'contain' }}
          />
        </div>

        <div className="animation-delay-700 animate-fade-in-up">
          <Button onClick={scrollToCreations} className="py-4 px-8 text-base">
            Our Creations
          </Button>
        </div>

        {/* Decorative wand scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Wand
            className="h-10 w-10 text-white drop-shadow-lg"
            style={{ transform: 'rotate(90deg)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
