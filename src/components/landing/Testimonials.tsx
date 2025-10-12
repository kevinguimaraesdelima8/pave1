import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    quote:
      'Nunca imaginei que poderia ganhar dinheiro com algo tão prazeroso. As receitas são fáceis e os clientes amam! Já paguei o investimento no primeiro dia.',
  },
  {
    id: 'testimonial-2',
    name: 'Ana Costa',
    location: 'Belo Horizonte, MG',
    quote:
      'Eu estava desempregada e esse e-book foi uma luz no fim do túnel. Comecei vendendo para vizinhos e hoje tenho uma clientela fixa. Recomendo demais!',
  },
  {
    id: 'testimonial-3',
    name: 'Juliana Pereira',
    location: 'Rio de Janeiro, RJ',
    quote:
      'As dicas de como montar e decorar fizeram toda a diferença. Meus pavês ficaram lindos e muito mais fáceis de vender. O retorno é rápido e certo.',
  },
  {
    id: 'testimonial-4',
    name: 'Carla Dias',
    location: 'Salvador, BA',
    quote:
      'O suporte e a comunidade são incríveis! Sempre que tenho uma dúvida, sou rapidamente ajudada. Me sinto muito mais segura para vender meus produtos.',
  },
  {
    id: 'testimonial-5',
    name: 'Fernanda Lima',
    location: 'Curitiba, PR',
    quote:
      'Achei que seria difícil, mas as instruções são tão claras que me surpreendi com o resultado. Meus amigos e familiares adoraram e agora não param de encomendar!',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
              Elas confiaram e estão lucrando
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja o que algumas de nossas alunas estão dizendo sobre o nosso treinamento de Pavês Lucrativos.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-2xl md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find((p) => p.id === testimonial.id.replace('testimonial-', 'avatar-'));
              return (
                <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex h-full flex-col shadow-md transition-shadow duration-300 hover:shadow-xl">
                      <CardContent className="flex-1 p-6">
                        <div className="mb-2 flex text-accent">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                        <p className="italic text-foreground">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter className="bg-secondary p-6">
                        <div className="flex items-center gap-4">
                          {avatarImage && (
                            <Avatar className="h-12 w-12 border-2 border-primary">
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
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
