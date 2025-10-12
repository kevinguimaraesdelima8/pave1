import { Users } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center bg-primary text-primary-foreground rounded-lg p-8 md:p-12 lg:p-16 shadow-lg">
          <Users className="h-12 w-12" />
          <p className="text-2xl md:text-3xl font-bold font-headline">
            Mais de 2.500 mulheres já começaram a faturar em casa com essas receitas.
          </p>
          <p className="text-lg md:text-xl">Agora é a sua vez!</p>
        </div>
      </div>
    </section>
  );
}
