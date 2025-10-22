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
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in">
          <div className="inline-block">
            <p className="text-primary text-[0.45rem] sm:text-xs md:text-sm lg:text-base tracking-[0.25em] md:tracking-[0.3em] uppercase font-montserrat font-bold mb-3 md:mb-4">
              Transforme sua Carreira
            </p>
            <div className="w-12 md:w-16 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          <h1 className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.7rem] lg:text-[3.4rem] xl:text-[4rem] font-bold tracking-tight leading-tight font-playfair px-2">
            <span className="block text-white mb-1 md:mb-2">Torne-se</span>
            <span className="block text-primary mb-2 md:mb-3">Referência em Estética</span>
            <span className="block text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.2rem] mt-1 md:mt-2 font-montserrat font-light leading-snug">
              em apenas algumas horas
            </span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-2 font-montserrat font-light">
            Cursos <span className="text-primary font-semibold">rápidos e profissionalizantes</span> com certificação reconhecida.
            <span className="block mt-2">Instrutores renomados. <span className="text-primary font-semibold">Carreira de sucesso</span>!</span>
          </p>
          
          <div className="pt-64 md:pt-72 lg:pt-80 flex flex-col gap-4 justify-center items-center px-2">
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToCourses}
              className="group text-sm sm:text-base px-6 py-5 w-full max-w-sm sm:w-auto bg-[#D4AF37]/20 border-[#D4AF37]/40 text-white hover:bg-[#D4AF37]/30 hover:border-[#D4AF37]/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all font-semibold"
            >
              Conheça Nossos Cursos
              <GraduationCap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
