import React from "react";
import { Mail, Clock, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Yoga Delight. Write to Dr. Madhavi Soriya regarding batch slots, program packages, or safety clearances.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-primary-light/40 text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-sans font-semibold tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Support Center
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark">
            Connect with Yoga Delight
          </h1>
          <p className="text-foreground/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about program modules, scheduling, or medical history clearance? Fill out our form, and we will get back to you.
          </p>
        </div>
      </section>

      {/* Grid section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Details panel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary-dark">
                  Communication Channels
                </h3>
                <p className="text-foreground/75 font-sans text-sm leading-relaxed">
                  We process inquiries within 24 hours. Registered students receive direct access to Dr. Madhavi Soriya via a private WhatsApp group.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email detail */}
                <div className="p-6 bg-background border border-border/40 rounded-2xl premium-shadow flex items-start space-x-4">
                  <span className="p-3 bg-primary-light text-primary rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-primary-dark text-base mb-1">Email Inquiry</h4>
                    <p className="text-xs text-foreground/50 font-sans mb-1">For partnerships or general queries</p>
                    <a href="mailto:yogadelight30@gmail.com" className="text-sm font-semibold underline text-primary">
                      yogadelight30@gmail.com
                    </a>
                  </div>
                </div>

                {/* Free Assessment call details */}
                <div className="p-6 bg-background border border-border/40 rounded-2xl premium-shadow flex items-start space-x-4">
                  <span className="p-3 bg-secondary-light text-secondary-dark rounded-xl flex-shrink-0">
                    <MessageSquare className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-primary-dark text-base mb-1">Free Assessment</h4>
                    <p className="text-xs text-foreground/50 font-sans mb-2">Book a WhatsApp evaluation call</p>
                    <Button href="/free-consultation" size="sm" variant="secondary">
                      Book Slot
                    </Button>
                  </div>
                </div>
              </div>

              {/* Clinic operation details */}
              <div className="p-6 bg-primary-light/20 border border-primary/10 rounded-2xl space-y-3 font-sans">
                <h4 className="font-serif text-sm font-semibold text-primary-dark flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Batch Operations (IST)
                </h4>
                <ul className="text-xs space-y-2 text-foreground/75">
                  <li><strong>Prenatal Morning:</strong> 6:15 AM – 7:15 AM</li>
                  <li><strong>Prenatal Evening:</strong> 5:00 PM – 6:00 PM</li>
                  <li><strong>Fertility Batch:</strong> 4:00 PM – 5:00 PM</li>
                  <li><strong>Office Hours:</strong> Monday – Saturday, 9:00 AM – 7:00 PM</li>
                </ul>
              </div>

              {/* Medical safety warning */}
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-3 text-xs font-sans text-red-800">
                <ShieldAlert className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Urgent Notice:</strong> In case of active pregnancy emergencies (bleeding, amniotic leakage, severe cramps), do not submit a website contact form. Contact your obstetrician or visit an emergency room immediately.
                </p>
              </div>
            </div>

            {/* Form panel */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
