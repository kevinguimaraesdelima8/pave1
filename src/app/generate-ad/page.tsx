"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  generateAdvertisingMaterial,
  type GenerateAdvertisingMaterialOutput,
} from "@/ai/flows/generate-advertising-material";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2, CookingPot, Copy } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  highlightDetails: z
    .string()
    .min(10, {
      message: "Por favor, forneça pelo menos 10 caracteres.",
    })
    .max(500, {
      message: "O texto não pode exceder 500 caracteres.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function GenerateAdPage() {
  const [generationResult, setGenerationResult] = useState<GenerateAdvertisingMaterialOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      highlightDetails: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setGenerationResult(null);
    try {
      const result = await generateAdvertisingMaterial({
        highlightDetails: data.highlightDetails,
      });
      setGenerationResult(result);
    } catch (error) {
      console.error("Error generating material:", error);
      toast({
        title: "Erro ao gerar anúncio",
        description: "Ocorreu um problema ao tentar gerar o material. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <CookingPot className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-semibold font-headline">Pavê Lucrativo</span>
        </Link>
      </header>
      <main className="flex-1 p-4 md:p-8 lg:p-12">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Gerador de Conteúdo para Divulgação</CardTitle>
              <CardDescription>
                Use nossa ferramenta de IA para criar textos de marketing para seus pavês. Descreva os sabores, promoções ou eventos que você quer destacar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="highlightDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Detalhes para destacar</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Pavê de limão super cremoso em promoção essa semana! Compre 2 e leve 3."
                            className="resize-none"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Seja específico sobre o que torna seu produto especial no momento.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} size="lg">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Gerando...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Gerar Anúncio
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {isLoading && (
            <div className="mt-8 text-center flex flex-col items-center justify-center gap-4">
              <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
              <p className="mt-2 text-muted-foreground">Criando sua copy de vendas, aguarde um momento...</p>
            </div>
          )}

          {generationResult && (
            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <CardTitle>Material Gerado</CardTitle>
                <CardDescription>Use este texto para divulgar seus produtos nas redes sociais ou WhatsApp.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap bg-secondary/50 p-4 rounded-md border">
                  {generationResult.advertisingMaterial}
                </div>
              </CardContent>
              <CardFooter>
                  <Button variant="outline" onClick={() => navigator.clipboard.writeText(generationResult.advertisingMaterial).then(() => toast({title: "Copiado!", description: "Texto copiado para a área de transferência."}))}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copiar Texto
                  </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

    