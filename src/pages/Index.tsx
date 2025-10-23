import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Courses from "@/components/Courses";
import VideoSection from "@/components/VideoSection";
import CoursesShowcase from "@/components/CoursesShowcase";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SchemaMarkup from "@/components/SchemaMarkup";
import LiveNotifications from "@/components/LiveNotifications";
import AdvancedSEO from "@/components/AdvancedSEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ateliê Beleza",
    "url": "https://ateliebeleza.app.br",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/z3uM9QrEiaZcmzxCWIVMCntcMQg2/social-images/social-1761135543473-atelie-da-beleza-cursos-profissionalizantes-em-curitiba-parana-brasil.png",
    "description": "Cursos de estética em Curitiba com instrutores renomados. Capacitação em micropigmentação, design de sobrancelhas, lash lifting e muito mais.",
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
    <div className="min-h-screen">
      <AdvancedSEO
        title="Ateliê Beleza - Cursos de Estética em Curitiba | Capacitação Profissional"
        description="Cursos de estética em Curitiba com instrutores renomados. Capacitação em micropigmentação, design de sobrancelhas, lash lifting e muito mais. Preços acessíveis e certificado reconhecido."
        canonical="https://ateliebeleza.app.br/"
        structuredData={structuredData}
      />
      <SchemaMarkup />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <Courses />
        <VideoSection />
        <CoursesShowcase />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <LiveNotifications />
    </div>
  );
};

export default Index;
