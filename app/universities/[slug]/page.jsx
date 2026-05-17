"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const universities = {
  "carol-davila-university": {
    name: "Carol Davila University",
    country: "Romania",
    ranking: "#1 Medical University in Romania",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1800&auto=format&fit=crop",
    tuition: "€7,500 / year",
    duration: "6 Years",
    intake: "September",
    eligibility:
      "High school completion with Biology & Chemistry, passport, academic transcripts.",
    scholarships:
      "Selected merit scholarships and university grants available.",
    programs: [
      "MBBS",
      "Dentistry",
      "Pharmacy",
      "Healthcare Sciences",
    ],
    campus:
      "Modern medical laboratories, research facilities, student communities, and international learning environment.",
    careers:
      "Medical Practice, Research, Hospitals, Healthcare Management, International Licensing.",
    reviews: [
      "Excellent faculty and affordable tuition compared to Western Europe.",
      "Strong international student community and practical training.",
      "Modern facilities and globally recognized medical degree.",
    ],
  },

  "technical-university-of-munich": {
    name: "Technical University of Munich",
    country: "Germany",
    ranking: "Top Engineering University in Europe",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1800&auto=format&fit=crop",
    tuition: "€0 - €4,000 / year",
    duration: "2 - 4 Years",
    intake: "October & April",
    eligibility:
      "Strong academic profile, English/German proficiency, SOP, and transcripts.",
    scholarships:
      "DAAD scholarships, research assistantships, and university funding.",
    programs: [
      "Engineering",
      "Artificial Intelligence",
      "Computer Science",
      "Robotics",
    ],
    campus:
      "Advanced research labs, innovation hubs, global student culture, and industry collaboration.",
    careers:
      "Automotive, AI, Robotics, Software Engineering, Research & Development.",
    reviews: [
      "One of the best engineering universities globally.",
      "Excellent research opportunities and innovation ecosystem.",
      "Strong industry connections and internship programs.",
    ],
  },

  "national-university-of-singapore": {
    name: "National University of Singapore",
    country: "Singapore",
    ranking: "Top University in Asia",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1800&auto=format&fit=crop",
    tuition: "$12,000 - $30,000 / year",
    duration: "3 - 4 Years",
    intake: "August & January",
    eligibility:
      "Excellent academics, English proficiency, recommendation letters, and SOP.",
    scholarships:
      "Government scholarships, ASEAN scholarships, and university grants.",
    programs: [
      "Business",
      "Computer Science",
      "Finance",
      "Artificial Intelligence",
    ],
    campus:
      "Modern smart campus with global networking opportunities and advanced research infrastructure.",
    careers:
      "Finance, AI, Technology, Business Management, Startups, Consulting.",
    reviews: [
      "Highly ranked globally with strong career placements.",
      "Beautiful campus and excellent international exposure.",
      "Outstanding faculty and modern facilities.",
    ],
  },

"jain-online": {
  name: "JAIN Online",
  country: "India",
  ranking: "Top Online University in India",
  image:
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1800&auto=format&fit=crop",
  tuition: "₹40,000 - ₹150,000 / year",
  duration: "2 - 3 Years",
  intake: "January, April & September",
  eligibility:
    "12th pass or bachelor degree depending on the program.",
  scholarships:
    "Merit scholarships and flexible EMI payment options available.",
  programs: [
    "MBA",
    "BBA",
    "BCA",
    "MCA",
  ],
  campus:
    "Flexible online learning platform with AI-enabled education and global access.",
  careers:
    "Business Management, IT, Marketing, HR, Data Analytics, and Entrepreneurship.",
  reviews: [
    "Excellent flexibility for working professionals.",
    "Industry-oriented curriculum and modern LMS.",
    "Recognized online degrees with career support.",
  ],
},

"yenepoya-online": {
  name: "Yenepoya Online",
  country: "India",
  ranking: "Leading Flexible Online Learning University",
  image:
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1800&auto=format&fit=crop",
  tuition: "₹35,000 - ₹120,000 / year",
  duration: "2 - 3 Years",
  intake: "January & July",
  eligibility:
    "Academic transcripts and basic eligibility depending on program.",
  scholarships:
    "Special scholarships and affordable payment options available.",
  programs: [
    "MBA",
    "BCom",
    "BCA",
    "MCA",
  ],
  campus:
    "Modern online education ecosystem with flexible digital classrooms.",
  careers:
    "IT, Finance, Marketing, Healthcare Administration, and Management.",
  reviews: [
    "Affordable and flexible online education.",
    "Supportive faculty and simple admission process.",
    "Great option for distance learners.",
  ],
},

