import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Clock, Sparkles, Phone, Info } from "lucide-react";
import { courses as coursesData, Course } from "@/data/courses";
import CourseSearch from "@/components/CourseSearch";

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleWhatsApp = (courseName: string) => {
    const message = `Olá! Gostaria de tirar dúvidas sobre o curso: ${courseName}`;
    window.open(`https://wa.me/5541996439389?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Agrupar cursos por categoria
  const coursesByCategory = coursesData.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {} as Record<string, Course[]>);

  const categories = Object.keys(coursesByCategory).sort();

  // Filtrar por categoria
  const coursesBySelectedCategory = selectedCategory === "todos" 
    ? coursesData 
    : coursesByCategory[selectedCategory] || [];

  // Filtrar por busca
  const filteredCourses = coursesBySelectedCategory.filter((course) => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      course.title.toLowerCase().includes(search) ||
      course.description.toLowerCase().includes(search) ||
      course.category.toLowerCase().includes(search) ||
      (course.detailedDescription && course.detailedDescription.toLowerCase().includes(search))
    );
  });

  // Scroll para categoria quando vier de hash na URL
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const categoryFromHash = hash.replace(/-/g, ' ');
      const matchingCategory = categories.find(
        cat => cat.toLowerCase() === categoryFromHash.toLowerCase()
      );
      if (matchingCategory) {
        setSelectedCategory(matchingCategory);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <section id="todos-cursos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            <span className="text-primary">Nossos Cursos</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto font-montserrat">
            Mais de {coursesData.length} cursos profissionalizantes em estética e beleza. 
            Encontre a capacitação perfeita para sua carreira!
          </p>
        </div>

        {/* Barra de Busca */}
        <CourseSearch 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
        />

        {/* Filtros por categoria */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedCategory === "todos" ? "default" : "outline"}
            onClick={() => setSelectedCategory("todos")}
            className={selectedCategory === "todos" ? "bg-primary text-background" : "border-primary text-primary hover:bg-primary hover:text-background"}
          >
            Todos ({coursesData.length})
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary text-background" : "border-primary text-primary hover:bg-primary hover:text-background"}
            >
              {category} ({coursesByCategory[category].length})
            </Button>
          ))}
        </div>

        {/* Grid de cursos */}
        <div className="mt-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/80 text-lg">
                Nenhum curso encontrado para "{searchTerm}". Tente buscar por outro termo.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredCourses.map((course) => (
              <Card 
                key={course.id} 
                id={course.category.toLowerCase().replace(/\s+/g, '-')}
                className="overflow-hidden bg-white border-2 border-border hover:border-primary/30 hover-lift group relative"
              >
                {course.highlighted && (
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 z-10">
                    <div className="bg-primary text-background px-2.5 md:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Destaque
                    </div>
                  </div>
                )}
                
                {/* Course Image */}
                <div className="relative overflow-hidden h-52 md:h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-3 px-4 md:px-6 pt-4 md:pt-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {course.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors min-h-[2.5rem] md:min-h-[3rem] font-montserrat font-semibold leading-tight">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3 md:space-y-4 px-4 md:px-6">
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 text-sm flex-wrap">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-xs md:text-sm">{course.duration}</span>
                    </div>
                    <div className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {course.level}
                    </div>
                  </div>
                  {(course.cashPrice || course.installmentPrice) && (
                    <div className="pt-2 border-t border-border">
                      <div className="flex flex-col gap-1">
                        {course.cashPrice && (
                          <p className="text-sm">
                            <span className="text-muted-foreground">À vista:</span>{" "}
                            <span className="font-bold text-primary">R$ {course.cashPrice}</span>
                          </p>
                        )}
                        {course.installmentPrice && (
                          <p className="text-xs text-muted-foreground">
                            Ou 10x de R$ {(course.installmentPrice / 10).toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="pt-0 flex-col gap-2 md:gap-3 px-4 md:px-6 pb-4 md:pb-6">
                  <div className="flex flex-col md:flex-row gap-2 w-full">
                    <Button 
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-background text-xs md:text-sm h-9 md:h-10"
                      onClick={() => handleWhatsApp(course.title)}
                    >
                      <Phone className="mr-1.5 md:mr-2 w-3.5 h-3.5 md:w-4 md:h-4" />
                      Tire suas dúvidas
                    </Button>
                    <Button 
                      variant="default" 
                      className="flex-1 shadow-md hover:shadow-lg text-xs md:text-sm h-9 md:h-10"
                      onClick={() => setSelectedCourse(course)}
                    >
                      <Info className="mr-1.5 md:mr-2 w-3.5 h-3.5 md:w-4 md:h-4" />
                      Saiba Mais
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
            </div>
          )}
        </div>

        {/* Modal de Detalhes do Curso */}
        <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
          <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-4 md:p-6">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-playfair text-primary pr-8">
                {selectedCourse?.title}
              </DialogTitle>
              <DialogDescription className="text-sm md:text-base text-muted-foreground pt-2">
                {selectedCourse?.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 md:space-y-6 mt-4">
              {/* Imagem do Curso */}
              <div className="relative overflow-hidden rounded-lg w-full">
                <div className="aspect-video w-full">
                  <img
                    src={selectedCourse?.image}
                    alt={selectedCourse?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Informações Gerais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-muted-foreground">Carga Horária</p>
                    <p className="font-semibold text-sm md:text-base text-foreground truncate">{selectedCourse?.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-muted-foreground">Nível</p>
                    <p className="font-semibold text-sm md:text-base text-foreground truncate">{selectedCourse?.level}</p>
                  </div>
                </div>
                {selectedCourse?.cashPrice && (
                  <div className="flex items-center gap-2 col-span-full">
                    <div className="w-full bg-primary/5 p-3 md:p-4 rounded-lg border border-primary/20">
                      <p className="text-base md:text-lg font-bold text-primary mb-1">
                        R$ {selectedCourse.cashPrice} à vista
                      </p>
                      {selectedCourse.installmentPrice && (
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Ou 10x de R$ {(selectedCourse.installmentPrice / 10).toFixed(2)} = R$ {selectedCourse.installmentPrice}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Categoria */}
              <div className="bg-primary/5 p-3 md:p-4 rounded-lg border border-primary/20">
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Área de Especialização</p>
                <p className="text-base md:text-lg font-bold text-primary">{selectedCourse?.category}</p>
              </div>

              {/* O que você vai aprender */}
              {selectedCourse?.whatYouWillLearn && selectedCourse.whatYouWillLearn.length > 0 && (
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-3">O Que Você Vai Aprender</h3>
                  <div className="space-y-2">
                    {selectedCourse.whatYouWillLearn.slice(0, 6).map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs md:text-sm">
                        <Info className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                    {selectedCourse.whatYouWillLearn.length > 6 && (
                      <p className="text-xs md:text-sm text-primary font-semibold italic">
                        + {selectedCourse.whatYouWillLearn.length - 6} tópicos adicionais...
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Bônus */}
              {selectedCourse?.bonuses && selectedCourse.bonuses.length > 0 && (
                <div className="bg-green-50 p-3 md:p-4 rounded-lg border border-green-200">
                  <h3 className="text-base md:text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                    Bônus Exclusivos
                  </h3>
                  <div className="space-y-2">
                    {selectedCourse.bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs md:text-sm">
                        <Info className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-green-800 font-medium break-words">{bonus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Descrição Completa */}
              {selectedCourse?.detailedDescription && (
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-3">Sobre o Curso</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{selectedCourse.detailedDescription}</p>
                </div>
              )}

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-4 border-t">
                <Button 
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-background text-sm"
                  onClick={() => selectedCourse && handleWhatsApp(selectedCourse.title)}
                >
                  <Phone className="mr-2 w-3 h-3 md:w-4 md:h-4" />
                  Tire suas dúvidas
                </Button>
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90 text-background shadow-md hover:shadow-lg text-sm"
                  onClick={() => {
                    if (selectedCourse) {
                      const message = `Olá! Gostaria de me inscrever no curso: ${selectedCourse.title}`;
                      window.open(`https://wa.me/5541996439389?text=${encodeURIComponent(message)}`, '_blank');
                    }
                  }}
                >
                  <MessageCircle className="mr-2 w-3 h-3 md:w-4 md:h-4" />
                  Quero me inscrever
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>* Valores e informações podem sofrer alterações sem aviso prévio</p>
          <p className="mt-2">
            Para matrículas e mais informações, entre em contato:{" "}
            <a href="tel:+5541996439389" className="text-primary hover:underline font-semibold">
              (41) 9 9643-9389
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
