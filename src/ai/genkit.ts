import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({
    apiKey: "AIzaSyBwNywxcIhAk8t-xC_9yDLRCBuA9ZOPm88"
  })],
});
