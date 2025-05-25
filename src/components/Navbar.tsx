import React, { useState, useEffect } from 'react';
import Mascot from '../assets/Mascot.png';
import { NavItem } from '../types';

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-gradient-to-r from-indigo-900/90 via-purple-800/90 to-pink-800/90 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2 text-white" onClick={(e) => scrollToSection(e, '#hero')}>
          <img
            src={Mascot}
            alt="Wynmere Studios Mascot"
            className="mx-autoF"
            style={{ height: '32px', objectFit: 'contain' }}
          />
          <span className="font-serif font-medium text-lg">Wynmere</span>
        </a>
        <div className="hidden md:flex space-x-6 items-center">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
