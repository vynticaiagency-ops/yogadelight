import React from "react";

export const metadata = {
  title: "Refund Policy",
  description: "Read the Refund and Package Freeze Policy of Yoga Delight prenatal and fertility yoga programs.",
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans leading-relaxed text-foreground/80 space-y-6">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark border-b border-border/40 pb-4">
        Refund &amp; Package Freeze Policy
      </h1>
      <p className="text-sm font-sans text-foreground/50">Last Updated: May 27, 2026</p>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">1. Non-Refundability of Fees</h2>
        <p className="text-sm md:text-base">
          All program enrollment fees, packages (1, 3, or 6 months), and subscription charges paid to Yoga Delight are strictly non-refundable. Once payment is processed and live sessions commence, no cash or digital refunds will be issued under any circumstances.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">2. Package Freeze Option (Medical Exception)</h2>
        <p className="text-sm md:text-base">
          We understand that medical circumstances can change rapidly during pregnancy. In case of unexpected clinical complications where your treating obstetrician orders complete bed rest or prohibits physical exercise:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
          <li>You must submit a valid medical certificate or prescription from your gynecologist detailing the restriction.</li>
          <li>Upon validation, we will freeze your active package balance for a period of up to 6 months.</li>
          <li>No fees will be lost; the remaining days can be resumed once you receive medical clearance.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">3. Postnatal Conversion</h2>
        <p className="text-sm md:text-base">
          If a medical freeze occurs in your third trimester and you are unable to resume prenatal classes before delivery, the remaining balance can be converted into credit for our <strong>Postnatal Core Rehabilitation and Postnatal Yoga program</strong> (typically starting 6 to 12 weeks after delivery, subject to doctor clearance).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">4. Transferability</h2>
        <p className="text-sm md:text-base">
          If you are permanently advised to stop exercise and do not wish to utilize postnatal programs, you may request to transfer your remaining package balance to an immediate family member (e.g., sister, sister-in-law) for our Fertility or Wellness programs, subject to our approval and the new participant's medical clearance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">5. Contact Support</h2>
        <p className="text-sm md:text-base">
          To request a package freeze or transfer, please email your medical logs to:
        </p>
        <p className="text-sm md:text-base font-semibold text-primary">
          yogadelight30@gmail.com
        </p>
      </section>
    </div>
  );
}
