import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import { ChefHat } from 'lucide-react';

const learnItems = [
  {
    id: 'red-fruits-pave',
    title: 'PAVÊ DE FRUTAS VERMELHAS',
    subtitle: 'Uma opção refrescante e sofisticada',
    image: PlaceHolderImages.find((p) => p.id === 'red-fruits-pave'),
  },
  {
    id: 'passion-fruit-pave',
    title: 'PAVÊ DE MARACUJÁ',
    subtitle: 'Uma receita campeã de vendas',
    image: PlaceHolderImages.find((p) => p.id === 'passion-fruit-pave'),
  },
  {
    id: 'pave-tradicional',
    title: 'PAVÊ TRADICIONAL',
    subtitle: 'O clássico que nunca sai de moda',
    image: PlaceHolderImages.find((p) => p.id === 'pave-tradicional'),
  },
  {
    id: 'pave-chocolate',
    title: 'PAVÊ DE CHOCOLATE',
    subtitle: 'Cremoso, intenso e irresistível',
    image: PlaceHolderImages.find((p) => p.id === 'pave-chocolate'),
  },
  {
    id: 'strawberry-pave',
    title: 'MINI PAVÊ DE MORANGO',
    subtitle: 'Perfeito para venda individual',
    image: PlaceHolderImages.find((p) => p.id === 'strawberry-pave'),
  },
];

export default function YouWillLearn() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
            VOCÊ VAI APRENDER A FAZER:
          </h2>
        </div>
        <div className="mx-auto max-w-2xl space-y-8">
          {learnItems.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-sm mx-auto bg-background rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {item.image && (
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={item.image.imageHint}
                  />
                </div>
              )}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full max-w-md mx-auto space-y-4 mt-12">
            <a href="https://go.tribopay.com.br/2vooy" className="block">
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-6 shadow-lg transform transition-transform duration-300 whitespace-normal h-auto animate-jump"
              >
                <ChefHat className="mr-2 h-6 w-6" />
                QUERO AS RECEITAS AGORA
              </Button>
            </a>
          </div>
      </div>
    </section>
  );
}
