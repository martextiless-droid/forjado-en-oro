import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const phoneNumber = "1234567890"; // Replace with real number
  const message = encodeURIComponent("Hola, me gustaría recibir asesoría personalizada sobre las joyas de Forjado en Oro.");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Jewelry Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-90 animate-fade-in-up text-gold-100">
          Forjado en Oro
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-8 leading-tight animate-fade-in-up delay-100">
          Brillar es para <br />
          <span className="italic text-gold-300">quienes no se rinden</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-stone-100 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Piezas exclusivas diseñadas para celebrar tu fuerza y perseverancia. La elegancia eterna comienza aquí.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#collections"
            className="px-8 py-4 bg-white text-stone-900 uppercase tracking-widest text-sm hover:bg-gold-50 transition-colors duration-300 font-semibold"
          >
            Ver Colección
          </a>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-stone-900 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
          >
            Asesoría Privada
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};