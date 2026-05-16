"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const blogPosts = {
  "student-visa-guide": {
    title: "Complete Student Visa Guide for 2026",
    category: "Visa Guide",
    date: "May 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1600&auto=format&fit=crop",
    content: [
      {
        heading: "Understanding the Student Visa Process",
        text:
          "Applying for a student visa involves multiple stages including university admission confirmation, financial documentation, biometrics, and visa interviews depending on the country.",
      },
      {
        heading: "Required Documentation",
        text:
          "Students typically need passports, admission letters, financial proof, academic transcripts, English proficiency scores, medical records, and visa application forms.",
      },
      {
        heading: "Financial Planning",
        text:
          "Students should prepare tuition budgets, accommodation costs, insurance, and emergency expenses before beginning their study abroad journey.",
      },
      {
        heading: "Visa Interview Preparation",
        text:
          "Some countries require interviews to evaluate academic intent, financial readiness, and post-study plans. Preparation and confidence are essential.",
      },
    ],
  },

  "top-countries-international-students": {
    title: "Top Countries for International Students",
    category: "Study Abroad",
    date: "April 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1600&auto=format&fit=crop",
    content: [
      {
        heading: "Germany",
        text:
          "Germany remains one of the most attractive destinations due to affordable tuition fees, strong engineering programs, and post-study work opportunities.",
      },
      {
        heading: "Singapore",
        text:
          "Singapore offers globally recognized universities, innovation-driven programs, and strong international career exposure.",
      },
      {
        heading: "Romania",
        text:
          "Romania has become increasingly popular for affordable MBBS and healthcare-related education programs.",
      },
      {
        heading: "Choosing the Right Destination",
        text:
          "Students should consider budget, career opportunities, visa rules, culture, and long-term goals before selecting a destination.",
      },
    ],
  },

  "scholarships-students-should-know": {
    title: "Scholarships Every Student Should Know",
    category: "Scholarships",
    date: "March 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop",
    content: [
      {
        heading: "Merit-Based Scholarships",
        text:
          "Many universities reward students with strong academic records through tuition discounts and financial grants.",
      },
      {
        heading: "Government Scholarships",
        text:
          "Several countries provide international scholarships to attract talented global students.",
      },
      {
        heading: "University Grants",
        text:
          "Universities often provide internal funding opportunities for international students in selected programs.",
      },
      {
        heading: "Application Strategy",
        text:
          "Early applications and strong SOPs significantly improve scholarship success chances.",
      },
    ],
  },
  "mbbs-romania": {
  title: "Best MBBS Universities in Romania",
  category: "Medical Education",
  date: "February 2026",
  readTime: "9 min read",
  image:
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1600&auto=format&fit=crop",
  content: [
    {
      heading: "Why Romania for MBBS?",
      text:
        "Romania has become one of Europe’s fastest growing destinations for international medical students due to affordable tuition fees, globally recognized degrees, and modern medical universities.",
    },
    {
      heading: "Affordable Tuition Structure",
      text:
        "Compared to Western Europe, Romanian medical universities offer significantly lower tuition costs while maintaining strong educational standards and modern infrastructure.",
    },
    {
      heading: "English-Taught Programs",
      text:
        "Many universities provide complete MBBS programs in English, allowing international students to adapt comfortably during their studies.",
    },
    {
      heading: "Career Opportunities",
      text:
        "Graduates from Romanian medical universities can pursue opportunities across Europe and internationally depending on licensing regulations.",
    },
    {
      heading: "International Recognition",
      text:
        "Many Romanian medical universities are recognized internationally and attract students from across Asia, Africa, and Europe.",
    },
  ],
},

"scholarships-germany": {
  title: "How to Get Scholarships in Germany",
  category: "Scholarships",
  date: "January 2026",
  readTime: "7 min read",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  content: [
    {
      heading: "Understanding Scholarship Types",
      text:
        "Germany offers merit-based, government-funded, and university-specific scholarships for international students across multiple disciplines.",
    },
    {
      heading: "Academic Performance Matters",
      text:
        "Strong grades, extracurricular achievements, and leadership activities significantly improve scholarship selection chances.",
    },
    {
      heading: "Strong SOP and Motivation Letters",
      text:
        "A compelling Statement of Purpose helps universities understand your goals, ambitions, and academic vision.",
    },
    {
      heading: "Apply Early",
      text:
        "Early applications improve scholarship availability and increase chances of acceptance into competitive funding programs.",
    },
    {
      heading: "Research Opportunities",
      text:
        "Many German institutions provide funded research opportunities and assistantships for high-performing international students.",
    },
  ],
},

