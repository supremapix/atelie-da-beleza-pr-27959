import { Button } from "@/components/ui/button";
import { Award, Users, GraduationCap, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      value: "+21 anos",
      label: "de experiência"
    },
    {
      icon: GraduationCap,
      value: "+20",
      label: "capacitações"
    },
    {
      icon: Users,
      value: "1000+",
      label: "alunos formados"
    }
  ];

  return (
    <section id="sobre-nos" className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-3 md:px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20 px-2">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 md:px-6 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">Sobre Nós</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground font-playfair">
            Conheça Juliana Perussi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center px-2 md:px-0">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-elegant group">
              <img
                src="https://ateliebeleza.com.br/wp-content/uploads/2025/08/juliana_perussi_atelie_da_beleza.webp"
                alt="Juliana Perussi - Instrutora Ateliê Beleza"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Highlights Cards */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4 md:mt-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl shadow-md p-2 md:p-4 text-center hover:shadow-lg transition-shadow border border-primary/10"
                >
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
                  <p className="text-sm md:text-lg font-bold text-foreground font-playfair">{item.value}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-montserrat">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="space-y-4 md:space-y-6 text-foreground leading-relaxed font-montserrat text-sm md:text-base lg:text-lg">
              <p className="text-muted-foreground">
                Me chamo <span className="font-semibold text-foreground">Juliana Perussi</span>, sou Dermaticista especialista em estética facial e atuo na área há mais de 21 anos. Além disso, sou graduada em Ciências Biológicas, e desde cedo descobri minha paixão pela docência, o que sempre guiou minha carreira.
              </p>
              <p className="text-muted-foreground">
                O <span className="font-semibold text-foreground">Ateliê da Beleza</span> nasceu justamente dessa junção: o amor pelo ensino e a dedicação à beleza e à estética. Hoje, o espaço é referência na formação de profissionais, oferecendo mais de 20 capacitações e contando com uma equipe completa de professores especialistas.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-4 md:p-6 rounded-lg">
                <p className="font-semibold text-foreground italic text-sm md:text-base">
                  "Amo ensinar e acredito que a educação transforma não apenas carreiras, mas também vidas. No Ateliê da Beleza, cada curso é pensado para levar excelência, confiança e resultados que marcam a trajetória de nossos alunos."
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary text-background hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <GraduationCap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Conheça Nossos Cursos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-background w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5541996439389?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20o%20Ateliê%20da%20Beleza', '_blank')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
