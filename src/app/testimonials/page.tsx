"use client";

import React, { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "pregnancy" | "fertility" | "wellness">("all");

  const filteredTestimonials = testimonials.filter((t) => {
    if (activeTab === "all") return true;
    return t.category === activeTab;
  });

  const tabs = [
    { id: "all" as const, label: "All Reviews" },
    { id: "pregnancy" as const, label: "Pregnancy & Garbhasanskar" },
    { id: "fertility" as const, label: "Fertility Support" },
    { id: "wellness" as const, label: "Holistic Wellness" },
  ];

  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-primary-light/40 text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-sans font-semibold tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Success Stories
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark max-w-3xl mx-auto">
            Reviews from Our Strong &amp; Happy Mothers
          </h1>
          <p className="text-foreground/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Read detailed and honest accounts of how physiotherapist-guided prenatal yoga, Garbhasanskar, and fertility coaching changed pregnancy journeys.
          </p>
        </div>
      </section>

      {/* Review list */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-border/40 pb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white premium-shadow"
                    : "text-foreground/75 hover:bg-primary-light/40 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12 font-sans text-foreground/50">
              No testimonials found under this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((t) => (
                <TestimonialCard
                  key={t.id}
                  name={t.name}
                  age={t.age}
                  category={t.category}
                  quote={t.quote}
                  detail={t.detail}
                  location={t.location}
                  program={t.program}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust stats block */}
      <section className="py-16 bg-background border-t border-border/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary-dark px-4 py-1 rounded-full text-xs font-sans">
            <Heart className="h-4 w-4 text-secondary-dark fill-current" />
            <span>Nurtured with Love</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-primary-dark">
            500+ Healthy Births and Growing
          </h2>
          <p className="text-foreground/75 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Every review represents a family that navigated hormonal issues, anxiety, or pelvic distress toward safety under the guidance of Dr. Madhavi.
          </p>
          <div className="pt-4 flex justify-center">
            <Button href="/register" variant="primary" size="lg">
              Start Your Own Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
