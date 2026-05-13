'use client';

import { CheckCircle2, Shield, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">
            Transparent, Honest Pricing
          </h1>
          <p className="text-xl text-text-dark/70">
            Choose the wellness program that fits your current journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fertility Program */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border-2 border-primary/10 relative overflow-hidden flex flex-col"
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pastel-blue text-blue-600 font-bold text-sm mb-4 uppercase tracking-widest">
                🌸 Fertility Program
              </span>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                   <div className="text-2xl font-black text-text-dark">₹1499</div>
                   <div className="text-[10px] text-text-dark/50 font-bold uppercase">1 Month</div>
                </div>
                <div className="text-center p-2 bg-primary/5 rounded-xl border border-primary/20">
                   <div className="text-3xl font-black text-primary">₹3999</div>
                   <div className="text-[10px] text-primary/70 font-bold uppercase">3 Months</div>
                </div>
                <div className="text-center">
                   <div className="text-2xl font-black text-text-dark">₹7999</div>
                   <div className="text-[10px] text-text-dark/50 font-bold uppercase">6 Months</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              {[
                "Daily live classes (4-5 PM IST)",
                "Fertility Yoga & Pranayam",
                "Stress Management Techniques",
                "WhatsApp Support",
                "Welcome Kit Included"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-dark/80 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/register?program=fertility" 
              className="block w-full py-4 bg-primary text-white rounded-2xl font-bold text-center text-lg shadow-lg hover:bg-primary-dark transition-colors"
            >
              Enroll Now →
            </Link>
          </motion.div>

          {/* Prenatal Program */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border-2 border-primary/30 relative overflow-hidden flex flex-col"
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pastel-purple text-primary font-bold text-sm mb-4 uppercase tracking-widest">
                👶 Prenatal Program
              </span>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                   <div className="text-2xl font-black text-text-dark">₹1499</div>
                   <div className="text-[10px] text-text-dark/50 font-bold uppercase">1 Month</div>
                </div>
                <div className="text-center p-2 bg-primary/5 rounded-xl border border-primary/20">
                   <div className="text-3xl font-black text-primary">₹3999</div>
                   <div className="text-[10px] text-primary/70 font-bold uppercase">3 Months</div>
                </div>
                <div className="text-center">
                   <div className="text-2xl font-black text-text-dark">₹7999</div>
                   <div className="text-[10px] text-text-dark/50 font-bold uppercase">6 Months</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              {[
                "Dual Batch: 6:15 AM or 5:00 PM IST",
                "Garbhasanskar & Mantra Chanting",
                "Labour Prep & Breathing Techniques",
                "Baby's Brain Dev Activities",
                "Weekend Home Activities"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-dark/80 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/register?program=prenatal" 
              className="block w-full py-4 bg-primary text-white rounded-2xl font-bold text-center text-lg shadow-lg hover:bg-primary-dark transition-colors"
            >
              Enroll Now →
            </Link>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto bg-red-50 p-6 rounded-2xl border border-red-100 flex items-center justify-center gap-4 text-center">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <p className="text-sm font-bold text-red-800 uppercase tracking-wide">
            Strict NO REFUND policy applies to both programs once payment is confirmed.
          </p>
        </div>

      </div>
    </div>
  );
}
