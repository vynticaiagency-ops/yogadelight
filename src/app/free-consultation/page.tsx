import React from "react";
import { Sparkles, Calendar, Heart, ShieldCheck, UserCheck } from "lucide-react";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const metadata = {
  title: "Book a Free Consultation",
  description: "Schedule your free 1-on-1 online assessment call with Dr. Madhavi Soriya to analyze your posture, goals, and program suitability.",
};

export default function FreeConsultationPage() {
  const steps = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "1. Schedule Your Slot",
      desc: "Fill out the consultation booking form selecting your health stage and preferred callback window."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "2. Personal Callback",
      desc: "Dr. Madhavi Soriya will connect with you via Phone or WhatsApp to understand your medical logs."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "3. Interactive Assessment",
      desc: "Receive customized guidelines on posture, pelvic exercises, and which batch timing fits your cycle."
    }
  ];

  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-secondary-light/30 text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-sans font-semibold tracking-widest text-secondary-dark bg-secondary/10 px-4 py-1.5 rounded-full inline-block">
            Onboarding Assessment
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark max-w-3xl mx-auto">
            Book Your Free 1-on-1 Wellness Assessment
          </h1>
          <p className="text-foreground/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Take the first step toward a healthier pregnancy or conception. Align on your physical targets directly with Dr. Madhavi.
          </p>
        </div>
      </section>

      {/* Grid section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Info Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary-dark">
                  What Happens in the Session?
                </h3>
                <p className="text-foreground/75 font-sans text-sm leading-relaxed">
                  Our free consultation is a dedicated 15-minute phone or WhatsApp video assessment. It is designed to ensure you practice safely and target the right muscle groups.
                </p>
              </div>

              {/* Assessment checklist */}
              <div className="space-y-4">
                {steps.map((s, idx) => (
                  <div key={idx} className="p-5 bg-background border border-border/40 rounded-2xl premium-shadow flex items-start space-x-4">
                    <span className="p-2 bg-primary-light text-primary rounded-xl flex-shrink-0 mt-0.5">
                      {s.icon}
                    </span>
                    <div>
                      <h4 className="font-serif font-semibold text-primary-dark text-base">{s.title}</h4>
                      <p className="text-xs text-foreground/70 font-sans leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clinical trust assurance */}
              <div className="p-6 bg-primary-light/20 border border-primary/10 rounded-2xl space-y-3 font-sans">
                <h4 className="font-serif text-sm font-semibold text-primary-dark flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Clinical Accountability
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  As a licensed physiotherapist, Dr. Madhavi Soriya respects patient confidentiality. Your medical data, history of conception struggles, and pregnancy week stats remain completely protected.
                </p>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
