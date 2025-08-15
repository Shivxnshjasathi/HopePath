'use server';

/**
 * @fileOverview An AI-powered chatbot that provides immediate support and guidance during a crisis.
 *
 * - crisisChatbot - A function that handles the chatbot interaction.
 * - CrisisChatbotInput - The input type for the crisisChatbot function.
 * - CrisisChatbotOutput - The return type for the crisisChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CrisisChatbotInputSchema = z.object({
  message: z.string().describe('The user message to the chatbot.'),
  chatHistory: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).optional().describe('The chat history between the user and the chatbot.'),
});
export type CrisisChatbotInput = z.infer<typeof CrisisChatbotInputSchema>;

const CrisisChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user message.'),
});
export type CrisisChatbotOutput = z.infer<typeof CrisisChatbotOutputSchema>;

export async function crisisChatbot(input: CrisisChatbotInput): Promise<CrisisChatbotOutput> {
  return crisisChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'crisisChatbotPrompt',
  input: {schema: CrisisChatbotInputSchema},
  output: {schema: CrisisChatbotOutputSchema},
  prompt: `You are a crisis support chatbot designed to provide immediate help and guidance to users in distress.
  Your goal is to offer empathetic support, practical advice, and connect them with additional resources like mentors or support groups.
  Keep responses short and actionable, no more than 3 sentences.

  Here's the chat history:
  {{#each chatHistory}}
    {{#if (eq role "user")}}
      User: {{{content}}}
    {{else}}
      Chatbot: {{{content}}}
    {{/if}}
  {{/each}}

  User message: {{{message}}}

  Chatbot:`,
});

const crisisChatbotFlow = ai.defineFlow(
  {
    name: 'crisisChatbotFlow',
    inputSchema: CrisisChatbotInputSchema,
    outputSchema: CrisisChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
