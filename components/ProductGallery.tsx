import React from 'react';
import { Product } from '../types';
import { MessageCircle } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    name: "Anillo Solitario Eterno",
    category: "Anillos",
    price: "Consultar",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Collar Zafiro Real",
    category: "Collares",
    price: "Consultar",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pendientes Perla Lunar",
    category: "Pendientes",
    price: "Consultar",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
  }
];

export const ProductGallery: React.FC = () => {
  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Hola, estoy interesado/a en conocer más detalles y precio sobre: ${productName}.`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="collections" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-stone-500 uppercase tracking-widest text-sm mb-3">Nuestras Joyas</h3>
          <h2 className="text-4xl font-serif text-stone-900">Colección Destacada</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="bg-white text-stone-900 px-6 py-3 uppercase tracking-wider text-xs font-bold hover:bg-gold-500 hover:text-white transition-colors duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar Precio
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-xs text-gold-600 uppercase tracking-widest mb-2">{product.category}</p>
                <h3 className="text-xl font-serif text-stone-900 mb-2">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#ai-assistant" className="inline-block border-b border-stone-900 text-stone-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors uppercase tracking-wider text-sm">
            Ver catálogo completo en WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};