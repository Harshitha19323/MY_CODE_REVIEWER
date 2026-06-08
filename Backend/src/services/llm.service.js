import OpenAI from "openai";
import { reviewPrompt } from "../prompts/review.prompt.js";

export const analyzeCode = async (code) => {
  const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
  });

  const prompt = reviewPrompt(code);

  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "user", content: prompt }
    ],
    temperature: 0.3
  });

  const text = response.choices[0].message.content;

  try {
    const cleaned = text.match(/\{[\s\S]*\}/);
    return cleaned ? JSON.parse(cleaned[0]) : { raw: text };
  } catch {
    return { raw: text };
  }
};