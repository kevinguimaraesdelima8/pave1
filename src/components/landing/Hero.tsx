import { Zap, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground text-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="inline-flex animate-pulse items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 shadow-md">
            <Zap className="mr-2 h-4 w-4" />
            OFERTA RELÂMPAGO - ÚLTIMAS VAGAS
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl/none text-white">
            Transforme Sua Cozinha em
            <br />
            Uma{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow-400">Fonte de Renda:</span>
              <svg
                className="absolute left-0 -bottom-2 w-full h-2 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            100
            <br />
            Receitas de Pavê que Vendem
            <br />
            Sozinhas!
          </h1>
          <div className="w-full max-w-md mx-auto space-y-4 pt-4">
            <a href="#offer" className="block">
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-6 shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal h-auto"
              >
                <ChefHat className="mr-2 h-6 w-6" />
                QUERO AS RECEITAS AGORA
              </Button>
            </a>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-primary-foreground/90">
              Com apenas um liquidificador e ingredientes simples, você vai preparar pavês cremosos e irresistíveis, sem
              precisar de experiência na cozinha. Ganhe dinheiro sem sair de casa!
            </p>
            <p className="text-xs text-primary-foreground/80">
              Acesso imediato e 100% seguro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
