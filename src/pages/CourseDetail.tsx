import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "@/data/courses";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, BarChart3, Tag, Phone } from "lucide-react";
import { useEffect } from "react";
import FloatingButtons from "@/components/FloatingButtons";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courseId ? getCourseById(courseId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Curso não encontrado</h1>
          <Button variant="hero" onClick={() => navigate('/cursos')}>
            Ver Todos os Cursos
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "5541996439389";
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o curso: ${course.title}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navigation />
      <FloatingButtons />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 text-white hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              {course.highlighted && (
                <div className="absolute top-4 right-4 bg-primary text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  ⭐ DESTAQUE
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {course.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
                  {course.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-montserrat leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-white/60 text-sm font-montserrat">Duração</span>
                  </div>
                  <p className="text-white font-bold text-lg">{course.duration}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="text-white/60 text-sm font-montserrat">Nível</span>
                  </div>
                  <p className="text-white font-bold text-lg">{course.level}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-5 h-5 text-primary" />
                    <span className="text-white/60 text-sm font-montserrat">Categoria</span>
                  </div>
                  <p className="text-white font-bold text-sm">{course.category}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="flex-1 group"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Fale Conosco no WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/cursos')}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Ver Outros Cursos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-playfair">
            O que você vai aprender
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Técnicas fundamentais e avançadas",
              "Protocolos de segurança e higiene",
              "Atendimento e gestão de clientes",
              "Materiais e equipamentos profissionais",
              "Práticas supervisionadas",
              "Certificado reconhecido"
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/40 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-white font-montserrat">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-playfair">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto font-montserrat">
            Entre em contato agora mesmo e garanta sua vaga neste curso!
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-base md:text-lg px-8 md:px-12 py-6 md:py-8"
          >
            <Phone className="mr-2 h-5 w-5" />
            Falar com Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
