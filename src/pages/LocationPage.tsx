import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MapPin, Phone, Clock, Award, Users, Star, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FAQ from "@/components/FAQ";
import { neighborhoodFAQ } from "@/data/faq";

interface LocationPageProps {
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
  nearbyPlaces = []
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
    "url": `https://ateliebeleza.app.br/${neighborhood.toLowerCase().replace(/\s+/g, '-')}`,
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
        canonical={`https://ateliebeleza.app.br/${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}
        keywords={`cursos estética ${neighborhood}, micropigmentação ${neighborhood}, design sobrancelhas ${neighborhood}, cursos beleza ${neighborhood} Curitiba`}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Atendendo {neighborhood}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Cursos de Estética em <span className="text-primary">{neighborhood}</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={handleWhatsApp}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8"
                  onClick={() => navigate('/cursos')}
                >
                  Ver Todos os Cursos
                </Button>
              </div>
            </div>
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
        <FAQ items={neighborhoodFAQ} title={`Dúvidas sobre Cursos em ${neighborhood}`} />

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
