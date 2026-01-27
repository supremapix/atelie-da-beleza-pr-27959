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
    <section className="py-20 md:py-28 bg-background organic-bg">
      <div className="container mx-auto px-4">
        {/* Cidades */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
              Região Metropolitana
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Atendemos <span className="text-primary italic">Toda a Região</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Escolha sua cidade e descubra nossas oportunidades
            </p>
          </div>
          
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {cities.map((city) => (
              <Card 
                key={city.slug}
                className="cursor-pointer organic-card border-0 hover:border-primary/30"
                onClick={() => navigate(`/${city.slug}`)}
              >
                <CardContent className="p-4 text-center">
                  <Building2 className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium text-foreground">{city.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile: Carrossel */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-[280px] mx-auto">
              <CarouselContent>
                {cities.map((city) => (
                  <CarouselItem key={city.slug} className="basis-1/2">
                    <Card 
                      className="cursor-pointer organic-card border-0"
                      onClick={() => navigate(`/${city.slug}`)}
                    >
                      <CardContent className="p-4 text-center">
                        <Building2 className="w-5 h-5 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium text-foreground">{city.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-background border-0 shadow-soft" />
              <CarouselNext className="bg-background border-0 shadow-soft" />
            </Carousel>
          </div>
        </div>

        {/* Bairros */}
        <div>
          <div className="text-center mb-10">
            <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
              Bairros
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Curitiba e <span className="text-primary italic">Região</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Encontre a unidade mais próxima de você
            </p>
          </div>
          
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-2 max-w-5xl mx-auto">
            {neighborhoods.map((neighborhood) => (
              <Card 
                key={neighborhood.slug}
                className="cursor-pointer organic-card border-0 hover:border-primary/30"
                onClick={() => navigate(`/${neighborhood.slug}`)}
              >
                <CardContent className="p-3 text-center">
                  <MapPin className="w-4 h-4 mx-auto mb-1 text-primary" />
                  <p className="text-xs font-medium text-foreground">{neighborhood.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile: Carrossel */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-[280px] mx-auto">
              <CarouselContent>
                {neighborhoods.map((neighborhood) => (
                  <CarouselItem key={neighborhood.slug} className="basis-1/3">
                    <Card 
                      className="cursor-pointer organic-card border-0"
                      onClick={() => navigate(`/${neighborhood.slug}`)}
                    >
                      <CardContent className="p-3 text-center">
                        <MapPin className="w-4 h-4 mx-auto mb-1 text-primary" />
                        <p className="text-[10px] font-medium text-foreground break-words">{neighborhood.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-background border-0 shadow-soft" />
              <CarouselNext className="bg-background border-0 shadow-soft" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationLinks;