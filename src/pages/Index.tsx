import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Courses from "@/components/Courses";
import VideoSection from "@/components/VideoSection";
import CoursesShowcase from "@/components/CoursesShowcase";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import LocationLinks from "@/components/LocationLinks";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SchemaMarkup from "@/components/SchemaMarkup";
import LiveNotifications from "@/components/LiveNotifications";
import EnhancedSEO from "@/components/EnhancedSEO";
import FAQ from "@/components/FAQ";
import { generalFAQ } from "@/data/faq";
import CourseSearch from "@/components/CourseSearch";
import { courses } from "@/data/courses";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ateliê Beleza",
    "url": "https://ateliebeleza.app.br",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/z3uM9QrEiaZcmzxCWIVMCntcMQg2/social-images/social-1761135543473-atelie-da-beleza-cursos-profissionalizantes-em-curitiba-parana-brasil.png",
    "description": "Cursos de estética em Curitiba com instrutores renomados. Mais de 6.000 alunas formadas. Capacitação em micropigmentação, design de sobrancelhas, lash lifting e muito mais.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "telephone": "+55-41-99643-9389",
    "email": "cursosateliedabeleza@gmail.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Ateliê Beleza - Cursos de Estética em Curitiba | Capacitação Profissional"
        description="Cursos de estética em Curitiba com mais de 6.000 alunas formadas. Capacitação em micropigmentação, design de sobrancelhas, lash lifting e muito mais. Instrutores renomados, preços acessíveis e certificado reconhecido."
        canonical="https://ateliebeleza.app.br/"
        keywords="cursos de estética Curitiba, micropigmentação Curitiba, design de sobrancelhas, lash lifting, estética facial, estética corporal, curso profissionalizante, capacitação estética"
        structuredData={structuredData}
      />
      <SchemaMarkup />
      <Navigation />
      <main>
        <Hero />
        
        {/* Busca de Cursos na Home */}
        <section className="py-12 bg-gradient-to-b from-background to-[#E8DCC4]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-playfair text-foreground">
              Encontre o <span className="text-primary">Curso Ideal</span> para Você
            </h2>
            <CourseSearch 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm}
              placeholder="Digite o nome do curso que você procura..."
            />
            
            {searchTerm && (
              <div className="mt-8">
                {courses.filter((course) => {
                  const search = searchTerm.toLowerCase();
                  return (
                    course.title.toLowerCase().includes(search) ||
                    course.description.toLowerCase().includes(search) ||
                    course.category.toLowerCase().includes(search)
                  );
                }).length > 0 ? (
                  <>
                    <h3 className="text-xl font-semibold text-center mb-6 text-foreground">
                      Resultados encontrados ({courses.filter((course) => {
                        const search = searchTerm.toLowerCase();
                        return (
                          course.title.toLowerCase().includes(search) ||
                          course.description.toLowerCase().includes(search) ||
                          course.category.toLowerCase().includes(search)
                        );
                      }).length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courses.filter((course) => {
                        const search = searchTerm.toLowerCase();
                        return (
                          course.title.toLowerCase().includes(search) ||
                          course.description.toLowerCase().includes(search) ||
                          course.category.toLowerCase().includes(search)
                        );
                      }).slice(0, 6).map((course) => (
                        <Card 
                          key={course.id} 
                          className="overflow-hidden bg-white border-2 border-border hover:border-primary/30 hover-lift group cursor-pointer"
                          onClick={() => navigate(`/curso/${course.id}`)}
                        >
                          {course.highlighted && (
                            <div className="absolute top-4 right-4 z-10">
                              <div className="bg-primary text-background px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                <Sparkles className="w-3 h-3" />
                                Destaque
                              </div>
                            </div>
                          )}
                          
                          <div className="relative overflow-hidden h-48">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                          
                          <CardHeader className="pb-3">
                            <div className="mb-2">
                              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                {course.category}
                              </span>
                            </div>
                            <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors font-montserrat font-semibold">
                              {course.title}
                            </CardTitle>
                          </CardHeader>
                          
                          <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {course.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="font-semibold text-foreground text-sm">{course.duration}</span>
                            </div>
                          </CardContent>
                          
                          <CardFooter className="pt-0">
                            <Button 
                              variant="default" 
                              className="w-full shadow-md hover:shadow-lg"
                            >
                              Ver Detalhes
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                    {courses.filter((course) => {
                      const search = searchTerm.toLowerCase();
                      return (
                        course.title.toLowerCase().includes(search) ||
                        course.description.toLowerCase().includes(search) ||
                        course.category.toLowerCase().includes(search)
                      );
                    }).length > 6 && (
                      <div className="text-center mt-8">
                        <Button 
                          onClick={() => navigate('/cursos')}
                          size="lg"
                          className="shadow-lg"
                        >
                          Ver Todos os Resultados ({courses.filter((course) => {
                            const search = searchTerm.toLowerCase();
                            return (
                              course.title.toLowerCase().includes(search) ||
                              course.description.toLowerCase().includes(search) ||
                              course.category.toLowerCase().includes(search)
                            );
                          }).length})
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-center text-muted-foreground">
                    Nenhum curso encontrado para "{searchTerm}". Tente buscar por outro termo.
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
        
        <SectionDivider />
        <Courses />
        <VideoSection />
        <CoursesShowcase />
        <About />
        <Testimonials />
        <FAQ items={generalFAQ} />
        <LocationLinks />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <LiveNotifications />
    </div>
  );
};

export default Index;
