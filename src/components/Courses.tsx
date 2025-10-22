import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Award, ChevronRight } from "lucide-react";
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
    <section id="cursos" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <Badge variant="outline" className="border-primary text-primary bg-primary/10 text-sm px-4 py-2 font-montserrat tracking-wide">
              ✨ Formação Profissional
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair decorative-line text-white">
            Cursos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-montserrat font-light leading-relaxed">
            Escolha entre mais de <span className="text-primary font-semibold">42 cursos profissionalizantes</span> e comece sua jornada rumo ao sucesso
          </p>
        </div>

        {/* Courses Slider */}
        <div className="max-w-7xl mx-auto px-8 md:px-12 mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="group hover-lift overflow-hidden bg-white border-2 border-border hover:border-primary/30 h-full"
                  >
                    {/* Course Image */}
                    <div className="relative overflow-hidden h-56 md:h-56">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Category Badge only */}
                      <Badge variant="outline" className="absolute top-3 md:top-4 left-3 md:left-4 bg-white/95 backdrop-blur-sm text-xs md:text-xs font-montserrat border-primary text-foreground">
                        {course.category}
                      </Badge>
                    </div>

                    <CardHeader className="pb-3 bg-white px-4 md:px-6 pt-4 md:pt-6">
                      <div className="flex items-start justify-between gap-2 md:gap-3 mb-2">
                        <CardTitle className="text-xl md:text-3xl font-playfair text-foreground group-hover:text-primary transition-colors flex-1 leading-tight">
                          {course.title}
                        </CardTitle>
                        {course.highlight && (
                          <Badge className="bg-primary text-background font-semibold shadow-lg shrink-0 text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1">
                            ⭐ Destaque
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm md:text-sm leading-relaxed font-montserrat text-muted-foreground">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3 md:space-y-4 bg-white px-4 md:px-6 pb-4 md:pb-6">
                      <div className="flex items-center justify-between text-xs md:text-sm border-t pt-3 md:pt-4">
                        <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-montserrat font-semibold text-foreground">{course.hours}</span>
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="font-montserrat text-xs md:text-sm text-foreground font-medium">Certificado</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 gap-2 md:gap-3">
                        <div className="flex flex-col">
                          <span className="text-[10px] md:text-xs text-muted-foreground font-montserrat mb-0.5">À vista:</span>
                          <span className="text-xl md:text-2xl font-bold text-primary font-montserrat animate-pulse">{course.price}</span>
                        </div>
                        <Button 
                          size="sm"
                          onClick={() => navigate(`/curso/${course.id}`)}
                          className="group/btn bg-primary hover:bg-primary/90 text-background font-semibold shadow-md hover:shadow-lg shrink-0 text-xs md:text-sm px-3 md:px-4 h-8 md:h-9"
                        >
                          Saiba Mais
                          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 bg-white hover:bg-gray-100 border shadow-md" />
            <CarouselNext className="hidden md:flex -right-6 bg-white hover:bg-gray-100 border shadow-md" />
          </Carousel>
        </div>

        {/* View All Courses Button */}
        <div className="text-center pt-8">
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/cursos')}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold text-base px-8 py-6 group shadow-card"
          >
            Ver Todos os Cursos (+42)
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
