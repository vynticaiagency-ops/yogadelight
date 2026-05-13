import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bg-light/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
          Yoga Delight
        </Link>
        <nav className="hidden md:flex gap-8 text-text-dark font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/program" className="hover:text-primary transition-colors">Program</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>
        <Link 
          href="/register" 
          className="px-6 py-2.5 bg-primary text-white rounded-full font-semibold shadow-md hover:bg-primary-dark hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          Register Now →
        </Link>
      </div>
    </header>
  );
}
