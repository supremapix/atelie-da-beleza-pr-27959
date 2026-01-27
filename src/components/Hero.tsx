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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {isMobile ? (
          <div className="relative w-full h-full">
            <img 
              src={heroMobileImage} 
              alt="Ateliê da Beleza" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Premium gradient overlay for mobile - darker for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/90" />
          </div>
        ) : (
          <>
            <div className="relative w-full h-full">
              <iframe
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                  transform: 'scale(1.25)',
                  transformOrigin: 'center center'
                }}
                src="https://www.youtube.com/embed/zsAHM0WwboQ?autoplay=1&mute=1&loop=1&playlist=zsAHM0WwboQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                title="Ateliê da Beleza Background Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            {/* Premium gradient overlay for desktop - elegant dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-transparent to-foreground/30" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 py-8">
          
          {/* Tagline */}
          <div className="inline-block">
            <span className="text-primary text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold drop-shadow-md">
              Escola de Estética Profissional
            </span>
          </div>
          
          {/* Main Title */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1]">
              <span className="text-white drop-shadow-lg">Desperte sua</span>
              <span className="block text-primary mt-1 sm:mt-2 drop-shadow-lg">Nova Beleza</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-normal max-w-xl lg:max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6 px-2 drop-shadow-md">
              Cursos profissionalizantes que transformam paixão em carreira. 
              Mais de <span className="text-primary font-semibold">6.000 alunas</span> formadas.
            </p>
          </div>
          
          {/* CTA */}
          <div className="pt-2 sm:pt-4 md:pt-6">
            <Button 
              size="lg"
              onClick={scrollToCourses}
              className="group text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full font-semibold"
            >
              <span>Conheça Nossos Cursos</span>
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 pt-4 sm:pt-6 md:pt-8 text-white text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shadow-sm" />
              <span className="drop-shadow-sm">+21 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shadow-sm" />
              <span className="drop-shadow-sm">+42 cursos disponíveis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shadow-sm" />
              <span className="drop-shadow-sm">Certificado reconhecido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
