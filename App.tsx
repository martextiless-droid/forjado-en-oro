import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGallery } from './components/ProductGallery';
import { GiftAssistant } from './components/GiftAssistant';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen relative">
      <Navbar />
      <Hero />
      <ProductGallery />
      
      {/* Value Props Section */}
      <section className="py-16 bg-white border-y border-stone-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h4 className="font-serif text-xl mb-3 text-stone-800">Envíos Seguros</h4>
            <p className="text-stone-500 text-sm font-light">Entrega asegurada y discreta a todo el país.</p>
          </div>
          <div className="p-6 md:border-x border-stone-100">
            <h4 className="font-serif text-xl mb-3 text-stone-800">Certificado de Autenticidad</h4>
            <p className="text-stone-500 text-sm font-light">Cada gema validada por expertos gemólogos.</p>
          </div>
          <div className="p-6">
            <h4 className="font-serif text-xl mb-3 text-stone-800">Garantía de por Vida</h4>
            <p className="text-stone-500 text-sm font-light">Mantenimiento y limpieza anual sin costo.</p>
          </div>
        </div>
      </section>

      <GiftAssistant />
      
      <section id="testimonials" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif italic text-stone-800 mb-12">"Una experiencia de compra inigualable. La atención personalizada por WhatsApp hizo toda la diferencia."</h3>
          <p className="text-sm font-bold uppercase tracking-widest text-gold-600">- Sofía Ramirez, Cliente VIP</p>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default App;