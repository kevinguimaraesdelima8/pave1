import { CheckCircle2, TrendingUp, ShieldCheck, Zap, Star, Clock } from 'lucide-react';
import React from 'react';

const benefits = [
  { text: '100 receitas de PAVÊ incríveis e variadas', icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  { text: 'Como precificar e vender com lucro real', icon: <TrendingUp className="h-6 w-6 text-green-600" /> },
  { text: 'Certificado de conclusão incluído', icon: <ShieldCheck className="h-6 w-6 text-green-600" /> },
  { text: 'Como deixar o creme liso e firme no ponto certo', icon: <Zap className="h-6 w-6 text-green-600" /> },
  { text: 'Como molhar os biscoitos sem encharcar', icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  { text: 'Como montar e decorar para impressionar', icon: <Star className="h-6 w-6 text-green-600" /> },
  { text: 'Dicas pra vender MUITO, mesmo sem sair de casa', icon: <TrendingUp className="h-6 w-6 text-green-600" /> },
  { text: 'Pavê bonito e delicioso, sem excesso de açúcar', icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  { text: 'Técnicas rápidas, práticas e fáceis de repetir', icon: <Clock className="h-6 w-6 text-green-600" /> },
  { text: 'Recheios que não vão ao fogo - super práticos!', icon: <Zap className="h-6 w-6 text-green-600" /> },
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
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 mt-12 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-green-200 bg-green-50 p-4 transition-all hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
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