import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getGiftSuggestion } from '../services/geminiService';
import { GiftSuggestionResponse } from '../types';

export const GiftAssistant: React.FC = () => {
  const [description, setDescription] = useState('');
  const [suggestion, setSuggestion] = useState<GiftSuggestionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) return;

    setLoading(true);
    setError(false);
    setSuggestion(null);

    try {
      const result = await getGiftSuggestion(description);
      setSuggestion(result);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const sendToWhatsApp = () => {
    if (!suggestion) return;
    const text = `Hola Forjado en Oro, mi asistente de IA me sugirió: "${suggestion.suggestion}" porque "${suggestion.reasoning}". ¿Me podrían dar más información o mostrar opciones similares?`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="ai-assistant" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-700/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-300 text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              Inteligencia Artificial Gemini
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              ¿Indeciso con el <span className="text-gold-400 italic">Regalo Perfecto</span>?
            </h2>
            <p className="text-stone-300 text-lg mb-8 font-light leading-relaxed">
              Nuestro Asistente Personal de IA está entrenado para sugerir la joya ideal que represente el éxito y la perseverancia. 
              Cuéntanos para quién es, la ocasión y sus gustos.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-1 rounded-lg border border-white/10 focus-within:border-gold-500/50 transition-colors">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ej: Es para mi socia, celebramos el cierre de un gran negocio, le gusta el oro blanco..."
                className="w-full bg-transparent text-white p-4 min-h-[100px] outline-none placeholder:text-stone-500 resize-none"
              />
              <div className="flex justify-end p-2">
                <button
                  onClick={handleGenerate}
                  disabled={loading || !description.trim()}
                  className={`px-6 py-3 rounded bg-gold-500 text-stone-900 font-bold uppercase tracking-wider text-sm hover:bg-gold-400 transition-all flex items-center gap-2 ${
                    loading || !description.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(204,160,62,0.4)]'
                  }`}
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  {loading ? 'Analizando...' : 'Sugerir Joya'}
                </button>
              </div>
            </div>
            
            {error && (
              <p className="text-red-400 mt-4 text-sm">Hubo un error al conectar con el asistente. Por favor intenta de nuevo o contáctanos directamente.</p>
            )}
          </div>

          <div className="lg:w-1/2 w-full">
            {suggestion ? (
              <div className="bg-white text-stone-900 p-8 md:p-10 shadow-2xl border-t-4 border-gold-500 relative animate-fade-in-up">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-stone-200"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-stone-200"></div>
                
                <h3 className="text-stone-500 uppercase text-xs tracking-widest mb-2">Recomendación Exclusiva</h3>
                <h4 className="text-3xl font-serif text-gold-700 mb-4">{suggestion.suggestion}</h4>
                <p className="text-stone-600 italic mb-8 border-l-2 border-gold-200 pl-4">
                  "{suggestion.reasoning}"
                </p>
                
                <button
                  onClick={sendToWhatsApp}
                  className="w-full py-4 bg-stone-900 text-white uppercase tracking-widest hover:bg-stone-800 transition-colors flex items-center justify-center gap-3 group"
                >
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Consultar Disponibilidad
                </button>
              </div>
            ) : (
              <div className="h-full min-h-[300px] flex items-center justify-center border border-dashed border-white/20 rounded-lg text-stone-500 bg-white/5">
                <p className="text-sm uppercase tracking-widest">El resultado aparecerá aquí</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};