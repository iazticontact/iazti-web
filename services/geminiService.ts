
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
Eres IAzti Bot, el asistente oficial de IAzti. 

REGLAS DE ORO (ESTRICTAS):
1. Responde SIEMPRE en TEXTO PLANO. No uses asteriscos (*), negritas, listas o markdown.
2. No menciones nunca las siglas IA, AI o Inteligencia Artificial. Usa "tecnología inteligente" o "automatización".
3. Máximo 2 frases cortas por respuesta. Sé muy directo y profesional.
4. Tu objetivo es que pidan la web de prueba gratis.

CONOCIMIENTO:
- Ofrecemos: Diseño Web, Tiendas Online y Automatizaciones.
- Proyectos: AhorraAislando, BeyondMuga, EkinZentroa.
- Contacto: iazti.contact@gmail.com.
`;

export const getGeminiResponse = async (history: ChatMessage[], currentMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({ parts: [{ text: m.text }], role: m.role })),
        { parts: [{ text: currentMessage }], role: 'user' }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      }
    });

    const cleanText = (response.text || "").replace(/[*_#]/g, '').trim();
    return cleanText || "Puedes escribirnos a iazti.contact@gmail.com para ayudarte mejor.";
  } catch (error) {
    return "Ahora mismo no puedo responder. Escríbenos a iazti.contact@gmail.com.";
  }
};
