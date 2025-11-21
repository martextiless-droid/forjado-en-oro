import { GoogleGenAI, Type } from "@google/genai";
import { GiftSuggestionResponse } from '../types';

// Initialize the Gemini API client
// IMPORTANT: The API key must be set in the environment variable API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGiftSuggestion = async (description: string): Promise<GiftSuggestionResponse> => {
  try {
    const prompt = `
      Actúa como un joyero experto de la marca de lujo "Forjado en Oro".
      El usuario está buscando un regalo y ha descrito lo siguiente: "${description}".
      
      Tu tarea es sugerir UNA pieza de joyería específica (anillo, collar, pulsera, etc.) que se ajuste a esa descripción, el material sugerido (oro, plata, platino) y la gema (si aplica).
      
      Sé breve, elegante y persuasivo, manteniendo el tono de la marca: "Brillar es para quienes no se rinden".
      Responde estrictamente en formato JSON.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: {
              type: Type.STRING,
              description: "El nombre de la pieza sugerida y una breve descripción poética (ej. 'Collar Fénix en Oro Rosa con Rubí')."
            },
            reasoning: {
              type: Type.STRING,
              description: "Una frase corta explicando por qué es perfecta para la ocasión y cómo simboliza perseverancia o éxito."
            }
          },
          required: ["suggestion", "reasoning"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GiftSuggestionResponse;
    }
    
    throw new Error("No response text from Gemini");

  } catch (error) {
    console.error("Error getting gift suggestion:", error);
    // Fallback response in case of API error or missing key
    return {
      suggestion: "Consulta Personalizada con Experto",
      reasoning: "Nuestros expertos pueden ayudarte mejor directamente por WhatsApp."
    };
  }
};