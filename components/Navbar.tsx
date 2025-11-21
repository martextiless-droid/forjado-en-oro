import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Colecciones', href: '#collections' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Asistente IA', href: '#ai-assistant' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-serif font-bold tracking-widest text-stone-800 flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-gold-500" />
          FORJADO EN ORO
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider text-stone-600 hover:text-gold-700 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890" 
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-stone-800 text-white text-sm uppercase tracking-wider hover:bg-gold-500 transition-colors duration-300"
          >
            Contactar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-8 px-6 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-600 hover:text-gold-600 font-serif text-lg"
            >
              {link.name}
            </a>
          ))}
          <a
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gold-600 font-bold mt-4"
          >
              Contactar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};