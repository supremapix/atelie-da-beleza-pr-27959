import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, CheckCircle, Tag, Gift } from "lucide-react";

// Importar imagens dos cursos da Black Friday
import esteticaOlhar from "@/assets/all-courses/estetica-olhar.jpg";
import capacitacaoCorporal from "@/assets/all-courses/capacitacao-corporal.jpg";
import jatoPlasmaMulti from "@/assets/all-courses/jato-plasma-multi.jpg";
import remocaoLaserMicro from "@/assets/all-courses/remocao-laser-micro.jpg";
import limpezaPeeling from "@/assets/all-courses/limpeza-peeling.jpg";
import esteticaFacialMaster from "@/assets/all-courses/estetica-facial-master.jpg";

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
    <div className="flex justify-center gap-2 md:gap-4">
      {[
        { label: 'Dias', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Seg', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center bg-gradient-to-br from-[#C4A574] to-[#D4AF37] rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-lg">
          <span className="text-3xl md:text-5xl font-bold text-black tabular-nums">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-black/90 font-semibold">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const BlackFriday = () => {
  const navigate = useNavigate();
  const targetDate = new Date('2025-12-17T23:59:59');

  const offers = [
    {
      id: 1,
      title: "Estética do Olhar",
      image: esteticaOlhar,
      description: "Pacote completo de Estética do Olhar",
      bonus: "Kit de extensão de cílios profissional",
      bonusValue: "R$ 348,00",
      highlight: "GANHE o kit completo!",
      courseId: "estetica-olhar"
    },
    {
      id: 2,
      title: "Capacitação Corporal",
      image: capacitacaoCorporal,
      description: "Capacitação completa em procedimentos corporais",
      price: "R$ 990,00",
      highlight: "Preço especial Black Friday",
      courseId: "capacitacao-corporal"
    },
    {
      id: 3,
      title: "Jato de Plasma",
      image: jatoPlasmaMulti,
      description: "Para alunas que já fizeram Limpeza de Pele Premium ou Estética Facial Master",
      price: "R$ 599,00",
      highlight: "DESCONTO EXCLUSIVO à vista",
      prerequisites: ["Limpeza de Pele Premium", "Estética Facial Master"],
      courseId: "jato-plasma-multi"
    },
    {
      id: 4,
      title: "Remoção à Laser",
      image: remocaoLaserMicro,
      description: "Remoção de Micropigmentação e Tatuagem",
      price: "R$ 1.199 à vista",
      installmentPrice: "R$ 1.299 em até 10x",
      highlight: "🔥 SUPER OFERTA BLACK FRIDAY",
      featured: true,
      courseId: "remocao-laser-micro"
    }
  ];

  const courseGallery = [
    { image: esteticaOlhar, title: "Estética do Olhar" },
    { image: capacitacaoCorporal, title: "Capacitação Corporal" },
    { image: jatoPlasmaMulti, title: "Jato de Plasma" },
    { image: remocaoLaserMicro, title: "Remoção à Laser" },
    { image: limpezaPeeling, title: "Limpeza de Pele" },
    { image: esteticaFacialMaster, title: "Estética Facial Master" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <EnhancedSEO
        title="Black Friday - Ateliê Beleza | Ofertas Exclusivas até 17/12"
        description="Aproveite as ofertas exclusivas da Black Friday do Ateliê Beleza. Garanta descontos especiais em cursos de estética até 17/12/2025. Compre agora e faça seu curso até março de 2026!"
        canonical="https://ateliebeleza.app.br/black-friday"
        keywords="black friday estética, cursos com desconto, promoção cursos Curitiba, ofertas estética, micropigmentação desconto"
      />
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#C4A574] to-[#D4AF37] py-12 md:py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-black animate-pulse" />
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black font-playfair">
                  BLACK FRIDAY
                </h1>
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-black animate-pulse" />
              </div>
              
              <p className="text-xl md:text-2xl text-black font-bold">
                Campanha válida até 17/12/2025
              </p>
              
              <div className="bg-black/20 rounded-xl p-4 md:p-6 inline-block">
                <p className="text-lg md:text-xl text-black font-bold mb-4">
                  ⏰ Tempo Restante para Garantir seu Desconto:
                </p>
                <CountdownTimer targetDate={targetDate} />
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-2xl mx-auto">
                <p className="text-lg md:text-2xl text-black font-bold">
                  🎁 Compre AGORA e realize seu curso até MARÇO de 2026!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-playfair">
            Ofertas <span className="text-[#C4A574]">Imperdíveis</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {offers.map((offer) => (
              <Card 
                key={offer.id} 
                className={`overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border-2 ${
                  offer.featured ? 'border-[#D4AF37] shadow-2xl shadow-[#C4A574]/30' : 'border-[#C4A574]'
                } hover:scale-105 transition-all duration-300`}
              >
                {offer.featured && (
                  <div className="bg-gradient-to-r from-[#C4A574] to-[#D4AF37] p-2 text-center">
                    <p className="text-black font-bold text-sm md:text-base flex items-center justify-center gap-2">
                      <Gift className="w-5 h-5" />
                      OFERTA DESTAQUE BLACK FRIDAY
                      <Gift className="w-5 h-5" />
                    </p>
                  </div>
                )}

                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#C4A574] text-black text-sm px-3 py-1">
                      <Tag className="w-4 h-4 mr-1" />
                      BLACK FRIDAY
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-white font-playfair">
                    {offer.title}
                  </CardTitle>
                  <p className="text-white/80 mt-2">{offer.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-[#C4A574]/20 to-[#D4AF37]/10 rounded-lg p-4 border border-[#C4A574]/30">
                    <p className="text-[#C4A574] font-bold text-lg mb-2">{offer.highlight}</p>
                    
                    {offer.bonus && (
                      <div className="flex items-start gap-2 text-white">
                        <Gift className="w-5 h-5 text-[#C4A574] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">{offer.bonus}</p>
                          <p className="text-[#C4A574] font-bold">{offer.bonusValue}</p>
                        </div>
                      </div>
                    )}

                    {offer.price && (
                      <p className="text-white text-2xl font-bold">{offer.price}</p>
                    )}

                    {offer.installmentPrice && (
                      <p className="text-white/80 text-sm mt-1">ou {offer.installmentPrice}</p>
                    )}

                    {offer.prerequisites && (
                      <div className="mt-3 space-y-1">
                        <p className="text-white/80 text-sm font-semibold">Pré-requisito:</p>
                        {offer.prerequisites.map((prereq, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                            <CheckCircle className="w-4 h-4 text-[#C4A574]" />
                            <span>{prereq}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => window.open('https://wa.me/5541996439389?text=Olá! Quero garantir a oferta Black Friday de ' + offer.title, '_blank')}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold"
                    >
                      Garantir Oferta
                    </Button>
                    <Button
                      onClick={() => navigate(`/curso/${offer.courseId}`)}
                      variant="outline"
                      className="border-2 border-[#C4A574] text-white hover:bg-[#C4A574]/20"
                    >
                      Ver Curso
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gradient-to-br from-[#C4A574]/10 to-[#D4AF37]/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-playfair">
              Galeria de <span className="text-[#C4A574]">Cursos</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {courseGallery.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-bold text-sm md:text-base">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#C4A574] to-[#D4AF37] rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <Sparkles className="w-12 h-12 text-black mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-playfair">
              Não Perca Esta Oportunidade!
            </h2>
            <p className="text-black text-lg md:text-xl mb-6 font-semibold">
              Garanta seu desconto Black Friday AGORA e faça seu curso até março de 2026!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => window.open('https://wa.me/5541996439389?text=Olá! Quero aproveitar as ofertas Black Friday!', '_blank')}
                size="lg"
                className="bg-black hover:bg-black/90 text-white font-bold text-lg px-8 py-6 shadow-xl"
              >
                Falar com Especialista
              </Button>
              <div className="flex items-center gap-2 text-black font-semibold">
                <Clock className="w-5 h-5" />
                <span>Oferta válida até 17/12/2025</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlackFriday;
