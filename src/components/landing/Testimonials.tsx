import Image from 'next/image';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: 'Nunca imaginei que faria tanto sucesso! Comecei vendendo para as vizinhas e hoje tenho uma renda extra que mudou minha vida. As receitas são fáceis e deliciosas.',
    name: 'Maria S.',
    location: 'São Paulo, SP',
    avatarId: 'avatar-1',
  },
  {
    quote: 'Eu não tinha nenhuma experiência na cozinha e mesmo assim consegui fazer os pavês mais cremosos que já comi. O e-book é super didático, vale cada centavo!',
    name: 'Ana P.',
    location: 'Belo Horizonte, MG',
    avatarId: 'avatar-2',
  },
  {
    quote: 'Estava desempregada e precisando de dinheiro. Com as receitas do Pavê Lucrativo, comecei a vender por encomenda e hoje tenho minha própria clientela. Estou muito feliz!',
    name: 'Carla M.',
    location: 'Rio de Janeiro, RJ',
    avatarId: 'avatar-3',
  },
];

const avatarImages = PlaceHolderImages.filter(p => p.id.startsWith('avatar-'));

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
              Elas Confiaram e Transformaram Suas Vidas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja o que nossas alunas estão dizendo sobre o e-book Pavê Lucrativo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => {
            const avatar = avatarImages.find(img => img.id === testimonial.avatarId);
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={avatar?.imageUrl || ''}
                    alt={`Avatar of ${testimonial.name}`}
                    className="rounded-full object-cover"
                    fill
                    sizes="96px"
                    data-ai-hint={avatar?.imageHint}
                  />
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic mb-4">“{testimonial.quote}”</blockquote>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
