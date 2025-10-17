import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-pave');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none font-headline">
              Transforme Sua Cozinha em Uma Fonte de Renda:{' '}
              <span className="text-white drop-shadow-lg">100 Receitas de Pavê</span> que Vendem Sozinhas!
            </h1>
            <p className="max-w-[600px] md:text-xl mx-auto lg:mx-0 text-primary-foreground/90">
              Com apenas um liquidificador e ingredientes simples, você vai preparar pavês cremosos e irresistíveis, sem
              precisar de experiência na cozinha. Ganhe dinheiro sem sair de casa!
            </p>
            <div className="w-full max-w-md mx-auto lg:mx-0 space-y-2">
              <a href="#offer" className="block">
                <Button
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6 shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal h-auto"
                >
                  QUERO AS RECEITAS!
                </Button>
              </a>
              <p className="text-xs text-center text-primary-foreground/80">
                Clique e receba o eBook completo direto no seu WhatsApp!
              </p>
            </div>
          </div>
          <div className="relative aspect-video mx-auto overflow-hidden rounded-xl shadow-2xl w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
