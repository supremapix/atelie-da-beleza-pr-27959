import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "@/data/courses";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdvancedSEO from "@/components/AdvancedSEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, BarChart3, Tag, Phone, CheckCircle2, Users, Award, Star, TrendingUp, Sparkles, Calendar, DollarSign } from "lucide-react";
import { useEffect } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import FAQ from "@/components/FAQ";
import { generalFAQ } from "@/data/faq";

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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <AdvancedSEO
        title={`${course.title} - Curso de Estética em Curitiba | Ateliê Beleza`}
        description={`${course.description} ${course.duration} • ${course.level} • Material incluso • Certificado reconhecido. Aprenda com os melhores profissionais de Curitiba.`}
        canonical={`https://ateliebeleza.app.br/curso/${courseId}`}
        keywords={`${course.title}, curso ${course.title.toLowerCase()}, estética Curitiba, capacitação profissional, ${course.category.toLowerCase()}`}
        structuredData={structuredData}
      />
      <Navigation />
      <FloatingButtons />
      
      {/* Trust Badges Section */}
      <section className="pt-24 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base font-montserrat">+2.000 Alunas Formadas</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base font-montserrat">Certificado Reconhecido</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="text-sm md:text-base font-montserrat">4.9/5 Avaliação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-12 md:pb-16">
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              {course.highlighted && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary/80 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  CURSO DESTAQUE
                </div>
              )}
              {/* Urgency Badge */}
              <div className="absolute bottom-4 left-4 bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                🔥 Vagas Limitadas
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/30">
                  {course.category}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4 leading-tight">
                  {course.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-montserrat leading-relaxed mb-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-white/60 text-sm font-montserrat">Duração</span>
                  </div>
                  <p className="text-white font-bold text-lg">{course.duration}</p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="text-white/60 text-sm font-montserrat">Nível</span>
                  </div>
                  <p className="text-white font-bold text-lg">{course.level}</p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-white/60 text-sm font-montserrat">Demanda</span>
                  </div>
                  <p className="text-white font-bold text-lg">Alta 📈</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="flex-1 group shadow-xl hover:shadow-2xl hover:shadow-primary/20 animate-pulse"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Quero Garantir Minha Vaga Agora!
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/cursos')}
                  className="flex-1 border-white/30 text-white hover:bg-white/10 hover:border-primary/50"
                >
                  Ver Outros Cursos
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Prática supervisionada</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Material incluso</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Certificado ao final</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {course.videoUrl && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-playfair">
                  Veja Como Funciona o Curso
                </h2>
                <p className="text-white/70 text-lg font-montserrat">Assista ao vídeo e descubra como você pode transformar sua carreira</p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/40 hover:border-primary/60 transition-all">
                <iframe
                  src={course.videoUrl}
                  title={`Vídeo do curso ${course.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              {/* CTA After Video */}
              <div className="text-center mt-8">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="group shadow-xl"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Fale Conosco e Tire Suas Dúvidas
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Description */}
      {course.detailedDescription && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 font-playfair">
                Por Que Escolher Este Curso?
              </h2>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl">
                <p className="text-lg md:text-xl text-white/95 font-montserrat leading-relaxed">
                  {course.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What You Will Learn */}
      {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
                  O Que Você Vai Aprender
                </h2>
                <p className="text-white/70 text-lg font-montserrat">Conteúdo completo e atualizado do curso</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-primary/50 group-hover:to-primary/20 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-white/90 font-montserrat text-sm md:text-base leading-relaxed">{item}</p>
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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
                  Diferenciais do Curso
                </h2>
                <p className="text-white/70 text-lg font-montserrat">Por que este curso se destaca</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {course.courseDifferentials.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:bg-primary/25 hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <Sparkles className="w-5 h-5 text-black" />
                      </div>
                      <p className="text-white font-semibold font-montserrat text-sm md:text-base leading-relaxed">{item}</p>
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
                <div className="inline-block bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                  🎁 BÔNUS EXCLUSIVOS
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
                  Você Também Ganha
                </h2>
                <p className="text-white/70 text-lg font-montserrat">Conteúdos extras inclusos no seu curso</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {course.bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-900/20 to-green-900/5 backdrop-blur-sm border-2 border-green-500/30 rounded-xl p-6 hover:border-green-500/50 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/40 to-green-500/20 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <p className="text-white font-semibold font-montserrat text-sm md:text-base leading-relaxed">{bonus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Simplified Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-white/90 font-montserrat italic mb-4">
              "Melhor investimento que fiz na minha carreira! As técnicas são atuais, os professores são incríveis e hoje tenho minha agenda lotada."
            </p>
            <p className="text-white/60 font-montserrat">— Ana Paula, Designer de Sobrancelhas</p>
          </div>
        </div>
      </section>

      {/* Course Specs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-playfair">
              Ficha Técnica do Curso
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pricing Section */}
              {(course.cashPrice || course.installmentPrice) && (
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-8 hover:border-primary/60 transition-all">
                  <DollarSign className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4 font-montserrat">Investimento Profissional</h3>
                  <div className="space-y-4">
                    {course.cashPrice && (
                      <div className="bg-white/10 rounded-lg p-4 border border-primary/30">
                        <p className="text-white/70 text-sm mb-1">Pagamento à vista</p>
                        <p className="text-3xl font-bold text-primary">R$ {course.cashPrice}</p>
                      </div>
                    )}
                    {course.installmentPrice && (
                      <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                        <p className="text-white/70 text-sm mb-1">Ou parcelado em até 10x</p>
                        <p className="text-2xl font-bold text-white">
                          10x de R$ {(course.installmentPrice / 10).toFixed(2)}
                        </p>
                        <p className="text-white/60 text-xs mt-1">
                          Total: R$ {course.installmentPrice}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Course Info Section */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-4 font-montserrat">
                  {course.courseInfo && course.courseInfo.length > 0 ? "Detalhes do Curso" : "Informações do Curso"}
                </h3>
                <ul className="space-y-3 text-white/90">
                  {course.courseInfo && course.courseInfo.length > 0 ? (
                    course.courseInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{info}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Duração:</strong> {course.duration}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Nível:</strong> {course.level}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Turmas:</strong> Máximo 5 alunas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Horário:</strong> 9h às 16h30/17h</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              
              {/* Includes Section */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:col-span-2">
                <Tag className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-4 font-montserrat">O Que Está Incluso</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Apostila completa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Certificado reconhecido</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Material para prática</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Suporte pós-curso</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Turmas reduzidas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Prática com modelos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={generalFAQ} className="bg-gradient-to-b from-transparent via-black/50 to-transparent text-white" />

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
