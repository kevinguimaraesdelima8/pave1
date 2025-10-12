import { BookCheck, ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border-2 border-dashed border-primary bg-primary/10 p-8 md:p-12 text-center shadow-sm">
            <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
            <h3 className="mt-6 text-2xl md:text-3xl font-bold font-headline text-foreground">
              Sua Satisfação ou Seu Dinheiro de Volta!
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Você tem 7 dias para testar tudo. Se por qualquer motivo você não gostar ou achar que não é para você,
              basta nos enviar um e-mail e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-foreground font-semibold">
              <div className="flex items-center gap-2">
                <BookCheck className="h-6 w-6 text-primary" />
                <span>Receba hoje</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center gap-2">
                <BookCheck className="h-6 w-6 text-primary" />
                <span>Acesso vitalício</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span>Risco zero!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
