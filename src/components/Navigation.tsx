import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Facebook, Menu, X, Home, Users, GraduationCap, Mail, Sparkles, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoWhite from "@/assets/logo-white-transparent.png";
import { courses } from "@/data/courses";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Agrupar cursos por categoria
  const coursesByCategory = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {} as Record<string, typeof courses>);

  const categories = Object.keys(coursesByCategory).sort();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Se estiver no topo, sempre mostrar
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Se rolar para baixo, esconder
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // Se rolar para cima, mostrar
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black shadow-elegant transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 py-3">
            {/* Mobile Logo */}
            <button onClick={() => navigate('/')} className="flex items-center">
              <img 
                src={logoWhite} 
                alt="Ateliê da Beleza" 
                className="h-32 w-auto"
              />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-white backdrop-blur-lg border-t border-primary/20 shadow-lg animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container mx-auto px-4 py-6 space-y-3">
              <button
                onClick={() => {
                  navigate('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-black hover:text-primary transition-colors text-base font-medium py-3 px-4 rounded-lg hover:bg-muted"
              >
                <Home className="h-5 w-5" />
                Início
              </button>
              <button
                onClick={() => {
                  handleNavigation('sobre-nos');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-black hover:text-primary transition-colors text-base font-medium py-3 px-4 rounded-lg hover:bg-muted"
              >
                <Users className="h-5 w-5" />
                Sobre Nós
              </button>
              <button
                onClick={() => {
                  navigate('/cursos');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-black hover:text-primary transition-colors text-base font-medium py-3 px-4 rounded-lg hover:bg-muted"
              >
                <GraduationCap className="h-5 w-5" />
                Todos os Cursos
              </button>
              
              {/* Mobile Categories */}
              <div className="border-t border-border/50 pt-3 mt-3">
                <p className="text-xs font-semibold text-muted-foreground px-4 mb-2 uppercase tracking-wider">Áreas</p>
                {categories.map((category) => (
                  <div key={category} className="mb-2">
                    <div className="flex items-center justify-between px-4 py-2">
                      <button
                        onClick={() => {
                          navigate(`/cursos#${category.toLowerCase().replace(/\s+/g, '-')}`);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 text-left text-black hover:text-primary transition-colors text-sm font-medium"
                      >
                        {category} ({coursesByCategory[category].length})
                      </button>
                    </div>
                    <div className="pl-8 space-y-1">
                      {coursesByCategory[category].map((course) => (
                        <button
                          key={course.id}
                          onClick={() => {
                            navigate(`/curso/${course.id}`);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block w-full text-left text-xs text-muted-foreground hover:text-primary transition-colors py-1.5 px-2 rounded hover:bg-muted"
                        >
                          {course.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  handleNavigation('contato');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-black hover:text-primary transition-colors text-base font-medium py-3 px-4 rounded-lg hover:bg-muted"
              >
                <Mail className="h-5 w-5" />
                Contato
              </button>

              {/* Mobile Social Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button
                  variant="default"
                  className="flex-1 bg-primary text-background hover:bg-primary/90 shadow-md"
                  onClick={() => window.open('https://wa.me/5541996439389?text=Olá!%20Gostaria%20de%20conhecer%20os%20cursos%20do%20Ateliê%20da%20Beleza', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-background"
                  onClick={() => window.open('https://www.instagram.com/ateliedabelezacuritiba', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-background"
                  onClick={() => window.open('https://www.facebook.com/ateliedabelezacuritiba', '_blank')}
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Left - Subtitle */}
            <div className="flex items-center gap-3 flex-1">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-white text-sm lg:text-base font-medium tracking-wider">
                  Cursos de Estética em Curitiba
                </span>
              </div>
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0 flex justify-center px-8">
              <button onClick={() => navigate('/')} className="flex items-center transition-transform hover:scale-105 duration-300">
                <img 
                  src={logoWhite} 
                  alt="Ateliê da Beleza - Juliana Perussi" 
                  className="h-40 lg:h-48 w-auto"
                />
              </button>
            </div>

            {/* Right - Social & WhatsApp */}
            <div className="flex items-center gap-3 flex-1 justify-end">
              <Button
                variant="default"
                size="sm"
                className="bg-primary text-black hover:bg-primary/90 font-medium shadow-md hover:shadow-lg transition-all"
                onClick={() => window.open('https://wa.me/5541996439389?text=Olá!%20Gostaria%20de%20conhecer%20os%20cursos%20do%20Ateliê%20da%20Beleza', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-primary/90 text-black hover:bg-primary hover:scale-110 h-10 w-10 transition-all shadow-md"
                onClick={() => window.open('https://www.instagram.com/ateliedabelezacuritiba', '_blank')}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-primary/90 text-black hover:bg-primary hover:scale-110 h-10 w-10 transition-all shadow-md"
                onClick={() => window.open('https://www.facebook.com/ateliedabelezacuritiba', '_blank')}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Navigation Bar - Desktop Only */}
        <div className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center h-14 gap-12">
              <button
                onClick={() => {
                  navigate('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-black hover:text-primary transition-all text-sm font-medium uppercase tracking-widest relative group"
              >
                <Home className="h-4 w-4" />
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => handleNavigation('sobre-nos')}
                className="flex items-center gap-2 text-black hover:text-primary transition-all text-sm font-medium uppercase tracking-widest relative group"
              >
                <Users className="h-4 w-4" />
                Sobre Nós
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 text-black hover:text-primary transition-all text-sm font-medium uppercase tracking-widest relative group"
                  >
                    <GraduationCap className="h-4 w-4" />
                    Cursos
                    <ChevronDown className="h-3 w-3" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </button>
                </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 max-h-96 overflow-y-auto bg-white z-50">
              <DropdownMenuItem onClick={() => navigate('/cursos')} className="cursor-pointer">
                <GraduationCap className="h-4 w-4 mr-2" />
                Ver Todos os Cursos
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Áreas</DropdownMenuLabel>
              {categories.map((category) => (
                <DropdownMenuSub key={category}>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    <span className="flex justify-between w-full">
                      <span>{category}</span>
                      <span className="text-xs text-muted-foreground">({coursesByCategory[category].length})</span>
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-56 bg-white z-50">
                      {coursesByCategory[category].map((course) => (
                        <DropdownMenuItem
                          key={course.id}
                          onClick={() => navigate(`/curso/${course.id}`)}
                          className="cursor-pointer"
                        >
                          {course.title}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ))}
            </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={() => handleNavigation('contato')}
                className="flex items-center gap-2 text-black hover:text-primary transition-all text-sm font-medium uppercase tracking-widest relative group"
              >
                <Mail className="h-4 w-4" />
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
