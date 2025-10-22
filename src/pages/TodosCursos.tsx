import Navigation from "@/components/Navigation";
import AllCourses from "@/components/AllCourses";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, TrendingUp, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TodosCursos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-[#E8DCC4] to-[#F5EFE6]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="mb-6 text-foreground hover:text-primary"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar para Início
              </Button>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-foreground">
                Todos os Nossos <span className="text-primary">Cursos</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 font-montserrat font-medium">
                Mais de <span className="text-black font-bold animate-[pulse_2s_ease-in-out_infinite] inline-block">42 cursos profissionalizantes</span> em estética e beleza para você se especializar e alcançar o sucesso na sua carreira
              </p>
            </div>
          </div>
        </section>

        {/* All Courses Section */}
        <AllCourses />

        {/* Motivos para Aprender Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#E8DCC4] to-[#F5EFE6]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 font-playfair text-foreground">
              Motivos para Aprender com o Ateliê da Beleza
            </h2>
            
            <div className="max-w-7xl mx-auto bg-black rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {/* Card 1 - Especialização Profissional */}
                <div className="text-center md:text-left space-y-4">
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
                      <GraduationCap className="w-full h-full text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 font-playfair">
                      Especialização Profissional
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-montserrat">
                      Nossos cursos oferecem uma formação especializada, permitindo que você se destaque no mercado de trabalho.
                    </p>
                  </div>
                </div>

                {/* Card 2 - Acesso às Últimas Tendências */}
                <div className="text-center md:text-left space-y-4">
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
                      <TrendingUp className="w-full h-full text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 font-playfair">
                      Acesso às Últimas Tendências e Tecnologias
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-montserrat">
                      Mantemos nosso conteúdo atualizado com as últimas tendências e tecnologias da indústria de beleza, essencial para a competitividade profissional.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Instrutores Experientes */}
                <div className="text-center md:text-left space-y-4">
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
                      <Users className="w-full h-full text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 font-playfair">
                      Instrutores Experientes
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-montserrat">
                      Nossa equipe de profissionais experientes garante uma educação de qualidade e insights práticos sobre a indústria.
                    </p>
                  </div>
                </div>

                {/* Card 4 - Desenvolvimento de Habilidades Práticas */}
                <div className="text-center md:text-left space-y-4">
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
                      <Target className="w-full h-full text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 font-playfair">
                      Desenvolvimento de Habilidades Práticas
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-montserrat">
                      A ênfase na prática em nossos cursos permite que você ganhe experiência prática, fundamental para uma carreira bem-sucedida na estética.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default TodosCursos;
