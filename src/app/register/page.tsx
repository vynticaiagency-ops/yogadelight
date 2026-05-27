import React from "react";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import {
  ShieldCheck,
  Heart,
  Clock,
  Calendar,
  Check,
  AlertCircle,
  Copy,
  Mail,
  BookOpen,
  ArrowRight,
  DollarSign,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Prenatal Yoga & Garbhasanskar Registration",
  description: "Enroll in the Prenatal Yoga & Garbhasanskar program guided by Dr. Madhavi Soriya. Live batches, pricing, and registration guidelines.",
};

export default function RegisterPage() {
  const learningModules = [
    {
      title: "Pregnancy Yoga Practice",
      items: [
        "Trimester-specific yoga postures",
        "Chair yoga & modified stretches",
        "Birth ball exercises",
        "Safe pregnancy movements",
      ],
    },
    {
      title: "Breathwork & Relaxation",
      items: [
        "Pranayama techniques (Bhramari, Nadi Shodhana)",
        "Guided meditation sessions",
        "Yogic relaxation (Yoga Nidra)",
        "Stress management tools",
      ],
    },
    {
      title: "Pregnancy Wellness",
      items: [
        "Basic pregnancy nutrition guidance",
        "Healthy daily lifestyle practices",
        "Physical wellbeing support",
      ],
    },
    {
      title: "Labour Preparation",
      items: [
        "Labour breathing patterns",
        "Delivery preparation practices",
        "Relaxation methods for childbirth",
      ],
    },
    {
      title: "Baby Bonding Activities",
      items: [
        "Baby visualization exercises",
        "Positive womb affirmations",
        "Garbha Samvad (womb talk)",
        "Spiritual storytelling",
      ],
    },
    {
      title: "Baby Development Activities",
      items: [
        "Right-brain stimulation activities",
        "Left-brain stimulation activities",
        "Sensory engagement exercises",
      ],
    },
    {
      title: "Holistic Wellness",
      items: [
        "Mantra chanting vibrations",
        "Healing raga music",
        "Colour therapy concepts",
        "Mindfulness activities",
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Onboarding Headers */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-sans font-semibold tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Enrollment Hub
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark">
            Prenatal Yoga &amp; Garbhasanskar Program Registration
          </h1>
          <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
            Join our comprehensive program designed to support your physical, emotional, and spiritual wellbeing throughout pregnancy. Guided by <strong>Dr. Madhavi Soriya</strong> (Physiotherapist &amp; Wellness Coach).
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Program Details & Sales copy */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Timings & Timetable */}
            <div className="bg-white border border-border/40 rounded-3xl p-6 md:p-8 premium-shadow space-y-6">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-dark border-b border-border/45 pb-3">
                Class Schedule &amp; Timings
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary-light/30 border border-primary/20 rounded-2xl space-y-1">
                  <span className="text-[10px] uppercase font-sans font-semibold tracking-wider text-primary">BATCH A</span>
                  <h4 className="font-serif font-bold text-primary-dark text-base">Morning Batch</h4>
                  <p className="font-sans font-bold text-sm text-primary">6:15 AM – 7:15 AM IST</p>
                </div>
                <div className="p-4 bg-secondary-light/35 border border-secondary/20 rounded-2xl space-y-1">
                  <span className="text-[10px] uppercase font-sans font-semibold tracking-wider text-secondary-dark">BATCH B</span>
                  <h4 className="font-serif font-bold text-primary-dark text-base">Evening Batch</h4>
                  <p className="font-sans font-bold text-sm text-secondary-dark">5:00 PM – 6:00 PM IST</p>
                </div>
              </div>

              <p className="text-xs text-foreground/60 font-sans leading-relaxed">
                * Participants may select their preferred batch during registration and may switch between available batches whenever required.
              </p>

              {/* Schedule quick specs */}
              <div className="border-t border-border/40 pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans text-foreground/80">
                <div>
                  <p className="text-foreground/50">Weekly Cadence</p>
                  <p className="font-semibold">5 Classes Per Week</p>
                </div>
                <div>
                  <p className="text-foreground/50">Monthly Volume</p>
                  <p className="font-semibold">~20 Sessions / Month</p>
                </div>
                <div>
                  <p className="text-foreground/50">Days</p>
                  <p className="font-semibold">Monday to Friday</p>
                </div>
                <div>
                  <p className="text-foreground/50">Language</p>
                  <p className="font-semibold">Hindi &amp; Simple English</p>
                </div>
              </div>
            </div>

            {/* Fee Plans */}
            <div className="bg-white border border-border/40 rounded-3xl p-6 md:p-8 premium-shadow space-y-6">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-dark border-b border-border/45 pb-3">
                Program Fees
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 border border-border/60 rounded-2xl text-center space-y-2 bg-background">
                  <h4 className="text-xs font-sans text-foreground/50 uppercase tracking-wider">1 Month Plan</h4>
                  <p className="font-serif text-2xl font-bold text-primary-dark">₹1,499</p>
                </div>
                <div className="p-5 border border-primary/20 rounded-2xl text-center space-y-2 bg-primary-light/10">
                  <h4 className="text-xs font-sans text-primary uppercase tracking-wider font-semibold">3 Month Plan</h4>
                  <p className="font-serif text-2xl font-bold text-primary-dark">₹3,999</p>
                </div>
                <div className="p-5 border border-secondary/20 rounded-2xl text-center space-y-2 bg-secondary-light/10">
                  <h4 className="text-xs font-sans text-secondary-dark uppercase tracking-wider font-semibold">6 Month Plan</h4>
                  <p className="font-serif text-2xl font-bold text-primary-dark">₹7,999</p>
                </div>
              </div>

              <div className="p-4 bg-red-50 border border-red-150 rounded-2xl text-xs font-sans text-red-850 flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-red-650 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Important Non-Refundable Notice:</strong> Once payment is completed, fees are non-refundable and non-transferable. No adjustments, carry-forwards, transfers, or shifts to future months are permitted.
                </p>
              </div>
            </div>

            {/* Curriculum: What you'll learn */}
            <div className="bg-white border border-border/40 rounded-3xl p-6 md:p-8 premium-shadow space-y-6">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-dark border-b border-border/45 pb-3">
                Curriculum: What You'll Learn
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningModules.map((mod, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-serif text-base font-bold text-primary-dark flex items-center space-x-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{mod.title}</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-foreground/80 font-sans pl-3 list-none">
                      {mod.items.map((item, idy) => (
                        <li key={idy} className="flex items-start space-x-1">
                          <Check className="h-3 w-3 text-secondary-dark mt-1 mr-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility & Disclaimers */}
            <div className="bg-white border border-border/40 rounded-3xl p-6 md:p-8 premium-shadow space-y-6">
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-primary-dark border-b border-border/40 pb-2">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-1.5 text-xs md:text-sm text-foreground/80 font-sans pl-4 list-disc">
                  <li>Completion of at least <strong>12 weeks (3 months)</strong> of pregnancy.</li>
                  <li>Approval from your primary treating gynecologist or healthcare provider.</li>
                  <li>Absence of medical complications requiring absolute bed rest.</li>
                </ul>
              </div>

              <div className="space-y-3 border-t border-border/30 pt-4">
                <h4 className="font-serif text-base font-bold text-primary-dark">
                  Medical Disclaimer
                </h4>
                <p className="text-xs text-foreground/75 font-sans leading-relaxed">
                  This program is designed for educational and wellness purposes only and is not intended to diagnose, treat, cure, or prevent any medical condition. Participation should begin only after obtaining approval from your doctor. If you experience discomfort, pain, dizziness, bleeding, contractions, or any unusual symptoms, discontinue practice immediately and consult your doctor.
                </p>
              </div>
            </div>

            {/* Payments Card Details */}
            <div className="bg-gradient-to-tr from-secondary-light/35 to-primary-light/35 border-2 border-primary/20 rounded-3xl p-6 md:p-8 premium-shadow space-y-6">
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-dark mb-1">
                  Payment Details
                </h3>
                <p className="text-xs text-foreground/70 font-sans">
                  Complete your payment via UPI or Bank Transfer, copy transaction details, and upload the screenshot.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UPI Card */}
                <div className="bg-white p-5 rounded-2xl border border-border/60 space-y-3 relative">
                  <span className="text-[10px] uppercase font-sans font-semibold tracking-wider text-primary bg-primary-light px-2.5 py-0.5 rounded-full inline-block">
                    UPI Payment
                  </span>
                  <div className="font-sans text-xs space-y-1 pt-1">
                    <p className="text-foreground/50">UPI ID:</p>
                    <p className="font-bold text-sm text-primary-dark select-all">yogadelight30@okaxis</p>
                    <p className="text-foreground/50 pt-1">Payee Name:</p>
                    <p className="font-medium text-foreground/80">Soriya Madhavi Jayeshbhai</p>
                  </div>
                </div>

                {/* Bank Transfer Card */}
                <div className="bg-white p-5 rounded-2xl border border-border/60 space-y-3">
                  <span className="text-[10px] uppercase font-sans font-semibold tracking-wider text-secondary-dark bg-secondary-light px-2.5 py-0.5 rounded-full inline-block">
                    Bank Transfer
                  </span>
                  <div className="font-sans text-xs space-y-1 pt-1">
                    <p className="text-foreground/80"><strong className="text-foreground/50 font-normal">Name:</strong> Soriya Madhavi Jayeshbhai</p>
                    <p className="text-foreground/80"><strong className="text-foreground/50 font-normal">Bank:</strong> Axis Bank</p>
                    <p className="text-foreground/80"><strong className="text-foreground/50 font-normal">A/C Number:</strong> 922010017253617</p>
                    <p className="text-foreground/80"><strong className="text-foreground/50 font-normal">IFSC Code:</strong> UTIB0000662</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Policies */}
            <div className="bg-white border border-border/40 rounded-3xl p-6 md:p-8 premium-shadow space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary-dark border-b border-border/40 pb-2">
                Terms &amp; Policies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-foreground/85 leading-relaxed">
                <div>
                  <p className="font-bold text-primary-dark">Non-Refundable Policy</p>
                  <p className="text-foreground/70 mt-0.5">All fees paid towards the program are strictly non-refundable.</p>
                </div>
                <div>
                  <p className="font-bold text-primary-dark">Non-Transferable Policy</p>
                  <p className="text-foreground/70 mt-0.5">Registrations and fees cannot be transferred to another participant, batch, or future month.</p>
                </div>
                <div>
                  <p className="font-bold text-primary-dark">Class Rescheduling</p>
                  <p className="text-foreground/70 mt-0.5">Sessions may be rescheduled for festivals or emergencies. Updates are shared via WhatsApp.</p>
                </div>
                <div>
                  <p className="font-bold text-primary-dark">Attendance Terms</p>
                  <p className="text-foreground/70 mt-0.5">Missed classes are not eligible for adjustments, catchups, or carry-forward credits.</p>
                </div>
              </div>
            </div>

            {/* Confirmation details */}
            <div className="bg-white border border-border/40 rounded-3xl p-6 md:p-8 premium-shadow space-y-4">
              <h3 className="font-serif text-lg font-semibold text-primary-dark">
                Registration Review &amp; Confirmation Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-sans text-xs">
                <div className="space-y-1">
                  <div className="h-8 w-8 rounded-full bg-primary-light text-primary mx-auto flex items-center justify-center font-bold">1</div>
                  <p className="font-semibold text-primary-dark">Submit Details</p>
                </div>
                <div className="space-y-1">
                  <div className="h-8 w-8 rounded-full bg-primary-light text-primary mx-auto flex items-center justify-center font-bold">2</div>
                  <p className="font-semibold text-primary-dark">Verify Payment</p>
                </div>
                <div className="space-y-1">
                  <div className="h-8 w-8 rounded-full bg-primary-light text-primary mx-auto flex items-center justify-center font-bold">3</div>
                  <p className="font-semibold text-primary-dark">WhatsApp Add</p>
                </div>
                <div className="space-y-1">
                  <div className="h-8 w-8 rounded-full bg-primary-light text-primary mx-auto flex items-center justify-center font-bold">4</div>
                  <p className="font-semibold text-primary-dark">Join Sessions</p>
                </div>
              </div>
              <p className="text-xs text-center text-foreground/60 pt-2 font-sans">
                Confirmation details are processed and sent to your email/phone within <strong>24 hours</strong>.
              </p>
            </div>

            {/* Need Help Support Contact */}
            <div className="bg-primary-light/20 border border-primary/10 rounded-2xl p-6 text-center space-y-3">
              <h4 className="font-serif text-base font-bold text-primary-dark">Need Registration Help?</h4>
              <p className="text-xs text-foreground/75 font-sans">
                If you do not receive a registration confirmation or have bank query issues, contact our support team:
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary font-sans text-sm font-semibold">
                <Mail className="h-4 w-4" />
                <a href="mailto:yogadelight30@gmail.com" className="underline">yogadelight30@gmail.com</a>
              </div>
            </div>

          </div>

          {/* Right Column: Registration Form Container */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <RegistrationForm />
          </div>

        </div>

      </div>
    </div>
  );
}
