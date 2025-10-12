import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    quote: 'Nunca imaginei que poderia ganhar dinheiro com algo tão prazeroso. As receitas são fáceis e os clientes amam! Já paguei o investimento no primeiro dia.',
  },
  {
    id: 'testimonial-2',
    name: 'Ana Costa',
    location: 'Belo Horizonte, MG',
    quote: 'Eu estava desempregada e esse e-book foi uma luz no fim do túnel. Comecei vendendo para vizinhos e hoje tenho uma clientela fixa. Recomendo demais!',
  },
  {
    id: 'testimonial-3',
    name: 'Juliana Pereira',
    location: 'Rio de Janeiro, RJ',
    quote: 'As dicas de como montar e decorar fizeram toda a diferença. Meus pavês ficaram lindos e muito mais fáceis de vender. O retorno é rápido e certo.',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Elas confiaram e estão lucrando
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja o que algumas de nossas alunas estão dizendo sobre o e-book de Pavês Lucrativos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial) => {
            const avatarImage = PlaceHolderImages.find((p) => p.id === testimonial.id.replace('testimonial-', 'avatar-'));
            return (
              <Card key={testimonial.id} className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex-1">
                  <div className="flex text-accent mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="p-6 bg-secondary">
                  <div className="flex items-center gap-4">
                    {avatarImage && (
                      <Avatar className="w-12 h-12 border-2 border-primary">
                        <AvatarImage
                          src={avatarImage.imageUrl}
                          alt={avatarImage.description}
                          data-ai-hint={avatarImage.imageHint}
                        />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
