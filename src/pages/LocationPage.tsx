import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MapPin, Phone, Clock, Award, Users, Star, TrendingUp, Navigation2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FAQ from "@/components/FAQ";
import { getNeighborhoodFAQ } from "@/data/neighborhoodFaqs";

interface LocationPageProps {
  slug?: string;
  neighborhood: string;
  region?: string;
  description: string;
  highlights: string[];
  nearbyPlaces?: string[];
}

const LocationPage = ({ 
  neighborhood, 
  region = "Curitiba",
  description, 
  highlights,
  nearbyPlaces = [],
  slug,
}: LocationPageProps) => {
  const navigate = useNavigate();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Ateliê Beleza - Cursos de Estética em ${neighborhood}`,
    "description": description,
    "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/z3uM9QrEiaZcmzxCWIVMCntcMQg2/social-images/social-1761135543473-atelie-da-beleza-cursos-profissionalizantes-em-curitiba-parana-brasil.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": neighborhood,
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "telephone": "+55-41-99643-9389",
    "email": "cursosateliedabeleza@gmail.com",
    "url": `https://www.ateliebeleza.com.br/${slug || neighborhood.toLowerCase().replace(/\s+/g, '-')}`,
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": region
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cursos de Estética",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Micropigmentação de Sobrancelhas",
            "description": "Curso completo de micropigmentação",
            "provider": {
              "@type": "Organization",
              "name": "Ateliê Beleza"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Design de Sobrancelhas",
            "description": "Design e modelagem de sobrancelhas",
            "provider": {
              "@type": "Organization",
              "name": "Ateliê Beleza"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5541996439389?text=Olá!%20Vim%20da%20página%20de%20${neighborhood}%20e%20gostaria%20de%20mais%20informações`, '_blank');
  };

  const handleRoute = () => {
    window.open('https://maps.app.goo.gl/ETYAaHw3CJvMgjPf7', '_blank');
  };

  const stats = [
    { icon: Users, value: "+6.000", label: "Alunas Formadas" },
    { icon: Award, value: "21 Anos", label: "de Experiência" },
    { icon: Star, value: "4.9/5", label: "Avaliação" },
    { icon: TrendingUp, value: "95%", label: "Taxa de Sucesso" }
  ];

  return (
    <>
      <EnhancedSEO
        title={`Cursos de Estética em ${neighborhood} - Curitiba | Ateliê Beleza`}
        description={`${description} Cursos profissionalizantes em micropigmentação, design de sobrancelhas, lash lifting e muito mais. Atendemos ${neighborhood} e região.`}
        canonical={`https://www.ateliebeleza.com.br/${slug || neighborhood.toLowerCase().replace(/\s+/g, '-')}`}
        keywords={`cursos estética ${neighborhood}, micropigmentação ${neighborhood}, design sobrancelhas ${neighborhood}, cursos beleza ${neighborhood} Curitiba`}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6 animate-fade-in">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Atendendo {neighborhood}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
                Cursos de Estética em <span className="text-primary break-words">{neighborhood}</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                {description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-2 sm:p-3 md:p-4 text-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mx-auto mb-1 sm:mb-2 text-primary" />
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <Button 
                  size="lg" 
                  className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 w-full sm:w-auto"
                  onClick={handleWhatsApp}
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="truncate">Falar no WhatsApp</span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 w-full sm:w-auto"
                  onClick={() => navigate('/cursos')}
                >
                  <span className="truncate">Ver Todos os Cursos</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Endereço e Como Chegar - NOVA SEÇÃO */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-2 border-primary/30 bg-card/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-bold">NOSSA LOCALIZAÇÃO</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
                    Ateliê Beleza - Pilarzinho
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
                    <strong className="text-primary">Fácil acesso desde {neighborhood}!</strong> Estamos estrategicamente localizados no Pilarzinho para atender você com comodidade.
                  </p>
                </div>

                {/* Endereço Destacado */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-primary/20">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div className="p-3 sm:p-4 rounded-xl bg-primary/10">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">Endereço Completo:</h3>
                      <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground break-words">
                        R. Alexandre Von Humboldt, 306
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                        Pilarzinho - Curitiba - PR
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-mono">
                        CEP: 80060-150
                      </p>
                    </div>
                  </div>

                  {/* Informação de Acesso */}
                  <div className="bg-white/50 dark:bg-black/20 rounded-xl p-4 sm:p-6 mb-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Acesso Rápido de {neighborhood}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Nossa escola fica no Pilarzinho, região central de Curitiba com excelente acesso de {neighborhood} via transporte público e carro. Venha nos visitar!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botão Como Chegar - Responsivo */}
                  <Button 
                    size="lg" 
                    className="w-full text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 h-auto bg-blue-600 hover:bg-blue-700"
                    onClick={handleRoute}
                  >
                    <Navigation2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                    <span className="truncate">Como Chegar - Google Maps</span>
                  </Button>
                  
                  <p className="text-xs sm:text-sm text-center text-muted-foreground mt-3 sm:mt-4">
                    🚗 Estacionamento disponível • 🚌 Fácil acesso por ônibus
                  </p>
                </div>

                {/* Contato Rápido */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="flex-1 text-sm sm:text-base md:text-lg"
                    onClick={handleWhatsApp}
                  >
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Falar com Especialista
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="flex-1 text-sm sm:text-base md:text-lg"
                    onClick={() => navigate('/cursos')}
                  >
                    Ver Cursos Disponíveis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                Por que Escolher o Ateliê Beleza em {neighborhood}?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6 flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground">{highlight}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Places */}
        {nearbyPlaces.length > 0 && (
          <section className="py-20 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                  Atendemos Também
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {nearbyPlaces.map((place, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <FAQ items={faqItems} title={`Dúvidas sobre Cursos em ${neighborhood}`} />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Pronto para Começar sua Carreira?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Entre em contato agora e descubra como nossos cursos podem transformar sua vida profissional em {neighborhood}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={handleWhatsApp}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar com Especialista
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8"
                    onClick={() => navigate('/')}
                  >
                    Conhecer Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default LocationPage;
