import React from "react";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Yoga Delight. Learn how we handle your personal data and clinical intake records securely.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans leading-relaxed text-foreground/80 space-y-6">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark border-b border-border/40 pb-4">
        Privacy Policy
      </h1>
      <p className="text-sm font-sans text-foreground/50">Last Updated: May 27, 2026</p>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">1. Information We Collect</h2>
        <p className="text-sm md:text-base">
          We collect personal and health information that you voluntarily provide to us when registering for our programs, scheduling a free consultation, or contacting us. This includes your name, age, phone number, email address, pregnancy week, due date, treating doctor's name, emergency contact details, health conditions, and medical history.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">2. How We Use Your Information</h2>
        <p className="text-sm md:text-base">
          We use the collected clinical information solely to determine your suitability for our yoga programs, customize yoga poses, screen for medical flags, and contact you regarding updates, callbacks, and registrations. We do not sell or lease your personal information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">3. Data Security and Retention</h2>
        <p className="text-sm md:text-base">
          We implement a variety of security measures to maintain the safety of your personal information. All medical intake questionnaires and records are kept strictly confidential. We retain your information for as long as necessary to provide wellness services and comply with legal obligations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">4. Cookies</h2>
        <p className="text-sm md:text-base">
          We use simple site cookies to enhance website navigation and analyze traffic patterns. You can choose to disable cookies in your browser settings, though it may limit some features of the website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">5. Contact Information</h2>
        <p className="text-sm md:text-base">
          If you have any questions or concerns regarding our Privacy Policy, please contact us at:
        </p>
        <p className="text-sm md:text-base font-semibold text-primary">
          yogadelight30@gmail.com
        </p>
      </section>
    </div>
  );
}
