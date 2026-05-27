import React from "react";
import { Button } from "./Button";
import { Check, Calendar, Clock } from "lucide-react";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  timing: string;
  pricing: { period: string; price: string }[];
  ctaUrl: string;
  ctaText?: string;
  badge?: string;
  isPopular?: boolean;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  subtitle,
  description,
  features,
  timing,
  pricing,
  ctaUrl,
  ctaText = "Enroll Now",
  badge,
  isPopular = false,
}) => {
  return (
    <div
      className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 premium-shadow premium-shadow-hover gradient-card border-2 ${
        isPopular ? "border-primary" : "border-border"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-6 px-4 py-1 text-xs font-semibold rounded-full gradient-primary text-white tracking-wider uppercase">
          {badge}
        </span>
      )}
      
      <div>
        <h3 className="font-serif text-2xl md:text-3xl text-primary-dark font-semibold mb-2">
          {title}
        </h3>
        <p className="text-secondary-dark font-medium text-sm mb-4 tracking-wide uppercase">
          {subtitle}
        </p>
        <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 font-sans">
          {description}
        </p>

        {/* Timing Section */}
        <div className="flex items-center space-x-2 text-primary text-sm mb-6 font-sans font-medium bg-primary-light/50 px-4 py-2 rounded-xl">
          <Clock className="h-4 w-4" />
          <span>{timing}</span>
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <p className="font-serif text-primary-dark font-semibold text-base mb-3">
            What's Included:
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3 text-sm md:text-base text-foreground/85">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-sans">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Pricing Section */}
        <div className="border-t border-border pt-6 mb-6">
          <p className="text-xs text-foreground/60 uppercase font-sans tracking-widest mb-3">
            Fee Packages
          </p>
          <div className="grid grid-cols-1 gap-2">
            {pricing.map((p, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-background border border-border/60"
              >
                <span className="text-sm font-sans font-medium text-foreground/70">
                  {p.period}
                </span>
                <span className="text-base font-serif font-bold text-primary-dark">
                  {p.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Button href={ctaUrl} variant={isPopular ? "primary" : "secondary"} className="w-full">
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
