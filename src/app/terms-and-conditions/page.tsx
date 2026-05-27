import React from "react";

export const metadata = {
  title: "Terms and Conditions",
  description: "Read the Terms & Conditions of Yoga Delight program bookings and online class participation guidelines.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans leading-relaxed text-foreground/80 space-y-6">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark border-b border-border/40 pb-4">
        Terms &amp; Conditions
      </h1>
      <p className="text-sm font-sans text-foreground/50">Last Updated: May 27, 2026</p>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">1. Acceptance of Terms</h2>
        <p className="text-sm md:text-base">
          By enrolling in our yoga classes, submitting intake forms, or utilizing our website, you agree to comply with and be bound by these Terms &amp; Conditions. If you do not agree to these terms, you should not access or join our wellness programs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">2. Medical Clearance Requirement</h2>
        <p className="text-sm md:text-base">
          All participants in the Prenatal and Fertility Yoga programs are required to consult their primary gynecologist or treating physician and obtain medical clearance prior to attending any live session. You agree that you are solely responsible for ensuring you have no medical contraindications to exercise.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">3. Subscription &amp; Payments</h2>
        <p className="text-sm md:text-base">
          Program admission is subject to upfront payment. Prenatal plans are active for the exact duration of the package purchased (1, 3, or 6 months). Fertility plans operate on a monthly recurring cycle. All fees are paid in Indian Rupees (INR) and are non-refundable.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">4. Live Sessions Conduct</h2>
        <p className="text-sm md:text-base">
          Our online interactive video classes require participants to keep their cameras on during practice. This is necessary for Dr. Madhavi Soriya to monitor your poses and alignments live, reducing the risk of injury. Disruptive behavior will lead to termination of program access without refund.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">5. Intellectual Property</h2>
        <p className="text-sm md:text-base">
          All materials, video recordings, diet documents, worksheets, and website layout content provided by Yoga Delight are protected under intellectual property laws. You agree not to distribute, record, copy, or share these materials outside your household.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">6. Contact Email</h2>
        <p className="text-sm md:text-base">
          For any clarifications regarding program terms, please contact:
        </p>
        <p className="text-sm md:text-base font-semibold text-primary">
          yogadelight30@gmail.com
        </p>
      </section>
    </div>
  );
}
