'use client';

import { CheckCircle2, MessageCircle, Download, Video, Calendar, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    // In a real app, this token would be verified via an API call
    if (token) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [token]);

  if (isValid === null) {
    return <div className="min-h-screen flex items-center justify-center">Verifying...</div>;
  }

  if (isValid === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold font-heading text-text-dark mb-4">Access Denied</h1>
        <p className="text-text-dark/70">Invalid or missing payment token.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Success Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex justify-center mb-4"
          >
            <CheckCircle2 className="w-20 h-20 text-success" />
          </motion.div>
          <h1 className="text-3xl font-bold font-heading text-text-dark mb-2">Payment Successful!</h1>
          <p className="text-xl text-primary font-medium mb-6">Welcome to Yoga Delight!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-text-dark/70 border-t pt-6">
            <span><strong>Amount:</strong> ₹1499</span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Email:</strong> sent to registered email</span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Payment ID:</strong> RZP_SIMULATED</span>
          </div>
        </motion.div>

        {/* WhatsApp Group - Prominent */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#E8F5E9] p-8 rounded-2xl shadow-sm border-2 border-success/30 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-warning text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Link expires in 24h
          </div>
          <h2 className="text-2xl font-bold text-text-dark mb-2 flex items-center justify-center gap-2">
            <MessageCircle className="w-8 h-8 text-success" /> Join WhatsApp Group
          </h2>
          <p className="text-text-dark/80 mb-6 max-w-lg mx-auto">
            This is our ONLY communication channel. Dr. Madhavi responds to queries daily at 6 PM.
          </p>
          <a 
            href="https://chat.whatsapp.com/YOUR_INVITE_LINK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-success hover:bg-green-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              📲 JOIN GROUP NOW
            </motion.button>
          </a>
          <ul className="mt-6 text-sm text-text-dark/70 space-y-1">
            <li>• Class-related queries only</li>
            <li>• No personal messages to Dr. Madhavi</li>
            <li>• Be supportive and respectful</li>
          </ul>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Program Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20"
          >
            <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
              <Video className="w-5 h-5 text-primary" /> Class Link
            </h3>
            <ul className="space-y-3 text-text-dark/80 mb-6">
              <li><strong>Time:</strong> 4:00 PM – 5:00 PM IST</li>
              <li><strong>Language:</strong> Hindi</li>
              <li><strong>Platform:</strong> Zoom</li>
            </ul>
            <div className="p-3 bg-bg-light rounded-lg text-sm mb-4 border break-all">
              https://zoom.us/j/123456789?pwd=dummy
            </div>
            <button className="w-full py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors">
              Copy Link
            </button>
          </motion.div>

          {/* Welcome Kit */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20"
          >
            <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-primary" /> Welcome Kit
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Welcome Guide PDF', size: '2.1 MB' },
                { name: 'Diet Guidance PDF', size: '1.4 MB' },
                { name: 'Class Schedule', size: '800 KB' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border hover:border-primary/50 transition-colors group cursor-pointer">
                  <div>
                    <div className="font-medium text-sm text-text-dark group-hover:text-primary transition-colors">{item.name}</div>
                    <div className="text-xs text-text-dark/50">{item.size}</div>
                  </div>
                  <Download className="w-4 h-4 text-text-dark/40 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20"
        >
          <h3 className="text-xl font-bold font-heading mb-6">Your Next Steps</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">1</div>
              <div>
                <h4 className="font-bold">TODAY → Join WhatsApp group</h4>
                <p className="text-sm text-text-dark/70">Click the green button above to join our community.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">2</div>
              <div>
                <h4 className="font-bold">BEFORE 4 PM → Install Zoom</h4>
                <p className="text-sm text-text-dark/70">Ensure you have the latest Zoom client installed on your device.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">3</div>
              <div>
                <h4 className="font-bold">AT 4 PM → Join class 5 min early</h4>
                <p className="text-sm text-text-dark/70">Use the class link provided above.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-warning/10 rounded-xl border border-warning/20">
            <h4 className="font-bold text-warning flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" /> Important Reminders
            </h4>
            <ul className="text-sm text-text-dark/80 space-y-1">
              <li>• No personal calls/messages to Dr. Madhavi</li>
              <li>• All communication through WhatsApp group only</li>
              <li>• No refund policy applies</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
