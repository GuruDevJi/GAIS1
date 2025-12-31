
import { GoogleGenAI } from "@google/genai";

export async function refineProfessionalBio(rawText: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Refine the following professional notes into a compelling, concise, and modern professional bio for a personal website. Make it professional but approachable. Notes: "${rawText}"`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text || "I couldn't refine the bio at this time. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to refine bio. Please check your network or try again.");
  }
}

export async function optimizeExperienceBullet(bullet: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Rewrite this job experience bullet point to be more impact-oriented and professional, using strong action verbs: "${bullet}"`,
      config: {
        temperature: 0.6,
      }
    });

    return response.text || bullet;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return bullet;
  }
}
