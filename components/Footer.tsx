import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-serif text-white mb-6 tracking-wider">FORJADO EN ORO</h4>
            <p className="font-light leading-relaxed max-w-md mb-6">
              Cada pieza es una obra maestra, forjada con pasión y precisión para quienes nunca se rinden. 
              Creamos legados brillantes que perduran.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white uppercase tracking-widest text-sm mb-6 font-semibold">Contacto</h5>
            <ul className="space-y-4 font-light">
              <li>Av. Masaryk 450, Polanco</li>
              <li>CDMX, México</li>
              <li className="pt-2 hover:text-white transition-colors">
                <a href="mailto:contacto@forjadoenoro.com">contacto@forjadoenoro.com</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="tel:+525512345678">+52 55 1234 5678</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white uppercase tracking-widest text-sm mb-6 font-semibold">Horario</h5>
            <ul className="space-y-4 font-light">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">11:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-gold-500">Cita Previa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Forjado en Oro. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};