import { GoogleGenAI, Type } from "@google/genai";
import { GiftSuggestionResponse } from '../types';

// Initialize the Gemini API client
// IMPORTANT: The API key must be set in the environment variable API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGiftSuggestion = async (description: string): Promise<GiftSuggestionResponse> => {
  try {
    const prompt = `
Diseña una imagen fotorrealista de una joya exclusiva de alta gama (anillo, collar, pulsera, etc) para la marca "Forjado en Oro".
      
      La joya debe estar diseñada específicamente basándose en esta personalidad/descripción del cliente: "${description}".
      
      Estilo visual:
      - Fotografía de producto de lujo, macro, iluminación cinematográfica.
      - Materiales: Oro (amarillo, blanco o rosa), piedras preciosas brillantes.
      - Fondo: Elegante, oscuro o neutro de estudio para resaltar el brillo.
      - La pieza debe evocar el slogan: "Brillar es para quienes no se rinden".

      Además de la imagen, proporciona un breve texto explicando el nombre de la pieza y por qué encaja con la descripción.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        // Image generation configuration
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    let imageUrl = "";
    let textContent = "";

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          imageUrl = `data:image/png;base64,${base64EncodeString}`;
        } else if (part.text) {
          textContent += part.text;
        }
      }
    }

    if (!imageUrl) {
      throw new Error("No image generated");
    }

    // Simple parsing to try to extract a title if possible, otherwise use generic
    const titleMatch = textContent.match(/Nombre:?\s*(.+?)(\n|$)/i) || textContent.split('\n')[0]; 
    const title = titleMatch ? (typeof titleMatch === 'string' ? titleMatch : titleMatch[1]) : "Diseño Exclusivo IA";
    
    return {
      imageUrl: imageUrl,
      title: title.replace(/[*"]/g, '').trim(), // Clean up markdown
      description: textContent.replace(title, '').trim() || "Diseño único basado en tu descripción."
    };

  } catch (error) {
    console.error("Error getting gift suggestion:", error);
    throw error;
  }
};
