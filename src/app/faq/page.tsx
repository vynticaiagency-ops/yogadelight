"use client";

import React, { useState, useMemo } from "react";
import { faqs } from "@/data/faqs";
import { AccordionItem } from "@/components/ui/Accordion";
import { HelpCircle, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "safety" | "general" | "classes" | "payment">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { id: "all" as const, label: "All Questions" },
    { id: "safety" as const, label: "Safety & Medical" },
    { id: "general" as const, label: "General Information" },
    { id: "classes" as const, label: "Classes & Access" },
    { id: "payment" as const, label: "Payments & Refunds" },
  ];

  // Dynamic filter
  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dynamic FAQ Page Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-primary-light/40 text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-sans font-semibold tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Resources
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark">
            Frequently Asked Questions
          </h1>
          <p className="text-foreground/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Find answers to questions about prenatal safety, online video setup, payment schemes, and doctor guidelines.
          </p>
        </div>
      </section>

      {/* Search & Accordion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Search bar */}
          <div className="relative rounded-2xl bg-background border border-border/80 flex items-center px-4 py-3 premium-shadow">
            <Search className="h-5 w-5 text-foreground/40 mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for questions (e.g., 'safety', 'IVF', 'fee')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm md:text-base text-foreground font-sans focus:outline-none placeholder-foreground/40"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/30 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-full font-sans text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white premium-shadow"
                    : "text-foreground/75 hover:bg-primary-light/45 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className="bg-background border border-border/50 rounded-3xl p-6 md:p-10 premium-shadow">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12 font-sans text-foreground/50 flex flex-col items-center">
                <HelpCircle className="h-10 w-10 mb-2 text-foreground/30" />
                <p>No questions matched your search query.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="text-primary hover:underline text-xs mt-2 font-sans font-semibold cursor-pointer"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support trigger block */}
      <section className="py-16 bg-primary-light/30 border-t border-border/20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="font-serif text-2xl font-semibold text-primary-dark">
            Still Have Queries?
          </h3>
          <p className="text-foreground/75 font-sans text-sm md:text-base leading-relaxed">
            If your clinical condition is unique or not listed, you can write directly to Dr. Madhavi Soriya via the contact form or send an email.
          </p>
          <div className="pt-2 flex justify-center space-x-4">
            <Button href="/contact" variant="primary">
              Contact Form
            </Button>
            <Button href="mailto:yogadelight30@gmail.com" variant="outline">
              Email Dr. Madhavi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
