import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const learnItems = [
  {
    id: 'gluten-free-breads',
    title: 'PÃES ZERO GLÚTEN',
    subtitle: 'Sem glúten e zero lactose',
    image: PlaceHolderImages.find((p) => p.id === 'gluten-free-breads'),
  },
  {
    id: 'cakes-and-desserts',
    title: 'BOLOS E SOBREMESAS',
    subtitle: 'Receitas deliciosas e fáceis de fazer',
    image: PlaceHolderImages.find((p) => p.id === 'cakes-and-desserts'),
  },
  {
    id: 'cakes-and-desserts-2',
    title: 'BOLOS E SOBREMESAS',
    subtitle: 'Receitas deliciosas e fáceis de fazer',
    image: PlaceHolderImages.find((p) => p.id === 'cakes-and-desserts'),
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
        <div className="mx-auto grid max-w-2xl items-stretch gap-8">
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
      </div>
    </section>
  );
}
