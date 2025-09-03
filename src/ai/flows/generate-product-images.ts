'use server';

/**
 * @fileOverview AI flow to generate product images based on a product description.
 *
 * - generateProductImages - A function that generates product images based on a description.
 * - GenerateProductImagesInput - The input type for the generateProductImages function.
 * - GenerateProductImagesOutput - The return type for the generateProductImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductImagesInputSchema = z.object({
  productDescription: z
    .string()
    .describe('A detailed description of the product for which an image should be generated.'),
});
export type GenerateProductImagesInput = z.infer<typeof GenerateProductImagesInputSchema>;

const GenerateProductImagesOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated product image.'),
});
export type GenerateProductImagesOutput = z.infer<typeof GenerateProductImagesOutputSchema>;

export async function generateProductImages(input: GenerateProductImagesInput): Promise<GenerateProductImagesOutput> {
  return generateProductImagesFlow(input);
}

const generateProductImagesPrompt = ai.definePrompt({
  name: 'generateProductImagesPrompt',
  input: {schema: GenerateProductImagesInputSchema},
  output: {schema: GenerateProductImagesOutputSchema},
  prompt: `Generate a product image based on the following description: {{{productDescription}}}. The image should be high-quality and suitable for display on an e-commerce website.`,
});

const generateProductImagesFlow = ai.defineFlow(
  {
    name: 'generateProductImagesFlow',
    inputSchema: GenerateProductImagesInputSchema,
    outputSchema: GenerateProductImagesOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      prompt: input.productDescription,
      model: 'googleai/imagen-4.0-fast-generate-001',
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate product image.');
    }
    return {imageUrl: media.url};
  }
);
