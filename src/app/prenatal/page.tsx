'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, Clock, Globe, Heart, Baby, Brain, 
  Sparkles, Calendar, ArrowRight, ShieldCheck, Zap
} from 'lucide-react';
import Link from 'next/link';

const inclusions = [
  { name: 'Prenatal Yoga', icon: Heart, color: 'bg-pastel-blue text-blue-600' },
  { name: 'Pranayam', icon: Zap, color: 'bg-pastel-green text-emerald-600' },
  { name: 'Meditation', icon: Brain, color: 'bg-pastel-purple text-purple-600' },
  { name: 'Visualization Techniques', icon: Sparkles, color: 'bg-pastel-orange text-orange-600' },
  { name: 'Positive Affirmations', icon: Heart, color: 'bg-pastel-blue text-blue-600' },
  { name: 'Mantra Chanting', icon: Zap, color: 'bg-pastel-green text-emerald-600' },
  { name: 'Garbha Samvad', icon: Baby, color: 'bg-pastel-purple text-purple-600' },
  { name: 'Relaxation Techniques', icon: Sparkles, color: 'bg-pastel-orange text-orange-600' },
  { name: 'Breathing for Labour', icon: Zap, color: 'bg-pastel-green text-emerald-600' },
  { name: 'Brain Development', icon: Brain, color: 'bg-pastel-blue text-blue-600' },
  { name: '9th Month Labour Prep', icon: ShieldCheck, color: 'bg-pastel-orange text-orange-600' },
  { name: 'Weekend Home Activities', icon: Calendar, color: 'bg-pastel-purple text-purple-600' },
];

const pricing = [
  { duration: '1 Month', price: '₹1499', period: 'month' },
  { duration: '3 Months', price: '₹3999', period: 'quarter', popular: true },
  { duration: '6 Months', price: '₹7999', period: 'half-year' },
];

export default function PrenatalPage() {
  return (
    <div className="min-h-screen bg-bg-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-purple text-primary font-bold text-sm"
          >
            👶 For Expecting Mothers
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-text-dark tracking-tight max-w-4xl mx-auto"
          >
            Prenatal Yoga & <span className="text-primary">Garbhasanskar</span> Program
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-dark/70 max-w-2xl mx-auto"
          >
            Specially designed to support a healthy pregnancy, emotional wellbeing, relaxation, and positive bonding with your baby.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
             <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <Clock className="text-primary w-5 h-5" />
                <div className="text-left">
                   <div className="text-xs font-bold text-text-dark/50 uppercase">Timings</div>
                   <div className="text-sm font-bold">6:15 AM or 5:00 PM IST</div>
                </div>
             </div>
             <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <Globe className="text-primary w-5 h-5" />
                <div className="text-left">
                   <div className="text-xs font-bold text-text-dark/50 uppercase">Language</div>
                   <div className="text-sm font-bold">Hindi</div>
                </div>
             </div>
          </div>
        </section>

        {/* Bento Grid Inclusions */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">What This Program Includes</h2>
            <p className="text-text-dark/70 mt-2">Comprehensive support for your physical and mental wellness.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inclusions.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4"
              >
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-text-dark">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Bento */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Program Fees</h2>
            <p className="text-text-dark/70 mt-2">Flexible plans to support your entire pregnancy journey.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white p-8 rounded-[2rem] border-2 shadow-sm flex flex-col justify-between relative overflow-hidden ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-gray-100'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                <div className="text-center">
                  <div className="text-sm font-bold text-text-dark/50 mb-4">{plan.duration}</div>
                  <div className="text-5xl font-black text-text-dark mb-2">{plan.price}</div>
                </div>
                <div className="mt-8">
                  <Link 
                    href={`/register?program=prenatal&plan=${plan.period}`}
                    className={`block w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.popular ? 'bg-primary text-white shadow-lg' : 'bg-pastel-blue text-primary'}`}
                  >
                    Select Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-white rounded-[3rem] p-12 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
            Stay Active, Calm, Confident, and Connected throughout your journey.
          </h2>
          <Link 
            href="/register?program=prenatal" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Journey Now <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

      </div>
    </div>
  );
}
