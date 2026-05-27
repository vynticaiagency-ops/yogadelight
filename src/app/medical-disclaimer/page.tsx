import React from "react";

export const metadata = {
  title: "Medical Disclaimer",
  description: "Read the Medical Disclaimer of Yoga Delight. Understand our boundary between physical therapy-based yoga and clinical obstetrics.",
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans leading-relaxed text-foreground/80 space-y-6">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark border-b border-border/40 pb-4">
        Medical Disclaimer
      </h1>
      <p className="text-sm font-sans text-foreground/50">Last Updated: May 27, 2026</p>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">1. Educational and Wellness Purpose</h2>
        <p className="text-sm md:text-base">
          All content, resources, live video classes, diet sheets, and recommendations provided by Yoga Delight and Dr. Madhavi Soriya are intended for educational and physical wellness purposes only. The information does not constitute medical diagnosis, clinical treatment, or direct obstetric care.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">2. No Substitute for Obstetric Care</h2>
        <p className="text-sm md:text-base">
          Participating in prenatal or fertility yoga does NOT replace your regular prenatal checkups, scans, laboratory tests, or medical consults with your treating gynecologist. Always prioritize the instructions and prescriptions of your primary obstetric team.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">3. Limitation of Liability</h2>
        <p className="text-sm md:text-base">
          Pregnancy and fertility involve inherent physiological variations. By participating in our programs, you agree that you do so at your own risk. Yoga Delight, its employees, and Dr. Madhavi Soriya are not liable for any injuries, complications, miscarriages, premature labour, or health changes that occur during or after your participation, except in cases of proven clinical negligence.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">4. Individual Assessment</h2>
        <p className="text-sm md:text-base">
          Dr. Madhavi Soriya's physiotherapist background helps customize postures to match musculoskeletal issues. However, online supervision cannot replace hands-on diagnostic checks. You agree to provide accurate, honest, and complete medical records during intake registration.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">5. Contact Information</h2>
        <p className="text-sm md:text-base">
          For any medical clearance questions, please email:
        </p>
        <p className="text-sm md:text-base font-semibold text-primary">
          yogadelight30@gmail.com
        </p>
      </section>
    </div>
  );
}
