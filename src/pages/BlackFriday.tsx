import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import BlackFridayUrgency from "@/components/BlackFridayUrgency";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, CheckCircle, Tag, Gift, Share2, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [notifiedMilestones, setNotifiedMilestones] = useState<Set<number>>(new Set());

  const playNotificationSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        
        // Check milestones: 24h, 12h, 6h
        if ([24, 12, 6].includes(hours) && !notifiedMilestones.has(hours)) {
          playNotificationSound();
          setNotifiedMilestones(prev => new Set(prev).add(hours));
        }
        
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
  }, [targetDate, notifiedMilestones]);

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
  const { toast } = useToast();
  const targetDate = new Date('2025-12-17T23:59:59');

  const shareUrl = "https://ateliebeleza.app.br/black-friday";
  const shareTitle = "Black Friday Ateliê Beleza - Ofertas até 17/12!";
  const shareText = "🔥 Aproveite descontos imperdíveis em cursos de estética! Compre agora e faça até março de 2026. Confira as ofertas!";

  const handleShare = async (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(shareText);
    
    const shareLinks: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copiado!",
          description: "O link foi copiado para a área de transferência.",
        });
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else {
      window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    }
  };

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

  const testimonials = [
    {
      name: "Mariana Silva",
      course: "Estética do Olhar",
      text: "Aproveitei a Black Friday do ano passado e foi a melhor decisão! O kit profissional que ganhei me ajudou a começar a atender logo após o curso.",
      date: "Black Friday 2024"
    },
    {
      name: "Juliana Costa",
      course: "Capacitação Corporal",
      text: "O desconto da Black Friday tornou possível fazer o curso dos meus sonhos. Hoje tenho minha própria clínica e tudo começou com essa oportunidade!",
      date: "Black Friday 2024"
    },
    {
      name: "Patricia Oliveira",
      course: "Remoção à Laser",
      text: "Comprei na promoção e fiz o curso 2 meses depois. Valeu muito a pena! O investimento se pagou rapidamente com os atendimentos.",
      date: "Black Friday 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <EnhancedSEO
        title="Black Friday - Ateliê Beleza | Ofertas Exclusivas até 17/12"
        description="Aproveite as ofertas exclusivas da Black Friday do Ateliê Beleza. Garanta descontos especiais em cursos de estética até 17/12/2025. Compre agora e faça seu curso até março de 2026!"
        canonical="https://ateliebeleza.app.br/black-friday"
        keywords="black friday estética, cursos com desconto, promoção cursos Curitiba, ofertas estética, micropigmentação desconto"
        ogImage="https://ateliebeleza.app.br/og-black-friday.jpg"
      />
      <Navigation />
      <BlackFridayUrgency />

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
                className={`overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border-2 ${
                  offer.featured ? 'border-[#D4AF37] shadow-2xl shadow-[#C4A574]/50' : 'border-[#C4A574]'
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
                    <Badge className="bg-[#C4A574] text-black text-sm px-3 py-1 font-bold">
                      <Tag className="w-4 h-4 mr-1" />
                      BLACK FRIDAY
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-white font-playfair">
                    {offer.title}
                  </CardTitle>
                  <p className="text-gray-300 mt-2 font-medium">{offer.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-[#C4A574] to-[#D4AF37] rounded-lg p-4 border-2 border-white/20">
                    <p className="text-black font-bold text-lg mb-3">{offer.highlight}</p>
                    
                    {offer.bonus && (
                      <div className="flex items-start gap-2 text-black mb-2">
                        <Gift className="w-5 h-5 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-base">{offer.bonus}</p>
                          <p className="font-bold text-xl">{offer.bonusValue}</p>
                        </div>
                      </div>
                    )}

                    {offer.price && (
                      <p className="text-black text-3xl font-bold mb-1">{offer.price}</p>
                    )}

                    {offer.installmentPrice && (
                      <p className="text-black font-semibold text-sm">ou {offer.installmentPrice}</p>
                    )}

                    {offer.prerequisites && (
                      <div className="mt-3 space-y-1 bg-black/20 p-3 rounded-lg">
                        <p className="text-black text-sm font-bold">Pré-requisito:</p>
                        {offer.prerequisites.map((prereq, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-black text-sm font-medium">
                            <CheckCircle className="w-4 h-4" />
                            <span>{prereq}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => window.open('https://wa.me/5541996439389?text=Olá! Quero garantir a oferta Black Friday de ' + offer.title, '_blank')}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold shadow-lg hover:shadow-xl"
                    >
                      Garantir Oferta
                    </Button>
                    <Button
                      onClick={() => navigate(`/curso/${offer.courseId}`)}
                      variant="outline"
                      className="border-2 border-[#C4A574] text-[#C4A574] hover:bg-[#C4A574] hover:text-black font-bold"
                    >
                      Ver Curso
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Share Section */}
        <section className="py-12 bg-gradient-to-r from-[#C4A574]/5 to-[#D4AF37]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-playfair">
                Compartilhe com suas amigas!
              </h3>
              <p className="text-gray-300 mb-6">
                Espalhe essa oportunidade incrível e ajude mais pessoas a realizarem seus sonhos
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  onClick={() => handleShare('whatsapp')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => handleShare('facebook')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button
                  onClick={() => handleShare('twitter')}
                  className="bg-sky-500 hover:bg-sky-600 text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button
                  onClick={() => handleShare('linkedin')}
                  className="bg-blue-700 hover:bg-blue-800 text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  onClick={() => handleShare('copy')}
                  variant="outline"
                  className="border-[#C4A574] text-[#C4A574] hover:bg-[#C4A574] hover:text-black"
                >
                  Copiar Link
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-playfair">
            Quem aproveitou a <span className="text-[#C4A574]">Black Friday</span> anterior
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-[#C4A574]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Quote className="w-8 h-8 text-[#C4A574] flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <p className="text-[#C4A574] text-sm font-semibold mt-1">{testimonial.course}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{testimonial.text}</p>
                  <Badge className="bg-[#C4A574]/20 text-[#C4A574] border-[#C4A574]">
                    {testimonial.date}
                  </Badge>
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
