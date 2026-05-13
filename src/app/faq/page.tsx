'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    category: "General",
    questions: [
      { q: "Who is this program for?", a: "It is specifically designed for women planning for pregnancy, dealing with stress affecting fertility, or experiencing PCOS/hormonal imbalances." },
      { q: "What language are classes in?", a: "All live classes are conducted in Hindi." },
      { q: "Do I need prior yoga experience?", a: "No prior experience is necessary. Dr. Madhavi guides you from the very basics." }
    ]
  },
  {
    category: "Program Details",
    questions: [
      { q: "What is included?", a: "The program includes daily live classes featuring Fertility Yoga, Pranayam, Meditation, Relaxation, Stress Management, and Diet Guidance via our Welcome Kit." },
      { q: "Can I do this with PCOS?", a: "Yes, the program includes specific asanas and practices highly beneficial for managing PCOS and balancing hormones." },
      { q: "Do I get personal attention?", a: "We keep batch sizes small to ensure Dr. Madhavi can provide personalized modifications." }
    ]
  },
  {
    category: "Schedule & Access",
    questions: [
      { q: "What time are the classes?", a: "Classes are held daily from 4:00 PM to 5:00 PM IST." },
      { q: "What if I miss a class?", a: "Consistency is key, but if you miss a class, you can still follow the provided Welcome Kit routines. Note: We highly encourage attending live." },
      { q: "How do I join the class?", a: "After payment, you will receive a secure Zoom link on the Thank You page and via email." }
    ]
  },
  {
    category: "Refunds & Terms",
    questions: [
      { q: "What is the refund policy?", a: "We have a strict NO REFUND policy. Once payment is made, no refunds will be issued under any circumstances. Please ensure the 4-5 PM timing works for you before enrolling." },
      { q: "Can I transfer my membership?", a: "No, memberships are non-transferable." },
      { q: "Can I message Dr. Madhavi personally?", a: "No personal messages or calls. All communication is handled strictly through the official WhatsApp group where Dr. Madhavi responds daily at 6 PM." }
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
              onClick={() => setActiveCategory(faq.category)}
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
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
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
          <Link 
            href="/register" 
            className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all inline-block"
          >
            Register Now →
          </Link>
        </div>

      </div>
    </div>
  );
}
