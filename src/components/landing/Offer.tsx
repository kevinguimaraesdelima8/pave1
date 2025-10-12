import { Button } from '@/components/ui/button';
import { Flame, AlertTriangle } from 'lucide-react';

export default function Offer() {
  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="inline-block rounded-lg bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold">
            OFERTA ESPECIAL
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-3xl md:text-5xl font-bold text-muted-foreground line-through">De R$97</p>
            <p className="text-lg text-foreground">por apenas</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary font-headline">R$19,90</h2>
            <p className="text-lg text-foreground">ou 2x de R$10,34</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center text-accent-foreground bg-accent p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <p className="font-semibold text-sm sm:text-base">Oferta por tempo limitado – garanta agora antes que saia do ar!</p>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto space-y-2">
            <a href="#_" className="block">
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg py-6 sm:py-8 shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal h-auto"
              >
                <Flame className="mr-2 h-6 w-6" />
                QUERO APROVEITAR A OFERTA
              </Button>
            </a>
            <p className="text-xs text-muted-foreground">
              👉 Clique no botão e receba imediatamente o eBook completo direto no seu WhatsApp!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
