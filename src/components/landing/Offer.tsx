import { Button } from '@/components/ui/button';
import { Flame, AlertTriangle, ChefHat } from 'lucide-react';
import Image from 'next/image';

export default function Offer() {
  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Oferta Especial Por Tempo Limitado!</h2>
          <div className="bg-black/20 rounded-lg p-6 md:p-8 space-y-4">
            <p className="text-lg">De <span className="line-through">R$97,00</span> por apenas:</p>
            <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-yellow-400">R$29,90</div>
          </div>
          <div className="flex items-center justify-center gap-2 text-center bg-yellow-500 text-yellow-900 p-3 rounded-lg shadow-md">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <p className="font-semibold text-sm sm:text-base">ATENÇÃO: Esta oferta pode sair do ar a qualquer momento!</p>
          </div>
          <div className="w-full max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-center">
              
            </div>
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
      </div>
    </section>
  );
}
