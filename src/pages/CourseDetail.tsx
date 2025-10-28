import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "@/data/courses";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, BarChart3, Tag, Phone, CheckCircle2, Users, Award, Star, TrendingUp, Sparkles, Calendar, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import FAQ from "@/components/FAQ";
import { generalFAQ } from "@/data/faq";
import { courseFAQs, defaultCourseFAQ } from "@/data/courseFAQs";
import { getRandomTestimonials, type Testimonial } from "@/data/testimonials";
import { Card } from "@/components/ui/card";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courseId ? getCourseById(courseId) : undefined;
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (course) {
      setTestimonials(getRandomTestimonials(course.category, 3));
    }
  }, [course]);

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Ateliê Beleza",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      }
    },
    "timeRequired": course.duration,
    "educationalLevel": course.level,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "addressCountry": "BR"
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5541996439389";
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o curso: ${course.title}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-x-hidden">
      <EnhancedSEO
        title={`${course.title} - Curso de Estética em Curitiba | Ateliê Beleza`}
        description={`${course.description} ${course.duration} • ${course.level} • Material incluso • Certificado reconhecido. Aprenda com os melhores profissionais de Curitiba.`}
        canonical={`https://ateliebeleza.app.br/curso/${courseId}`}
        keywords={`${course.title}, curso ${course.title.toLowerCase()}, estética Curitiba, capacitação profissional, ${course.category.toLowerCase()}`}
        structuredData={structuredData}
        type="product"
      />
      <Navigation />
      <FloatingButtons />
      
      {/* Trust Badges Section */}
      <section className="pt-28 sm:pt-32 md:pt-24 pb-6">
        <div className="container mx-auto px-4 max-w-full overflow-x-hidden">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-montserrat whitespace-nowrap">+2.000 Alunas</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-montserrat whitespace-nowrap">Certificado</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-montserrat whitespace-nowrap">4.9/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-12 md:pb-16 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full overflow-x-hidden">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 text-white hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center max-w-full">
            {/* Image */}
            <div className="relative group w-full max-w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 w-full max-w-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              {course.highlighted && (
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-to-r from-primary to-primary/80 text-black px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse shadow-lg flex items-center gap-1 sm:gap-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">DESTAQUE</span>
                </div>
              )}
              {/* Urgency Badge */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-red-600/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold shadow-lg">
                🔥 Vagas Limitadas
              </div>
            </div>

            {/* Info */}
            <div className="space-y-4 sm:space-y-6 max-w-full overflow-x-hidden">
              <div>
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-primary/30">
                  {course.category}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mb-3 sm:mb-4 leading-tight break-words">
                  {course.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-montserrat leading-relaxed mb-4 sm:mb-6 break-words">
                  {course.description}
                </p>
                
                {/* Social Proof Mini */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-white/20"></div>
                    ))}
                  </div>
                  <p className="text-sm text-white/70 font-montserrat">+150 alunas matriculadas este mês</p>
                </div>
              </div>

              {/* Course Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-full">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-white/60 text-xs sm:text-sm font-montserrat">Duração</span>
                  </div>
                  <p className="text-white font-bold text-sm sm:text-base break-words">{course.duration}</p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-white/60 text-xs sm:text-sm font-montserrat">Nível</span>
                  </div>
                  <p className="text-white font-bold text-sm sm:text-base break-words">{course.level}</p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-white/60 text-xs sm:text-sm font-montserrat">Demanda</span>
                  </div>
                  <p className="text-white font-bold text-sm sm:text-base">Alta 📈</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 max-w-full">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:flex-1 group shadow-xl hover:shadow-2xl hover:shadow-primary/20 animate-pulse text-xs sm:text-sm md:text-base px-3 sm:px-4 py-3 sm:py-4 h-auto"
                >
                  <Phone className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce flex-shrink-0" />
                  <span className="break-words text-center">Garantir Minha Vaga!</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/cursos')}
                  className="w-full sm:flex-1 border-white/30 text-white hover:bg-white/10 hover:border-primary/50 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-3 sm:py-4 h-auto"
                >
                  <span className="break-words">Ver Outros Cursos</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 max-w-full">
                <div className="flex items-center gap-1 text-xs sm:text-sm text-white/70">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="whitespace-nowrap">Prática supervisionada</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-white/70">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="whitespace-nowrap">Material incluso</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-white/70">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="whitespace-nowrap">Certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {course.videoUrl && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-x-hidden">
          <div className="container mx-auto px-4 max-w-full">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 font-playfair px-4 break-words">
                  Veja Como Funciona o Curso
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg font-montserrat px-4 break-words">Assista ao vídeo e descubra como você pode transformar sua carreira</p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/40 hover:border-primary/60 transition-all max-w-full">
                <iframe
                  src={course.videoUrl}
                  title={`Vídeo do curso ${course.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              {/* CTA After Video */}
              <div className="text-center mt-6 sm:mt-8">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="group shadow-xl text-xs sm:text-sm md:text-base px-4 py-3 sm:px-6 sm:py-4 w-full sm:w-auto"
                >
                  <Phone className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce flex-shrink-0" />
                  <span className="break-words">Fale Conosco</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Description */}
      {course.detailedDescription && (
        <section className="py-16 md:py-24 overflow-x-hidden">
          <div className="container mx-auto px-4 max-w-full">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 font-playfair px-4 break-words">
                Por Que Escolher Este Curso?
              </h2>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl max-w-full overflow-hidden">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 font-montserrat leading-relaxed break-words">
                  {course.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What You Will Learn */}
      {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-x-hidden">
          <div className="container mx-auto px-4 max-w-full">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-playfair px-4 break-words">
                  O Que Você Vai Aprender
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg font-montserrat px-4 break-words">Conteúdo completo e atualizado do curso</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3 md:gap-4 max-w-full">
                {course.whatYouWillLearn.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-5 hover:bg-white/15 hover:border-primary/50 transition-all duration-300 group w-full overflow-hidden"
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-primary/50 group-hover:to-primary/20 transition-all">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                      </div>
                      <p className="text-white/90 font-montserrat text-xs md:text-base leading-relaxed break-words">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Course Differentials */}
      {course.courseDifferentials && course.courseDifferentials.length > 0 && (
        <section className="py-16 md:py-24 overflow-x-hidden">
          <div className="container mx-auto px-4 max-w-full">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-playfair px-4 break-words">
                  Diferenciais do Curso
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg font-montserrat px-4 break-words">Por que este curso se destaca</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-full">
                {course.courseDifferentials.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-xl p-4 md:p-6 hover:bg-primary/25 hover:border-primary/50 hover:scale-105 transition-all duration-300 group w-full overflow-hidden"
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-black" />
                      </div>
                      <p className="text-white font-semibold font-montserrat text-xs md:text-base leading-relaxed break-words">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bonuses */}
      {course.bonuses && course.bonuses.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-green-900/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-green-500/20 border border-green-500/50 text-green-300 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4 animate-pulse">
                  🎁 BÔNUS EXCLUSIVOS
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 font-playfair px-4">
                  Você Também Ganha
                </h2>
                <p className="text-white/70 text-base md:text-lg font-montserrat px-4">Conteúdos extras inclusos no seu curso</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {course.bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-900/20 to-green-900/5 backdrop-blur-sm border-2 border-green-500/30 rounded-xl p-4 md:p-6 hover:border-green-500/50 hover:scale-105 transition-all duration-300 group w-full overflow-hidden"
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-green-500/40 to-green-500/20 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                      </div>
                      <p className="text-white font-semibold font-montserrat text-xs md:text-base leading-relaxed break-words">{bonus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-playfair px-4 break-words">
                O Que Nossas Alunas Dizem
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 font-montserrat px-4 break-words">
                Histórias reais de profissionais que transformaram suas carreiras
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-full">
              {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id}
                  className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 p-4 md:p-6 w-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-center mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />
                      ))}
                    </div>
                    
                    <p className="text-white/90 font-montserrat italic mb-4 md:mb-6 flex-grow text-xs md:text-base leading-relaxed break-words">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-primary/20 pt-3 md:pt-4">
                      <p className="text-white font-semibold font-montserrat mb-1 text-sm md:text-base break-words">
                        {testimonial.name}
                      </p>
                      <p className="text-primary/80 text-xs md:text-sm font-montserrat break-words">
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-primary/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary/20">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-white font-montserrat text-xs sm:text-sm md:text-base break-words">
                  +2.000 Profissionais | 4.9★
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Specs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12 font-playfair px-4 break-words">
              Ficha Técnica do Curso
            </h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-full">
              {/* Pricing Section - Destaque no Parcelado */}
              {(course.cashPrice || course.installmentPrice) && (
                <div className="md:col-span-2 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-4 md:p-8 hover:border-primary/60 transition-all relative overflow-hidden group w-full">
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer"></div>
                  
                  <DollarSign className="w-8 h-8 md:w-12 md:h-12 text-primary mb-3 md:mb-4 relative z-10" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 font-playfair relative z-10">Investimento Profissional</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 relative z-10">
                    {/* Parcelado - DESTAQUE PRINCIPAL */}
                    {course.installmentPrice && (
                      <div className="relative w-full">
                        {/* Badge de destaque */}
                        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gradient-to-r from-green-500 to-green-400 text-white text-xs font-bold px-2 py-1 md:px-3 rounded-full animate-pulse shadow-lg z-20">
                          MAIS ESCOLHIDO
                        </div>
                        
                        <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-4 md:p-6 border-2 border-primary/50 shadow-2xl transform group-hover:scale-105 transition-all duration-300 w-full">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" />
                            <p className="text-primary font-bold text-xs md:text-sm uppercase tracking-wide">Parcelamento Facilitado</p>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-white/80 text-xs md:text-sm mb-1">Em até 10x sem juros</p>
                            <div className="flex items-end gap-1 md:gap-2">
                              <p className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-none">
                                {Math.floor(course.installmentPrice / 10)}
                              </p>
                              <p className="text-xl md:text-2xl text-primary font-bold mb-1">,{String(((course.installmentPrice / 10) % 1).toFixed(2)).slice(2)}</p>
                            </div>
                            <p className="text-white/90 text-base md:text-lg font-semibold mt-1">por mês</p>
                          </div>
                          
                          <div className="bg-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                            <p className="text-white/70 text-xs mb-1">Valor total parcelado</p>
                            <p className="text-white text-xl font-bold">
                              R$ {course.installmentPrice}
                            </p>
                          </div>
                          
                          <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="font-semibold">Sem juros no cartão</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* À vista */}
                    {course.cashPrice && (
                      <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 md:p-6 border border-primary/30 hover:border-primary/40 transition-all w-full">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          <p className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">Pagamento à Vista</p>
                        </div>
                        
                        <div className="mb-3">
                          <p className="text-white/70 text-xs md:text-sm mb-2">Desconto especial</p>
                          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                            R$ {course.cashPrice}
                          </p>
                        </div>
                        
                        <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-2 md:p-3 mt-4">
                          <p className="text-green-400 text-xs md:text-sm font-semibold flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                            Economize até 15% no pagamento à vista
                          </p>
                        </div>
                        
                        <div className="mt-4 flex items-center gap-2 text-white/70 text-xs md:text-sm">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                          <span>PIX, Dinheiro ou Débito</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Rápido */}
                  <div className="mt-4 sm:mt-6 text-center relative z-10">
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={handleWhatsAppClick}
                      className="w-full md:w-auto group shadow-xl text-xs sm:text-sm md:text-base px-4 sm:px-6 py-3 sm:py-4"
                    >
                      <Phone className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce flex-shrink-0" />
                      <span className="break-words">Consultar Condições</span>
                    </Button>
                    <p className="text-white/60 text-xs mt-2 break-words">Respondemos em minutos ⚡</p>
                  </div>
                </div>
              )}

              {/* Course Info Section */}
              <div className="md:col-span-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 md:p-8 w-full overflow-hidden">
                <Calendar className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 font-montserrat break-words">
                  {course.courseInfo && course.courseInfo.length > 0 ? "Detalhes do Curso" : "Informações do Curso"}
                </h3>
                <ul className="space-y-2 md:space-y-3 text-white/90">
                  {course.courseInfo && course.courseInfo.length > 0 ? (
                    course.courseInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base break-words">{info}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base"><strong>Duração:</strong> {course.duration}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base"><strong>Nível:</strong> {course.level}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base"><strong>Turmas:</strong> Máximo 5 alunas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base"><strong>Horário:</strong> 9h às 16h30/17h</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              
              {/* Includes Section */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 md:p-8 md:col-span-1 w-full overflow-hidden">
                <Tag className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 font-montserrat break-words">O Que Está Incluso</h3>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-xs md:text-base break-words">Apostila completa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-xs md:text-base break-words">Certificado reconhecido</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-xs md:text-base break-words">Material para prática</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-xs md:text-base break-words">Suporte pós-curso</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-xs md:text-base break-words">Turmas reduzidas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-xs md:text-base break-words">Prática com modelos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Específico do Curso */}
      <FAQ 
        title="Perguntas Frequentes Sobre Este Curso"
        subtitle="Tire todas as suas dúvidas sobre esta capacitação profissional"
        items={courseFAQs[courseId || ''] || defaultCourseFAQ} 
        className="bg-gradient-to-b from-transparent via-black/50 to-transparent text-white" 
      />

      {/* Personalized CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Urgency Badge */}
            <div className="inline-block bg-red-600/20 border border-red-500/50 text-red-300 px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ Turma com vagas limitadas - Garanta a sua!
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-playfair">
              {course.personalizedCTA ? "Transforme Sua Vida Profissional!" : "Pronto Para Dar o Próximo Passo?"}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-montserrat leading-relaxed">
              {course.personalizedCTA || "Entre em contato agora mesmo e garanta sua vaga neste curso transformador!"}
            </p>
            
            {/* CTA with benefits */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <Button
                variant="hero"
                size="lg"
                onClick={handleWhatsAppClick}
                className="text-base md:text-lg px-10 md:px-14 py-6 md:py-8 group shadow-2xl hover:shadow-primary/30 scale-105 hover:scale-110 transition-all"
              >
                <Phone className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                Fale Conosco Agora no WhatsApp
              </Button>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Resposta rápida
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Tire suas dúvidas
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Condições especiais
                </span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">+2.000</p>
                <p className="text-sm text-white/60">Alunas Formadas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">98%</p>
                <p className="text-sm text-white/60">Satisfação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">15+</p>
                <p className="text-sm text-white/60">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
