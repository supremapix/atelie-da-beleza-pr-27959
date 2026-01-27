import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import micropigmentacaoImg from "@/assets/curso-micropigmentacao.jpg";
import esteticaFacialImg from "@/assets/curso-estetica-facial.jpg";
import injetaveisImg from "@/assets/curso-injetaveis.jpg";
import lashImg from "@/assets/curso-lash.jpg";
import designSobrancelhasImg from "@/assets/curso-design-sobrancelhas.jpg";
import remocaoLaserImg from "@/assets/curso-remocao-laser.jpg";


const courses = [
  {
    id: "micropigmentacao-sobrancelhas",
    title: "Micropigmentação Completo",
    description: "Domine todas as técnicas de micropigmentação: nanoblading, shadow, shading e despigmentação química.",
    hours: "16h",
    price: "R$ 1.800,00",
    highlight: true,
    category: "Beleza",
    image: micropigmentacaoImg
  },
  {
    id: "estetica-facial-master",
    title: "Estética Facial Master",
    description: "Limpeza de pele, peelings químicos e microagulhamento facial completo.",
    hours: "32h",
    price: "R$ 1.450,00",
    highlight: true,
    category: "Estética",
    image: esteticaFacialImg
  },
  {
    id: "injetaveis-master",
    title: "Injetáveis Master",
    description: "Bioestimulador de colágeno, preenchimento labial e toxina botulínica Full Face.",
    hours: "24h",
    price: "R$ 4.500,00",
    highlight: true,
    category: "Estética Avançada",
    image: injetaveisImg
  },
  {
    id: "lash-master-class",
    title: "Lash Master Class",
    description: "Extensão de cílios fio a fio com técnicas avançadas para iniciantes.",
    hours: "16h",
    price: "R$ 900,00",
    highlight: false,
    category: "Beleza",
    image: lashImg
  },
  {
    id: "design-sobrancelhas",
    title: "Design de Sobrancelhas",
    description: "Design, henna e coloração profissional de sobrancelhas.",
    hours: "8h",
    price: "R$ 499,00",
    highlight: false,
    category: "Beleza",
    image: designSobrancelhasImg
  },
  {
    id: "remocao-laser",
    title: "Remoção a Laser",
    description: "Remoção de micropigmentação e tatuagem à laser com bônus Black Peel.",
    hours: "16h",
    price: "R$ 1.500,00",
    highlight: false,
    category: "Estética",
    image: remocaoLaserImg
  },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <section id="cursos" className="py-20 md:py-28 bg-foreground organic-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
            Formação Profissional
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-background">
            Cursos em <span className="text-primary italic">Destaque</span>
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto font-light leading-relaxed">
            Escolha entre mais de 42 cursos profissionalizantes e comece sua jornada rumo ao sucesso
          </p>
        </div>

        {/* Courses Slider */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="group overflow-hidden bg-background border-0 shadow-card hover:shadow-warm h-full cursor-pointer transition-all duration-500 rounded-2xl"
                    onClick={() => navigate(`/curso/${course.id}`)}
                  >
                    {/* Course Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-background/95 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                          {course.category}
                        </span>
                      </div>

                      {course.highlight && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                            Destaque
                          </span>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-2 pt-5 px-5">
                      <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-2 mt-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 px-5 pb-5">
                      <div className="flex items-center justify-between text-sm border-t border-border/50 pt-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-medium text-foreground">{course.hours}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="text-foreground text-xs">Certificado</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <span className="text-xs text-muted-foreground">À vista:</span>
                          <p className="text-xl md:text-2xl font-semibold text-primary">{course.price}</p>
                        </div>
                        <Button 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/curso/${course.id}`);
                          }}
                          className="group/btn bg-foreground hover:bg-foreground/90 text-background rounded-full px-5"
                        >
                          Ver Mais
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background hover:bg-background/90 border-0 shadow-soft" />
            <CarouselNext className="hidden md:flex -right-4 bg-background hover:bg-background/90 border-0 shadow-soft" />
          </Carousel>
        </div>

        {/* View All Courses Button */}
        <div className="text-center pt-8">
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/cursos')}
            className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary font-medium text-base px-8 py-6 group rounded-full transition-all duration-300"
          >
            Ver Todos os Cursos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;