import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Formata a mensagem para WhatsApp
    const whatsappMessage = `
*Novo Contato - Ateliê Beleza*

*Nome:* ${formData.name}
*Email:* ${formData.email || "Não informado"}
*Telefone:* ${formData.phone}

*Mensagem:*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/5541996439389?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Sucesso!",
      description: "Você será redirecionado para o WhatsApp.",
    });

    // Limpa o formulário
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-12 md:py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12 px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
              <span className="text-primary">Entre em Contato</span>
            </h2>
            <p className="text-foreground text-base md:text-lg font-montserrat">
              Tire suas dúvidas e comece sua jornada na estética
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="contact-form" className="border-2 border-primary/20 rounded-2xl px-3 md:px-6 bg-white shadow-elegant">
              <AccordionTrigger className="text-base md:text-xl font-semibold text-primary hover:text-primary/80 font-montserrat py-4 md:py-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-left">Clique aqui para abrir o formulário de contato</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(41) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      placeholder="Como podemos ajudar você?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <MessageCircle className="mr-2" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Contact;
