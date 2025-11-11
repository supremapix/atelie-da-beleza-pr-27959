import { useState, useEffect } from "react";
import { X, Tag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Confetti = () => {
  const particles = Array.from({ length: 50 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <div
            className="w-2 h-2 md:w-3 md:h-3"
            style={{
              backgroundColor: ['#C4A574', '#D4AF37', '#FFD700', '#FFA500'][Math.floor(Math.random() * 4)],
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.8,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-2 md:gap-4 mt-4">
      {[
        { label: 'Dias', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Seg', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center bg-black/30 rounded-lg p-2 md:p-3 min-w-[60px] md:min-w-[80px]">
          <span className="text-2xl md:text-4xl font-bold text-white tabular-nums">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-white/80 font-semibold">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const BlackFridayBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const targetDate = new Date('2025-12-17T23:59:59');

  useEffect(() => {
    // Show banner automatically after 3 seconds on first visit
    const timer = setTimeout(() => {
      const hasSeenBanner = sessionStorage.getItem('hasSeenBlackFridayBanner');
      if (!hasSeenBanner) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenBlackFridayBanner', 'true');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleBanner = () => {
    if (!isOpen) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
    setIsOpen(!isOpen);
  };

  if (!showFloatingButton && !isOpen) return null;

  return (
    <>
      {/* Confetti Animation */}
      {showConfetti && <Confetti />}

      {/* Floating Button - LEFT SIDE */}
      {showFloatingButton && !isOpen && (
        <button
          onClick={toggleBanner}
          className="fixed bottom-24 left-4 z-40 bg-gradient-to-r from-[#C4A574] to-[#D4AF37] text-background p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse"
          aria-label="Abrir ofertas Black Friday"
        >
          <Tag className="w-6 h-6" />
        </button>
      )}

      {/* Banner Popup */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
            onClick={toggleBanner}
          />
          
          {/* Banner Content */}
          <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full z-50 animate-in zoom-in duration-300">
            <Card className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-black border-4 border-[#C4A574] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={toggleBanner}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-[#C4A574] to-[#D4AF37] p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-8 h-8 text-black animate-pulse" />
                  <h2 className="text-3xl md:text-4xl font-bold text-black font-playfair">
                    BLACK FRIDAY
                  </h2>
                  <Sparkles className="w-8 h-8 text-black animate-pulse" />
                </div>
                <p className="text-black/90 font-bold mt-2 text-sm md:text-base">
                  🎁 Garanta este pacote agora e realize seu curso até março de 2026!
                </p>
                <CountdownTimer targetDate={targetDate} />
              </div>

              {/* Offers */}
              <div className="p-6 space-y-4">
                {/* Offer 1 */}
                <div className="bg-gradient-to-br from-[#C4A574]/20 to-[#D4AF37]/10 border-2 border-[#C4A574] rounded-lg p-4 hover:scale-105 transition-transform">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#C4A574] text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Estética do Olhar</h3>
                      <p className="text-white/90">
                        <span className="text-[#C4A574] font-bold">GANHE</span> um kit de extensão de cílios profissional no valor de{" "}
                        <span className="text-[#C4A574] font-bold text-xl">R$ 348,00</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Offer 2 */}
                <div className="bg-gradient-to-br from-[#C4A574]/20 to-[#D4AF37]/10 border-2 border-[#C4A574] rounded-lg p-4 hover:scale-105 transition-transform">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#C4A574] text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Capacitação Corporal</h3>
                      <p className="text-white/90">
                        Apenas{" "}
                        <span className="text-[#C4A574] font-bold text-2xl">R$ 990,00</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Offer 3 */}
                <div className="bg-gradient-to-br from-[#C4A574]/20 to-[#D4AF37]/10 border-2 border-[#C4A574] rounded-lg p-4 hover:scale-105 transition-transform">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#C4A574] text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Jato de Plasma</h3>
                      <p className="text-white/90 mb-2">
                        Para alunas que realizaram:{" "}
                        <span className="text-[#C4A574] font-semibold">Limpeza de Pele Premium</span> ou{" "}
                        <span className="text-[#C4A574] font-semibold">Estética Facial Master</span>
                      </p>
                      <p className="text-white/90">
                        <span className="text-[#C4A574] font-bold">DESCONTO ESPECIAL:</span>{" "}
                        <span className="text-[#C4A574] font-bold text-2xl">R$ 599,00</span>{" "}
                        <span className="text-white/80">à vista</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Offer 4 - Highlight */}
                <div className="bg-gradient-to-br from-[#C4A574] to-[#D4AF37] border-4 border-white rounded-lg p-4 hover:scale-105 transition-transform shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="bg-black text-[#C4A574] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-black font-bold text-lg mb-2">Remoção à Laser</h3>
                      <p className="text-black font-semibold mb-2">
                        💥 Valor Black Friday:
                      </p>
                      <p className="text-black/90 mb-1">
                        <span className="text-black font-bold text-2xl">R$ 1.199</span>{" "}
                        <span className="text-black/80 font-semibold">à vista</span>
                      </p>
                      <p className="text-black/90">
                        ou <span className="text-black font-bold text-xl">R$ 1.299</span>{" "}
                        <span className="text-black/80 font-semibold">em até 10x no cartão</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Message */}
                <div className="bg-gradient-to-r from-[#C4A574] to-[#D4AF37] rounded-lg p-4 text-center mt-6 border-2 border-white">
                  <p className="text-black font-bold text-lg md:text-xl">
                    🎯 Compre AGORA na Black Friday e faça seu curso em 2026!
                  </p>
                  <p className="text-black/90 font-semibold mt-2">
                    Garanta seu desconto antes que acabe!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button
                    onClick={() => window.open('https://wa.me/5541996439389?text=Olá! Vim pelo banner da Black Friday e quero garantir meu desconto!', '_blank')}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-6 text-lg shadow-lg"
                  >
                    Garantir Desconto no WhatsApp
                  </Button>
                  <Button
                    onClick={() => navigate('/black-friday')}
                    className="flex-1 bg-gradient-to-r from-[#C4A574] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C4A574] text-black font-bold py-6 text-lg shadow-lg"
                  >
                    Ver Todas as Ofertas
                  </Button>
                  <Button
                    onClick={toggleBanner}
                    variant="outline"
                    className="sm:w-auto border-2 border-[#C4A574] text-white hover:bg-[#C4A574]/20"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default BlackFridayBanner;
