'use client';

import { motion } from 'framer-motion';
import { Award, Heart, CheckCircle2, Star, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-purple text-primary-dark font-semibold text-sm"
          >
            <Star className="w-4 h-4 fill-current text-primary" /> Meet Your Guide
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight"
          >
            Dr. Madhavi Soriya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-dark/70 max-w-2xl mx-auto"
          >
            Physiotherapist, Women's Wellness Coach, and Prenatal Yoga & Fertility Expert dedicated to your natural conception journey.
          </motion.p>
        </div>

        {/* Credentials Bento Box */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Qualifications & Expertise</h2>
            <ul className="space-y-4">
              {[
                "Qualified Physiotherapist",
                "Certified Women's Wellness Coach",
                "Specialist in Prenatal Yoga",
                "Expert in Fertility Optimization Techniques"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-dark/80 font-medium">
                  <div className="w-8 h-8 rounded-full bg-pastel-green flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-pastel-blue rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-6 border border-blue-100 shadow-sm">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-500">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-4xl font-extrabold text-text-dark mb-1">500+</div>
              <div className="font-semibold text-text-dark/70">Women Guided</div>
            </div>
            <div className="w-full h-px bg-blue-200/50" />
            <div>
              <div className="text-4xl font-extrabold text-text-dark mb-1">5+</div>
              <div className="font-semibold text-text-dark/70">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Her Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why I Created This Program</h2>
              <div className="space-y-4 text-lg text-text-dark/70 leading-relaxed">
                <p>
                  As a physiotherapist, I saw countless women struggling with the physical and emotional toll of fertility challenges. The disconnect between modern medical treatments and holistic bodily wellness became glaringly apparent.
                </p>
                <p>
                  I realized that the missing link for many women was a supportive, natural approach that combined the structural understanding of physiotherapy with the profound hormonal and nervous system regulation of traditional Yoga and Pranayama.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-pastel-orange rounded-3xl p-6 flex items-center justify-center relative overflow-hidden border border-orange-100">
              <Heart className="w-32 h-32 text-orange-400 opacity-20 absolute -right-4 -bottom-4" />
              <blockquote className="text-xl md:text-2xl font-semibold text-text-dark text-center relative z-10 leading-snug">
                "My mission is to empower you to understand your body, regulate your nervous system, and naturally nurture your fertility."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Approach Bento */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">My Unique Approach</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Physiotherapy Backed', desc: 'Medical knowledge combined with yoga expertise for safe, effective movements.', color: 'bg-pastel-blue text-blue-600 border-blue-100' },
              { title: 'Women-Centric', desc: 'Every posture and breath is designed specifically for female anatomy and hormonal cycles.', color: 'bg-pastel-purple text-purple-600 border-purple-100' },
              { title: 'Holistic Method', desc: 'We address the mind, body, and lifestyle simultaneously to reduce conception-blocking stress.', color: 'bg-pastel-green text-emerald-600 border-emerald-100' },
              { title: 'Personalized', desc: 'Small batches ensure you get the attention and modifications you need.', color: 'bg-pastel-orange text-orange-600 border-orange-100' },
            ].map((feature, i) => (
              <div key={i} className={`rounded-3xl p-6 border ${feature.color} bg-opacity-50`}>
                <h3 className="font-bold text-lg mb-2 text-text-dark">{feature.title}</h3>
                <p className="text-sm text-text-dark/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link 
            href="/program" 
            className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          >
            View the Program Details <Award className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
