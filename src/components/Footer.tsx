import { Heart, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import logoFooter from "@/assets/logo-footer-white.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-12 md:mb-16">
          <img 
            src={logoFooter} 
            alt="Ateliê da Beleza" 
            className="w-56 md:w-72 lg:w-80 transition-all duration-300 hover:scale-105 cursor-pointer opacity-90 hover:opacity-100" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Localização */}
          <div className="text-center md:text-left">
            <h4 className="text-primary text-lg font-semibold mb-5 tracking-wide">Onde nos Encontrar</h4>
            <div className="space-y-2 text-background/70 text-sm leading-relaxed">
              <p className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>R. Alexandre Von Humboldt, 306<br />Pilarzinho - Curitiba - PR<br />CEP: 80060-150</span>
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R.+Alexandre+Von+Humboldt,+306+-+Pilarzinho,+Curitiba+-+PR" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-primary hover:text-primary/80 transition-colors text-sm font-medium group"
              >
                Ver no mapa 
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Sobre */}
          <div className="text-center md:text-left">
            <h4 className="text-primary text-lg font-semibold mb-5 tracking-wide">Sobre Nós</h4>
            <p className="text-background/70 leading-relaxed text-sm">
              Há mais de duas décadas formando profissionais de excelência em estética e beleza. 
              Cursos rápidos e profissionalizantes com certificação reconhecida.
            </p>
          </div>

          {/* Cursos */}
          <div className="text-center md:text-left">
            <h4 className="text-primary text-lg font-semibold mb-5 tracking-wide">Cursos Populares</h4>
            <ul className="space-y-2.5 text-background/70 text-sm">
              {['Micropigmentação', 'Estética Facial', 'Design de Sobrancelhas', 'Lash Master Class', 'Injetáveis Estéticos'].map((curso) => (
                <li key={curso}>
                  <button
                    onClick={() => navigate('/cursos')}
                    className="hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    {curso}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h4 className="text-primary text-lg font-semibold mb-5 tracking-wide">Contato</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+5541996439389" className="hover:text-primary transition-colors">
                  (41) 9 9643-9389
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+554130828016" className="hover:text-primary transition-colors">
                  (41) 3082-8016
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:cursosateliedabeleza@gmail.com" className="hover:text-primary transition-colors break-all">
                  cursosateliedabeleza@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-10 pb-10 border-b border-background/10">
          <a 
            href="https://www.instagram.com/ateliedabelezacuritiba" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-background/5 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-primary" />
          </a>
          <a 
            href="https://www.facebook.com/atelie.belezacwb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-background/5 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-primary" />
          </a>
          <a 
            href="https://www.youtube.com/@ateliedabelezacuritiba" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-background/5 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-primary" />
          </a>
        </div>

        {/* Bottom */}
        <div className="text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-background/50 text-xs">
            <span>Desenvolvido com</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>por</span>
            <a 
              href="https://supremamidia.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Suprema Mídia
            </a>
          </div>
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Ateliê da Beleza - Juliana Perussi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;