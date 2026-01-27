import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

import Courses from "@/components/Courses";
import VideoSection from "@/components/VideoSection";
import CoursesShowcase from "@/components/CoursesShowcase";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import LocationLinks from "@/components/LocationLinks";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SchemaMarkup from "@/components/SchemaMarkup";
import LiveNotifications from "@/components/LiveNotifications";
import EnhancedSEO from "@/components/EnhancedSEO";
import FAQ from "@/components/FAQ";
import { generalFAQ } from "@/data/faq";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ateliê Beleza",
    "url": "https://ateliebeleza.app.br",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/z3uM9QrEiaZcmzxCWIVMCntcMQg2/social-images/social-1761135543473-atelie-da-beleza-cursos-profissionalizantes-em-curitiba-parana-brasil.png",
    "description": "Cursos de estética em Curitiba com instrutores renomados. Mais de 6.000 alunas formadas. Capacitação em micropigmentação, design de sobrancelhas, lash lifting e muito mais.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "telephone": "+55-41-99643-9389",
    "email": "cursosateliedabeleza@gmail.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="Ateliê Beleza - Cursos de Estética em Curitiba | Capacitação Profissional"
        description="Cursos de estética em Curitiba com mais de 6.000 alunas formadas. Capacitação em micropigmentação, design de sobrancelhas, lash lifting e muito mais. Instrutores renomados, preços acessíveis e certificado reconhecido."
        canonical="https://ateliebeleza.app.br/"
        keywords="cursos de estética Curitiba, micropigmentação Curitiba, design de sobrancelhas, lash lifting, estética facial, estética corporal, curso profissionalizante, capacitação estética"
        structuredData={structuredData}
      />
      <SchemaMarkup />
      <Navigation />
      <main>
        <Hero />
        <Courses />
        <VideoSection />
        <CoursesShowcase />
        <About />
        <Testimonials />
        <FAQ items={generalFAQ} />
        <LocationLinks />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <LiveNotifications />
    </div>
  );
};

export default Index;
