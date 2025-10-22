import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <>
      {/* Floating Action Buttons - Bottom Left */}
      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex flex-col gap-2 md:gap-3">
        <Button
          variant="floating"
          size="icon"
          onClick={handleWhatsApp}
          className="bg-[#25D366] hover:bg-[#20bd5a] shadow-elegant h-12 w-12 md:h-14 md:w-14"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </Button>

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

    </>
  );
};

export default FloatingButtons;
