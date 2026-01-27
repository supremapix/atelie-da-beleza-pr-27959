import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowUp, Navigation, Plus, X } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5541996439389?text=Olá!%20Gostaria%20de%20mais%20informações', '_blank');
  };

  const handlePhone = () => {
    window.location.href = 'tel:+5541996439389';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:cursosateliedabeleza@gmail.com';
  };

  const handleRoute = () => {
    window.open('https://maps.app.goo.gl/ETYAaHw3CJvMgjPf7', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2.5">
      {/* WhatsApp - Always visible */}
      <Button
        size="icon"
        onClick={handleWhatsApp}
        className="bg-[#25D366] hover:bg-[#20bd5a] shadow-warm h-12 w-12 md:h-14 md:w-14 rounded-full"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </Button>

      {/* Expandable buttons */}
      <div className={`flex flex-col gap-2.5 transition-all duration-300 ${
        isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0 h-0 pointer-events-none'
      }`}>
        <Button
          size="icon"
          onClick={handlePhone}
          aria-label="Ligar"
          className="bg-foreground hover:bg-foreground/90 shadow-soft h-12 w-12 md:h-14 md:w-14 rounded-full"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6 text-background" />
        </Button>

        <Button
          size="icon"
          onClick={handleRoute}
          aria-label="Como Chegar"
          className="bg-sky-600 hover:bg-sky-700 shadow-soft h-12 w-12 md:h-14 md:w-14 rounded-full"
        >
          <Navigation className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </Button>

        <Button
          size="icon"
          onClick={handleEmail}
          aria-label="Email"
          className="bg-foreground hover:bg-foreground/90 shadow-soft h-12 w-12 md:h-14 md:w-14 rounded-full"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6 text-background" />
        </Button>

        {/* Scroll to Top */}
        {showScrollTop && (
          <Button
            size="icon"
            onClick={scrollToTop}
            className="bg-secondary hover:bg-secondary/80 shadow-soft h-12 w-12 md:h-14 md:w-14 rounded-full"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </Button>
        )}
      </div>

      {/* Expand/Collapse Button */}
      <Button
        size="icon"
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-primary hover:bg-primary/90 shadow-warm h-12 w-12 md:h-14 md:w-14 rounded-full transition-transform duration-300"
        style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
        aria-label={isExpanded ? "Fechar menu" : "Expandir menu"}
      >
        <Plus className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
      </Button>
    </div>
  );
};

export default FloatingButtons;