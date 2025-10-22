import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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
    }, 4000);
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white">
              Nossa <span className="text-primary">Vitrine de Cursos</span>
            </h2>
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-white/80 font-montserrat max-w-3xl mx-auto">
            Explore nossa seleção premium de cursos profissionalizantes
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on Mobile */}
          <button
            onClick={() => {
              handlePrev();
              setIsAutoPlaying(false);
            }}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 -translate-x-4 md:-translate-x-8"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            onClick={() => {
              handleNext();
              setIsAutoPlaying(false);
            }}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 translate-x-4 md:translate-x-8"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Courses Grid - Mobile: Swipeable, Desktop: Click Navigation */}
          <div className="overflow-hidden px-2 md:px-12" ref={emblaRef}>
            <div 
              className="flex gap-4 md:gap-6 md:transition-transform md:duration-700 md:ease-in-out"
              style={{
                transform: visibleItems > 1 ? `translateX(-${currentIndex * (100 / visibleItems)}%)` : undefined
              }}
            >
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * (visibleItems === 1 ? 0 : 1.5)}rem / ${visibleItems})` }}
                  onClick={() => handleCourseClick(course.id)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-primary/50 hover:scale-105">
                    {/* Highlighted Badge */}
                    {course.highlighted && (
                      <div className="absolute top-3 right-3 z-10 bg-primary text-black px-3 py-1 rounded-full text-xs md:text-sm font-bold font-montserrat animate-pulse">
                        ⭐ DESTAQUE
                      </div>
                    )}

                    {/* Image */}
                    <div className="aspect-[3/4] relative overflow-hidden bg-gray-800">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      
                      {/* Sparkle Effect on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-75"></div>
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-base md:text-xl lg:text-2xl font-playfair mb-2 drop-shadow-lg">
                        {course.title}
                      </h3>
                      <Button 
                        variant="hero" 
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-xs md:text-sm"
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
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
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in px-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate('/cursos')}
            className="text-sm md:text-base lg:text-lg px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 group w-full md:w-auto"
          >
            <Sparkles className="mr-2 w-4 h-4 md:w-5 md:h-5 group-hover:animate-spin" />
            <span className="whitespace-nowrap md:whitespace-normal">Ver Todos os Cursos</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesShowcase;
