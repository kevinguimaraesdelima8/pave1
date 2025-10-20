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

  Headline: "Transforme sua cozinha em uma fonte de renda: mais de 200 receitas de Pavê que se vendem sozinhas – por apenas R$19,90!"

  Subheadline: "Com apenas um liquidificador e ingredientes simples, você vai preparar pavês cremosos e irresistíveis, sem precisar de experiência na cozinha. Ganhe dinheiro sem sair de casa!"

  Section of benefits in short bullets:

  ✅ 100 receitas de PAVÊ
  ✅ Como precificar e vender
  ✅ Certificado
  ✅ Como deixar o creme liso e firme no ponto certo.
  ✅ Como molhar os biscoitos sem encharcar.
  ✅ Como montar e decorar para impressionar.
  ✅ Dicas pra vender MUITO, mesmo sem sair de casa!
  ✅ Pavê bonito e delicioso, sem excesso de açúcar.
  ✅ Técnicas rápidas, práticas e fáceis de repetir.
  ✅ Recheios que não vão ao fogo

  Social proof: "Mais de 2.500 mulheres já começaram a faturar em casa com essas receitas. Agora é a sua vez!"

  Offer with scarcity and urgency: "🔥 De R$97 por apenas R$19,90. ⚠️ Oferta por tempo limitado – garanta agora antes que saia do ar!"

  Call to action: "👉 Clique no botão abaixo e receba imediatamente o eBook completo direto no seu WhatsApp!"

  Button: "EU QUERO COMEÇAR A VENDER AGORA" (cor verde chamativa).

  Guarantee: "📘 Receba hoje, acesso vitalício, risco zero!"

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

    