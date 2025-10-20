import { Gift, Package, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonuses = [
    {
      title: 'Apostila de Recheios Especiais',
      description: 'Uma seleção secreta de recheios para você diferenciar seus pavês e encantar seus clientes.',
      icon: <Gift className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Guia de Embalagens Criativas',
      description: 'Aprenda a embalar seus pavês de forma profissional e atraente, agregando mais valor ao seu produto.',
      icon: <Package className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Acesso à Comunidade VIP',
      description: 'Troque experiências, tire dúvidas e receba dicas exclusivas no nosso grupo fechado de alunas no WhatsApp.',
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Certificado de Conclusão',
      description: 'Receba um lindo certificado para comprovar sua especialização e passar mais confiança para seus clientes.',
      icon: <Award className="h-8 w-8 text-primary" />,
    }
];

const ebookMockup = PlaceHolderImages.find(p => p.id === 'ebook-mockup');

export default function Bonus() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    Bônus Exclusivos
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
                    E Comprando Hoje, Você Leva Tudo Isso de Graça!
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Além das 100 receitas, você receberá acesso imediato a esses bônus incríveis para acelerar seus resultados.
                    </p>
                </div>
                <div className="grid gap-4">
                {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                            {bonus.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{bonus.title}</h3>
                            <p className="text-sm text-muted-foreground">{bonus.description}</p>
                        </div>
                    </div>
                ))}
                </div>
                <div className="w-full max-w-md space-y-4 pt-4">
                  <a href="https://go.paradisepagbr.com/hbd3tbgqb7" className="block">
                    <Button
                        size="lg"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-6 shadow-lg transform transition-transform duration-300 whitespace-normal h-auto animate-jump"
                    >
                        <ChefHat className="mr-2 h-6 w-6" />
                        SIM, QUERO AS RECEITAS E OS BÔNUS!
                    </Button>
                  </a>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {ebookMockup && (
                    <Image
                    src={ebookMockup.imageUrl}
                    alt={ebookMockup.description}
                    width={500}
                    height={500}
                    className="rounded-xl shadow-2xl object-contain"
                    data-ai-hint={ebookMockup.imageHint}
                    />
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
