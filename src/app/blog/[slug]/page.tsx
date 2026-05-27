import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Calendar, Clock, ArrowLeft, Mail, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Statically pre-generate all blog paths for SEO speed
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for search engines
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://yogadelight.in/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Blog Schema Markup
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yoga Delight",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yogadelight.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yogadelight.in/blog/${post.slug}`
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Back to Blog Feed link */}
      <Link
        href="/blog"
        className="inline-flex items-center space-x-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-8 font-sans"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all articles</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Article Content */}
        <article className="lg:col-span-8 space-y-6">
          <div className="space-y-4">
            {/* Tags & Time */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-primary/10 text-primary font-sans font-semibold px-3 py-1 rounded-full border border-primary/20">
                {post.category.toUpperCase()}
              </span>
              <span className="text-foreground/50 font-sans flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                {post.publishedAt}
              </span>
              <span className="text-foreground/50 font-sans flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
              {post.title}
            </h1>

            {/* Author Section */}
            <div className="flex items-center space-x-3 border-y border-border/40 py-4 mt-4">
              <div className="h-10 w-10 rounded-full bg-primary-light text-primary font-serif font-bold flex items-center justify-center text-lg">
                M
              </div>
              <div>
                <h4 className="text-sm font-sans font-semibold text-primary-dark">
                  {post.author.name}
                </h4>
                <p className="text-xs text-foreground/50 font-sans">{post.author.role}</p>
              </div>
            </div>
          </div>

          {/* Render article HTML contents safely */}
          <div
            className="prose prose-stone max-w-none font-sans text-foreground/85 text-sm sm:text-base leading-relaxed space-y-6
              prose-headings:font-serif prose-headings:text-primary-dark prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4
              prose-h3:text-xl prose-h3:md:text-2xl
              prose-p:mb-4
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6 prose-blockquote:bg-secondary-light/20 prose-blockquote:p-4 prose-blockquote:rounded-r-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags list */}
          <div className="pt-6 border-t border-border/30 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-sans text-foreground/60 bg-background border border-border/60 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Programs Sidebar CTA */}
          <div className="p-6 bg-gradient-to-br from-primary-light/40 to-secondary-light/40 border border-border/40 rounded-3xl premium-shadow space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <Heart className="h-5 w-5 fill-current" />
              <span className="font-serif font-semibold text-primary-dark">Yoga Delight Programs</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-primary-dark">
              Join Our Live Batches
            </h4>
            <p className="text-xs text-foreground/75 font-sans leading-relaxed">
              Dr. Madhavi Soriya conducts live online sessions for prenatal care and pre-conception support. Small batches with custom modifications.
            </p>
            <div className="space-y-2 pt-2">
              <Link
                href="/programs/prenatal-yoga"
                className="block text-center font-sans font-semibold text-xs py-2.5 rounded-full bg-primary text-white hover:bg-primary-dark transition-all"
              >
                Prenatal Program
              </Link>
              <Link
                href="/programs/fertility-yoga"
                className="block text-center font-sans font-semibold text-xs py-2.5 rounded-full bg-secondary text-primary-dark hover:brightness-105 transition-all"
              >
                Fertility Program
              </Link>
            </div>
          </div>

          {/* Booking callback */}
          <div className="p-6 bg-white border border-border/60 rounded-3xl premium-shadow space-y-4 text-center">
            <Sparkles className="h-8 w-8 text-secondary-dark mx-auto" />
            <h4 className="font-serif text-base font-semibold text-primary-dark">
              Free 1-on-1 Consultation
            </h4>
            <p className="text-xs text-foreground/75 font-sans leading-relaxed">
              Not sure if online classes fit your medical clearances? Book a free assessment call.
            </p>
            <Button href="/free-consultation" size="sm" variant="secondary" className="w-full">
              Book Call Slot
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
