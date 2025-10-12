'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating advertising material for a pavê business.
 *
 * It includes the following:
 * - generateAdvertisingMaterial: An async function that takes advertising details as input and returns generated material.
 * - GenerateAdvertisingMaterialInput: The input type for the generateAdvertisingMaterial function.
 * - GenerateAdvertisingMaterialOutput: The return type for the generateAdvertisingMaterial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdvertisingMaterialInputSchema = z.object({
  highlightDetails: z
    .string()
    .describe(
      'Details about the flavors, features, or events you want to highlight in the advertising material.'
    ),
});

export type GenerateAdvertisingMaterialInput = z.infer<
  typeof GenerateAdvertisingMaterialInputSchema
>;

const GenerateAdvertisingMaterialOutputSchema = z.object({
  advertisingMaterial: z
    .string()
    .describe('The generated advertising material for the pavê business.'),
});

export type GenerateAdvertisingMaterialOutput = z.infer<
  typeof GenerateAdvertisingMaterialOutputSchema
>;

export async function generateAdvertisingMaterial(
  input: GenerateAdvertisingMaterialInput
): Promise<GenerateAdvertisingMaterialOutput> {
  return generateAdvertisingMaterialFlow(input);
}

const generateAdvertisingMaterialPrompt = ai.definePrompt({
  name: 'generateAdvertisingMaterialPrompt',
  input: {schema: GenerateAdvertisingMaterialInputSchema},
  output: {schema: GenerateAdvertisingMaterialOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in creating engaging advertising material for a pavê business.

  Based on the provided details, create compelling advertising copy that highlights the key features and benefits.

  Details to highlight: {{{highlightDetails}}}

  Target Audience: women between 40 and 60 years old who want easy and quick recipes, and also look for extra income by selling pavê at home.

  Desired style: Aggressive sales page copy, highlighting the offer price of R$19.90, and use language to convey scarcity and urgency.

  Structure:

  Headline: "Transform your kitchen into a source of income: more than 200 Pavê recipes that sell themselves – for just R$19.90!"

  Subheadline: "With just a blender and simple ingredients, you will prepare creamy and irresistible pavês, without needing experience in the kitchen. Make money without leaving home!"

  Section of benefits in short bullets:

  ✅ 100 PAVÉ recipes
  ✅ How to price and sell
  ✅ Certificate
  ✅ How to leave the cream smooth and firm at the right point.
  ✅ How to wet the biscuits without soaking.
  ✅ How to assemble and decorate to impress.
  ✅ Tips to sell MUCH, even without leaving home!
  ✅ Beautiful and delicious pavé, without excess sugar.
  ✅ Quick, practical and easy to repeat techniques.
  ✅ Fillings that don't go to the fire

  Social proof: "More than 2,500 women have already started making money at home with these recipes. Now it's your turn!"

  Offer with scarcity and urgency: "🔥 From R$97 for just R$19.90. ⚠️ Limited time offer – guarantee now before it leaves the air!"

  Call to action: "👉 Click on the button below and immediately receive the complete eBook directly on your WhatsApp!"

  Button: "I WANT TO START SELLING NOW" (eye-catching green color).

  Guarantee: "📘 Receive today, lifetime access, zero risk!"

  Colors: Primary color: A warm reddish-orange (#D46A4E) to convey warmth and the homemade quality of the pavês; Background color: Very light orange background (#F8EFE9), almost white, providing a soft contrast; Accent color: A complementary yellow-orange (#E99D42) to highlight calls to action and important information.
  Font: 'Alegreya', a serif with an elegant, intellectual, contemporary feel.
  Follow the structure of the sales page.
  Focus on the PAVÊ recipes
  `, 
});

const generateAdvertisingMaterialFlow = ai.defineFlow(
  {
    name: 'generateAdvertisingMaterialFlow',
    inputSchema: GenerateAdvertisingMaterialInputSchema,
    outputSchema: GenerateAdvertisingMaterialOutputSchema,
  },
  async input => {
    const {output} = await generateAdvertisingMaterialPrompt(input);
    return output!;
  }
);
