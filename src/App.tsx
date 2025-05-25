import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EthosSection from './sections/EthosSection';
import ContactSection from './sections/ContactSection';
import CreationsSection from './sections/CreationsSection';
import { NavItem } from './types';

function App() {
  const navItems: NavItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Creations', href: '#creations' },
    { label: 'Ethos', href: '#ethos' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Update document title
    document.title = 'Wynmere Studios';

    // Add custom styles to the body
    document.body.classList.add('bg-indigo-950', 'text-white', 'antialiased');

    // Add animations CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animation-delay-300 {
        animation-delay: 0.3s;
      }
      
      .animation-delay-500 {
        animation-delay: 0.5s;
      }
      
      .animation-delay-700 {
        animation-delay: 0.7s;
      }
    `;
    document.head.appendChild(style);

    // Clean up
    return () => {
      document.body.classList.remove('bg-indigo-950', 'text-white', 'antialiased');
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar items={navItems} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <CreationsSection />
        <EthosSection />
        <ContactSection />
      </main>
      
      <footer className="relative py-8 px-4 text-center text-white/60 text-sm">
        <div className="absolute inset-0 bg-indigo-950 z-0" />
        <div className="relative z-10">
          © {new Date().getFullYear()} Wynmere. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;