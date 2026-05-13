'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, ShieldCheck, FileText, Users } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function PoliciesPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('refund');

  useEffect(() => {
    // If a hash exists in the URL (e.g. /policies#refund), open that tab
    const hash = window.location.hash.replace('#', '');
    if (['refund', 'privacy', 'terms', 'conduct'].includes(hash)) {
      setActiveTab(hash);
    }
  }, [searchParams]);

  const updateHash = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <div className="min-h-screen bg-bg-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight mb-4">
            Legal & Policies
          </h1>
          <p className="text-xl text-text-dark/70">
            Clear, transparent terms to protect our community and your experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: 'refund', label: 'Refund Policy', icon: AlertTriangle },
            { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
            { id: 'terms', label: 'Terms & Conditions', icon: FileText },
            { id: 'conduct', label: 'Code of Conduct', icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => updateHash(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all text-sm ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-text-dark/70 hover:bg-pastel-blue border border-gray-200'
              }`}
            >
              <tab.icon className="w-4 h-4" /> {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area Bento Box */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[500px]">
          
          {activeTab === 'refund' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex gap-4 mb-8">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-red-800 mb-2">Strict No Refund Policy</h2>
                  <p className="text-red-900/80 font-medium leading-relaxed">
                    Once payment is made for the Fertility Yoga & Wellness Program, <strong>NO refunds will be issued under any circumstances.</strong>
                  </p>
                </div>
              </div>
              
              <h3 className="text-lg font-bold">This policy applies to (but is not limited to):</h3>
              <ul className="list-disc list-inside space-y-2 text-text-dark/80 ml-4">
                <li>Personal reasons or change of mind</li>
                <li>Schedule conflicts or inability to attend classes</li>
                <li>Medical reasons or travel</li>
                <li>Technical issues on the student's end</li>
              </ul>

              <h3 className="text-lg font-bold mt-8">Why this policy?</h3>
              <p className="text-text-dark/80 leading-relaxed">
                We strictly limit our batch sizes to ensure quality. When you register, your seat blocks another prospective student from joining. Because all program details, timings, and FAQs are clearly stated prior to registration, we expect students to commit fully once they enroll.
              </p>

              <div className="bg-pastel-orange p-6 rounded-2xl mt-8 border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2">Transfer Policy</h4>
                <p className="text-orange-900/80">Memberships are strictly non-transferable and cannot be gifted or handed over to another person.</p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-in fade-in duration-300 text-text-dark/80 leading-relaxed">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Privacy Policy</h2>
              <p>Your privacy is of utmost importance to us. This policy outlines how we handle your personal information.</p>
              
              <h3 className="text-lg font-bold text-text-dark mt-6">Data Collection</h3>
              <p>We collect essential information necessary to provide you with the best experience, including your name, email, phone number, and optional health data you choose to provide during registration.</p>
              
              <h3 className="text-lg font-bold text-text-dark mt-6">How We Use Your Data</h3>
              <p>Your data is used solely for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Processing your enrollment via Razorpay</li>
                <li>Sending you program access links and Welcome Kits</li>
                <li>Adding you to the official WhatsApp broadcast/group</li>
                <li>Understanding your health context for yoga modifications</li>
              </ul>

              <h3 className="text-lg font-bold text-text-dark mt-6">Data Security</h3>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Payment processing is handled entirely by Razorpay using industry-standard encryption.</p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6 animate-in fade-in duration-300 text-text-dark/80 leading-relaxed">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Terms & Conditions</h2>
              
              <ol className="list-decimal list-outside space-y-6 ml-6">
                <li>
                  <strong className="text-text-dark">Eligibility:</strong> You must be at least 18 years old to participate. This program is for educational and wellness purposes only.
                </li>
                <li>
                  <strong className="text-text-dark">Medical Disclaimer:</strong> This program is not a substitute for medical advice, diagnosis, or treatment. Always seek the advice of your physician regarding a medical condition or before starting any new wellness program.
                </li>
                <li>
                  <strong className="text-text-dark">Payment & Refunds:</strong> You agree to pay the stated fee of ₹1499/month. You acknowledge and accept the Strict No Refund Policy.
                </li>
                <li>
                  <strong className="text-text-dark">Communication Boundaries:</strong> The provided WhatsApp group is the ONLY official channel of communication. You agree not to send personal calls or direct messages to Dr. Madhavi's private number.
                </li>
                <li>
                  <strong className="text-text-dark">Intellectual Property:</strong> All materials provided (PDFs, videos, class routines) are the intellectual property of Dr. Madhavi Soriya and cannot be distributed, copied, or sold.
                </li>
              </ol>
            </div>
          )}

          {activeTab === 'conduct' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Code of Conduct</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-pastel-blue/30 p-6 rounded-2xl border border-blue-100">
                  <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <VideoIcon className="w-5 h-5" /> Live Classes (Zoom)
                  </h3>
                  <ul className="space-y-3 text-blue-900/80 text-sm font-medium">
                    <li>• Keep your camera ON to ensure correct posture alignment.</li>
                    <li>• Keep your microphone muted unless asked to speak.</li>
                    <li>• Join the meeting 5 minutes early.</li>
                    <li>• No recording or screen capturing allowed.</li>
                    <li>• Ensure a quiet, distraction-free space.</li>
                  </ul>
                </div>
                
                <div className="bg-pastel-green/30 p-6 rounded-2xl border border-emerald-100">
                  <h3 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5" /> WhatsApp Group
                  </h3>
                  <ul className="space-y-3 text-emerald-900/80 text-sm font-medium">
                    <li>• Keep discussions strictly related to the class.</li>
                    <li>• No forwarding of unrelated messages or spam.</li>
                    <li>• Respect Dr. Madhavi's designated 6 PM response time.</li>
                    <li>• Be supportive and kind to other members.</li>
                    <li>• Do not share the group invite link with outsiders.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-100 rounded-xl text-sm font-bold text-center text-text-dark/70">
                Violations of this Code of Conduct may result in immediate removal from the program without refund.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// Simple icons for the code of conduct
function VideoIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
}
function PhoneIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
