import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "@/data/courses";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, BarChart3, Tag, Phone, CheckCircle2, Users, Award, Star, TrendingUp, Sparkles } from "lucide-react";
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4 leading-tight">
                  {course.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-montserrat leading-relaxed mb-6">
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

      {/* Course Benefits */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
              O Que Você Vai Dominar
            </h2>
            <p className="text-white/70 text-lg font-montserrat">Saia do curso 100% preparada para atuar profissionalmente</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Técnicas Profissionais", desc: "Do básico ao avançado com prática supervisionada" },
              { title: "Segurança e Higiene", desc: "Protocolos de biossegurança e boas práticas" },
              { title: "Gestão de Clientes", desc: "Como atrair, atender e fidelizar sua clientela" },
              { title: "Equipamentos & Materiais", desc: "Conheça e domine ferramentas profissionais" },
              { title: "Prática Intensiva", desc: "Horas de treino com acompanhamento especializado" },
              { title: "Certificado Reconhecido", desc: "Certificação que abre portas no mercado" }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:from-primary/50 group-hover:to-primary/20 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 font-montserrat">{benefit.title}</h3>
                    <p className="text-white/70 text-sm font-montserrat">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
