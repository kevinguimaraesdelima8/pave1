import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Preciso de experiência na cozinha?',
    answer:
      'Absolutamente não! As receitas foram desenvolvidas para serem fáceis e rápidas, perfeitas para iniciantes. Com nosso passo a passo, você fará pavês incríveis desde a primeira tentativa.',
  },
  {
    question: 'Quais equipamentos eu preciso?',
    answer:
      'Você vai precisar de itens básicos que a maioria das pessoas já tem em casa: um liquidificador, uma batedeira (opcional, mas ajuda), tigelas e uma geladeira. Nada de equipamentos caros ou complicados.',
  },
  {
    question: 'Como vou receber o e-book?',
    answer:
      'O acesso é imediato! Assim que seu pagamento for confirmado, você receberá o e-book completo em PDF diretamente no seu e-mail e também um link para acesso via WhatsApp.',
  },
  {
    question: 'E se eu não gostar das receitas?',
    answer:
      'Seu risco é zero! Você tem uma garantia incondicional de 7 dias. Se não ficar satisfeita, é só pedir o reembolso e devolvemos todo o seu dinheiro, sem complicações.',
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Perguntas Frequentes</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">Ainda tem dúvidas? A gente responde.</p>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
