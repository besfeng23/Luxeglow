'use server';
/**
 * @fileOverview An AI agent that recommends suitable Luxe Glow treatments or packages based on user-provided skin concerns and beauty goals.
 *
 * - aiTreatmentRecommender - A function that handles the AI treatment recommendation process.
 * - AITreatmentRecommenderInput - The input type for the aiTreatmentRecommender function.
 * - AITreatmentRecommenderOutput - The return type for the aiTreatmentRecommender function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AITreatmentRecommenderInputSchema = z.object({
  skinConcerns: z.array(z.string()).describe('A list of the user\'s primary skin concerns (e.g., "acne", "fine lines", "dullness").'),
  beautyGoals: z.array(z.string()).describe('A list of the user\'s beauty goals (e.g., "anti-aging", "brightening", "hydration").'),
  ageGroup: z.string().describe('The user\'s age group (e.g., "20s", "30s", "40s+", "Teen").'),
  skinType: z.string().describe('The user\'s skin type (e.g., "oily", "dry", "combination", "normal", "sensitive").'),
  preferredTreatments: z.array(z.string()).optional().describe('Any specific treatments the user is interested in (optional).')
});
export type AITreatmentRecommenderInput = z.infer<typeof AITreatmentRecommenderInputSchema>;

const AITreatmentRecommenderOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      name: z.string().describe('The name of the recommended Luxe Glow treatment or package.'),
      description: z.string().describe('A brief, luxurious description of the recommended treatment.'),
      reason: z.string().describe('A personalized explanation of why this treatment is suitable for the user\'s concerns and goals.')
    })
  ).describe('A list of 2-3 personalized treatment recommendations from Luxe Glow Premier.'),
  generalAdvice: z.string().optional().describe('Optional general beauty or skincare advice tailored to the user\'s input.')
});
export type AITreatmentRecommenderOutput = z.infer<typeof AITreatmentRecommenderOutputSchema>;

export async function aiTreatmentRecommender(input: AITreatmentRecommenderInput): Promise<AITreatmentRecommenderOutput> {
  return aiTreatmentRecommenderFlow(input);
}

const treatmentRecommendationPrompt = ai.definePrompt({
  name: 'treatmentRecommendationPrompt',
  input: {schema: AITreatmentRecommenderInputSchema},
  output: {schema: AITreatmentRecommenderOutputSchema},
  prompt: `You are an exclusive beauty concierge from Luxe Glow Premier, an elite aesthetic clinic. Your role is to provide personalized, luxurious treatment recommendations to clients based on their unique skin concerns and beauty goals.\n\nCurrent Luxe Glow Premier Treatments and Packages (for your reference, do not fabricate new ones):\n- Luxe Signature Facial: A comprehensive, rejuvenating facial tailored to individual skin needs, often including cleansing, steaming, pricking, diamond peel, radiofrequency, high frequency, cold hammer, sunscreen, and PDT light.\n- Carbon Laser with Basic Facial: Advanced skin rejuvenation for texture, pores, and tone, combined with a foundational facial.\n- BB Glow: Semi-permanent foundation for radiant, even-toned skin.\n- BB Blush: Natural, long-lasting blush effect.\n- Botox-related treatments: Advanced solutions for fine lines and wrinkles.\n- IPL Hair Removal: Long-term hair reduction.\n- Wart Removal: Safe and effective removal of skin imperfections.\n- Mesolipo: Targeted fat reduction and body contouring.\n- Holiday Packages: Special offers often including group beauty experiences or bridal shower packages.\n- Free Basic Facial Offer: A foundational facial experience.\n\nBased on the client's information, recommend 2-3 most suitable treatments or packages from Luxe Glow Premier. Ensure your recommendations are detailed, luxurious, and clearly explain why each treatment addresses their specific skin concerns and helps achieve their beauty goals. Provide a short description for each and a personalized reason.\nIf appropriate, offer some general advice.\n\nClient Profile:\n- Skin Concerns: {{#each skinConcerns}}- {{{this}}}\n{{/each}}\n- Beauty Goals: {{#each beautyGoals}}- {{{this}}}\n{{/each}}\n- Age Group: {{{ageGroup}}}\n- Skin Type: {{{skinType}}}\n{{#if preferredTreatments}}\n- Preferred Treatments: {{#each preferredTreatments}}- {{{this}}}\n{{/each}}\n{{/if}}\n\nProvide your response in a structured JSON format as described by the output schema, maintaining the elegant and aspirational tone of Luxe Glow Premier.`
});

const aiTreatmentRecommenderFlow = ai.defineFlow(
  {
    name: 'aiTreatmentRecommenderFlow',
    inputSchema: AITreatmentRecommenderInputSchema,
    outputSchema: AITreatmentRecommenderOutputSchema
  },
  async (input) => {
    const {output} = await treatmentRecommendationPrompt(input);
    return output!;
  }
);