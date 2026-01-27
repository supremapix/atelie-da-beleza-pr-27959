import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";


const CoursesShowcase = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: false
  });

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return itemsPerView.desktop;
    if (window.innerWidth < 768) return itemsPerView.mobile;
    if (window.innerWidth < 1024) return itemsPerView.tablet;
    return itemsPerView.desktop;
  };

  const [visibleItems, setVisibleItems] = useState(getItemsPerView());

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleResize = () => setVisibleItems(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, visibleItems]);

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    } else {
      setCurrentIndex((prev) => 
        prev + visibleItems >= courses.length ? 0 : prev + 1
      );
    }
  };

  const handlePrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    } else {
      setCurrentIndex((prev) => 
        prev === 0 ? Math.max(0, courses.length - visibleItems) : prev - 1
      );
    }
  };

  const handleCourseClick = (courseId: string) => {
    navigate(`/curso/${courseId}`);
  };

  return (
    <section className="py-20 md:py-28 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-4 block">
            Catálogo Completo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-background mb-4">
            Nossa <span className="text-primary italic">Vitrine</span>
          </h2>
          <p className="text-background/70 text-base md:text-lg max-w-2xl mx-auto">
            Explore nossa seleção premium de cursos profissionalizantes
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              handlePrev();
              setIsAutoPlaying(false);
            }}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background hover:bg-background/90 text-foreground p-3 rounded-full shadow-soft transition-all duration-300 hover:scale-110 -translate-x-4"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              handleNext();
              setIsAutoPlaying(false);
            }}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background hover:bg-background/90 text-foreground p-3 rounded-full shadow-soft transition-all duration-300 hover:scale-110 translate-x-4"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Courses Grid */}
          <div className="overflow-hidden px-2 md:px-12" ref={emblaRef}>
            <div 
              className="flex gap-4 md:gap-5"
              style={{
                transform: visibleItems > 1 ? `translateX(-${currentIndex * (100 / visibleItems)}%)` : undefined
              }}
            >
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * (visibleItems === 1 ? 0 : 1.25)}rem / ${visibleItems})` }}
                  onClick={() => handleCourseClick(course.id)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-soft transition-all duration-500 hover:shadow-warm">
                    {/* Highlighted Badge */}
                    {course.highlighted && (
                      <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Destaque
                      </div>
                    )}

                    {/* Image */}
                    <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <h3 className="text-background font-semibold text-lg md:text-xl mb-3 leading-tight">
                        {course.title}
                      </h3>
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-xs md:text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300"
                      >
                        Ver Detalhes
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: Math.ceil(courses.length / visibleItems) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index * visibleItems);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleItems) === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-background/30 hover:bg-background/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <Button 
            size="lg"
            onClick={() => navigate('/cursos')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
          >
            Ver Todos os Cursos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesShowcase;