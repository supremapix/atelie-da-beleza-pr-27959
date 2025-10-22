import { Heart, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logoFooter from "@/assets/logo-footer-white.png";

const Footer = () => {
  return (
    <footer className="bg-black py-12 md:py-16 border-t border-primary/30">
      <div className="container mx-auto px-4">
        {/* Logo centralizado */}
        <div className="flex justify-center mb-8 md:mb-12">
          <img src={logoFooter} alt="Ateliê da Beleza" className="w-64 md:w-80 lg:w-96 transition-all duration-300 hover:scale-105 cursor-pointer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          {/* Onde nos encontrar */}
          <div className="text-center md:text-left">
            <h4 className="text-[#D4AF37] text-lg md:text-xl font-bold mb-4 md:mb-6 tracking-wider font-playfair uppercase">Onde nos Encontrar</h4>
            <div className="space-y-2 text-white/80 font-montserrat text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>R. Alexandre Von Humboldt, 306</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-primary">•</span>
                <span>Pilarzinho - Curitiba - PR</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-primary">•</span>
                <span>CEP: 80060-150</span>
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R.+Alexandre+Von+Humboldt,+306+-+Pilarzinho,+Curitiba+-+PR" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 font-semibold text-sm"
              >
                Ver no mapa →
              </a>
            </div>
          </div>

          {/* Sobre */}
          <div className="text-center md:text-left">
            <h4 className="text-[#D4AF37] text-lg md:text-xl font-bold mb-4 md:mb-6 tracking-wider font-playfair uppercase">Sobre Nós</h4>
            <p className="text-white/80 leading-relaxed text-sm font-montserrat">
              Há mais de duas décadas formando profissionais de excelência em estética e beleza. 
              Cursos rápidos e profissionalizantes com certificação reconhecida.
            </p>
          </div>

          {/* Cursos em Destaque */}
          <div className="text-center md:text-left">
            <h4 className="text-[#D4AF37] text-lg md:text-xl font-bold mb-4 md:mb-6 tracking-wider font-playfair uppercase">Cursos Populares</h4>
            <ul className="space-y-2 text-white/80 text-sm font-montserrat">
              <li 
                onClick={() => window.location.href = '/cursos'}
                className="hover:text-primary transition-all duration-300 hover:scale-105 hover:translate-x-1 cursor-pointer flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> Micropigmentação
              </li>
              <li 
                onClick={() => window.location.href = '/cursos'}
                className="hover:text-primary transition-all duration-300 hover:scale-105 hover:translate-x-1 cursor-pointer flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> Estética Facial
              </li>
              <li 
                onClick={() => window.location.href = '/cursos'}
                className="hover:text-primary transition-all duration-300 hover:scale-105 hover:translate-x-1 cursor-pointer flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> Design de Sobrancelhas
              </li>
              <li 
                onClick={() => window.location.href = '/cursos'}
                className="hover:text-primary transition-all duration-300 hover:scale-105 hover:translate-x-1 cursor-pointer flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> Lash Master Class
              </li>
              <li 
                onClick={() => window.location.href = '/cursos'}
                className="hover:text-primary transition-all duration-300 hover:scale-105 hover:translate-x-1 cursor-pointer flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> Injetáveis Estéticos
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h4 className="text-[#D4AF37] text-lg md:text-xl font-bold mb-4 md:mb-6 tracking-wider font-playfair uppercase">Contato</h4>
            <ul className="space-y-3 text-white/80 font-montserrat text-sm">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+5541996439389" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  (41) 9 9643-9389
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+554130828016" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  (41) 3082-8016
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:cursosateliedabeleza@gmail.com" className="hover:text-primary transition-all duration-300 hover:scale-105 break-all">
                  cursosateliedabeleza@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-primary/20">
          <a 
            href="https://www.instagram.com/ateliedabelezacuritiba" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </a>
          <a 
            href="https://www.facebook.com/atelie.belezacwb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </a>
          <a 
            href="https://www.youtube.com/@ateliedabelezacuritiba" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </a>
        </div>

        {/* Bottom */}
        <div className="text-center space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 text-white/70 font-montserrat text-xs">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse fill-red-500" />
            <span>por</span>
            <a 
              href="https://supremamidia.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline text-xs transition-all duration-300 hover:scale-110"
            >
              Suprema Mídia
            </a>
          </div>
          <p className="text-xs text-white/50 font-montserrat">
            © {new Date().getFullYear()} Ateliê da Beleza - Juliana Perussi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
