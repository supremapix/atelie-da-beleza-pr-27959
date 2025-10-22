import { Sparkles } from "lucide-react";

const SectionDivider = () => {
  return (
    <div className="relative h-24 md:h-32 bg-gradient-to-b from-black via-primary/5 to-black overflow-hidden">
      {/* Animated gradient line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      
      {/* Center ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Main circle */}
          <div className="relative bg-black border-2 border-primary rounded-full p-3 md:p-4 shadow-lg shadow-primary/50">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          
          {/* Side decorative lines */}
          <div className="absolute top-1/2 -left-16 md:-left-24 w-12 md:w-20 h-px bg-gradient-to-l from-primary to-transparent"></div>
          <div className="absolute top-1/2 -right-16 md:-right-24 w-12 md:w-20 h-px bg-gradient-to-r from-primary to-transparent"></div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/60 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-75"></div>
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-ping delay-150"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
    </div>
  );
};

export default SectionDivider;
