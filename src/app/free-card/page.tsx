import { div } from "motion/react-client";
import React from "react";
import OpenAI from "openai";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
  defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  },
});
export default async function FreeCard() {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
    messages: [
      {
        role: "user",
        content: "What is the meaning of life?",
      },
    ],
  });
  return (
    <div className="w-screen text-center font-mono text-2xl font-bold">
      Mã thẻ cào điện thoại: 6138-9308-7574-377
    </div>
  );
}