"heidelberg-university": {
  name: "Heidelberg University",
  country: "Germany",
  ranking: "Historic Global Institution",
  image:
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1800&auto=format&fit=crop",
  tuition: "€1,500 - €5,000 / year",
  duration: "3 - 5 Years",
  intake: "October & April",
  eligibility:
    "Academic transcripts, English/German proficiency, and SOP.",
  scholarships:
    "DAAD scholarships and international research grants available.",
  programs: [
    "Medicine",
    "Research",
    "Biotech",
  ],
  campus:
    "Historic campus with advanced research and international exposure.",
  careers:
    "Research, Biotechnology, Healthcare, and Academic Leadership.",
  reviews: [
    "Prestigious and historic university.",
    "Strong research opportunities.",
    "Excellent international reputation.",
  ],
},

"chulalongkorn-university": {
  name: "Chulalongkorn University",
  country: "Thailand",
  ranking: "Top University in Thailand",
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800&auto=format&fit=crop",
  tuition: "$3,000 - $10,000 / year",
  duration: "3 - 4 Years",
  intake: "January & August",
  eligibility:
    "Academic transcripts and English proficiency.",
  scholarships:
    "Selected international student scholarships available.",
  programs: [
    "Business",
    "Hospitality",
    "IT",
  ],
  campus:
    "Modern campus with international student opportunities.",
  careers:
    "Business, Tourism, Hospitality, and IT.",
  reviews: [
    "Affordable international education.",
    "Friendly student environment.",
    "Strong Asian university reputation.",
  ],
},

"tsinghua-university": {
  name: "Tsinghua University",
  country: "China",
  ranking: "World Leading Innovation Hub",
  image:
    "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1800&auto=format&fit=crop",
  tuition: "$4,000 - $12,000 / year",
  duration: "4 Years",
  intake: "March & September",
  eligibility:
    "Strong academic background and English proficiency.",
  scholarships:
    "Chinese Government Scholarships available.",
  programs: [
    "AI",
    "Engineering",
    "Technology",
  ],
  campus:
    "Advanced innovation labs and world-class technology ecosystem.",
  careers:
    "Engineering, AI, Robotics, and Research.",
  reviews: [
    "One of Asia’s best universities.",
    "Excellent AI and engineering programs.",
    "Strong global recognition.",
  ],
},


};

export default function UniversityPage({ params }) {
  const resolvedParams = use(params);
  const university = universities[resolvedParams.slug];

  if (!university) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* GLOWS */}
      <div className="absolute left-0 top-40 h-[350px] w-[350px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative px-5 pb-16 pt-40 md:px-6 md:pb-24 md:pt-44">
        <div className="container-custom">
          {/* BACK */}
          <div className="mb-14">
            <Link
              href="/universities"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#111111]"
            >
              ← Back to Universities
            </Link>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <Reveal>
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                  Study at {university.name}
                </p>

                <h1 className="max-w-5xl break-words text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
                  {university.name}
                </h1>

                <p className="mt-8 text-lg leading-9 text-white/65">
                  {university.ranking}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  {university.programs.map((program) => (
                    <span
                      key={program}
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* IMAGE */}
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={university.image}
                  alt={university.name}
                  className="h-[500px] w-full object-cover"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Tuition Fees", university.tuition],
              ["Duration", university.duration],
              ["Intakes", university.intake],
              ["Country", university.country],
            ].map(([title, value]) => (
              <Reveal key={title}>
                <div className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    {title}
                  </p>

                  <h3 className="mt-5 text-3xl font-black leading-tight">
                    {value}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          {/* DETAILS */}
          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <Reveal>
              <div className="rounded-[3rem] border border-black/5 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                  Eligibility
                </p>

                <p className="mt-6 text-lg leading-9 text-black/70">
                  {university.eligibility}
                </p>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Scholarships
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70">
                    {university.scholarships}
                  </p>
                </div>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Campus Life
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70">
                    {university.campus}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={0.1}>
              <div className="rounded-[3rem] border border-black/5 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                  Career Opportunities
                </p>

                <p className="mt-6 text-lg leading-9 text-black/70">
                  {university.careers}
                </p>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Student Reviews
                  </p>

                  <div className="mt-8 space-y-5">
                    {university.reviews.map((review) => (
                      <div
                        key={review}
                        className="rounded-2xl border border-black/5 bg-[#F8F6F2] p-5"
                      >
                        <p className="leading-8 text-black/70">
                          “{review}”
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 pb-24 pt-10 md:px-6 md:pb-32">
        <div className="container-custom">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#F5A623]/15 via-white/[0.03] to-[#7C3AED]/10 p-10 shadow-[0_25px_100px_rgba(0,0,0,0.4)] backdrop-blur-3xl md:p-16"
            >
              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Start Your Journey
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  Ready to apply to {university.name}?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Get personalized admission guidance, scholarship assistance,
                  visa support, and application counselling from our expert
                  advisors.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Book Free Consultation
                  </Link>

                  <Link
                    href="/countries"
                    className="w-fit rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
                  >
                    Explore Countries
                  </Link>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}