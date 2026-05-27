"use client";

import React from "react";
import { Check, Clock, Calendar, ShieldCheck, Heart, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function PrenatalYoga() {
  const features = [
    { name: "Trimester-Specific Prenatal Yoga", desc: "Gentle stretching and strength building adapted to your exact pregnancy week." },
    { name: "Pranayam (Controlled Breathwork)", desc: "Nadi Shodhana and Bhramari to regulate thyroid, balance BP, and release stress." },
    { name: "Meditation & Visualizations", desc: "Connecting mentally with the womb to train the baby's nervous system toward calm." },
    { name: "Positive Affirmations & Mantra Chanting", desc: "Soothing Sanskrit sound vibrations that lower maternal heart rate." },
    { name: "Garbha Samvad (Womb Communication)", desc: "Guided scripts to speak, bond, and connect with your unborn baby daily." },
    { name: "Breathing Cues for Active Labour", desc: "Scientific breathing patterns to help manage pain and supply oxygen during contractions." },
    { name: "Baby Brain Development Activities", desc: "Sensory stimuli and weekend puzzles to encourage healthy fetal cognitive pathways." },
    { name: "9th-Month Labour Preparation", desc: "Pelvic outlet stretches, squats, and gravity-assisted flows to facilitate normal delivery." },
    { name: "Weekend Interactive Webinars", desc: "Sessions on pregnancy diet, partner support massage, breastfeeding, and newborn care." }
  ];

  const trimesters = [
    {
      num: "Trimester 1",
      weeks: "Weeks 1 - 12",
      focus: "Nausea Relief & Rest",
      desc: "Gentle stretching, cooling pranayams, and deep Savasana to support the body as it forms the placenta. We prioritize safety and fatigue relief."
    },
    {
      num: "Trimester 2",
      weeks: "Weeks 13 - 27",
      focus: "Strength & Hip Opening",
      desc: "Entering the golden phase with flows to build leg stamina, open the pelvis, stretch round ligaments, and manage gestational weight."
    },
    {
      num: "Trimester 3",
      weeks: "Weeks 28 - 40",
      focus: "Labour & Birth Preparation",
      desc: "Focusing heavily on pelvic floor conscious relaxation, Golden Thread breathwork, squats, baby positioning flows, and fear release."
    }
  ];

  const fees = [
    { period: "1-Month Package", price: "₹1,499", desc: "Ideal for a trial or if you are in your 9th month seeking active labour preparation." },
    { period: "3-Month Package", price: "₹3,999", desc: "Best for transitioning smoothly through an entire trimester. Includes diet guide." },
    { period: "6-Month Package", price: "₹7,999", desc: "Our most comprehensive care package, supporting you from mid-pregnancy to delivery." }
  ];

  const testimonials = [
    {
      name: "Aarti Sharma",
      age: 29,
      category: "pregnancy" as const,
      quote: "Normal delivery made possible with Dr. Madhavi's guidelines!",
      detail: "During my second trimester, I was diagnosed with gestational diabetes and felt extremely anxious. Dr. Madhavi Soriya guided me with physiotherapy-based yoga poses, breathing techniques, and customized exercises. Her 9th-month labour preparation sessions and Garbhasanskar teachings gave me so much mental strength. I managed to control my sugar levels and had a smooth normal delivery. I cannot thank Yoga Delight enough!",
      location: "Mumbai",
      program: "Prenatal Yoga & Garbhasanskar Program"
    },
    {
      name: "Priyanka Patel",
      age: 31,
      category: "pregnancy" as const,
      quote: "A beautiful journey of connection through Garbha Samvad.",
      detail: "I joined the Prenatal program in my 4th month. The yoga sessions helped with my back pain, but the absolute highlight was the Garbha Samvad and baby brain development activities. Connecting with my baby in the womb through mantra chanting and affirmations made pregnancy a joyful experience rather than a medical one.",
      location: "Ahmedabad",
      program: "Prenatal Yoga & Garbhasanskar Program"
    }
  ];

  const faqs = [
    {
      question: "Is it safe to practice yoga during all trimesters of pregnancy?",
      answer: "Yes, practicing yoga is safe during all three trimesters, provided you practice modified poses suited for each trimester under expert guidance. In the first trimester, we focus on relaxation and gentle breathing. In the second trimester, we focus on strength, balance, and opening the hips. In the third trimester, we prioritize labour preparation, pelvic floor exercises, and deep breathing. Dr. Madhavi, as a physiotherapist, ensures that every posture is adapted to your body and medical history."
    },
    {
      question: "Do I need my gynecologist's approval before joining the Prenatal Yoga program?",
      answer: "Yes, we strictly require a clearance or verbal approval from your treating gynecologist/obstetrician before starting our classes. While prenatal yoga is highly beneficial, it is important to confirm that there are no medical contraindications (such as placenta previa, severe cervical incompetence, or persistent bleeding) that would require bed rest."
    },
    {
      question: "What happens if I miss a live session?",
      answer: "If you miss a session due to appointments or travel, we provide access to recorded practice modules and guides so you can maintain consistency."
    }
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Hero */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-primary-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-xs font-sans font-medium">
            <Sparkles className="h-4.5 w-4.5 text-primary" />
            <span>Admissions Open &bull; Live Batches</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark max-w-4xl mx-auto leading-tight">
            Prenatal Yoga &amp; Garbhasanskar Program
          </h1>
          <p className="text-foreground/80 font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Build physiological stamina, alleviate body pain, and connect deeply with your baby through our physiotherapist-guided prenatal yoga batches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button href="/register" size="lg">Join Program</Button>
            <Button href="/free-consultation" variant="secondary" size="lg">Book Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* Trimester-specific details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Trimester-by-Trimester Tailored Focus
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base">
              Pregnancy is a changing process. We modify exercises to fit your anatomical changes at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trimesters.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-background border border-border/30 flex flex-col justify-between premium-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-4">
                    <span className="font-serif font-bold text-lg text-primary">{t.num}</span>
                    <span className="text-xs font-sans text-foreground/50">{t.weeks}</span>
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-primary-dark mb-2">{t.focus}</h4>
                  <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-6">{t.desc}</p>
                </div>
                <span className="text-xs text-secondary-dark font-sans font-medium uppercase tracking-wider block">
                  Physio Clearance Applied
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Program Features &amp; Anatomy
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base">
              Explore the detailed modules included in our daily and weekend interactive classes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-border/30 premium-shadow flex items-start space-x-3"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-primary-dark mb-1">{f.name}</h4>
                  <p className="text-foreground/75 font-sans text-xs md:text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Approval Notice & Medical Disclaimer */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-secondary/30 bg-secondary-light/20 p-6 md:p-8 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
            <span className="p-3 bg-secondary-light text-secondary-dark rounded-2xl flex-shrink-0">
              <ShieldCheck className="h-8 w-8" />
            </span>
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-semibold text-primary-dark">
                Important Doctor Clearance Notice
              </h4>
              <p className="text-xs md:text-sm text-foreground/80 font-sans leading-relaxed">
                Admissions require clearance from your treating gynecologist. While prenatal yoga is clinical and beneficial, we do not bypass medical advice. If you have active conditions like placenta previa, cerclage, or cervical incompetence, exercise is prohibited. Please consult your physician before submitting your intake form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Timings & Fees */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Timings */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary-dark">
                Batch Timings &amp; Schedule
              </h2>
              <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
                Our batches are held Monday to Friday. Choose either batch based on your daily workflow. You can easily switch batches later upon request.
              </p>

              <div className="space-y-4">
                <div className="p-6 bg-white border border-border/40 rounded-2xl premium-shadow flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-serif font-semibold text-primary-dark">Morning Batch</h4>
                      <p className="text-xs text-foreground/50 font-sans">Mon - Fri Live online</p>
                    </div>
                  </div>
                  <span className="text-sm font-sans font-bold text-primary bg-primary-light px-3 py-1 rounded-full">
                    6:15 AM – 7:15 AM IST
                  </span>
                </div>

                <div className="p-6 bg-white border border-border/40 rounded-2xl premium-shadow flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-secondary-dark" />
                    <div>
                      <h4 className="font-serif font-semibold text-primary-dark">Evening Batch</h4>
                      <p className="text-xs text-foreground/50 font-sans">Mon - Fri Live online</p>
                    </div>
                  </div>
                  <span className="text-sm font-sans font-bold text-secondary-dark bg-secondary-light px-3 py-1 rounded-full">
                    5:00 PM – 6:00 PM IST
                  </span>
                </div>

                <div className="p-6 bg-primary-light/20 border border-primary/10 rounded-2xl text-xs font-sans text-foreground/70">
                  * Weekend webinars (Saturday mornings) focus on childbirth topics, parenting education, breathing practices, and husband-partner massages.
                </div>
              </div>
            </div>

            {/* Fee Packages */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-primary-dark">
                Fee Packages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fees.map((fee, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-border/40 rounded-2xl premium-shadow flex flex-col justify-between text-left space-y-4"
                  >
                    <div>
                      <h4 className="font-serif font-semibold text-foreground/75 text-sm md:text-base">{fee.period}</h4>
                      <p className="font-serif text-3xl font-bold text-primary-dark my-2">{fee.price}</p>
                      <p className="text-[11px] md:text-xs text-foreground/60 font-sans leading-relaxed">{fee.desc}</p>
                    </div>
                    <Button href="/register" size="sm" className="w-full">Select Plan</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Reviews from Prenatal Graduates
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base">
              Read how our prenatal classes transformed pregnancy aches and anxiety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <TestimonialCard
                key={idx}
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
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">
              Prenatal Program FAQs
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base">
              Got specific questions? We have answers.
            </p>
          </div>
          <div className="bg-white border border-border/40 rounded-3xl p-6 md:p-8 premium-shadow">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Experience a Beautiful Journey to Motherhood
          </h2>
          <p className="text-white/80 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Register your intake details online. Our team will verify your clinical records, clear any flags, and send boarding guidelines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button href="/register" variant="secondary" size="lg">Fill Intake Register Form</Button>
            <Button href="/free-consultation" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">Book Assessment Call</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
