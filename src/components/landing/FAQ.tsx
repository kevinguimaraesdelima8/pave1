import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Como acesso o conteúdo?',
    answer:
      'Assim que você colocar seus dados e finalizar sua compra, vamos te enviar um e-mail com todas as receitas. Por isso é importante inserir o e-mail correto na hora de finalizar a compra.',
  },
  {
    question: 'Posso imprimir as receitas?',
    answer: 'Sim, também disponibilizamos um PDF com todas as receitas para imprimir.',
  },
  {
    question: 'É indicado para quem não sabe cozinhar?',
    answer:
      'Com certeza. Você terá acesso ao passo a passo completo desde a escolha dos ingredientes até o modo de preparo.',
  },
  {
    question: 'Quanto vou gastar preparando as Receitas?',
    answer:
      'As receitas são feitas sempre prezando por ingredientes de fácil acesso e baixo custo. Você economizará muito deixando de comprar produtos industrializados caros.',
  },
  {
    question: 'Terei suporte com minhas dúvidas?',
    answer:
      'Temos uma equipe de suporte considerada uma das melhores do Brasil. Você não ficará sozinha em nenhum momento. Surgiu dúvida? Vamos te ajudar!',
  },
  {
    question: 'É necessário ter ingredientes especiais para as receitas?',
    answer: 'Não! As receitas utilizam ingredientes comuns encontrados facilmente em supermercados.',
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Perguntas Frequentes</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">Ainda tem dúvidas? A gente responde.</p>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0 rounded-lg bg-primary/5 border border-primary/20 shadow-sm transition-all hover:border-primary">
                <AccordionTrigger className="text-lg font-semibold text-left px-6 py-4 hover:no-underline">
                  <div className='flex items-center gap-3'>
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground px-6">
                  <p className="pb-4 pl-8">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}