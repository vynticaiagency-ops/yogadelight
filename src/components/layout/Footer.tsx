import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 text-white">Yoga Delight</h3>
          <p className="text-white/80 max-w-sm">
            Fertility Yoga & Wellness Program by Dr. Madhavi Soriya. Your natural path to healthy conception & wellness.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white/90 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/program" className="text-white/70 hover:text-white transition-colors">Program</Link></li>
            <li><Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Dr. Madhavi</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white/90 mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/policies#refund" className="text-white/70 hover:text-white transition-colors">Refund Policy</Link></li>
            <li><Link href="/policies#terms" className="text-white/70 hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/policies#privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div>
          &copy; {new Date().getFullYear()} Dr. Madhavi Soriya. All rights reserved.
        </div>
        <div>
          Designed & Developed by <a href="https://www.vynticai.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 font-bold transition-colors">Vyntic AI</a>
        </div>
      </div>
    </footer>
  );
}
