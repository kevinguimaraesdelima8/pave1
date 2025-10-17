import { Button } from '@/components/ui/button';
import { Zap, Users, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 shadow-md">
            <Zap className="mr-2 h-4 w-4" />
            OFERTA RELÂMPAGO - ÚLTIMAS VAGAS
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl/none text-white">
            Transforme Sua Cozinha em
            <br />
            Uma{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-yellow-400 px-2 text-primary rounded-md">Fonte de Renda:</span>
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
          <p className="max-w-[600px] md:text-lg text-primary-foreground/90">
            Com apenas um liquidificador e ingredientes simples, você vai preparar pavês cremosos e irresistíveis, sem
            precisar de experiência na cozinha.{' '}
            <span className="font-bold text-yellow-300">Ganhe dinheiro sem sair de casa!</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-md bg-white/20 px-4 py-2">
              <Users className="h-5 w-5 text-white" />
              <span className="font-semibold text-white">+2.500 alunas</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-white/20 px-4 py-2">
              <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
              <span className="font-semibold text-white">4.9/5 estrelas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
