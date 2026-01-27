import { Button } from "@/components/ui/button";
import { Award, Users, GraduationCap, ArrowRight } from "lucide-react";
import julianaPerussiImage from "@/assets/juliana-perussi.png";

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
      value: "+6.000",
      label: "alunas formadas"
    }
  ];

  return (
    <section id="sobre-nos" className="py-20 md:py-28 lg:py-32 bg-background organic-bg relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
            Nossa História
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Conheça <span className="text-primary italic">Juliana Perussi</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image container with organic shape */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-warm">
                <img
                  src={julianaPerussiImage}
                  alt="Juliana Perussi - Instrutora Ateliê Beleza"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating highlight cards */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-background rounded-2xl shadow-warm p-4 md:p-6 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground">+21</p>
                    <p className="text-xs text-muted-foreground">Anos de experiência</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-10 md:mt-12">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="organic-card p-4 text-center"
                >
                  <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-lg md:text-xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-[11px] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6 text-foreground leading-relaxed text-base md:text-lg">
              <p className="text-muted-foreground">
                Me chamo <span className="font-medium text-foreground">Juliana Perussi</span>, sou Dermaticista especialista em estética facial e atuo na área há mais de 21 anos. Além disso, sou graduada em Ciências Biológicas, e desde cedo descobri minha paixão pela docência, o que sempre guiou minha carreira.
              </p>
              <p className="text-muted-foreground">
                O <span className="font-medium text-foreground">Ateliê da Beleza</span> nasceu justamente dessa junção: o amor pelo ensino e a dedicação à beleza e à estética. Hoje, o espaço é referência na formação de profissionais, oferecendo mais de 20 capacitações e contando com uma equipe completa de professores especialistas.
              </p>
              
              {/* Quote block */}
              <blockquote className="relative pl-6 border-l-2 border-primary/50 py-2">
                <p className="font-medium text-foreground italic text-base md:text-lg leading-relaxed">
                  "Amo ensinar e acredito que a educação transforma não apenas carreiras, mas também vidas. No Ateliê da Beleza, cada curso é pensado para levar excelência, confiança e resultados que marcam a trajetória de nossos alunos."
                </p>
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm rounded-full group"
                onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Conheça Nossos Cursos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-full"
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