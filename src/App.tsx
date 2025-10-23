import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import TodosCursos from "./pages/TodosCursos";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Neighborhood Pages
import Centro from "./pages/neighborhoods/Centro";
import Batel from "./pages/neighborhoods/Batel";
import AguaVerde from "./pages/neighborhoods/AguaVerde";
import Cabral from "./pages/neighborhoods/Cabral";
import Reboucas from "./pages/neighborhoods/Reboucas";
import Bigorrilho from "./pages/neighborhoods/Bigorrilho";
import Merces from "./pages/neighborhoods/Merces";
import CristoRei from "./pages/neighborhoods/CristoRei";
import Portao from "./pages/neighborhoods/Portao";
import SantaFelicidade from "./pages/neighborhoods/SantaFelicidade";
import Cajuru from "./pages/neighborhoods/Cajuru";
import BoaVista from "./pages/neighborhoods/BoaVista";
import AltoDaXV from "./pages/neighborhoods/AltoDaXV";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cursos" element={<TodosCursos />} />
            <Route path="/curso/:courseId" element={<CourseDetail />} />
            
            {/* Neighborhood Pages */}
            <Route path="/centro" element={<Centro />} />
            <Route path="/batel" element={<Batel />} />
            <Route path="/agua-verde" element={<AguaVerde />} />
            <Route path="/cabral" element={<Cabral />} />
            <Route path="/reboucas" element={<Reboucas />} />
            <Route path="/bigorrilho" element={<Bigorrilho />} />
            <Route path="/merces" element={<Merces />} />
            <Route path="/cristo-rei" element={<CristoRei />} />
            <Route path="/portao" element={<Portao />} />
            <Route path="/santa-felicidade" element={<SantaFelicidade />} />
            <Route path="/cajuru" element={<Cajuru />} />
            <Route path="/boa-vista" element={<BoaVista />} />
            <Route path="/alto-da-xv" element={<AltoDaXV />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
