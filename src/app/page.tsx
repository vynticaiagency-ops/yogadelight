"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Compass,
  Laptop,
  Check,
  ChevronRight,
  Sparkles,
  Heart,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Accordion } from "@/components/ui/Accordion";
import { ContactForm } from "@/components/forms/ContactForm";

export default function Home() {
  // Trust Badges Data
  const badges = [
    { icon: <ShieldCheck className="h-5 w-5" />, label: "5+ Years Experience" },
    { icon: <Users className="h-5 w-5" />, label: "500+ Women Guided" },
    { icon: <Compass className="h-5 w-5" />, label: "Expert Support" },
    { icon: <Laptop className="h-5 w-5" />, label: "Live Online Classes" },
  ];

  // Key Benefits Data
  const benefits = [
    {
      title: "Reduced Pregnancy Discomfort",
      description:
        "Physiotherapist-guided poses targeting backaches, pelvic pain, sciatica, and swelling safely.",
      bgColor: "bg-secondary",
      borderColor: "border-secondary/35",
      textColor: "text-secondary-dark",
    },
    {
      title: "Active Labour Preparation",
      description:
        "Specialized pelvic opening movements and breathing techniques to facilitate normal deliveries.",
      bgColor: "bg-primary-light",
      borderColor: "border-primary/20",
      textColor: "text-primary",
    },
    {
      title: "Ancient Garbhasanskar",
      description:
        "Interactive mantra chanting, Garbha Samvad (womb talk), and sensory stimulation for the baby.",
      bgColor: "bg-accent",
      borderColor: "border-accent-dark/15",
      textColor: "text-accent-dark",
    },
    {
      title: "Hormonal Balance & Conception",
      description:
        "Fertility flows designed to reduce cortisol, regulate ovulation, and improve pelvic circulation.",
      bgColor: "bg-secondary-light/70",
      borderColor: "border-secondary/20",
      textColor: "text-secondary-dark",
    },
  ];

  // Why Choose Us
  const whyUs = [
    {
      title: "Physiotherapist Expertise",
      desc: "Dr. Madhavi's background in physiotherapy ensures that every yoga posture is safe, alignment-correct, and modified according to your personal medical condition.",
    },
    {
      title: "Small Batch Attention",
      desc: "We limit batch sizes to ensure each student is monitored live over video. Dr. Madhavi corrects alignments instantly to avoid any risk of injury.",
    },
    {
      title: "Mind-Body Integration",
      desc: "Our programs don't just focus on physical exercises; we integrate positive affirmations, meditation, mental stress control, and Garbhasanskar wisdom.",
    },
  ];

  // Sample Testimonials for Preview
  const sampleTestimonials = [
    {
      name: "Aarti Sharma",
      age: 29,
      category: "pregnancy" as const,
      quote: "Normal delivery made possible with Dr. Madhavi's guidelines!",
      detail: "During my second trimester, I was diagnosed with gestational diabetes and felt extremely anxious. Dr. Madhavi Soriya guided me with physiotherapy-based yoga poses, breathing techniques, and customized exercises. Her 9th-month labour preparation sessions and Garbhasanskar teachings gave me so much mental strength. I managed to control my sugar levels and had a smooth normal delivery. I cannot thank Yoga Delight enough!",
      location: "Mumbai",
      rating: 5,
      program: "Prenatal Yoga & Garbhasanskar Program",
    },
    {
      name: "Meera Iyer",
      age: 34,
      category: "fertility" as const,
      quote: "Conceived naturally after 3 years of trying!",
      detail: "My husband and I were trying for a baby for over 3 years and had failed IVF attempts due to high stress and poor ovarian reserve. Dr. Madhavi's Fertility Yoga & Wellness program was a turning point. The daily yoga, specific pranayams for hormonal balance, and deep relaxation practices completely calmed my nervous system. I conceived naturally within 4 months of joining. Truly a miracle!",
      location: "Bengaluru",
      rating: 5,
      program: "Fertility Yoga & Wellness Program",
    },
  ];

  // FAQ Preview
  const faqPreview = [
    {
      question: "Is it safe to practice yoga during all trimesters of pregnancy?",
      answer:
        "Yes, practicing yoga is safe during all three trimesters, provided you practice modified poses suited for each trimester under expert guidance. In the first trimester, we focus on relaxation and gentle breathing. In the second trimester, we focus on strength, balance, and opening the hips. In the third trimester, we prioritize labour preparation, pelvic floor exercises, and deep breathing. Dr. Madhavi, as a physiotherapist, ensures that every posture is adapted to your body and medical history.",
    },
    {
      question: "Do I need my gynecologist's approval before joining the Prenatal Yoga program?",
      answer:
        "Yes, we strictly require a clearance or verbal approval from your treating gynecologist/obstetrician before starting our classes. While prenatal yoga is highly beneficial, it is important to confirm that there are no medical contraindications (such as placenta previa, severe cervical incompetence, or persistent bleeding) that would require bed rest.",
    },
    {
      question: "Who is the Fertility Yoga program designed for?",
      answer:
        "The Fertility program is designed for women planning to conceive naturally, women diagnosed with PCOD, PCOS, thyroid imbalances, or irregular cycles, women undergoing assisted reproductive treatments like IVF, IUI, or ICSI, and women seeking to manage stress and anxiety related to conception delays.",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 gradient-bg">
        {/* Abstract background shapes */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-secondary-light/40 blur-3xl -z-10" />
        <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-primary-light/40 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero text copy */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-xs md:text-sm font-sans font-medium">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span>Expert-Led Prenatal &amp; Fertility Support</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark leading-[1.15]">
                Prenatal Yoga, Garbhasanskar &amp; Fertility Wellness Programs <span className="text-secondary-dark block mt-2">Designed for Modern Mothers</span>
              </h1>
              
              <p className="text-foreground/80 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                Guided by Dr. Madhavi Soriya, helping women build healthier pregnancies, improve fertility wellness, and achieve holistic wellbeing through expert-led yoga and wellness programs.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button href="/register" size="lg" variant="primary">
                  Join Program
                </Button>
                <Button href="/free-consultation" size="lg" variant="secondary">
                  Book Free Consultation
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-border/60">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {badges.map((b, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-primary-dark/80 font-sans font-medium text-xs sm:text-sm"
                    >
                      <span className="p-1.5 rounded-full bg-primary/10 text-primary flex-shrink-0">
                        {b.icon}
                      </span>
                      <span>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Graphic Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] gradient-primary text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden premium-shadow"
              >
                <div className="absolute right-0 top-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
                <div className="absolute left-0 bottom-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />

                <div className="relative flex justify-between items-start">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Heart className="h-8 w-8 text-secondary fill-current" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-sans bg-white/20 px-3 py-1 rounded-full">
                    Dr. Madhavi Soriya
                  </span>
                </div>

                <div className="relative space-y-4">
                  <span className="text-secondary font-sans font-semibold tracking-wider text-xs md:text-sm uppercase block">
                    FOUNDER'S MISSION
                  </span>
                  <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed">
                    "Every child deserves a healthy start, and every mother deserves a safe, supported, and joyful journey into motherhood."
                  </blockquote>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                    <div>
                      <h4 className="font-sans font-semibold text-sm">Dr. Madhavi Soriya</h4>
                      <p className="text-white/60 text-xs">Physiotherapist &amp; Wellness Coach</p>
                    </div>
                    <span className="text-xs text-secondary bg-white/10 px-3 py-1 rounded-full">
                      5+ Years Exp
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light to-secondary-light rounded-3xl -rotate-3 -z-10 scale-95" />
              <div className="bg-background rounded-3xl border border-border/50 p-8 md:p-10 premium-shadow">
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">
                  Our Scientific &amp; Holistic Approach
                </h3>
                <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed mb-6">
                  Dr. Madhavi Soriya combines her clinical knowledge of physiotherapy with classical prenatal and fertility yoga. This guarantees that your physical training is structure-safe, anatomical, and tailored specifically to your clinical reports.
                </p>
                <div className="space-y-4">
                  {[
                    "Clinical assessment of musculoskeletal issues",
                    "Custom modifications for conditions (Thyroid, PCOD, BP)",
                    "Interactive Garbhasanskar baby brain development",
                    "Scientific breathing techniques for birth preparation",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm md:text-base text-foreground/80 font-sans">
                      <span className="p-1 rounded-full bg-secondary-light text-secondary-dark flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark leading-tight">
                Meet Dr. Madhavi Soriya
              </h2>
              <p className="text-secondary-dark font-sans font-semibold tracking-wider text-xs md:text-sm uppercase">
                Physiotherapist &bull; Women's Wellness Coach &bull; Prenatal &amp; Fertility Expert
              </p>
              <p className="text-foreground/85 font-sans text-sm md:text-base leading-relaxed">
                With a Bachelor of Physiotherapy and advanced specializations in maternal wellness, Dr. Madhavi has dedicated her career to helping women navigate the vital transitions of fertility, pregnancy, and postpartum. She has guided over 500 women across India through customized online programs designed to promote safe delivery, alleviate pains, and cultivate mental calm.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="outline">
                  Read Dr. Madhavi's Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS PREVIEW */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark">
              Our Expert-Led Wellness Programs
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base leading-relaxed">
              Choose the program aligned with your life phase. Our classes are conducted live online, tailored to secure maximum safety and personalized support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Program 1 */}
            <ProgramCard
              title="Prenatal Yoga & Garbhasanskar"
              subtitle="Healthy Pregnancy & Baby Development"
              description="A clinical, physiotherapy-backed yoga course structured to alleviate body aches, build pelvic strength, and nurture baby brain development through ancient Garbhasanskar practices."
              timing="Live Batches: Morning 6:15 AM | Evening 5:00 PM IST (Mon-Fri)"
              features={[
                "Trimester-specific yoga & stretches",
                "Garbha Samvad & Mantra chanting",
                "Breathing exercises for labour pain management",
                "9th-Month pelvic opening & birth preparation",
                "Weekend health lectures & diet guidance",
              ]}
              pricing={[
                { period: "1-Month Intake Package", price: "₹1,499" },
                { period: "3-Month Trimester Package", price: "₹3,999" },
                { period: "6-Month Full Support Package", price: "₹7,999" },
              ]}
              ctaUrl="/programs/prenatal-yoga"
              badge="Most Popular"
              isPopular={true}
            />

            {/* Program 2 */}
            <ProgramCard
              title="Fertility Yoga & Wellness"
              subtitle="Pre-Conception & Hormonal Support"
              description="A specialized program designed to prepare your body for conception, reduce stress hormones, balance thyroid/PCOD/PCOS naturally, and assist assisted cycles like IVF and IUI."
              timing="Live Batch: Afternoon 4:00 PM – 5:00 PM IST (Mon-Fri)"
              features={[
                "Pelvic-opening flows for uterine blood flow",
                "Endocrine stimulation for thyroid & hormones",
                "Cortisol-reduction breathing & meditations",
                "Personalized nutrition & diet charts",
                "Mindset coaching & emotional support group",
              ]}
              pricing={[{ period: "Monthly Subscription", price: "₹1,499 / Month" }]}
              ctaUrl="/programs/fertility-yoga"
              isPopular={false}
            />
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark">
              How Yoga Delight Supports Your Journey
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base leading-relaxed">
              Our unique approach blends scientific physiotherapy principles with traditional lifestyle elements to produce holistic improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border ${b.bgColor} ${b.borderColor} premium-shadow text-left space-y-3`}
              >
                <div className={`h-8 w-8 bg-white/80 rounded-full flex items-center justify-center ${b.textColor} font-bold`}>
                  {idx + 1}
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary-dark">
                  {b.title}
                </h3>
                <p className="text-foreground/80 font-sans text-xs md:text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE SECTION */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark leading-tight">
                Why Women Trust Yoga Delight
              </h2>
              <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
                We do not believe in standard pre-recorded video templates. We know that every pregnancy is different and requires physical precaution.
              </p>
              <div className="pt-2">
                <Button href="/free-consultation" variant="primary">
                  Book Free Assessment Call
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {whyUs.map((w, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-border/40 rounded-2xl premium-shadow flex items-start space-x-4"
                >
                  <span className="p-2 rounded-full bg-secondary-light text-secondary-dark flex-shrink-0 mt-1">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-primary-dark mb-1">
                      {w.title}
                    </h4>
                    <p className="text-foreground/75 font-sans text-sm leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES PREVIEW */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark">
                Stories of Hope and New Life
              </h2>
              <p className="text-foreground/75 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                Read real reviews from women who navigated high-stress conception, pregnancy complications, and labour prepared with our programs.
              </p>
            </div>
            <Link
              href="/testimonials"
              className="text-primary hover:text-primary-dark font-sans font-semibold inline-flex items-center space-x-1 mt-4 md:mt-0 underline"
            >
              <span>View All 500+ Stories</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sampleTestimonials.map((t, idx) => (
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

      {/* 7. FAQ PREVIEW */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/75 font-sans text-sm md:text-base leading-relaxed">
              Got questions? We have compiled responses to details commonly requested by mothers.
            </p>
          </div>

          <div className="bg-white border border-border/50 rounded-3xl p-6 md:p-8 premium-shadow">
            <Accordion items={faqPreview} />
            <div className="text-center pt-6 border-t border-border/40 mt-6">
              <Link
                href="/faq"
                className="text-primary hover:text-primary-dark font-sans font-semibold inline-flex items-center space-x-1 underline"
              >
                <span>Read More FAQs (20+)</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT & REGISTRATION CTA SECTION */}
      <section className="py-20 md:py-28 bg-white border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact details text */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark">
                Get in Touch
              </h2>
              <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
                Have questions about the batches, pricing, or suitability for your health condition? Submit a message directly to Dr. Madhavi Soriya.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-border/60">
                <div className="flex items-center space-x-3 text-foreground/80 font-sans">
                  <span className="p-2 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-foreground/50">Primary Email</p>
                    <a href="mailto:yogadelight30@gmail.com" className="text-sm font-semibold underline text-primary">
                      yogadelight30@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-foreground/80 font-sans">
                  <span className="p-2 rounded-full bg-secondary-light text-secondary-dark">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-foreground/50">Free Assessment</p>
                    <Link href="/free-consultation" className="text-sm font-semibold underline text-secondary-dark">
                      Book WhatsApp Consultation
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary-light/30 border border-primary/10 rounded-2xl text-xs md:text-sm text-foreground/75 font-sans leading-relaxed">
                <strong>Admission Notice:</strong> Admissions remain open for online live batches throughout the month. In case you miss initial batches, custom bridge lectures will be provided to catch up safely.
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
