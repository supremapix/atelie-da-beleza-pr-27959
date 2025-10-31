import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Building2 } from "lucide-react";
import { getAllCities, getAllNeighborhoods } from "@/data/locations";

const LocationLinks = () => {
  const navigate = useNavigate();
  const cities = getAllCities();
  const neighborhoods = getAllNeighborhoods();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Cidades */}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Button
                key={city.slug}
                variant="outline"
                onClick={() => navigate(`/${city.slug}`)}
                className="h-auto py-3 px-4 text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {city.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Bairros */}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {neighborhoods.map((neighborhood) => (
              <Button
                key={neighborhood.slug}
                variant="ghost"
                size="sm"
                onClick={() => navigate(`/${neighborhood.slug}`)}
                className="text-xs hover:bg-primary/10 hover:text-primary"
              >
                {neighborhood.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationLinks;
