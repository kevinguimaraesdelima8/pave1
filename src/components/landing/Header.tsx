import { CookingPot } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <CookingPot className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-semibold font-headline">Pavê Lucrativo</span>
        </Link>
        <a href="#offer">
          <Button>Quero a Oferta</Button>
        </a>
      </div>
    </header>
  );
}
