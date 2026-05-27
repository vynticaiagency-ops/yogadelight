export interface Testimonial {
  id: string;
  name: string;
  age: number;
  category: 'pregnancy' | 'fertility' | 'wellness';
  quote: string;
  detail: string;
  location: string;
  rating: number;
  program: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "preg-1",
    name: "Aarti Sharma",
    age: 29,
    category: "pregnancy",
    quote: "Normal delivery made possible with Dr. Madhavi's guidelines!",
    detail: "During my second trimester, I was diagnosed with gestational diabetes and felt extremely anxious. Dr. Madhavi Soriya guided me with physiotherapy-based yoga poses, breathing techniques, and customized exercises. Her 9th-month labour preparation sessions and Garbhasanskar teachings gave me so much mental strength. I managed to control my sugar levels and had a smooth normal delivery. I cannot thank Yoga Delight enough!",
    location: "Mumbai, India",
    rating: 5,
    program: "Prenatal Yoga & Garbhasanskar Program"
  },
  {
    id: "preg-2",
    name: "Priyanka Patel",
    age: 31,
    category: "pregnancy",
    quote: "A beautiful journey of connection through Garbha Samvad.",
    detail: "I joined the Prenatal program in my 4th month. The yoga sessions helped with my back pain, but the absolute highlight was the Garbha Samvad and baby brain development activities. Connecting with my baby in the womb through mantra chanting and affirmations made pregnancy a joyful experience rather than a medical one. Now, my newborn responds to the same mantras we chanted!",
    location: "Ahmedabad, India",
    rating: 5,
    program: "Prenatal Yoga & Garbhasanskar Program"
  },
  {
    id: "preg-3",
    name: "Neha Gupta",
    age: 28,
    category: "pregnancy",
    quote: "Highly recommended for all modern moms-to-be.",
    detail: "As a working corporate professional, managing work stress and pregnancy changes was tough. The evening prenatal class at 5:00 PM became my sanctuary. The breathing techniques for labour taught by Dr. Madhavi were a lifesaver during my active labour. It kept my panic under control, and the doctors were impressed by how relaxed I was.",
    location: "Delhi NCR, India",
    rating: 5,
    program: "Prenatal Yoga & Garbhasanskar Program"
  },
  {
    id: "preg-4",
    name: "Riddhi Verma",
    age: 33,
    category: "pregnancy",
    quote: "Cured my pelvic girdle pain completely.",
    detail: "Dr. Madhavi's credentials as a physiotherapist shine in her classes. I was suffering from severe pelvic girdle pain in my third trimester, making it painful to walk. She modified all poses for me and gave me specific pelvic stabilization exercises. In just two weeks, the pain subsided and I felt active and strong again.",
    location: "Jaipur, India",
    rating: 5,
    program: "Prenatal Yoga & Garbhasanskar Program"
  },
  {
    id: "preg-5",
    name: "Sneha Deshmukh",
    age: 30,
    category: "pregnancy",
    quote: "Amazing weekend activities and Garbhasanskar guidelines.",
    detail: "The 3-month package was the best investment I made. Not only did the daily yoga build my stamina, but the weekend activities on nutrition, baby brain development, and partner sessions were incredibly informative. My husband also joined the partner yoga and felt fully involved in the journey.",
    location: "Pune, India",
    rating: 5,
    program: "Prenatal Yoga & Garbhasanskar Program"
  },
  {
    id: "fert-1",
    name: "Meera Iyer",
    age: 34,
    category: "fertility",
    quote: "Conceived naturally after 3 years of trying!",
    detail: "My husband and I were trying for a baby for over 3 years and had failed IVF attempts due to high stress and poor ovarian reserve. Dr. Madhavi's Fertility Yoga & Wellness program was a turning point. The daily yoga, specific pranayams for hormonal balance, and deep relaxation practices completely calmed my nervous system. I conceived naturally within 4 months of joining. Truly a miracle!",
    location: "Bengaluru, India",
    rating: 5,
    program: "Fertility Yoga & Wellness Program"
  },
  {
    id: "fert-2",
    name: "Anjali Saxena",
    age: 29,
    category: "fertility",
    quote: "Regulated my PCOD and conceived in 5 months.",
    detail: "I had irregular periods for years because of PCOD, and was told conceiving would be difficult. Under Dr. Madhavi's guidance, the fertility-specific flow, diet modifications, and breathing routines helped regulate my menstrual cycle. My scan showed improved lining thickness, and shortly after, I got my positive test. Her support was constant throughout.",
    location: "Lucknow, India",
    rating: 5,
    program: "Fertility Yoga & Wellness Program"
  },
  {
    id: "fert-3",
    name: "Shalini Reddy",
    age: 32,
    category: "fertility",
    quote: "Helped me prepare physically and mentally for IVF.",
    detail: "Before my next IVF cycle, I wanted to ensure my body was in the best possible shape. This program helped improve blood circulation to my pelvic area, reduced stress hormone cortisol, and helped me build thick uterine lining. The cycle was successful, and I am now 6 months pregnant. I continued with the prenatal classes here too!",
    location: "Hyderabad, India",
    rating: 5,
    program: "Fertility Yoga & Wellness Program"
  },
  {
    id: "fert-4",
    name: "Kiran Joshi",
    age: 35,
    category: "fertility",
    quote: "A sanctuary for emotional healing during the fertility struggle.",
    detail: "The fertility journey can be very lonely and emotionally taxing. The support group aspect of Dr. Madhavi's program, combined with meditation and positive affirmations, healed me from within. I stopped looking at my body as 'broken'. That shift in mindset, along with pelvic opening yoga, helped me conceive naturally.",
    location: "Indore, India",
    rating: 5,
    program: "Fertility Yoga & Wellness Program"
  },
  {
    id: "fert-5",
    name: "Tanvi Mehta",
    age: 31,
    category: "fertility",
    quote: "Balanced my thyroid and hormone levels.",
    detail: "My hormones were completely imbalanced, and my doctor pointed out that high stress was a key factor. Dr. Madhavi's personalized attention, stress-release techniques, and specific asanas for thyroid stimulation worked wonders. My blood reports showed normal TSH and LH levels after 3 months, and my fertility doctor was amazed. I got pregnant shortly after.",
    location: "Surat, India",
    rating: 5,
    program: "Fertility Yoga & Wellness Program"
  },
  {
    id: "well-1",
    name: "Divya Nair",
    age: 27,
    category: "wellness",
    quote: "Reclaimed my energy and hormonal health.",
    detail: "I joined the wellness program for severe hormonal imbalance and chronic fatigue. Dr. Madhavi's combination of physiotherapy alignments and restorative yoga postures completely transformed my energy. I feel light, my skin has cleared up, and I sleep much better. Her sessions are a must-have for every woman.",
    location: "Kochi, India",
    rating: 5,
    program: "Holistic Women's Wellness Coaching"
  },
  {
    id: "well-2",
    name: "Rashmi Mishra",
    age: 38,
    category: "wellness",
    quote: "Managed my perimenopause symptoms beautifully.",
    detail: "Entering my late thirties, I was experiencing mood swings, hot flashes, and extreme anxiety. The breathwork and somatic movement guidance from Dr. Madhavi helped stabilize my nervous system. She has a deep medical understanding of a woman's body, which makes her guidance superior to any standard yoga class.",
    location: "Bhopal, India",
    rating: 5,
    program: "Holistic Women's Wellness Coaching"
  },
  {
    id: "well-3",
    name: "Pooja Choudhary",
    age: 26,
    category: "wellness",
    quote: "Helped me recover postpartum and regain core strength.",
    detail: "Three months after my delivery, I had severe diastasis recti (ab separation) and backache. Dr. Madhavi's physiotherapy-led postnatal exercises helped me heal my core safely. She taught me what exercises to avoid and how to rebuild muscle tone. My back pain is completely gone.",
    location: "Patna, India",
    rating: 5,
    program: "Postnatal Core & Wellness Program"
  },
  {
    id: "well-4",
    name: "Sunita Rao",
    age: 42,
    category: "wellness",
    quote: "Found peace, mental clarity, and strength.",
    detail: "Being a mother of two and working a busy job, I had zero time for self-care. The wellness and meditation techniques taught in the program gave me tools to manage daily stress. The morning pranayams leave me energized for the whole day. Dr. Madhavi is an exceptional coach who genuinely cares.",
    location: "Chennai, India",
    rating: 5,
    program: "Holistic Women's Wellness Coaching"
  },
  {
    id: "well-5",
    name: "Kriti Sen",
    age: 30,
    category: "wellness",
    quote: "The best physiotherapy-based women's coaching in India.",
    detail: "I had chronic lower back pain from sitting long hours at work. Dr. Madhavi diagnosed my posture issues instantly. Her targeted stretching and pelvic opening yoga postures helped relieve the compression in my lower spine. Her physiotherapist background makes the classes extremely safe and customized.",
    location: "Kolkata, India",
    rating: 5,
    program: "Holistic Women's Wellness Coaching"
  }
];
