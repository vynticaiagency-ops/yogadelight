"use client";

import React from "react";
import { Heart, Sparkles, Award, ShieldCheck, GraduationCap, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function About() {
  const credentials = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Physiotherapist (B.P.T)",
      description: "Clinical foundation in human anatomy, biomechanics, and musculoskeletal alignments, specialized in pelvic rehabilitation."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Prenatal Yoga Expert",
      description: "Certified coach specialized in modifying fitness movements, breathing exercises, and pelvic openings for pregnancy phases."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Fertility Wellness Coach",
      description: "Expertise in designing hormone-regulating yoga flows and lifestyle guidelines for natural and assisted conception."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Women's Wellness Coach",
      description: "Holistic coaching encompassing mental stress management, postpartum core rehabilitation (diastasis recti), and lifestyle nutrition."
    }
  ];

  const values = [
    {
      title: "Safety & Anatomy First",
      desc: "Because every woman's body and medical record differ, we design exercises with clinical precautions, eliminating injury risks."
    },
    {
      title: "Empowerment & Strength",
      desc: "We teach tools like specific breathing and pelvic contraction releases so that mothers take active charge of their labour."
    },
    {
      title: "Ancient Meets Modern",
      desc: "We bridge ancient Vedic systems like Garbhasanskar with modern obstetrics and physical therapy for a balanced, premium outcome."
    }
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-primary-light/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase font-sans font-semibold tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block">
              Founder &amp; Instructor
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark leading-tight">
              Nurturing New Life with Medical Precision &amp; Holistic Wisdom
            </h1>
            <p className="text-foreground/80 font-sans text-base sm:text-lg md:text-xl leading-relaxed">
              Dr. Madhavi Soriya is a physiotherapist, prenatal expert, and women's coach dedicated to helping women achieve safe pregnancies and improved fertility wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Graphic card profile block */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2rem] bg-gradient-to-br from-secondary-light via-primary-light to-white p-8 border border-border/40 premium-shadow">
                <div className="space-y-6 text-center">
                  <div className="h-28 w-28 rounded-full bg-primary/20 text-primary-dark mx-auto flex items-center justify-center text-4xl font-serif font-bold">
                    MS
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary-dark">
                      Dr. Madhavi Soriya
                    </h3>
                    <p className="text-secondary-dark text-sm font-sans font-medium mt-1">
                      Physiotherapist &bull; Wellness Coach
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/60 grid grid-cols-3 gap-2">
                    <div>
                      <p className="font-serif text-xl font-bold text-primary-dark">5+</p>
                      <p className="text-[10px] text-foreground/60 uppercase font-sans tracking-wider">Years Exp</p>
                    </div>
                    <div>
                      <p className="font-serif text-xl font-bold text-primary-dark">500+</p>
                      <p className="text-[10px] text-foreground/60 uppercase font-sans tracking-wider">Moms Guided</p>
                    </div>
                    <div>
                      <p className="font-serif text-xl font-bold text-primary-dark">100%</p>
                      <p className="text-[10px] text-foreground/60 uppercase font-sans tracking-wider">Online bat</p>
                    </div>
                  </div>
                  <div className="pt-2 text-left space-y-2 text-xs md:text-sm text-foreground/75 font-sans bg-white/50 p-4 rounded-xl">
                    <p><strong>Primary Language:</strong> Hindi &amp; English</p>
                    <p><strong>Clinical Focus:</strong> Prenatal biomechanics, endocrine imbalances, core rehab.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content text */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary-dark">
                The Journey of Yoga Delight
              </h2>
              <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
                As a practicing physiotherapist, Dr. Madhavi Soriya observed a crucial gap in how expectant mothers were managing physical modifications. Many women were either advised complete bed rest without medical reason, or were practicing generalized fitness routines that put joint ligaments under excessive relaxin-related strain.
              </p>
              <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
                Determined to bridge this clinical gap, she founded <strong>Yoga Delight</strong>. She integrated scientific physical rehabilitation principles with traditional yoga postures, creating a structured, safe, and highly nurturing methodology. Over the past five years, she has guided over 500 women across India through the vulnerable cycles of hormonal health, pre-conception preparation, high-risk pregnancy management, and postpartum core restoration.
              </p>
              <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
                "Our mission is to replace pregnancy anxiety and fertility fear with physical strength and inner peace. By offering scientific movements combined with the ancient teachings of Garbhasanskar, we help mothers build a loving, stress-free womb environment for their babies."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications List */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Dr. Madhavi's Qualifications &amp; Specialties
            </h2>
            <p className="text-foreground/70 font-sans text-sm md:text-base">
              A clinical framework of women's physical fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-border/40 premium-shadow flex items-start space-x-4"
              >
                <span className="p-3 rounded-xl bg-primary-light text-primary flex-shrink-0">
                  {cred.icon}
                </span>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-primary-dark mb-1">
                    {cred.title}
                  </h4>
                  <p className="text-foreground/75 font-sans text-sm leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Our Core Healing Values
            </h2>
            <p className="text-foreground/70 font-sans text-sm md:text-base">
              The foundational pillars that direct every online interactive batch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-background border border-border/30 text-center space-y-4 premium-shadow"
              >
                <div className="h-12 w-12 bg-secondary-light text-secondary-dark rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                  {idx + 1}
                </div>
                <h4 className="font-serif text-xl font-semibold text-primary-dark">
                  {v.title}
                </h4>
                <p className="text-foreground/75 font-sans text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary-dark text-white text-center relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Begin Your Wellness Journey Today
          </h2>
          <p className="text-white/80 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about physical constraints, high-risk flags, or want to understand which batch timing suits your pregnancy schedule? Book a personal assessment call.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button href="/free-consultation" variant="secondary" size="lg">
              Book Assessment Call
            </Button>
            <Button href="/contact" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
              Send an Email Query
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
