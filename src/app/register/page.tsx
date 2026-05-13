'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  
  // Personal Details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('India');
  const [program, setProgram] = useState('fertility');
  const [plan, setPlan] = useState('1_month');
  const [acceptedTerms, setAcceptedTerms] = useState<Record<string, boolean>>({});

  const prices: Record<string, number> = {
    '1_month': 1499,
    '3_months': 3999,
    '6_months': 7999
  };

  const currentPrice = prices[plan] || 1499;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const p = urlParams.get('program');
    if (p === 'prenatal' || p === 'fertility') {
      setProgram(p);
    }
  }, []);
  
  // Health Info
  const [age, setAge] = useState('');
  const [healthConditions, setHealthConditions] = useState('');
  const [underTreatment, setUnderTreatment] = useState('No');
  
  // 8 Mandatory Checkboxes
  const [checks, setChecks] = useState({
    programDetails: false,
    faqs: false,
    timing: false,
    noRefund: false,
    terms: false,
    privacy: false,
    whatsappOnly: false,
    accurateInfo: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const allChecked = Object.values(checks).every(Boolean);

  // Dynamically load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCheckboxChange = (key: keyof typeof checks) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!allChecked) return;

    setIsProcessing(true);

    // 1. Create order on server
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        fullName: name, email, phone, age, city, state, country, healthConditions, underTreatment,
        program, plan, amount: currentPrice
      }),
    });

    const { orderId, amount } = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount,
      currency: 'INR',
      name: 'Dr. Madhavi Soriya Wellness',
      description: `${program === 'fertility' ? 'Fertility' : 'Prenatal'} Yoga Program - ${plan.replace('_', ' ')}`,
      order_id: orderId,
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: '#6366F1', // Indigo 500 to match theme
      },
      handler: function (response: any) {
        // Handle successful payment
        console.log('Payment successful', response);
        setIsProcessing(false);
        // Simulate adding token to URL
        router.push('/thank-you?token=success_dummy_token');
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-bg-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4 text-primary">
            <Lock className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-wider text-sm">Secure Registration</span>
          </div>
          <h1 className="text-4xl font-bold text-text-dark font-heading mb-4">Complete Enrollment</h1>
          <div className="flex justify-center gap-6 text-sm text-text-dark/70">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-primary"/> SSL Secured</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-primary"/> Razorpay Verified</span>
          </div>
        </div>

        {/* Critical Notice */}
        <div className="bg-white border-l-4 border-warning p-6 mb-8 rounded-r-xl shadow-sm">
          <h2 className="text-warning font-bold mb-2 flex items-center gap-2">
            ⚠️ BEFORE YOU PROCEED — PLEASE READ
          </h2>
          <ul className="space-y-1 text-text-dark/80 mb-4 list-disc list-inside">
            <li><strong>Class Time:</strong> 4:00 PM – 5:00 PM IST (Daily)</li>
            <li><strong>Language:</strong> Hindi</li>
            <li><strong>Fee:</strong> ₹1499 per month</li>
            <li><strong className="text-warning">NO REFUND after payment</strong></li>
            <li>All terms & conditions apply</li>
          </ul>
          <div className="flex gap-4 text-sm font-medium">
            <Link href="/faq" className="text-primary hover:underline">Read FAQ</Link>
            <Link href="/policies#refund" className="text-primary hover:underline">Read Refund Policy</Link>
            <Link href="/policies#terms" className="text-primary hover:underline">Read T&C</Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left: Registration Form */}
          <div className="lg:col-span-2">
            <form id="registration-form" onSubmit={handlePayment} className="space-y-8">
              
              {/* Step 0: Program & Plan Selection */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20 space-y-6">
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-text-dark/70">Select Program</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setProgram('fertility')}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${program === 'fertility' ? 'border-primary bg-primary/5 ring-4 ring-primary/10' : 'border-gray-100'}`}
                    >
                      <div className="text-xl mb-1">🌸</div>
                      <div className={`font-bold ${program === 'fertility' ? 'text-primary' : 'text-text-dark'}`}>Fertility</div>
                      <div className="text-xs text-text-dark/50">Yoga & Wellness</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setProgram('prenatal')}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${program === 'prenatal' ? 'border-primary bg-primary/5 ring-4 ring-primary/10' : 'border-gray-100'}`}
                    >
                      <div className="text-xl mb-1">👶</div>
                      <div className={`font-bold ${program === 'prenatal' ? 'text-primary' : 'text-text-dark'}`}>Prenatal</div>
                      <div className="text-xs text-text-dark/50">Yoga & Garbhasanskar</div>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-bold text-text-dark/70">Select Duration (Same for both programs)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '1_month', label: '1 Month', price: 1499 },
                      { id: '3_months', label: '3 Months', price: 3999 },
                      { id: '6_months', label: '6 Months', price: 7999 },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlan(p.id)}
                        className={`px-3 py-4 rounded-xl border-2 text-center transition-all ${plan === p.id ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-text-dark/50 hover:border-gray-200'}`}
                      >
                        <div className="font-bold text-sm">{p.label}</div>
                        <div className="text-lg font-black mt-1">₹{p.price}</div>
                        {p.id === '3_months' && <div className="text-[10px] uppercase font-bold text-primary mt-1">Best Value</div>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20">
                <h3 className="text-xl font-bold font-heading mb-4 border-b pb-2">Step 1: Personal Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address *</label>
                    <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone (WhatsApp) *</label>
                    <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">City *</label>
                    <input type="text" required value={city} onChange={e => setCity(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">State *</label>
                    <input type="text" required value={state} onChange={e => setState(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Country *</label>
                    <input type="text" required value={country} onChange={e => setCountry(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20">
                <h3 className="text-xl font-bold font-heading mb-4 border-b pb-2">Step 2: Health Info (Optional)</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Age</label>
                    <input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1">Health Conditions (if any)</label>
                    <textarea value={healthConditions} onChange={e => setHealthConditions(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" rows={3} />
                  </div>
                </div>
              </div>

              {/* Step 3: Terms & Conditions Checkboxes */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20">
                <h3 className="text-xl font-bold font-heading mb-4 border-b pb-2">Step 3: Terms & Conditions</h3>
                <p className="text-sm text-text-dark/70 mb-4">All checkboxes are mandatory to proceed.</p>
                <div className="space-y-4">
                  {[
                    { id: 'programDetails', label: 'I have read the complete program details' },
                    { id: 'faqs', label: 'I have read all FAQs' },
                    { id: 'timing', label: 'I confirm class timing (4-5 PM IST) works for me' },
                    { id: 'noRefund', label: 'I UNDERSTAND AND ACCEPT THE NO REFUND POLICY', bold: true, alert: true },
                    { id: 'terms', label: 'I agree to Terms & Conditions' },
                    { id: 'privacy', label: 'I accept the Privacy Policy' },
                    { id: 'whatsappOnly', label: 'I understand WhatsApp group is the only communication method (no personal calls)' },
                    { id: 'accurateInfo', label: 'I confirm all info provided is accurate' },
                  ].map(({ id, label, bold, alert }) => (
                    <label key={id} className={`flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${checks[id as keyof typeof checks] ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <div className="mt-0.5 relative flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={checks[id as keyof typeof checks]}
                          onChange={() => handleCheckboxChange(id as keyof typeof checks)}
                          className="peer sr-only"
                        />
                        <div className={`w-5 h-5 border-2 rounded transition-all flex items-center justify-center ${checks[id as keyof typeof checks] ? 'bg-primary border-primary' : 'border-gray-400 bg-white'}`}>
                           {checks[id as keyof typeof checks] && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                      <span className={`text-sm ${bold ? 'font-bold' : 'text-text-dark/80'} ${alert ? 'text-warning' : ''}`}>
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20 sticky top-24">
              <h3 className="text-xl font-bold font-heading mb-4 border-b pb-2">Order Summary</h3>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                    {program === 'fertility' ? '🌸' : '👶'}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark leading-tight">
                      {program === 'fertility' ? 'Fertility Yoga & Wellness' : 'Prenatal Yoga & Garbhasanskar'}
                    </h4>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {plan.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                
                <ul className="text-sm text-text-dark/70 space-y-2 mb-6 bg-bg-light/50 p-4 rounded-xl">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{program === 'fertility' ? '4:00 - 5:00 PM IST' : '6:15 AM or 5:00 PM IST'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Daily Live Online Classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Hindi Language</span>
                  </li>
                </ul>

                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-sm text-text-dark/60">
                    <span>Program Fee ({plan.replace('_', ' ')}):</span>
                    <span>₹{currentPrice}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-text-dark pt-2 border-t">
                    <span>Total Amount:</span>
                    <span className="text-primary">₹{currentPrice}</span>
                  </div>
                </div>
                <p className="text-[10px] text-warning font-bold mt-4 text-center p-2 bg-warning/5 rounded-lg border border-warning/10 uppercase tracking-widest">
                  ⚠️ No Refund After Payment
                </p>
              </div>

              {!allChecked && (
                <p className="text-warning text-sm text-center mb-3 font-medium">Please accept all terms to proceed</p>
              )}

              <button
                form="registration-form"
                type="submit"
                disabled={!allChecked || isProcessing}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md ${
                  allChecked 
                    ? 'bg-primary hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5' 
                    : 'bg-gray-300 cursor-not-allowed text-gray-500 shadow-none'
                }`}
              >
                {isProcessing ? 'Processing...' : `PROCEED TO PAYMENT — ₹${currentPrice}`}
              </button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-text-dark/60">
                <Lock className="w-3 h-3" /> Secure Payment via Razorpay
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
