import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CourseSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const CourseSearch = ({ searchTerm, onSearchChange, placeholder = "Buscar cursos por nome, categoria ou técnica..." }: CourseSearchProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 py-6 text-base md:text-lg border-2 border-primary/20 focus:border-primary rounded-full shadow-lg bg-background/95 backdrop-blur-sm"
        />
      </div>
      {searchTerm && (
        <p className="text-sm text-muted-foreground mt-3 text-center">
          Buscando por: <span className="font-semibold text-foreground">"{searchTerm}"</span>
        </p>
      )}
    </div>
  );
};

export default CourseSearch;
