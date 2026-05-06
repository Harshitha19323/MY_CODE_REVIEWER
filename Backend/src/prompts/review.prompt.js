export const reviewPrompt = (code) => `
You are a senior backend engineer.

Analyze the following code and return:
1. Issues
2. Suggestions
3. Explanation (simple for students)

Code:
${code}

Return response strictly in JSON:
{
  "issues": [],
  "suggestions": [],
  "explanation": ""
}
`;