import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const VideoSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5541996439389?text=Olá!%20Gostaria%20de%20conhecer%20os%20cursos%20do%20Ateliê%20da%20Beleza', '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-background organic-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
              Nossa Escola
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Cursos <span className="text-primary italic">Profissionalizantes</span>
            </h2>
            
            {/* Stats highlight */}
            <div className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-full shadow-warm">
              <span className="text-4xl md:text-5xl font-semibold">+42</span>
              <span className="text-left text-sm md:text-base">
                Cursos<br />Disponíveis
              </span>
            </div>
          </div>

          {/* Video */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-warm mb-12 md:mb-16">
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
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Profissionais Experientes", desc: "Aprenda com quem domina o mercado" },
              { title: "Prática em Modelos Reais", desc: "Experiência real desde o primeiro dia" },
              { title: "Técnicas Modernas", desc: "O que há de mais atual no mercado" }
            ].map((item, index) => (
              <div 
                key={index}
                className="organic-card p-6 text-center"
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-foreground mb-6 font-medium">
              Invista no seu futuro profissional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleWhatsApp}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero me Matricular
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-full"
              >
                Ver Todos os Cursos
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                <span>+6.000 alunas formadas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                <span>Localização privilegiada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;