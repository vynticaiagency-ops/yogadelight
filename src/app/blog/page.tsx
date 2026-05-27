"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Search, Calendar, Clock, BookOpen, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "prenatal" | "fertility" | "wellness" | "garbhasanskar">("all");

  const categories = [
    { id: "all" as const, label: "All Topics" },
    { id: "prenatal" as const, label: "Prenatal Yoga" },
    { id: "fertility" as const, label: "Fertility Support" },
    { id: "garbhasanskar" as const, label: "Garbhasanskar" },
    { id: "wellness" as const, label: "Holistic Wellness" },
  ];

  // Search & filter blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory = activeCategory === "all" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const categoryColors = {
    prenatal: "bg-primary-light text-primary border-primary/20",
    fertility: "bg-secondary-light text-secondary-dark border-secondary/20",
    garbhasanskar: "bg-accent/10 text-primary-dark border-accent/20",
    wellness: "bg-background text-foreground/70 border-border/80",
  };

  const categoryLabels = {
    prenatal: "Prenatal Yoga",
    fertility: "Fertility Support",
    garbhasanskar: "Garbhasanskar",
    wellness: "Holistic Wellness",
  };

  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-primary-light/40 text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-sans font-semibold tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Wellness Insights
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark">
            Yoga Delight Wellness Blog
          </h1>
          <p className="text-foreground/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Read medical insights, pregnancy exercises, breathing guides, and fertility tips written by physiotherapist Dr. Madhavi Soriya.
          </p>
        </div>
      </section>

      {/* Feed & Filters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Search and Tabs Row */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-b border-border/40 pb-6">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-sans text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-primary text-white premium-shadow"
                      : "text-foreground/75 hover:bg-primary-light/40 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative rounded-2xl bg-background border border-border/80 flex items-center px-4 py-2.5 max-w-md w-full premium-shadow">
              <Search className="h-4 w-4 text-foreground/40 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search articles or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground font-sans focus:outline-none placeholder-foreground/45"
              />
            </div>
          </div>

          {/* Article grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 font-sans text-foreground/50 flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-foreground/30 mb-2" />
              <p>No articles match your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-primary hover:underline font-semibold text-xs mt-2 cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-border/60 bg-white overflow-hidden premium-shadow premium-shadow-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-6 md:p-8 space-y-4">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`font-sans font-semibold px-3 py-1 rounded-full border ${
                          categoryColors[post.category]
                        }`}
                      >
                        {categoryLabels[post.category]}
                      </span>
                      <span className="text-foreground/50 font-sans flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-primary-dark leading-snug group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-foreground/75 font-sans text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  <div className="p-6 md:p-8 pt-0 border-t border-border/30 mt-auto flex items-center justify-between">
                    {/* Author info */}
                    <div className="flex items-center space-x-2">
                      <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs font-serif">
                        M
                      </div>
                      <span className="text-xs font-sans font-medium text-foreground/60">
                        {post.author.name}
                      </span>
                    </div>

                    {/* Read More button */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary-dark font-sans font-semibold text-xs inline-flex items-center space-x-1 underline"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
