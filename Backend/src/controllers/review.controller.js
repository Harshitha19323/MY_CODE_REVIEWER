import { analyzeCode } from "../services/llm.service.js";

export const reviewCode = async (req, res) => {
  try {
    const { code } = req.body || {};

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const result = await analyzeCode(code);

    res.json(result);
  } catch (error) {
  console.error("FULL ERROR:", error);

  res.status(500).json({
    error: error.message,
    details: error.response?.data || null
  });
}
};