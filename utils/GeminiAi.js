import OpenAI from "openai";

const apiKey =
  process.env.XAI_API_KEY || process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    "No API key found. Set XAI_API_KEY or OPENAI_API_KEY in Vercel."
  );
}

const client = new OpenAI({
  apiKey,
  baseURL: "https://api.x.ai/v1",
});

export const chatSession = {
  async sendMessage(prompt) {
    try {
      const completion = await client.chat.completions.create({
        model: "grok-4", // Agar tumhare account me available na ho to "grok-3-mini" use karna
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 1,
        max_tokens: 8192,
      });

      return {
        response: {
          text: () => completion.choices[0].message.content,
        },
      };
    } catch (error) {
      console.error("Grok API Error:", error);
      throw error;
    }
  },
};
