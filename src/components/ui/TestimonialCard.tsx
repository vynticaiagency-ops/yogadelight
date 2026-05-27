import React from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  age: number;
  category: "pregnancy" | "fertility" | "wellness";
  quote: string;
  detail: string;
  location: string;
  rating?: number;
  program?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  age,
  category,
  quote,
  detail,
  location,
  rating = 5,
  program,
}) => {
  const categoryLabels = {
    pregnancy: "Pregnancy & Garbhasanskar",
    fertility: "Fertility Support",
    wellness: "Holistic Wellness",
  };

  const categoryColors = {
    pregnancy: "bg-primary-light text-primary border-primary/20",
    fertility: "bg-secondary-light text-secondary-dark border-secondary/20",
    wellness: "bg-accent/10 text-primary-dark border-accent/20",
  };

  return (
    <div className="rounded-3xl p-6 md:p-8 bg-white border border-border/60 premium-shadow premium-shadow-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
      {/* Decorative quotes background */}
      <span className="absolute right-6 top-6 text-primary/5 group-hover:text-primary/10 transition-colors duration-300">
        <Quote className="h-16 w-16" />
      </span>

      <div>
        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-250"
              }`}
            />
          ))}
        </div>

        {/* Quote & Description */}
        <h4 className="font-serif text-lg md:text-xl font-semibold text-primary-dark mb-3 leading-snug">
          "{quote}"
        </h4>
        <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 font-sans">
          {detail}
        </p>
      </div>

      <div className="border-t border-border/40 pt-4 mt-auto">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <div>
            <h5 className="font-sans font-semibold text-primary-dark text-sm md:text-base">
              {name}, <span className="font-normal text-foreground/60">{age} yrs</span>
            </h5>
            <p className="text-xs text-foreground/50 font-sans">{location}</p>
          </div>
          <span
            className={`text-[10px] md:text-xs font-sans font-semibold px-3 py-1 rounded-full border ${categoryColors[category]}`}
          >
            {categoryLabels[category]}
          </span>
        </div>
        {program && (
          <p className="text-[11px] md:text-xs font-sans text-secondary-dark/80 font-medium">
            Program: {program}
          </p>
        )}
      </div>
    </div>
  );
};
