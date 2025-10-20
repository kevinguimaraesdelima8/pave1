import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const bonuses = [
  {
    id: 'bonus-1',
    title: 'Bônus 1 - 150 Recheios preguiçosos que duram 60 dias na geladeira',
    description: 'São mais de 150 recheios que não vão ao fogo e duram até 60 dias na geladeira.',
    price: 'R$ 47,00',
    bgColor: 'bg-pink-500',
    textColor: 'text-white',
    image: PlaceHolderImages.find(p => p.id === 'bonus-pudim-ebook'),
  },
  {
    id: 'bonus-2',
    title: 'Bônus 2 – Lista de Compras Inteligente + Econômica',
    description: 'Descubra o que comprar, onde pagar mais barato e como montar refeições completas sem desperdício.',
    price: 'R$ 47,00',
    bgColor: 'bg-cyan-400',
    textColor: 'text-white',
    image: PlaceHolderImages.find(p => p.id === 'bonus-shopping-list-ebook'),
  },
  {
    id: 'bonus-3',
    title: 'Bônus 3 – Tabela de Sabores + Caldas Irresistíveis',
    description: 'Combinações perfeitas de sabores e caldas para deixar seus pavês ainda mais irresistíveis.',
    price: 'R$ 47,00',
    bgColor: 'bg-purple-500',
    textColor: 'text-white',
    image: PlaceHolderImages.find(p => p.id === 'bonus-flavors-ebook'),
  },
];

export default function Bonus() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                Bônus que você recebe ao adquirir hoje:
            </h2>
        </div>
        <div className="mx-auto max-w-4xl space-y-6">
            {bonuses.map((bonus) => (
                <div key={bonus.id} className={`rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6 ${bonus.bgColor} ${bonus.textColor}`}>
                    {bonus.image && (
                         <div className="relative w-32 h-40 flex-shrink-0">
                            <Image
                                src={bonus.image.imageUrl}
                                alt={bonus.image.description}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                                data-ai-hint={bonus.image.imageHint}
                            />
                        </div>
                    )}
                    <div className='text-left'>
                        <h3 className="text-xl font-bold">{bonus.title}</h3>
                        <p className="mt-2 text-base opacity-90">{bonus.description}</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="line-through opacity-80">{bonus.price}</span>
                            <Badge className="bg-green-500 text-white font-bold text-lg py-1 px-4 border-none">GRÁTIS</Badge>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