"student-accommodation-guide": {
  title: "Student Accommodation Guide Abroad",
  category: "Student Life",
  date: "December 2025",
  readTime: "6 min read",
  image:
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1600&auto=format&fit=crop",
  content: [
    {
      heading: "University Dormitories",
      text:
        "University housing remains one of the most affordable and convenient accommodation options for international students.",
    },
    {
      heading: "Private Student Residences",
      text:
        "Modern private residences provide additional facilities including gyms, study spaces, and social areas.",
    },
    {
      heading: "Budget Planning",
      text:
        "Students should account for rent, utilities, internet, transport, and food expenses while planning accommodation abroad.",
    },
    {
      heading: "Safety and Location",
      text:
        "Choosing accommodation close to universities and public transportation significantly improves student convenience and safety.",
    },
    {
      heading: "Shared Apartments",
      text:
        "Shared apartments are increasingly popular among international students due to lower costs and social flexibility.",
    },
  ],
},
};

const relatedArticles = [
  {
    title: "How to Get Scholarships in Germany",
    slug: "scholarships-germany",
  },
  {
    title: "Student Accommodation Guide Abroad",
    slug: "student-accommodation-guide",
  },
  {
    title: "Best MBBS Universities in Romania",
    slug: "mbbs-romania",
  },
];

import { use } from "react";

export default function BlogArticlePage({ params }) {
  const resolvedParams = use(params);
  const post = blogPosts[resolvedParams.slug];
  if (!post) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* GLOWS */}
      <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
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
<section className="relative px-5 pb-12 pt-36 md:px-6 md:pb-20 md:pt-40">

  <div className="container-custom relative z-10 mb-16">
    <Link
      href="/blog"
      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#111111]"
    >
      ← Back to Blogs
    </Link>
  </div>

  <div className="container-custom relative z-10 max-w-5xl">
    <Reveal>
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
          {post.category}
        </p>

        <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
          {post.title}
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.2em] text-white/50">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Reveal>
  </div>
</section>

      {/* FEATURE IMAGE */}
      <section className="relative px-5 md:px-6">
        <div className="container-custom">
          <Reveal>
            <div className="overflow-hidden rounded-[3rem]">
              <img
                src={post.image}
                alt={post.title}
                className="h-[300px] w-full object-cover md:h-[600px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom grid gap-16 lg:grid-cols-[1fr_340px]">
          {/* ARTICLE */}
          <div>
            <Reveal>
              <div className="space-y-16">
                {post.content.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-4xl font-black leading-tight tracking-[-0.03em]">
                      {section.heading}
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-black/65">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* SIDEBAR */}
          <div>
            <Reveal delay={0.1}>
              <div className="sticky top-28 space-y-8">
                {/* AUTHOR */}
                <div className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Written By
                  </p>

                  <h3 className="mt-4 text-2xl font-black text-[#111111]">
                    Global Study Team
                  </h3>

                  <p className="mt-4 leading-8 text-black/60">
                    International education experts helping students achieve
                    global academic success.
                  </p>
                </div>

                {/* RELATED */}
                <div className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Related Articles
                  </p>

                  <div className="mt-8 space-y-6">
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="block border-b border-black/5 pb-6 last:border-none"
                      >
                        <h4 className="text-xl font-black text-[#111111] transition hover:text-[#B45309]">
                          {article.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[2.5rem] bg-[#111111] p-8 text-white shadow-[0_20px_80px_rgba(0,0,0,0.15)]"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#F5A623]">
                    Need Guidance?
                  </p>

                  <h3 className="mt-4 text-3xl font-black leading-tight">
                    Speak with our study abroad experts.
                  </h3>

                  <p className="mt-5 leading-8 text-white/60">
                    Get personalized counselling for admissions, scholarships,
                    visas, and universities.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex rounded-full bg-[#F5A623] px-6 py-3 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Contact Us
                  </Link>
                </motion.div>
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
                  Explore your future abroad with expert guidance.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Connect with our advisors and discover global education
                  opportunities tailored to your academic goals.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Book Free Consultation
                  </Link>

                  <Link
                    href="/blog"
                    className="w-fit rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
                  >
                    Explore More Articles
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