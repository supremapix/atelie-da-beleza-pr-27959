import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2 } from "lucide-react";
import { getAllCities, getAllNeighborhoods } from "@/data/locations";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const LocationLinks = () => {
  const navigate = useNavigate();
  const cities = getAllCities();
  const neighborhoods = getAllNeighborhoods();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Cidades - Grid em Desktop, Carrossel em Mobile */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Atendemos Toda a <span className="text-primary">Região Metropolitana</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha sua cidade e descubra nossas oportunidades
            </p>
          </div>
          
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Card 
                key={city.slug}
                className="cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all bg-card/80 backdrop-blur-sm"
                onClick={() => navigate(`/${city.slug}`)}
              >
                <CardContent className="p-4 text-center">
                  <Building2 className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{city.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile: Carrossel */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {cities.map((city) => (
                  <CarouselItem key={city.slug} className="basis-1/2">
                    <Card 
                      className="cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all bg-card/80 backdrop-blur-sm"
                      onClick={() => navigate(`/${city.slug}`)}
                    >
                      <CardContent className="p-4 text-center">
                        <Building2 className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-semibold text-foreground">{city.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Bairros - Grid em Desktop, Carrossel em Mobile */}
        <div>
          <div className="text-center mb-8">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Bairros de <span className="text-primary">Curitiba</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Encontre a unidade mais próxima de você
            </p>
          </div>
          
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-2">
            {neighborhoods.map((neighborhood) => (
              <Card 
                key={neighborhood.slug}
                className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all bg-card/80 backdrop-blur-sm"
                onClick={() => navigate(`/${neighborhood.slug}`)}
              >
                <CardContent className="p-3 text-center">
                  <MapPin className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-xs font-medium text-foreground">{neighborhood.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile: Carrossel */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {neighborhoods.map((neighborhood) => (
                  <CarouselItem key={neighborhood.slug} className="basis-1/3">
                    <Card 
                      className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all bg-card/80 backdrop-blur-sm"
                      onClick={() => navigate(`/${neighborhood.slug}`)}
                    >
                      <CardContent className="p-3 text-center">
                        <MapPin className="w-5 h-5 mx-auto mb-1 text-primary" />
                        <p className="text-xs font-medium text-foreground break-words">{neighborhood.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationLinks;
