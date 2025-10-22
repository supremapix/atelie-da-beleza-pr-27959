import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
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
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header - Single Line */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 text-lg md:text-2xl lg:text-3xl font-bold px-2">
            <span className="text-foreground font-montserrat">EXCELENTE</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="text-foreground font-montserrat">378 avaliações</span>
            <img 
              src={googleLogo} 
              alt="Google" 
              className="h-6 md:h-7 lg:h-8 w-auto inline-block"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => {
                const avatarColors = [
                  'bg-orange-500',
                  'bg-pink-500',
                  'bg-purple-500',
                  'bg-blue-500',
                  'bg-green-500',
                  'bg-red-500',
                  'bg-indigo-500',
                  'bg-yellow-500',
                ];
                const avatarColor = avatarColors[index % avatarColors.length];
                
                return (
                  <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-gray-50 border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <CardContent className="pt-6 pb-6 flex flex-col h-full relative">
                        {/* Google Icon Badge */}
                        <img 
                          src={googleIcon} 
                          alt="Google" 
                          className="absolute top-4 right-4 h-5 w-5 opacity-90"
                        />
                        
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-full ${avatarColor} flex items-center justify-center flex-shrink-0 text-white`}>
                            <span className="text-xl font-bold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-0.5 font-montserrat text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs text-muted-foreground font-montserrat mb-2">{testimonial.date}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-0.5 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                          ))}
                        </div>
                        
                        <p className="text-foreground leading-relaxed font-montserrat text-sm flex-1">
                          {testimonial.text}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 bg-white hover:bg-gray-100 border shadow-md" />
            <CarouselNext className="hidden md:flex -right-6 bg-white hover:bg-gray-100 border shadow-md" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=atelie+da+beleza+curitiba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-base font-montserrat transition-all hover:gap-3"
          >
            Ver todas as avaliações 
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
