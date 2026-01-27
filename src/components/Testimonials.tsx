import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import googleLogo from "@/assets/google-logo.png";
import googleIcon from "@/assets/google-icon.svg";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Ângela Orsi",
    rating: 5,
    text: "Fiz curso de micropigmentação com a Juliana, além de ser excelente profissional é uma pessoa maravilhosa. Super indico!",
    date: "Há 2 meses",
  },
  {
    id: 2,
    name: "Nayellen Ramos",
    rating: 5,
    text: "Ótimo atendimento, profissionais qualificados e experientes. Ambiente acolhedor e higienizado. Super recomendo!",
    date: "Há 3 meses",
  },
  {
    id: 3,
    name: "Carla Silva",
    rating: 5,
    text: "Melhor lugar para fazer cursos de estética em Curitiba! A Ju é incrível, ensina com muita paciência e dedicação.",
    date: "Há 1 mês",
  },
  {
    id: 4,
    name: "Mariana Costa",
    rating: 5,
    text: "Excelente estrutura e professores muito capacitados. Saí do curso preparada para trabalhar. Valeu muito a pena!",
    date: "Há 2 semanas",
  },
  {
    id: 5,
    name: "Fernanda Alves",
    rating: 5,
    text: "Melhor investimento que já fiz! Os cursos são completos e práticos. Recomendo de olhos fechados!",
    date: "Há 1 semana",
  },
  {
    id: 6,
    name: "Juliana Santos",
    rating: 5,
    text: "Profissionais incríveis! Aprendi muito e já estou atendendo minhas clientes com confiança. Gratidão!",
    date: "Há 4 dias",
  },
  {
    id: 7,
    name: "Patricia Lima",
    rating: 5,
    text: "Curso de lash lifting maravilhoso! Instrutora atenciosa e ambiente super limpo e organizado. Amei!",
    date: "Há 3 semanas",
  },
  {
    id: 8,
    name: "Amanda Rodrigues",
    rating: 5,
    text: "Fiz o curso de design de sobrancelhas e foi transformador! Aprendi técnicas incríveis. Recomendo demais!",
    date: "Há 1 mês",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 organic-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            O que dizem <span className="text-primary italic">nossas alunas</span>
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-base md:text-lg mt-8">
            <span className="text-foreground font-medium">Excelente</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 md:w-6 md:h-6 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="text-muted-foreground">378 avaliações no</span>
            <img 
              src={googleLogo} 
              alt="Google" 
              className="h-6 md:h-7 w-auto"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
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
              {testimonials.map((testimonial, index) => {
                const avatarColors = [
                  'bg-amber-600',
                  'bg-rose-500',
                  'bg-violet-500',
                  'bg-sky-500',
                  'bg-emerald-500',
                  'bg-orange-500',
                  'bg-indigo-500',
                  'bg-pink-500',
                ];
                const avatarColor = avatarColors[index % avatarColors.length];
                
                return (
                  <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="organic-card h-full border-0 bg-background">
                      <CardContent className="pt-6 pb-6 flex flex-col h-full relative px-6">
                        {/* Google Icon */}
                        <img 
                          src={googleIcon} 
                          alt="Google" 
                          className="absolute top-5 right-5 h-5 w-5 opacity-70"
                        />
                        
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-full ${avatarColor} flex items-center justify-center flex-shrink-0 text-white shadow-soft`}>
                            <span className="text-lg font-semibold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-0.5">{testimonial.date}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-0.5 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                          ))}
                        </div>
                        
                        <p className="text-foreground/80 leading-relaxed text-sm flex-1">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background hover:bg-background/90 border-0 shadow-soft" />
            <CarouselNext className="hidden md:flex -right-4 bg-background hover:bg-background/90 border-0 shadow-soft" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=atelie+da+beleza+curitiba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-base transition-all group"
          >
            Ver todas as avaliações 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;