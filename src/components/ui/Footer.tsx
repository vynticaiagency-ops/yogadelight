import React from "react";
import Link from "next/link";
import { Heart, Mail, ShieldAlert } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white border-t border-primary/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="p-2 rounded-full bg-white/10 text-secondary">
                <Heart className="h-5 w-5 fill-current" />
              </span>
              <span className="font-serif text-xl font-bold tracking-wide">
                Yoga <span className="text-secondary">Delight</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
              Founded by Dr. Madhavi Soriya, we guide women toward healthier pregnancies, hormonal balance, fertility wellness, and holistic health through physiotherapy-based yoga.
            </p>
            <div className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200">
              <Mail className="h-4 w-4 text-secondary" />
              <a href="mailto:yogadelight30@gmail.com" className="text-sm font-sans underline">
                yogadelight30@gmail.com
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-secondary">Our Programs</h4>
            <ul className="space-y-3 text-sm font-sans text-white/70">
              <li>
                <Link href="/programs/prenatal-yoga" className="hover:text-white transition-colors duration-200">
                  Prenatal Yoga & Garbhasanskar
                </Link>
              </li>
              <li>
                <Link href="/programs/fertility-yoga" className="hover:text-white transition-colors duration-200">
                  Fertility Yoga & Wellness
                </Link>
              </li>
              <li>
                <Link href="/free-consultation" className="hover:text-white transition-colors duration-200">
                  Free Assessment Session
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition-colors duration-200">
                  Join Program Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-3 text-sm font-sans text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Dr. Madhavi
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors duration-200">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors duration-200">
                  Frequently Asked FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-200">
                  Wellness Blog Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-secondary">Legal Policies</h4>
            <ul className="space-y-3 text-sm font-sans text-white/70">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors duration-200">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/medical-disclaimer" className="hover:text-white transition-colors duration-200">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/consent-policy" className="hover:text-white transition-colors duration-200">
                  Consent Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Board */}
        <div className="border-t border-white/10 pt-6 pb-6 flex items-start space-x-3 text-xs text-white/60 font-sans leading-relaxed">
          <ShieldAlert className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
          <p>
            <strong>Medical Notice:</strong> The information provided on this website and during our classes is intended for general physical wellness guidance. It is not a substitute for professional gynecological or obstetric diagnosis, advice, or treatment. Always consult your obstetrician or doctor before performing any exercises or starting our yoga program.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans">
          <p>&copy; {currentYear} Yoga Delight. All rights reserved.</p>
          <p>Designed with Care for Motherhood &amp; Wellness</p>
        </div>
      </div>
    </footer>
  );
};
