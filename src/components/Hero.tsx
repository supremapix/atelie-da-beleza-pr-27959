import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroMobileImage from "@/assets/hero-mobile-portrait.jpg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const scrollToCourses = () => {
    document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {isMobile ? (
          <div className="relative w-full h-full">
            <img 
              src={heroMobileImage} 
              alt="Ateliê da Beleza" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
        ) : (
          <>
            <div className="relative w-full h-full">
              <iframe
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transform: 'scale(1.25)',
                  transformOrigin: 'center center'
                }}
                src="https://www.youtube.com/embed/zsAHM0WwboQ?autoplay=1&mute=1&loop=1&playlist=zsAHM0WwboQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                title="Ateliê da Beleza Background Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-background"></div>
          </>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-gentle-pulse" />
      <div className="absolute bottom-1/3 right-12 w-48 h-48 rounded-full bg-primary/8 blur-3xl animate-gentle-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12 animate-fade-in-up">
          
          {/* Tagline */}
          <div className="inline-block">
            <span className="text-primary/90 text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
              Escola de Estética Profissional
            </span>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
              Desperte sua
              <span className="block text-primary mt-2">Nova Beleza</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed mt-6">
              Cursos profissionalizantes que transformam paixão em carreira. 
              Mais de <span className="text-primary font-medium">6.000 alunas</span> formadas.
            </p>
          </div>
          
          {/* CTA */}
          <div className="pt-4 md:pt-8">
            <Button 
              size="lg"
              onClick={scrollToCourses}
              className="group text-base md:text-lg px-8 py-6 md:px-10 md:py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm hover:shadow-lg transition-all duration-300"
            >
              <span>Conheça Nossos Cursos</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/60"></span>
              <span>+21 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/60"></span>
              <span>+42 cursos disponíveis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/60"></span>
              <span>Certificado reconhecido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;