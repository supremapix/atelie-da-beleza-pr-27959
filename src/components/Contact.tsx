import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

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

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-background organic-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
              Fale Conosco
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Entre em <span className="text-primary italic">Contato</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Tire suas dúvidas e comece sua jornada na estética
            </p>
          </div>

          {/* Contact Card */}
          <div className="organic-card p-6 md:p-8">
            {!isOpen ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Pronta para transformar sua carreira?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Clique abaixo para abrir o formulário e entrar em contato conosco via WhatsApp.
                </p>
                <Button 
                  onClick={() => setIsOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                >
                  Abrir Formulário
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Nome *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border focus:border-primary bg-background"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-border focus:border-primary bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Telefone/WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(41) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl border-border focus:border-primary bg-background"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar você?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border-border focus:border-primary bg-background resize-none"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-full border-border"
                  >
                    Cancelar
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar via WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;