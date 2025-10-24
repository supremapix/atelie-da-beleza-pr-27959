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
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
              {title}
            </h2>
            <p className="text-lg md:text-xl opacity-80 font-montserrat">
              {subtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base leading-relaxed pt-2 pb-5 opacity-90">
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
