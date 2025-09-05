'use server';
/**
 * @fileOverview An AI flow for generating podcast ideas.
 * 
 * - generatePodcastIdea - A function that generates a podcast idea, YouTube title/description, and TL;DR.
 * - PodcastIdeaInput - The input type for the generatePodcastIdea function.
 * - PodcastIdeaOutput - The return type for the generatePodcastIdea function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const PodcastIdeaInputSchema = z.object({
  topic: z.string().describe('The main topic or niche of the podcast.'),
  audience: z.string().describe('The target audience for the podcast.'),
  guests: z.string().describe('Potential types of guests for the podcast (e.g., experts, authors).'),
  style: z.string().describe('The desired style or format of the podcast (e.g., interviews, storytelling).'),
});
export type PodcastIdeaInput = z.infer<typeof PodcastIdeaInputSchema>;

const PodcastIdeaOutputSchema = z.object({
  podcastIdea: z.object({
    title: z.string().describe('A creative and catchy title for the podcast.'),
    concept: z.string().describe('A one-paragraph concept for the podcast.'),
  }),
  youtubeDetails: z.object({
    title: z.string().describe('An SEO-friendly title for a YouTube video based on the podcast idea.'),
    description: z.string().describe('A detailed YouTube video description, including hashtags.'),
  }),
  tldr: z.array(z.string()).describe('A bulleted list summarizing the key points of the podcast concept.'),
});
export type PodcastIdeaOutput = z.infer<typeof PodcastIdeaOutputSchema>;


export async function generatePodcastIdea(input: PodcastIdeaInput): Promise<PodcastIdeaOutput> {
  return podcastIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'podcastIdeaPrompt',
  input: { schema: PodcastIdeaInputSchema },
  output: { schema: PodcastIdeaOutputSchema },
  prompt: `You are an expert podcast producer and content strategist. Based on the following user input, generate a creative and compelling podcast idea.

User Input:
- Topic/Niche: {{{topic}}}
- Target Audience: {{{audience}}}
- Potential Guests: {{{guests}}}
- Podcast Style: {{{style}}}

Your Task:
1.  **Podcast Idea**: Create a unique title and a short, engaging concept for the podcast.
2.  **YouTube Details**: Write a compelling, SEO-friendly title and a detailed description for a YouTube version of the podcast. The description should be a few paragraphs long and include relevant hashtags.
3.  **TL;DR**: Provide a concise summary of the podcast idea in 3-5 bullet points.

Please provide the output in the specified JSON format.`,
});

const podcastIdeaFlow = ai.defineFlow(
  {
    name: 'podcastIdeaFlow',
    inputSchema: PodcastIdeaInputSchema,
    outputSchema: PodcastIdeaOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate podcast idea. The AI model did not return a valid output.');
    }
    return output;
  }
);
