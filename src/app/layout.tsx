import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yogadelight.in"),
  title: {
    template: "%s | Yoga Delight - Dr. Madhavi Soriya",
    default: "Yoga Delight | Prenatal Yoga, Garbhasanskar & Fertility Wellness",
  },
  description:
    "Expert-led prenatal yoga, Garbhasanskar, and fertility wellness programs guided by Dr. Madhavi Soriya (Physiotherapist & Women's Coach) to help women experience healthy pregnancies.",
  keywords: [
    "Prenatal Yoga India",
    "Garbhasanskar Online",
    "Fertility Yoga",
    "Pregnancy Exercises",
    "Dr. Madhavi Soriya",
    "Physiotherapy Pregnancy",
    "Hormonal Balance",
    "PCOD Yoga",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yoga Delight | Prenatal & Fertility Wellness Programs",
    description:
      "Nurturing healthy pregnancies, fertility wellness, and holistic health through expert physiotherapy-led yoga programs.",
    url: "https://yogadelight.in",
    siteName: "Yoga Delight",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Delight - Dr. Madhavi Soriya",
    description: "Physiotherapy-led prenatal yoga and fertility wellness programs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data for Organization and Person
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://yogadelight.in/#organization",
        "name": "Yoga Delight",
        "url": "https://yogadelight.in",
        "logo": "https://yogadelight.in/logo.png",
        "email": "yogadelight30@gmail.com",
        "description": "Premium wellness clinic offering Prenatal Yoga, Garbhasanskar, and Fertility Yoga programs guided by physiotherapist Dr. Madhavi Soriya.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Person",
        "@id": "https://yogadelight.in/#person",
        "name": "Dr. Madhavi Soriya",
        "jobTitle": "Physiotherapist, Women's Wellness Coach & Prenatal Yoga Expert",
        "worksFor": {
          "@id": "https://yogadelight.in/#organization"
        },
        "description": "Dr. Madhavi Soriya is a Physiotherapist (B.P.T) and Women's Wellness Coach with 5+ years of experience guiding 500+ women through pregnancy and fertility recovery.",
        "sameAs": []
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
