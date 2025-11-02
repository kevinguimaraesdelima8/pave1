import { CheckCircle2, TrendingUp, ShieldCheck, Zap, Star, Clock } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  { text: '100 receitas de PAVÊ incríveis e variadas', icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  { text: 'Como precificar e vender com lucro real', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
  { text: 'Certificado de conclusão incluído', icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
  { text: 'Como deixar o creme liso e firme no ponto certo', icon: <Zap className="h-6 w-6 text-primary" /> },
  { text: 'Como molhar os biscoitos sem encharcar', icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  { text: 'Como montar e decorar para impressionar', icon: <Star className="h-6 w-6 text-primary" /> },
  { text: 'Dicas pra vender MUITO, mesmo sem sair de casa', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
  { text: 'Pavê bonito e delicioso, sem excesso de açúcar', icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  { text: 'Técnicas rápidas, práticas e fáceis de repetir', icon: <Clock className="h-6 w-6 text-primary" /> },
  { text: 'Recheios que não vão ao fogo - super práticos!', icon: <Zap className="h-6 w-6 text-primary" /> },
];

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
              O Que Você Vai Receber Hoje:
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Tudo que você precisa para começar a lucrar vendendo pavê
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-6 sm:grid-cols-2 pt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-primary/20 bg-primary/5 p-4 transition-all duration-300 hover:shadow-lg hover:border-primary hover:scale-105"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                {benefit.icon}
              </div>
              <p className="flex-1 text-base font-medium text-foreground text-left">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
