import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import heroMobileImage from "@/assets/hero-mobile-portrait.jpg";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Background - Image on Mobile, Video on Desktop */}
      <div className="absolute inset-0 w-full h-full">
        {isMobile ? (
          // Mobile: Beautiful Image Background
          <div className="relative w-full h-full">
            <img 
              src={heroMobileImage} 
              alt="Ateliê da Beleza" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70"></div>
            <div className="absolute inset-0 gradient-hero"></div>
          </div>
        ) : (
          // Desktop: Video Background
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
            <div className="absolute inset-0 bg-black/45"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 animate-fade-in">
          {/* Tag Superior */}
          <div className="inline-block">
            <p className="text-primary text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.25em] md:tracking-[0.3em] uppercase font-montserrat font-bold mb-3 md:mb-4">
              Transforme sua Carreira
            </p>
            <div className="w-16 md:w-20 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          {/* Título Principal */}
          <h1 className="font-bold tracking-tight leading-[1.15] font-playfair px-2">
            <span className="block text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-1 sm:mb-2 md:mb-3">
              Torne-se
            </span>
            <span className="block text-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-3 md:mb-4">
              Referência em Estética
            </span>
            <span className="block text-white/90 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 sm:mt-2 md:mt-4 font-montserrat font-light leading-snug">
              em apenas algumas horas
            </span>
          </h1>
          
          {/* Descrição */}
          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white/90 max-w-5xl mx-auto leading-relaxed font-montserrat font-light px-4">
            Cursos <span className="text-primary font-semibold">rápidos e profissionalizantes</span> com certificação reconhecida.
            <span className="block mt-1 sm:mt-2 md:mt-3">Instrutores renomados. <span className="text-primary font-semibold">Carreira de sucesso</span>!</span>
          </p>
          
          {/* Botão CTA */}
          <div className="pt-6 md:pt-10 lg:pt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToCourses}
              className="group text-base md:text-lg px-8 py-6 md:px-10 md:py-7 w-full max-w-md sm:w-auto bg-[#D4AF37]/20 border-[#D4AF37]/40 text-white hover:bg-[#D4AF37]/30 hover:border-[#D4AF37]/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all font-semibold"
            >
              Conheça Nossos Cursos
              <GraduationCap className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
