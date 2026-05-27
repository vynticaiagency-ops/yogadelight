"use client";

import React from "react";
import { Check, Clock, Calendar, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function FertilityYoga() {
  const features = [
    { name: "Conception-Specific Yoga Flows", desc: "Gentle pelvic alignment postures designed to improve blood flow to the ovaries and uterus." },
    { name: "Pranayam for Hormonal Balance", desc: "Nadi Shodhana and Sheetali breathing to stabilize endocrine gland secretions." },
    { name: "Stress & Cortisol Reduction", desc: "Meditation and restorative postures that signal safety to the brain to support ovulation." },
    { name: "Breathing & Relaxation Practices", desc: "Vagus nerve stimulation exercises to alleviate anxiety and tension in the pelvic floor." },
    { name: "Hormonal Balance Support", desc: "Specific postures to balance Estrogen, Progesterone, LH, and FSH levels naturally." },
    { name: "Lifestyle & Circadian Guidance", desc: "Mentorship on sleep hygiene, toxic load reductions, and stress management." },
    { name: "Conception Nutrition & Diet Plans", desc: "Custom food charts containing rich antioxidant and pelvic-enriching nutrients." }
  ];

  const benefits = [
    { title: "Optimized Uterine Lining", desc: "Hip opening postures and twists improve circulation, helping build thick endometrial lining." },
    { title: "Balanced Menstrual Cycles", desc: "Consistent endocrine stimulation helps regulate periods and make ovulation predictable." },
    { title: "Reduced IVF/IUI Treatment Stress", desc: "A supportive mind-body framework to help calm the nervous system during assisted cycles." },
    { title: "Natural Detoxification", desc: "Mild twists and hydration guides support liver function, helping clear out hormone residues." }
  ];

  const successStories = [
    {
      name: "Meera Iyer",
      age: 34,
      category: "fertility" as const,
      quote: "Conceived naturally after 3 years of trying!",
      detail: "My husband and I were trying for a baby for over 3 years and had failed IVF attempts due to high stress and poor ovarian reserve. Dr. Madhavi's Fertility Yoga & Wellness program was a turning point. The daily yoga, specific pranayams for hormonal balance, and deep relaxation practices completely calmed my nervous system. I conceived naturally within 4 months of joining. Truly a miracle!",
      location: "Bengaluru",
      program: "Fertility Yoga & Wellness Program"
    },
    {
      name: "Anjali Saxena",
      age: 29,
      category: "fertility" as const,
      quote: "Regulated my PCOD and conceived in 5 months.",
      detail: "I had irregular periods for years because of PCOD, and was told conceiving would be difficult. Under Dr. Madhavi's guidance, the fertility-specific flow, diet modifications, and breathing routines helped regulate my menstrual cycle. My scan showed improved lining thickness, and shortly after, I got my positive test.",
      location: "Lucknow",
      program: "Fertility Yoga & Wellness Program"
    }
  ];

  const faqs = [
    {
      question: "How does fertility yoga help in conceiving?",
      answer: "Fertility yoga improves blood circulation to the reproductive organs (ovaries and uterus), which helps in better egg quality and optimal thickening of the endometrium (uterine lining). It regulates the endocrine system to balance hormones (LH, FSH, Estrogen, Progesterone) and dramatically lowers cortisol (stress hormone) levels, which is a common barrier to conception."
    },
    {
      question: "Can I practice fertility yoga alongside IVF or IUI treatments?",
      answer: "Yes, absolutely. Our program is designed to support assisted reproductive cycles. We modify the postures to avoid twists or deep abdominal pressures during the stimulation phase and after the embryo transfer, focusing instead on deep relaxation, pelvic blood flow, and stress management."
    },
    {
      question: "What is the monthly fee for this program?",
      answer: "The Fertility Yoga & Wellness program has a simple, flat-rate pricing of ₹1,499 per month. This allows you to continue monthly as you prepare your body for conception."
    }
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Hero */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-secondary-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary-dark px-4 py-1.5 rounded-full text-xs font-sans font-medium">
            <Sparkles className="h-4.5 w-4.5 text-secondary-dark" />
            <span>Pre-Conception &amp; Hormonal Balance support</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark max-w-4xl mx-auto leading-tight">
            Fertility Yoga &amp; Wellness Program
          </h1>
          <p className="text-foreground/80 font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Deactivate stress, improve pelvic ovarian blood flow, regulate cycles, and prepare your body naturally for pregnancy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button href="/register" size="lg" variant="secondary">Join Program</Button>
            <Button href="/free-consultation" variant="outline" size="lg">Book Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              How Fertility Yoga Optimizes Conception
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base">
              A scientific, physiotherapist-guided approach to preparing the physical and hormonal environment for baby implantation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-background border border-border/40 premium-shadow space-y-3"
              >
                <div className="h-8 w-8 bg-secondary/15 text-secondary-dark rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h4 className="font-serif text-lg font-semibold text-primary-dark">{b.title}</h4>
                <p className="text-foreground/75 font-sans text-xs md:text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Fertility Program Modules
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base">
              Discover the clinical movements, diet plans, and stress reduction systems included in your batches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-border/30 premium-shadow flex items-start space-x-3"
              >
                <Check className="h-5 w-5 text-secondary-dark flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-primary-dark mb-1">{f.name}</h4>
                  <p className="text-foreground/75 font-sans text-xs md:text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timing and Fees */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Batch schedule */}
            <div className="p-8 bg-background border border-border/40 rounded-3xl premium-shadow flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-sans tracking-widest text-primary font-semibold block mb-2">
                  CLASS SCHEDULE
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">
                  Fertility Batch Timings
                </h3>
                <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed mb-6">
                  Our live interactive classes are held Monday through Friday over Zoom/Google Meet. Small groups ensure Dr. Madhavi monitors you individually.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-border/50 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-foreground/80">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-sans font-medium text-sm">Afternoon Batch</span>
                  </div>
                  <span className="font-sans font-bold text-primary text-sm bg-primary-light px-3 py-1 rounded-full">
                    4:00 PM – 5:00 PM IST
                  </span>
                </div>
                <p className="text-xs text-foreground/50 font-sans">
                  * Session recordings and reference exercise charts are shared weekly.
                </p>
              </div>
            </div>

            {/* Flat Rate Pricing */}
            <div className="p-8 bg-gradient-to-tr from-secondary-light/30 to-primary-light/30 border border-secondary/20 rounded-3xl premium-shadow flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-sans tracking-widest text-secondary-dark font-semibold block mb-2">
                  SIMPLE FLAT PRICING
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">
                  Monthly Membership Plan
                </h3>
                <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed mb-6">
                  Maintain consistency as you prepare your body. Cancel, freeze, or transition to our prenatal yoga program once you conceive.
                </p>
              </div>

              <div>
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="font-serif text-4xl font-bold text-primary-dark">₹1,499</span>
                  <span className="text-sm text-foreground/60 font-sans">/ Monthly subscription</span>
                </div>
                <Button href="/register" className="w-full text-center" variant="secondary">
                  Register Online &amp; Join
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Fertility Success Stories
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base">
              Real reviews from couples who conceived naturally or improved IVF cycles with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, idx) => (
              <TestimonialCard
                key={idx}
                name={story.name}
                age={story.age}
                category={story.category}
                quote={story.quote}
                detail={story.detail}
                location={story.location}
                program={story.program}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Fertility Program FAQs
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base">
              Common questions answered about yoga, hormones, and conception planning.
            </p>
          </div>
          <div className="bg-background border border-border/40 rounded-3xl p-6 md:p-8 premium-shadow">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Begin Your Conception Preparation Journey
          </h2>
          <p className="text-white/80 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Register your clinical details online. We will evaluate your reports and invite you to our next batch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button href="/register" variant="secondary" size="lg">Join Batches Now</Button>
            <Button href="/free-consultation" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">Book Assessment Call</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
