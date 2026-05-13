'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, PlayCircle, Users, Star, FileText, Heart, Activity, Baby } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Program',
    href: '/program',
    mega: (
      <div className="grid grid-cols-2 gap-8 w-[600px] p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-pastel-blue rounded-lg text-blue-600"><Activity className="w-5 h-5" /></div>
            <div>
              <Link href="/program" className="font-bold text-text-dark hover:text-primary transition-colors block mb-1">Fertility Yoga</Link>
              <p className="text-sm text-text-dark/70">Specialized asanas to increase pelvic blood flow.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-pastel-purple rounded-lg text-purple-600"><Baby className="w-5 h-5" /></div>
            <div>
              <Link href="/prenatal" className="font-bold text-text-dark hover:text-primary transition-colors block mb-1">Prenatal Yoga</Link>
              <p className="text-sm text-text-dark/70">Healthy pregnancy & Garbhasanskar.</p>
            </div>
          </div>
        </div>
        <div className="bg-bg-light p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Our Programs</span>
            <h4 className="font-bold text-text-dark mb-2">Holistic Wellness</h4>
            <p className="text-sm text-text-dark/70 mb-4">Choose the program that fits your current life stage.</p>
          </div>
          <Link href="/register" className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
            Quick Register <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  },
  {
    name: 'About',
    href: '/about',
    mega: (
      <div className="flex gap-6 w-[500px] p-6">
        <div className="flex-1 space-y-4">
          <h4 className="font-bold text-text-dark border-b pb-2">Meet the Expert</h4>
          <Link href="/about" className="block text-sm font-medium text-text-dark/80 hover:text-primary">Dr. Madhavi's Story</Link>
          <Link href="/about" className="block text-sm font-medium text-text-dark/80 hover:text-primary">Qualifications & Approach</Link>
          <Link href="/about" className="block text-sm font-medium text-text-dark/80 hover:text-primary">Why Physiotherapy Matters</Link>
        </div>
        <div className="w-[200px] bg-pastel-purple rounded-xl p-4 flex flex-col items-center text-center justify-center border border-purple-100">
          <Users className="w-8 h-8 text-purple-600 mb-2" />
          <div className="text-2xl font-black text-text-dark">500+</div>
          <div className="text-xs font-bold text-text-dark/70 uppercase tracking-wide">Women Guided</div>
        </div>
      </div>
    )
  },
  { name: 'Pricing', href: '/pricing' },
  {
    name: 'Resources',
    href: '#',
    mega: (
      <div className="grid grid-cols-2 gap-4 w-[400px] p-6">
        <div className="space-y-4 border-r border-gray-100 pr-4">
          <Link href="/faq" className="flex items-center gap-2 text-sm font-medium text-text-dark/80 hover:text-primary">
            <div className="p-1.5 bg-gray-50 rounded-md"><Star className="w-4 h-4" /></div> FAQ
          </Link>
          <Link href="/about" className="flex items-center gap-2 text-sm font-medium text-text-dark/80 hover:text-primary">
            <div className="p-1.5 bg-gray-50 rounded-md"><PlayCircle className="w-4 h-4" /></div> Testimonials
          </Link>
        </div>
        <div className="space-y-4 pl-2">
          <Link href="/policies#refund" className="flex items-center gap-2 text-sm font-medium text-text-dark/80 hover:text-primary">
            <div className="p-1.5 bg-red-50 text-red-500 rounded-md"><FileText className="w-4 h-4" /></div> No Refund Policy
          </Link>
          <Link href="/policies" className="flex items-center gap-2 text-sm font-medium text-text-dark/80 hover:text-primary">
            <div className="p-1.5 bg-gray-50 rounded-md"><FileText className="w-4 h-4" /></div> All Policies
          </Link>
        </div>
      </div>
    )
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMega(null);
    }, 150); // Small delay before closing for smooth diagonal movement
  };

  // Hide sticky CTA on register and thank-you pages
  const hideStickyCTA = pathname === '/register' || pathname === '/thank-you';

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 py-3' : 'bg-bg-light py-5'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col relative z-10 group">
            <span className="text-2xl font-black text-primary tracking-tight group-hover:text-primary-dark transition-colors">
              Yoga Delight
            </span>
            <span className="text-[10px] font-bold text-text-dark/50 uppercase tracking-widest -mt-1 ml-0.5">
              By Dr. Madhavi
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 relative">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
              >
                <Link 
                  href={item.href}
                  className={`flex items-center gap-1 font-bold text-sm transition-colors py-2 ${
                    activeMega === item.name || pathname === item.href ? 'text-primary' : 'text-text-dark hover:text-primary'
                  }`}
                >
                  {item.name}
                  {item.mega && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMega === item.name ? 'rotate-180 text-primary' : 'text-gray-400'}`} />}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.mega && (
                  <AnimatePresence>
                    {activeMega === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                      >
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
                          {/* Triangle pointer */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                          <div className="relative z-10 bg-white rounded-3xl">
                            {item.mega}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/register" 
              className="hidden lg:inline-flex px-6 py-2.5 bg-primary text-white rounded-full font-bold shadow-md hover:bg-primary-dark hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Register Now →
            </Link>
            
            <button 
              className="lg:hidden p-2 text-text-dark hover:bg-gray-100 rounded-full transition-colors relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-40 flex flex-col lg:hidden border-l border-gray-100"
              >
                <div className="p-6 pt-24 overflow-y-auto flex-1">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <div key={item.name} className="border-b border-gray-50 last:border-0">
                        {item.mega ? (
                          <button
                            onClick={() => setMobileAccordion(mobileAccordion === item.name ? null : item.name)}
                            className="w-full flex items-center justify-between py-4 font-bold text-lg text-text-dark"
                          >
                            {item.name}
                            <ChevronDown className={`w-5 h-5 transition-transform ${mobileAccordion === item.name ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                          </button>
                        ) : (
                          <Link href={item.href} className="block py-4 font-bold text-lg text-text-dark">
                            {item.name}
                          </Link>
                        )}
                        
                        {/* Mobile Accordion Content */}
                        <AnimatePresence>
                          {item.mega && mobileAccordion === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-4 space-y-3 border-l-2 border-primary/20 ml-2">
                                {/* Simplistic mapping for mobile links to save space */}
                                {item.name === 'Program' && (
                                  <>
                                    <Link href="/program" className="block text-text-dark/80 font-medium py-1">Fertility Yoga</Link>
                                    <Link href="/program" className="block text-text-dark/80 font-medium py-1">Stress Management</Link>
                                    <div className="bg-primary/5 p-3 rounded-xl mt-2">
                                      <div className="text-xs font-bold text-primary">LIVE DAILY</div>
                                      <div className="font-bold text-text-dark text-sm">4-5 PM IST</div>
                                    </div>
                                  </>
                                )}
                                {item.name === 'About' && (
                                  <>
                                    <Link href="/about" className="block text-text-dark/80 font-medium py-1">Dr. Madhavi's Story</Link>
                                    <Link href="/about" className="block text-text-dark/80 font-medium py-1">Qualifications</Link>
                                    <div className="flex items-center gap-2 mt-2 text-primary font-bold">
                                      <Users className="w-4 h-4"/> 500+ Women Guided
                                    </div>
                                  </>
                                )}
                                {item.name === 'Resources' && (
                                  <>
                                    <Link href="/faq" className="block text-text-dark/80 font-medium py-1">FAQ</Link>
                                    <Link href="/policies" className="block text-text-dark/80 font-medium py-1">Policies</Link>
                                  </>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-100 bg-bg-light space-y-4">
                  <Link 
                    href="/register" 
                    className="block w-full py-4 bg-primary text-white text-center rounded-2xl font-bold shadow-md"
                  >
                    Register Now
                  </Link>
                  <div className="text-center text-xs font-bold text-text-dark/50">
                    Designed by <a href="https://www.vynticai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vyntic AI</a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-24" />

      {/* Sticky Bottom Mobile CTA (Only visible on mobile, hidden on checkout flows) */}
      {!hideStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-30 lg:hidden pb-safe">
          <Link 
            href="/register" 
            className="flex items-center justify-between w-full py-3 px-6 bg-primary text-white rounded-full font-bold shadow-lg shadow-indigo-500/25"
          >
            <span>Register for Program</span>
            <span className="flex items-center gap-2">₹1499 <ArrowRight className="w-4 h-4" /></span>
          </Link>
        </div>
      )}
    </>
  );
}
