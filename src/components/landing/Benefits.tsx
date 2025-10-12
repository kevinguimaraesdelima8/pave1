import { CheckCircle2 } from 'lucide-react';

const benefits = [
  '100 receitas de PAVÊ',
  'Como precificar e vender',
  'Certificado de conclusão',
  'Como deixar o creme liso e firme no ponto certo',
  'Como molhar os biscoitos sem encharcar',
  'Como montar e decorar para impressionar',
  'Dicas para vender MUITO, mesmo sem sair de casa!',
  'Pavê bonito e delicioso, sem excesso de açúcar',
  'Técnicas rápidas, práticas e fáceis de repetir',
  'Recheios que não vão ao fogo',
];

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Tudo que você vai receber
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Um guia completo para você começar a lucrar com pavês deliciosos, mesmo que nunca tenha vendido um doce
              na vida.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <p className="text-lg font-medium text-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
