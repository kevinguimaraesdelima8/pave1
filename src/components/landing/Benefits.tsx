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
  'BÔNUS 1: Apostila de Geladinho Gourmet',
  'BÔNUS 2: Planilha de Precificação',
];

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
              O que você vai encontrar no e-book?
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl items-center gap-8 mt-12">
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 text-left">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
