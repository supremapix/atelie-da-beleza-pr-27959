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
    <>
      {/* Floating Action Buttons - Bottom Right */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
        {/* WhatsApp - Always visible */}
        <Button
          variant="floating"
          size="icon"
          onClick={handleWhatsApp}
          className="bg-[#25D366] hover:bg-[#20bd5a] shadow-elegant h-12 w-12 md:h-14 md:w-14"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </Button>

        {/* Expandable buttons */}
        <div className={`flex flex-col gap-2 md:gap-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0 h-0'
        }`}>
          <Button
            variant="floating"
            size="icon"
            onClick={handlePhone}
            aria-label="Ligar"
            className="h-12 w-12 md:h-14 md:w-14"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            variant="floating"
            size="icon"
            onClick={handleRoute}
            aria-label="Como Chegar"
            className="bg-blue-600 hover:bg-blue-700 h-12 w-12 md:h-14 md:w-14"
          >
            <Navigation className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            variant="floating"
            size="icon"
            onClick={handleEmail}
            aria-label="Email"
            className="h-12 w-12 md:h-14 md:w-14"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          {/* Scroll to Top - Below other buttons */}
          {showScrollTop && (
            <Button
              variant="floating"
              size="icon"
              onClick={scrollToTop}
              className="animate-bounce h-12 w-12 md:h-14 md:w-14"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          )}
        </div>

        {/* Expand/Collapse Button */}
        <Button
          variant="floating"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-[#C4A574] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C4A574] h-12 w-12 md:h-14 md:w-14"
          aria-label={isExpanded ? "Fechar menu" : "Expandir menu"}
        >
          {isExpanded ? (
            <X className="w-5 h-5 md:w-6 md:h-6 text-black" />
          ) : (
            <Plus className="w-5 h-5 md:w-6 md:h-6 text-black" />
          )}
        </Button>
      </div>

    </>
  );
};

export default FloatingButtons;
