import React from "react";

export const metadata = {
  title: "Consent Policy",
  description: "Read the Consent Policy of Yoga Delight regarding program participation and intake approvals.",
};

export default function ConsentPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans leading-relaxed text-foreground/80 space-y-6">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark border-b border-border/40 pb-4">
        Consent Policy
      </h1>
      <p className="text-sm font-sans text-foreground/50">Last Updated: May 27, 2026</p>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">1. Voluntary Participation Consent</h2>
        <p className="text-sm md:text-base">
          By submitting the registration intake form and joining Yoga Delight programs, you confirm that you are voluntarily participating in physical fitness exercises, breathing techniques, and mental meditations. You acknowledge that you have the right to decline participation in any specific pose or activity at any time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">2. Informing of Physical Changes</h2>
        <p className="text-sm md:text-base">
          You agree to immediately disclose to Dr. Madhavi Soriya and your obstetrician any changes in your health status, including but not limited to: high blood pressure readings, gestational diabetes diagnosis, sudden swelling, vaginal spotting, cramping, or changes in fetal movement. Continuous updates ensure your exercise sheet is modified correctly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">3. Electronic Signature Consent</h2>
        <p className="text-sm md:text-base">
          Checking the required consent boxes on our Registration Form constitutes your electronic signature and is legally binding. It certifies that you have read, understood, and agreed to our Medical Disclaimer, Terms &amp; Conditions, and Refund Policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">4. Media Consent (Optional)</h2>
        <p className="text-sm md:text-base">
          We may occasionally request to record screenshots or short video snippets of our group classes for quality review or social media testimonials. We will NEVER share or publish your video or image without obtaining your explicit, written, separate consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">5. Contact Support</h2>
        <p className="text-sm md:text-base">
          If you wish to retract or modify any consents given during enrollment, please email us at:
        </p>
        <p className="text-sm md:text-base font-semibold text-primary">
          yogadelight30@gmail.com
        </p>
      </section>
    </div>
  );
}
