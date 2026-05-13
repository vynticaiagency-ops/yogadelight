'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Clock, Globe, Laptop, Users, ShieldAlert, HeartPulse, Activity, BrainCircuit } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-bg-light py-20 lg:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <Star className="w-4 h-4 fill-current" /> Trusted by 500+ women
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-text-dark font-heading leading-tight">
              Your Natural Path to <span className="text-primary">Healthy Conception</span> & Wellness
            </h1>
            
            <p className="text-xl text-text-dark/80">
              Fertility Yoga & Wellness Program by Dr. Madhavi Soriya.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm font-medium text-text-dark/70">
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded border border-secondary/20 shadow-sm"><HeartPulse className="w-4 h-4 text-primary"/> Physiotherapist</span>
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded border border-secondary/20 shadow-sm"><Users className="w-4 h-4 text-primary"/> 500+ Women</span>
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded border border-secondary/20 shadow-sm"><Clock className="w-4 h-4 text-primary"/> 5+ Years Exp</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all text-center"
              >
                Register & Pay ₹1499
              </Link>
              <Link 
                href="/program" 
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-bold text-lg hover:bg-primary/5 transition-all text-center"
              >
                Learn More
              </Link>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-primary-dark px-4 py-2 rounded-lg text-sm font-medium">
              <Clock className="w-4 h-4" /> 4:00 PM - 5:00 PM IST Daily
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-secondary/20 absolute -inset-4 blur-3xl" />
            <div className="aspect-[4/5] bg-white rounded-3xl border-4 border-secondary/30 shadow-xl overflow-hidden relative z-10">
              <Image 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
                alt="Fertility Yoga"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM STATEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Are You Going Through This?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fertility struggles and disappointment",
              "PCOS or hormonal imbalance",
              "Stress & anxiety affecting conception",
              "Tired of generic advice",
              "Need expert medical guidance",
              "Want a natural, holistic approach"
            ].map((problem, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-bg-light rounded-2xl border border-secondary/20 text-left flex gap-4"
              >
                <div className="w-8 h-8 bg-warning/10 text-warning rounded-full flex items-center justify-center flex-shrink-0 mt-1">!</div>
                <p className="font-medium text-text-dark/80 text-lg leading-snug">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROGRAMS OVERVIEW */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Choose Your Path to Wellness</h2>
            <p className="text-text-dark/70 mt-2">Expert guidance for every stage of your journey.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fertility Yoga Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border-t-8 border-pastel-blue flex flex-col justify-between transition-transform hover:-translate-y-2"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-pastel-blue text-blue-700 text-xs font-bold mb-4 uppercase tracking-widest">Conception Support</span>
                <h3 className="text-2xl font-bold mb-4">Fertility Yoga & Wellness</h3>
                <p className="text-text-dark/70 text-sm mb-6">Daily 4-5 PM classes focusing on hormonal balance, stress reduction, and pelvic health.</p>
                <div className="flex items-center gap-2 mb-8 text-xl font-black text-text-dark">
                  ₹1499 <span className="text-sm font-normal text-text-dark/50">/ month</span>
                </div>
              </div>
              <Link href="/program" className="block w-full py-4 bg-primary text-white text-center rounded-2xl font-bold shadow-md hover:bg-primary-dark transition-colors">
                View Fertility Details
              </Link>
            </motion.div>

            {/* Prenatal Yoga Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border-t-8 border-pastel-purple flex flex-col justify-between transition-transform hover:-translate-y-2"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-pastel-purple text-purple-700 text-xs font-bold mb-4 uppercase tracking-widest">Pregnancy Support</span>
                <h3 className="text-2xl font-bold mb-4">Prenatal & Garbhasanskar</h3>
                <p className="text-text-dark/70 text-sm mb-6">Specialized dual-batch classes for healthy pregnancy, labor prep, and baby's brain development.</p>
                <div className="flex items-center gap-2 mb-8 text-xl font-black text-text-dark">
                  Starts at ₹1499 <span className="text-sm font-normal text-text-dark/50">/ month</span>
                </div>
              </div>
              <Link href="/prenatal" className="block w-full py-4 bg-primary text-white text-center rounded-2xl font-bold shadow-md hover:bg-primary-dark transition-colors">
                View Prenatal Details
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary/20 -z-10 -translate-y-1/2" />
            {[
              { step: 1, title: 'Read Details', desc: 'Read program details & FAQ on website', icon: '📖' },
              { step: 2, title: 'Register', desc: 'Fill the registration form', icon: '📝' },
              { step: 3, title: 'Accept & Pay', desc: 'Accept T&C and pay ₹1499', icon: '✅' },
              { step: 4, title: 'Join Class', desc: 'Get instant WhatsApp + Class access', icon: '🧘‍♀️' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-secondary/20 text-center shadow-sm relative">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto -mt-12 mb-4 border-4 border-white shadow-sm">
                  {s.step}
                </div>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-text-dark/70">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-warning/10 text-warning-dark p-4 rounded-lg text-center font-medium max-w-2xl mx-auto border border-warning/20">
            Notice: WhatsApp & class link are shared ONLY after payment confirmation.
          </div>
        </div>
      </section>

      {/* SECTION 5: MEET DR. MADHAVI */}
      <section className="py-20 bg-primary-dark text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-secondary/20 rounded-3xl overflow-hidden relative border-4 border-secondary"
          >
             <Image 
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80"
                alt="Dr. Madhavi Soriya"
                fill
                className="object-cover opacity-80 mix-blend-luminosity"
             />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">Meet Dr. Madhavi</h2>
            <p className="text-xl font-medium">Physiotherapist & Women's Wellness Coach</p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-secondary w-5 h-5"/> Qualified Physiotherapist</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-secondary w-5 h-5"/> Women's Wellness Coach</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-secondary w-5 h-5"/> Prenatal Yoga & Fertility Expert</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-secondary w-5 h-5"/> 5+ Years Experience</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-secondary w-5 h-5"/> 500+ Women Successfully Guided</li>
            </ul>
            <blockquote className="border-l-4 border-secondary pl-4 italic text-lg text-white/90 font-serif">
              "My mission is to empower women to understand their bodies and naturally nurture their fertility through the profound science of Yoga and Physiotherapy."
            </blockquote>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-white transition-colors">
                Read Full Bio <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: IMPORTANT NOTICE */}
      <section className="py-16 bg-white border-t border-secondary/20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-bg-light border-2 border-warning/50 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-warning mb-4 flex items-center justify-center gap-2">
              <ShieldAlert className="w-6 h-6" /> Please Note Before Registering
            </h2>
            <p className="font-bold text-lg mb-4 text-text-dark">NO REFUND policy strictly applies after payment.</p>
            <ul className="text-sm text-text-dark/70 space-y-2 mb-6">
              <li>• Read all terms and program details before paying.</li>
              <li>• Ensure 4 PM - 5 PM IST timing works for you.</li>
              <li>• All common questions are answered in our FAQ.</li>
            </ul>
            <div className="flex justify-center gap-4 text-sm font-medium">
              <Link href="/faq" className="text-primary hover:underline">Read FAQ</Link>
              <Link href="/policies#refund" className="text-primary hover:underline">View Refund Policy</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-24 bg-primary text-center px-4">
        <h2 className="text-4xl font-bold font-heading text-white mb-8">Ready to Begin Your Wellness Journey?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <Link href="/faq" className="px-8 py-4 bg-primary-dark text-white rounded-full font-bold shadow-sm hover:bg-black/20 transition-all">
            📋 Read FAQ First
          </Link>
          <Link href="/register" className="px-8 py-4 bg-white text-primary rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            ✅ Register & Pay Now
          </Link>
        </div>
      </section>

    </div>
  );
}
