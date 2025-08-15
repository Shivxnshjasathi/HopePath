'use server';

import { crisisChatbot, type CrisisChatbotInput, type CrisisChatbotOutput } from "@/ai/flows/crisis-chatbot";

export async function runCrisisChatbot(input: CrisisChatbotInput): Promise<CrisisChatbotOutput> {
  try {
    const output = await crisisChatbot(input);
    return output;
  } catch (error) {
    console.error('Error running crisis chatbot flow:', error);
    // It's better to re-throw or handle it in a way that the client can understand.
    // For this case, we'll return an empty response and let the client handle the UI.
    return { response: "I'm sorry, an error occurred. Please try again." };
  }
}
