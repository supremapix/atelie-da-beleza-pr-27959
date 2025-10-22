import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

const VideoSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5541996439389?text=Olá!%20Gostaria%20de%20conhecer%20os%20cursos%20do%20Ateliê%20da%20Beleza', '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 font-playfair text-foreground px-2">
              Cursos de Beleza Profissionalizantes
              <span className="block text-primary mt-2">em Curitiba</span>
            </h2>
            
            {/* Featured Number with Effect */}
            <div className="mb-6 md:mb-8">
              <p className="text-base md:text-lg text-foreground/80 mb-3 md:mb-4 font-montserrat font-semibold uppercase tracking-wide px-2">
                Aprenda com a excelência de:
              </p>
              <div className="relative inline-block px-2">
                <div className="absolute inset-0 bg-black/30 blur-3xl animate-pulse"></div>
                <div className="relative bg-white border-4 border-black px-6 md:px-12 py-4 md:py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair mb-1 md:mb-2 text-black">
                    +42
                  </div>
                  <div className="text-base md:text-xl lg:text-2xl font-semibold font-montserrat uppercase tracking-wider text-black">
                    Cursos Profissionalizantes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mb-8 md:mb-12 group mx-2 md:mx-0">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9cPXgUoy_c4"
                title="Conheça o Ateliê da Beleza Curitiba"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Description */}
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in px-2 md:px-0">
            <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed font-montserrat font-medium mb-4 md:mb-6">
                Transforme sua paixão pela beleza em uma <span className="text-primary font-bold">carreira de sucesso</span>. 
                No Ateliê da Beleza Curitiba, oferecemos cursos profissionalizantes 
                com <span className="text-primary font-bold">certificação reconhecida</span> no mercado.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 md:p-6 rounded-xl shadow-lg border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 animate-[pulse_3s_ease-in-out_infinite]">
                  <p className="text-black font-bold text-xl md:text-2xl mb-2 md:mb-3 font-playfair">Profissionais Experientes</p>
                  <p className="text-foreground/80 text-sm md:text-base font-montserrat font-medium">Aprenda com quem domina o mercado</p>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 md:p-6 rounded-xl shadow-lg border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 animate-[pulse_3s_ease-in-out_infinite] [animation-delay:1s]">
                  <p className="text-black font-bold text-xl md:text-2xl mb-2 md:mb-3 font-playfair">Prática em Modelos Reais</p>
                  <p className="text-foreground/80 text-sm md:text-base font-montserrat font-medium">Experiência real desde o primeiro dia</p>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 md:p-6 rounded-xl shadow-lg border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 animate-[pulse_3s_ease-in-out_infinite] [animation-delay:2s]">
                  <p className="text-black font-bold text-xl md:text-2xl mb-2 md:mb-3 font-playfair">Técnicas Modernas</p>
                  <p className="text-foreground/80 text-sm md:text-base font-montserrat font-medium">O que há de mais atual no mercado</p>
                </div>
              </div>

              <div className="relative my-6 md:my-8">
                <div className="absolute inset-0 bg-black/20 blur-xl"></div>
                <div className="relative bg-gradient-to-r from-black to-gray-900 text-white px-4 md:px-8 py-4 md:py-6 rounded-xl shadow-2xl">
                  <p className="text-lg md:text-2xl lg:text-3xl font-bold font-playfair">
                    ✨ Invista no seu futuro profissional hoje mesmo! ✨
                  </p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 md:gap-4 justify-center items-stretch md:items-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="group w-full md:w-auto text-sm md:text-base px-4 md:px-6"
                >
                  <MessageCircle className="mr-2 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="whitespace-normal md:whitespace-nowrap">Quero me Matricular Agora</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full md:w-auto font-semibold"
                >
                  <Play className="mr-2" />
                  Ver Todos os Cursos
                </Button>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8 text-xs md:text-sm text-foreground/70 font-montserrat font-semibold">
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">⭐</span>
                  <span>Mais de 1.000 alunos formados</span>
                </div>
                <span className="hidden md:inline">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">📍</span>
                  <span>Localização privilegiada em Curitiba</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
