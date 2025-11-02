import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';

const productImages = PlaceHolderImages.filter((p) => p.id.startsWith('product-'));

export default function ProductCarousel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl"
        >
          <CarouselContent>
            {productImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <div className="relative aspect-square mx-auto overflow-hidden rounded-xl shadow-lg w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
