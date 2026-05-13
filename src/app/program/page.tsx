'use client';

import { CheckCircle2, XCircle, ArrowRight, Activity, Heart, Wind, Brain, Smile, Flame, Sun, Droplets, Zap, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-bg-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* SECTION 1: PROGRAM HERO */}
        <section className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-blue text-blue-700 font-semibold text-sm">
            🌸 Our Signature Program
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-dark tracking-tight max-w-3xl mx-auto">
            Fertility Yoga & <span className="text-primary">Wellness Program</span>
          </h1>
          <p className="text-xl text-text-dark/70 max-w-2xl mx-auto">
            A comprehensive, daily online program expertly designed to balance hormones, reduce stress, and prepare your body naturally for conception.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-text-dark bg-white inline-flex p-2 rounded-2xl border border-gray-100 shadow-sm">
            <span className="px-4 py-2 bg-bg-light rounded-xl flex items-center gap-2">📅 Daily (Mon-Sun)</span>
            <span className="px-4 py-2 bg-bg-light rounded-xl flex items-center gap-2">🕐 4-5 PM IST</span>
            <span className="px-4 py-2 bg-bg-light rounded-xl flex items-center gap-2">🗣️ Hindi</span>
            <span className="px-4 py-2 bg-bg-light rounded-xl flex items-center gap-2">💻 Online</span>
          </div>
          
          <div className="pt-4">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all inline-block"
            >
              Register Now — ₹1499/mo
            </Link>
          </div>
        </section>

        {/* SECTION 2: WHO IS THIS FOR? */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-pastel-green/30 border border-green-100 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" /> THIS IS FOR YOU IF:
            </h3>
            <ul className="space-y-4">
              {[
                "Planning for pregnancy and want a natural approach",
                "Dealing with stress or anxiety affecting fertility",
                "Experiencing PCOS or hormonal imbalances",
                "Need expert-guided, safe yoga practice",
                "Want holistic wellness beyond just physical exercise",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-emerald-900/80 font-medium">
                  <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 border border-red-100 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" /> THIS IS NOT FOR YOU IF:
            </h3>
            <ul className="space-y-4">
              {[
                "Already pregnant (requires separate prenatal program)",
                "Looking for offline, in-person classes",
                "Want pre-recorded videos only (this is live)",
                "Cannot commit to daily practice at 4-5 PM IST",
                "Looking for a quick medical 'cure'",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-red-900/80 font-medium">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: COMPLETE PROGRAM INCLUDES */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-dark">Everything You Need is Included</h2>
            <p className="text-text-dark/70 mt-2">10 holistic components integrated into one powerful daily session.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Fertility Yoga', desc: 'Specialized poses to increase blood flow to reproductive organs.', icon: Activity, color: 'bg-pastel-blue text-blue-600' },
              { title: 'Pranayam', desc: 'Deep breathing techniques for profound hormonal balance.', icon: Wind, color: 'bg-pastel-green text-emerald-600' },
              { title: 'Meditation', desc: 'Mental clarity practices to remove emotional blocks.', icon: Brain, color: 'bg-pastel-purple text-purple-600' },
              { title: 'Relaxation', desc: 'Deep relaxation techniques to soothe the nervous system.', icon: Heart, color: 'bg-pastel-orange text-orange-600' },
              { title: 'Breathing Routines', desc: 'Daily practices to maintain calm throughout your day.', icon: Droplets, color: 'bg-pastel-blue text-blue-600' },
              { title: 'Affirmations', desc: 'Mindset transformation for a positive conception journey.', icon: Smile, color: 'bg-pastel-purple text-purple-600' },
              { title: 'Stress Management', desc: 'Proven methods to reduce conception-blocking cortisol.', icon: Flame, color: 'bg-pastel-orange text-orange-600' },
              { title: 'Endocrine Support', desc: 'Specific asanas targeting the thyroid and endocrine glands.', icon: Zap, color: 'bg-pastel-green text-emerald-600' },
              { title: 'Lifestyle Guidance', desc: 'Daily routine optimization (Dinacharya) based on Ayurveda.', icon: Sun, color: 'bg-pastel-blue text-blue-600' },
              { title: 'Diet Guidance', desc: 'Fertility-friendly nutrition tips provided in your Welcome Kit.', icon: Coffee, color: 'bg-pastel-orange text-orange-600' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-text-dark/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 & 5: DETAILS & SCIENCE BENTO */}
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-primary text-white rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Why This Methodology Works</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-pastel-blue mb-2">The Stress-Fertility Connection</h4>
                <p className="text-white/80 text-sm leading-relaxed">High stress elevates cortisol, which suppresses reproductive hormones. Our specific sequencing directly down-regulates the sympathetic nervous system.</p>
              </div>
              <div>
                <h4 className="font-bold text-pastel-orange mb-2">Physiotherapy Backed</h4>
                <p className="text-white/80 text-sm leading-relaxed">Every posture is vetted through a physiotherapist's lens, ensuring safe alignment that genuinely improves pelvic floor tone and circulation.</p>
              </div>
              <div>
                <h4 className="font-bold text-pastel-green mb-2">Hormonal Axis Balancing</h4>
                <p className="text-white/80 text-sm leading-relaxed">By stimulating the thyroid, pituitary, and adrenal glands through specific compressions and extensions, we encourage natural hormonal equilibrium.</p>
              </div>
              <div>
                <h4 className="font-bold text-pastel-purple mb-2">Holistic Consistency</h4>
                <p className="text-white/80 text-sm leading-relaxed">Daily practice builds compounding results. The body responds best to gentle, consistent daily signals rather than intense, sporadic workouts.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Class Details</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-text-dark/60">Schedule</span>
                  <span>Daily (Mon-Sun)</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-text-dark/60">Time</span>
                  <span>4:00 PM – 5:00 PM IST</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-text-dark/60">Duration</span>
                  <span>1 Hour</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-text-dark/60">Platform</span>
                  <span>Zoom (Online)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-dark/60">Language</span>
                  <span>Hindi</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
               <div className="text-3xl font-extrabold text-text-dark mb-1">₹1499<span className="text-sm font-normal text-text-dark/50">/mo</span></div>
               <Link href="/register" className="mt-4 block w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors">
                 Enroll Now
               </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: DISCLAIMER */}
        <section className="bg-pastel-orange/50 border border-orange-200 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-orange-900 font-medium">
            <strong>Medical Disclaimer:</strong> This program complements medical treatment and is designed to support natural wellness. It is NOT a substitute for professional medical care or IVF protocols. Always consult your doctor before beginning any physical program.
          </p>
        </section>

      </div>
    </div>
  );
}
