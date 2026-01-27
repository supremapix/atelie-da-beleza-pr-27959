import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
}

const FAQ = ({ 
  title = "Perguntas Frequentes", 
  subtitle = "Tire suas dúvidas sobre nossos cursos",
  items,
  className = ""
}: FAQProps) => {
  return (
    <section className={`py-20 md:py-28 bg-secondary/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              {title.split(' ')[0]} <span className="text-primary italic">{title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {subtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="organic-card px-5 md:px-6 data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline py-5 text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base leading-relaxed pt-1 pb-5 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;