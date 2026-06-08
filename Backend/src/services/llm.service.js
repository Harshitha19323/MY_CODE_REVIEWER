import { GoogleGenerativeAI } from "@google/generative-ai";
import { reviewPrompt } from "../prompts/review.prompt.js";

export const analyzeCode = async (code) => {
  const prompt = reviewPrompt(code);

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  try {
    const cleaned = text.match(/\{[\s\S]*\}/);
    return cleaned ? JSON.parse(cleaned[0]) : { raw: text };
  } catch {
    return { raw: text };
  }
};