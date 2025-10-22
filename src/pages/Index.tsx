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

const Index = () => {
  return (
    <div className="min-h-screen">
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
