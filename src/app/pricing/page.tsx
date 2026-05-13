'use client';

import { CheckCircle2, Shield, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-text-dark/70">
            One comprehensive program. One honest price. Everything included.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border-2 border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-blue-400" />
            
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pastel-purple text-primary font-bold text-sm mb-4">
                🌸 FERTILITY YOGA & WELLNESS
              </span>
              <div className="flex items-end justify-center gap-1">
                <span className="text-5xl font-black text-text-dark">₹1499</span>
                <span className="text-text-dark/50 mb-1 font-medium">/ month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Daily 1-hour live classes (4-5 PM IST)",
                "Fertility Yoga & Pranayam",
                "Meditation & Relaxation",
                "Stress Management Techniques",
                "Hormonal Balance Support",
                "Lifestyle & Diet Guidance",
                "Exclusive WhatsApp Group Access"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-dark/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-3 rounded-xl mb-8 border border-red-100 flex items-center justify-center gap-2 text-sm font-bold text-red-700">
              <AlertTriangle className="w-4 h-4" /> NO REFUND after payment
            </div>

            <Link 
              href="/register" 
              className="block w-full py-4 bg-primary text-white rounded-2xl font-bold text-center text-lg shadow-lg hover:bg-primary-dark transition-colors"
            >
              REGISTER NOW →
            </Link>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-dark/50">
              <Shield className="w-4 h-4" /> Secure Payment via Razorpay
            </div>
          </motion.div>
        </div>

        {/* Schedule & Payment Methods Bento */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              📅 Class Schedule
            </h3>
            <ul className="space-y-3 text-text-dark/80 font-medium">
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-text-dark/50">Days</span><span>Daily (Mon - Sun)</span>
              </li>
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-text-dark/50">Time</span><span>4:00 PM – 5:00 PM IST</span>
              </li>
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-text-dark/50">Duration</span><span>1 hour per session</span>
              </li>
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-text-dark/50">Platform</span><span>Zoom</span>
              </li>
              <li className="flex justify-between">
                <span className="text-text-dark/50">Language</span><span>Hindi</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              💳 Payment Methods
            </h3>
            <p className="text-sm text-text-dark/60 mb-6">
              We process payments securely via Razorpay. All major Indian and international payment methods are accepted.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg-light p-3 rounded-xl text-center font-semibold text-sm text-text-dark/80 border border-gray-100">UPI (GPay, PhonePe)</div>
              <div className="bg-bg-light p-3 rounded-xl text-center font-semibold text-sm text-text-dark/80 border border-gray-100">Credit/Debit Cards</div>
              <div className="bg-bg-light p-3 rounded-xl text-center font-semibold text-sm text-text-dark/80 border border-gray-100">Net Banking</div>
              <div className="bg-bg-light p-3 rounded-xl text-center font-semibold text-sm text-text-dark/80 border border-gray-100">Wallets</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
