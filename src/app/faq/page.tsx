'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    category: "General",
    questions: [
      { q: "Who is this program for?", a: "We have two specialized programs: 1) Fertility Yoga for women planning for pregnancy or managing PCOS/hormonal imbalances. 2) Prenatal Yoga & Garbhasanskar for expecting mothers seeking a healthy pregnancy and labor preparation." },
      { q: "What language are classes in?", a: "All live classes for both programs are conducted in Hindi." },
      { q: "Do I need prior yoga experience?", a: "No prior experience is necessary. Dr. Madhavi guides you through safe, gentle, and effective practices tailored to your stage." }
    ]
  },
  {
    category: "Program Details",
    questions: [
      { q: "What is included in Fertility Yoga?", a: "Daily live classes (4-5 PM), Fertility Yoga, Pranayam, Meditation, Stress Management, and a Diet Guidance Welcome Kit." },
      { q: "What is included in Prenatal Yoga?", a: "Prenatal Yoga, Garbhasanskar, Mantra Chanting, Baby's Brain Development Activities, and Labour Preparation (specifically in the 9th month)." },
      { q: "Do I get personal attention?", a: "Yes. We keep batch sizes small to ensure Dr. Madhavi can provide personalized modifications for everyone." }
    ]
  },
  {
    category: "Schedule & Access",
    questions: [
      { q: "What are the class timings?", a: "Fertility Batch: 4:00 PM – 5:00 PM IST. Prenatal Batch: Morning (6:15 AM – 7:15 AM) or Evening (5:00 PM – 6:00 PM)." },
      { q: "How do I join the class?", a: "After successful payment, you'll be redirected to a 'Thank You' page with your Zoom link. You'll also receive an immediate email with all access details." },
      { q: "Is the WhatsApp group mandatory?", a: "Yes. It is our ONLY official communication channel for class links and daily updates." }
    ]
  },
  {
    category: "Refunds & Terms",
    questions: [
      { q: "What is the refund policy?", a: "We have a strict NO REFUND policy for both programs. Once payment is confirmed, no refunds or transfers will be issued. Please verify the batch timings work for you before enrolling." },
      { q: "Can I transfer my membership?", a: "No, memberships are non-transferable and strictly for the registered individual." },
      { q: "How do I contact Dr. Madhavi?", a: "To maintain professional boundaries, all communication is handled via the official WhatsApp group. Dr. Madhavi responds to queries daily at 6 PM IST." }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openQ, setOpenQ] = useState<string | null>(null);

  const currentQuestions = faqs.find(f => f.category === activeCategory)?.questions || [];

  return (
    <div className="min-h-screen bg-bg-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">
            All Your Questions — Answered
          </h1>
          <p className="text-xl text-text-dark/70">
            Please read through these details carefully before registering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {faqs.map((faq) => (
            <button
              key={faq.category}
              onClick={() => {
                setActiveCategory(faq.category);
                setOpenQ(null);
              }}
              className={`px-6 py-2.5 rounded-full font-bold transition-all text-sm ${
                activeCategory === faq.category 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-text-dark/70 hover:bg-pastel-blue border border-gray-200'
              }`}
            >
              {faq.category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Bento Box */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 min-h-[400px]">
          <h2 className="text-2xl font-bold mb-6 border-b pb-4 text-primary-dark">{activeCategory} Questions</h2>
          <div className="space-y-4">
            {currentQuestions.map((item, i) => (
              <div 
                key={i} 
                className={`border rounded-2xl overflow-hidden transition-colors ${openQ === item.q ? 'border-primary/50 bg-primary/5' : 'border-gray-200 hover:border-primary/30'}`}
              >
                <button 
                  onClick={() => setOpenQ(openQ === item.q ? null : item.q)}
                  className="w-full text-left p-5 flex justify-between items-center font-bold text-text-dark"
                >
                  <span className="pr-4">{item.q}</span>
                  {openQ === item.q ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {openQ === item.q && (
                  <div className="p-5 pt-0 text-text-dark/70 leading-relaxed font-medium border-t border-primary/10 mt-2">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-pastel-blue p-10 rounded-3xl border border-blue-100">
          <h2 className="text-2xl font-bold mb-4">Satisfied with the answers?</h2>
          <p className="text-text-dark/70 mb-8 max-w-lg mx-auto">
            If you're ready to commit to your wellness journey and the class timing works for you, secure your spot today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register?program=fertility" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all inline-block"
            >
              Register for Fertility →
            </Link>
            <Link 
              href="/register?program=prenatal" 
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all inline-block"
            >
              Register for Prenatal →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
