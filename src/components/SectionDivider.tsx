const SectionDivider = () => {
  return (
    <div className="relative py-8 md:py-12 bg-background overflow-hidden">
      {/* Organic wave pattern */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-24 md:w-40 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50"></div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
        </div>
        <div className="w-24 md:w-40 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50"></div>
      </div>
    </div>
  );
};

export default SectionDivider;